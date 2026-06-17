import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { QdrantClient } from "@qdrant/js-client-rest";

const COLLECTION_NAME = "anthropic-docs";
const EMBEDDING_MODEL = "voyage-3-lite";
const TOP_K = 5;
const ANTHROPIC_MODEL = "claude-haiku-4-5-20251001";

const anthropic = new Anthropic();
const qdrant = new QdrantClient({ url: "http://localhost:6333" });

async function embedQuery(text: string): Promise<number[]> {
  const res = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: [text],
      model: EMBEDDING_MODEL,
      input_type: "query",
    }),
  });
  if (!res.ok) throw new Error(`Voyage error ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { data: { embedding: number[] }[] };
  return data.data[0].embedding;
}

type RetrievedChunk = {
  rank: number;
  score: number;
  source: string;
  chunk_index: number;
  text: string;
};

async function retrieve(query: string, k: number): Promise<RetrievedChunk[]> {
  const vector = await embedQuery(query);
  const hits = await qdrant.search(COLLECTION_NAME, {
    vector,
    limit: k,
    with_payload: true,
  });
  return hits.map((hit, i) => {
    const p = hit.payload as { source: string; chunk_index: number; text: string };
    return {
      rank: i + 1,
      score: hit.score,
      source: p.source,
      chunk_index: p.chunk_index,
      text: p.text,
    };
  });
}

function buildUserPrompt(question: string, chunks: RetrievedChunk[]): string {
  const contextBlocks = chunks
    .map(
      (c) =>
        `<chunk id="${c.rank}" source="${c.source}" chunk_index="${c.chunk_index}">\n${c.text}\n</chunk>`
    )
    .join("\n\n");
  return `<context>\n${contextBlocks}\n</context>\n\n<question>\n${question}\n</question>`;
}

const SYSTEM_PROMPT = `You are a helpful technical assistant answering questions about the Anthropic Claude API and developer documentation.

Answer the user's question using ONLY the information provided in the <context> block. Each chunk has a numeric id; when you use information from a chunk, cite it inline like [1] or [2,3].

If the context does not contain enough information to answer the question, say so clearly and explain what's missing — do not make up information.

Be concise and direct. Prefer short, well-structured answers over long ones.`;

async function main() {
  const question = process.argv.slice(2).join(" ").trim();
  if (!question) {
    console.error('Usage: npx tsx src/ask.ts "your question"');
    process.exit(1);
  }

  console.log(`\n=== Question ===\n${question}\n`);

  console.log("=== Retrieved chunks ===");
  const chunks = await retrieve(question, TOP_K);
  for (const c of chunks) {
    console.log(
      `[${c.rank}] score=${c.score.toFixed(4)}  ${c.source}::${c.chunk_index}`
    );
  }

  console.log("\n=== Answer ===\n");
  const stream = anthropic.messages.stream({
    model: ANTHROPIC_MODEL,
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: buildUserPrompt(question, chunks) }],
  });

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      process.stdout.write(event.delta.text);
    }
  }

  const final = await stream.finalMessage();
  console.log(`\n\n=== Usage ===`);
  console.log(final.usage);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});