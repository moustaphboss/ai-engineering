import { Octokit } from "@octokit/rest";

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN environment variable is not set");

export const octokit = new Octokit({ auth: token });