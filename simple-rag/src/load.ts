import fs from "node:fs/promises";
import path from "node:path";
import TurndownService from "turndown";

const urls = [
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts",
  "https://docs.claude.com/en/docs/build-with-claude/tool-use/overview",
  "https://docs.claude.com/en/docs/build-with-claude/streaming",
  "https://docs.claude.com/en/docs/build-with-claude/embeddings",
  "https://docs.claude.com/en/docs/build-with-claude/prompt-caching",
  "https://docs.claude.com/en/docs/build-with-claude/structured-outputs",
  "https://docs.claude.com/en/docs/build-with-claude/vision",
  "https://docs.claude.com/en/docs/agents-and-tools/computer-use",
  "https://docs.claude.com/en/docs/agents-and-tools/mcp",
  "https://docs.claude.com/en/docs/about-claude/models/overview",
];

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
});

function urlToFilename(url: string): string {
  const slug = url
    .replace("https://docs.claude.com/en/docs/", "")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9-]/gi, "-");
  return `${slug}.md`;
}

async function main() {
  await fs.mkdir("corpus", { recursive: true });
  for (const url of urls) {
    console.log(`Fetching ${url}`);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  ✗ ${res.status} ${res.statusText}`);
      continue;
    }
    const html = await res.text();
    const md = turndown.turndown(html);
    const filename = urlToFilename(url);
    await fs.writeFile(path.join("corpus", filename), md);
    console.log(`  → corpus/${filename} (${md.length} chars)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});