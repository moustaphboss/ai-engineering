# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a monorepo of independent AI engineering projects, each with its own `package.json`, `node_modules`, and `.env`. There is no shared build or test runner at the root.

```
simple-rag/          # RAG pipeline using Voyage AI + Qdrant + Claude
mcp-server/weather/  # MCP server exposing weather tools via stdio
playground/
  anthropic-sdk-basics/   # Basic Claude API exercises (completion, streaming, tool use)
  langchain-basics/       # LangChain exploration
```

## Running scripts

All projects use `tsx` for direct TypeScript execution — no compile step needed for development.

```bash
# simple-rag
cd simple-rag
npx tsx src/chunk.ts          # chunk corpus → chunks.json
npx tsx src/embed.ts          # embed chunks → Qdrant collection
npx tsx src/ask.ts "question" # query the RAG pipeline

# mcp-server/weather (needs a build step)
cd mcp-server/weather
npm run build                 # tsc → build/index.js

# playground scripts
cd playground/anthropic-sdk-basics
npx tsx src/01-basic-completion.ts
```

## Environment variables

Each project with network calls has a `.env` file (not committed). Required keys:

- `simple-rag/.env`: `ANTHROPIC_API_KEY`, `VOYAGE_API_KEY`
- `playground/anthropic-sdk-basics/.env`: `ANTHROPIC_API_KEY`

## simple-rag architecture

The pipeline has four sequential stages, each a standalone script:

1. **`load.ts`** — fetches/converts source docs into `corpus/*.md`
2. **`chunk.ts`** — tokenizes with tiktoken (500-token chunks, 50-token overlap) → `chunks.json`
3. **`embed.ts`** — sends chunks to Voyage AI (`voyage-3-lite`, 512-dim), upserts into Qdrant collection `anthropic-docs`
4. **`ask.ts`** — embeds a query, retrieves top-5 chunks from Qdrant, streams a grounded answer from Claude (Haiku) with inline citations

Qdrant must be running locally on `http://localhost:6333` before running `embed.ts` or `ask.ts`.

## mcp-server/weather architecture

Implements an MCP server using `@modelcontextprotocol/sdk` over stdio transport. Exposes two tools:
- `get_alerts` — queries `api.weather.gov/alerts` by US state code
- `get_forecast` — queries `api.weather.gov/points/{lat},{lon}` then follows the returned forecast URL

Uses ESM (`"type": "module"`) with `Node16` module resolution, unlike the other projects which are CommonJS. Build output goes to `build/index.js`.
