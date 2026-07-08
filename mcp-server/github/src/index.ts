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

server.registerTool(
  "list_issues",
  {
    description: "List issues for a GitHub repository. Can filter by state (open, closed, or all).",
    inputSchema: {
      owner: z.string().describe("Repository owner (username or org)"),
      repo: z.string().describe("Repository name"),
      state: z.enum(["open", "closed", "all"]).default("open").describe("Filter by issue state"),
    },
  },
  async ({ owner, repo, state }) => {
    try {
      const { data } = await octokit.issues.listForRepo({
        owner,
        repo,
        state,
        per_page: 30,
      });

      // Octokit returns PRs in the issues endpoint too — filter them out
      const issues = data.filter((i) => !i.pull_request);

      if (issues.length === 0) {
        return { content: [{ type: "text", text: `No ${state} issues in ${owner}/${repo}.` }] };
      }

      const text = issues
        .map(
          (i) =>
            `#${i.number}: ${i.title} [${i.state}]\n` +
            `  opened by ${i.user?.login ?? "unknown"} — ${new Date(i.created_at).toDateString()}\n` +
            `  labels: ${i.labels.map((l: any) => (typeof l === "string" ? l : l.name)).join(", ") || "none"}\n` +
            `  ${i.html_url}`
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