import "dotenv/config";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { octokit } from "./github.js";
import { z } from "zod";

const server = new McpServer({
  name: "github",
  version: "1.0.0",
});

server.registerTool(
  "list_repos",
  {
    description:
      "List GitHub repositories for a user. If no username is provided, lists the authenticated user's repos including private ones.",
    inputSchema: {
      username: z.string().optional().describe("GitHub username. Omit to list your own repos."),
    },
  },
  async ({ username }) => {
    try {
      const { data } = username
        ? await octokit.repos.listForUser({ username, per_page: 30 })
        : await octokit.repos.listForAuthenticatedUser({ per_page: 30 });

      if (data.length === 0) {
        return { content: [{ type: "text", text: "No repositories found." }] };
      }

      const text = data
        .map(
          (r) =>
            `${r.private ? "[private]" : "[public]"} ${r.full_name}\n` +
            `  ${r.description ?? "No description"}\n` +
            `  ⭐ ${r.stargazers_count}  lang: ${r.language ?? "—"}  ${r.html_url}`
        )
        .join("\n\n");

      return { content: [{ type: "text", text }] };
    } catch (err: any) {
      return { content: [{ type: "text", text: `Error: ${err.message}` }] };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("GitHub MCP Server running on stdio");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});