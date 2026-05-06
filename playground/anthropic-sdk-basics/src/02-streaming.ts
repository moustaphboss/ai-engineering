import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function main() {
  const stream = client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: "You are a concise technical writer. Answer in 3 sentences max.",
    messages: [
      {
        role: "user",
        content: "Explain what an embedding is and why it's useful for search.",
      },
    ],
  });

  // Iterate over SSE events as they arrive
  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      process.stdout.write(event.delta.text);
    }
  }

  const final = await stream.finalMessage();
  console.log("\n\n--- usage ---");
  console.log(final.usage);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});