import fs from "node:fs/promises";
import path from "node:path";
import { encoding_for_model } from "tiktoken";

const CORPUS_DIR = "corpus";
const OUTPUT_FILE = "chunks.json";
const CHUNK_SIZE = 500;   // tokens
const OVERLAP = 50;       // tokens

type Chunk = {
  id: string;
  source: string;
  chunk_index: number;
  text: string;
  token_count: number;
};

async function main() {
  const enc = encoding_for_model("text-embedding-3-small");
  const decoder = new TextDecoder();

  const files = (await fs.readdir(CORPUS_DIR))
    .filter((f) => f.endsWith(".md"))
    .sort();

  const allChunks: Chunk[] = [];

  for (const file of files) {
    const text = await fs.readFile(path.join(CORPUS_DIR, file), "utf-8");
    const tokens = enc.encode(text);

    let chunkIndex = 0;
    for (let start = 0; start < tokens.length; start += CHUNK_SIZE - OVERLAP) {
      const end = Math.min(start + CHUNK_SIZE, tokens.length);
      const slice = tokens.slice(start, end);
      const chunkText = decoder.decode(enc.decode(slice));

      allChunks.push({
        id: `${file}::${chunkIndex}`,
        source: file,
        chunk_index: chunkIndex,
        text: chunkText,
        token_count: slice.length,
      });

      chunkIndex++;
      if (end === tokens.length) break; // last chunk, stop
    }
    console.log(`${file}: ${tokens.length} tokens → ${chunkIndex} chunks`);
  }

  enc.free();
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(allChunks, null, 2));
  console.log(`\nWrote ${allChunks.length} chunks to ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});