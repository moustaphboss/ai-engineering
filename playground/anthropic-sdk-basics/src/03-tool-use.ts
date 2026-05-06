import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const tools: Anthropic.Tool[] = [
  {
    name: "get_current_time",
    description:
      "Get the current time in a given IANA timezone (e.g. 'Europe/Berlin', 'America/New_York').",
    input_schema: {
      type: "object",
      properties: {
        timezone: {
          type: "string",
          description: "IANA timezone name, e.g. 'Europe/Berlin'",
        },
      },
      required: ["timezone"],
    },
  },
];

// Real implementation of the tool
function getCurrentTime(timezone: string): string {
  return new Date().toLocaleString("en-US", { timeZone: timezone });
}

async function main() {
  const messages: Anthropic.MessageParam[] = [
    {
      role: "user",
      content: "What is tha capital city of Senegal?",
    },
  ];

  let response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    tools,
    messages,
  });

  let turn = 1;
  console.log(`--- turn ${turn} (stop_reason: ${response.stop_reason}) ---`);
  console.log(JSON.stringify(response.content, null, 2));

  // The tool-use loop
  while (response.stop_reason === "tool_use") {
    // Add the assistant turn (with its tool_use blocks) to history
    messages.push({ role: "assistant", content: response.content });

    // Execute every tool_use block, collect results
    const toolResults: Anthropic.ToolResultBlockParam[] = [];
    for (const block of response.content) {
      if (block.type === "tool_use" && block.name === "get_current_time") {
        const input = block.input as { timezone: string };
        const result = getCurrentTime(input.timezone);
        console.log(`\n  > executed get_current_time(${input.timezone}) = ${result}`);
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: result,
        });
      }
    }

    // Send results back as a user turn
    messages.push({ role: "user", content: toolResults });

    response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      tools,
      messages,
    });

    turn++;
    console.log(`\n--- turn ${turn} (stop_reason: ${response.stop_reason}) ---`);
    console.log(JSON.stringify(response.content, null, 2));
  }

  console.log("\n--- final answer ---");
  for (const block of response.content) {
    if (block.type === "text") console.log(block.text);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});