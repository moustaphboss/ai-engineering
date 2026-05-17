import "dotenv/config";
import { QdrantClient } from "@qdrant/js-client-rest";

const COLLECTION_NAME = "anthropic-docs";
const EMBEDDING_MODEL = "voyage-3-lite";
const TOP_K = 5;

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
  if (!res.ok) {
    throw new Error(`Voyage API error ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as { data: { embedding: number[] }[] };
  return data.data[0].embedding;
}

async function main() {
  const query = process.argv.slice(2).join(" ").trim();
  if (!query) {
    console.error('Usage: npx tsx src/search.ts "your question here"');
    process.exit(1);
  }

  console.log(`\nQuery: "${query}"\n`);

  const queryVector = await embedQuery(query);

  const client = new QdrantClient({ url: "http://localhost:6333" });
  const results = await client.search(COLLECTION_NAME, {
    vector: queryVector,
    limit: TOP_K,
    with_payload: true,
  });

  console.log(`Top ${TOP_K} matches:\n`);
  for (const [i, hit] of results.entries()) {
    const p = hit.payload as { chunk_id: string; source: string; text: string };
    const preview = p.text.slice(0, 220).replace(/\s+/g, " ").trim();
    console.log(`#${i + 1}  score=${hit.score.toFixed(4)}  ${p.chunk_id}`);
    console.log(`    ${preview}...\n`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});