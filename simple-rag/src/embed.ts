import "dotenv/config";
import fs from "node:fs/promises";
import { QdrantClient } from "@qdrant/js-client-rest";

const COLLECTION_NAME = "anthropic-docs";
const EMBEDDING_MODEL = "voyage-3-lite";
const EMBEDDING_DIM = 512;
const BATCH_SIZE = 64;

type Chunk = {
  id: string;
  source: string;
  chunk_index: number;
  text: string;
  token_count: number;
};

async function embedBatch(texts: string[]): Promise<number[][]> {
  const res = await fetch("https://api.voyageai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.VOYAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: texts,
      model: EMBEDDING_MODEL,
      input_type: "document",
    }),
  });
  if (!res.ok) {
    throw new Error(`Voyage API error ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as { data: { embedding: number[] }[] };
  return data.data.map((d) => d.embedding);
}

async function main() {
  const chunks: Chunk[] = JSON.parse(
    await fs.readFile("chunks.json", "utf-8")
  );
  console.log(`Loaded ${chunks.length} chunks from chunks.json`);

  const client = new QdrantClient({ url: "http://localhost:6333" });

  // Reset the collection so re-runs start clean
  try {
    await client.deleteCollection(COLLECTION_NAME);
    console.log(`Deleted existing collection: ${COLLECTION_NAME}`);
  } catch {
    // didn't exist yet
  }
  await client.createCollection(COLLECTION_NAME, {
    vectors: { size: EMBEDDING_DIM, distance: "Cosine" },
  });
  console.log(`Created collection ${COLLECTION_NAME} (${EMBEDDING_DIM}-dim, cosine distance)`);

  // Embed and upsert in batches
  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const texts = batch.map((c) => c.text);

    console.log(`Embedding ${i}–${i + batch.length - 1}...`);
    const vectors = await embedBatch(texts);

    await client.upsert(COLLECTION_NAME, {
      points: batch.map((chunk, idx) => ({
        id: i + idx, // Qdrant requires integer or UUID ids
        vector: vectors[idx],
        payload: {
          chunk_id: chunk.id,
          source: chunk.source,
          chunk_index: chunk.chunk_index,
          text: chunk.text,
          token_count: chunk.token_count,
        },
      })),
    });
  }

  const info = await client.getCollection(COLLECTION_NAME);
  console.log(`\nDone. Collection now has ${info.points_count} points.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});