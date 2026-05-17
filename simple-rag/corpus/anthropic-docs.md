# Anthropic Developer Documentation - Full Content

This file provides comprehensive documentation with full rendered content.

## Root URL

Claude Developer Platform Console (Requires login)

https://platform.claude.com

## Available Languages on Website

The full documentation is available in the following languages on https://platform.claude.com/docs:

- English (en) - 1414 pages - ✓ Full content included below
- German (Deutsch) (de) - 132 pages - Visit website for content
- Spanish (Español) (es) - 132 pages - Visit website for content
- French (Français) (fr) - 132 pages - Visit website for content
- Italian (Italiano) (it) - 132 pages - Visit website for content
- Japanese (日本語) (ja) - 132 pages - Visit website for content
- Korean (한국어) (ko) - 132 pages - Visit website for content
- Portuguese (Português) (pt-BR) - 132 pages - Visit website for content
- Russian (Русский) (ru) - 132 pages - Visit website for content
- Chinese Simplified (简体中文) (zh-CN) - 132 pages - Visit website for content
- Chinese Traditional (繁體中文) (zh-TW) - 132 pages - Visit website for content
- Indonesian (Bahasa Indonesia) (id) - 132 pages - Visit website for content

---

# English Documentation - Full Content

## Messages

### First steps

---

# Get started with Claude

URL: https://platform.claude.com/docs/en/get-started

# Get started with Claude

Make your first API call to Claude and build a simple web search assistant.

---

## Prerequisites

- An Anthropic [Console account](/)

## Call the API

<Tabs>
  <Tab title="cURL">
    <Steps>
      <Step title="Set your API key">
        Get your API key from the [Claude Console](/settings/keys) and set it as an environment variable:

        ```bash
        export ANTHROPIC_API_KEY='your-api-key-here'
        ```

        To persist the key across shell sessions, add the line to your shell profile (such as `~/.zshrc` or `~/.bashrc`).
      </Step>

      <Step title="Make your first API call">
        Run this command to create a simple web search assistant:

        ```bash cURL
        curl https://api.anthropic.com/v1/messages \
          -H "Content-Type: application/json" \
          -H "x-api-key: $ANTHROPIC_API_KEY" \
          -H "anthropic-version: 2023-06-01" \
          -d '{
            "model": "claude-opus-4-7",
            "max_tokens": 1000,
            "messages": [
              {
                "role": "user",
                "content": "What should I search for to find the latest developments in renewable energy?"
              }
            ]
          }'
        ```

        **Example output:**
        ```json Output
        {
          "id": "msg_01HCDu5LRGeP2o7s2xGmxyx8",
          "type": "message",
          "role": "assistant",
          "content": [
            {
              "type": "text",
              "text": "Here are some effective search strategies to find the latest renewable energy developments:\n\n## Search Terms to Use:\n- \"renewable energy news 2024\"\n- \"clean energy breakthrough\"\n- \"solar/wind/battery technology advances\"\n- \"green energy innovations\"\n- \"climate tech developments\"\n- \"energy storage solutions\"\n\n## Best Sources to Check:\n\n**News & Industry Sites:**\n- Renewable Energy World\n- GreenTech Media (now Wood Mackenzie)\n- Energy Storage News\n- CleanTechnica\n- PV Magazine (for solar)\n- WindPower Engineering & Development..."
            }
          ],
          "model": "claude-opus-4-7",
          "stop_reason": "end_turn",
          "usage": {
            "input_tokens": 21,
            "output_tokens": 305
          }
        }
        ```
      </Step>
    </Steps>
  </Tab>

  <Tab title="CLI">
    <Steps>
      <Step title="Install the CLI">
        Install the Anthropic CLI with Homebrew:

        ```bash
        brew install anthropics/tap/ant
        ```

        For other installation methods, see [Installation](/docs/en/api/sdks/cli#installation) in the CLI reference.
      </Step>

      <Step title="Authenticate">
        Log in with your Anthropic account:

        ```bash
        ant auth login
        ```

        This opens a browser-based OAuth flow. After authorizing, confirm your credential with:

        ```bash
        ant auth status
        ```

        On a remote host without a browser, pass `--no-browser` to get a URL you can open on another device, then paste the returned code back into the terminal. If `ANTHROPIC_API_KEY` is set in your environment, it takes precedence over the login credentials. For non-interactive environments such as CI, see [Authentication](/docs/en/api/sdks/cli#authentication).
      </Step>

      <Step title="Make your first API call">
        Run this command to create a simple web search assistant:

        ```bash
        ant messages create \
          --model claude-opus-4-7 \
          --max-tokens 1000 \
          --message '{
            role: user,
            content: "What should I search for to find the latest developments in renewable energy?"
          }'
        ```

        **Example output:**
        ```json Output
        {
          "id": "msg_01HCDu5LRGeP2o7s2xGmxyx8",
          "type": "message",
          "role": "assistant",
          "content": [
            {
              "type": "text",
              "text": "Here are some effective search strategies to find the latest renewable energy developments:\n\n## Search Terms to Use:\n- \"renewable energy news 2024\"\n- \"clean energy breakthrough\"\n- \"solar/wind/battery technology advances\"\n- \"green energy innovations\"\n- \"climate tech developments\"\n- \"energy storage solutions\"\n\n## Best Sources to Check:\n\n**News & Industry Sites:**\n- Renewable Energy World\n- GreenTech Media (now Wood Mackenzie)\n- Energy Storage News\n- CleanTechnica\n- PV Magazine (for solar)\n- WindPower Engineering & Development..."
            }
          ],
          "model": "claude-opus-4-7",
          "stop_reason": "end_turn",
          "usage": {
            "input_tokens": 21,
            "output_tokens": 305
          }
        }
        ```
      </Step>
    </Steps>
  </Tab>

  <Tab title="Python">
    <Steps>
      <Step title="Set your API key">
        Get your API key from the [Claude Console](/settings/keys) and set it as an environment variable:

        ```bash
        export ANTHROPIC_API_KEY='your-api-key-here'
        ```

        To persist the key across shell sessions, add the line to your shell profile (such as `~/.zshrc` or `~/.bashrc`).
      </Step>

      <Step title="Install the SDK">
        Install the Anthropic Python SDK:

        ```bash
        pip install anthropic
        ```
      </Step>

      <Step title="Create your code">
        Save this as `quickstart.py`:

        ```python
        import anthropic

        client = anthropic.Anthropic()

        message = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=1000,
            messages=[
                {
                    "role": "user",
                    "content": "What should I search for to find the latest developments in renewable energy?",
                }
            ],
        )
        print(message.content)
        ```
      </Step>

      <Step title="Run your code">
        ```bash
        python quickstart.py
        ```

        **Example output:**
        ```text Output
        [
            TextBlock(
                text='Here are some effective search strategies for finding the latest renewable energy developments:\n\n**Search Terms to Use:**\n- "renewable energy news 2024"\n- "clean energy breakthroughs"\n- "solar/wind/battery technology advances"\n- "energy storage innovations"\n- "green hydrogen developments"\n- "renewable energy policy updates"\n\n**Reliable Sources to Check:**\n- **News & Analysis:** Reuters Energy, Bloomberg New Energy Finance, Greentech Media, Energy Storage News\n- **Industry Publications:** Renewable Energy World, PV Magazine, Wind Power Engineering\n- **Research Organizations:** International Energy Agency (IEA), National Renewable Energy Laboratory (NREL)\n- **Government Sources:** Department of Energy websites, EPA clean energy updates\n\n**Specific Topics to Explore:**\n- Perovskite and next-gen solar cells\n- Offshore wind expansion\n- Grid-scale battery storage\n- Green hydrogen production\n- Carbon capture technologies\n- Smart grid innovations\n- Energy policy changes and incentives...',
                type="text",
            )
        ]
        ```
      </Step>
    </Steps>
  </Tab>

  <Tab title="TypeScript">
    <Steps>
      <Step title="Set your API key">
        Get your API key from the [Claude Console](/settings/keys) and set it as an environment variable:

        ```bash
        export ANTHROPIC_API_KEY='your-api-key-here'
        ```

        To persist the key across shell sessions, add the line to your shell profile (such as `~/.zshrc` or `~/.bashrc`).
      </Step>

      <Step title="Install the SDK">
        Install the Anthropic TypeScript SDK:

        ```bash
        npm install @anthropic-ai/sdk
        ```
      </Step>

      <Step title="Create your code">
        Save this as `quickstart.ts`:

```typescript
import Anthropic from "@anthropic-ai/sdk";

async function main() {
  const anthropic = new Anthropic();

  const msg = await anthropic.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content:
          "What should I search for to find the latest developments in renewable energy?"
      }
    ]
  });
  console.log(msg);
}

main().catch(console.error);
        ```
      </Step>

      <Step title="Run your code">
        ```bash
        npx tsx quickstart.ts
        ```

        **Example output:**
        ```javascript Output hidelines={1..2}
        const _ =
          // output
          {
            id: "msg_01ThFHzad6Bh4TpQ6cHux9t8",
            type: "message",
            role: "assistant",
            model: "claude-opus-4-7",
            content: [
              {
                type: "text",
                text:
                  "Here are some effective search strategies to find the latest renewable energy developments:\n\n" +
                  "## Search Terms to Use:\n" +
                  '- "renewable energy news 2024"\n' +
                  '- "clean energy breakthroughs"\n' +
                  '- "solar wind technology advances"\n' +
                  '- "energy storage innovations"\n' +
                  '- "green hydrogen developments"\n' +
                  '- "offshore wind projects"\n' +
                  '- "battery technology renewable"\n\n' +
                  "## Best Sources to Check:\n\n" +
                  "**News & Industry Sites:**\n" +
                  "- Renewable Energy World\n" +
                  "- CleanTechnica\n" +
                  "- GreenTech Media (now Wood Mackenzie)\n" +
                  "- Energy Storage News\n" +
                  "- PV Magazine (for solar)..."
              }
            ],
            stop_reason: "end_turn",
            usage: {
              input_tokens: 21,
              output_tokens: 302
            }
          }
        ```
      </Step>
    </Steps>
  </Tab>

  <Tab title="Java">
    <Steps>
      <Step title="Set your API key">
        Get your API key from the [Claude Console](/settings/keys) and set it as an environment variable:

        ```bash
        export ANTHROPIC_API_KEY='your-api-key-here'
        ```

        To persist the key across shell sessions, add the line to your shell profile (such as `~/.zshrc` or `~/.bashrc`).
      </Step>

      <Step title="Set up your project">
        You need a JDK (25 or later) and either [Gradle](https://gradle.org/install/) or [Maven](https://maven.apache.org/install.html) on your `PATH`. Create a directory for your project with a Java source directory inside it:

        ```bash
        mkdir -p claude-quickstart/src/main/java && cd claude-quickstart
        ```

        Then add a build file. Find the current SDK version on [Maven Central](https://central.sonatype.com/artifact/com.anthropic/anthropic-java).

        <Tabs>
          <Tab title="Gradle">
            Save this as `build.gradle.kts`:

            ```kotlin
            plugins {
                application
            }

            repositories {
                mavenCentral()
            }

            java {
                toolchain {
                    languageVersion = JavaLanguageVersion.of(25)
                }
            }

            dependencies {
                implementation("com.anthropic:anthropic-java:2.32.0")
            }

            application {
                mainClass = "QuickStart"
            }
            ```
          </Tab>
          <Tab title="Maven">
            Save this as `pom.xml`:

            ```xml
            <project xmlns="http://maven.apache.org/POM/4.0.0">
              <modelVersion>4.0.0</modelVersion>
              <groupId>com.example</groupId>
              <artifactId>quickstart</artifactId>
              <version>1.0-SNAPSHOT</version>
              <properties>
                <maven.compiler.release>25</maven.compiler.release>
                <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
              </properties>
              <dependencies>
                <dependency>
                  <groupId>com.anthropic</groupId>
                  <artifactId>anthropic-java</artifactId>
                  <version>2.32.0</version>
                </dependency>
              </dependencies>
            </project>
            ```
          </Tab>
        </Tabs>
      </Step>

      <Step title="Create your code">
        Save this as `QuickStart.java` in your project's Java source directory (usually `src/main/java/`):

        ```java
        import com.anthropic.client.okhttp.AnthropicOkHttpClient;
        import com.anthropic.models.messages.Message;
        import com.anthropic.models.messages.MessageCreateParams;
        import com.anthropic.models.messages.Model;

        static void main() {
            var client = AnthropicOkHttpClient.fromEnv();

            var params = MessageCreateParams.builder()
                .model(Model.CLAUDE_OPUS_4_7)
                .maxTokens(1000)
                .addUserMessage(
                    "What should I search for to find the latest developments in renewable energy?"
                )
                .build();

            Message message = client.messages().create(params);
            IO.println(message.content());
        }
        ```
      </Step>

      <Step title="Run your code">
        <Tabs>
          <Tab title="Gradle">
            ```bash
            gradle run
            ```
          </Tab>
          <Tab title="Maven">
            ```bash
            mvn compile exec:java -Dexec.mainClass=QuickStart
            ```
          </Tab>
        </Tabs>

        **Example output:**
        ```text Output
        [ContentBlock{text=TextBlock{text=Here are some effective search strategies to find the latest renewable energy developments:

        ## Search Terms to Use:
        - "renewable energy news 2024"
        - "clean energy breakthroughs"
        - "solar/wind/battery technology advances"
        - "energy storage innovations"
        - "green hydrogen developments"
        - "renewable energy policy updates"

        ## Best Sources to Check:
        - **News & Analysis:** Reuters Energy, Bloomberg New Energy Finance, Greentech Media
        - **Industry Publications:** Renewable Energy World, PV Magazine, Wind Power Engineering
        - **Research Organizations:** International Energy Agency (IEA), National Renewable Energy Laboratory (NREL)
        - **Government Sources:** Department of Energy websites, EPA clean energy updates

        ## Specific Topics to Explore:
        - Perovskite and next-gen solar cells
        - Offshore wind expansion
        - Grid-scale battery storage
        - Green hydrogen production..., type=text}}]
        ```
      </Step>
    </Steps>
  </Tab>
</Tabs>

## Next steps

You made your first API call. Next, learn the Messages API patterns you'll use in every Claude integration.

<Card title="Working with the Messages API" icon="messages" href="/docs/en/build-with-claude/working-with-messages">
  Learn multi-turn conversations, system prompts, stop reasons, and other core patterns.
</Card>

Once you're comfortable with the basics, explore further:

<CardGroup cols={3}>
  <Card title="Models overview" icon="brain" href="/docs/en/about-claude/models/overview">
    Compare Claude models by capability and cost.
  </Card>
  <Card title="Features overview" icon="list" href="/docs/en/build-with-claude/overview">
    Browse all Claude capabilities: tools, context management, structured outputs, and more.
  </Card>
  <Card title="Client SDKs" icon="code-brackets" href="/docs/en/api/client-sdks">
    Reference documentation for Python, TypeScript, Java, and other client libraries.
  </Card>
</CardGroup>

---

# Intro to Claude

URL: https://platform.claude.com/docs/en/intro

# Intro to Claude

Claude is a highly performant, trustworthy, and intelligent AI platform built by Anthropic. Claude excels at tasks involving language, reasoning, analysis, coding, and more.

---

<Tip>

The latest generation of Claude models:

**Claude Opus 4.7** - Our most capable model for complex reasoning and agentic coding, with a step-change jump over Claude Opus 4.6. [Learn more](https://www.anthropic.com/news/claude-opus-4-7).

**Claude Sonnet 4.6** - Frontier intelligence at scale—built for coding, agents, and enterprise workflows. [Learn more](https://www.anthropic.com/news/claude-sonnet-4-6).

**Claude Haiku 4.5** - Fastest model with near-frontier intelligence. [Learn more](https://www.anthropic.com/news/claude-haiku-4-5).

</Tip>

<Note>
Looking to chat with Claude? Visit [claude.ai](https://www.claude.ai).
</Note>

Anthropic offers two ways to build with Claude, each suited to different use cases:

| | Messages API | Claude Managed Agents |
|---|---|---|
| **What it is** | Direct model prompting access | Pre-built, configurable agent harness that runs in managed infrastructure |
| **Best for** | Custom agent loops and fine-grained control | Long-running tasks and asynchronous work |
| **Learn more** | [Messages API docs](/docs/en/build-with-claude/working-with-messages) | [Claude Managed Agents docs](/docs/en/managed-agents/overview) |

## Recommended path for new developers

Follow these steps to go from zero to a working Claude integration.

<Steps>
  <Step title="Make your first API call">
    Set up your environment, install an SDK, and send your first message to Claude.

    [Go to the quickstart](/docs/en/get-started)
  </Step>
  <Step title="Understand the Messages API">
    Learn the core request and response structure, including multi-turn conversations, system prompts, and stop reasons.

    [Read the Messages API guide](/docs/en/build-with-claude/working-with-messages)
  </Step>
  <Step title="Choose the right model">
    Compare Claude models by capability and cost to pick the best fit for your use case.

    [See the models overview](/docs/en/about-claude/models/overview)
  </Step>
  <Step title="Explore features and tools">
    Discover what Claude can do: extended thinking, web search, file handling, structured outputs, and more.

    [Browse the features overview](/docs/en/build-with-claude/overview)
  </Step>
</Steps>

---

## Develop with Claude

Anthropic provides developer tools to help you build and scale applications with Claude.

<CardGroup cols={3}>
  <Card title="Developer Console" icon="computer" href="/">
    Prototype and test prompts in your browser with the Workbench and prompt generator.
  </Card>
  <Card title="API Reference" icon="code" href="/docs/en/api/overview">
    Explore the full Claude API and client SDK documentation.
  </Card>
  <Card title="Claude Cookbook" icon="chef-hat" href="https://platform.claude.com/cookbooks">
    Learn with interactive Jupyter notebooks covering PDFs, embeddings, and more.
  </Card>
</CardGroup>

---

## Key capabilities

Claude can assist with many tasks that involve text, code, and images.

<CardGroup cols={2}>
  <Card title="Text and code generation" icon="text-aa" href="/docs/en/build-with-claude/overview">
    Summarize text, answer questions, extract data, translate text, and explain and generate code.
  </Card>
  <Card title="Vision" icon="image" href="/docs/en/build-with-claude/vision">
    Process and analyze visual input and generate text and code from images.
  </Card>
</CardGroup>

---

## Support

<CardGroup cols={2}>
  <Card title="Help Center" icon="help" href="https://support.claude.com/en/">
    Find answers to frequently asked account and billing questions.
  </Card>

  <Card title="Service Status" icon="chart" href="https://status.claude.com">
    Check the status of Anthropic services.
  </Card>
</CardGroup>

### Building with Claude

---

# Features overview

URL: https://platform.claude.com/docs/en/build-with-claude/overview

# Features overview

Explore Claude's advanced features and capabilities.

---

Claude's API surface is organized into five areas:

- **Model capabilities:** Control how Claude reasons and formats responses.
- **Tools:** Let Claude take actions on the web or in your environment.
- **Tool infrastructure:** Handles discovery and orchestration at scale.
- **Context management:** Keeps long-running sessions efficient.
- **Files and assets:** Manage the documents and data you provide to Claude.

If you're new, start with [model capabilities](#model-capabilities) and [tools](#tools). Return to the other sections when you're ready to optimize cost, latency, or scale.

For administration and governance, see the [Admin API](/docs/en/manage-claude/admin-api), the [Usage and Cost API](/docs/en/manage-claude/usage-cost-api), and the [Compliance API](/docs/en/manage-claude/compliance-api).

## Feature availability

Features on the Claude Platform are assigned one of the following availability classifications per platform (shown in the Availability column of each following table). Not all features pass through every stage. A feature may enter at any classification and may skip stages.

| Classification | Description |
|----------------|-------------|
| **Beta**<sup>*</sup> | Preview features used for gathering feedback and iterating on a less mature use case. Availability may be limited, including through sign-up requirements or waitlists, and may not be publicly announced. <br/><br/> Features may change significantly or be discontinued based on feedback. Not guaranteed for ongoing production use. Breaking changes are possible with notice, and some platform-specific limitations may apply. Beta features on the Claude API and [Claude Platform on AWS](/docs/en/build-with-claude/claude-platform-on-aws) have a [beta header](/docs/en/api/beta-headers). |
| **Generally available (GA)** | Feature is stable, fully supported, and recommended for production use. Should not have a beta header or other indicator that the feature is in a preview state. Covered by standard API [versioning](/docs/en/api/versioning) guarantees. |
| **Deprecated** | Feature is still functional but no longer recommended. A migration path and removal timeline are provided. |
| **Retired** | Feature is no longer available. |

_<sup>*</sup> May carry a qualifier indicating narrower availability or added constraints (for example, "beta: research preview"). See the feature's page for details._

**Platform labels:** Claude API (Anthropic first-party) · [Claude Platform on AWS](/docs/en/build-with-claude/claude-platform-on-aws) (Anthropic-operated on AWS) · [Bedrock](/docs/en/build-with-claude/claude-in-amazon-bedrock) (AWS-operated) · [Vertex AI](/docs/en/build-with-claude/claude-on-vertex-ai) (Google-operated) · [Microsoft Foundry](/docs/en/build-with-claude/claude-in-microsoft-foundry) (Anthropic-operated on Azure)

## Model capabilities

Ways to steer Claude and Claude's direct outputs, including response format, reasoning depth, and input modalities.

<Tip>
You can discover which capabilities a model supports programmatically. The [Models API](/docs/en/api/models/list) returns `max_input_tokens`, `max_tokens`, and a `capabilities` object for every available model.
</Tip>

| Feature | Description | Zero Data Retention (ZDR) | Availability |
|---------|-----------|----|--------------|
| [Context windows](/docs/en/build-with-claude/context-windows) | Up to 1M tokens for processing large documents, extensive code bases, and long conversations. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) | Let Claude dynamically decide when and how much to think. The recommended thinking mode for Opus 4.7. Use the effort parameter to control thinking depth. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Batch processing](/docs/en/build-with-claude/batch-processing) | Process large volumes of requests asynchronously for cost savings. Send batches with a large number of queries per batch. Batch API calls cost 50% less than standard API calls. | Not ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi /> |
| [Citations](/docs/en/build-with-claude/citations) | Ground Claude's responses in source documents. With Citations, Claude can provide detailed references to the exact sentences and passages it uses to generate responses, leading to more verifiable, trustworthy outputs. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Data residency](/docs/en/manage-claude/data-residency) | Control where model inference runs using geographic controls. Specify `"global"` or `"us"` routing per request through the `inference_geo` parameter. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws /> |
| [Effort](/docs/en/build-with-claude/effort) | Control how many tokens Claude uses when responding with the effort parameter, trading off between response thoroughness and token efficiency. Supported on Opus 4.7, Opus 4.6, Sonnet 4.6, and Opus 4.5. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Extended thinking](/docs/en/build-with-claude/extended-thinking) | Enhanced reasoning capabilities for complex tasks, providing transparency into Claude's step-by-step thought process before delivering its final answer. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [PDF support](/docs/en/build-with-claude/pdf-support) | Process and analyze text and visual content from PDF documents. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Search results](/docs/en/build-with-claude/search-results) | Enable natural citations for RAG applications by providing search results with proper source attribution. Achieve web search-quality citations for custom knowledge bases and tools. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Structured outputs](/docs/en/build-with-claude/structured-outputs) | Guarantee schema conformance with two approaches: JSON outputs for structured data responses, and strict tool use for validated tool inputs. | [ZDR eligible (qualified)](/docs/en/build-with-claude/structured-outputs#data-retention)* | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |

## Tools

Built-in tools that Claude invokes through `tool_use`. Server-side tools are run by the platform; client-side tools are implemented and executed by you.

### Server-side tools

| Feature | Description | ZDR | Availability |
|---------|-----------|----|--------------|
| [Advisor tool](/docs/en/agents-and-tools/tool-use/advisor-tool) | Pair a faster executor model with a higher-intelligence advisor model that provides strategic guidance mid-generation for long-horizon agentic workloads. | ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta /> |
| [Code execution](/docs/en/agents-and-tools/tool-use/code-execution-tool) | Run code in a sandboxed environment for advanced data analysis, calculations, and file processing. Free when used with web search or web fetch. | Not ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws azureAiBeta /> |
| [Web fetch](/docs/en/agents-and-tools/tool-use/web-fetch-tool) | Retrieve full content from specified web pages and PDF documents for in-depth analysis. | ZDR eligible* | <PlatformAvailability claudeApi claudePlatformAws azureAiBeta /> |
| [Web search](/docs/en/agents-and-tools/tool-use/web-search-tool) | Augment Claude's comprehensive knowledge with current, real-world data from across the web. | ZDR eligible* | <PlatformAvailability claudeApi claudePlatformAws vertexAi azureAiBeta /> |

### Client-side tools

| Feature | Description | ZDR | Availability |
|---------|-----------|----|--------------|
| [Bash](/docs/en/agents-and-tools/tool-use/bash-tool) | Execute bash commands and scripts to interact with the system shell and perform command-line operations. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Computer use](/docs/en/agents-and-tools/tool-use/computer-use-tool) | Control computer interfaces by taking screenshots and issuing mouse and keyboard commands. | ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta bedrockBeta vertexAiBeta azureAiBeta /> |
| [Memory](/docs/en/agents-and-tools/tool-use/memory-tool) | Enable Claude to store and retrieve information across conversations. Build knowledge bases over time, maintain project context, and learn from past interactions. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Text editor](/docs/en/agents-and-tools/tool-use/text-editor-tool) | Create and edit text files with a built-in text editor interface for file manipulation tasks. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |

## Tool infrastructure

Infrastructure that supports discovering, orchestrating, and scaling tool use.

| Feature | Description | ZDR | Availability |
|---------|-----------|----|--------------|
| [Agent Skills](/docs/en/agents-and-tools/agent-skills/overview) | Extend Claude's capabilities with Skills. Use pre-built Skills (PowerPoint, Excel, Word, PDF) or create custom Skills with instructions and scripts. Skills use progressive disclosure to efficiently manage context. | Not ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta azureAiBeta /> |
| [Fine-grained tool streaming](/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming) | Stream tool use parameters without buffering/JSON validation, reducing latency for receiving large parameters. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [MCP connector](/docs/en/agents-and-tools/mcp-connector) | Connect to remote [MCP](/docs/en/mcp) servers directly from the Messages API without a separate MCP client. | Not ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta azureAiBeta /> |
| [Programmatic tool calling](/docs/en/agents-and-tools/tool-use/programmatic-tool-calling) | Enable Claude to call your tools programmatically from within code execution containers, reducing latency and token consumption for multi-tool workflows. | Not ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws azureAiBeta /> |
| [Tool search](/docs/en/agents-and-tools/tool-use/tool-search-tool) | Scale to thousands of tools by dynamically discovering and loading tools on-demand using regex-based search, optimizing context usage and improving tool selection accuracy. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |

## Context management

Infrastructure for controlling and optimizing Claude's context window.

| Feature | Description | ZDR | Availability |
|---------|-----------|----|--------------|
| [Compaction](/docs/en/build-with-claude/compaction) | Server-side context summarization for long-running conversations. When context approaches the window limit, the API automatically summarizes earlier parts of the conversation. Supported on Opus 4.7, Opus 4.6, and Sonnet 4.6. | ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta bedrockBeta vertexAiBeta azureAiBeta /> |
| [Context editing](/docs/en/build-with-claude/context-editing) | Automatically manage conversation context with configurable strategies. Supports clearing tool results when approaching token limits and managing thinking blocks in extended thinking conversations. | ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta bedrockBeta vertexAiBeta azureAiBeta /> |
| [Automatic prompt caching](/docs/en/build-with-claude/prompt-caching#automatic-caching) | Simplify prompt caching to a single API parameter. The system automatically caches the last cacheable block in your request, moving the cache point forward as conversations grow. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws azureAiBeta /> |
| [Prompt caching (5m)](/docs/en/build-with-claude/prompt-caching) | Provide Claude with more background knowledge and example outputs to reduce costs and latency. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |
| [Prompt caching (1hr)](/docs/en/build-with-claude/prompt-caching#1-hour-cache-duration) | Extended 1-hour cache duration for less frequently accessed but important context, complementing the standard 5-minute cache. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws vertexAi azureAiBeta /> |
| [Token counting](/docs/en/build-with-claude/token-counting) | Token counting enables you to determine the number of tokens in a message before sending it to Claude, helping you make informed decisions about your prompts and usage. | ZDR eligible | <PlatformAvailability claudeApi claudePlatformAws bedrock vertexAi azureAiBeta /> |

## Files and assets

Manage files and assets for use with Claude.

| Feature | Description | ZDR | Availability |
|---------|-----------|----|--------------|
| [Files API](/docs/en/build-with-claude/files) | Upload and manage files to use with Claude without re-uploading content with each request. Supports PDFs, images, and text files. | Not ZDR eligible | <PlatformAvailability claudeApiBeta claudePlatformAwsBeta azureAiBeta /> |

\* **Structured outputs:** Your prompts and Claude's outputs are not stored. Only JSON schemas are cached, for up to 24 hours since last use. **Web search and web fetch:** ZDR-eligible except when [dynamic filtering](/docs/en/agents-and-tools/tool-use/web-search-tool#dynamic-filtering) is enabled. See [ZDR details](/docs/en/manage-claude/api-and-data-retention#feature-eligibility).

---

# Handling stop reasons

URL: https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons

# Handling stop reasons

---

When you make a request to the Messages API, Claude's response includes a `stop_reason` field that indicates why the model stopped generating its response. Understanding these values is crucial for building robust applications that handle different response types appropriately.

For details about `stop_reason` in the API response, see the [Messages API reference](/docs/en/api/messages/create).

## The stop_reason field

The `stop_reason` field is part of every successful Messages API response. Unlike errors, which indicate failures in processing your request, `stop_reason` tells you why Claude successfully completed its response generation.

```json Example response
{
  "id": "msg_01234",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Here's the answer to your question..."
    }
  ],
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 100,
    "output_tokens": 50
  }
}
```

## Stop reason values

### end_turn
The most common stop reason. Indicates Claude finished its response naturally.

```python Python
from anthropic import Anthropic

client = Anthropic()
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}],
)
if response.stop_reason == "end_turn":
    # Process the complete response
    print(response.content[0].text)
```

#### Empty responses with end_turn

Sometimes Claude returns an empty response (exactly 2-3 tokens with no content) with `stop_reason: "end_turn"`. This typically happens when Claude interprets that the assistant turn is complete, particularly after tool results.

**Common causes:**
- Adding text blocks immediately after tool results (Claude learns to expect the user to always insert text after tool results, so it ends its turn to follow the pattern)
- Sending Claude's completed response back without adding anything (Claude already decided it's done, so it will remain done)

**How to prevent empty responses:**

```python nocheck
# INCORRECT: Adding text immediately after tool_result
messages = [
    {"role": "user", "content": "Calculate the sum of 1234 and 5678"},
    {
        "role": "assistant",
        "content": [
            {
                "type": "tool_use",
                "id": "toolu_123",
                "name": "calculator",
                "input": {"operation": "add", "a": 1234, "b": 5678},
            }
        ],
    },
    {
        "role": "user",
        "content": [
            {"type": "tool_result", "tool_use_id": "toolu_123", "content": "6912"},
            {
                "type": "text",
                "text": "Here's the result",  # Don't add text after tool_result
            },
        ],
    },
]

# CORRECT: Send tool results directly without additional text
messages = [
    {"role": "user", "content": "Calculate the sum of 1234 and 5678"},
    {
        "role": "assistant",
        "content": [
            {
                "type": "tool_use",
                "id": "toolu_123",
                "name": "calculator",
                "input": {"operation": "add", "a": 1234, "b": 5678},
            }
        ],
    },
    {
        "role": "user",
        "content": [
            {"type": "tool_result", "tool_use_id": "toolu_123", "content": "6912"}
        ],
    },  # Just the tool_result, no additional text
]


# If you still get empty responses after fixing the above:
def handle_empty_response(client, messages):
    response = client.messages.create(
        model="claude-opus-4-7", max_tokens=1024, messages=messages
    )

    # Check if response is empty
    if response.stop_reason == "end_turn" and not response.content:
        # INCORRECT: Don't just retry with the empty response
        # This won't work because Claude already decided it's done

        # CORRECT: Add a continuation prompt in a NEW user message
        messages.append({"role": "user", "content": "Please continue"})

        response = client.messages.create(
            model="claude-opus-4-7", max_tokens=1024, messages=messages
        )

    return response
```

**Best practices:**
1. **Never add text blocks immediately after tool results** - This teaches Claude to expect user input after every tool use
2. **Don't retry empty responses without modification** - Simply sending the empty response back won't help
3. **Use continuation prompts as a last resort** - Only if the above fixes don't resolve the issue

### max_tokens
Claude stopped because it reached the `max_tokens` limit specified in your request.

```python Python
# Request with limited tokens
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=10,
    messages=[{"role": "user", "content": "Explain quantum physics"}],
)

if response.stop_reason == "max_tokens":
    # Response was truncated
    print("Response was cut off at token limit")
    # Consider making another request to continue
```

#### Incomplete tool use blocks

If Claude's response is cut off due to hitting the `max_tokens` limit, and the truncated response contains an incomplete tool use block, you'll need to retry the request with a higher `max_tokens` value to get the full tool use.

<CodeGroup>

```bash CLI nocheck
RESPONSE=$(ant messages create --max-tokens 1024 \
  --format jsonl < request.yaml)

# Check if the response was truncated mid tool use
STOP_REASON=$(jq -r '.stop_reason' <<<"$RESPONSE")
LAST_TYPE=$(jq -r '.content[-1].type' <<<"$RESPONSE")
if [ "$STOP_REASON" = "max_tokens" ] && [ "$LAST_TYPE" = "tool_use" ]; then
  # Retry with a higher max_tokens
  ant messages create --max-tokens 4096 < request.yaml
fi
```

```python Python nocheck hidelines={1..8}
import anthropic

client = anthropic.Anthropic()
tools: list[dict] = []
messages: list[dict] = []
response = client.messages.create(
    model="claude-opus-4-7", max_tokens=1024, tools=tools, messages=messages
)
# Check if response was truncated during tool use
if response.stop_reason == "max_tokens":
    # Check if the last content block is an incomplete tool_use
    last_block = response.content[-1]
    if last_block.type == "tool_use":
        # Send the request with higher max_tokens
        response = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=4096,  # Increased limit
            messages=messages,
            tools=tools,
        )
```

```typescript TypeScript nocheck
// Check if response was truncated during tool use
if (response.stop_reason === "max_tokens") {
  // Check if the last content block is an incomplete tool_use
  const lastBlock = response.content[response.content.length - 1];
  if (lastBlock.type === "tool_use") {
    // Send the request with higher max_tokens
    response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 4096, // Increased limit
      messages: messages,
      tools: tools
    });
  }
}
```

```csharp C# nocheck
using System.Linq;
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeOpus4_7,
    MaxTokens = 1024,
    Messages = messages,
    Tools = tools
};

var response = await client.Messages.Create(parameters);

if (response.StopReason == "max_tokens")
{
    var lastBlock = response.Content.Last();
    if (lastBlock.Type == "tool_use")
    {
        parameters.MaxTokens = 4096;
        response = await client.Messages.Create(parameters);
    }
}
```

```go Go hidelines={1..15,-3..-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	tools := []anthropic.ToolUnionParam{}
	messages := []anthropic.MessageParam{anthropic.NewUserMessage(anthropic.NewTextBlock("test"))}
	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 1024,
		Messages:  messages,
		Tools:     tools,
	})
	if err != nil {
		log.Fatal(err)
	}

	if response.StopReason == "max_tokens" {
		lastBlock := response.Content[len(response.Content)-1]
		switch lastBlock.AsAny().(type) {
		case anthropic.ToolUseBlock:
			response, err = client.Messages.New(context.TODO(), anthropic.MessageNewParams{
				Model:     anthropic.ModelClaudeOpus4_7,
				MaxTokens: 4096,
				Messages:  messages,
				Tools:     tools,
			})
			if err != nil {
				log.Fatal(err)
			}
		}
	}

	fmt.Println(response)
}
```

```java Java nocheck hidelines={1..13}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.Tool;
import com.anthropic.models.messages.ContentBlock;
import java.util.List;
import com.anthropic.models.messages.StopReason;
AnthropicClient client = AnthropicOkHttpClient.fromEnv();
List<MessageCreateParams.Message> messages = List.of();
List<Tool> tools = List.of();
Message response = client.messages().create(MessageCreateParams.builder().model(Model.CLAUDE_OPUS_4_7).maxTokens(1024L).addUserMessage("test").build());
// Check if response was truncated during tool use
if (response.stopReason().isPresent() && response.stopReason().get().equals(StopReason.MAX_TOKENS)) {
    ContentBlock lastBlock = response.content().get(response.content().size() - 1);
    if (lastBlock.toolUse().isPresent()) {
        // Send the request with higher max_tokens
        response = client.messages().create(
            MessageCreateParams.builder()
                .model(Model.CLAUDE_OPUS_4_7)
                .maxTokens(4096L) // Increased limit
                .messages(messages)
                .tools(tools)
                .build()
        );
    }
}
```

```php PHP hidelines={1..6} nocheck
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$response = $client->messages->create(
    maxTokens: 1024,
    messages: $messages,
    model: 'claude-opus-4-7',
    tools: $tools,
);

if ($response->stopReason === 'max_tokens') {
    $lastBlock = end($response->content);
    if ($lastBlock->type === 'tool_use') {
        $response = $client->messages->create(
            maxTokens: 4096,
            messages: $messages,
            model: 'claude-opus-4-7',
            tools: $tools,
        );
    }
}
```

```ruby Ruby hidelines={1..15}
require "anthropic"

client = Anthropic::Client.new

tools = [
  {
    name: "get_weather",
    description: "Get the current weather in a given location",
    input_schema: { type: "object", properties: { location: { type: "string" } }, required: ["location"] }
  }
]
messages = [
  { role: "user", content: "What's the weather in San Francisco?" }
]

response = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: messages,
  tools: tools
)

if response.stop_reason == :max_tokens
  last_block = response.content.last
  if last_block.type == :tool_use
    response = client.messages.create(
      model: "claude-opus-4-7",
      max_tokens: 4096,
      messages: messages,
      tools: tools
    )
  end
end
```
</CodeGroup>

### stop_sequence
Claude encountered one of your custom stop sequences.

```python Python
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    stop_sequences=["END", "STOP"],
    messages=[{"role": "user", "content": "Generate text until you say END"}],
)

if response.stop_reason == "stop_sequence":
    print(f"Stopped at sequence: {response.stop_sequence}")
```

### tool_use
Claude is calling a tool and expects you to execute it.

<Note>
For most tool use implementations, we recommend using the [tool runner](/docs/en/agents-and-tools/tool-use/tool-runner) which automatically handles tool execution, result formatting, and conversation management.
</Note>

```python Python nocheck
from anthropic import Anthropic

client = Anthropic()
weather_tool = {
    "name": "get_weather",
    "description": "Get the current weather in a given location",
    "input_schema": {
        "type": "object",
        "properties": {
            "location": {"type": "string", "description": "City and state"},
        },
        "required": ["location"],
    },
}


def execute_tool(name, tool_input):
    """Execute a tool and return the result."""
    return f"Weather in {tool_input.get('location', 'unknown')}: 72°F"


response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=[weather_tool],
    messages=[{"role": "user", "content": "What's the weather?"}],
)

if response.stop_reason == "tool_use":
    # Extract and execute the tool
    for content in response.content:
        if content.type == "tool_use":
            result = execute_tool(content.name, content.input)
            # Return result to Claude for final response
```

### pause_turn
Returned when the server-side sampling loop reaches its iteration limit while executing [server tools](/docs/en/agents-and-tools/tool-use/server-tools) like web search or web fetch. The default limit is 10 iterations per request.

When this happens, the response may contain a `server_tool_use` block without a corresponding `server_tool_result`. To let Claude finish processing, continue the conversation by sending the response back as-is.

```python Python nocheck
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    tools=[{"type": "web_search_20250305", "name": "web_search"}],
    messages=[{"role": "user", "content": "Search for latest AI news"}],
)

if response.stop_reason == "pause_turn":
    # Continue the conversation by sending the response back
    messages = [
        {"role": "user", "content": original_query},
        {"role": "assistant", "content": response.content},
    ]
    continuation = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1024,
        messages=messages,
        tools=[{"type": "web_search_20250305", "name": "web_search"}],
    )
```

<Note>
Your application should handle `pause_turn` in any agent loop that uses server tools. Simply add the assistant's response to your messages array and make another API request to let Claude continue.
</Note>

### refusal
Claude refused to generate a response due to safety concerns.

```python Python
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[{"role": "user", "content": "[Unsafe request]"}],
)

if response.stop_reason == "refusal":
    # Claude declined to respond
    print("Claude was unable to process this request")
    # Consider rephrasing or modifying the request
```

<Tip>
If you encounter `refusal` stop reasons frequently while using Claude Sonnet 4.5 or Opus 4.1, you can try updating your API calls to use Haiku 4.5 (`claude-haiku-4-5-20251001`), which has different usage restrictions. Learn more about [understanding Sonnet 4.5's API safety filters](https://support.claude.com/en/articles/12449294-understanding-sonnet-4-5-s-api-safety-filters).
</Tip>

### model_context_window_exceeded
Claude stopped because it reached the model's context window limit. This allows you to request the maximum possible tokens without knowing the exact input size.

```python Python nocheck
# Request with maximum tokens to get as much as possible
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=20000,  # Python SDK requires streaming for max_tokens above ~21k (Opus 4.7 supports 128k with streaming)
    messages=[
        {"role": "user", "content": "Large input that uses most of context window..."}
    ],
)

if response.stop_reason == "model_context_window_exceeded":
    # Response hit context window limit before max_tokens
    print("Response reached model's context window limit")
    # The response is still valid but was limited by context window
```

<Note>
This stop reason is available by default in Sonnet 4.5 and newer models. For earlier models, use the beta header `model-context-window-exceeded-2025-08-26` to enable this behavior.
</Note>

## Best practices for handling stop reasons

### 1. Always check stop_reason

Make it a habit to check the `stop_reason` in your response handling logic:

```python nocheck
def handle_response(response):
    if response.stop_reason == "tool_use":
        return handle_tool_use(response)
    elif response.stop_reason == "max_tokens":
        return handle_truncation(response)
    elif response.stop_reason == "model_context_window_exceeded":
        return handle_context_limit(response)
    elif response.stop_reason == "pause_turn":
        return handle_pause(response)
    elif response.stop_reason == "refusal":
        return handle_refusal(response)
    else:
        # Handle end_turn and other cases
        return response.content[0].text
```

### 2. Handle truncated responses gracefully

When a response is truncated due to token limits or context window:

```python nocheck
def handle_truncated_response(response):
    if response.stop_reason in ["max_tokens", "model_context_window_exceeded"]:
        # Option 1: Warn the user about the specific limit
        if response.stop_reason == "max_tokens":
            message = "[Response truncated due to max_tokens limit]"
        else:
            message = "[Response truncated due to context window limit]"
        return f"{response.content[0].text}\n\n{message}"

        # Option 2: Continue generation
        messages = [
            {"role": "user", "content": original_prompt},
            {"role": "assistant", "content": response.content[0].text},
        ]
        continuation = client.messages.create(
            model="claude-opus-4-7",
            max_tokens=1024,
            messages=messages + [{"role": "user", "content": "Please continue"}],
        )
        return response.content[0].text + continuation.content[0].text
```

### 3. Implement retry logic for pause_turn

When using [server tools](/docs/en/agents-and-tools/tool-use/server-tools), the API may return `pause_turn` if the server-side sampling loop reaches its iteration limit (default 10). Handle this by continuing the conversation:

```python nocheck
def handle_server_tool_conversation(client, user_query, tools, max_continuations=5):
    """
    Handle server tool conversations that may require multiple continuations.

    The server runs a sampling loop when executing server tools. If the loop
    reaches its iteration limit, the API returns pause_turn. Continue the
    conversation by sending the response back to let Claude finish.
    """
    messages = [{"role": "user", "content": user_query}]

    for _ in range(max_continuations):
        response = client.messages.create(
            model="claude-opus-4-7", max_tokens=1024, messages=messages, tools=tools
        )

        if response.stop_reason != "pause_turn":
            # Claude finished processing - return the final response
            return response

        # pause_turn: replace the full message list to maintain alternating roles
        messages = [
            {"role": "user", "content": user_query},
            {"role": "assistant", "content": response.content},
        ]

    # Reached max continuations - return the last response
    return response
```

## Stop reasons vs. errors

It's important to distinguish between `stop_reason` values and actual errors:

### Stop reasons (successful responses)
- Part of the response body
- Indicate why generation stopped normally
- Response contains valid content

### Errors (failed requests)
- HTTP status codes 4xx or 5xx
- Indicate request processing failures
- Response contains error details

```python Python
import anthropic
from anthropic import Anthropic

client = Anthropic()

try:
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[{"role": "user", "content": "Hello!"}],
    )

    # Handle successful response with stop_reason
    if response.stop_reason == "max_tokens":
        print("Response was truncated")

except anthropic.APIStatusError as e:
    # Handle actual errors
    if e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code == 500:
        print("Server error")
```

## Streaming considerations

When using streaming, `stop_reason` is:
- `null` in the initial `message_start` event
- Provided in the `message_delta` event
- Not provided in any other events

```python Python
from anthropic import Anthropic

client = Anthropic()

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}],
) as stream:
    for event in stream:
        if event.type == "message_delta":
            stop_reason = event.delta.stop_reason
            if stop_reason:
                print(f"Stream ended with: {stop_reason}")
```

## Common patterns

### Handling tool use workflows

<Tip>
**Simpler with tool runner**: The example below shows manual tool handling. For most use cases, the [tool runner](/docs/en/agents-and-tools/tool-use/tool-runner) automatically handles tool execution with much less code.
</Tip>

```python nocheck
def complete_tool_workflow(client, user_query, tools):
    messages = [{"role": "user", "content": user_query}]

    while True:
        response = client.messages.create(
            model="claude-opus-4-7", max_tokens=1024, messages=messages, tools=tools
        )

        if response.stop_reason == "tool_use":
            # Execute tools and continue
            tool_results = execute_tools(response.content)
            messages.append({"role": "assistant", "content": response.content})
            messages.append({"role": "user", "content": tool_results})
        else:
            # Final response
            return response
```

### Ensuring complete responses

```python nocheck
def get_complete_response(client, prompt, max_attempts=3):
    messages = [{"role": "user", "content": prompt}]
    full_response = ""

    for _ in range(max_attempts):
        response = client.messages.create(
            model="claude-opus-4-7", messages=messages, max_tokens=4096
        )

        full_response += response.content[0].text

        if response.stop_reason != "max_tokens":
            break

        # Continue from where it left off
        messages = [
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": full_response},
            {"role": "user", "content": "Please continue from where you left off."},
        ]

    return full_response
```

### Getting maximum tokens without knowing input size

With the `model_context_window_exceeded` stop reason, you can request the maximum possible tokens without calculating input size:

```python
def get_max_possible_tokens(client, prompt):
    """
    Get as many tokens as possible within the model's context window
    without needing to calculate input token count
    """
    response = client.messages.create(
        model="claude-opus-4-7",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=20000,  # Python SDK requires streaming for max_tokens above ~21k
    )

    if response.stop_reason == "model_context_window_exceeded":
        # Got the maximum possible tokens given input size
        print(
            f"Generated {response.usage.output_tokens} tokens (context limit reached)"
        )
    elif response.stop_reason == "max_tokens":
        # Got exactly the requested tokens
        print(f"Generated {response.usage.output_tokens} tokens (max_tokens reached)")
    else:
        # Natural completion
        print(f"Generated {response.usage.output_tokens} tokens (natural completion)")

    return response.content[0].text
```

By properly handling `stop_reason` values, you can build more robust applications that gracefully handle different response scenarios and provide better user experiences.

---

# Using the Messages API

URL: https://platform.claude.com/docs/en/build-with-claude/working-with-messages

# Using the Messages API

Practical patterns and examples for using the Messages API effectively

---

Anthropic offers two ways to build with Claude, each suited to different use cases:

| | Messages API | Claude Managed Agents |
|---|---|---|
| **What it is** | Direct model prompting access | Pre-built, configurable agent harness that runs in managed infrastructure |
| **Best for** | Custom agent loops and fine-grained control | Long-running tasks and asynchronous work |
| **Learn more** | [Messages API docs](/docs/en/build-with-claude/working-with-messages) | [Claude Managed Agents docs](/docs/en/managed-agents/overview) |

This guide covers common patterns for working with the Messages API, including basic requests, multi-turn conversations, prefill techniques, and vision capabilities. For complete API specifications, see the [Messages API reference](/docs/en/api/messages/create).

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

## Basic request and response

<CodeGroup>
  ```bash cURL
  #!/bin/sh
  curl https://api.anthropic.com/v1/messages \
       --header "x-api-key: $ANTHROPIC_API_KEY" \
       --header "anthropic-version: 2023-06-01" \
       --header "content-type: application/json" \
       --data \
  '{
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "messages": [
          {"role": "user", "content": "Hello, Claude"}
      ]
  }'
  ```

  ```bash CLI
  ant messages create \
    --model claude-opus-4-7 \
    --max-tokens 1024 \
    --message '{role: user, content: "Hello, Claude"}'
  ```

  ```python Python hidelines={1..2}
  import anthropic

  message = anthropic.Anthropic().messages.create(
      model="claude-opus-4-7",
      max_tokens=1024,
      messages=[{"role": "user", "content": "Hello, Claude"}],
  )
  print(message)
  ```

  ```typescript TypeScript hidelines={1..2}
  import Anthropic from "@anthropic-ai/sdk";

  const anthropic = new Anthropic();

  const message = await anthropic.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello, Claude" }]
  });
  console.log(message);
  ```

  ```csharp C#
  using Anthropic;
  using Anthropic.Models.Messages;

  AnthropicClient client = new();

  var parameters = new MessageCreateParams
  {
      Model = Model.ClaudeOpus4_7,
      MaxTokens = 1024,
      Messages = [new() { Role = Role.User, Content = "Hello, Claude" }]
  };
  var message = await client.Messages.Create(parameters);
  Console.WriteLine(message);
  ```

  ```go Go hidelines={1..11,-1}
  package main

  import (
  	"context"
  	"fmt"
  	"log"

  	"github.com/anthropics/anthropic-sdk-go"
  )

  func main() {
  	client := anthropic.NewClient()

  	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
  		Model:     anthropic.ModelClaudeOpus4_7,
  		MaxTokens: 1024,
  		Messages: []anthropic.MessageParam{
  			anthropic.NewUserMessage(anthropic.NewTextBlock("Hello, Claude")),
  		},
  	})
  	if err != nil {
  		log.Fatal(err)
  	}
  	fmt.Println(response)
  }
  ```

  ```java Java hidelines={1..8,-2..}
  import com.anthropic.client.AnthropicClient;
  import com.anthropic.client.okhttp.AnthropicOkHttpClient;
  import com.anthropic.models.messages.MessageCreateParams;
  import com.anthropic.models.messages.Message;
  import com.anthropic.models.messages.Model;

  public class Main {
      public static void main(String[] args) {
          AnthropicClient client = AnthropicOkHttpClient.fromEnv();

          MessageCreateParams params = MessageCreateParams.builder()
              .model(Model.CLAUDE_OPUS_4_7)
              .maxTokens(1024L)
              .addUserMessage("Hello, Claude")
              .build();

          Message response = client.messages().create(params);
          System.out.println(response);
      }
  }
  ```

  ```php PHP hidelines={1..4}
  <?php

  use Anthropic\Client;

  $client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

  $message = $client->messages->create(
      maxTokens: 1024,
      messages: [['role' => 'user', 'content' => 'Hello, Claude']],
      model: 'claude-opus-4-7',
  );
  echo $message->content[0]->text;
  ```

  ```ruby Ruby hidelines={1..2}
  require "anthropic"

  client = Anthropic::Client.new

  message = client.messages.create(
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "Hello, Claude" }
    ]
  )
  puts message
  ```
</CodeGroup>

```json Output
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Hello!"
    }
  ],
  "model": "claude-opus-4-7",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 12,
    "output_tokens": 6
  }
}
```

## Multiple conversational turns

The Messages API is stateless, which means that you always send the full conversational history to the API. You can use this pattern to build up a conversation over time. Earlier conversational turns don't necessarily need to actually originate from Claude. You can use synthetic `assistant` messages.

<CodeGroup>
```bash cURL
#!/bin/sh
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-opus-4-7",
    "max_tokens": 1024,
    "messages": [
        {"role": "user", "content": "Hello, Claude"},
        {"role": "assistant", "content": "Hello!"},
        {"role": "user", "content": "Can you describe LLMs to me?"}

    ]
}'
```

```bash CLI
ant messages create \
  --model claude-opus-4-7 \
  --max-tokens 1024 \
  --message '{role: user, content: "Hello, Claude"}' \
  --message '{role: assistant, content: "Hello!"}' \
  --message '{role: user, content: "Can you describe LLMs to me?"}'
```

```python Python hidelines={1..2}
import anthropic

message = anthropic.Anthropic().messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude"},
        {"role": "assistant", "content": "Hello!"},
        {"role": "user", "content": "Can you describe LLMs to me?"},
    ],
)
print(message)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const message = await anthropic.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Hello, Claude" },
    { role: "assistant", content: "Hello!" },
    { role: "user", content: "Can you describe LLMs to me?" }
  ]
});
console.log(message);
```

```csharp C#
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeOpus4_7,
    MaxTokens = 1024,
    Messages =
    [
        new() { Role = Role.User, Content = "Hello, Claude" },
        new() { Role = Role.Assistant, Content = "Hello!" },
        new() { Role = Role.User, Content = "Can you describe LLMs to me?" }
    ]
};

var message = await client.Messages.Create(parameters);
Console.WriteLine(message);
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 1024,
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("Hello, Claude")),
			anthropic.NewAssistantMessage(anthropic.NewTextBlock("Hello!")),
			anthropic.NewUserMessage(anthropic.NewTextBlock("Can you describe LLMs to me?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response)
}
```

```java Java hidelines={1..8,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;

public class MultiTurnConversation {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(1024L)
            .addUserMessage("Hello, Claude")
            .addAssistantMessage("Hello!")
            .addUserMessage("Can you describe LLMs to me?")
            .build();

        Message response = client.messages().create(params);
        System.out.println(response);
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 1024,
    messages: [
        ['role' => 'user', 'content' => 'Hello, Claude'],
        ['role' => 'assistant', 'content' => 'Hello!'],
        ['role' => 'user', 'content' => 'Can you describe LLMs to me?'],
    ],
    model: 'claude-opus-4-7',
);

echo $message->content[0]->text;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [
    { role: "user", content: "Hello, Claude" },
    { role: "assistant", content: "Hello!" },
    { role: "user", content: "Can you describe LLMs to me?" }
  ]
)
puts message
```
</CodeGroup>

```json Output
{
  "id": "msg_018gCsTGsXkYJVqYPxTgDHBU",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Sure, I'd be happy to provide..."
    }
  ],
  "model": "claude-opus-4-7",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 30,
    "output_tokens": 309
  }
}
```

## Putting words in Claude's mouth

You can pre-fill part of Claude's response in the last position of the input messages list. This can be used to shape Claude's response. The example below uses `"max_tokens": 1` to get a single multiple choice answer from Claude.

<Warning>
Prefilling is not supported on [Claude Mythos Preview](https://anthropic.com/glasswing), Claude Opus 4.7, Claude Opus 4.6, and Claude Sonnet 4.6. Requests using prefill with these models return a 400 error. Use [structured outputs](/docs/en/build-with-claude/structured-outputs) or system prompt instructions instead. See the [migration guide](/docs/en/about-claude/models/migration-guide) for migration patterns.
</Warning>

<CodeGroup>
  ```bash cURL
  #!/bin/sh
  curl https://api.anthropic.com/v1/messages \
       --header "x-api-key: $ANTHROPIC_API_KEY" \
       --header "anthropic-version: 2023-06-01" \
       --header "content-type: application/json" \
       --data \
  '{
      "model": "claude-sonnet-4-5",
      "max_tokens": 1,
      "messages": [
          {"role": "user", "content": "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae"},
          {"role": "assistant", "content": "The answer is ("}
      ]
  }'
  ```

  ```bash CLI
  ant messages create <<'YAML'
  model: claude-sonnet-4-5
  max_tokens: 1
  messages:
    - role: user
      content: "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae"
    - role: assistant
      content: "The answer is ("
  YAML
  ```

  ```python Python hidelines={1..2}
  import anthropic

  message = anthropic.Anthropic().messages.create(
      model="claude-sonnet-4-5",
      max_tokens=1,
      messages=[
          {
              "role": "user",
              "content": "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae",
          },
          {"role": "assistant", "content": "The answer is ("},
      ],
  )
  print(message)
  ```

  ```typescript TypeScript hidelines={1..2}
  import Anthropic from "@anthropic-ai/sdk";

  const anthropic = new Anthropic();

  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 1,
    messages: [
      {
        role: "user",
        content: "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae"
      },
      { role: "assistant", content: "The answer is (" }
    ]
  });
  console.log(message);
  ```

  ```csharp C#
  using Anthropic;
  using Anthropic.Models.Messages;

  AnthropicClient client = new();

  var parameters = new MessageCreateParams
  {
      Model = Model.ClaudeSonnet4_5,
      MaxTokens = 1,
      Messages = [
          new() { Role = Role.User, Content = "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae" },
          new() { Role = Role.Assistant, Content = "The answer is (" }
      ]
  };

  var message = await client.Messages.Create(parameters);
  Console.WriteLine(message);
  ```

  ```go Go hidelines={1..11,-1}
  package main

  import (
  	"context"
  	"fmt"
  	"log"

  	"github.com/anthropics/anthropic-sdk-go"
  )

  func main() {
  	client := anthropic.NewClient()

  	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
  		Model:     anthropic.ModelClaudeSonnet4_5,
  		MaxTokens: 1,
  		Messages: []anthropic.MessageParam{
  			anthropic.NewUserMessage(anthropic.NewTextBlock("What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae")),
  			anthropic.NewAssistantMessage(anthropic.NewTextBlock("The answer is (")),
  		},
  	})
  	if err != nil {
  		log.Fatal(err)
  	}
  	fmt.Println(response)
  }
  ```

  ```java Java hidelines={1..8,-2..}
  import com.anthropic.client.AnthropicClient;
  import com.anthropic.client.okhttp.AnthropicOkHttpClient;
  import com.anthropic.models.messages.MessageCreateParams;
  import com.anthropic.models.messages.Message;
  import com.anthropic.models.messages.Model;

  public class PrefillExample {
      public static void main(String[] args) {
          AnthropicClient client = AnthropicOkHttpClient.fromEnv();

          MessageCreateParams params = MessageCreateParams.builder()
              .model(Model.CLAUDE_SONNET_4_5)
              .maxTokens(1L)
              .addUserMessage("What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae")
              .addAssistantMessage("The answer is (")
              .build();

          Message response = client.messages().create(params);
          System.out.println(response);
      }
  }
  ```

  ```php PHP hidelines={1..4}
  <?php

  use Anthropic\Client;

  $client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

  $message = $client->messages->create(
      maxTokens: 1,
      messages: [
          ['role' => 'user', 'content' => 'What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae'],
          ['role' => 'assistant', 'content' => 'The answer is ('],
      ],
      model: 'claude-sonnet-4-5',
  );
  echo $message->content[0]->text;
  ```

  ```ruby Ruby hidelines={1..2}
  require "anthropic"

  client = Anthropic::Client.new

  message = client.messages.create(
    model: "claude-sonnet-4-5",
    max_tokens: 1,
    messages: [
      {
        role: "user",
        content: "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae"
      },
      { role: "assistant", content: "The answer is (" }
    ]
  )
  puts message
  ```
</CodeGroup>

```json Output
{
  "id": "msg_01Q8Faay6S7QPTvEUUQARt7h",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "C"
    }
  ],
  "model": "claude-sonnet-4-5",
  "stop_reason": "max_tokens",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 42,
    "output_tokens": 1
  }
}
```

## Vision

Claude can read both text and images in requests. Images can be supplied using the `base64`, `url`, or `file` source types. The `file` source type references an image uploaded through the [Files API](/docs/en/build-with-claude/files). Supported media types are `image/jpeg`, `image/png`, `image/gif`, and `image/webp`. See the [vision guide](/docs/en/build-with-claude/vision) for more details.

<CodeGroup>
  ```bash cURL
  #!/bin/sh

  # Option 1: Base64-encoded image
  IMAGE_URL="https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
  IMAGE_MEDIA_TYPE="image/jpeg"
  IMAGE_BASE64=$(curl "$IMAGE_URL" | base64 | tr -d '\n')

  curl https://api.anthropic.com/v1/messages \
       --header "x-api-key: $ANTHROPIC_API_KEY" \
       --header "anthropic-version: 2023-06-01" \
       --header "content-type: application/json" \
       --data \
  '{
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "messages": [
          {"role": "user", "content": [
              {"type": "image", "source": {
                  "type": "base64",
                  "media_type": "'$IMAGE_MEDIA_TYPE'",
                  "data": "'$IMAGE_BASE64'"
              }},
              {"type": "text", "text": "What is in the above image?"}
          ]}
      ]
  }'

  # Option 2: URL-referenced image
  curl https://api.anthropic.com/v1/messages \
       --header "x-api-key: $ANTHROPIC_API_KEY" \
       --header "anthropic-version: 2023-06-01" \
       --header "content-type: application/json" \
       --data \
  '{
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "messages": [
          {"role": "user", "content": [
              {"type": "image", "source": {
                  "type": "url",
                  "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
              }},
              {"type": "text", "text": "What is in the above image?"}
          ]}
      ]
  }'
  ```

  
  ```bash CLI nocheck
  IMAGE_URL="https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"

  # Option 1: Base64-encoded image (CLI auto-encodes binary @file refs)
  curl -s "$IMAGE_URL" -o ./ant.jpg

  ant messages create <<'YAML'
  model: claude-opus-4-7
  max_tokens: 1024
  messages:
    - role: user
      content:
        - type: image
          source:
            type: base64
            media_type: image/jpeg
            data: "@./ant.jpg"
        - type: text
          text: What is in the above image?
  YAML

  # Option 2: URL-referenced image
  ant messages create <<YAML
  model: claude-opus-4-7
  max_tokens: 1024
  messages:
    - role: user
      content:
        - type: image
          source:
            type: url
            url: $IMAGE_URL
        - type: text
          text: What is in the above image?
  YAML
  ```

  
  ```python Python nocheck hidelines={1}
  import anthropic
  import base64
  import httpx

  # Option 1: Base64-encoded image
  image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
  image_media_type = "image/jpeg"
  image_data = base64.standard_b64encode(httpx.get(image_url).content).decode("utf-8")

  message = anthropic.Anthropic().messages.create(
      model="claude-opus-4-7",
      max_tokens=1024,
      messages=[
          {
              "role": "user",
              "content": [
                  {
                      "type": "image",
                      "source": {
                          "type": "base64",
                          "media_type": image_media_type,
                          "data": image_data,
                      },
                  },
                  {"type": "text", "text": "What is in the above image?"},
              ],
          }
      ],
  )
  print(message)

  # Option 2: URL-referenced image
  message_from_url = anthropic.Anthropic().messages.create(
      model="claude-opus-4-7",
      max_tokens=1024,
      messages=[
          {
              "role": "user",
              "content": [
                  {
                      "type": "image",
                      "source": {
                          "type": "url",
                          "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg",
                      },
                  },
                  {"type": "text", "text": "What is in the above image?"},
              ],
          }
      ],
  )
  print(message_from_url)
  ```

  
  ```typescript TypeScript nocheck hidelines={1..2}
  import Anthropic from "@anthropic-ai/sdk";

  const anthropic = new Anthropic();

  // Option 1: Base64-encoded image
  const image_url =
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";
  const image_media_type = "image/jpeg";
  const image_array_buffer = await (await fetch(image_url)).arrayBuffer();
  const image_data = Buffer.from(image_array_buffer).toString("base64");

  const message = await anthropic.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: image_media_type,
              data: image_data
            }
          },
          {
            type: "text",
            text: "What is in the above image?"
          }
        ]
      }
    ]
  });
  console.log(message);

  // Option 2: URL-referenced image
  const messageFromUrl = await anthropic.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "url",
              url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
            }
          },
          {
            type: "text",
            text: "What is in the above image?"
          }
        ]
      }
    ]
  });
  console.log(messageFromUrl);
  ```

  
  ```csharp C# nocheck
  using System.Collections.Generic;
  using System.Net.Http;
  using Anthropic;
  using Anthropic.Models.Messages;

  AnthropicClient client = new();

  // Option 1: Base64-encoded image
  string imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";

  using HttpClient httpClient = new();
  byte[] imageBytes = await httpClient.GetByteArrayAsync(imageUrl);
  string imageData = Convert.ToBase64String(imageBytes);

  var parameters = new MessageCreateParams
  {
      Model = Model.ClaudeOpus4_7,
      MaxTokens = 1024,
      Messages =
      [
          new()
          {
              Role = Role.User,
              Content = new MessageParamContent(new List<ContentBlockParam>
              {
                  new ContentBlockParam(new ImageBlockParam(
                      new ImageBlockParamSource(new Base64ImageSource()
                      {
                          Data = imageData,
                          MediaType = MediaType.ImageJpeg,
                      })
                  )),
                  new ContentBlockParam(new TextBlockParam("What is in the above image?")),
              }),
          }
      ]
  };

  var message = await client.Messages.Create(parameters);
  Console.WriteLine(message);

  // Option 2: URL-referenced image
  var parametersFromUrl = new MessageCreateParams
  {
      Model = Model.ClaudeOpus4_7,
      MaxTokens = 1024,
      Messages =
      [
          new()
          {
              Role = Role.User,
              Content = new MessageParamContent(new List<ContentBlockParam>
              {
                  new ContentBlockParam(new ImageBlockParam(
                      new ImageBlockParamSource(new UrlImageSource()
                      {
                          Url = new Uri("https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"),
                      })
                  )),
                  new ContentBlockParam(new TextBlockParam("What is in the above image?")),
              }),
          }
      ]
  };

  var messageFromUrl = await client.Messages.Create(parametersFromUrl);
  Console.WriteLine(messageFromUrl);
  ```

  
  ```go Go nocheck hidelines={1..16,-1}
  package main

  import (
  	"context"
  	"encoding/base64"
  	"fmt"
  	"io"
  	"log"
  	"net/http"

  	"github.com/anthropics/anthropic-sdk-go"
  )

  func main() {
  	client := anthropic.NewClient()

  	// Option 1: Base64-encoded image
  	imageURL := "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"

  	req, err := http.NewRequest("GET", imageURL, nil)
  	if err != nil {
  		log.Fatal(err)
  	}
  	req.Header.Set("User-Agent", "AnthropicDocsBot/1.0")

  	resp, err := http.DefaultClient.Do(req)
  	if err != nil {
  		log.Fatal(err)
  	}
  	defer resp.Body.Close()

  	imageBytes, err := io.ReadAll(resp.Body)
  	if err != nil {
  		log.Fatal(err)
  	}
  	imageData := base64.StdEncoding.EncodeToString(imageBytes)

  	message, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
  		Model:     anthropic.ModelClaudeOpus4_7,
  		MaxTokens: 1024,
  		Messages: []anthropic.MessageParam{
  			anthropic.NewUserMessage(
  				anthropic.NewImageBlockBase64("image/jpeg", imageData),
  				anthropic.NewTextBlock("What is in the above image?"),
  			),
  		},
  	})
  	if err != nil {
  		log.Fatal(err)
  	}
  	fmt.Println(message)

  	// Option 2: URL-referenced image
  	messageFromURL, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
  		Model:     anthropic.ModelClaudeOpus4_7,
  		MaxTokens: 1024,
  		Messages: []anthropic.MessageParam{
  			anthropic.NewUserMessage(
  				anthropic.NewImageBlock(anthropic.URLImageSourceParam{
  					URL: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg",
  				}),
  				anthropic.NewTextBlock("What is in the above image?"),
  			),
  		},
  	})
  	if err != nil {
  		log.Fatal(err)
  	}
  	fmt.Println(messageFromURL)
  }
  ```

  
  ```java Java nocheck hidelines={1..12,-2..}
  import com.anthropic.client.AnthropicClient;
  import com.anthropic.client.okhttp.AnthropicOkHttpClient;
  import com.anthropic.models.messages.*;
  import java.net.URI;
  import java.net.http.HttpClient;
  import java.net.http.HttpRequest;
  import java.net.http.HttpResponse;
  import java.util.Base64;
  import java.util.List;

  public class VisionExample {
      public static void main(String[] args) throws Exception {
          AnthropicClient client = AnthropicOkHttpClient.fromEnv();

          // Option 1: Base64-encoded image
          String imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";

          HttpClient httpClient = HttpClient.newHttpClient();
          HttpRequest request = HttpRequest.newBuilder().uri(URI.create(imageUrl)).build();
          HttpResponse<byte[]> response = httpClient.send(request, HttpResponse.BodyHandlers.ofByteArray());
          String imageData = Base64.getEncoder().encodeToString(response.body());

          List<ContentBlockParam> base64Content = List.of(
              ContentBlockParam.ofImage(
                  ImageBlockParam.builder()
                      .source(Base64ImageSource.builder()
                          .data(imageData)
                          .mediaType(Base64ImageSource.MediaType.IMAGE_JPEG)
                          .build())
                      .build()),
              ContentBlockParam.ofText(
                  TextBlockParam.builder()
                      .text("What is in the above image?")
                      .build())
          );

          Message message = client.messages().create(
              MessageCreateParams.builder()
                  .model(Model.CLAUDE_OPUS_4_7)
                  .maxTokens(1024L)
                  .addUserMessageOfBlockParams(base64Content)
                  .build());
          System.out.println(message);

          // Option 2: URL-referenced image
          List<ContentBlockParam> urlContent = List.of(
              ContentBlockParam.ofImage(
                  ImageBlockParam.builder()
                      .source(UrlImageSource.builder()
                          .url("https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg")
                          .build())
                      .build()),
              ContentBlockParam.ofText(
                  TextBlockParam.builder()
                      .text("What is in the above image?")
                      .build())
          );

          Message messageFromUrl = client.messages().create(
              MessageCreateParams.builder()
                  .model(Model.CLAUDE_OPUS_4_7)
                  .maxTokens(1024L)
                  .addUserMessageOfBlockParams(urlContent)
                  .build());
          System.out.println(messageFromUrl);
      }
  }
  ```

  
  ```php PHP hidelines={1..4} nocheck
  <?php

  use Anthropic\Client;

  $client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

  // Option 1: Base64-encoded image
  $image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";
  $image_media_type = "image/jpeg";
  $image_data = base64_encode(file_get_contents($image_url));

  $message = $client->messages->create(
      maxTokens: 1024,
      messages: [
          [
              'role' => 'user',
              'content' => [
                  [
                      'type' => 'image',
                      'source' => [
                          'type' => 'base64',
                          'media_type' => $image_media_type,
                          'data' => $image_data,
                      ],
                  ],
                  [
                      'type' => 'text',
                      'text' => 'What is in the above image?',
                  ],
              ],
          ],
      ],
      model: 'claude-opus-4-7',
  );
  echo $message;

  // Option 2: URL-referenced image
  $message_from_url = $client->messages->create(
      maxTokens: 1024,
      messages: [
          [
              'role' => 'user',
              'content' => [
                  [
                      'type' => 'image',
                      'source' => [
                          'type' => 'url',
                          'url' => 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg',
                      ],
                  ],
                  [
                      'type' => 'text',
                      'text' => 'What is in the above image?',
                  ],
              ],
          ],
      ],
      model: 'claude-opus-4-7',
  );
  echo $message_from_url;
  ```

  
  ```ruby Ruby nocheck hidelines={1}
  require "anthropic"
  require "base64"
  require "net/http"

  client = Anthropic::Client.new

  # Option 1: Base64-encoded image
  image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
  image_media_type = "image/jpeg"
  image_data = Base64.strict_encode64(Net::HTTP.get(URI(image_url)))

  message = client.messages.create(
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: image_media_type,
              data: image_data
            }
          },
          {
            type: "text",
            text: "What is in the above image?"
          }
        ]
      }
    ]
  )
  puts message

  # Option 2: URL-referenced image
  message_from_url = client.messages.create(
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "url",
              url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
            }
          },
          {
            type: "text",
            text: "What is in the above image?"
          }
        ]
      }
    ]
  )
  puts message_from_url
  ```
</CodeGroup>

```json Output
{
  "id": "msg_01EcyWo6m4hyW8KHs2y2pei5",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "This image shows an ant, specifically a close-up view of an ant. The ant is shown in detail, with its distinct head, antennae, and legs clearly visible. The image is focused on capturing the intricate details and features of the ant, likely taken with a macro lens to get an extreme close-up perspective."
    }
  ],
  "model": "claude-opus-4-7",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 1551,
    "output_tokens": 71
  }
}
```

## Tool use and computer use

See the [tool use guide](/docs/en/agents-and-tools/tool-use/overview) for examples of how to use tools with the Messages API.
See the [computer use guide](/docs/en/agents-and-tools/tool-use/computer-use-tool) for examples of how to control desktop computer environments with the Messages API.
For guaranteed JSON output, see [Structured Outputs](/docs/en/build-with-claude/structured-outputs).

### Model capabilities

---

# Adaptive thinking

URL: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking

# Adaptive thinking

Let Claude dynamically determine when and how much to use extended thinking with adaptive thinking mode.

---

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

Adaptive thinking is the recommended way to use [extended thinking](/docs/en/build-with-claude/extended-thinking) with Claude Opus 4.7, Claude Opus 4.6, and Claude Sonnet 4.6, and is the default mode on [Claude Mythos Preview](https://anthropic.com/glasswing) (where it auto-applies whenever `thinking` is unset). Instead of manually setting a thinking token budget, adaptive thinking lets Claude dynamically determine when and how much to use extended thinking based on the complexity of each request. On Claude Opus 4.7, adaptive thinking is the **only** supported thinking mode; manual `thinking: {type: "enabled", budget_tokens: N}` is no longer accepted.

<Tip>
Adaptive thinking can drive better performance than extended thinking with a fixed `budget_tokens` for many workloads, especially bimodal tasks and long-horizon agentic workflows. No beta header is required.

If your workload requires predictable latency or precise control over thinking costs, extended thinking with `budget_tokens` is still functional on Claude Opus 4.6 and Claude Sonnet 4.6 but is deprecated and no longer recommended. See the warning below.
</Tip>

## Supported models

Adaptive thinking is supported on the following models:

- Claude Mythos Preview (`claude-mythos-preview`), adaptive thinking is the default; `thinking: {type: "disabled"}` is not supported
- Claude Opus 4.7 (`claude-opus-4-7`), adaptive thinking is the only supported thinking mode. Thinking is off unless you explicitly set `thinking: {type: "adaptive"}` in your request; manual `thinking: {type: "enabled"}` is rejected with a 400 error.
- Claude Opus 4.6 (`claude-opus-4-6`)
- Claude Sonnet 4.6 (`claude-sonnet-4-6`)

<Warning>
`thinking.type: "enabled"` and `budget_tokens` are [**deprecated**](/docs/en/build-with-claude/overview#feature-availability) on Opus 4.6 and Sonnet 4.6 and will be removed in a future model release. Use `thinking.type: "adaptive"` with the `effort` parameter instead. Existing `budget_tokens` configurations are still functional but no longer recommended; plan to migrate.

Older models (Sonnet 4.5, Opus 4.5, etc.) do not support adaptive thinking and require `thinking.type: "enabled"` with `budget_tokens`.
</Warning>

## How adaptive thinking works

In adaptive mode, thinking is optional for the model. Claude evaluates the complexity of each request and determines whether and how much to use extended thinking. At the default effort level (`high`), Claude almost always thinks. At lower effort levels, Claude may skip thinking for simpler problems.

Adaptive thinking also automatically enables [interleaved thinking](/docs/en/build-with-claude/extended-thinking#interleaved-thinking). This means Claude can think between tool calls, making it especially effective for agentic workflows.

## How to use adaptive thinking

Set `thinking.type` to `"adaptive"` in your API request:

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-opus-4-7",
    "max_tokens": 16000,
    "thinking": {
        "type": "adaptive"
    },
    "messages": [
        {
            "role": "user",
            "content": "Explain why the sum of two even numbers is always even."
        }
    ]
}'
```

```bash CLI nocheck
ant messages create \
  --model claude-opus-4-7 \
  --max-tokens 16000 \
  --thinking '{type: adaptive}' \
  --message '{role: user, content: Explain why the sum of two even numbers is always even.}' \
  --transform content --format jsonl |
  jq -r '
    if   .type == "thinking" then "\nThinking: \(.thinking)"
    elif .type == "text"     then "\nResponse: \(.text)"
    else empty end'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    messages=[
        {
            "role": "user",
            "content": "Explain why the sum of two even numbers is always even.",
        }
    ],
)

for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: {
    type: "adaptive"
  },
  messages: [
    {
      role: "user",
      content: "Explain why the sum of two even numbers is always even."
    }
  ]
});

for (const block of response.content) {
  if (block.type === "thinking") {
    console.log(`\nThinking: ${block.thinking}`);
  } else if (block.type === "text") {
    console.log(`\nResponse: ${block.text}`);
  }
}
```

```csharp C#
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 16000,
            Thinking = new ThinkingConfigAdaptive(),
            Messages = [
                new() {
                    Role = Role.User,
                    Content = "Explain why the sum of two even numbers is always even."
                }
            ]
        };

        var message = await client.Messages.Create(parameters);

        foreach (var block in message.Content)
        {
            if (block.TryPickThinking(out ThinkingBlock? thinking))
            {
                Console.WriteLine($"\nThinking: {thinking.Thinking}");
            }
            else if (block.TryPickText(out TextBlock? text))
            {
                Console.WriteLine($"\nResponse: {text.Text}");
            }
        }
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 16000,
		Thinking: anthropic.ThinkingConfigParamUnion{
			OfAdaptive: &anthropic.ThinkingConfigAdaptiveParam{},
		},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("Explain why the sum of two even numbers is always even.")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, block := range response.Content {
		switch v := block.AsAny().(type) {
		case anthropic.ThinkingBlock:
			fmt.Printf("\nThinking: %s", v.Thinking)
		case anthropic.TextBlock:
			fmt.Printf("\nResponse: %s", v.Text)
		}
	}
}
```

```java Java hidelines={1..5,7..9,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.ThinkingConfigAdaptive;

public class ExtendedThinkingExample {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(16000L)
            .thinking(ThinkingConfigAdaptive.builder().build())
            .addUserMessage("Explain why the sum of two even numbers is always even.")
            .build();

        Message response = client.messages().create(params);

        response.content().forEach(block -> {
            block.thinking().ifPresent(thinkingBlock ->
                System.out.println("\nThinking: " + thinkingBlock.thinking())
            );
            block.text().ifPresent(textBlock ->
                System.out.println("\nResponse: " + textBlock.text())
            );
        });
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 16000,
    messages: [
        [
            'role' => 'user',
            'content' => 'Explain why the sum of two even numbers is always even.'
        ]
    ],
    model: 'claude-opus-4-7',
    thinking: ['type' => 'adaptive'],
);

foreach ($message->content as $block) {
    if ($block->type === 'thinking') {
        echo "\nThinking: " . $block->thinking;
    } elseif ($block->type === 'text') {
        echo "\nResponse: " . $block->text;
    }
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: {
    type: "adaptive"
  },
  messages: [
    {
      role: "user",
      content: "Explain why the sum of two even numbers is always even."
    }
  ]
)

message.content.each do |block|
  case block.type
  when :thinking
    puts "\nThinking: #{block.thinking}"
  when :text
    puts "\nResponse: #{block.text}"
  end
end
```
</CodeGroup>

## Adaptive thinking with the effort parameter

You can combine adaptive thinking with the [effort parameter](/docs/en/build-with-claude/effort) to guide how much thinking Claude does. The effort level acts as soft guidance for Claude's thinking allocation:

| Effort level | Thinking behavior |
|:-------------|:------------------|
| `max` | Claude always thinks with no constraints on thinking depth. Available on Claude Mythos Preview, Claude Opus 4.7, Claude Opus 4.6, and Claude Sonnet 4.6. |
| `xhigh` | Claude always thinks deeply with extended exploration. Available on Claude Opus 4.7. |
| `high` (default) | Claude always thinks. Provides deep reasoning on complex tasks. |
| `medium` | Claude uses moderate thinking. May skip thinking for very simple queries. |
| `low` | Claude minimizes thinking. Skips thinking for simple tasks where speed matters most. |

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-opus-4-7",
    "max_tokens": 16000,
    "thinking": {
        "type": "adaptive"
    },
    "output_config": {
        "effort": "medium"
    },
    "messages": [
        {
            "role": "user",
            "content": "What is the capital of France?"
        }
    ]
}'
```

```bash CLI
ant messages create \
  --transform 'content.0.text' --raw-output <<'YAML'
model: claude-opus-4-7
max_tokens: 16000
thinking:
  type: adaptive
output_config:
  effort: medium
messages:
  - role: user
    content: What is the capital of France?
YAML
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    output_config={"effort": "medium"},
    messages=[{"role": "user", "content": "What is the capital of France?"}],
)

print(response.content[0].text)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: {
    type: "adaptive"
  },
  output_config: {
    effort: "medium"
  },
  messages: [
    {
      role: "user",
      content: "What is the capital of France?"
    }
  ]
});

for (const block of response.content) {
  if (block.type === "text") {
    console.log(block.text);
  }
}
```

```csharp C#
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 16000,
            Thinking = new ThinkingConfigAdaptive(),
            OutputConfig = new OutputConfig { Effort = Effort.Medium },
            Messages = [new() { Role = Role.User, Content = "What is the capital of France?" }]
        };

        var message = await client.Messages.Create(parameters);
        Console.WriteLine(message);
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 16000,
		Thinking: anthropic.ThinkingConfigParamUnion{
			OfAdaptive: &anthropic.ThinkingConfigAdaptiveParam{},
		},
		OutputConfig: anthropic.OutputConfigParam{
			Effort: anthropic.OutputConfigEffortMedium,
		},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is the capital of France?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response.Content[0].Text)
}
```

```java Java hidelines={1..5,8..10,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.OutputConfig;
import com.anthropic.models.messages.ThinkingConfigAdaptive;

public class Main {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(16000L)
            .thinking(ThinkingConfigAdaptive.builder().build())
            .outputConfig(OutputConfig.builder()
                .effort(OutputConfig.Effort.MEDIUM)
                .build())
            .addUserMessage("What is the capital of France?")
            .build();

        Message response = client.messages().create(params);
        response.content().stream()
            .flatMap(block -> block.text().stream())
            .forEach(textBlock -> System.out.println(textBlock.text()));
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => 'What is the capital of France?']
    ],
    model: 'claude-opus-4-7',
    thinking: ['type' => 'adaptive'],
    outputConfig: ['effort' => 'medium'],
);

echo $message->content[0]->text;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: {
    type: "adaptive"
  },
  output_config: {
    effort: "medium"
  },
  messages: [
    { role: "user", content: "What is the capital of France?" }
  ]
)

puts message.content.first.text
```
</CodeGroup>

## Streaming with adaptive thinking

Adaptive thinking works seamlessly with [streaming](/docs/en/build-with-claude/streaming). Thinking blocks are streamed via `thinking_delta` events just like manual thinking mode:

<CodeGroup>
```bash CLI
ant messages create --stream --format jsonl \
  --model claude-opus-4-7 \
  --max-tokens 16000 \
  --thinking '{type: adaptive}' \
  --message '{role: user, content: What is the greatest common divisor of 1071 and 462?}'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-opus-4-7",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    messages=[
        {
            "role": "user",
            "content": "What is the greatest common divisor of 1071 and 462?",
        }
    ],
) as stream:
    for event in stream:
        if event.type == "content_block_start":
            print(f"\nStarting {event.content_block.type} block...")
        elif event.type == "content_block_delta":
            if event.delta.type == "thinking_delta":
                print(event.delta.thinking, end="", flush=True)
            elif event.delta.type == "text_delta":
                print(event.delta.text, end="", flush=True)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const stream = await client.messages.stream({
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: { type: "adaptive" },
  messages: [{ role: "user", content: "What is the greatest common divisor of 1071 and 462?" }]
});

for await (const event of stream) {
  if (event.type === "content_block_start") {
    console.log(`\nStarting ${event.content_block.type} block...`);
  } else if (event.type === "content_block_delta") {
    if (event.delta.type === "thinking_delta") {
      process.stdout.write(event.delta.thinking);
    } else if (event.delta.type === "text_delta") {
      process.stdout.write(event.delta.text);
    }
  }
}
```

```csharp C#
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 16000,
            Thinking = new ThinkingConfigAdaptive(),
            Messages = [new() { Role = Role.User, Content = "What is the greatest common divisor of 1071 and 462?" }]
        };

        await foreach (var msg in client.Messages.CreateStreaming(parameters))
        {
            Console.Write(msg);
        }
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	stream := client.Messages.NewStreaming(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 16000,
		Thinking: anthropic.ThinkingConfigParamUnion{
			OfAdaptive: &anthropic.ThinkingConfigAdaptiveParam{},
		},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is the greatest common divisor of 1071 and 462?")),
		},
	})

	for stream.Next() {
		event := stream.Current()
		switch eventVariant := event.AsAny().(type) {
		case anthropic.ContentBlockStartEvent:
			fmt.Printf("\nStarting %s block...\n", eventVariant.ContentBlock.Type)
		case anthropic.ContentBlockDeltaEvent:
			switch deltaVariant := eventVariant.Delta.AsAny().(type) {
			case anthropic.ThinkingDelta:
				fmt.Print(deltaVariant.Thinking)
			case anthropic.TextDelta:
				fmt.Print(deltaVariant.Text)
			}
		}
	}
	if err := stream.Err(); err != nil {
		log.Fatal(err)
	}
}
```

```java Java hidelines={1..4,6..8,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.ThinkingConfigAdaptive;

public class StreamingThinkingExample {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(16000L)
            .thinking(ThinkingConfigAdaptive.builder().build())
            .addUserMessage("What is the greatest common divisor of 1071 and 462?")
            .build();

        try (var streamResponse = client.messages().createStreaming(params)) {
            streamResponse.stream().forEach(event -> {
                if (event.contentBlockStart().isPresent()) {
                    var startEvent = event.contentBlockStart().get();
                    var block = startEvent.contentBlock();
                    if (block.isThinking()) {
                        System.out.println("\nStarting thinking block...");
                    } else if (block.isText()) {
                        System.out.println("\nStarting text block...");
                    }
                } else if (event.contentBlockDelta().isPresent()) {
                    var deltaEvent = event.contentBlockDelta().get();
                    deltaEvent.delta().thinking().ifPresent(td ->
                        System.out.print(td.thinking())
                    );
                    deltaEvent.delta().text().ifPresent(td ->
                        System.out.print(td.text())
                    );
                }
            });
        }
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$stream = $client->messages->createStream(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => 'What is the greatest common divisor of 1071 and 462?']
    ],
    model: 'claude-opus-4-7',
    thinking: ['type' => 'adaptive'],
);

foreach ($stream as $event) {
    if ($event->type === 'content_block_start') {
        echo "\nStarting {$event->contentBlock->type} block...\n";
    } elseif ($event->type === 'content_block_delta') {
        if ($event->delta->type === 'thinking_delta') {
            echo $event->delta->thinking;
        } elseif ($event->delta->type === 'text_delta') {
            echo $event->delta->text;
        }
    }
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

stream = client.messages.stream(
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: { type: "adaptive" },
  messages: [
    { role: "user", content: "What is the greatest common divisor of 1071 and 462?" }
  ]
)

stream.each do |event|
  case event
  when Anthropic::Streaming::ThinkingEvent
    print event.thinking
  when Anthropic::Streaming::TextEvent
    print event.text
  end
end
```
</CodeGroup>

## Adaptive vs manual vs disabled thinking

| Mode | Config | Availability | When to use |
|:-----|:-------|:-------------|:------------|
| **Adaptive** | `thinking: {type: "adaptive"}` | Claude Mythos Preview (default), Opus 4.7 (only mode), Opus 4.6, Sonnet 4.6 | Claude determines when and how much to use extended thinking. Use `effort` to guide. |
| **Manual** | `thinking: {type: "enabled", budget_tokens: N}` | All models except Claude Opus 4.7 (rejected). Deprecated on Opus 4.6 and Sonnet 4.6 (consider adaptive mode instead). | When you need precise control over thinking token spend. |
| **Disabled** | Omit `thinking` parameter or pass `{type: "disabled"}` | All models except Claude Mythos Preview | When you don't need extended thinking and want the lowest latency. |

<Note>
Adaptive thinking is available on Claude Mythos Preview, Claude Opus 4.7, Opus 4.6, and Sonnet 4.6. On Mythos Preview, adaptive thinking is the default and applies automatically whenever `thinking` is unset. On Claude Opus 4.7, adaptive thinking is the only supported mode and `type: "enabled"` with `budget_tokens` is rejected. Older models only support `type: "enabled"` with `budget_tokens`. On Opus 4.6 and Sonnet 4.6, `type: "enabled"` with `budget_tokens` is still functional but deprecated.

**Interleaved thinking availability by mode:**
- **Adaptive mode:** Interleaved thinking is automatically enabled on Claude Mythos Preview, Claude Opus 4.7, Opus 4.6, and Sonnet 4.6. On Mythos Preview and Opus 4.7, inter-tool reasoning always lives inside thinking blocks.
- **Manual mode on Sonnet 4.6:** Interleaved thinking works via the `interleaved-thinking-2025-05-14` beta header.
- **Manual mode on Opus 4.6:** Interleaved thinking is not available. If your agentic workflow requires thinking between tool calls on Opus 4.6, use adaptive mode.
</Note>

## Important considerations

### Validation changes

When using adaptive thinking, previous assistant turns don't need to start with thinking blocks. This is more flexible than manual mode, where the API enforces that thinking-enabled turns begin with a thinking block.

### Prompt caching

Consecutive requests using `adaptive` thinking preserve [prompt cache](/docs/en/build-with-claude/prompt-caching) breakpoints. However, switching between `adaptive` and `enabled`/`disabled` thinking modes breaks cache breakpoints for messages. System prompts and tool definitions remain cached regardless of mode changes.

### Tuning thinking behavior

Adaptive thinking's triggering behavior is promptable. If Claude is thinking more or less often than you'd like, you can add guidance to your system prompt:

```text
Extended thinking adds latency and should only be used when it
will meaningfully improve answer quality — typically for problems
that require multi-step reasoning. When in doubt, respond directly.
```

<Warning>
Steering Claude to think less often may reduce quality on tasks that benefit from reasoning. Measure the impact on your specific workloads before deploying prompt-based tuning to production. Consider testing with lower [effort levels](/docs/en/build-with-claude/effort) first.
</Warning>

### Cost control

Use `max_tokens` as a hard limit on total output (thinking + response text). The `effort` parameter provides additional soft guidance on how much thinking Claude allocates. Together, these give you effective control over cost.

At `high` and `max` effort levels, Claude may think more extensively and can be more likely to exhaust the `max_tokens` budget. If you observe `stop_reason: "max_tokens"` in responses, consider increasing `max_tokens` to give the model more room, or lowering the effort level.

## Working with thinking blocks

The following concepts apply to all models that support extended thinking, regardless of whether you use adaptive or manual mode.

### Summarized thinking

With extended thinking enabled, the Messages API for Claude 4 models returns a summary of Claude's full thinking process. Summarized thinking provides the full intelligence benefits of extended thinking, while preventing misuse. This is the default behavior on Claude 4 models when the `display` field on the thinking configuration is unset or set to `"summarized"`. On Claude Opus 4.7 and [Claude Mythos Preview](https://anthropic.com/glasswing), `display` defaults to `"omitted"` instead, so you must set `display: "summarized"` explicitly to receive summarized thinking.

Here are some important considerations for summarized thinking:

- You're charged for the full thinking tokens generated by the original request, not the summary tokens.
- The billed output token count will **not match** the count of tokens you see in the response.
- On Claude 4 models, the first few lines of thinking output are more verbose, providing detailed reasoning that's particularly helpful for prompt engineering purposes. [Claude Mythos Preview](https://anthropic.com/glasswing) summarizes from the first token, so its thinking blocks do not show this verbose preamble.
- As Anthropic seeks to improve the extended thinking feature, summarization behavior is subject to change.
- Summarization preserves the key ideas of Claude's thinking process with minimal added latency, enabling a streamable user experience.
- Summarization is processed by a different model than the one you target in your requests. The thinking model does not see the summarized output.

<Note>
In rare cases where you need access to full thinking output for Claude 4 models, [contact our sales team](mailto:sales@anthropic.com).
</Note>

### Controlling thinking display

The `display` field on the thinking configuration controls how thinking content is returned in API responses. It accepts two values:

- `"summarized"`: Thinking blocks contain summarized thinking text. See [Summarized thinking](#summarized-thinking) for details. This is the default on Claude Opus 4.6, Claude Sonnet 4.6, and earlier Claude 4 models.
- `"omitted"`: Thinking blocks are returned with an empty `thinking` field. The `signature` field still carries the encrypted full thinking for multi-turn continuity (see [Thinking encryption](#thinking-encryption)). This is the default on Claude Opus 4.7 and [Claude Mythos Preview](https://anthropic.com/glasswing).

Setting `display: "omitted"` is useful when your application doesn't surface thinking content to users. The primary benefit is **faster time-to-first-text-token when streaming:** The server skips streaming thinking tokens entirely and delivers only the signature, so the final text response begins streaming sooner.

Here are some important considerations for omitted thinking:

- You're still charged for the full thinking tokens. Omitting reduces latency, not cost.
- If you pass thinking blocks back in multi-turn conversations, pass them unchanged. The server decrypts the `signature` to reconstruct the original thinking for prompt construction (see [Preserving thinking blocks](/docs/en/build-with-claude/extended-thinking#preserving-thinking-blocks)). Any text you place in the `thinking` field of a round-tripped omitted block is ignored.
- `display` is invalid with `thinking.type: "disabled"` (there is nothing to display).
- When using `thinking.type: "adaptive"` and the model skips thinking for a simple request, no thinking block is produced regardless of `display`.

<Note>
The `signature` field is identical whether `display` is `"summarized"` or `"omitted"`. Switching `display` values between turns in a conversation is supported.
</Note>

<Note>
On Claude Opus 4.7, `thinking.display` defaults to `"omitted"`. Thinking blocks still appear in the response stream, but their `thinking` field is empty unless you explicitly opt in. This is a silent change from Claude Opus 4.6, where the default was `"summarized"`. To restore summarized thinking text on Claude Opus 4.7, set `thinking.display` to `"summarized"` explicitly:

```python
thinking = {
    "type": "adaptive",
    "display": "summarized",
}
```
</Note>

For code examples and streaming behavior with `display: "omitted"`, see [Controlling thinking display](/docs/en/build-with-claude/extended-thinking#controlling-thinking-display) on the extended thinking page. The examples there use `type: "enabled"`; with adaptive thinking, use:

```python
thinking = {"type": "adaptive", "display": "omitted"}
```

### Thinking encryption

Full thinking content is encrypted and returned in the `signature` field. This field is used to verify that thinking blocks were generated by Claude when passed back to the API.

<Note>
It is only strictly necessary to send back thinking blocks when using [tools with extended thinking](/docs/en/build-with-claude/extended-thinking#extended-thinking-with-tool-use). Otherwise you can omit thinking blocks from previous turns. If you pass them back, whether the API keeps or strips them depends on the model: Opus 4.5+ and Sonnet 4.6+ keep them in context by default; earlier Opus/Sonnet models and all Haiku models strip them. See [context editing](/docs/en/build-with-claude/context-editing) to configure this.

If sending back thinking blocks, we recommend passing everything back as you received it for consistency and to avoid potential issues.
</Note>

Here are some important considerations on thinking encryption:
- When [streaming responses](/docs/en/build-with-claude/extended-thinking#streaming-thinking), the signature is added via a `signature_delta` inside a `content_block_delta` event just before the `content_block_stop` event.
- `signature` values are significantly longer in Claude 4 models than in previous models.
- The `signature` field is an opaque field and should not be interpreted or parsed.
- `signature` values are compatible across platforms (Claude APIs, [Amazon Bedrock](/docs/en/build-with-claude/claude-in-amazon-bedrock), and [Vertex AI](/docs/en/build-with-claude/claude-on-vertex-ai)). Values generated on one platform will be compatible with another.

### Pricing

For complete pricing information including base rates, cache writes, cache hits, and output tokens, see the [pricing page](/docs/en/about-claude/pricing).

The thinking process incurs charges for:
- Tokens used during thinking (output tokens)
- Thinking blocks from prior assistant turns kept in context: only the last turn on earlier Opus/Sonnet models and all Haiku models; all turns by default on Opus 4.5+ and Sonnet 4.6+ (input tokens)
- Standard text output tokens

<Note>
When extended thinking is enabled, a specialized system prompt is automatically included to support this feature.
</Note>

When using summarized thinking:
- **Input tokens:** Tokens in your original request (excludes thinking tokens from previous turns)
- **Output tokens (billed):** The original thinking tokens that Claude generated internally
- **Output tokens (visible):** The summarized thinking tokens you see in the response
- **No charge:** Tokens used to generate the summary

When using `display: "omitted"`:
- **Input tokens:** Tokens in your original request (same as summarized)
- **Output tokens (billed):** The original thinking tokens that Claude generated internally (same as summarized)
- **Output tokens (visible):** Zero thinking tokens (the `thinking` field is empty)

<Warning>
The billed output token count will **not** match the visible token count in the response. You are billed for the full thinking process, not the thinking content visible in the response.
</Warning>

### Additional topics

The extended thinking page covers several topics in more detail with mode-specific code examples:

- **[Tool use with thinking](/docs/en/build-with-claude/extended-thinking#extended-thinking-with-tool-use)**: The same rules apply for adaptive thinking: preserve thinking blocks between tool calls and be aware of `tool_choice` limitations when thinking is active.
- **[Prompt caching](/docs/en/build-with-claude/extended-thinking#extended-thinking-with-prompt-caching)**: With adaptive thinking, consecutive requests using the same thinking mode preserve cache breakpoints. Switching between `adaptive` and `enabled`/`disabled` modes breaks cache breakpoints for messages (system prompts and tool definitions remain cached).
- **[Context windows](/docs/en/build-with-claude/extended-thinking#max-tokens-and-context-window-size-with-extended-thinking)**: How thinking tokens interact with `max_tokens` and context window limits.

## Next steps

<CardGroup>
  <Card title="Extended thinking" icon="settings" href="/docs/en/build-with-claude/extended-thinking">
    Learn more about extended thinking, including manual mode, tool use, and prompt caching.
  </Card>
  <Card title="Effort parameter" icon="gauge" href="/docs/en/build-with-claude/effort">
    Control how thoroughly Claude responds with the effort parameter.
  </Card>
</CardGroup>

---

# Batch processing

URL: https://platform.claude.com/docs/en/build-with-claude/batch-processing

# Batch processing

---

Batch processing is a powerful approach for handling large volumes of requests efficiently. Instead of processing requests one at a time with immediate responses, batch processing allows you to submit multiple requests together for asynchronous processing. This pattern is particularly useful when:

- You need to process large volumes of data
- Immediate responses are not required
- You want to optimize for cost efficiency
- You're running large-scale evaluations or analyses

The Message Batches API is Anthropic's first implementation of this pattern.

<Note>
This feature is **not** eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). Data is retained according to the feature's standard retention policy.
</Note>

---

# Message Batches API

The Message Batches API is a powerful, cost-effective way to asynchronously process large volumes of [Messages](/docs/en/api/messages/create) requests. This approach is well-suited to tasks that do not require immediate responses, with most batches finishing in less than 1 hour while reducing costs by 50% and increasing throughput.

You can [explore the API reference directly](/docs/en/api/creating-message-batches), in addition to this guide.

## How the Message Batches API works

When you send a request to the Message Batches API:

1. The system creates a new Message Batch with the provided Messages requests.
2. The batch is then processed asynchronously, with each request handled independently.
3. You can poll for the status of the batch and retrieve results when processing has ended for all requests.

This is especially useful for bulk operations that don't require immediate results, such as:
- Large-scale evaluations: Process thousands of test cases efficiently.
- Content moderation: Analyze large volumes of user-generated content asynchronously.
- Data analysis: Generate insights or summaries for large datasets.
- Bulk content generation: Create large amounts of text for various purposes (e.g., product descriptions, article summaries).

### Batch limitations
- A Message Batch is limited to either 100,000 Message requests or 256 MB in size, whichever is reached first.
- The system processes each batch as fast as possible, with most batches completing within 1 hour. You can access batch results when all messages have completed or after 24 hours, whichever comes first. Batches expire if processing does not complete within 24 hours.
- Batch results are available for 29 days after creation. After that, you may still view the Batch, but its results will no longer be available for download.
- Batches are scoped to a [Workspace](/settings/workspaces). You may view all batches (and their results) that were created within the Workspace that your API key belongs to.
- Rate limits apply to both Batches API HTTP requests and the number of requests within a batch waiting to be processed. See [Message Batches API rate limits](/docs/en/api/rate-limits#message-batches-api). Additionally, processing may be slowed down based on current demand and your request volume. In that case, you may see more requests expiring after 24 hours.
- Due to high throughput and concurrent processing, batches may go slightly over your Workspace's configured [spend limit](/settings/limits).
- Each batched request must have `max_tokens` of at least `1`. `max_tokens: 0` ([cache pre-warming](/docs/en/build-with-claude/prompt-caching#pre-warming-the-cache)) is not supported inside a batch, since an ephemeral cache entry written during batch processing would likely expire before the follow-up request runs.

### Supported models

All [active models](/docs/en/about-claude/models/overview) support the Message Batches API.

### What can be batched
Any request that you can make to the Messages API can be included in a batch. This includes:

- Vision
- Tool use
- System messages
- Multi-turn conversations
- Any beta features

Since each request in the batch is processed independently, you can mix different types of requests within a single batch.

<Tip>
Since batches can take longer than 5 minutes to process, consider using the [1-hour cache duration](/docs/en/build-with-claude/prompt-caching#1-hour-cache-duration) with prompt caching for better cache hit rates when processing batches with shared context.
</Tip>

---
## Pricing

The Batches API offers significant cost savings. All usage is charged at 50% of the standard API prices.

| Model             | Batch input      | Batch output    |
|-------------------|------------------|-----------------|
| Claude Opus 4.7       | $2.50 / MTok     | $12.50 / MTok   |
| Claude Opus 4.6       | $2.50 / MTok     | $12.50 / MTok   |
| Claude Opus 4.5     | $2.50 / MTok     | $12.50 / MTok   |
| Claude Opus 4.1     | $7.50 / MTok     | $37.50 / MTok   |
| Claude Opus 4 ([deprecated](/docs/en/about-claude/model-deprecations)) | $7.50 / MTok     | $37.50 / MTok   |
| Claude Sonnet 4.6   | $1.50 / MTok     | $7.50 / MTok    |
| Claude Sonnet 4.5   | $1.50 / MTok     | $7.50 / MTok    |
| Claude Sonnet 4 ([deprecated](/docs/en/about-claude/model-deprecations)) | $1.50 / MTok     | $7.50 / MTok    |
| Claude Haiku 4.5  | $0.50 / MTok     | $2.50 / MTok    |
| Claude Haiku 3.5 ([retired, except on Bedrock and Vertex AI](/docs/en/about-claude/model-deprecations)) | $0.40 / MTok     | $2 / MTok       |

---
## How to use the Message Batches API

### Prepare and create your batch

A Message Batch is composed of a list of requests to create a Message. The shape of an individual request is comprised of:
- A unique `custom_id` for identifying the Messages request. Must be 1 to 64 characters and contain only alphanumeric characters, hyphens, and underscores (matching `^[a-zA-Z0-9_-]{1,64}$`).
- A `params` object with the standard [Messages API](/docs/en/api/messages/create) parameters

You can [create a batch](/docs/en/api/creating-message-batches) by passing this list into the `requests` parameter:

<CodeGroup>

```bash cURL
curl https://api.anthropic.com/v1/messages/batches \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "requests": [
        {
            "custom_id": "my-first-request",
            "params": {
                "model": "claude-opus-4-7",
                "max_tokens": 1024,
                "messages": [
                    {"role": "user", "content": "Hello, world"}
                ]
            }
        },
        {
            "custom_id": "my-second-request",
            "params": {
                "model": "claude-opus-4-7",
                "max_tokens": 1024,
                "messages": [
                    {"role": "user", "content": "Hi again, friend"}
                ]
            }
        }
    ]
}'
```

```bash CLI
ant messages:batches create <<'YAML'
requests:
  - custom_id: my-first-request
    params:
      model: claude-opus-4-7
      max_tokens: 1024
      messages:
        - role: user
          content: Hello, world
  - custom_id: my-second-request
    params:
      model: claude-opus-4-7
      max_tokens: 1024
      messages:
        - role: user
          content: Hi again, friend
YAML
```

```python Python hidelines={1}
import anthropic
from anthropic.types.message_create_params import MessageCreateParamsNonStreaming
from anthropic.types.messages.batch_create_params import Request

client = anthropic.Anthropic()

message_batch = client.messages.batches.create(
    requests=[
        Request(
            custom_id="my-first-request",
            params=MessageCreateParamsNonStreaming(
                model="claude-opus-4-7",
                max_tokens=1024,
                messages=[
                    {
                        "role": "user",
                        "content": "Hello, world",
                    }
                ],
            ),
        ),
        Request(
            custom_id="my-second-request",
            params=MessageCreateParamsNonStreaming(
                model="claude-opus-4-7",
                max_tokens=1024,
                messages=[
                    {
                        "role": "user",
                        "content": "Hi again, friend",
                    }
                ],
            ),
        ),
    ]
)

print(message_batch)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const messageBatch = await anthropic.messages.batches.create({
  requests: [
    {
      custom_id: "my-first-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        messages: [{ role: "user", content: "Hello, world" }]
      }
    },
    {
      custom_id: "my-second-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        messages: [{ role: "user", content: "Hi again, friend" }]
      }
    }
  ]
});

console.log(messageBatch);
```

```csharp C#
using Anthropic;
using Anthropic.Models.Messages;
using Anthropic.Models.Messages.Batches;

AnthropicClient client = new();

var batch = await client.Messages.Batches.Create(new BatchCreateParams
{
    Requests =
    [
        new()
        {
            CustomID = "my-first-request",
            Params = new()
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                Messages =
                [
                    new() { Role = Role.User, Content = "Hello, world" }
                ]
            }
        },
        new()
        {
            CustomID = "my-second-request",
            Params = new()
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                Messages =
                [
                    new() { Role = Role.User, Content = "Hi again, friend" }
                ]
            }
        }
    ]
});

Console.WriteLine(batch);
```

```go Go hidelines={1..10,-1}
package main

import (
	"context"
	"fmt"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	batch, _ := client.Messages.Batches.New(context.Background(),
		anthropic.MessageBatchNewParams{
			Requests: []anthropic.MessageBatchNewParamsRequest{
				{
					CustomID: "my-first-request",
					Params: anthropic.MessageBatchNewParamsRequestParams{
						Model:     anthropic.ModelClaudeOpus4_7,
						MaxTokens: 1024,
						Messages: []anthropic.MessageParam{
							anthropic.NewUserMessage(
								anthropic.NewTextBlock("Hello, world"),
							),
						},
					},
				},
				{
					CustomID: "my-second-request",
					Params: anthropic.MessageBatchNewParamsRequestParams{
						Model:     anthropic.ModelClaudeOpus4_7,
						MaxTokens: 1024,
						Messages: []anthropic.MessageParam{
							anthropic.NewUserMessage(
								anthropic.NewTextBlock("Hi again, friend"),
							),
						},
					},
				},
			},
		})

	fmt.Println(batch.ID)
}
```

```java Java hidelines={1..3,5..8,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.batches.*;

public class BatchExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    BatchCreateParams params = BatchCreateParams.builder()
      .addRequest(
        BatchCreateParams.Request.builder()
          .customId("my-first-request")
          .params(
            BatchCreateParams.Request.Params.builder()
              .model(Model.CLAUDE_OPUS_4_7)
              .maxTokens(1024)
              .addUserMessage("Hello, world")
              .build()
          )
          .build()
      )
      .addRequest(
        BatchCreateParams.Request.builder()
          .customId("my-second-request")
          .params(
            BatchCreateParams.Request.Params.builder()
              .model(Model.CLAUDE_OPUS_4_7)
              .maxTokens(1024)
              .addUserMessage("Hi again, friend")
              .build()
          )
          .build()
      )
      .build();

    MessageBatch messageBatch = client.messages().batches().create(params);

    System.out.println(messageBatch);
  }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(
    apiKey: getenv("ANTHROPIC_API_KEY")
);

$batch = $client->messages->batches->create(
    requests: [
        [
            'custom_id' => 'my-first-request',
            'params' => [
                'model' => 'claude-opus-4-7',
                'max_tokens' => 1024,
                'messages' => [
                    ['role' => 'user', 'content' => 'Hello, world']
                ]
            ]
        ],
        [
            'custom_id' => 'my-second-request',
            'params' => [
                'model' => 'claude-opus-4-7',
                'max_tokens' => 1024,
                'messages' => [
                    ['role' => 'user', 'content' => 'Hi again, friend']
                ]
            ]
        ]
    ],
);

echo $batch->id;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

batch = client.messages.batches.create(
  requests: [
    {
      custom_id: "my-first-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        messages: [
          { role: "user", content: "Hello, world" }
        ]
      }
    },
    {
      custom_id: "my-second-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        messages: [
          { role: "user", content: "Hi again, friend" }
        ]
      }
    }
  ]
)

puts batch
```

</CodeGroup>

In this example, two separate requests are batched together for asynchronous processing. Each request has a unique `custom_id` and contains the standard parameters you'd use for a Messages API call.

<Tip>
  **Test your batch requests with the Messages API**

Validation of the `params` object for each message request is performed asynchronously, and validation errors are returned when processing of the entire batch has ended. You can ensure that you are building your input correctly by verifying your request shape with the [Messages API](/docs/en/api/messages/create) first.
</Tip>

When a batch is first created, the response will have a processing status of `in_progress`.

```json Output
{
  "id": "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d",
  "type": "message_batch",
  "processing_status": "in_progress",
  "request_counts": {
    "processing": 2,
    "succeeded": 0,
    "errored": 0,
    "canceled": 0,
    "expired": 0
  },
  "ended_at": null,
  "created_at": "2024-09-24T18:37:24.100435Z",
  "expires_at": "2024-09-25T18:37:24.100435Z",
  "cancel_initiated_at": null,
  "results_url": null
}
```

### Tracking your batch

The Message Batch's `processing_status` field indicates the stage of processing the batch is in. It starts as `in_progress`, then updates to `ended` once all the requests in the batch have finished processing, and results are ready. You can monitor the state of your batch by visiting the [Console](/settings/workspaces/default/batches), or using the [retrieval endpoint](/docs/en/api/retrieving-message-batches).

#### Polling for Message Batch completion

To poll a Message Batch, you'll need its `id`, which is provided in the response when creating a batch or by listing batches. You can implement a polling loop that checks the batch status periodically until processing has ended:

<CodeGroup>
```bash cURL hidelines={2..16,23}
#!/bin/sh
MESSAGE_BATCH_ID=$(curl -s https://api.anthropic.com/v1/messages/batches \
  --header "x-api-key: $ANTHROPIC_API_KEY" \
  --header "anthropic-version: 2023-06-01" \
  --header "content-type: application/json" \
  --data '{
    "requests": [{
      "custom_id": "test-1",
      "params": {
        "model": "claude-opus-4-7",
        "max_tokens": 100,
        "messages": [{"role": "user", "content": "Hi"}]
      }
    }]
  }' | jq -r '.id')

until [[ $(curl -s "https://api.anthropic.com/v1/messages/batches/$MESSAGE_BATCH_ID" \
          --header "x-api-key: $ANTHROPIC_API_KEY" \
          --header "anthropic-version: 2023-06-01" \
          | grep -o '"processing_status":[[:space:]]*"[^"]*"' \
          | cut -d'"' -f4) == "ended" ]]; do
    echo "Batch $MESSAGE_BATCH_ID is still processing..."
    break
    sleep 60
done

echo "Batch $MESSAGE_BATCH_ID has finished processing"
```

```bash CLI hidelines={2..14,19}
#!/bin/bash
MESSAGE_BATCH_ID=$(ant messages:batches create \
  --transform id --raw-output <<'YAML'
requests:
  - custom_id: test-1
    params:
      model: claude-opus-4-7
      max_tokens: 100
      messages:
        - role: user
          content: Hi
YAML
)

until [[ $(ant messages:batches retrieve \
          --message-batch-id "$MESSAGE_BATCH_ID" \
          --transform processing_status --raw-output) == "ended" ]]; do
    echo "Batch $MESSAGE_BATCH_ID is still processing..."
    break
    sleep 60
done

echo "Batch $MESSAGE_BATCH_ID has finished processing"
```

```python Python nocheck hidelines={1}
import anthropic
import time

client = anthropic.Anthropic()

MESSAGE_BATCH_ID = "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d"

message_batch = None
while True:
    message_batch = client.messages.batches.retrieve(MESSAGE_BATCH_ID)
    if message_batch.processing_status == "ended":
        break

    print(f"Batch {MESSAGE_BATCH_ID} is still processing...")
    time.sleep(60)
print(message_batch)
```

```typescript TypeScript nocheck hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const messageBatchId = "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d";

let messageBatch;
while (true) {
  messageBatch = await anthropic.messages.batches.retrieve(messageBatchId);
  if (messageBatch.processing_status === "ended") {
    break;
  }

  console.log(`Batch ${messageBatchId} is still processing... waiting`);
  await new Promise((resolve) => setTimeout(resolve, 60_000));
}
console.log(messageBatch);
```

```csharp C# nocheck hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages.Batches;

AnthropicClient client = new();
string messageBatchId = Environment.GetEnvironmentVariable("MESSAGE_BATCH_ID");

MessageBatch messageBatch = null;
while (true)
{
    messageBatch = await client.Messages.Batches.Retrieve(messageBatchId);
    if (messageBatch.ProcessingStatus == "ended")
    {
        break;
    }

    Console.WriteLine($"Batch {messageBatchId} is still processing...");
    await Task.Delay(60000);
}
Console.WriteLine(messageBatch);
```

```go Go nocheck hidelines={1..14,-1}
package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()
	messageBatchID := os.Getenv("MESSAGE_BATCH_ID")

	var messageBatch *anthropic.MessageBatch
	for {
		var err error
		messageBatch, err = client.Messages.Batches.Get(context.TODO(), messageBatchID)
		if err != nil {
			log.Fatal(err)
		}
		if messageBatch.ProcessingStatus == "ended" {
			break
		}

		fmt.Printf("Batch %s is still processing...\n", messageBatchID)
		time.Sleep(60 * time.Second)
	}
	fmt.Println(messageBatch)
}
```

```java Java nocheck hidelines={1..2,4..6,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.batches.MessageBatch;

public class MessageBatchPolling {
    public static void main(String[] args) throws InterruptedException {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();
        String messageBatchId = "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d";

        MessageBatch messageBatch = null;
        while (true) {
            messageBatch = client.messages().batches().retrieve(messageBatchId);
            if (messageBatch.processingStatus().equals(MessageBatch.ProcessingStatus.ENDED)) {
                break;
            }

            System.out.println("Batch " + messageBatchId + " is still processing...");
            Thread.sleep(60000);
        }
        System.out.println(messageBatch);
    }
}
```

```php PHP hidelines={1..4} nocheck
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));
$messageBatchId = getenv("MESSAGE_BATCH_ID");

$messageBatch = null;
while (true) {
    $messageBatch = $client->messages->batches->retrieve(
        messageBatchID: $messageBatchId,
    );
    if ($messageBatch->processingStatus === "ended") {
        break;
    }

    echo "Batch {$messageBatchId} is still processing...\n";
    sleep(60);
}
echo json_encode($messageBatch, JSON_PRETTY_PRINT);
```

```ruby Ruby nocheck hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message_batch_id = ENV["MESSAGE_BATCH_ID"]
message_batch = nil
loop do
  message_batch = client.messages.batches.retrieve(message_batch_id)
  break if message_batch.processing_status == :ended

  puts "Batch #{message_batch_id} is still processing..."
  sleep 60
end
puts message_batch
```

</CodeGroup>

### Listing all Message Batches

You can list all Message Batches in your Workspace using the [list endpoint](/docs/en/api/listing-message-batches). The API supports pagination, automatically fetching additional pages as needed:

<CodeGroup>
```bash cURL
#!/bin/sh

if ! command -v jq &> /dev/null; then
    echo "Error: This script requires jq. Please install it first."
    exit 1
fi

BASE_URL="https://api.anthropic.com/v1/messages/batches"

has_more=true
after_id=""

while [ "$has_more" = true ]; do
    # Construct URL with after_id if it exists
    if [ -n "$after_id" ]; then
        url="${BASE_URL}?limit=20&after_id=${after_id}"
    else
        url="$BASE_URL?limit=20"
    fi

    response=$(curl -s "$url" \
              --header "x-api-key: $ANTHROPIC_API_KEY" \
              --header "anthropic-version: 2023-06-01")

    # Extract values using jq
    has_more=$(echo "$response" | jq -r '.has_more')
    after_id=$(echo "$response" | jq -r '.last_id')

    # Process and print each entry in the data array
    echo "$response" | jq -c '.data[]' | while read -r entry; do
        echo "$entry" | jq '.'
    done
done
```

```bash CLI
# Automatically fetches more pages as needed
ant messages:batches list --limit 20
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

# Automatically fetches more pages as needed.
for message_batch in client.messages.batches.list(limit=20):
    print(message_batch)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

// Automatically fetches more pages as needed.
for await (const messageBatch of anthropic.messages.batches.list({
  limit: 20
})) {
  console.log(messageBatch);
}
```

```csharp C# hidelines={1..11,-2..}
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages.Batches;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new BatchListParams
        {
            Limit = 20
        };

        // Automatically fetches more pages as needed
        var page = await client.Messages.Batches.List(parameters);
        await foreach (var messageBatch in page.Paginate())
        {
            Console.WriteLine(messageBatch);
        }
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	// Automatically fetches more pages as needed
	iter := client.Messages.Batches.ListAutoPaging(context.TODO(), anthropic.MessageBatchListParams{
		Limit: anthropic.Int(20),
	})

	for iter.Next() {
		messageBatch := iter.Current()
		fmt.Println(messageBatch)
	}

	if err := iter.Err(); err != nil {
		log.Fatal(err)
	}
}
```

```java Java hidelines={1..2,4..7,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.batches.*;

public class BatchListExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    // Automatically fetches more pages as needed
    for (MessageBatch messageBatch : client
      .messages()
      .batches()
      .list(BatchListParams.builder().limit(20).build())
      .autoPager()) {
      System.out.println(messageBatch);
    }
  }
}
```

```php PHP hidelines={1..4} nocheck
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

// Automatically fetches more pages as needed
foreach ($client->messages->batches->list(limit: 20)->pagingEachItem() as $messageBatch) {
    echo $messageBatch->id . "\n";
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

# Automatically fetches more pages as needed
client.messages.batches.list(limit: 20).auto_paging_each do |message_batch|
  puts message_batch
end
```

</CodeGroup>

### Retrieving batch results

Once batch processing has ended, each Messages request in the batch has a result. There are 4 result types:

| Result Type | Description |
|-------------|-------------|
| `succeeded` | Request was successful. Includes the message result. |
| `errored`   | Request encountered an error and a message was not created. Possible errors include invalid requests and internal server errors. You will not be billed for these requests. |
| `canceled`  | User canceled the batch before this request could be sent to the model. You will not be billed for these requests. |
| `expired`   | Batch reached its 24 hour expiration before this request could be sent to the model. You will not be billed for these requests. |

You will see an overview of your results with the batch's `request_counts`, which shows how many requests reached each of these four states.

Results of the batch are available for download at the `results_url` property on the Message Batch, and if the organization permission allows, in the Console. Because of the potentially large size of the results, it's recommended to [stream results](/docs/en/api/retrieving-message-batch-results) back rather than download them all at once.

<CodeGroup>

```bash cURL
#!/bin/sh
curl "https://api.anthropic.com/v1/messages/batches/msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d" \
  --header "anthropic-version: 2023-06-01" \
  --header "x-api-key: $ANTHROPIC_API_KEY" \
  | grep -o '"results_url":[[:space:]]*"[^"]*"' \
  | cut -d'"' -f4 \
  | while read -r url; do
    curl -s "$url" \
      --header "anthropic-version: 2023-06-01" \
      --header "x-api-key: $ANTHROPIC_API_KEY" \
      | sed 's/}{/}\n{/g' \
      | while IFS= read -r line
    do
      result_type=$(echo "$line" | sed -n 's/.*"result":[[:space:]]*{[[:space:]]*"type":[[:space:]]*"\([^"]*\)".*/\1/p')
      custom_id=$(echo "$line" | sed -n 's/.*"custom_id":[[:space:]]*"\([^"]*\)".*/\1/p')
      error_type=$(echo "$line" | sed -n 's/.*"error":[[:space:]]*{[[:space:]]*"type":[[:space:]]*"\([^"]*\)".*/\1/p')

      case "$result_type" in
        "succeeded")
          echo "Success! $custom_id"
          ;;
        "errored")
          if [ "$error_type" = "invalid_request_error" ]; then
            # Request body must be fixed before re-sending request
            echo "Validation error: $custom_id"
          else
            # Request can be retried directly
            echo "Server error: $custom_id"
          fi
          ;;
        "expired")
          echo "Expired: $line"
          ;;
      esac
    done
  done

```

```bash CLI nocheck
ant messages:batches results \
  --message-batch-id msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d \
  --transform '{custom_id,"type":result.type,"error":result.error.error.type}' \
  --format jsonl \
  | while IFS= read -r line; do
    custom_id=${line#*'"custom_id":"'}; custom_id=${custom_id%%'"'*}
    case "$line" in
      *'"type":"succeeded"'*)
        printf 'Success! %s\n' "$custom_id" ;;
      *'"type":"errored"'*)
        case "$line" in
          *'"error":"invalid_request_error"'*)
            printf 'Validation error %s\n' "$custom_id" ;;
          *)
            printf 'Server error %s\n' "$custom_id" ;;
        esac ;;
      *'"type":"expired"'*)
        printf 'Request expired %s\n' "$custom_id" ;;
    esac
  done
```

```python Python nocheck hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

# Stream results file in memory-efficient chunks, processing one at a time
for result in client.messages.batches.results(
    "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d",
):
    match result.result.type:
        case "succeeded":
            print(f"Success! {result.custom_id}")
        case "errored":
            if result.result.error.error.type == "invalid_request_error":
                # Request body must be fixed before re-sending request
                print(f"Validation error {result.custom_id}")
            else:
                # Request can be retried directly
                print(f"Server error {result.custom_id}")
        case "expired":
            print(f"Request expired {result.custom_id}")
```

```typescript TypeScript nocheck hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

// Stream results file in memory-efficient chunks, processing one at a time
for await (const result of await anthropic.messages.batches.results(
  "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d"
)) {
  switch (result.result.type) {
    case "succeeded":
      console.log(`Success! ${result.custom_id}`);
      break;
    case "errored":
      if (result.result.error.type === "invalid_request_error") {
        // Request body must be fixed before re-sending request
        console.log(`Validation error: ${result.custom_id}`);
      } else {
        // Request can be retried directly
        console.log(`Server error: ${result.custom_id}`);
      }
      break;
    case "expired":
      console.log(`Request expired: ${result.custom_id}`);
      break;
  }
}
```

```csharp C# nocheck hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages.Batches;

AnthropicClient client = new();

await foreach (var result in client.Messages.Batches.ResultsStreaming("msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d"))
{
    switch (result.Result.Type)
    {
        case "succeeded":
            Console.WriteLine($"Success! {result.CustomID}");
            break;
        case "errored":
            if (result.Result.Error?.Type == "invalid_request")
            {
                Console.WriteLine($"Validation error: {result.CustomID}");
            }
            else
            {
                Console.WriteLine($"Server error: {result.CustomID}");
            }
            break;
        case "expired":
            Console.WriteLine($"Request expired: {result.CustomID}");
            break;
    }
}
```

```go Go nocheck hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	stream := client.Messages.Batches.ResultsStreaming(context.TODO(), "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d")

	for stream.Next() {
		result := stream.Current()

		switch variant := result.Result.AsAny().(type) {
		case anthropic.MessageBatchSucceededResult:
			fmt.Printf("Success! %s\n", result.CustomID)
		case anthropic.MessageBatchErroredResult:
			fmt.Printf("Error: %s - %s\n", result.CustomID, variant.Error.Error.Message)
		case anthropic.MessageBatchExpiredResult:
			fmt.Printf("Request expired: %s\n", result.CustomID)
		}
	}

	if err := stream.Err(); err != nil {
		log.Fatal(err)
	}
}
```

```java Java nocheck hidelines={1..2,6..9,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.core.http.StreamResponse;
import com.anthropic.models.messages.batches.BatchResultsParams;
import com.anthropic.models.messages.batches.MessageBatchIndividualResponse;

public class BatchResultsExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    // Stream results file in memory-efficient chunks, processing one at a time
    try (
      StreamResponse<MessageBatchIndividualResponse> streamResponse = client
        .messages()
        .batches()
        .resultsStreaming(
          BatchResultsParams.builder()
            .messageBatchId("msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d")
            .build()
        )
    ) {
      streamResponse
        .stream()
        .forEach(result -> {
          if (result.result().isSucceeded()) {
            System.out.println("Success! " + result.customId());
          } else if (result.result().isErrored()) {
            if (result.result().asErrored().error().error().isInvalidRequestError()) {
              // Request body must be fixed before re-sending request
              System.out.println("Validation error: " + result.customId());
            } else {
              // Request can be retried directly
              System.out.println("Server error: " + result.customId());
            }
          } else if (result.result().isExpired()) {
            System.out.println("Request expired: " + result.customId());
          }
        });
    }
  }
}
```

```php PHP hidelines={1..4} nocheck
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

foreach ($client->messages->batches->resultsStream(messageBatchID: 'msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d') as $result) {
    switch ($result->result->type) {
        case "succeeded":
            echo "Success! {$result->customID}\n";
            break;
        case "errored":
            if ($result->result->error->error->type === "invalid_request_error") {
                echo "Validation error: {$result->customID}\n";
            } else {
                echo "Server error: {$result->customID}\n";
            }
            break;
        case "expired":
            echo "Request expired: {$result->customID}\n";
            break;
    }
}
```

```ruby Ruby nocheck hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

client.messages.batches.results_streaming("msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d").each do |result|
  case result.result.type
  when :succeeded
    puts "Success! #{result.custom_id}"
  when :errored
    if result.result.error.type == :invalid_request
      puts "Validation error: #{result.custom_id}"
    else
      puts "Server error: #{result.custom_id}"
    end
  when :expired
    puts "Request expired: #{result.custom_id}"
  end
end
```

</CodeGroup>

The results are in `.jsonl` format, where each line is a valid JSON object representing the result of a single request in the Message Batch. For each streamed result, you can do something different depending on its `custom_id` and result type. Here is an example set of results:

```jsonl .jsonl file
{"custom_id":"my-second-request","result":{"type":"succeeded","message":{"id":"msg_014VwiXbi91y3JMjcpyGBHX5","type":"message","role":"assistant","model":"claude-opus-4-7","content":[{"type":"text","text":"Hello again! It's nice to see you. How can I assist you today? Is there anything specific you'd like to chat about or any questions you have?"}],"stop_reason":"end_turn","stop_sequence":null,"usage":{"input_tokens":11,"output_tokens":36}}}}
{"custom_id":"my-first-request","result":{"type":"succeeded","message":{"id":"msg_01FqfsLoHwgeFbguDgpz48m7","type":"message","role":"assistant","model":"claude-opus-4-7","content":[{"type":"text","text":"Hello! How can I assist you today? Feel free to ask me any questions or let me know if there's anything you'd like to chat about."}],"stop_reason":"end_turn","stop_sequence":null,"usage":{"input_tokens":10,"output_tokens":34}}}}
```

If your result has an error, its `result.error` will be set to the standard [error shape](/docs/en/api/errors#error-shapes).

<Tip>
  **Batch results may not match input order**

Batch results can be returned in any order, and may not match the ordering of requests when the batch was created. In the above example, the result for the second batch request is returned before the first. To correctly match results with their corresponding requests, always use the `custom_id` field.
</Tip>

### Canceling a Message Batch

You can cancel a Message Batch that is currently processing using the [cancel endpoint](/docs/en/api/canceling-message-batches). Immediately after cancellation, a batch's `processing_status` will be `canceling`. You can use the same polling technique described above to wait until cancellation is finalized. Canceled batches end up with a status of `ended` and may contain partial results for requests that were processed before cancellation.

<CodeGroup>
```bash cURL hidelines={2..15}
#!/bin/sh
MESSAGE_BATCH_ID=$(curl -s https://api.anthropic.com/v1/messages/batches \
  --header "x-api-key: $ANTHROPIC_API_KEY" \
  --header "anthropic-version: 2023-06-01" \
  --header "content-type: application/json" \
  --data '{
    "requests": [{
      "custom_id": "test-1",
      "params": {
        "model": "claude-opus-4-7",
        "max_tokens": 100,
        "messages": [{"role": "user", "content": "Hi"}]
      }
    }]
  }' | jq -r '.id')
curl --request POST https://api.anthropic.com/v1/messages/batches/$MESSAGE_BATCH_ID/cancel \
    --header "x-api-key: $ANTHROPIC_API_KEY" \
    --header "anthropic-version: 2023-06-01"
```

```bash CLI hidelines={2..13}
#!/bin/bash
MESSAGE_BATCH_ID=$(ant messages:batches create \
  --transform id --raw-output <<'YAML'
requests:
  - custom_id: test-1
    params:
      model: claude-opus-4-7
      max_tokens: 100
      messages:
        - role: user
          content: Hi
YAML
)
ant messages:batches cancel --message-batch-id "$MESSAGE_BATCH_ID"
```

```python Python nocheck hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

MESSAGE_BATCH_ID = "msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d"

message_batch = client.messages.batches.cancel(
    MESSAGE_BATCH_ID,
)
print(message_batch)
```

```typescript TypeScript nocheck hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const messageBatch = await anthropic.messages.batches.cancel(MESSAGE_BATCH_ID);
console.log(messageBatch);
```

```csharp C# nocheck hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages.Batches;

AnthropicClient client = new();
string messageBatchId = Environment.GetEnvironmentVariable("MESSAGE_BATCH_ID");

var messageBatch = await client.Messages.Batches.Cancel(messageBatchId);
Console.WriteLine(messageBatch);
```

```go Go nocheck hidelines={1..12,-1}
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()
	messageBatchID := os.Getenv("MESSAGE_BATCH_ID")

	messageBatch, err := client.Messages.Batches.Cancel(context.TODO(), messageBatchID)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(messageBatch)
}
```

```java Java nocheck hidelines={1..2,4..7,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.batches.*;

public class BatchCancelExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageBatch messageBatch = client
      .messages()
      .batches()
      .cancel("msgbatch_01HkcTjaV5uDC8jWR4ZsDV8d");
    System.out.println(messageBatch);
  }
}
```

```php PHP hidelines={1..4} nocheck
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$messageBatch = $client->messages->batches->cancel(
    messageBatchID: 'msgbatch_example_id',
);
echo $messageBatch;
```

```ruby Ruby nocheck hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message_batch_id = ENV.fetch("MESSAGE_BATCH_ID")
message_batch = client.messages.batches.cancel(message_batch_id)
puts message_batch
```

</CodeGroup>

The response will show the batch in a `canceling` state:

```json Output
{
  "id": "msgbatch_013Zva2CMHLNnXjNJJKqJ2EF",
  "type": "message_batch",
  "processing_status": "canceling",
  "request_counts": {
    "processing": 2,
    "succeeded": 0,
    "errored": 0,
    "canceled": 0,
    "expired": 0
  },
  "ended_at": null,
  "created_at": "2024-09-24T18:37:24.100435Z",
  "expires_at": "2024-09-25T18:37:24.100435Z",
  "cancel_initiated_at": "2024-09-24T18:39:03.114875Z",
  "results_url": null
}
```

### Using prompt caching with Message Batches

The Message Batches API supports prompt caching, allowing you to potentially reduce costs and processing time for batch requests. The pricing discounts from prompt caching and Message Batches can stack, providing even greater cost savings when both features are used together. However, since batch requests are processed asynchronously and concurrently, cache hits are provided on a best-effort basis. Users typically experience cache hit rates ranging from 30% to 98%, depending on their traffic patterns.

To maximize the likelihood of cache hits in your batch requests:

1. Include identical `cache_control` blocks in every Message request within your batch
2. Maintain a steady stream of requests to prevent cache entries from expiring after their 5-minute lifetime
3. Structure your requests to share as much cached content as possible

Example of implementing prompt caching in a batch:

<CodeGroup>

```bash cURL
curl https://api.anthropic.com/v1/messages/batches \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "requests": [
        {
            "custom_id": "my-first-request",
            "params": {
                "model": "claude-opus-4-7",
                "max_tokens": 1024,
                "system": [
                    {
                        "type": "text",
                        "text": "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    },
                    {
                        "type": "text",
                        "text": "<the entire contents of Pride and Prejudice>",
                        "cache_control": {"type": "ephemeral"}
                    }
                ],
                "messages": [
                    {"role": "user", "content": "Analyze the major themes in Pride and Prejudice."}
                ]
            }
        },
        {
            "custom_id": "my-second-request",
            "params": {
                "model": "claude-opus-4-7",
                "max_tokens": 1024,
                "system": [
                    {
                        "type": "text",
                        "text": "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    },
                    {
                        "type": "text",
                        "text": "<the entire contents of Pride and Prejudice>",
                        "cache_control": {"type": "ephemeral"}
                    }
                ],
                "messages": [
                    {"role": "user", "content": "Write a summary of Pride and Prejudice."}
                ]
            }
        }
    ]
}'
```

```bash CLI
ant messages:batches create <<'YAML'
requests:
  - custom_id: my-first-request
    params:
      model: claude-opus-4-7
      max_tokens: 1024
      system:
        - type: text
          text: >
            You are an AI assistant tasked with analyzing literary works. Your
            goal is to provide insightful commentary on themes, characters, and
            writing style.
        - type: text
          text: "<the entire contents of Pride and Prejudice>"
          cache_control:
            type: ephemeral
      messages:
        - role: user
          content: Analyze the major themes in Pride and Prejudice.
  - custom_id: my-second-request
    params:
      model: claude-opus-4-7
      max_tokens: 1024
      system:
        - type: text
          text: >
            You are an AI assistant tasked with analyzing literary works. Your
            goal is to provide insightful commentary on themes, characters, and
            writing style.
        - type: text
          text: "<the entire contents of Pride and Prejudice>"
          cache_control:
            type: ephemeral
      messages:
        - role: user
          content: Write a summary of Pride and Prejudice.
YAML
```

```python Python hidelines={1}
import anthropic
from anthropic.types.message_create_params import MessageCreateParamsNonStreaming
from anthropic.types.messages.batch_create_params import Request

client = anthropic.Anthropic()

message_batch = client.messages.batches.create(
    requests=[
        Request(
            custom_id="my-first-request",
            params=MessageCreateParamsNonStreaming(
                model="claude-opus-4-7",
                max_tokens=1024,
                system=[
                    {
                        "type": "text",
                        "text": "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n",
                    },
                    {
                        "type": "text",
                        "text": "<the entire contents of Pride and Prejudice>",
                        "cache_control": {"type": "ephemeral"},
                    },
                ],
                messages=[
                    {
                        "role": "user",
                        "content": "Analyze the major themes in Pride and Prejudice.",
                    }
                ],
            ),
        ),
        Request(
            custom_id="my-second-request",
            params=MessageCreateParamsNonStreaming(
                model="claude-opus-4-7",
                max_tokens=1024,
                system=[
                    {
                        "type": "text",
                        "text": "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n",
                    },
                    {
                        "type": "text",
                        "text": "<the entire contents of Pride and Prejudice>",
                        "cache_control": {"type": "ephemeral"},
                    },
                ],
                messages=[
                    {
                        "role": "user",
                        "content": "Write a summary of Pride and Prejudice.",
                    }
                ],
            ),
        ),
    ]
)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const messageBatch = await anthropic.messages.batches.create({
  requests: [
    {
      custom_id: "my-first-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
          },
          {
            type: "text",
            text: "<the entire contents of Pride and Prejudice>",
            cache_control: { type: "ephemeral" }
          }
        ],
        messages: [
          { role: "user", content: "Analyze the major themes in Pride and Prejudice." }
        ]
      }
    },
    {
      custom_id: "my-second-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
          },
          {
            type: "text",
            text: "<the entire contents of Pride and Prejudice>",
            cache_control: { type: "ephemeral" }
          }
        ],
        messages: [{ role: "user", content: "Write a summary of Pride and Prejudice." }]
      }
    }
  ]
});
```

```csharp C#
using Anthropic;
using Anthropic.Models.Messages;
using Anthropic.Models.Messages.Batches;

AnthropicClient client = new()
{
    ApiKey = Environment.GetEnvironmentVariable("ANTHROPIC_API_KEY")
};

var messageBatch = await client.Messages.Batches.Create(new BatchCreateParams
{
    Requests =
    [
        new()
        {
            CustomID = "my-first-request",
            Params = new()
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                System = new List<TextBlockParam>
                {
                    new()
                    {
                        Text = "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    },
                    new()
                    {
                        Text = "<the entire contents of Pride and Prejudice>",
                        CacheControl = new()
                    }
                },
                Messages =
                [
                    new() { Role = Role.User, Content = "Analyze the major themes in Pride and Prejudice." }
                ]
            }
        },
        new()
        {
            CustomID = "my-second-request",
            Params = new()
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                System = new List<TextBlockParam>
                {
                    new()
                    {
                        Text = "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    },
                    new()
                    {
                        Text = "<the entire contents of Pride and Prejudice>",
                        CacheControl = new()
                    }
                },
                Messages =
                [
                    new() { Role = Role.User, Content = "Write a summary of Pride and Prejudice." }
                ]
            }
        }
    ]
});
```

```go Go hidelines={1..10,-1}
package main

import (
	"context"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	messageBatch, err := client.Messages.Batches.New(context.TODO(), anthropic.MessageBatchNewParams{
		Requests: []anthropic.MessageBatchNewParamsRequest{
			{
				CustomID: "my-first-request",
				Params: anthropic.MessageBatchNewParamsRequestParams{
					Model:     anthropic.ModelClaudeOpus4_7,
					MaxTokens: 1024,
					System: []anthropic.TextBlockParam{
						{
							Text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n",
						},
						{
							Text:         "<the entire contents of Pride and Prejudice>",
							CacheControl: anthropic.NewCacheControlEphemeralParam(),
						},
					},
					Messages: []anthropic.MessageParam{
						anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the major themes in Pride and Prejudice.")),
					},
				},
			},
			{
				CustomID: "my-second-request",
				Params: anthropic.MessageBatchNewParamsRequestParams{
					Model:     anthropic.ModelClaudeOpus4_7,
					MaxTokens: 1024,
					System: []anthropic.TextBlockParam{
						{
							Text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n",
						},
						{
							Text:         "<the entire contents of Pride and Prejudice>",
							CacheControl: anthropic.NewCacheControlEphemeralParam(),
						},
					},
					Messages: []anthropic.MessageParam{
						anthropic.NewUserMessage(anthropic.NewTextBlock("Write a summary of Pride and Prejudice.")),
					},
				},
			},
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("%+v\n", messageBatch)
}
```

```java Java hidelines={1..2,4..5,7..11,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.CacheControlEphemeral;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.TextBlockParam;
import com.anthropic.models.messages.batches.*;
import java.util.List;

public class BatchExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    BatchCreateParams createParams = BatchCreateParams.builder()
      .addRequest(
        BatchCreateParams.Request.builder()
          .customId("my-first-request")
          .params(
            BatchCreateParams.Request.Params.builder()
              .model(Model.CLAUDE_OPUS_4_7)
              .maxTokens(1024)
              .systemOfTextBlockParams(
                List.of(
                  TextBlockParam.builder()
                    .text(
                      "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    )
                    .build(),
                  TextBlockParam.builder()
                    .text("<the entire contents of Pride and Prejudice>")
                    .cacheControl(CacheControlEphemeral.builder().build())
                    .build()
                )
              )
              .addUserMessage("Analyze the major themes in Pride and Prejudice.")
              .build()
          )
          .build()
      )
      .addRequest(
        BatchCreateParams.Request.builder()
          .customId("my-second-request")
          .params(
            BatchCreateParams.Request.Params.builder()
              .model(Model.CLAUDE_OPUS_4_7)
              .maxTokens(1024)
              .systemOfTextBlockParams(
                List.of(
                  TextBlockParam.builder()
                    .text(
                      "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
                    )
                    .build(),
                  TextBlockParam.builder()
                    .text("<the entire contents of Pride and Prejudice>")
                    .cacheControl(CacheControlEphemeral.builder().build())
                    .build()
                )
              )
              .addUserMessage("Write a summary of Pride and Prejudice.")
              .build()
          )
          .build()
      )
      .build();

    MessageBatch messageBatch = client.messages().batches().create(createParams);
  }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$messageBatch = $client->messages->batches->create(
    requests: [
        [
            'custom_id' => 'my-first-request',
            'params' => [
                'model' => 'claude-opus-4-7',
                'max_tokens' => 1024,
                'system' => [
                    [
                        'type' => 'text',
                        'text' => 'You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n'
                    ],
                    [
                        'type' => 'text',
                        'text' => '<the entire contents of Pride and Prejudice>',
                        'cache_control' => ['type' => 'ephemeral']
                    ]
                ],
                'messages' => [
                    ['role' => 'user', 'content' => 'Analyze the major themes in Pride and Prejudice.']
                ]
            ]
        ],
        [
            'custom_id' => 'my-second-request',
            'params' => [
                'model' => 'claude-opus-4-7',
                'max_tokens' => 1024,
                'system' => [
                    [
                        'type' => 'text',
                        'text' => 'You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n'
                    ],
                    [
                        'type' => 'text',
                        'text' => '<the entire contents of Pride and Prejudice>',
                        'cache_control' => ['type' => 'ephemeral']
                    ]
                ],
                'messages' => [
                    ['role' => 'user', 'content' => 'Write a summary of Pride and Prejudice.']
                ]
            ]
        ]
    ],
);
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message_batch = client.messages.batches.create(
  requests: [
    {
      custom_id: "my-first-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
          },
          {
            type: "text",
            text: "<the entire contents of Pride and Prejudice>",
            cache_control: { type: "ephemeral" }
          }
        ],
        messages: [
          { role: "user", content: "Analyze the major themes in Pride and Prejudice." }
        ]
      }
    },
    {
      custom_id: "my-second-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 1024,
        system: [
          {
            type: "text",
            text: "You are an AI assistant tasked with analyzing literary works. Your goal is to provide insightful commentary on themes, characters, and writing style.\n"
          },
          {
            type: "text",
            text: "<the entire contents of Pride and Prejudice>",
            cache_control: { type: "ephemeral" }
          }
        ],
        messages: [
          { role: "user", content: "Write a summary of Pride and Prejudice." }
        ]
      }
    }
  ]
)
```

</CodeGroup>

In this example, both requests in the batch include identical system messages and the full text of Pride and Prejudice marked with `cache_control` to increase the likelihood of cache hits.

### Extended output (beta)

The `output-300k-2026-03-24` beta header raises the `max_tokens` cap to 300,000 for batch requests using Claude Opus 4.7, Claude Opus 4.6, or Claude Sonnet 4.6. Include the header to generate outputs far longer than the standard limit (64k to 128k depending on model) in a single turn.

<Note>
Extended output is available on the Message Batches API only, not the synchronous Messages API. It is supported on the Claude API and Claude Platform on AWS, and is not available on Amazon Bedrock, Vertex AI, or Microsoft Foundry.
</Note>

Use extended output for long-form generation such as book-length drafts and technical documentation, exhaustive structured data extraction, large code-generation scaffolds, and long reasoning chains.

A single 300k-token generation can take over an hour to complete, so plan your batch submissions with the 24-hour processing window in mind. Standard batch pricing (50% of standard API prices) applies.

<CodeGroup>

```bash cURL
curl https://api.anthropic.com/v1/messages/batches \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "anthropic-beta: output-300k-2026-03-24" \
     --header "content-type: application/json" \
     --data \
'{
    "requests": [
        {
            "custom_id": "long-form-request",
            "params": {
                "model": "claude-opus-4-7",
                "max_tokens": 300000,
                "messages": [
                    {"role": "user", "content": "Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices."}
                ]
            }
        }
    ]
}'
```

```bash CLI
ant beta:messages:batches create --beta output-300k-2026-03-24 <<'YAML'
requests:
  - custom_id: long-form-request
    params:
      model: claude-opus-4-7
      max_tokens: 300000
      messages:
        - role: user
          content: >-
            Write a comprehensive technical guide to building distributed
            systems, covering architecture patterns, consistency models,
            fault tolerance, and operational best practices.
YAML
```

```python Python hidelines={1}
import anthropic
from anthropic.types.beta.message_create_params import MessageCreateParamsNonStreaming
from anthropic.types.beta.messages.batch_create_params import Request

client = anthropic.Anthropic()

message_batch = client.beta.messages.batches.create(
    betas=["output-300k-2026-03-24"],
    requests=[
        Request(
            custom_id="long-form-request",
            params=MessageCreateParamsNonStreaming(
                model="claude-opus-4-7",
                max_tokens=300_000,
                messages=[
                    {
                        "role": "user",
                        "content": "Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices.",
                    }
                ],
            ),
        ),
    ],
)

print(message_batch)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

const messageBatch = await anthropic.beta.messages.batches.create({
  betas: ["output-300k-2026-03-24"],
  requests: [
    {
      custom_id: "long-form-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 300000,
        messages: [
          {
            role: "user",
            content:
              "Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices."
          }
        ]
      }
    }
  ]
});

console.log(messageBatch);
```

```csharp C#
using Anthropic;
using Anthropic.Models.Beta.Messages;
using Anthropic.Models.Beta.Messages.Batches;

AnthropicClient client = new();

var batch = await client.Beta.Messages.Batches.Create(new BatchCreateParams
{
    Betas = ["output-300k-2026-03-24"],
    Requests =
    [
        new()
        {
            CustomID = "long-form-request",
            Params = new()
            {
                Model = "claude-opus-4-7",
                MaxTokens = 300_000,
                Messages =
                [
                    new() { Role = Role.User, Content = "Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices." }
                ]
            }
        }
    ]
});

Console.WriteLine(batch);
```

```go Go hidelines={1..10,-1}
package main

import (
	"context"
	"fmt"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	batch, err := client.Beta.Messages.Batches.New(context.Background(),
		anthropic.BetaMessageBatchNewParams{
			Betas: []anthropic.AnthropicBeta{"output-300k-2026-03-24"},
			Requests: []anthropic.BetaMessageBatchNewParamsRequest{
				{
					CustomID: "long-form-request",
					Params: anthropic.BetaMessageBatchNewParamsRequestParams{
						Model:     anthropic.ModelClaudeOpus4_7,
						MaxTokens: 300_000,
						Messages: []anthropic.BetaMessageParam{
							anthropic.NewBetaUserMessage(
								anthropic.NewBetaTextBlock("Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices."),
							),
						},
					},
				},
			},
		})
	if err != nil {
		panic(err)
	}

	fmt.Println(batch.ID)
}
```

```java Java hidelines={1..3,5..6,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.Model;
import com.anthropic.models.beta.messages.batches.*;

void main() {
  AnthropicClient client = AnthropicOkHttpClient.fromEnv();

  BatchCreateParams params = BatchCreateParams.builder()
    .addBeta("output-300k-2026-03-24")
    .addRequest(
      BatchCreateParams.Request.builder()
        .customId("long-form-request")
        .params(
          BatchCreateParams.Request.Params.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(300_000L)
            .addUserMessage("Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices.")
            .build()
        )
        .build()
    )
    .build();

  BetaMessageBatch messageBatch = client.beta().messages().batches().create(params);

  IO.println(messageBatch);
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client();

$batch = $client->beta->messages->batches->create(
    betas: ['output-300k-2026-03-24'],
    requests: [
        [
            'custom_id' => 'long-form-request',
            'params' => [
                'model' => 'claude-opus-4-7',
                'max_tokens' => 300_000,
                'messages' => [
                    ['role' => 'user', 'content' => 'Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices.']
                ]
            ]
        ]
    ],
);

echo $batch->id;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

batch = client.beta.messages.batches.create(
  betas: ["output-300k-2026-03-24"],
  requests: [
    {
      custom_id: "long-form-request",
      params: {
        model: "claude-opus-4-7",
        max_tokens: 300_000,
        messages: [
          { role: "user", content: "Write a comprehensive technical guide to building distributed systems, covering architecture patterns, consistency models, fault tolerance, and operational best practices." }
        ]
      }
    }
  ]
)

puts batch
```

</CodeGroup>

### Best practices for effective batching

To get the most out of the Batches API:

- Monitor batch processing status regularly and implement appropriate retry logic for failed requests.
- Use meaningful `custom_id` values to easily match results with requests, since order is not guaranteed.
- Consider breaking very large datasets into multiple batches for better manageability.
- Dry run a single request shape with the Messages API to avoid validation errors.

### Troubleshooting common issues

If experiencing unexpected behavior:

- Verify that the total batch request size doesn't exceed 256 MB. If the request size is too large, you may get a 413 `request_too_large` error.
- Check that you're using [supported models](#supported-models) for all requests in the batch.
- Ensure each request in the batch has a unique `custom_id`.
- Ensure that it has been less than 29 days since batch `created_at` (not processing `ended_at`) time. If over 29 days have passed, results will no longer be viewable.
- Confirm that the batch has not been canceled.

Note that the failure of one request in a batch does not affect the processing of other requests.

---
## Batch storage and privacy

- **Workspace isolation**: Batches are isolated within the Workspace they are created in. They can only be accessed by API keys associated with that Workspace, or users with permission to view Workspace batches in the Console.

- **Result availability**: Batch results are available for 29 days after the batch is created, allowing ample time for retrieval and processing.

---
## Data retention

Batch processing stores request and response data for up to 29 days after batch creation. You can delete a message batch at any time after processing using the `DELETE /v1/messages/batches/{batch_id}` endpoint. To delete an in-progress batch, cancel it first. Asynchronous processing requires server-side storage of both inputs and outputs until batch completion and result retrieval.

For ZDR eligibility across all features, see [API and data retention](/docs/en/manage-claude/api-and-data-retention).

## FAQ

  <section title="How long does it take for a batch to process?">

    Batches may take up to 24 hours for processing, but many finish sooner. Actual processing time depends on the size of the batch, current demand, and your request volume. It is possible for a batch to expire and not complete within 24 hours.
  
</section>

  <section title="Is the Batches API available for all models?">

    See [above](#supported-models) for the list of supported models.
  
</section>

  <section title="Can I use the Message Batches API with other API features?">

    Yes, the Message Batches API supports all features available in the Messages API, including beta features. However, streaming is not supported for batch requests.
  
</section>

  <section title="How does the Message Batches API affect pricing?">

    The Message Batches API offers a 50% discount on all usage compared to standard API prices. This applies to input tokens, output tokens, and any special tokens. For more on pricing, visit the [pricing page](https://claude.com/pricing#anthropic-api).
  
</section>

  <section title="Can I update a batch after it's been submitted?">

    No, once a batch has been submitted, it cannot be modified. If you need to make changes, you should cancel the current batch and submit a new one. Note that cancellation may not take immediate effect.
  
</section>

  <section title="Are there Message Batches API rate limits and do they interact with the Messages API rate limits?">

    The Message Batches API has HTTP requests-based rate limits in addition to limits on the number of requests in need of processing. See [Message Batches API rate limits](/docs/en/api/rate-limits#message-batches-api). Usage of the Batches API does not affect rate limits in the Messages API.
  
</section>

  <section title="How do I handle errors in my batch requests?">

    When you retrieve the results, each request will have a `result` field indicating whether it `succeeded`, `errored`, was `canceled`, or `expired`. For `errored` results, additional error information will be provided. View the error response object in the [API reference](/docs/en/api/creating-message-batches).
  
</section>

  <section title="How does the Message Batches API handle privacy and data separation?">

    The Message Batches API is designed with strong privacy and data separation measures:

    1. Batches and their results are isolated within the Workspace in which they were created. This means they can only be accessed by API keys from that same Workspace.
    2. Each request within a batch is processed independently, with no data leakage between requests.
    3. Results are only available for a limited time (29 days), and follow Anthropic's [data retention policy](https://support.claude.com/en/articles/7996866-how-long-do-you-store-personal-data).
    4. Downloading batch results in the Console can be disabled on the organization-level or on a per-workspace basis.
  
</section>

  <section title="Can I use prompt caching in the Message Batches API?">

    Yes, it is possible to use prompt caching with Message Batches API. However, because asynchronous batch requests can be processed concurrently and in any order, cache hits are provided on a best-effort basis.
  
</section>

---

# Building with extended thinking

URL: https://platform.claude.com/docs/en/build-with-claude/extended-thinking

# Building with extended thinking

---

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

Extended thinking gives Claude enhanced reasoning capabilities for complex tasks, while providing varying levels of transparency into its step-by-step thought process before it delivers its final answer.

<Note>
For Claude Opus 4.7, use [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`) with the [effort parameter](/docs/en/build-with-claude/effort). Manual extended thinking (`thinking: {type: "enabled", budget_tokens: N}`) is no longer supported on Claude Opus 4.7 and returns a 400 error. For Claude Opus 4.6 and Claude Sonnet 4.6, adaptive thinking is also recommended; the manual configuration is still functional on these models but is deprecated and will be removed in a future model release.
</Note>

## Supported models

Manual extended thinking (`thinking: {type: "enabled", budget_tokens: N}`) is supported on all current Claude models **except Claude Opus 4.7**, where it is no longer accepted and returns a 400 error. A few models have mode-specific behavior:

- **Claude Opus 4.7 (`claude-opus-4-7`):** manual extended thinking is no longer supported. Use [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`) with the [effort parameter](/docs/en/build-with-claude/effort) instead.
- **[Claude Mythos Preview](https://anthropic.com/glasswing):** [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) is the default; `thinking: {type: "enabled", budget_tokens: N}` is also accepted. `thinking: {type: "disabled"}` is not supported, and `display` defaults to `"omitted"` rather than returning thinking content. Pass `display: "summarized"` to receive summaries.
- **Claude Opus 4.6 (`claude-opus-4-6`):** [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) recommended; manual mode (`type: "enabled"`) is deprecated but still functional.
- **Claude Sonnet 4.6 (`claude-sonnet-4-6`):** [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) recommended; manual mode (`type: "enabled"`) with [interleaved mode](#interleaved-thinking) is deprecated but still functional.

<Note>
Thinking behavior differs across Claude model versions. See [Differences in thinking across model versions](#differences-in-thinking-across-model-versions) for details.
</Note>

## How extended thinking works

When extended thinking is turned on, Claude creates `thinking` content blocks where it outputs its internal reasoning. Claude incorporates insights from this reasoning before crafting a final response.

The API response includes `thinking` content blocks, followed by `text` content blocks.

Here's an example of the default response format:

```json
{
  "content": [
    {
      "type": "thinking",
      "thinking": "Let me analyze this step by step...",
      "signature": "WaUjzkypQ2mUEVM36O2TxuC06KN8xyfbJwyem2dw3URve/op91XWHOEBLLqIOMfFG/UvLEczmEsUjavL...."
    },
    {
      "type": "text",
      "text": "Based on my analysis..."
    }
  ]
}
```

For more information about the response format of extended thinking, see the [Messages API Reference](/docs/en/api/messages/create).

## How to use extended thinking

Here is an example of using extended thinking in the Messages API:

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 16000,
    "thinking": {
        "type": "enabled",
        "budget_tokens": 10000
    },
    "messages": [
        {
            "role": "user",
            "content": "Are there an infinite number of prime numbers such that n mod 4 == 3?"
        }
    ]
}'
```

```bash CLI
ant messages create \
  --transform content --format yaml \
    --model claude-sonnet-4-6 \
    --max-tokens 16000 \
    --thinking '{type: enabled, budget_tokens: 10000}' \
    --message '{role: user, content: Are there an infinite number of prime numbers such that n mod 4 == 3?}'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    messages=[
        {
            "role": "user",
            "content": "Are there an infinite number of prime numbers such that n mod 4 == 3?",
        }
    ],
)

# The response contains summarized thinking blocks and text blocks
for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking summary: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  messages: [
    {
      role: "user",
      content: "Are there an infinite number of prime numbers such that n mod 4 == 3?"
    }
  ]
});

// The response contains summarized thinking blocks and text blocks
for (const block of response.content) {
  if (block.type === "thinking") {
    console.log(`\nThinking summary: ${block.thinking}`);
  } else if (block.type === "text") {
    console.log(`\nResponse: ${block.text}`);
  }
}
```

```csharp C# hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 10000),
    Messages = [
        new() {
            Role = Role.User,
            Content = "Are there an infinite number of prime numbers such that n mod 4 == 3?"
        }
    ]
};

var message = await client.Messages.Create(parameters);

foreach (var block in message.Content)
{
    if (block.TryPickThinking(out ThinkingBlock? thinking))
    {
        Console.WriteLine($"\nThinking summary: {thinking.Thinking}");
    }
    else if (block.TryPickText(out TextBlock? text))
    {
        Console.WriteLine($"\nResponse: {text.Text}");
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(10000),
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("Are there an infinite number of prime numbers such that n mod 4 == 3?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, block := range response.Content {
		switch v := block.AsAny().(type) {
		case anthropic.ThinkingBlock:
			fmt.Printf("\nThinking summary: %s", v.Thinking)
		case anthropic.TextBlock:
			fmt.Printf("\nResponse: %s", v.Text)
		}
	}
}
```

```java Java hidelines={1..7,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageCreateParams params = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .enabledThinking(10000L)
        .addUserMessage("Are there an infinite number of prime numbers such that n mod 4 == 3?")
        .build();

    Message response = client.messages().create(params);

    response.content().forEach(block -> {
        block.thinking().ifPresent(thinkingBlock ->
            IO.println("\nThinking summary: " + thinkingBlock.thinking())
        );
        block.text().ifPresent(textBlock ->
            IO.println("\nResponse: " + textBlock.text())
        );
    });
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 16000,
    messages: [
        [
            'role' => 'user',
            'content' => 'Are there an infinite number of prime numbers such that n mod 4 == 3?'
        ]
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 10000],
);

foreach ($message->content as $block) {
    if ($block->type === 'thinking') {
        echo "\nThinking summary: " . $block->thinking;
    } elseif ($block->type === 'text') {
        echo "\nResponse: " . $block->text;
    }
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  messages: [
    {
      role: "user",
      content: "Are there an infinite number of prime numbers such that n mod 4 == 3?"
    }
  ]
)

message.content.each do |block|
  case block.type
  when :thinking
    puts "\nThinking summary: #{block.thinking}"
  when :text
    puts "\nResponse: #{block.text}"
  end
end
```

</CodeGroup>

To turn on extended thinking, add a `thinking` object, with the `type` parameter set to `enabled` and the `budget_tokens` to a specified token budget for extended thinking. For Claude Opus 4.6 and Claude Sonnet 4.6, use `type: "adaptive"` instead. See [Adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) for details. While `type: "enabled"` with `budget_tokens` is still functional on these models, it is deprecated and will be removed in a future release.

The `budget_tokens` parameter determines the maximum number of tokens Claude is allowed to use for its internal reasoning process. This limit applies to full thinking tokens, not to [the summarized output](#summarized-thinking). Larger budgets can improve response quality by enabling more thorough analysis for complex problems, although Claude may not use the entire budget allocated, especially at ranges above 32k.

<Warning>
`budget_tokens` is [deprecated](/docs/en/build-with-claude/overview#feature-availability) on Claude Opus 4.6 and Claude Sonnet 4.6 and will be removed in a future model release. Use [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) with the [effort parameter](/docs/en/build-with-claude/effort) to control thinking depth instead.
</Warning>

<Note>
[Claude Mythos Preview](https://anthropic.com/glasswing), Claude Opus 4.7, and Claude Opus 4.6 support up to 128k output tokens. Claude Sonnet 4.6 and Claude Haiku 4.5 support up to 64k. See the [models overview](/docs/en/about-claude/models/overview) for limits on legacy models. On the [Message Batches API](/docs/en/build-with-claude/batch-processing#extended-output-beta), the `output-300k-2026-03-24` [beta header](/docs/en/api/beta-headers) raises the output limit to 300k for Opus 4.7, Opus 4.6, and Sonnet 4.6.
</Note>

`budget_tokens` must be set to a value less than `max_tokens`. However, when using [interleaved thinking with tools](#interleaved-thinking), you can exceed this limit as the token limit becomes your entire context window. Because `budget_tokens` must be less than `max_tokens`, extended thinking cannot be combined with `max_tokens: 0` ([cache pre-warming](/docs/en/build-with-claude/prompt-caching#pre-warming-the-cache)).

### Summarized thinking

With extended thinking enabled, the Messages API for Claude 4 models returns a summary of Claude's full thinking process. Summarized thinking provides the full intelligence benefits of extended thinking, while preventing misuse. This is the default behavior on Claude 4 models when the `display` field on the thinking configuration is unset or set to `"summarized"`. On Claude Opus 4.7 and [Claude Mythos Preview](https://anthropic.com/glasswing), `display` defaults to `"omitted"` instead, so you must set `display: "summarized"` explicitly to receive summarized thinking.

Here are some important considerations for summarized thinking:

- You're charged for the full thinking tokens generated by the original request, not the summary tokens.
- The billed output token count will **not match** the count of tokens you see in the response.
- On Claude 4 models, the first few lines of thinking output are more verbose, providing detailed reasoning that's particularly helpful for prompt engineering purposes. [Claude Mythos Preview](https://anthropic.com/glasswing) summarizes from the first token, so its thinking blocks do not show this verbose preamble.
- As Anthropic seeks to improve the extended thinking feature, summarization behavior is subject to change.
- Summarization preserves the key ideas of Claude's thinking process with minimal added latency, enabling a streamable user experience.
- Summarization is processed by a different model than the one you target in your requests. The thinking model does not see the summarized output.

<Note>
In rare cases where you need access to full thinking output for Claude 4 models, [contact our sales team](mailto:sales@anthropic.com).
</Note>

### Controlling thinking display

The `display` field on the thinking configuration controls how thinking content is returned in API responses. It accepts two values:

- `"summarized"`: Thinking blocks contain summarized thinking text. See [Summarized thinking](#summarized-thinking) for details. This is the default on Claude Opus 4.6, Claude Sonnet 4.6, and earlier Claude 4 models.
- `"omitted"`: Thinking blocks are returned with an empty `thinking` field. The `signature` field still carries the encrypted full thinking for multi-turn continuity (see [Thinking encryption](#thinking-encryption)). This is the default on Claude Opus 4.7 and [Claude Mythos Preview](https://anthropic.com/glasswing).

Setting `display: "omitted"` is useful when your application doesn't surface thinking content to users. The primary benefit is **faster time-to-first-text-token when streaming:** The server skips streaming thinking tokens entirely and delivers only the signature, so the final text response begins streaming sooner.

Here are some important considerations for omitted thinking:

- You're still charged for the full thinking tokens. Omitting reduces latency, not cost.
- If you pass thinking blocks back in multi-turn conversations, pass them unchanged. The server decrypts the `signature` to reconstruct the original thinking for prompt construction (see [Preserving thinking blocks](/docs/en/build-with-claude/extended-thinking#preserving-thinking-blocks)). Any text you place in the `thinking` field of a round-tripped omitted block is ignored.
- `display` is invalid with `thinking.type: "disabled"` (there is nothing to display).
- When using `thinking.type: "adaptive"` and the model skips thinking for a simple request, no thinking block is produced regardless of `display`.

<Note>
The `signature` field is identical whether `display` is `"summarized"` or `"omitted"`. Switching `display` values between turns in a conversation is supported.
</Note>

<Note>
On [Claude Mythos Preview](https://anthropic.com/glasswing), `display` defaults to `"omitted"`. The examples in this section pass `display` explicitly so they apply to all models, but on Mythos Preview you can leave it unset and receive the same behavior. To receive summarized thinking on Mythos Preview, set `display: "summarized"` explicitly.
</Note>

Automated pipelines that never surface thinking content to end users can skip the overhead of receiving thinking tokens over the wire. Latency-sensitive applications get the same reasoning quality without waiting for thinking text to stream before the final response begins.

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 16000,
    "thinking": {
        "type": "enabled",
        "budget_tokens": 10000,
        "display": "omitted"
    },
    "messages": [
        {
            "role": "user",
            "content": "What is 27 * 453?"
        }
    ]
}'
```

```bash CLI
ant messages create \
  --model claude-sonnet-4-6 \
  --max-tokens 16000 \
  --transform content --format yaml \
    --thinking '{type: enabled, budget_tokens: 10000, display: omitted}' \
    --message '{role: user, content: "What is 27 * 453?"}'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000,
        "display": "omitted",
    },
    messages=[
        {"role": "user", "content": "What is 27 * 453?"},
    ],
)

for block in response.content:
    if block.type == "thinking":
        if block.thinking:
            print(f"Thinking: {block.thinking}")
        else:
            print("Thinking: [omitted]")
    elif block.type == "text":
        print(f"Response: {block.text}")
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000,
    display: "omitted"
  },
  messages: [
    {
      role: "user",
      content: "What is 27 * 453?"
    }
  ]
});

for (const block of response.content) {
  if (block.type === "thinking") {
    if (block.thinking.length > 0) {
      console.log(`Thinking: ${block.thinking}`);
    } else {
      console.log("Thinking: [omitted]");
    }
  } else if (block.type === "text") {
    console.log(`Response: ${block.text}`);
  }
}
```

```csharp C# hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var message = await client.Messages.Create(new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled
    {
        BudgetTokens = 10000,
        Display = ThinkingConfigEnabledDisplay.Omitted
    },
    Messages =
    [
        new() { Role = Role.User, Content = "What is 27 * 453?" }
    ]
});

foreach (var block in message.Content)
{
    if (block.TryPickThinking(out ThinkingBlock? thinking))
    {
        Console.WriteLine(string.IsNullOrEmpty(thinking.Thinking)
            ? "Thinking: [omitted]"
            : $"Thinking: {thinking.Thinking}");
    }
    else if (block.TryPickText(out TextBlock? text))
    {
        Console.WriteLine($"Response: {text.Text}");
    }
}
```

```go Go hidelines={1..12,-1}
package main

import (
	"cmp"
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.Background(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking: anthropic.ThinkingConfigParamUnion{
			OfEnabled: &anthropic.ThinkingConfigEnabledParam{
				BudgetTokens: 10000,
				Display:      anthropic.ThinkingConfigEnabledDisplayOmitted,
			},
		},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is 27 * 453?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, block := range response.Content {
		switch v := block.AsAny().(type) {
		case anthropic.ThinkingBlock:
			fmt.Println("Thinking:", cmp.Or(v.Thinking, "[omitted]"))
		case anthropic.TextBlock:
			fmt.Println("Response:", v.Text)
		}
	}
}
```

```java Java hidelines={1..5,7}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.ThinkingConfigEnabled;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageCreateParams params = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .thinking(ThinkingConfigEnabled.builder()
            .budgetTokens(10000L)
            .display(ThinkingConfigEnabled.Display.OMITTED)
            .build())
        .addUserMessage("What is 27 * 453?")
        .build();

    Message message = client.messages().create(params);

    message.content().forEach(block -> {
        block.thinking().ifPresent(thinkingBlock -> {
            if (thinkingBlock.thinking().isEmpty()) {
                IO.println("Thinking: [omitted]");
            } else {
                IO.println("Thinking: " + thinkingBlock.thinking());
            }
        });
        block.text().ifPresent(textBlock ->
            IO.println("Response: " + textBlock.text())
        );
    });
}
```

```php PHP hidelines={1..3,8}
<?php

use Anthropic\Client;
use Anthropic\Messages\TextBlock;
use Anthropic\Messages\ThinkingBlock;
use Anthropic\Messages\ThinkingConfigEnabled;
use Anthropic\Messages\ThinkingConfigEnabled\Display;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$response = $client->messages->create(
    model: 'claude-sonnet-4-6',
    maxTokens: 16000,
    thinking: ThinkingConfigEnabled::with(
        budgetTokens: 10000,
        display: Display::OMITTED,
    ),
    messages: [
        ['role' => 'user', 'content' => 'What is 27 * 453?'],
    ],
);

foreach ($response->content as $block) {
    echo match (true) {
        $block instanceof ThinkingBlock && $block->thinking === '' => "Thinking: [omitted]\n",
        $block instanceof ThinkingBlock => "Thinking: {$block->thinking}\n",
        $block instanceof TextBlock => "Response: {$block->text}\n",
        default => '',
    };
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

response = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: :enabled,
    budget_tokens: 10000,
    # The Ruby SDK uses `display_` (trailing underscore) to avoid
    # shadowing Kernel#display; the wire field is still `display`.
    display_: :omitted
  },
  messages: [{role: "user", content: "What is 27 * 453?"}]
)

response.content.each do |block|
  case block.type
  when :thinking
    puts block.thinking.empty? ? "Thinking: [omitted]" : "Thinking: #{block.thinking}"
  when :text
    puts "Response: #{block.text}"
  end
end
```
</CodeGroup>

When `display: "omitted"` is set, the response contains `thinking` blocks with an empty `thinking` field:

```json Output
{
  "content": [
    {
      "type": "thinking",
      "thinking": "",
      "signature": "EosnCkYICxIMMb3LzNrMu..."
    },
    {
      "type": "text",
      "text": "The answer is 12,231."
    }
  ]
}
```

When streaming with `display: "omitted"`, no `thinking_delta` events are emitted; see [Streaming thinking](#streaming-thinking) below for the event sequence.

### Streaming thinking

You can stream extended thinking responses using [server-sent events (SSE)](https://developer.mozilla.org/en-US/Web/API/Server-sent%5Fevents/Using%5Fserver-sent%5Fevents).

When streaming is enabled for extended thinking, you receive thinking content via `thinking_delta` events.

When `display: "omitted"` is set, no `thinking_delta` events are emitted. See [Controlling thinking display](#controlling-thinking-display).

For more documentation on streaming via the Messages API, see [Streaming Messages](/docs/en/build-with-claude/streaming).

Here's how to handle streaming with thinking:

<CodeGroup tryInConsole={{ userPrompt: "What is the greatest common divisor of 1071 and 462?", thinkingBudgetTokens: 10000 }}>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 16000,
    "stream": true,
    "thinking": {
        "type": "enabled",
        "budget_tokens": 10000
    },
    "messages": [
        {
            "role": "user",
            "content": "What is the greatest common divisor of 1071 and 462?"
        }
    ]
}'
```

```bash CLI
ant messages create --stream --format jsonl \
  --model claude-sonnet-4-6 \
  --max-tokens 16000 \
  --thinking '{type: enabled, budget_tokens: 10000}' \
  --message '{role: user, content: What is the greatest common divisor of 1071 and 462?}'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    messages=[
        {
            "role": "user",
            "content": "What is the greatest common divisor of 1071 and 462?",
        }
    ],
) as stream:
    thinking_started = False
    response_started = False

    for event in stream:
        if event.type == "content_block_start":
            print(f"\nStarting {event.content_block.type} block...")
            # Reset flags for each new block
            thinking_started = False
            response_started = False
        elif event.type == "content_block_delta":
            if event.delta.type == "thinking_delta":
                if not thinking_started:
                    print("Thinking: ", end="", flush=True)
                    thinking_started = True
                print(event.delta.thinking, end="", flush=True)
            elif event.delta.type == "text_delta":
                if not response_started:
                    print("Response: ", end="", flush=True)
                    response_started = True
                print(event.delta.text, end="", flush=True)
        elif event.type == "content_block_stop":
            print("\nBlock complete.")
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const stream = await client.messages.stream({
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  messages: [
    {
      role: "user",
      content: "What is the greatest common divisor of 1071 and 462?"
    }
  ]
});

let thinkingStarted = false;
let responseStarted = false;

for await (const event of stream) {
  if (event.type === "content_block_start") {
    console.log(`\nStarting ${event.content_block.type} block...`);
    // Reset flags for each new block
    thinkingStarted = false;
    responseStarted = false;
  } else if (event.type === "content_block_delta") {
    if (event.delta.type === "thinking_delta") {
      if (!thinkingStarted) {
        process.stdout.write("Thinking: ");
        thinkingStarted = true;
      }
      process.stdout.write(event.delta.thinking);
    } else if (event.delta.type === "text_delta") {
      if (!responseStarted) {
        process.stdout.write("Response: ");
        responseStarted = true;
      }
      process.stdout.write(event.delta.text);
    }
  } else if (event.type === "content_block_stop") {
    console.log("\nBlock complete.");
  }
}
```

```csharp C# hidelines={1..3}
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 10000),
    Messages = [new() { Role = Role.User, Content = "What is the greatest common divisor of 1071 and 462?" }]
};

bool thinkingStarted = false;
bool responseStarted = false;

await foreach (var streamEvent in client.Messages.CreateStreaming(parameters))
{
    if (streamEvent.TryPickContentBlockStart(out var blockStart))
    {
        Console.WriteLine($"\nStarting {blockStart.ContentBlock.Type} block...");
        thinkingStarted = false;
        responseStarted = false;
    }
    else if (streamEvent.TryPickContentBlockDelta(out var blockDelta))
    {
        if (blockDelta.Delta.TryPickThinking(out var thinkingDelta))
        {
            if (!thinkingStarted)
            {
                Console.Write("Thinking: ");
                thinkingStarted = true;
            }
            Console.Write(thinkingDelta.Thinking);
        }
        else if (blockDelta.Delta.TryPickText(out var textDelta))
        {
            if (!responseStarted)
            {
                Console.Write("Response: ");
                responseStarted = true;
            }
            Console.Write(textDelta.Text);
        }
    }
    else if (streamEvent.TryPickContentBlockStop(out _))
    {
        Console.WriteLine("\nBlock complete.");
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	stream := client.Messages.NewStreaming(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(10000),
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is the greatest common divisor of 1071 and 462?")),
		},
	})

	thinkingStarted := false
	responseStarted := false

	for stream.Next() {
		event := stream.Current()
		switch eventVariant := event.AsAny().(type) {
		case anthropic.ContentBlockStartEvent:
			fmt.Printf("\nStarting %s block...\n", eventVariant.ContentBlock.Type)
			thinkingStarted = false
			responseStarted = false
		case anthropic.ContentBlockDeltaEvent:
			switch deltaVariant := eventVariant.Delta.AsAny().(type) {
			case anthropic.ThinkingDelta:
				if !thinkingStarted {
					fmt.Print("Thinking: ")
					thinkingStarted = true
				}
				fmt.Print(deltaVariant.Thinking)
			case anthropic.TextDelta:
				if !responseStarted {
					fmt.Print("Response: ")
					responseStarted = true
				}
				fmt.Print(deltaVariant.Text)
			}
		case anthropic.ContentBlockStopEvent:
			fmt.Println("\nBlock complete.")
		}
	}

	if err := stream.Err(); err != nil {
		log.Fatal(err)
	}
}
```

```java Java hidelines={1..6,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageCreateParams params = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .enabledThinking(10000L)
        .addUserMessage("What is the greatest common divisor of 1071 and 462?")
        .build();

    try (var streamResponse = client.messages().createStreaming(params)) {
        streamResponse.stream().forEach(event -> {
            event.contentBlockStart().ifPresent(startEvent ->
                IO.println("\nStarting block...")
            );
            event.contentBlockDelta().ifPresent(deltaEvent -> {
                deltaEvent.delta().thinking().ifPresent(td ->
                    IO.print(td.thinking())
                );
                deltaEvent.delta().text().ifPresent(td ->
                    IO.print(td.text())
                );
            });
            event.contentBlockStop().ifPresent(stopEvent ->
                IO.println("\nBlock complete.")
            );
        });
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$thinkingStarted = false;
$responseStarted = false;

$stream = $client->messages->createStream(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => 'What is the greatest common divisor of 1071 and 462?']
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 10000],
);

foreach ($stream as $event) {
    if ($event->type === 'content_block_start') {
        echo "\nStarting {$event->contentBlock->type} block...\n";
        $thinkingStarted = false;
        $responseStarted = false;
    } elseif ($event->type === 'content_block_delta') {
        if ($event->delta->type === 'thinking_delta') {
            if (!$thinkingStarted) {
                echo "Thinking: ";
                $thinkingStarted = true;
            }
            echo $event->delta->thinking;
        } elseif ($event->delta->type === 'text_delta') {
            if (!$responseStarted) {
                echo "Response: ";
                $responseStarted = true;
            }
            echo $event->delta->text;
        }
    } elseif ($event->type === 'content_block_stop') {
        echo "\nBlock complete.\n";
    }
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

thinking_started = false
response_started = false

stream = client.messages.stream(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  messages: [
    { role: "user", content: "What is the greatest common divisor of 1071 and 462?" }
  ]
)

stream.each do |event|
  case event.type
  when :content_block_start
    puts "\nStarting #{event.content_block.type} block..."
    thinking_started = false
    response_started = false
  when :content_block_delta
    if event.delta.type == :thinking_delta
      unless thinking_started
        print "Thinking: "
        thinking_started = true
      end
      print event.delta.thinking
    elsif event.delta.type == :text_delta
      unless response_started
        print "Response: "
        response_started = true
      end
      print event.delta.text
    end
  when :content_block_stop
    puts "\nBlock complete."
  end
end
```

</CodeGroup>

Example streaming output:
```sse Output
event: message_start
data: {"type": "message_start", "message": {"id": "msg_01...", "type": "message", "role": "assistant", "content": [], "model": "claude-sonnet-4-6", "stop_reason": null, "stop_sequence": null}}

event: content_block_start
data: {"type": "content_block_start", "index": 0, "content_block": {"type": "thinking", "thinking": "", "signature": ""}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "thinking_delta", "thinking": "I need to find the GCD of 1071 and 462 using the Euclidean algorithm.\n\n1071 = 2 × 462 + 147"}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "thinking_delta", "thinking": "\n462 = 3 × 147 + 21\n147 = 7 × 21 + 0\n\nSo GCD(1071, 462) = 21"}}

// Additional thinking deltas...

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "signature_delta", "signature": "EqQBCgIYAhIM1gbcDa9GJwZA2b3hGgxBdjrkzLoky3dl1pkiMOYds..."}}

event: content_block_stop
data: {"type": "content_block_stop", "index": 0}

event: content_block_start
data: {"type": "content_block_start", "index": 1, "content_block": {"type": "text", "text": ""}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 1, "delta": {"type": "text_delta", "text": "The greatest common divisor of 1071 and 462 is **21**."}}

// Additional text deltas...

event: content_block_stop
data: {"type": "content_block_stop", "index": 1}

event: message_delta
data: {"type": "message_delta", "delta": {"stop_reason": "end_turn", "stop_sequence": null}}

event: message_stop
data: {"type": "message_stop"}
```

When `display: "omitted"` is set, the thinking block opens, a single `signature_delta` arrives, and the block closes without any `thinking_delta` events. Text streaming begins immediately after:

```sse Output
event: content_block_start
data: {"type":"content_block_start","index":0,"content_block":{"type":"thinking","thinking":"","signature":""}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,"delta":{"type":"signature_delta","signature":"EosnCkYICxIMMb3LzNrMu..."}}

event: content_block_stop
data: {"type":"content_block_stop","index":0}

event: content_block_start
data: {"type":"content_block_start","index":1,"content_block":{"type":"text","text":""}}
```

<Note>
When using streaming with thinking enabled, you might notice that text sometimes arrives in larger chunks alternating with smaller, token-by-token delivery. This is expected behavior, especially for thinking content.

The streaming system needs to process content in batches for optimal performance, which can result in this "chunky" delivery pattern, with possible delays between streaming events.
</Note>

## Extended thinking with tool use

Extended thinking can be used alongside [tool use](/docs/en/agents-and-tools/tool-use/overview), allowing Claude to reason through tool selection and results processing.

When using extended thinking with tool use, be aware of the following limitations:

1. **Tool choice limitation**: Tool use with thinking only supports `tool_choice: {"type": "auto"}` (the default) or `tool_choice: {"type": "none"}`. Using `tool_choice: {"type": "any"}` or `tool_choice: {"type": "tool", "name": "..."}` will result in an error because these options force tool use, which is incompatible with extended thinking.

2. **Preserving thinking blocks**: During tool use, you must pass `thinking` blocks back to the API for the last assistant message. Include the complete unmodified block back to the API to maintain reasoning continuity.

### Toggling thinking modes in conversations

You can't toggle thinking in the middle of an assistant turn, including during tool use loops. The entire assistant turn should operate in a single thinking mode:

- **If thinking is enabled**, the final assistant turn should start with a thinking block.
- **If thinking is disabled**, the final assistant turn shouldn't contain any thinking blocks

From the model's perspective, **tool use loops are part of the assistant turn**. An assistant turn doesn't complete until Claude finishes its full response, which may include multiple tool calls and results.

For example, this sequence is all part of a **single assistant turn**:
```text
User: "What's the weather in Paris?"
Assistant: [thinking] + [tool_use: get_weather]
User: [tool_result: "20°C, sunny"]
Assistant: [text: "The weather in Paris is 20°C and sunny"]
```

Even though there are multiple API messages, the tool use loop is conceptually part of one continuous assistant response.

#### Graceful thinking degradation

When a mid-turn thinking conflict occurs (such as toggling thinking on or off during a tool use loop), the API automatically disables thinking for that request. To preserve model quality and remain on-distribution, the API may:

- Strip thinking blocks from the conversation when they would create an invalid turn structure
- Disable thinking for the current request when the conversation history is incompatible with thinking being enabled

This means that attempting to toggle thinking mid-turn won't cause an error, but thinking will be silently disabled for that request. To confirm whether thinking was active, check for the presence of `thinking` blocks in the response.

#### Practical guidance

**Best practice**: Plan your thinking strategy at the start of each turn rather than trying to toggle mid-turn.

**Example: Toggling thinking after completing a turn**
```text
User: "What's the weather?"
Assistant: [tool_use] (thinking disabled)
User: [tool_result]
Assistant: [text: "It's sunny"]
User: "What about tomorrow?"
Assistant: [thinking] + [text: "..."] (thinking enabled - new turn)
```

By completing the assistant turn before toggling thinking, you ensure that thinking is actually enabled for the new request.

<Note>
Toggling thinking modes also invalidates prompt caching for message history. For more details, see the [Extended thinking with prompt caching](#extended-thinking-with-prompt-caching) section.
</Note>

<section title="Example: Passing thinking blocks with tool results">

Here's a practical example showing how to preserve thinking blocks when providing tool results:

<CodeGroup>
```bash CLI
ant messages create --transform content <<'YAML'
model: claude-sonnet-4-6
max_tokens: 16000
thinking:
  type: enabled
  budget_tokens: 10000
tools:
  - name: get_weather
    description: Get current weather for a location
    input_schema:
      type: object
      properties:
        location:
          type: string
      required:
        - location
messages:
  - role: user
    content: "What's the weather in Paris?"
YAML
```

```python Python hidelines={1}
import anthropic

client = anthropic.Anthropic()

weather_tool = {
    "name": "get_weather",
    "description": "Get current weather for a location",
    "input_schema": {
        "type": "object",
        "properties": {"location": {"type": "string"}},
        "required": ["location"],
    },
}

# First request - Claude responds with thinking and tool request
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    tools=[weather_tool],
    messages=[{"role": "user", "content": "What's the weather in Paris?"}],
)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const weatherTool: Anthropic.Tool = {
  name: "get_weather",
  description: "Get current weather for a location",
  input_schema: {
    type: "object",
    properties: {
      location: { type: "string" }
    },
    required: ["location"]
  }
};

// First request - Claude responds with thinking and tool request
const response = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  tools: [weatherTool],
  messages: [{ role: "user", content: "What's the weather in Paris?" }]
});
```

```csharp C# hidelines={1..4}
using System.Text.Json;
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var weatherTool = new ToolUnion(new Tool()
{
    Name = "get_weather",
    Description = "Get current weather for a location",
    InputSchema = new InputSchema()
    {
        Properties = new Dictionary<string, JsonElement>
        {
            ["location"] = JsonSerializer.SerializeToElement(new { type = "string" }),
        },
        Required = ["location"],
    },
});

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 10000),
    Tools = [weatherTool],
    Messages = [new() { Role = Role.User, Content = "What's the weather in Paris?" }]
};

var message = await client.Messages.Create(parameters);
Console.WriteLine(message);
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	weatherTool := anthropic.ToolUnionParam{
		OfTool: &anthropic.ToolParam{
			Name:        "get_weather",
			Description: anthropic.String("Get current weather for a location"),
			InputSchema: anthropic.ToolInputSchemaParam{
				Properties: map[string]any{
					"location": map[string]any{
						"type": "string",
					},
				},
				Required: []string{"location"},
			},
		},
	}

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(10000),
		Tools:     []anthropic.ToolUnionParam{weatherTool},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What's the weather in Paris?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response)
}
```

```java Java hidelines={1..11,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.Tool;
import com.anthropic.core.JsonValue;
import java.util.List;
import java.util.Map;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageCreateParams params = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .enabledThinking(10000L)
        .addTool(Tool.builder()
            .name("get_weather")
            .description("Get current weather for a location")
            .inputSchema(Tool.InputSchema.builder()
                .properties(JsonValue.from(Map.of(
                    "location", Map.of("type", "string")
                )))
                .required(List.of("location"))
                .build())
            .build())
        .addUserMessage("What's the weather in Paris?")
        .build();

    Message response = client.messages().create(params);
    IO.println(response);
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$weatherTool = [
    'name' => 'get_weather',
    'description' => 'Get current weather for a location',
    'input_schema' => [
        'type' => 'object',
        'properties' => [
            'location' => ['type' => 'string']
        ],
        'required' => ['location']
    ]
];

$message = $client->messages->create(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => "What's the weather in Paris?"]
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 10000],
    tools: [$weatherTool],
);
echo $message;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

weather_tool = {
  name: "get_weather",
  description: "Get current weather for a location",
  input_schema: {
    type: "object",
    properties: {
      location: { type: "string" }
    },
    required: ["location"]
  }
}

message = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  tools: [weather_tool],
  messages: [
    { role: "user", content: "What's the weather in Paris?" }
  ]
)
puts message
```

</CodeGroup>

The API response includes thinking, text, and tool_use blocks:

```json Output
{
  "content": [
    {
      "type": "thinking",
      "thinking": "The user wants to know the current weather in Paris. I have access to a function `get_weather`...",
      "signature": "BDaL4VrbR2Oj0hO4XpJxT28J5TILnCrrUXoKiiNBZW9P+nr8XSj1zuZzAl4egiCCpQNvfyUuFFJP5CncdYZEQPPmLxYsNrcs...."
    },
    {
      "type": "text",
      "text": "I can help you get the current weather information for Paris. Let me check that for you"
    },
    {
      "type": "tool_use",
      "id": "toolu_01CswdEQBMshySk6Y9DFKrfq",
      "name": "get_weather",
      "input": {
        "location": "Paris"
      }
    }
  ]
}
```

Now let's continue the conversation and use the tool

<CodeGroup>
```bash CLI
# First turn: capture the assistant content array (thinking + tool_use,
# with signatures intact) as compact JSON.
ASSISTANT_CONTENT=$(ant messages create \
  --transform content <<'YAML'
model: claude-sonnet-4-6
max_tokens: 16000
thinking:
  type: enabled
  budget_tokens: 10000
tools:
  - name: get_weather
    description: Get the current weather in a given location
    input_schema:
      type: object
      properties:
        location:
          type: string
          description: The city and state
      required: [location]
messages:
  - role: user
    content: What's the weather in Paris?
YAML
)

TOOL_USE_ID=$(printf '%s' "$ASSISTANT_CONTENT" \
  | grep -o 'toolu_[A-Za-z0-9]*')

# Second turn: pass the captured blocks back as the assistant message.
# The thinking block MUST accompany the tool_use block.
ant messages create <<YAML
model: claude-sonnet-4-6
max_tokens: 16000
thinking:
  type: enabled
  budget_tokens: 10000
tools:
  - name: get_weather
    description: Get the current weather in a given location
    input_schema:
      type: object
      properties:
        location:
          type: string
          description: The city and state
      required: [location]
messages:
  - role: user
    content: What's the weather in Paris?
  - role: assistant
    content: $ASSISTANT_CONTENT
  - role: user
    content:
      - type: tool_result
        tool_use_id: $TOOL_USE_ID
        content: "Current temperature: 88°F"
YAML
```

```python Python hidelines={1}
import anthropic

client = anthropic.Anthropic()
weather_tool = {
    "name": "get_weather",
    "description": "Get the current weather in a given location",
    "input_schema": {
        "type": "object",
        "properties": {
            "location": {"type": "string", "description": "The city and state"}
        },
        "required": ["location"],
    },
}
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    tools=[weather_tool],
    messages=[{"role": "user", "content": "What's the weather in Paris?"}],
)
# Extract thinking block and tool use block
thinking_block = next(
    (block for block in response.content if block.type == "thinking"), None
)
tool_use_block = next(
    (block for block in response.content if block.type == "tool_use"), None
)

# Call your actual weather API, here is where your actual API call would go
# Let's pretend this is what we get back
weather_data = {"temperature": 88}

# Second request - Include thinking block and tool result
# No new thinking blocks are generated in the response
continuation = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=16000,
    thinking={"type": "enabled", "budget_tokens": 10000},
    tools=[weather_tool],
    messages=[
        {"role": "user", "content": "What's the weather in Paris?"},
        # notice that the thinking_block is passed in as well as the tool_use_block
        # if this is not passed in, an error is raised
        {"role": "assistant", "content": [thinking_block, tool_use_block]},
        {
            "role": "user",
            "content": [
                {
                    "type": "tool_result",
                    "tool_use_id": tool_use_block.id,
                    "content": f"Current temperature: {weather_data['temperature']}°F",
                }
            ],
        },
    ],
)
print(continuation)
```

```typescript TypeScript nocheck
// Extract thinking block and tool use block
const thinkingBlock = response.content.find(
  (block): block is Anthropic.ThinkingBlock => block.type === "thinking"
);
const toolUseBlock = response.content.find(
  (block): block is Anthropic.ToolUseBlock => block.type === "tool_use"
);

// Call your actual weather API, here is where your actual API call would go
// Let's pretend this is what we get back
const weatherData = { temperature: 88 };

if (thinkingBlock && toolUseBlock) {
  // Second request - Include thinking block and tool result
  // No new thinking blocks are generated in the response
  const continuation = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 16000,
    thinking: {
      type: "enabled",
      budget_tokens: 10000
    },
    tools: [weatherTool],
    messages: [
      { role: "user", content: "What's the weather in Paris?" },
      // notice that the thinkingBlock is passed in as well as the toolUseBlock
      // if this is not passed in, an error is raised
      { role: "assistant", content: [thinkingBlock, toolUseBlock] },
      {
        role: "user",
        content: [
          {
            type: "tool_result" as const,
            tool_use_id: toolUseBlock.id,
            content: `Current temperature: ${weatherData.temperature}°F`
          }
        ]
      }
    ]
  });
  console.log(continuation);
}
```

```csharp C# hidelines={1..4}
using System.Text.Json;
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

var weatherTool = new ToolUnion(new Tool()
{
    Name = "get_weather",
    Description = "Get current weather for a location",
    InputSchema = new InputSchema()
    {
        Properties = new Dictionary<string, JsonElement>
        {
            ["location"] = JsonSerializer.SerializeToElement(new { type = "string", description = "City name" }),
        },
        Required = ["location"],
    },
});

var parameters = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 10000),
    Tools = [weatherTool],
    Messages = [
        new() { Role = Role.User, Content = "What is the weather in Paris?" }
    ]
};

var response = await client.Messages.Create(parameters);

// Extract the tool_use block to get its ID for the tool result
ToolUseBlock? toolUseBlock = null;
foreach (var block in response.Content)
{
    if (block.TryPickToolUse(out var toolUse))
    {
        toolUseBlock = toolUse;
    }
}

var weatherData = new { temperature = 88 };

// Build continuation with tool result
var continuationParams = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 16000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 10000),
    Tools = [weatherTool],
    Messages = [
        new() { Role = Role.User, Content = "What is the weather in Paris?" },
        // response.Content includes the thinking blocks; passing them back is required
        new() { Role = Role.Assistant, Content = response.Content.Select(block => new ContentBlockParam(block.Json)).ToList() },
        new() { Role = Role.User, Content = new MessageParamContent(new List<ContentBlockParam>
        {
            new ContentBlockParam(new ToolResultBlockParam()
            {
                ToolUseID = toolUseBlock?.ID ?? "",
                Content = $"Current temperature: {weatherData.temperature}°F"
            })
        })}
    ]
};

var continuation = await client.Messages.Create(continuationParams);
Console.WriteLine(continuation);
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	weatherTool := anthropic.ToolUnionParam{
		OfTool: &anthropic.ToolParam{
			Name:        "get_weather",
			Description: anthropic.String("Get current weather for a location"),
			InputSchema: anthropic.ToolInputSchemaParam{
				Properties: map[string]any{
					"location": map[string]any{
						"type":        "string",
						"description": "City name",
					},
				},
				Required: []string{"location"},
			},
		},
	}

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(10000),
		Tools:     []anthropic.ToolUnionParam{weatherTool},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is the weather in Paris?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	var toolUseBlock anthropic.ToolUseBlock
	for _, block := range response.Content {
		switch v := block.AsAny().(type) {
		case anthropic.ToolUseBlock:
			toolUseBlock = v
		}
	}

	weatherData := map[string]int{"temperature": 88}

	continuation, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 16000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(10000),
		Tools:     []anthropic.ToolUnionParam{weatherTool},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("What is the weather in Paris?")),
			response.ToParam(),
			anthropic.NewUserMessage(
				anthropic.NewToolResultBlock(toolUseBlock.ID, fmt.Sprintf("Current temperature: %d°F", weatherData["temperature"]), false),
			),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(continuation)
}
```

```java Java hidelines={1..10,13..16}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.ContentBlockParam;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.Tool;
import com.anthropic.models.messages.ToolResultBlockParam;
import com.anthropic.models.messages.ToolUseBlock;
import com.anthropic.models.messages.ToolUseBlockParam;
import com.anthropic.models.messages.ThinkingBlock;
import com.anthropic.models.messages.ThinkingBlockParam;
import com.anthropic.core.JsonValue;
import java.util.List;
import java.util.Map;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    Tool weatherTool = Tool.builder()
        .name("get_weather")
        .description("Get current weather for a location")
        .inputSchema(Tool.InputSchema.builder()
            .properties(JsonValue.from(Map.of(
                "location", Map.of("type", "string", "description", "City name")
            )))
            .required(List.of("location"))
            .build())
        .build();

    MessageCreateParams initialParams = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .enabledThinking(10000L)
        .addTool(weatherTool)
        .addUserMessage("What is the weather in Paris?")
        .build();

    Message response = client.messages().create(initialParams);

    ThinkingBlock thinkingBlock = null;
    ToolUseBlock toolUseBlock = null;
    for (var block : response.content()) {
        if (block.thinking().isPresent()) {
            thinkingBlock = block.thinking().get();
        }
        if (block.toolUse().isPresent()) {
            toolUseBlock = block.toolUse().get();
        }
    }

    int temperature = 88;

    // Second request: pass back thinking block and tool result
    MessageCreateParams continuationParams = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(16000L)
        .enabledThinking(10000L)
        .addTool(weatherTool)
        .addUserMessage("What is the weather in Paris?")
        .addAssistantMessageOfBlockParams(List.of(
            ContentBlockParam.ofThinking(ThinkingBlockParam.builder()
                .thinking(thinkingBlock.thinking())
                .signature(thinkingBlock.signature())
                .build()),
            ContentBlockParam.ofToolUse(ToolUseBlockParam.builder()
                .id(toolUseBlock.id())
                .name(toolUseBlock.name())
                .input(toolUseBlock._input())
                .build())
        ))
        .addUserMessageOfBlockParams(List.of(
            ContentBlockParam.ofToolResult(
                ToolResultBlockParam.builder()
                    .toolUseId(toolUseBlock.id())
                    .content("Current temperature: " + temperature + "°F")
                    .build()
            )
        ))
        .build();

    Message continuation = client.messages().create(continuationParams);
    IO.println(continuation);
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$weatherTool = [
    'name' => 'get_weather',
    'description' => 'Get current weather for a location',
    'input_schema' => [
        'type' => 'object',
        'properties' => [
            'location' => [
                'type' => 'string',
                'description' => 'City name'
            ]
        ],
        'required' => ['location']
    ]
];

$response = $client->messages->create(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => 'What is the weather in Paris?']
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 10000],
    tools: [$weatherTool],
);

$thinkingBlock = null;
$toolUseBlock = null;
foreach ($response->content as $block) {
    if ($block->type === 'thinking') {
        $thinkingBlock = $block;
    }
    if ($block->type === 'tool_use') {
        $toolUseBlock = $block;
    }
}

$weatherData = ['temperature' => 88];

$continuation = $client->messages->create(
    maxTokens: 16000,
    messages: [
        ['role' => 'user', 'content' => 'What is the weather in Paris?'],
        ['role' => 'assistant', 'content' => [$thinkingBlock, $toolUseBlock]],
        ['role' => 'user', 'content' => [
            [
                'type' => 'tool_result',
                'tool_use_id' => $toolUseBlock->id,
                'content' => "Current temperature: {$weatherData['temperature']}°F"
            ]
        ]]
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 10000],
    tools: [$weatherTool],
);

echo $continuation;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

weather_tool = {
  name: "get_weather",
  description: "Get current weather for a location",
  input_schema: {
    type: "object",
    properties: {
      location: { type: "string", description: "City name" }
    },
    required: ["location"]
  }
}

response = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  tools: [weather_tool],
  messages: [
    { role: "user", content: "What is the weather in Paris?" }
  ]
)

thinking_block = response.content.find { |block| block.type == :thinking }
tool_use_block = response.content.find { |block| block.type == :tool_use }

raise "No tool_use block found" unless tool_use_block

weather_data = { temperature: 88 }

continuation = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 16000,
  thinking: {
    type: "enabled",
    budget_tokens: 10000
  },
  tools: [weather_tool],
  messages: [
    { role: "user", content: "What is the weather in Paris?" },
    { role: "assistant", content: [thinking_block, tool_use_block] },
    { role: "user", content: [
      {
        type: "tool_result",
        tool_use_id: tool_use_block.id,
        content: "Current temperature: #{weather_data[:temperature]}°F"
      }
    ] }
  ]
)

puts continuation
```

</CodeGroup>

The API response now includes **only** text

```json Output
{
  "content": [
    {
      "type": "text",
      "text": "Currently in Paris, the temperature is 88°F (31°C)"
    }
  ]
}
```

</section>

### Preserving thinking blocks

During tool use, you must pass `thinking` blocks back to the API, and you must include the complete unmodified block back to the API. This is critical for maintaining the model's reasoning flow and conversation integrity.

<Tip>
While you can omit `thinking` blocks from prior `assistant` role turns, always pass back all thinking blocks to the API for any multi-turn conversation. The API:
- Automatically filters the provided thinking blocks
- Uses the relevant thinking blocks necessary to preserve the model's reasoning
- Only bills for the input tokens for the blocks shown to Claude

Which blocks are kept depends on the model. See [Thinking block preservation by model](#thinking-block-preservation-in-claude-opus-45-and-later) for the per-class defaults. To override the default, use the [`clear_thinking_20251015` context-editing strategy](/docs/en/build-with-claude/context-editing#thinking-block-clearing).
</Tip>

<Note>
When toggling thinking modes during a conversation, remember that the entire assistant turn (including tool use loops) must operate in a single thinking mode. For more details, see [Toggling thinking modes in conversations](#toggling-thinking-modes-in-conversations).
</Note>

When Claude invokes tools, it is pausing its construction of a response to await external information. When tool results are returned, Claude continues building that existing response. This necessitates preserving thinking blocks during tool use, for a couple of reasons:

1. **Reasoning continuity**: The thinking blocks capture Claude's step-by-step reasoning that led to tool requests. When you post tool results, including the original thinking ensures Claude can continue its reasoning from where it left off.

2. **Context maintenance**: While tool results appear as user messages in the API structure, they're part of a continuous reasoning flow. Preserving thinking blocks maintains this conceptual flow across multiple API calls. For more information on context management, see the [guide on context windows](/docs/en/build-with-claude/context-windows).

**Important**: When providing `thinking` blocks, the entire sequence of consecutive `thinking` blocks must match the outputs generated by the model during the original request; you can't rearrange or modify the sequence of these blocks.

### Interleaved thinking

Extended thinking with tool use in Claude 4 models supports interleaved thinking, which enables Claude to think between tool calls and make more sophisticated reasoning after receiving tool results.

With interleaved thinking, Claude can:
- Reason about the results of a tool call before deciding what to do next
- Chain multiple tool calls with reasoning steps in between
- Make more nuanced decisions based on intermediate results

**Model support:**
- **[Claude Mythos Preview](https://anthropic.com/glasswing)**: Interleaved thinking happens automatically. Every inter-tool reasoning step moves into a thinking block instead of plain text, and thinking blocks are preserved across turns by default. No beta header is needed or supported.
- **Claude Opus 4.7**: Interleaved thinking is automatically enabled when using [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (the only supported thinking mode on Opus 4.7). No beta header is needed.
- **Claude Opus 4.6**: Interleaved thinking is automatically enabled when using [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking). No beta header is needed. The `interleaved-thinking-2025-05-14` beta header is **deprecated** on Opus 4.6 and is safely ignored if included.
- **Claude Sonnet 4.6**: Interleaved thinking is automatically enabled when using [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (recommended). The `interleaved-thinking-2025-05-14` beta header with manual extended thinking (`thinking: {type: "enabled"}`) is still functional but deprecated.
- **Other Claude 4 models** (Opus 4.5, Opus 4.1, Opus 4 (deprecated), Sonnet 4.5, Sonnet 4 (deprecated)): Add [the beta header](/docs/en/api/beta-headers) `interleaved-thinking-2025-05-14` to your API request to enable interleaved thinking.

Here are some important considerations for interleaved thinking:
- With interleaved thinking, the `budget_tokens` can exceed the `max_tokens` parameter, as it represents the total budget across all thinking blocks within one assistant turn.
- Interleaved thinking is only supported for [tools used via the Messages API](/docs/en/agents-and-tools/tool-use/overview).
- The Claude API and [Claude Platform on AWS](/docs/en/build-with-claude/claude-platform-on-aws) accept `interleaved-thinking-2025-05-14` in requests to any model without returning an error. On models that don't support interleaved thinking, the header is ignored. On Claude Opus 4.7 and Claude Opus 4.6, it's deprecated and safely ignored. On Claude Mythos Preview, it's not needed and safely ignored.
- On partner-operated platforms (for example, [Amazon Bedrock](/docs/en/build-with-claude/claude-in-amazon-bedrock) and [Vertex AI](/docs/en/build-with-claude/claude-on-vertex-ai)), if you pass `interleaved-thinking-2025-05-14` to any model aside from Claude Opus 4.7, Claude Opus 4.6, Claude Sonnet 4.6, Claude Opus 4.5, Claude Opus 4.1, Opus 4 (deprecated), Sonnet 4.5, or Sonnet 4 (deprecated), your request will fail.

<section title="Tool use without interleaved thinking">

Without interleaved thinking, Claude thinks once at the start of the assistant turn. Subsequent responses after tool results continue without new thinking blocks.

```text
User: "What's the total revenue if we sold 150 units at $50 each,
       and how does this compare to our average monthly revenue?"

Turn 1: [thinking] "I need to calculate 150 * $50, then check the database..."
        [tool_use: calculator] { "expression": "150 * 50" }
  ↓ tool result: "7500"

Turn 2: [tool_use: database_query] { "query": "SELECT AVG(revenue)..." }
        ↑ no thinking block
  ↓ tool result: "5200"

Turn 3: [text] "The total revenue is $7,500, which is 44% above your
        average monthly revenue of $5,200."
        ↑ no thinking block
```

</section>

<section title="Tool use with interleaved thinking">

With interleaved thinking enabled, Claude can think after receiving each tool result, allowing it to reason about intermediate results before continuing.

```text
User: "What's the total revenue if we sold 150 units at $50 each,
       and how does this compare to our average monthly revenue?"

Turn 1: [thinking] "I need to calculate 150 * $50 first..."
        [tool_use: calculator] { "expression": "150 * 50" }
  ↓ tool result: "7500"

Turn 2: [thinking] "Got $7,500. Now I should query the database to compare..."
        [tool_use: database_query] { "query": "SELECT AVG(revenue)..." }
        ↑ thinking after receiving calculator result
  ↓ tool result: "5200"

Turn 3: [thinking] "$7,500 vs $5,200 average - that's a 44% increase..."
        [text] "The total revenue is $7,500, which is 44% above your
        average monthly revenue of $5,200."
        ↑ thinking before final answer
```

</section>

## Extended thinking with prompt caching

[Prompt caching](/docs/en/build-with-claude/prompt-caching) with thinking has several important considerations:

<Tip>
Extended thinking tasks often take longer than 5 minutes to complete. Consider using the [1-hour cache duration](/docs/en/build-with-claude/prompt-caching#1-hour-cache-duration) to maintain cache hits across longer thinking sessions and multi-step workflows.
</Tip>

**Thinking block context removal**
- On earlier Opus/Sonnet models and all Haiku models, thinking blocks from previous turns are removed from context, which can affect cache breakpoints. On Opus 4.5+ and Sonnet 4.6+, they are kept by default.
- When continuing conversations with tool use, thinking blocks are cached and count as input tokens when read from cache
- This creates a tradeoff: while thinking blocks don't consume context window space visually, they still count toward your input token usage when cached
- If thinking becomes disabled and you pass thinking content in the current tool use turn, the thinking content will be stripped and thinking will remain disabled for that request

**Cache invalidation patterns**
- Changes to thinking parameters (enabled/disabled or budget allocation) invalidate message cache breakpoints
- [Interleaved thinking](#interleaved-thinking) amplifies cache invalidation, as thinking blocks can occur between multiple [tool calls](#extended-thinking-with-tool-use)
- System prompts and tools remain cached despite thinking parameter changes or block removal

<Note>
On earlier Opus/Sonnet models and all Haiku models, thinking blocks are removed for caching and context calculations; on Opus 4.5+ and Sonnet 4.6+, they are kept by default. In either case, they must be preserved when continuing conversations with [tool use](#extended-thinking-with-tool-use), especially with [interleaved thinking](#interleaved-thinking).
</Note>

### Understanding thinking block caching behavior

When using extended thinking with tool use, thinking blocks exhibit specific caching behavior that affects token counting:

**How it works:**

1. Caching only occurs when you make a subsequent request that includes tool results
2. When the subsequent request is made, the previous conversation history (including thinking blocks) can be cached
3. These cached thinking blocks count as input tokens in your usage metrics when read from the cache
4. When a non-tool-result user block is included: on Opus 4.5+ and Sonnet 4.6+, previous thinking blocks are kept; on earlier Opus/Sonnet models and all Haiku models, all previous thinking blocks are ignored and stripped from context

**Detailed example flow:**

**Request 1:**
```text
User: "What's the weather in Paris?"
```
**Response 1:**
```text
[thinking_block_1] + [tool_use block 1]
```

**Request 2:**
```text
User: ["What's the weather in Paris?"],
Assistant: [thinking_block_1] + [tool_use block 1],
User: [tool_result_1, cache=True]
```
**Response 2:**
```text
[thinking_block_2] + [text block 2]
```
Request 2 writes a cache of the request content (not the response). The cache includes the original user message, the first thinking block, tool use block, and the tool result.

**Request 3:**
```text
User: ["What's the weather in Paris?"],
Assistant: [thinking_block_1] + [tool_use block 1],
User: [tool_result_1, cache=True],
Assistant: [thinking_block_2] + [text block 2],
User: [Text response, cache=True]
```
For Opus 4.5+ and Sonnet 4.6+, all previous thinking blocks are kept by default. For earlier Opus/Sonnet models and all Haiku models, because a non-tool-result user block was included, all previous thinking blocks are ignored and stripped from context. This request will be processed the same as:
```text
User: ["What's the weather in Paris?"],
Assistant: [tool_use block 1],
User: [tool_result_1, cache=True],
Assistant: [text block 2],
User: [Text response, cache=True]
```

**Key points:**
- This caching behavior happens automatically, even without explicit `cache_control` markers
- This behavior is consistent whether using regular thinking or interleaved thinking

<section title="System prompt caching (preserved when thinking changes)">

<CodeGroup>
```bash CLI
# Fetch ~10 kB of Pride and Prejudice for the cached system block
curl -s https://www.gutenberg.org/cache/epub/1342/pg1342.txt \
  | head -c 10000 > pride.txt

# Emit a request body for the given thinking budget. Once CONTENT1
# is populated (after the first turn), the assistant reply and a
# follow-up user message are appended so the conversation grows.
build_body() {
  cat <<YAML
model: claude-sonnet-4-6
max_tokens: 20000
thinking:
  type: enabled
  budget_tokens: $1
system:
  - type: text
    text: >-
      You are an AI assistant that is tasked with literary analysis.
      Analyze the following text carefully.
  - type: text
    text: "@./pride.txt"
    cache_control:
      type: ephemeral
messages:
  - role: user
    content: Analyze the tone of this passage.
YAML
  if [[ -n "${CONTENT1:-}" ]]; then
    printf '  - role: assistant\n    content: %s\n' "$CONTENT1"
    printf '  - role: user\n'
    printf '    content: Analyze the characters in this passage.\n'
  fi
}

# First request (budget 4000): establishes the cache. Capture usage
# and content as two jsonl lines so the reply can be fed forward.
printf 'First request - establishing cache\n'
{
  read -r USAGE1
  read -r CONTENT1
} < <(build_body 4000 \
  | ant messages create --transform '[usage,content]' --format jsonl)
printf 'First response usage: %s\n' "$USAGE1"

# Second request: same budget, system-prompt cache hit expected.
printf '\nSecond request - same thinking parameters (cache hit expected)\n'
USAGE2=$(build_body 4000 \
  | ant messages create --transform usage --format jsonl)
printf 'Second response usage: %s\n' "$USAGE2"

# Third request: budget changed to 8000. The cached system prompt
# still hits; only message-block caching is invalidated.
printf '\nThird request - different thinking parameters (cache miss for messages)\n'
USAGE3=$(build_body 8000 \
  | ant messages create --transform usage --format jsonl)
printf 'Third response usage: %s\n' "$USAGE3"
```

```python Python hidelines={1}
from anthropic import Anthropic
import requests
from bs4 import BeautifulSoup

client = Anthropic()


def fetch_article_content(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.decompose()

    # Get text
    text = soup.get_text()

    # Break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # Break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # Drop blank lines
    text = "\n".join(chunk for chunk in chunks if chunk)

    return text


# Fetch the content of the article
book_url = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt"
book_content = fetch_article_content(book_url)
# Use just enough text for caching (first few chapters)
LARGE_TEXT = book_content[:10000]

SYSTEM_PROMPT = [
    {
        "type": "text",
        "text": "You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully.",
    },
    {"type": "text", "text": LARGE_TEXT, "cache_control": {"type": "ephemeral"}},
]

MESSAGES = [{"role": "user", "content": "Analyze the tone of this passage."}]

# First request - establish cache
print("First request - establishing cache")
response1 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={"type": "enabled", "budget_tokens": 4000},
    system=SYSTEM_PROMPT,
    messages=MESSAGES,
)

print(f"First response usage: {response1.usage}")

MESSAGES.append({"role": "assistant", "content": response1.content})
MESSAGES.append({"role": "user", "content": "Analyze the characters in this passage."})
# Second request - same thinking parameters (cache hit expected)
print("\nSecond request - same thinking parameters (cache hit expected)")
response2 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={"type": "enabled", "budget_tokens": 4000},
    system=SYSTEM_PROMPT,
    messages=MESSAGES,
)

print(f"Second response usage: {response2.usage}")

# Third request - different thinking parameters (cache miss for messages)
print("\nThird request - different thinking parameters (cache miss for messages)")
response3 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={
        "type": "enabled",
        "budget_tokens": 8000,  # Changed thinking budget
    },
    system=SYSTEM_PROMPT,  # System prompt remains cached
    messages=MESSAGES,  # Messages cache is invalidated
)

print(f"Third response usage: {response3.usage}")
```

```typescript TypeScript nocheck hidelines={1}
import Anthropic from "@anthropic-ai/sdk";
import axios from "axios";
import * as cheerio from "cheerio";

const client = new Anthropic();

async function fetchArticleContent(url: string): Promise<string> {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  $("script, style").remove();
  let text = $.text();
  const lines = text.split("\n").map((line) => line.trim());
  text = lines.filter((line) => line.length > 0).join("\n");
  return text;
}

const bookUrl = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt";
const bookContent = await fetchArticleContent(bookUrl);
const LARGE_TEXT = bookContent.slice(0, 10000);

const SYSTEM_PROMPT: Anthropic.TextBlockParam[] = [
  {
    type: "text",
    text: "You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully."
  },
  {
    type: "text",
    text: LARGE_TEXT,
    cache_control: { type: "ephemeral" }
  }
];

const messages: Anthropic.MessageParam[] = [
  { role: "user", content: "Analyze the tone of this passage." }
];

// First request - establish cache
console.log("First request - establishing cache");
const response1 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 4000 },
  system: SYSTEM_PROMPT,
  messages
});

console.log(`First response usage: ${JSON.stringify(response1.usage)}`);

messages.push({
  role: "assistant",
  content: response1.content
});
messages.push({
  role: "user",
  content: "Analyze the characters in this passage."
});

// Second request - same thinking parameters (cache hit expected)
console.log("\nSecond request - same thinking parameters (cache hit expected)");
const response2 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 4000 },
  system: SYSTEM_PROMPT,
  messages
});

console.log(`Second response usage: ${JSON.stringify(response2.usage)}`);

// Third request - different thinking parameters (cache miss for messages)
console.log("\nThird request - different thinking parameters (cache miss for messages)");
const response3 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 8000 },
  system: SYSTEM_PROMPT,
  messages
});

console.log(`Third response usage: ${JSON.stringify(response3.usage)}`);
```

```csharp C# hidelines={1..4}
using System.Net.Http;
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

// Fetch book content
using var httpClient = new HttpClient();
var bookContent = await httpClient.GetStringAsync("https://www.gutenberg.org/cache/epub/1342/pg1342.txt");
var largeText = bookContent.Substring(0, Math.Min(10000, bookContent.Length));

var systemPrompt = new MessageCreateParamsSystem(new List<TextBlockParam>
{
    new TextBlockParam()
    {
        Text = "You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully."
    },
    new TextBlockParam()
    {
        Text = largeText,
        CacheControl = new CacheControlEphemeral(),
    },
});

var messages = new List<MessageParam>
{
    new() { Role = Role.User, Content = "Analyze the tone of this passage." }
};

// First request - establish cache
Console.WriteLine("First request - establishing cache");
var parameters1 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 4000),
    System = systemPrompt,
    Messages = messages
};

var response1 = await client.Messages.Create(parameters1);
Console.WriteLine($"First response usage: {response1.Usage}");

messages.Add(new() { Role = Role.Assistant, Content = response1.Content.Select(block => new ContentBlockParam(block.Json)).ToList() });
messages.Add(new() { Role = Role.User, Content = "Analyze the characters in this passage." });

// Second request - same thinking parameters (cache hit expected)
Console.WriteLine("\nSecond request - same thinking parameters (cache hit expected)");
var parameters2 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 4000),
    System = systemPrompt,
    Messages = messages
};

var response2 = await client.Messages.Create(parameters2);
Console.WriteLine($"Second response usage: {response2.Usage}");

// Third request - different thinking parameters (cache miss for messages)
Console.WriteLine("\nThird request - different thinking parameters (cache miss for messages)");
var parameters3 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 8000),
    System = systemPrompt,
    Messages = messages
};

var response3 = await client.Messages.Create(parameters3);
Console.WriteLine($"Third response usage: {response3.Usage}");
```

```go Go hidelines={1..15,-6..-1}
package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	// Fetch book content
	resp, err := http.Get("https://www.gutenberg.org/cache/epub/1342/pg1342.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	largeText := string(body)
	if len(largeText) > 10000 {
		largeText = largeText[:10000]
	}

	systemPrompt := []anthropic.TextBlockParam{
		{Text: "You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully."},
		{
			Text:         largeText,
			CacheControl: anthropic.NewCacheControlEphemeralParam(),
		},
	}

	messages := []anthropic.MessageParam{
		anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the tone of this passage.")),
	}

	// First request - establish cache
	fmt.Println("First request - establishing cache")
	response1, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(4000),
		System:    systemPrompt,
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("First response usage: %s\n", response1.Usage.RawJSON())

	messages = append(messages, response1.ToParam())
	messages = append(messages, anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the characters in this passage.")))

	// Second request - same thinking parameters (cache hit expected)
	fmt.Println("\nSecond request - same thinking parameters (cache hit expected)")
	response2, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(4000),
		System:    systemPrompt,
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Second response usage: %s\n", response2.Usage.RawJSON())

	// Third request - different thinking parameters (cache miss for messages)
	fmt.Println("\nThird request - different thinking parameters (cache miss for messages)")
	response3, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(8000),
		System:    systemPrompt,
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Third response usage: %s\n", response3.Usage.RawJSON())
}
```

```java Java hidelines={1..2,4..13}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.CacheControlEphemeral;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.TextBlockParam;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

void main() throws Exception {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    // Fetch book content
    HttpClient httpClient = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://www.gutenberg.org/cache/epub/1342/pg1342.txt"))
        .build();
    HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
    String bookContent = response.body();
    String largeText = bookContent.substring(0, Math.min(10000, bookContent.length()));

    List<TextBlockParam> systemPrompt = List.of(
        TextBlockParam.builder()
            .text("You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully.")
            .build(),
        TextBlockParam.builder()
            .text(largeText)
            .cacheControl(CacheControlEphemeral.builder().build())
            .build()
    );

    // First request - establish cache
    IO.println("First request - establishing cache");
    MessageCreateParams params1 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(4000L)
        .systemOfTextBlockParams(systemPrompt)
        .addUserMessage("Analyze the tone of this passage.")
        .build();

    Message response1 = client.messages().create(params1);
    IO.println("First response usage: " + response1.usage());

    // Second request - same thinking parameters (cache hit expected)
    IO.println("\nSecond request - same thinking parameters (cache hit expected)");
    MessageCreateParams params2 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(4000L)
        .systemOfTextBlockParams(systemPrompt)
        .addUserMessage("Analyze the tone of this passage.")
        .addAssistantMessageOfBlockParams(response1.content().stream()
            .map(block -> block.toParam())
            .collect(java.util.stream.Collectors.toList()))
        .addUserMessage("Analyze the characters in this passage.")
        .build();

    Message response2 = client.messages().create(params2);
    IO.println("Second response usage: " + response2.usage());

    // Third request - different thinking parameters (cache miss for messages)
    IO.println("\nThird request - different thinking parameters (cache miss for messages)");
    MessageCreateParams params3 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(8000L)
        .systemOfTextBlockParams(systemPrompt)
        .addUserMessage("Analyze the tone of this passage.")
        .addAssistantMessageOfBlockParams(response1.content().stream()
            .map(block -> block.toParam())
            .collect(java.util.stream.Collectors.toList()))
        .addUserMessage("Analyze the characters in this passage.")
        .build();

    Message response3 = client.messages().create(params3);
    IO.println("Third response usage: " + response3.usage());
}
```

```php PHP hidelines={1..5}
<?php


use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

// Fetch book content
$bookContent = file_get_contents("https://www.gutenberg.org/cache/epub/1342/pg1342.txt");
$largeText = substr($bookContent, 0, 10000);

$systemPrompt = [
    [
        'type' => 'text',
        'text' => 'You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully.'
    ],
    [
        'type' => 'text',
        'text' => $largeText,
        'cache_control' => ['type' => 'ephemeral']
    ]
];

$messages = [
    ['role' => 'user', 'content' => 'Analyze the tone of this passage.']
];

// First request - establish cache
echo "First request - establishing cache\n";
$response1 = $client->messages->create(
    maxTokens: 20000,
    messages: $messages,
    model: 'claude-sonnet-4-6',
    system: $systemPrompt,
    thinking: ['type' => 'enabled', 'budget_tokens' => 4000],
);

echo "First response usage: " . json_encode($response1->usage) . "\n";

$messages[] = ['role' => 'assistant', 'content' => $response1->content];
$messages[] = ['role' => 'user', 'content' => 'Analyze the characters in this passage.'];

// Second request - same thinking parameters (cache hit expected)
echo "\nSecond request - same thinking parameters (cache hit expected)\n";
$response2 = $client->messages->create(
    maxTokens: 20000,
    messages: $messages,
    model: 'claude-sonnet-4-6',
    system: $systemPrompt,
    thinking: ['type' => 'enabled', 'budget_tokens' => 4000],
);

echo "Second response usage: " . json_encode($response2->usage) . "\n";

// Third request - different thinking parameters (cache miss for messages)
echo "\nThird request - different thinking parameters (cache miss for messages)\n";
$response3 = $client->messages->create(
    maxTokens: 20000,
    messages: $messages,
    model: 'claude-sonnet-4-6',
    system: $systemPrompt,
    thinking: ['type' => 'enabled', 'budget_tokens' => 8000],
);

echo "Third response usage: " . json_encode($response3->usage) . "\n";
```

```ruby Ruby hidelines={1}
require "anthropic"
require "net/http"
require "uri"

client = Anthropic::Client.new

# Fetch book content
uri = URI("https://www.gutenberg.org/cache/epub/1342/pg1342.txt")
response = Net::HTTP.get_response(uri)
book_content = response.body
large_text = book_content[0...10000]

system_prompt = [
  {
    type: "text",
    text: "You are an AI assistant that is tasked with literary analysis. Analyze the following text carefully."
  },
  {
    type: "text",
    text: large_text,
    cache_control: { type: "ephemeral" }
  }
]

messages = [
  { role: "user", content: "Analyze the tone of this passage." }
]

# First request - establish cache
puts "First request - establishing cache"
response1 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 4000
  },
  system: system_prompt,
  messages: messages
)

puts "First response usage: #{response1.usage}"

messages << { role: "assistant", content: response1.content }
messages << { role: "user", content: "Analyze the characters in this passage." }

# Second request - same thinking parameters (cache hit expected)
puts "\nSecond request - same thinking parameters (cache hit expected)"
response2 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 4000
  },
  system: system_prompt,
  messages: messages
)

puts "Second response usage: #{response2.usage}"

# Third request - different thinking parameters (cache miss for messages)
puts "\nThird request - different thinking parameters (cache miss for messages)"
response3 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 8000
  },
  system: system_prompt,
  messages: messages
)

puts "Third response usage: #{response3.usage}"
```

</CodeGroup>

</section>
<section title="Messages caching (invalidated when thinking changes)">

<CodeGroup>
```bash CLI
# Fetch the first ~10 kB of Pride and Prejudice for the cached prefix
curl -sL 'https://www.gutenberg.org/cache/epub/1342/pg1342.txt' \
  | head -c 10000 > book.txt

# Call 1: thinking budget 4000, writes the cache
USAGE=$(ant messages create \
  --model claude-sonnet-4-6 --max-tokens 20000 \
  --transform usage <<'YAML'
thinking:
  type: enabled
  budget_tokens: 4000
messages:
  - role: user
    content:
      - type: text
        text: "@./book.txt"
        cache_control:
          type: ephemeral
      - type: text
        text: "Give a one-sentence summary of this passage."
YAML
)
printf 'Call 1 (budget 4000):\n%s\n\n' "$USAGE"

# Call 2: same budget, conversation extended; expect cache HIT
USAGE=$(ant messages create \
  --model claude-sonnet-4-6 --max-tokens 20000 \
  --transform usage <<'YAML'
thinking:
  type: enabled
  budget_tokens: 4000
messages:
  - role: user
    content:
      - type: text
        text: "@./book.txt"
        cache_control:
          type: ephemeral
      - type: text
        text: "Give a one-sentence summary of this passage."
  - role: assistant
    content: "It opens Pride and Prejudice with the Bennet family."
  - role: user
    content: "Who is the protagonist?"
YAML
)
printf 'Call 2 (budget 4000):\n%s\n\n' "$USAGE"

# Call 3: budget changed to 8000; cache MISS even though prefix is identical
USAGE=$(ant messages create \
  --model claude-sonnet-4-6 --max-tokens 20000 \
  --transform usage <<'YAML'
thinking:
  type: enabled
  budget_tokens: 8000
messages:
  - role: user
    content:
      - type: text
        text: "@./book.txt"
        cache_control:
          type: ephemeral
      - type: text
        text: "Give a one-sentence summary of this passage."
  - role: assistant
    content: "It opens Pride and Prejudice with the Bennet family."
  - role: user
    content: "Who is the protagonist?"
  - role: assistant
    content: "Elizabeth Bennet is the protagonist."
  - role: user
    content: "What era is the story set in?"
YAML
)
printf 'Call 3 (budget 8000):\n%s\n' "$USAGE"
```

```python Python hidelines={1}
from anthropic import Anthropic
import requests
from bs4 import BeautifulSoup

client = Anthropic()


def fetch_article_content(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    # Remove script and style elements
    for script in soup(["script", "style"]):
        script.decompose()

    # Get text
    text = soup.get_text()

    # Break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # Break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # Drop blank lines
    text = "\n".join(chunk for chunk in chunks if chunk)

    return text


# Fetch the content of the article
book_url = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt"
book_content = fetch_article_content(book_url)
# Use just enough text for caching (first few chapters)
LARGE_TEXT = book_content[:10000]

# No system prompt - caching in messages instead
MESSAGES = [
    {
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": LARGE_TEXT,
                "cache_control": {"type": "ephemeral"},
            },
            {"type": "text", "text": "Analyze the tone of this passage."},
        ],
    }
]

# First request - establish cache
print("First request - establishing cache")
response1 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={"type": "enabled", "budget_tokens": 4000},
    messages=MESSAGES,
)

print(f"First response usage: {response1.usage}")

MESSAGES.append({"role": "assistant", "content": response1.content})
MESSAGES.append({"role": "user", "content": "Analyze the characters in this passage."})
# Second request - same thinking parameters (cache hit expected)
print("\nSecond request - same thinking parameters (cache hit expected)")
response2 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={
        "type": "enabled",
        "budget_tokens": 4000,  # Same thinking budget
    },
    messages=MESSAGES,
)

print(f"Second response usage: {response2.usage}")

MESSAGES.append({"role": "assistant", "content": response2.content})
MESSAGES.append({"role": "user", "content": "Analyze the setting in this passage."})

# Third request - different thinking budget (cache miss expected)
print("\nThird request - different thinking budget (cache miss expected)")
response3 = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=20000,
    thinking={
        "type": "enabled",
        "budget_tokens": 8000,  # Different thinking budget breaks cache
    },
    messages=MESSAGES,
)

print(f"Third response usage: {response3.usage}")
```

```typescript TypeScript nocheck hidelines={1}
import Anthropic from "@anthropic-ai/sdk";
import axios from "axios";
import * as cheerio from "cheerio";

const client = new Anthropic();

async function fetchArticleContent(url: string): Promise<string> {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  // Remove script and style elements
  $("script, style").remove();

  // Get text
  let text = $.text();

  // Clean up text (break into lines, remove whitespace)
  const lines = text.split("\n").map((line) => line.trim());
  const chunks = lines.flatMap((line) => line.split("  ").map((phrase) => phrase.trim()));
  text = chunks.filter((chunk) => chunk).join("\n");

  return text;
}

const bookUrl = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt";
const bookContent = await fetchArticleContent(bookUrl);
const LARGE_TEXT = bookContent.substring(0, 10000);

// No system prompt - caching in messages instead
const messages: Anthropic.MessageParam[] = [
  {
    role: "user",
    content: [
      {
        type: "text",
        text: LARGE_TEXT,
        cache_control: { type: "ephemeral" }
      },
      {
        type: "text",
        text: "Analyze the tone of this passage."
      }
    ]
  }
];

// First request - establish cache
console.log("First request - establishing cache");
const response1 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 4000 },
  messages
});

console.log("First response usage: ", response1.usage);

messages.push(
  { role: "assistant", content: response1.content },
  { role: "user", content: "Analyze the characters in this passage." }
);

// Second request - same thinking parameters (cache hit expected)
console.log("\nSecond request - same thinking parameters (cache hit expected)");
const response2 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 4000 },
  messages
});

console.log("Second response usage: ", response2.usage);

messages.push(
  { role: "assistant", content: response2.content },
  { role: "user", content: "Analyze the setting in this passage." }
);

// Third request - different thinking budget (cache miss expected)
console.log("\nThird request - different thinking budget (cache miss expected)");
const response3 = await client.messages.create({
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: { type: "enabled", budget_tokens: 8000 },
  messages
});

console.log("Third response usage: ", response3.usage);
```

```csharp C# hidelines={1..4}
using System.Net.Http;
using Anthropic;
using Anthropic.Models.Messages;

AnthropicClient client = new();

string bookUrl = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt";
string bookContent = await FetchArticleContent(bookUrl);
string largeText = bookContent.Substring(0, Math.Min(10000, bookContent.Length));

Console.WriteLine("First request - establishing cache");
var parameters1 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 4000),
    Messages =
    [
        new()
        {
            Role = Role.User,
            Content = new MessageParamContent(new List<ContentBlockParam>
            {
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = largeText,
                    CacheControl = new CacheControlEphemeral(),
                }),
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = "Analyze the tone of this passage."
                }),
            })
        }
    ]
};

var response1 = await client.Messages.Create(parameters1);
Console.WriteLine($"First response usage: {response1.Usage}");

Console.WriteLine("\nSecond request - same thinking parameters (cache hit expected)");
var parameters2 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 4000),
    Messages =
    [
        new()
        {
            Role = Role.User,
            Content = new MessageParamContent(new List<ContentBlockParam>
            {
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = largeText,
                    CacheControl = new CacheControlEphemeral(),
                }),
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = "Analyze the tone of this passage."
                }),
            })
        },
        new()
        {
            Role = Role.Assistant,
            Content = response1.Content.Select(block => new ContentBlockParam(block.Json)).ToList()
        },
        new()
        {
            Role = Role.User,
            Content = "Analyze the characters in this passage."
        }
    ]
};

var response2 = await client.Messages.Create(parameters2);
Console.WriteLine($"Second response usage: {response2.Usage}");

Console.WriteLine("\nThird request - different thinking budget (cache miss expected)");
var parameters3 = new MessageCreateParams
{
    Model = Model.ClaudeSonnet4_6,
    MaxTokens = 20000,
    Thinking = new ThinkingConfigEnabled(budgetTokens: 8000),
    Messages =
    [
        new()
        {
            Role = Role.User,
            Content = new MessageParamContent(new List<ContentBlockParam>
            {
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = largeText,
                    CacheControl = new CacheControlEphemeral(),
                }),
                new ContentBlockParam(new TextBlockParam()
                {
                    Text = "Analyze the tone of this passage."
                }),
            })
        },
        new()
        {
            Role = Role.Assistant,
            Content = response1.Content.Select(block => new ContentBlockParam(block.Json)).ToList()
        },
        new()
        {
            Role = Role.User,
            Content = "Analyze the characters in this passage."
        },
        new()
        {
            Role = Role.Assistant,
            Content = response2.Content.Select(block => new ContentBlockParam(block.Json)).ToList()
        },
        new()
        {
            Role = Role.User,
            Content = "Analyze the setting in this passage."
        }
    ]
};

var response3 = await client.Messages.Create(parameters3);
Console.WriteLine($"Third response usage: {response3.Usage}");

static async Task<string> FetchArticleContent(string url)
{
    using HttpClient httpClient = new();
    string content = await httpClient.GetStringAsync(url);
    return content;
}
```

```go Go hidelines={1..41,-1}
package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"

	"github.com/anthropics/anthropic-sdk-go"
)

func fetchArticleContent(url string) (string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	text := string(body)
	lines := strings.Split(text, "\n")
	var cleanedLines []string
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed != "" {
			cleanedLines = append(cleanedLines, trimmed)
		}
	}

	return strings.Join(cleanedLines, "\n"), nil
}

func main() {
	client := anthropic.NewClient()

	bookURL := "https://www.gutenberg.org/cache/epub/1342/pg1342.txt"
	bookContent, err := fetchArticleContent(bookURL)
	if err != nil {
		log.Fatal(err)
	}

	largeText := bookContent
	if len(largeText) > 10000 {
		largeText = largeText[:10000]
	}

	// No system prompt - caching in messages instead
	messages := []anthropic.MessageParam{
		anthropic.NewUserMessage(
			anthropic.ContentBlockParamUnion{OfText: &anthropic.TextBlockParam{
				Text:         largeText,
				CacheControl: anthropic.NewCacheControlEphemeralParam(),
			}},
			anthropic.NewTextBlock("Analyze the tone of this passage."),
		),
	}

	// First request - establish cache
	fmt.Println("First request - establishing cache")
	response1, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(4000),
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("First response usage: %s\n", response1.Usage.RawJSON())

	messages = append(messages, response1.ToParam())
	messages = append(messages, anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the characters in this passage.")))

	// Second request - same thinking parameters (cache hit expected)
	fmt.Println("\nSecond request - same thinking parameters (cache hit expected)")
	response2, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(4000),
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Second response usage: %s\n", response2.Usage.RawJSON())

	messages = append(messages, response2.ToParam())
	messages = append(messages, anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the setting in this passage.")))

	// Third request - different thinking budget (cache miss expected)
	fmt.Println("\nThird request - different thinking budget (cache miss expected)")
	response3, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeSonnet4_6,
		MaxTokens: 20000,
		Thinking:  anthropic.ThinkingConfigParamOfEnabled(8000),
		Messages:  messages,
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Third response usage: %s\n", response3.Usage.RawJSON())
}
```

```java Java hidelines={1..2,4..14}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.CacheControlEphemeral;
import com.anthropic.models.messages.ContentBlockParam;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.TextBlockParam;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

void main() throws Exception {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    String bookUrl = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt";
    String bookContent = fetchArticleContent(bookUrl);
    String largeText = bookContent.substring(0, Math.min(10000, bookContent.length()));

    // First request - establishing cache
    IO.println("First request - establishing cache");
    MessageCreateParams params1 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(4000L)
        .addUserMessageOfBlockParams(List.of(
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text(largeText)
                .cacheControl(CacheControlEphemeral.builder().build())
                .build()),
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text("Analyze the tone of this passage.")
                .build())
        ))
        .build();

    Message response1 = client.messages().create(params1);
    IO.println("First response usage: " + response1.usage());

    // Second request - same thinking parameters (cache hit expected)
    IO.println("\nSecond request - same thinking parameters (cache hit expected)");
    MessageCreateParams params2 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(4000L)
        .addUserMessageOfBlockParams(List.of(
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text(largeText)
                .cacheControl(CacheControlEphemeral.builder().build())
                .build()),
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text("Analyze the tone of this passage.")
                .build())
        ))
        .addAssistantMessageOfBlockParams(response1.content().stream()
            .map(block -> block.toParam())
            .collect(java.util.stream.Collectors.toList()))
        .addUserMessage("Analyze the characters in this passage.")
        .build();

    Message response2 = client.messages().create(params2);
    IO.println("Second response usage: " + response2.usage());

    // Third request - different thinking budget (cache miss expected)
    IO.println("\nThird request - different thinking budget (cache miss expected)");
    MessageCreateParams params3 = MessageCreateParams.builder()
        .model(Model.CLAUDE_SONNET_4_6)
        .maxTokens(20000L)
        .enabledThinking(8000L)
        .addUserMessageOfBlockParams(List.of(
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text(largeText)
                .cacheControl(CacheControlEphemeral.builder().build())
                .build()),
            ContentBlockParam.ofText(TextBlockParam.builder()
                .text("Analyze the tone of this passage.")
                .build())
        ))
        .addAssistantMessageOfBlockParams(response1.content().stream()
            .map(block -> block.toParam())
            .collect(java.util.stream.Collectors.toList()))
        .addUserMessage("Analyze the characters in this passage.")
        .addAssistantMessageOfBlockParams(response2.content().stream()
            .map(block -> block.toParam())
            .collect(java.util.stream.Collectors.toList()))
        .addUserMessage("Analyze the setting in this passage.")
        .build();

    Message response3 = client.messages().create(params3);
    IO.println("Third response usage: " + response3.usage());
}

String fetchArticleContent(String url) throws Exception {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create(url))
        .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    return response.body();
}
```

```php PHP hidelines={1..6}
<?php


use Anthropic\Client;


function fetchArticleContent($url) {
    $content = file_get_contents($url);
    $lines = explode("\n", $content);
    $cleanedLines = array_filter(array_map('trim', $lines));
    return implode("\n", $cleanedLines);
}

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$bookUrl = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt";
$bookContent = fetchArticleContent($bookUrl);
$largeText = substr($bookContent, 0, 10000);

echo "First request - establishing cache\n";
$response1 = $client->messages->create(
    maxTokens: 20000,
    messages: [[
        'role' => 'user',
        'content' => [
            [
                'type' => 'text',
                'text' => $largeText,
                'cache_control' => ['type' => 'ephemeral']
            ],
            [
                'type' => 'text',
                'text' => 'Analyze the tone of this passage.'
            ]
        ]
    ]],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 4000],
);

echo "First response usage: " . json_encode($response1->usage) . "\n";

echo "\nSecond request - same thinking parameters (cache hit expected)\n";
$response2 = $client->messages->create(
    maxTokens: 20000,
    messages: [
        [
            'role' => 'user',
            'content' => [
                [
                    'type' => 'text',
                    'text' => $largeText,
                    'cache_control' => ['type' => 'ephemeral']
                ],
                [
                    'type' => 'text',
                    'text' => 'Analyze the tone of this passage.'
                ]
            ]
        ],
        [
            'role' => 'assistant',
            'content' => $response1->content
        ],
        [
            'role' => 'user',
            'content' => 'Analyze the characters in this passage.'
        ]
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 4000],
);

echo "Second response usage: " . json_encode($response2->usage) . "\n";

echo "\nThird request - different thinking budget (cache miss expected)\n";
$response3 = $client->messages->create(
    maxTokens: 20000,
    messages: [
        [
            'role' => 'user',
            'content' => [
                [
                    'type' => 'text',
                    'text' => $largeText,
                    'cache_control' => ['type' => 'ephemeral']
                ],
                [
                    'type' => 'text',
                    'text' => 'Analyze the tone of this passage.'
                ]
            ]
        ],
        [
            'role' => 'assistant',
            'content' => $response1->content
        ],
        [
            'role' => 'user',
            'content' => 'Analyze the characters in this passage.'
        ],
        [
            'role' => 'assistant',
            'content' => $response2->content
        ],
        [
            'role' => 'user',
            'content' => 'Analyze the setting in this passage.'
        ]
    ],
    model: 'claude-sonnet-4-6',
    thinking: ['type' => 'enabled', 'budget_tokens' => 8000],
);

echo "Third response usage: " . json_encode($response3->usage) . "\n";
```

```ruby Ruby hidelines={1}
require "anthropic"
require "net/http"
require "uri"

def fetch_article_content(url)
  uri = URI.parse(url)
  response = Net::HTTP.get_response(uri)
  text = response.body

  lines = text.split("\n").map(&:strip)
  lines.reject(&:empty?).join("\n")
end

client = Anthropic::Client.new

book_url = "https://www.gutenberg.org/cache/epub/1342/pg1342.txt"
book_content = fetch_article_content(book_url)
large_text = book_content[0...10000]

puts "First request - establishing cache"
response1 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 4000
  },
  messages: [{
    role: "user",
    content: [
      {
        type: "text",
        text: large_text,
        cache_control: { type: "ephemeral" }
      },
      {
        type: "text",
        text: "Analyze the tone of this passage."
      }
    ]
  }]
)

puts "First response usage: #{response1.usage}"

puts "\nSecond request - same thinking parameters (cache hit expected)"
response2 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 4000
  },
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: large_text,
          cache_control: { type: "ephemeral" }
        },
        {
          type: "text",
          text: "Analyze the tone of this passage."
        }
      ]
    },
    {
      role: "assistant",
      content: response1.content
    },
    {
      role: "user",
      content: "Analyze the characters in this passage."
    }
  ]
)

puts "Second response usage: #{response2.usage}"

puts "\nThird request - different thinking budget (cache miss expected)"
response3 = client.messages.create(
  model: "claude-sonnet-4-6",
  max_tokens: 20000,
  thinking: {
    type: "enabled",
    budget_tokens: 8000
  },
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: large_text,
          cache_control: { type: "ephemeral" }
        },
        {
          type: "text",
          text: "Analyze the tone of this passage."
        }
      ]
    },
    {
      role: "assistant",
      content: response1.content
    },
    {
      role: "user",
      content: "Analyze the characters in this passage."
    },
    {
      role: "assistant",
      content: response2.content
    },
    {
      role: "user",
      content: "Analyze the setting in this passage."
    }
  ]
)

puts "Third response usage: #{response3.usage}"
```

</CodeGroup>

Here is the output of the script (you may see slightly different numbers)

```text Output
First request - establishing cache
First response usage: { cache_creation_input_tokens: 1370, cache_read_input_tokens: 0, input_tokens: 17, output_tokens: 700 }

Second request - same thinking parameters (cache hit expected)

Second response usage: { cache_creation_input_tokens: 0, cache_read_input_tokens: 1370, input_tokens: 303, output_tokens: 874 }

Third request - different thinking budget (cache miss expected)
Third response usage: { cache_creation_input_tokens: 1370, cache_read_input_tokens: 0, input_tokens: 747, output_tokens: 619 }
```

This example demonstrates that when caching is set up in the messages array, changing the thinking parameters (budget_tokens increased from 4000 to 8000) **invalidates the cache**. The third request shows no cache hit with `cache_creation_input_tokens=1370` and `cache_read_input_tokens=0`, proving that message-based caching is invalidated when thinking parameters change.

</section>

## Max tokens and context window size with extended thinking

`max_tokens` (which includes your thinking budget when thinking is enabled) is enforced as a strict limit. On Claude 4.5 models and newer, if input tokens plus `max_tokens` exceeds the context window size, the API accepts the request. If generation then reaches the context window limit, it stops with `stop_reason: "model_context_window_exceeded"`. On earlier models, the API returns a validation error instead. See [Handling stop reasons](/docs/en/build-with-claude/handling-stop-reasons).

<Note>
You can read through the [guide on context windows](/docs/en/build-with-claude/context-windows) for a more thorough deep dive.
</Note>

### The context window with extended thinking

When calculating context window usage with thinking enabled, there are some considerations to be aware of:

- On Opus 4.5+ and Sonnet 4.6+, thinking blocks from previous turns are kept and count towards your context window; on earlier Opus/Sonnet models and all Haiku models, they are stripped and not counted
- Current turn thinking counts towards your `max_tokens` limit for that turn

The diagram below demonstrates the specialized token management when extended thinking is enabled:

![Context window diagram with extended thinking](/docs/images/context-window-thinking.svg)

The effective context window is calculated as:

```text
context window =
  (current input tokens - previous thinking tokens) +
  (thinking tokens + encrypted thinking tokens + text output tokens)
```

Use the [token counting API](/docs/en/build-with-claude/token-counting) to get accurate token counts for your specific use case, especially when working with multi-turn conversations that include thinking.

### The context window with extended thinking and tool use

When using extended thinking with tool use, thinking blocks must be explicitly preserved and returned with the tool results.

The effective context window calculation for extended thinking with tool use becomes:

```text
context window =
  (current input tokens + previous thinking tokens + tool use tokens) +
  (thinking tokens + encrypted thinking tokens + text output tokens)
```

The diagram below illustrates token management for extended thinking with tool use:

![Context window diagram with extended thinking and tool use](/docs/images/context-window-thinking-tools.svg)

### Managing tokens with extended thinking

Given the context window and `max_tokens` behavior with extended thinking, you may need to:

- More actively monitor and manage your token usage
- Adjust `max_tokens` values as your prompt length changes
- Potentially use the [token counting endpoints](/docs/en/build-with-claude/token-counting) more frequently
- Be aware that previous thinking blocks don't accumulate in your context window

## Thinking encryption

Full thinking content is encrypted and returned in the `signature` field. This field is used to verify that thinking blocks were generated by Claude when passed back to the API.

<Note>
It is only strictly necessary to send back thinking blocks when using [tools with extended thinking](/docs/en/build-with-claude/extended-thinking#extended-thinking-with-tool-use). Otherwise you can omit thinking blocks from previous turns. If you pass them back, whether the API keeps or strips them depends on the model: Opus 4.5+ and Sonnet 4.6+ keep them in context by default; earlier Opus/Sonnet models and all Haiku models strip them. See [context editing](/docs/en/build-with-claude/context-editing) to configure this.

If sending back thinking blocks, we recommend passing everything back as you received it for consistency and to avoid potential issues.
</Note>

Here are some important considerations on thinking encryption:
- When [streaming responses](/docs/en/build-with-claude/extended-thinking#streaming-thinking), the signature is added via a `signature_delta` inside a `content_block_delta` event just before the `content_block_stop` event.
- `signature` values are significantly longer in Claude 4 models than in previous models.
- The `signature` field is an opaque field and should not be interpreted or parsed.
- `signature` values are compatible across platforms (Claude APIs, [Amazon Bedrock](/docs/en/build-with-claude/claude-in-amazon-bedrock), and [Vertex AI](/docs/en/build-with-claude/claude-on-vertex-ai)). Values generated on one platform will be compatible with another.

## Redacted thinking blocks

In addition to regular `thinking` blocks, the API may return `redacted_thinking` blocks. A `redacted_thinking` block contains encrypted thinking content in a `data` field, with no readable summary:

```json
{
  "type": "redacted_thinking",
  "data": "..."
}
```

The `data` field is opaque and encrypted. Like the `signature` field on regular thinking blocks, you should pass `redacted_thinking` blocks back to the API unchanged when continuing a multi-turn conversation with [tools](/docs/en/build-with-claude/extended-thinking#extended-thinking-with-tool-use).

<Tip>
If your code filters content blocks by type (for example, `block.type == "thinking"`) when round-tripping responses with tool use, also include `redacted_thinking` blocks. Filtering on `block.type == "thinking"` alone silently drops `redacted_thinking` blocks and breaks the multi-turn protocol described above.
</Tip>

<Note>
`redacted_thinking` blocks are a distinct content block type returned by the API when portions of thinking are safety-redacted. This is separate from the [`display: "omitted"`](#controlling-thinking-display) option, which returns regular `thinking` blocks with an empty `thinking` field.
</Note>

## Differences in thinking across model versions

The Messages API handles thinking differently across Claude model versions. The following table gives a condensed comparison:

| Feature | Claude 4 models (pre-Opus 4.5) | Claude Opus 4.5 | Claude Sonnet 4.6 | Claude Opus 4.6 ([adaptive thinking](/docs/en/build-with-claude/adaptive-thinking)) | Claude Opus 4.7 ([adaptive thinking](/docs/en/build-with-claude/adaptive-thinking)) | [Claude Mythos Preview](https://anthropic.com/glasswing) ([adaptive thinking](/docs/en/build-with-claude/adaptive-thinking)) |
|---------|-------------------------------|--------------------------|------------------|--------------------------|--------------------------|--------------------------|
| **Thinking output** | Returns summarized thinking | Returns summarized thinking | Returns summarized thinking | Returns summarized thinking | Omitted by default; set `display: "summarized"` to receive summarized thinking | Omitted by default; set `display: "summarized"` to receive summarized thinking. Raw thinking tokens are never returned. |
| **Interleaved thinking** | Supported with `interleaved-thinking-2025-05-14` beta header | Supported with `interleaved-thinking-2025-05-14` beta header | Supported with `interleaved-thinking-2025-05-14` beta header or automatic with [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) | Automatic with adaptive thinking (beta header deprecated and safely ignored) | Automatic with adaptive thinking (beta header deprecated and safely ignored) | Automatic with adaptive thinking (beta header not needed and safely ignored). Inter-tool reasoning moves into thinking blocks on this model. |
| **Thinking block preservation** | Not preserved across turns | **Preserved by default** | **Preserved by default** | **Preserved by default** | **Preserved by default** | **Preserved by default.** Blocks are stripped when continuing the conversation on a model that does not support the Mythos thinking format. |

### Thinking block preservation by model

Whether thinking blocks from previous assistant turns are preserved in context by default depends on the model class. **Opus**: Claude Opus 4.5 and later Opus models keep all prior thinking blocks; Claude Opus 4.1 and earlier Opus models keep only the last assistant turn's thinking. **Sonnet**: Claude Sonnet 4.6 and later Sonnet models keep all; Claude Sonnet 4.5 and earlier Sonnet models keep only the last turn. **Haiku**: all Haiku models through Claude Haiku 4.5 keep only the last turn. [Claude Mythos Preview](https://anthropic.com/glasswing) also keeps all prior thinking blocks.

**Benefits of thinking block preservation:**

- **Cache optimization**: When using tool use, preserved thinking blocks enable cache hits as they are passed back with tool results and cached incrementally across the assistant turn, resulting in token savings in multi-step workflows
- **No intelligence impact**: Preserving thinking blocks has no negative effect on model performance

**Important considerations:**

- **Context usage**: Long conversations will consume more context space since thinking blocks are retained in context
- **Automatic behavior**: This is the default for each model as listed above. No code changes or beta headers are required
- **Backward compatibility**: To leverage this feature, continue passing complete, unmodified thinking blocks back to the API as you would for tool use

<Note>
For earlier models (Claude Sonnet 4.5, Opus 4.1, etc.), thinking blocks from previous turns continue to be removed from context. The existing behavior described in the [Extended thinking with prompt caching](#extended-thinking-with-prompt-caching) section applies to those models.
</Note>

## Pricing

For complete pricing information including base rates, cache writes, cache hits, and output tokens, see the [pricing page](/docs/en/about-claude/pricing).

The thinking process incurs charges for:
- Tokens used during thinking (output tokens)
- Thinking blocks from prior assistant turns kept in context: only the last turn on earlier Opus/Sonnet models and all Haiku models; all turns by default on Opus 4.5+ and Sonnet 4.6+ (input tokens)
- Standard text output tokens

<Note>
When extended thinking is enabled, a specialized system prompt is automatically included to support this feature.
</Note>

When using summarized thinking:
- **Input tokens:** Tokens in your original request (excludes thinking tokens from previous turns)
- **Output tokens (billed):** The original thinking tokens that Claude generated internally
- **Output tokens (visible):** The summarized thinking tokens you see in the response
- **No charge:** Tokens used to generate the summary

When using `display: "omitted"`:
- **Input tokens:** Tokens in your original request (same as summarized)
- **Output tokens (billed):** The original thinking tokens that Claude generated internally (same as summarized)
- **Output tokens (visible):** Zero thinking tokens (the `thinking` field is empty)

<Warning>
The billed output token count will **not** match the visible token count in the response. You are billed for the full thinking process, not the thinking content visible in the response.
</Warning>

## Best practices and considerations for extended thinking

### Working with thinking budgets

- **Budget optimization:** The minimum budget is 1,024 tokens. Start at the minimum and increase the thinking budget incrementally to find the optimal range for your use case. Higher token counts enable more comprehensive reasoning but with diminishing returns depending on the task. Increasing the budget can improve response quality at the tradeoff of increased latency. For critical tasks, test different settings to find the optimal balance. Note that the thinking budget is a target rather than a strict limit. Actual token usage may vary based on the task.
- **Starting points:** Start with larger thinking budgets (16k+ tokens) for complex tasks and adjust based on your needs.
- **Large budgets:** For thinking budgets above 32k, use [batch processing](/docs/en/build-with-claude/batch-processing) to avoid networking issues. Requests pushing the model to think above 32k tokens causes long running requests that might run up against system timeouts and open connection limits.
- **Token usage tracking:** Monitor thinking token usage to optimize costs and performance.

### Performance considerations

- **Response times:** Be prepared for longer response times due to additional processing. Generating thinking blocks increases overall response time.
- **Streaming requirements:** The SDKs require streaming when `max_tokens` is greater than 21,333 to avoid HTTP timeouts on long-running requests. This is a client-side validation, not an API restriction. If you don't need to process events incrementally, use `.stream()` with `.get_final_message()` (Python) or `.finalMessage()` (TypeScript) to get the complete `Message` object without handling individual events. See [Streaming Messages](/docs/en/build-with-claude/streaming#get-the-final-message-without-handling-events) for details. When streaming, be prepared to handle both thinking and text content blocks as they arrive.
- **Omitting thinking for latency:** If your application doesn't display thinking content, set `display: "omitted"` on the thinking configuration to reduce time-to-first-text-token. See [Controlling thinking display](#controlling-thinking-display).

### Feature compatibility

- Thinking isn't compatible with `temperature` or `top_k` modifications as well as [forced tool use](/docs/en/agents-and-tools/tool-use/define-tools#forcing-tool-use).
- When thinking is enabled, you can set `top_p` to values between 1 and 0.95.
- You can't pre-fill responses when thinking is enabled.
- Changes to the thinking budget invalidate cached prompt prefixes that include messages. However, cached system prompts and tool definitions will continue to work when thinking parameters change.

### Usage guidelines

- **Task selection:** Use extended thinking for particularly complex tasks that benefit from step-by-step reasoning, like math, coding, and analysis.
- **Context handling:** You don't need to remove previous thinking blocks yourself. On Opus 4.5+ and Sonnet 4.6+, the Claude API keeps thinking blocks from previous turns by default; on earlier Opus/Sonnet models and all Haiku models, it automatically ignores them and they aren't included when calculating context usage.
- **Prompt engineering:** Review the [extended thinking prompting tips](/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#leverage-thinking-and-interleaved-thinking-capabilities) if you want to maximize Claude's thinking capabilities.

## Next steps

<CardGroup>
  <Card title="Try the extended thinking cookbook" icon="book" href="https://platform.claude.com/cookbook/extended-thinking-extended-thinking">
    Explore practical examples of thinking in the cookbook.
  </Card>
  <Card title="Extended thinking prompting tips" icon="code" href="/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#leverage-thinking-and-interleaved-thinking-capabilities">
    Learn prompt engineering best practices for extended thinking.
  </Card>
</CardGroup>

---

# Citations

URL: https://platform.claude.com/docs/en/build-with-claude/citations

# Citations

---

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

Claude is capable of providing detailed citations when answering questions about documents, helping you track and verify information sources in responses.

All [active models](/docs/en/about-claude/models/overview) support citations, with the exception of Haiku 3.

<Tip>
  Share your feedback and suggestions about the citations feature using this [form](https://forms.gle/9n9hSrKnKe3rpowH9).
</Tip>

Here's an example of how to use citations with the Messages API:

<CodeGroup>

```bash cURL
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-opus-4-7",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "document",
            "source": {
              "type": "text",
              "media_type": "text/plain",
              "data": "The grass is green. The sky is blue."
            },
            "title": "My Document",
            "context": "This is a trustworthy document.",
            "citations": {"enabled": true}
          },
          {
            "type": "text",
            "text": "What color is the grass and sky?"
          }
        ]
      }
    ]
  }'
```

```bash CLI
ant messages create <<'YAML'
model: claude-opus-4-7
max_tokens: 1024
messages:
  - role: user
    content:
      - type: document
        source:
          type: text
          media_type: text/plain
          data: The grass is green. The sky is blue.
        title: My Document
        context: This is a trustworthy document.
        citations:
          enabled: true
      - type: text
        text: What color is the grass and sky?
YAML
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "text",
                        "media_type": "text/plain",
                        "data": "The grass is green. The sky is blue.",
                    },
                    "title": "My Document",
                    "context": "This is a trustworthy document.",
                    "citations": {"enabled": True},
                },
                {"type": "text", "text": "What color is the grass and sky?"},
            ],
        }
    ],
)
print(response)
```

```java Java hidelines={1..8,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.*;
import java.util.List;

public class DocumentExample {

  public static void main(String[] args) {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    PlainTextSource source = PlainTextSource.builder()
      .data("The grass is green. The sky is blue.")
      .build();

    DocumentBlockParam documentParam = DocumentBlockParam.builder()
      .source(source)
      .title("My Document")
      .context("This is a trustworthy document.")
      .citations(CitationsConfigParam.builder().enabled(true).build())
      .build();

    TextBlockParam textBlockParam = TextBlockParam.builder()
      .text("What color is the grass and sky?")
      .build();

    MessageCreateParams params = MessageCreateParams.builder()
      .model(Model.CLAUDE_OPUS_4_7)
      .maxTokens(1024)
      .addUserMessageOfBlockParams(
        List.of(
          ContentBlockParam.ofDocument(documentParam),
          ContentBlockParam.ofText(textBlockParam)
        )
      )
      .build();

    Message message = client.messages().create(params);
    System.out.println(message);
  }
}
```

</CodeGroup>

<Tip>
**Comparison with prompt-based approaches**

In comparison with prompt-based citations solutions, the citations feature has the following advantages:
- **Cost savings:** If your prompt-based approach asks Claude to output direct quotes, you may see cost savings due to the fact that `cited_text` does not count towards your output tokens.
- **Better citation reliability:** Because citations are parsed into the respective response formats mentioned above and `cited_text` is extracted, citations are guaranteed to contain valid pointers to the provided documents.
- **Improved citation quality:** In evaluations, the citations feature was found to be significantly more likely to cite the most relevant quotes from documents as compared to purely prompt-based approaches.
</Tip>

---

## How citations work

Integrate citations with Claude in these steps:

<Steps>
  <Step title="Provide document(s) and enable citations">
    - Include documents in any of the supported formats: [PDFs](#pdf-documents), [plain text](#plain-text-documents), or [custom content](#custom-content-documents) documents
    - Set `citations.enabled=true` on each of your documents. Currently, citations must be enabled on all or none of the documents within a request.
    - Note that only text citations are currently supported and image citations are not yet possible.
  </Step>
  <Step title="Documents get processed">
    - Document contents are "chunked" in order to define the minimum granularity of possible citations. For example, sentence chunking would allow Claude to cite a single sentence or chain together multiple consecutive sentences to cite a paragraph (or longer)!
      - **For PDFs:** Text is extracted as described in [PDF Support](/docs/en/build-with-claude/pdf-support) and content is chunked into sentences. Citing images from PDFs is not currently supported.
      - **For plain text documents:** Content is chunked into sentences that can be cited from.
      - **For custom content documents:** Your provided content blocks are used as-is and no further chunking is done.
  </Step>
  <Step title="Claude provides cited response">
    - Responses may now include multiple text blocks where each text block can contain a claim that Claude is making and a list of citations that support the claim.
    - Citations reference specific locations in source documents. The format of these citations are dependent on the type of document being cited from.
      - **For PDFs:** Citations include the page number range (1-indexed).
      - **For plain text documents:** Citations include the character index range (0-indexed).
      - **For custom content documents:** Citations include the content block index range (0-indexed) corresponding to the original content list provided.
    - Document indices are provided to indicate the reference source and are 0-indexed according to the list of all documents in your original request.
  </Step>
</Steps>

<Tip>
  **Automatic chunking vs custom content**

  By default, plain text and PDF documents are automatically chunked into sentences. If you need more control over citation granularity (e.g., for bullet points or transcripts), use custom content documents instead. See [Document Types](#document-types) for more details.

  For example, if you want Claude to be able to cite specific sentences from your RAG chunks, you should put each RAG chunk into a plain text document. Otherwise, if you do not want any further chunking to be done, or if you want to customize any additional chunking, you can put RAG chunks into custom content document(s).
</Tip>

### Citable vs non-citable content

- Text found within a document's `source` content can be cited from.
- `title` and `context` are optional fields that will be passed to the model but not used towards cited content.
- `title` is limited in length so you may find the `context` field to be useful in storing any document metadata as text or stringified json.

### Citation indices
- Document indices are 0-indexed from the list of all document content blocks in the request (spanning across all messages).
- Character indices are 0-indexed with exclusive end indices.
- Page numbers are 1-indexed with exclusive end page numbers.
- Content block indices are 0-indexed with exclusive end indices from the `content` list provided in the custom content document.

### Token costs
- Enabling citations incurs a slight increase in input tokens due to system prompt additions and document chunking.
- However, the citations feature is very efficient with output tokens. Under the hood, the model is outputting citations in a standardized format that are then parsed into cited text and document location indices. The `cited_text` field is provided for convenience and does not count towards output tokens.
- When passed back in subsequent conversation turns, `cited_text` is also not counted towards input tokens.

### Feature compatibility
Citations works in conjunction with other API features including [prompt caching](/docs/en/build-with-claude/prompt-caching), [token counting](/docs/en/build-with-claude/token-counting) and [batch processing](/docs/en/build-with-claude/batch-processing).

<Warning>
**Citations and Structured Outputs are incompatible**

Citations cannot be used together with [Structured Outputs](/docs/en/build-with-claude/structured-outputs). If you enable citations on any user-provided document (Document blocks or RequestSearchResultBlock) and also include the `output_config.format` parameter (or the deprecated `output_format` parameter), the API will return a 400 error.

This is because citations require interleaving citation blocks with text output, which is incompatible with the strict JSON schema constraints of structured outputs.
</Warning>

#### Using Prompt Caching with Citations

Citations and prompt caching can be used together effectively.

The citation blocks generated in responses cannot be cached directly, but the source documents they reference can be cached. To optimize performance, apply `cache_control` to your top-level document content blocks.

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data '{
    "model": "claude-opus-4-7",
    "max_tokens": 1024,
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "text",
                        "media_type": "text/plain",
                        "data": "This is a very long document with thousands of words..."
                    },
                    "citations": {"enabled": true},
                    "cache_control": {"type": "ephemeral"}
                },
                {
                    "type": "text",
                    "text": "What does this document say about API features?"
                }
            ]
        }
    ]
}'
```

```bash CLI
ant messages create \
  --model claude-opus-4-7 \
  --max-tokens 1024 <<'YAML'
messages:
  - role: user
    content:
      - type: document
        source:
          type: text
          media_type: text/plain
          data: This is a very long document with thousands of words...
        citations:
          enabled: true
        cache_control:
          type: ephemeral
      - type: text
        text: What does this document say about API features?
YAML
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

# Long document content (e.g., technical documentation)
long_document = (
    "This is a very long document with thousands of words..." + " ... " * 1000
)  # Minimum cacheable length

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "text",
                        "media_type": "text/plain",
                        "data": long_document,
                    },
                    "citations": {"enabled": True},
                    "cache_control": {
                        "type": "ephemeral"
                    },  # Cache the document content
                },
                {
                    "type": "text",
                    "text": "What does this document say about API features?",
                },
            ],
        }
    ],
)
print(response)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// Long document content (e.g., technical documentation)
const longDocument =
  "This is a very long document with thousands of words..." + " ... ".repeat(1000); // Minimum cacheable length

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "document",
          source: {
            type: "text",
            media_type: "text/plain",
            data: longDocument
          },
          citations: { enabled: true },
          cache_control: { type: "ephemeral" } // Cache the document content
        },
        {
          type: "text",
          text: "What does this document say about API features?"
        }
      ]
    }
  ]
});
```
</CodeGroup>

In this example:
- The document content is cached using `cache_control` on the document block
- Citations are enabled on the document
- Claude can generate responses with citations while benefiting from cached document content
- Subsequent requests using the same document will benefit from the cached content

## Document Types

### Choosing a document type

Three document types are supported for citations. Documents can be provided directly in the message (base64, text, or URL) or uploaded via the [Files API](/docs/en/build-with-claude/files) and referenced by `file_id`:

| Type | Best for | Chunking | Citation format |
| :--- | :--- | :--- | :--- |
| Plain text | Simple text documents, prose | Sentence | Character indices (0-indexed) |
| PDF | PDF files with text content | Sentence | Page numbers (1-indexed) |
| Custom content | Lists, transcripts, special formatting, more granular citations | No additional chunking | Block indices (0-indexed) |

<Note>
.csv, .xlsx, .docx, .md, and .txt files are not supported as document blocks. Convert these to plain text and include directly in message content. See [Working with other file formats](/docs/en/build-with-claude/files#working-with-other-file-formats).
</Note>

### Plain text documents

Plain text documents are automatically chunked into sentences. You can provide them inline or by reference with their `file_id`:

<Tabs>
<Tab title="Inline text">
```python
{
    "type": "document",
    "source": {
        "type": "text",
        "media_type": "text/plain",
        "data": "Plain text content...",
    },
    "title": "Document Title",  # optional
    "context": "Context about the document that will not be cited from",  # optional
    "citations": {"enabled": True},
}
```
</Tab>
<Tab title="Files API">
```python
{
    "type": "document",
    "source": {"type": "file", "file_id": "file_011CNvxoj286tYUAZFiZMf1U"},
    "title": "Document Title",  # optional
    "context": "Context about the document that will not be cited from",  # optional
    "citations": {"enabled": True},
}
```
</Tab>
</Tabs>

<section title="Example plain text citation">

```python
{
    "type": "char_location",
    "cited_text": "The exact text being cited",  # not counted towards output tokens
    "document_index": 0,
    "document_title": "Document Title",
    "start_char_index": 0,  # 0-indexed
    "end_char_index": 50,  # exclusive
}
```

</section>

### PDF documents

PDF documents can be provided as base64-encoded data or by `file_id`. PDF text is extracted and chunked into sentences. As image citations are not yet supported, PDFs that are scans of documents and do not contain extractable text will not be citable.

<Tabs>
<Tab title="Base64">
```python
{
    "type": "document",
    "source": {
        "type": "base64",
        "media_type": "application/pdf",
        "data": base64_encoded_pdf_data,
    },
    "title": "Document Title",  # optional
    "context": "Context about the document that will not be cited from",  # optional
    "citations": {"enabled": True},
}
```
</Tab>
<Tab title="Files API">
```python
{
    "type": "document",
    "source": {"type": "file", "file_id": "file_011CNvxoj286tYUAZFiZMf1U"},
    "title": "Document Title",  # optional
    "context": "Context about the document that will not be cited from",  # optional
    "citations": {"enabled": True},
}
```
</Tab>
</Tabs>

<section title="Example PDF citation">

```python
{
    "type": "page_location",
    "cited_text": "The exact text being cited",  # not counted towards output tokens
    "document_index": 0,
    "document_title": "Document Title",
    "start_page_number": 1,  # 1-indexed
    "end_page_number": 2,  # exclusive
}
```

</section>

### Custom content documents

Custom content documents give you control over citation granularity. No additional chunking is done and chunks are provided to the model according to the content blocks provided.

```python
{
    "type": "document",
    "source": {
        "type": "content",
        "content": [
            {"type": "text", "text": "First chunk"},
            {"type": "text", "text": "Second chunk"},
        ],
    },
    "title": "Document Title",  # optional
    "context": "Context about the document that will not be cited from",  # optional
    "citations": {"enabled": True},
}
```

<section title="Example citation">

```python
{
    "type": "content_block_location",
    "cited_text": "The exact text being cited",  # not counted towards output tokens
    "document_index": 0,
    "document_title": "Document Title",
    "start_block_index": 0,  # 0-indexed
    "end_block_index": 1,  # exclusive
}
```

</section>

---

## Response Structure

When citations are enabled, responses include multiple text blocks with citations:

```python
{
    "content": [
        {"type": "text", "text": "According to the document, "},
        {
            "type": "text",
            "text": "the grass is green",
            "citations": [
                {
                    "type": "char_location",
                    "cited_text": "The grass is green.",
                    "document_index": 0,
                    "document_title": "Example Document",
                    "start_char_index": 0,
                    "end_char_index": 20,
                }
            ],
        },
        {"type": "text", "text": " and "},
        {
            "type": "text",
            "text": "the sky is blue",
            "citations": [
                {
                    "type": "char_location",
                    "cited_text": "The sky is blue.",
                    "document_index": 0,
                    "document_title": "Example Document",
                    "start_char_index": 20,
                    "end_char_index": 36,
                }
            ],
        },
        {
            "type": "text",
            "text": ". Information from page 5 states that ",
        },
        {
            "type": "text",
            "text": "water is essential",
            "citations": [
                {
                    "type": "page_location",
                    "cited_text": "Water is essential for life.",
                    "document_index": 1,
                    "document_title": "PDF Document",
                    "start_page_number": 5,
                    "end_page_number": 6,
                }
            ],
        },
        {
            "type": "text",
            "text": ". The custom document mentions ",
        },
        {
            "type": "text",
            "text": "important findings",
            "citations": [
                {
                    "type": "content_block_location",
                    "cited_text": "These are important findings.",
                    "document_index": 2,
                    "document_title": "Custom Content Document",
                    "start_block_index": 0,
                    "end_block_index": 1,
                }
            ],
        },
    ]
}
```

### Streaming Support

For streaming responses, a `citations_delta` type is included that contains a single citation to be added to the `citations` list on the current `text` content block.

<section title="Example streaming events">

```sse
event: message_start
data: {"type": "message_start", ...}

event: content_block_start
data: {"type": "content_block_start", "index": 0, ...}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0,
       "delta": {"type": "text_delta", "text": "According to..."}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0,
       "delta": {"type": "citations_delta",
                 "citation": {
                     "type": "char_location",
                     "cited_text": "...",
                     "document_index": 0,
                     ...
                 }}}

event: content_block_stop
data: {"type": "content_block_stop", "index": 0}

event: message_stop
data: {"type": "message_stop"}
```

</section>

---

# Effort

URL: https://platform.claude.com/docs/en/build-with-claude/effort

# Effort

Control how many tokens Claude uses when responding with the effort parameter, trading off between response thoroughness and token efficiency.

---

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

The effort parameter allows you to control how eager Claude is about spending tokens when responding to requests. This gives you the ability to trade off between response thoroughness and token efficiency, all with a single model. The effort parameter is available on all supported models with no beta header required.

<Note>
  The effort parameter is supported by [Claude Mythos Preview](https://anthropic.com/glasswing), Claude Opus 4.7, Claude Opus 4.6, Claude Sonnet 4.6, and Claude Opus 4.5.
</Note>

<Tip>
For Claude Opus 4.6 and Sonnet 4.6, effort replaces `budget_tokens` as the recommended way to control thinking depth. Combine effort with [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`) for the best experience. While `budget_tokens` is still accepted on Opus 4.6 and Sonnet 4.6, it is deprecated and will be removed in a future model release. At `high` (default) and `max` effort, Claude will almost always think. At lower effort levels, it may skip thinking for simpler problems.
</Tip>

## How effort works

By default, Claude uses high effort, spending as many tokens as needed for excellent results. You can raise the effort level to `max` for the absolute highest capability, or lower it to be more conservative with token usage, optimizing for speed and cost while accepting some reduction in capability.

<Tip>
Setting `effort` to `"high"` produces exactly the same behavior as omitting the `effort` parameter entirely.
</Tip>

The effort parameter affects **all tokens** in the response, including:

- Text responses and explanations
- Tool calls and function arguments
- Extended thinking (when enabled)

This approach has two major advantages:

1. It doesn't require thinking to be enabled in order to use it.
2. It can affect all token spend including tool calls. For example, lower effort would mean Claude makes fewer tool calls. This gives a much greater degree of control over efficiency.

### Effort levels

| Level    | Description                                                                                                                      | Typical use case                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `max`    | Absolute maximum capability with no constraints on token spending. Available on Claude Mythos Preview, Claude Opus 4.7, Claude Opus 4.6, and Claude Sonnet 4.6. | Tasks requiring the deepest possible reasoning and most thorough analysis |
| `xhigh`  | Extended capability for long-horizon work. Available on Claude Opus 4.7. | Long-running agentic and coding tasks (over 30 minutes) with token budgets in the millions |
| `high`   | High capability. Equivalent to not setting the parameter. | Complex reasoning, difficult coding problems, agentic tasks                           |
| `medium` | Balanced approach with moderate token savings. | Agentic tasks that require a balance of speed, cost, and performance                                                         |
| `low`    | Most efficient. Significant token savings with some capability reduction. | Simpler tasks that need the best speed and lowest costs, such as subagents                     |

<Note>
Effort is a behavioral signal, not a strict token budget. At lower effort levels, Claude will still think on sufficiently difficult problems, but it will think less than it would at higher effort levels for the same problem.
</Note>

### Recommended effort levels for Sonnet 4.6

Sonnet 4.6 defaults to `high` effort. Explicitly set effort when using Sonnet 4.6 to avoid unexpected latency:

- **Medium effort** (recommended default): Best balance of speed, cost, and performance for most applications. Suitable for agentic coding, tool-heavy workflows, and code generation.
- **Low effort:** For high-volume or latency-sensitive workloads. Suitable for chat and non-coding use cases where faster turnaround is prioritized.
- **High effort:** For complex reasoning and tasks where quality matters more than speed or cost.
- **Max effort:** For tasks requiring the absolute highest capability with no constraints on token spending.

### Recommended effort levels for Claude Opus 4.7

**Start with `xhigh` for coding and agentic use cases**, and use `high` as the minimum for most intelligence-sensitive workloads. Step down to `medium` for cost-sensitive workloads, or up to `max` only when your evals show measurable headroom at `xhigh`.

The API default is `high`. To use `xhigh`, set `effort` explicitly; the value you pass overrides the default.

| Effort | Guidance for Claude Opus 4.7 |
|--------|------------------------------|
| `low`    | Efficient, but best for short, scoped tasks. Pair `low` with explicit checklists if your task has multiple sections. |
| `medium` | The drop-in for the average workflow where you want good results while reducing costs. |
| `high`   | Advanced use cases that still need a balance of intelligence and token consumption. This is often the sweet spot balancing quality and token efficiency. |
| `xhigh`  | The recommended starting point for coding and agentic work, and for exploratory tasks such as repeated tool calling, detailed web search, and knowledge-base search. Expect meaningfully higher token usage than `high`. |
| `max`    | Reserve for genuinely frontier problems. On most workloads `max` adds significant cost for relatively small quality gains, and on some structured-output or less intelligence-sensitive tasks it can lead to overthinking. |

Claude Opus 4.7 also respects effort levels more strictly than Claude Opus 4.6, especially at `low` and `medium`. At lower effort levels, the model scopes its work to what was asked rather than going above and beyond. If you observe shallow reasoning on complex problems with Claude Opus 4.7, raise effort rather than prompting around it. If you must keep effort low for latency, add targeted guidance like "This task involves multi-step reasoning. Think carefully before responding."

When running Claude Opus 4.7 at `xhigh` or `max` effort, set a large `max_tokens` so the model has room to think and act across subagents and tool calls. Starting at 64k tokens and tuning from there is a reasonable default.

## Basic usage

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
    --header "x-api-key: $ANTHROPIC_API_KEY" \
    --header "anthropic-version: 2023-06-01" \
    --header "content-type: application/json" \
    --data '{
        "model": "claude-opus-4-7",
        "max_tokens": 4096,
        "messages": [{
            "role": "user",
            "content": "Analyze the trade-offs between microservices and monolithic architectures"
        }],
        "output_config": {
            "effort": "medium"
        }
    }'
```

```bash CLI
ant messages create --transform 'content.0.text' --raw-output <<'YAML'
model: claude-opus-4-7
max_tokens: 4096
messages:
  - role: user
    content: Analyze the trade-offs between microservices and monolithic architectures
output_config:
  effort: medium
YAML
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    messages=[
        {
            "role": "user",
            "content": "Analyze the trade-offs between microservices and monolithic architectures",
        }
    ],
    output_config={"effort": "medium"},
)

print(response.content[0].text)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 4096,
  messages: [
    {
      role: "user",
      content: "Analyze the trade-offs between microservices and monolithic architectures"
    }
  ],
  output_config: {
    effort: "medium"
  }
});

const textBlock = response.content.find(
  (block): block is Anthropic.TextBlock => block.type === "text"
);
console.log(textBlock?.text);
```

```csharp C#
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 4096,
            Messages = [new() { Role = Role.User, Content = "Analyze the trade-offs between microservices and monolithic architectures" }],
            OutputConfig = new OutputConfig
            {
                Effort = Effort.Medium
            }
        };

        var message = await client.Messages.Create(parameters);
        Console.WriteLine(message);
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 4096,
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("Analyze the trade-offs between microservices and monolithic architectures")),
		},
		OutputConfig: anthropic.OutputConfigParam{
			Effort: anthropic.OutputConfigEffortMedium,
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response.Content[0].Text)
}
```

```java Java hidelines={1..5,7..9,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.OutputConfig;

public class Main {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(4096L)
            .addUserMessage("Analyze the trade-offs between microservices and monolithic architectures")
            .outputConfig(OutputConfig.builder()
                .effort(OutputConfig.Effort.MEDIUM)
                .build())
            .build();

        Message response = client.messages().create(params);
        response.content().stream()
            .flatMap(block -> block.text().stream())
            .forEach(textBlock -> System.out.println(textBlock.text()));
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 4096,
    messages: [
        ['role' => 'user', 'content' => 'Analyze the trade-offs between microservices and monolithic architectures']
    ],
    model: 'claude-opus-4-7',
    outputConfig: ['effort' => 'medium'],
);

echo $message->content[0]->text;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 4096,
  messages: [
    { role: "user", content: "Analyze the trade-offs between microservices and monolithic architectures" }
  ],
  output_config: {
    effort: "medium"
  }
)

puts message.content.first.text
```

</CodeGroup>

## When to adjust the effort parameter

- Use **max effort** when you need the absolute highest capability with no constraints: the most thorough reasoning and deepest analysis. Available on Claude Mythos Preview, Claude Opus 4.7, Claude Opus 4.6, and Claude Sonnet 4.6.
- Use **xhigh effort** for advanced coding and complex agentic work requiring extended exploration, such as repeated tool calling and detailed search. Available on Claude Opus 4.7.
- Use **high effort** (the default) for complex reasoning, nuanced analysis, difficult coding problems, or any task where quality matters more than speed or cost.
- Use **medium effort** as a balanced option when you want solid performance without the full token expenditure of high effort.
- Use **low effort** when you're optimizing for speed (because Claude answers with fewer tokens) or cost. For example, simple classification tasks, quick lookups, or high-volume use cases where marginal quality improvements don't justify additional latency or spend.

## Effort with tool use

When using tools, the effort parameter affects both the explanations around tool calls and the tool calls themselves. Lower effort levels tend to:

- Combine multiple operations into fewer tool calls
- Make fewer tool calls
- Proceed directly to action without preamble
- Use terse confirmation messages after completion

Higher effort levels may:

- Make more tool calls
- Explain the plan before taking action
- Provide detailed summaries of changes
- Include more comprehensive code comments

## Effort with extended thinking

The effort parameter works alongside extended thinking. Its behavior depends on the model:

- **Claude Mythos Preview** uses [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) by default (no `thinking` configuration required). `thinking: {type: "disabled"}` is rejected. Effort controls thinking depth the same way as on Opus 4.7 and Opus 4.6.
- **Claude Opus 4.7** uses [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`), where effort is the recommended control for thinking depth. Manual extended thinking (`thinking: {type: "enabled", budget_tokens: N}`) is no longer supported on Opus 4.7; use adaptive thinking with effort instead. At `high`, `xhigh`, and `max` effort, Claude almost always thinks deeply. At lower levels, it may skip thinking for simpler problems.
- **Claude Opus 4.6** uses [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`), where effort is the recommended control for thinking depth. While `budget_tokens` is still accepted on Opus 4.6, it is deprecated and will be removed in a future release. At `high` and `max` effort, Claude almost always thinks deeply. At lower levels, it may skip thinking for simpler problems.
- **Claude Sonnet 4.6** uses [adaptive thinking](/docs/en/build-with-claude/adaptive-thinking) (where effort controls thinking depth). Manual thinking with [interleaved mode](/docs/en/build-with-claude/extended-thinking#interleaved-thinking) (`thinking: {type: "enabled", budget_tokens: N}`) is still functional but deprecated.
- **Claude Opus 4.5** uses manual thinking (`thinking: {type: "enabled", budget_tokens: N}`), where effort works alongside the thinking token budget. Set the effort level for your task, then set the thinking token budget based on task complexity.

The effort parameter can be used with or without extended thinking enabled. When used without thinking, it still controls overall token spend for text responses and tool calls.

## Best practices

1. **Set effort explicitly:** The API defaults to `high`, but the right starting point depends on your model and workload.
2. **Use low for speed-sensitive or simple tasks:** When latency matters or tasks are straightforward, low effort can significantly reduce response times and costs.
3. **Test your use case:** The impact of effort levels varies by task type. Evaluate performance on your specific use cases before deploying.
4. **Consider dynamic effort:** Adjust effort based on task complexity. Simple queries may warrant low effort while agentic coding and complex reasoning benefit from high effort.

---

# Embeddings

URL: https://platform.claude.com/docs/en/build-with-claude/embeddings

# Embeddings

Text embeddings are numerical representations of text that enable measuring semantic similarity. This guide introduces embeddings, their applications, and how to use embedding models for tasks like search, recommendations, and anomaly detection.

---

## Before implementing embeddings

When selecting an embeddings provider, there are several factors you can consider depending on your needs and preferences:

- Dataset size & domain specificity: size of the model training dataset and its relevance to the domain you want to embed. Larger or more domain-specific data generally produces better in-domain embeddings
- Inference performance: embedding lookup speed and end-to-end latency. This is a particularly important consideration for large scale production deployments
- Customization: options for continued training on private data, or specialization of models for very specific domains. This can improve performance on unique vocabularies

## How to get embeddings with Anthropic

Anthropic does not offer its own embedding model. One embeddings provider that has a wide variety of options and capabilities encompassing all of the above considerations is Voyage AI.

Voyage AI makes state-of-the-art embedding models and offers customized models for specific industry domains such as finance and healthcare, or bespoke fine-tuned models for individual customers.

The rest of this guide is for Voyage AI, but you should assess a variety of embeddings vendors to find the best fit for your specific use case.

## Available models

Voyage recommends using the following text embedding models:

**Voyage 4 (latest generation)**

| Model | Context Length | Embedding Dimension | Description |
| --- | --- | --- | --- |
| `voyage-4-large` | 32,000 | 1024 (default), 256, 512, 2048 | The best general-purpose and multilingual retrieval quality. See [blog post](https://blog.voyageai.com/2026/01/15/voyage-4/) for details. |
| `voyage-4` | 32,000 | 1024 (default), 256, 512, 2048 | Optimized for general-purpose and multilingual retrieval quality. Balances quality and efficiency. See [blog post](https://blog.voyageai.com/2026/01/15/voyage-4/) for details. |
| `voyage-4-lite` | 32,000 | 1024 (default), 256, 512, 2048 | Optimized for latency and cost. See [blog post](https://blog.voyageai.com/2026/01/15/voyage-4/) for details. |
| `voyage-4-nano` | 32,000 | 1024 (default), 256, 512, 2048 | Open-weight model (Apache 2.0 license) available on Hugging Face. See [blog post](https://blog.voyageai.com/2026/01/15/voyage-4/) for details. |

**Previous generation**

| Model | Context Length | Embedding Dimension | Description |
| --- | --- | --- | --- |
| `voyage-3-large` | 32,000 | 1024 (default), 256, 512, 2048 | The best general-purpose and multilingual retrieval quality. See [blog post](https://blog.voyageai.com/2025/01/07/voyage-3-large/) for details. |
| `voyage-3.5` | 32,000 | 1024 (default), 256, 512, 2048 | Optimized for general-purpose and multilingual retrieval quality. See [blog post](https://blog.voyageai.com/2025/05/20/voyage-3-5/) for details. |
| `voyage-3.5-lite` | 32,000 | 1024 (default), 256, 512, 2048 | Optimized for latency and cost. See [blog post](https://blog.voyageai.com/2025/05/20/voyage-3-5/) for details. |
| `voyage-code-3` | 32,000 | 1024 (default), 256, 512, 2048 | Optimized for **code** retrieval. See [blog post](https://blog.voyageai.com/2024/12/04/voyage-code-3/) for details. |
| `voyage-finance-2` | 32,000 | 1024 | Optimized for **finance** retrieval and RAG. See [blog post](https://blog.voyageai.com/2024/06/03/domain-specific-embeddings-finance-edition-voyage-finance-2/) for details. |
| `voyage-law-2` | 16,000 | 1024 | Optimized for **legal** and **long-context** retrieval and RAG. Also improved performance across all domains. See [blog post](https://blog.voyageai.com/2024/04/15/domain-specific-embeddings-and-retrieval-legal-edition-voyage-law-2/) for details. |

Additionally, the following multimodal embedding models are recommended:

| Model | Context Length | Embedding Dimension | Description |
| --- | --- | --- | --- |
| `voyage-multimodal-3.5` | 32,000 | 1024 (default), 256, 512, 2048 | Rich multimodal embedding model that can vectorize interleaved text, images, and videos. Includes video support as the first production-grade video embedding model. See [blog post](https://blog.voyageai.com/2026/01/15/voyage-multimodal-3-5/) for details. |
| `voyage-multimodal-3` | 32,000 | 1024 | Rich multimodal embedding model that can vectorize interleaved text and content-rich images, such as screenshots of PDFs, slides, tables, figures, and more. See [blog post](https://blog.voyageai.com/2024/11/12/voyage-multimodal-3/) for details. |

Need help deciding which text embedding model to use? Check out the [FAQ](https://docs.voyageai.com/docs/faq#what-embedding-models-are-available-and-which-one-should-i-use&ref=anthropic).

## Getting started with Voyage AI

To access Voyage embeddings:

1. Sign up on Voyage AI's website
2. Obtain an API key
3. Set the API key as an environment variable for convenience:

```bash
export VOYAGE_API_KEY="<your secret key>"
```

You can obtain the embeddings by either using the official [`voyageai` Python package](https://github.com/voyage-ai/voyageai-python) or HTTP requests, as described below.

### Voyage Python library

The `voyageai` package can be installed using the following command:

```bash
pip install -U voyageai
```

Then, you can create a client object and start using it to embed your texts:

```python nocheck
import voyageai

vo = voyageai.Client()
# This will automatically use the environment variable VOYAGE_API_KEY.
# Alternatively, you can use vo = voyageai.Client(api_key="<your secret key>")

texts = ["Sample text 1", "Sample text 2"]

result = vo.embed(texts, model="voyage-4", input_type="document")
print(result.embeddings[0])
print(result.embeddings[1])
```

`result.embeddings` will be a list of two embedding vectors, each containing 1024 floating-point numbers. After running the above code, the two embeddings will be printed on the screen:

```text
[-0.013131560757756233, 0.019828535616397858, ...]   # embedding for "Sample text 1"
[-0.0069352793507277966, 0.020878976210951805, ...]  # embedding for "Sample text 2"
```

When creating the embeddings, you can specify a few other arguments to the `embed()` function.

For more information on the Voyage python package, see [the Voyage documentation](https://docs.voyageai.com/docs/embeddings#python-api).

### Voyage HTTP API

You can also get embeddings by requesting Voyage HTTP API. For example, you can send an HTTP request through the `curl` command in a terminal:

```bash cURL
curl https://api.voyageai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $VOYAGE_API_KEY" \
  -d '{
    "input": ["Sample text 1", "Sample text 2"],
    "model": "voyage-4"
  }'
```

The response you would get is a JSON object containing the embeddings and the token usage:

```json
{
  "object": "list",
  "data": [
    {
      "embedding": [-0.013131560757756233, 0.019828535616397858 /* ... */],
      "index": 0
    },
    {
      "embedding": [-0.0069352793507277966, 0.020878976210951805 /* ... */],
      "index": 1
    }
  ],
  "model": "voyage-4",
  "usage": {
    "total_tokens": 10
  }
}
```

For more information on the Voyage HTTP API, see [the Voyage documentation](https://docs.voyageai.com/reference/embeddings-api).

### AWS Marketplace

Voyage embeddings are available on [AWS Marketplace](https://aws.amazon.com/marketplace/seller-profile?id=seller-snt4gb6fd7ljg). Instructions for accessing Voyage on AWS are available in the [Voyage AWS Marketplace documentation](https://docs.voyageai.com/docs/aws-marketplace-model-package?ref=anthropic).

## Quickstart example

The following brief example shows how to use embeddings.

Suppose you have a small corpus of six documents to retrieve from

```python nocheck
documents = [
    "The Mediterranean diet emphasizes fish, olive oil, and vegetables, believed to reduce chronic diseases.",
    "Photosynthesis in plants converts light energy into glucose and produces essential oxygen.",
    "20th-century innovations, from radios to smartphones, centered on electronic advancements.",
    "Rivers provide water, irrigation, and habitat for aquatic species, vital for ecosystems.",
    "Apple's conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET.",
    "Shakespeare's works, like 'Hamlet' and 'A Midsummer Night's Dream,' endure in literature.",
]
```

First, use Voyage to convert each document into an embedding vector

```python nocheck
import voyageai

vo = voyageai.Client()

# Embed the documents
doc_embds = vo.embed(documents, model="voyage-4", input_type="document").embeddings
```

The embeddings allow you to do semantic search / retrieval in the vector space. Given an example query,

```python
query = "When is Apple's conference call scheduled?"
```

Next, convert it into an embedding and conduct a nearest neighbor search to find the most relevant document based on the distance in the embedding space.

```python nocheck
import numpy as np

# Embed the query
query_embd = vo.embed([query], model="voyage-4", input_type="query").embeddings[0]

# Compute the similarity
# Voyage embeddings are normalized to length 1, therefore dot-product
# and cosine similarity are the same.
similarities = np.dot(doc_embds, query_embd)

retrieved_id = np.argmax(similarities)
print(documents[retrieved_id])
```

Note that `input_type="document"` and `input_type="query"` are used for embedding the document and query, respectively. More specification can be found in [Voyage Python library](/docs/en/build-with-claude/embeddings#voyage-python-library).

The output would be the 5th document, which is indeed the most relevant to the query:

```text
Apple's conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET.
```

If you are looking for a detailed set of cookbooks on how to do RAG with embeddings, including vector databases, check out the [RAG cookbook](https://platform.claude.com/cookbook/third-party-pinecone-rag-using-pinecone).

## FAQ

  <section title="Why do Voyage embeddings have superior quality?">

    Embedding models rely on powerful neural networks to capture and compress semantic context, similar to generative models. Voyage's team of experienced AI researchers optimizes every component of the embedding process, including:
    - Model architecture
    - Data collection
    - Loss functions
    - Optimizer selection

    Learn more about Voyage's technical approach on their [blog](https://blog.voyageai.com/).
  
</section>

  <section title="What embedding models are available and which should I use?">

    For general-purpose embedding, the recommended models are:
    - `voyage-4-large`: Best quality
    - `voyage-4-lite`: Lowest latency and cost
    - `voyage-4`: Balanced performance

    For retrieval, use the `input_type` parameter to specify whether the text is a query or document type.

    Domain-specific models:

    - Legal tasks: `voyage-law-2`
    - Code and programming documentation: `voyage-code-3`
    - Finance-related tasks: `voyage-finance-2`
  
</section>

  <section title="Which similarity function should I use?">

    You can use Voyage embeddings with either dot-product similarity, cosine similarity, or Euclidean distance. An explanation about embedding similarity can be found in this [vector similarity guide](https://www.pinecone.io/learn/vector-similarity/).

    Voyage AI embeddings are normalized to length 1, which means that:

    - Cosine similarity is equivalent to dot-product similarity, while the latter can be computed more quickly.
    - Cosine similarity and Euclidean distance will result in the identical rankings.
  
</section>

  <section title="What is the relationship between characters, words, and tokens?">

    See this [page](https://docs.voyageai.com/docs/tokenization?ref=anthropic).
  
</section>

  <section title="When and how should I use the input_type parameter?">

    For all retrieval tasks and use cases (for example, RAG), use the `input_type` parameter to specify whether the input text is a query or document. Do not omit `input_type` or set `input_type=None`. Specifying whether input text is a query or document can create better dense vector representations for retrieval, which can lead to better retrieval quality.

    When using the `input_type` parameter, special prompts are prepended to the input text prior to embedding. Specifically:

    > 📘 **Prompts associated with `input_type`**
    >
    > - For a query, the prompt is “Represent the query for retrieving supporting documents: “.
    > - For a document, the prompt is “Represent the document for retrieval: “.
    > - Example
    >     - When `input_type="query"`, a query like "When is Apple's conference call scheduled?" will become "**Represent the query for retrieving supporting documents:** When is Apple's conference call scheduled?"
    >     - When `input_type="document"`, a query like "Apple's conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET." will become "**Represent the document for retrieval:** Apple's conference call to discuss fourth fiscal quarter results and business updates is scheduled for Thursday, November 2, 2023 at 2:00 p.m. PT / 5:00 p.m. ET."

    `voyage-large-2-instruct`, as the name suggests, is trained to be responsive to additional instructions that are prepended to the input text. For classification, clustering, or other [MTEB](https://huggingface.co/mteb) subtasks, please use the [voyage-large-2-instruct instructions](https://github.com/voyage-ai/voyage-large-2-instruct).
  
</section>

  <section title="What quantization options are available?">

    Quantization in embeddings converts high-precision values, like 32-bit single-precision floating-point numbers, to lower-precision formats such as 8-bit integers or 1-bit binary values, reducing storage, memory, and costs by 4x and 32x, respectively. Supported Voyage models enable quantization by specifying the output data type with the `output_dtype` parameter:

    - `float`: Each returned embedding is a list of 32-bit (4-byte) single-precision floating-point numbers. This is the default and provides the highest precision / retrieval accuracy.
    - `int8` and `uint8`: Each returned embedding is a list of 8-bit (1-byte) integers ranging from -128 to 127 and 0 to 255, respectively.
    - `binary` and `ubinary`: Each returned embedding is a list of 8-bit integers that represent bit-packed, quantized single-bit embedding values: `int8` for `binary` and `uint8` for `ubinary`. The length of the returned list of integers is 1/8 of the actual dimension of the embedding. The binary type uses the offset binary method, which you can learn more about in the FAQ below.

    > **Binary quantization example**
    >
    > Consider the following eight embedding values: -0.03955078, 0.006214142, -0.07446289, -0.039001465, 0.0046463013, 0.00030612946, -0.08496094, and 0.03994751. With binary quantization, values less than or equal to zero will be quantized to a binary zero, and positive values to a binary one, resulting in the following binary sequence: 0, 1, 0, 0, 1, 1, 0, 1. These eight bits are then packed into a single 8-bit integer, 01001101 (with the leftmost bit as the most significant bit).
    >   - `ubinary`: The binary sequence is directly converted and represented as the unsigned integer (`uint8`) 77.
    >   - `binary`: The binary sequence is represented as the signed integer (`int8`) -51, calculated using the offset binary method (77 - 128 = -51).
  
</section>

  <section title="How can I truncate Matryoshka embeddings?">

    Matryoshka learning creates embeddings with coarse-to-fine representations within a single vector. Voyage models, such as `voyage-code-3`, that support multiple output dimensions generate such Matryoshka embeddings. You can truncate these vectors by keeping the leading subset of dimensions. For example, the following Python code demonstrates how to truncate 1024-dimensional vectors to 256 dimensions:

    
    ```python nocheck
    import voyageai
    import numpy as np


    def embd_normalize(v: np.ndarray) -> np.ndarray:
        """
        Normalize the rows of a 2D numpy array to unit vectors by dividing each row by its Euclidean
        norm. Raises a ValueError if any row has a norm of zero to prevent division by zero.
        """
        row_norms = np.linalg.norm(v, axis=1, keepdims=True)
        if np.any(row_norms == 0):
            raise ValueError("Cannot normalize rows with a norm of zero.")
        return v / row_norms


    vo = voyageai.Client()

    # Generate voyage-code-3 vectors, which by default are 1024-dimensional floating-point numbers
    embd = vo.embed(["Sample text 1", "Sample text 2"], model="voyage-code-3").embeddings

    # Set shorter dimension
    short_dim = 256

    # Resize and normalize vectors to shorter dimension
    resized_embd = embd_normalize(np.array(embd)[:, :short_dim]).tolist()
    ```
  
</section>

## Pricing

Visit Voyage's [pricing page](https://docs.voyageai.com/docs/pricing?ref=anthropic) for the most up to date pricing details.

---

# Fast mode (beta: research preview)

URL: https://platform.claude.com/docs/en/build-with-claude/fast-mode

# Fast mode (beta: research preview)

Higher output speed for Claude Opus 4.6 and Claude Opus 4.7, delivering significantly faster token generation for latency-sensitive and agentic workflows.

---

Fast mode provides significantly faster output token generation for Claude Opus 4.6 and Claude Opus 4.7. By setting `speed: "fast"` in your API request, you get up to 2.5x higher output tokens per second from the same model at premium pricing.

<Note>
Fast mode is in beta (research preview). [Join the waitlist](https://claude.com/fast-mode) to request access. Availability is limited while Anthropic gathers feedback.
</Note>

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

## Supported models

Fast mode is supported on the following models:

- Claude Opus 4.7 (`claude-opus-4-7`)
- Claude Opus 4.6 (`claude-opus-4-6`)

## How fast mode works

Fast mode runs the same model with a faster inference configuration. There is no change to intelligence or capabilities.

- Up to 2.5x higher output tokens per second compared to standard speed
- Speed benefits are focused on output tokens per second (OTPS), not time to first token (TTFT)
- Same model weights and behavior (not a different model)

## Basic usage

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
    --header "x-api-key: $ANTHROPIC_API_KEY" \
    --header "anthropic-version: 2023-06-01" \
    --header "anthropic-beta: fast-mode-2026-02-01" \
    --header "content-type: application/json" \
    --data '{
        "model": "claude-opus-4-7",
        "max_tokens": 4096,
        "speed": "fast",
        "messages": [{
            "role": "user",
            "content": "Refactor this module to use dependency injection"
        }]
    }'
```

```bash CLI
ant beta:messages create \
  --beta fast-mode-2026-02-01 \
  --transform 'content.0.text' --raw-output <<'YAML'
model: claude-opus-4-7
max_tokens: 4096
speed: fast
messages:
  - role: user
    content: Refactor this module to use dependency injection
YAML
```

```python Python nocheck hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

response = client.beta.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    speed="fast",
    betas=["fast-mode-2026-02-01"],
    messages=[
        {"role": "user", "content": "Refactor this module to use dependency injection"}
    ],
)

print(response.content[0].text)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.beta.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 4096,
  speed: "fast",
  betas: ["fast-mode-2026-02-01"],
  messages: [
    {
      role: "user",
      content: "Refactor this module to use dependency injection"
    }
  ]
});

const textBlock = response.content.find(
  (block): block is Anthropic.Beta.Messages.BetaTextBlock => block.type === "text"
);
console.log(textBlock?.text);
```

```csharp C# hidelines={1..5}
using Anthropic;
using Anthropic.Models.Beta.Messages;

AnthropicClient client = new();

var response = await client.Beta.Messages.Create(new MessageCreateParams
{
    Model = "claude-opus-4-7",
    MaxTokens = 4096,
    Speed = Speed.Fast,
    Betas = ["fast-mode-2026-02-01"],
    Messages = [
        new() { Role = Role.User, Content = "Refactor this module to use dependency injection" }
    ],
});

Console.WriteLine(response);
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	anthropic "github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Beta.Messages.New(context.TODO(), anthropic.BetaMessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 4096,
		Speed:     anthropic.BetaMessageNewParamsSpeedFast,
		Betas:     []anthropic.AnthropicBeta{anthropic.AnthropicBetaFastMode2026_02_01},
		Messages: []anthropic.BetaMessageParam{
			anthropic.NewBetaUserMessage(anthropic.NewBetaTextBlock("Refactor this module to use dependency injection")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response.Content[0].AsText().Text)
}
```

```java Java hidelines={1..8,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.beta.AnthropicBeta;
import com.anthropic.models.beta.messages.BetaMessage;
import com.anthropic.models.beta.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    BetaMessage response = client.beta().messages().create(
            MessageCreateParams.builder()
                    .model(Model.CLAUDE_OPUS_4_7)
                    .maxTokens(4096L)
                    .speed(MessageCreateParams.Speed.FAST)
                    .addBeta(AnthropicBeta.FAST_MODE_2026_02_01)
                    .addUserMessage("Refactor this module to use dependency injection")
                    .build());

    IO.println(response.content().get(0).text().get().text());
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client();

$response = $client->beta->messages->create(
    model: 'claude-opus-4-7',
    maxTokens: 4096,
    speed: 'fast',
    betas: ['fast-mode-2026-02-01'],
    messages: [
        ['role' => 'user', 'content' => 'Refactor this module to use dependency injection'],
    ],
);

echo $response->content[0]->text;
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

response = client.beta.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 4096,
  speed: "fast",
  betas: ["fast-mode-2026-02-01"],
  messages: [{role: "user", content: "Refactor this module to use dependency injection"}]
)

puts response.content[0].text
```

</CodeGroup>

## Pricing

Fast mode is priced at 6x standard Opus rates across the full context window, including requests over 200k input tokens. The following table shows pricing for Claude Opus 4.6 and Claude Opus 4.7 with fast mode:

| Input | Output |
|:------|:-------|
| $30 / MTok | $150 / MTok |

Fast mode pricing stacks with other pricing modifiers:

- [Prompt caching multipliers](/docs/en/about-claude/pricing#prompt-caching) apply on top of fast mode pricing
- [Data residency](/docs/en/manage-claude/data-residency) multipliers apply on top of fast mode pricing

For complete pricing details, see the [pricing page](/docs/en/about-claude/pricing#fast-mode-pricing).

## Rate limits

Fast mode has a dedicated rate limit that is separate from standard Opus rate limits. When your fast mode rate limit is exceeded, the API returns a `429` error with a `retry-after` header indicating when capacity will be available.

The response includes headers that indicate your fast mode rate limit status:

| Header | Description |
|:-------|:------------|
| `anthropic-fast-input-tokens-limit` | Maximum fast mode input tokens per minute |
| `anthropic-fast-input-tokens-remaining` | Remaining fast mode input tokens |
| `anthropic-fast-input-tokens-reset` | Time when the fast mode input token limit resets |
| `anthropic-fast-output-tokens-limit` | Maximum fast mode output tokens per minute |
| `anthropic-fast-output-tokens-remaining` | Remaining fast mode output tokens |
| `anthropic-fast-output-tokens-reset` | Time when the fast mode output token limit resets |

For tier-specific rate limits, see the [rate limits page](/docs/en/api/rate-limits).

## Checking which speed was used

The response `usage` object includes a `speed` field that indicates which speed was used, either `"fast"` or `"standard"`:

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
    --header "x-api-key: $ANTHROPIC_API_KEY" \
    --header "anthropic-version: 2023-06-01" \
    --header "anthropic-beta: fast-mode-2026-02-01" \
    --header "content-type: application/json" \
    --data '{
        "model": "claude-opus-4-7",
        "max_tokens": 1024,
        "speed": "fast",
        "messages": [{"role": "user", "content": "Hello"}]
    }'
```

```bash CLI
ant beta:messages create --beta fast-mode-2026-02-01 \
  --transform usage.speed --raw-output <<'YAML'
model: claude-opus-4-7
max_tokens: 1024
speed: fast
messages:
  - role: user
    content: Hello
YAML
```

```python Python nocheck
response = client.beta.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    speed="fast",
    betas=["fast-mode-2026-02-01"],
    messages=[{"role": "user", "content": "Hello"}],
)

print(response.usage.speed)  # "fast" or "standard"
```

```typescript TypeScript
const response = await client.beta.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  speed: "fast",
  betas: ["fast-mode-2026-02-01"],
  messages: [{ role: "user", content: "Hello" }]
});

console.log(response.usage.speed); // "fast" or "standard"
```

```csharp C# hidelines={1..5}
using Anthropic;
using Anthropic.Models.Beta.Messages;

AnthropicClient client = new();

var response = await client.Beta.Messages.Create(new MessageCreateParams
{
    Model = "claude-opus-4-7",
    MaxTokens = 1024,
    Speed = Speed.Fast,
    Betas = ["fast-mode-2026-02-01"],
    Messages = [new() { Role = Role.User, Content = "Hello" }],
});

Console.WriteLine(response.Usage.Speed);  // "fast" or "standard"
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	anthropic "github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Beta.Messages.New(context.TODO(), anthropic.BetaMessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 1024,
		Speed:     anthropic.BetaMessageNewParamsSpeedFast,
		Betas:     []anthropic.AnthropicBeta{anthropic.AnthropicBetaFastMode2026_02_01},
		Messages: []anthropic.BetaMessageParam{
			anthropic.NewBetaUserMessage(anthropic.NewBetaTextBlock("Hello")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response.Usage.Speed) // "fast" or "standard"
}
```

```java Java hidelines={1..8,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.beta.AnthropicBeta;
import com.anthropic.models.beta.messages.BetaMessage;
import com.anthropic.models.beta.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;

void main() {
    AnthropicClient client = AnthropicOkHttpClient.fromEnv();

    MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(1024L)
            .speed(MessageCreateParams.Speed.FAST)
            .addBeta(AnthropicBeta.FAST_MODE_2026_02_01)
            .addUserMessage("Hello")
            .build();

    BetaMessage response = client.beta().messages().create(params);
    IO.println(response.usage().speed());  // "fast" or "standard"
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client();

$response = $client->beta->messages->create(
    model: 'claude-opus-4-7',
    maxTokens: 1024,
    speed: 'fast',
    betas: ['fast-mode-2026-02-01'],
    messages: [['role' => 'user', 'content' => 'Hello']],
);

echo $response->usage->speed;  // "fast" or "standard"
```

```ruby Ruby nocheck
response = client.beta.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 1024,
  speed: "fast",
  betas: ["fast-mode-2026-02-01"],
  messages: [{ role: "user", content: "Hello" }]
)

puts(response.usage.speed)  # "fast" or "standard"
```
</CodeGroup>

```json Output hidelines={5..8}
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [{ "type": "text", "text": "Hello!" }],
  "model": "claude-opus-4-7",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 8,
    "output_tokens": 12,
    "speed": "fast"
  }
}
```

To track fast mode usage and costs across your organization, see the [Usage and Cost API](/docs/en/manage-claude/usage-cost-api).

## Retries and fallback

### Automatic retries

When fast mode rate limits are exceeded, the API returns a `429` error with a `retry-after` header. The Anthropic SDKs automatically retry these requests up to 2 times by default (configurable via `max_retries`), waiting for the server-specified delay before each retry. Since fast mode uses continuous token replenishment, the `retry-after` delay is typically short and requests succeed once capacity is available.

### Falling back to standard speed

If you'd prefer to fall back to standard speed rather than wait for fast mode capacity, catch the rate limit error and retry without `speed: "fast"`. Set `max_retries` to `0` on the initial fast request to skip automatic retries and fail immediately on rate limit errors.

<Note>
Falling back from fast to standard speed will result in a [prompt cache](/docs/en/build-with-claude/prompt-caching) miss. Requests at different speeds do not share cached prefixes.
</Note>

Since setting `max_retries` to `0` also disables retries for other transient errors (overloaded, internal server errors), the examples below re-issue the original request with default retries for those cases.

<CodeGroup>
```bash CLI
# `ant` retries 429/5xx automatically and has no per-request max_retries
# override, so on a fast-mode 429 the fallback runs after the built-in
# retries exhaust. --transform-error surfaces error.type for branching.
create_message_with_fast_fallback() {
  local speed="$1" max_attempts="${2:-3}" body out
  body=${3:-$(cat)}
  out=$(
    ant beta:messages create --beta fast-mode-2026-02-01 \
      ${speed:+--speed "$speed"} \
      --transform-error error.type --format-error yaml <<<"$body" 2>/dev/null
  ) && { printf '%s\n' "$out"; return; }
  case "$out" in
    rate_limit_error)
      if [[ -n "$speed" ]]; then
        create_message_with_fast_fallback "" "$max_attempts" "$body"
        return
      fi ;;
    overloaded_error | api_error | "")
      if (( max_attempts > 1 )); then
        create_message_with_fast_fallback "$speed" $((max_attempts - 1)) "$body"
        return
      fi ;;
  esac
  printf '%s\n' "${out:-connection_error}" >&2
  return 1
}

MESSAGE=$(
  create_message_with_fast_fallback fast <<'YAML'
model: claude-opus-4-7
max_tokens: 1024
messages:
  - role: user
    content: Hello
YAML
)
```

```python Python nocheck hidelines={1..2}
import anthropic

client = anthropic.Anthropic()


def create_message_with_fast_fallback(max_retries=None, max_attempts=3, **params):
    try:
        return client.beta.messages.create(**params, max_retries=max_retries)
    except anthropic.RateLimitError:
        if params.get("speed") == "fast":
            del params["speed"]
            return create_message_with_fast_fallback(**params)
        raise
    except (
        anthropic.APIStatusError,
        anthropic.APIConnectionError,
    ) as error:
        if isinstance(error, anthropic.APIStatusError) and error.status_code < 500:
            raise
        if max_attempts > 1:
            return create_message_with_fast_fallback(
                max_attempts=max_attempts - 1, **params
            )
        raise


message = create_message_with_fast_fallback(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}],
    betas=["fast-mode-2026-02-01"],
    speed="fast",
    max_retries=0,
)
```

```typescript TypeScript hidelines={1..3,-1}
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();
(async () => {
  async function createMessageWithFastFallback(
    params: Anthropic.Beta.MessageCreateParams,
    requestOptions?: Anthropic.RequestOptions,
    maxAttempts: number = 3
  ): Promise<Anthropic.Beta.Messages.BetaMessage> {
    try {
      return (await client.beta.messages.create(
        params,
        requestOptions
      )) as Anthropic.Beta.Messages.BetaMessage;
    } catch (e) {
      if (e instanceof Anthropic.RateLimitError && params.speed === "fast") {
        const { speed, ...rest } = params;
        return createMessageWithFastFallback(rest);
      }
      if (
        e instanceof Anthropic.InternalServerError ||
        e instanceof Anthropic.APIConnectionError
      ) {
        if (maxAttempts > 1) {
          return createMessageWithFastFallback(params, undefined, maxAttempts - 1);
        }
      }
      throw e;
    }
  }

  const message = await createMessageWithFastFallback(
    {
      model: "claude-opus-4-7",
      max_tokens: 1024,
      messages: [{ role: "user", content: "Hello" }],
      betas: ["fast-mode-2026-02-01"],
      speed: "fast"
    },
    { maxRetries: 0 }
  );
})();
```

```csharp C# hidelines={1..6}
using Anthropic;
using Anthropic.Exceptions;
using Anthropic.Models.Beta.Messages;

AnthropicClient client = new();

async Task<BetaMessage> CreateMessageWithFastFallback(
    MessageCreateParams parameters,
    int? maxRetries = null,
    int maxAttempts = 3)
{
    try
    {
        var requestClient = maxRetries is int retries
            ? client.WithOptions(options => options with { MaxRetries = retries })
            : client;
        return await requestClient.Beta.Messages.Create(parameters);
    }
    catch (AnthropicRateLimitException)
    {
        if (parameters.Speed is not null)
        {
            return await CreateMessageWithFastFallback(
                parameters with { Speed = null });
        }
        throw;
    }
    catch (Anthropic5xxException)
    {
        if (maxAttempts > 1)
        {
            return await CreateMessageWithFastFallback(
                parameters, maxAttempts: maxAttempts - 1);
        }
        throw;
    }
}

var message = await CreateMessageWithFastFallback(
    new MessageCreateParams
    {
        Model = "claude-opus-4-7",
        MaxTokens = 1024,
        Messages = [new() { Role = Role.User, Content = "Hello" }],
        Betas = ["fast-mode-2026-02-01"],
        Speed = Speed.Fast,
    },
    maxRetries: 0);
```

```go Go hidelines={1..11}
package main

import (
	"context"
	"errors"
	"fmt"

	anthropic "github.com/anthropics/anthropic-sdk-go"
	"github.com/anthropics/anthropic-sdk-go/option"
)

func createMessageWithFastFallback(
	ctx context.Context,
	client *anthropic.Client,
	params anthropic.BetaMessageNewParams,
	maxAttempts int,
	opts ...option.RequestOption,
) (*anthropic.BetaMessage, error) {
	message, err := client.Beta.Messages.New(ctx, params, opts...)
	if err != nil {
		var apierr *anthropic.Error
		if errors.As(err, &apierr) && apierr.StatusCode == 429 && params.Speed != "" {
			params.Speed = ""
			return createMessageWithFastFallback(ctx, client, params, maxAttempts)
		}
		if (errors.As(err, &apierr) && apierr.StatusCode >= 500) || !errors.As(err, &apierr) {
			if maxAttempts > 1 {
				return createMessageWithFastFallback(ctx, client, params, maxAttempts-1)
			}
		}
		return nil, err
	}
	return message, nil
}

func main() {
	client := anthropic.NewClient()
	message, err := createMessageWithFastFallback(
		context.TODO(),
		&client,
		anthropic.BetaMessageNewParams{
			Model:     anthropic.ModelClaudeOpus4_7,
			MaxTokens: 1024,
			Messages: []anthropic.BetaMessageParam{
				anthropic.NewBetaUserMessage(anthropic.NewBetaTextBlock("Hello")),
			},
			Speed: "fast",
			Betas: []anthropic.AnthropicBeta{anthropic.AnthropicBetaFastMode2026_02_01},
		},
		3,
		option.WithMaxRetries(0),
	)
	if err != nil {
		panic(err)
	}
	fmt.Println(message)
}
```

```java Java hidelines={1..2,5..10}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.errors.InternalServerException;
import com.anthropic.errors.RateLimitException;
import com.anthropic.models.beta.AnthropicBeta;
import com.anthropic.models.beta.messages.BetaMessage;
import com.anthropic.models.beta.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;
import java.util.Optional;

// Disable SDK auto-retry so the fallback logic below handles it
AnthropicClient client =
        AnthropicOkHttpClient.builder().fromEnv().maxRetries(0).build();

BetaMessage createMessageWithFastFallback(
        MessageCreateParams params, int maxAttempts) {
    try {
        return client.beta().messages().create(params);
    } catch (RateLimitException e) {
        if (params.speed().isPresent()) {
            MessageCreateParams retryParams = params.toBuilder()
                    .speed(Optional.empty())
                    .build();
            return createMessageWithFastFallback(retryParams, maxAttempts);
        }
        throw e;
    } catch (InternalServerException e) {
        if (maxAttempts > 1) {
            return createMessageWithFastFallback(params, maxAttempts - 1);
        }
        throw e;
    }
}

void main() {
    BetaMessage message = createMessageWithFastFallback(
            MessageCreateParams.builder()
                    .model(Model.CLAUDE_OPUS_4_7)
                    .maxTokens(1024L)
                    .addUserMessage("Hello")
                    .addBeta(AnthropicBeta.FAST_MODE_2026_02_01)
                    .speed(MessageCreateParams.Speed.FAST)
                    .build(),
            3);
    IO.println(message.content().get(0).text().get().text());
}
```

```php PHP hidelines={1..3,8}
<?php

use Anthropic\Client;
use Anthropic\Core\Exceptions\APIConnectionException;
use Anthropic\Core\Exceptions\InternalServerException;
use Anthropic\Core\Exceptions\RateLimitException;
use Anthropic\RequestOptions;

$client = new Client();

function createMessageWithFastFallback(
    Client $client,
    array $params,
    ?RequestOptions $requestOptions = null,
    int $maxAttempts = 3,
) {
    try {
        return $client->beta->messages->create(
            ...$params,
            requestOptions: $requestOptions,
        );
    } catch (RateLimitException $e) {
        if (isset($params['speed'])) {
            unset($params['speed']);
            return createMessageWithFastFallback($client, $params);
        }
        throw $e;
    } catch (InternalServerException | APIConnectionException $e) {
        if ($maxAttempts > 1) {
            return createMessageWithFastFallback(
                $client, $params, maxAttempts: $maxAttempts - 1
            );
        }
        throw $e;
    }
}

$message = createMessageWithFastFallback(
    $client,
    [
        'model' => 'claude-opus-4-7',
        'maxTokens' => 1024,
        'messages' => [['role' => 'user', 'content' => 'Hello']],
        'betas' => ['fast-mode-2026-02-01'],
        'speed' => 'fast',
    ],
    RequestOptions::with(maxRetries: 0),
);
```

```ruby Ruby nocheck hidelines={1..2}
require "anthropic"

anthropic = Anthropic::Client.new

def create_message_with_fast_fallback(client, request_options: {}, max_attempts: 3, **params)
  client.beta.messages.create(**params, request_options: request_options)
rescue Anthropic::Errors::RateLimitError
  raise unless params[:speed] == "fast"
  params.delete(:speed)
  create_message_with_fast_fallback(client, **params)
rescue Anthropic::Errors::InternalServerError, Anthropic::Errors::APIConnectionError
  raise unless max_attempts > 1
  create_message_with_fast_fallback(client, max_attempts: max_attempts - 1, **params)
end

message = create_message_with_fast_fallback(
  anthropic,
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Hello" }],
  betas: ["fast-mode-2026-02-01"],
  speed: "fast",
  request_options: { max_retries: 0 }
)
```
</CodeGroup>

## Considerations

- **Prompt caching:** Switching between fast and standard speed invalidates the prompt cache. Requests at different speeds do not share cached prefixes.
- **Supported models:** Fast mode is supported on Claude Opus 4.6 and Claude Opus 4.7. Sending `speed: "fast"` with an unsupported model returns an error.
- **TTFT:** Fast mode's benefits are focused on output tokens per second (OTPS), not time to first token (TTFT).
- **Batch API:** Fast mode is not available with the [Batch API](/docs/en/build-with-claude/batch-processing).
- **Priority Tier:** Fast mode is not available with [Priority Tier](/docs/en/api/service-tiers).
- **Claude Platform on AWS:** Fast mode is not available on [Claude Platform on AWS](/docs/en/build-with-claude/claude-platform-on-aws).

## Next steps

<CardGroup>
  <Card title="Pricing" icon="dollar-sign" href="/docs/en/about-claude/pricing#fast-mode-pricing">
    View detailed fast mode pricing information.
  </Card>
  <Card title="Rate limits" icon="gauge" href="/docs/en/api/rate-limits">
    Check rate limit tiers for fast mode.
  </Card>
  <Card title="Effort parameter" icon="sliders" href="/docs/en/build-with-claude/effort">
    Control token usage with the effort parameter.
  </Card>
</CardGroup>

---

# Multilingual support

URL: https://platform.claude.com/docs/en/build-with-claude/multilingual-support

# Multilingual support

Claude excels at tasks across multiple languages, maintaining strong cross-lingual performance relative to English.

---

## Overview

Claude demonstrates robust multilingual capabilities, with particularly strong performance in zero-shot tasks across languages. The model maintains consistent relative performance across both widely-spoken and lower-resource languages, making it a reliable choice for multilingual applications.

Note that Claude is capable in many languages beyond those benchmarked below. Consider testing with any languages relevant to your specific use cases.

## Performance data

Below are the zero-shot chain-of-thought evaluation scores for Claude models across different languages, shown as a percent relative to English performance (100%):

| Language | Claude Opus 4.1<sup>1</sup> | Claude Opus 4 (deprecated)<sup>1</sup> | Claude Sonnet 4.5<sup>1</sup> | Claude Sonnet 4 (deprecated)<sup>1</sup> | Claude Haiku 4.5<sup>1</sup> |
|----------|---------------|---------------|---------------|-----------------|------------------|
| English (baseline, fixed to 100%) | 100% | 100% | 100% | 100% | 100% |
| Spanish | 98.1% | 98.0% | 98.2% | 97.5% | 96.4% |
| Portuguese (Brazil) | 97.8% | 97.3% | 97.8% | 97.2% | 96.1% |
| Italian | 97.7% | 97.5% | 97.9% | 97.3% | 96.0% |
| French | 97.9% | 97.7% | 97.5% | 97.1% | 95.7% |
| Indonesian | 97.3% | 97.2% | 97.3% | 96.2% | 94.2% |
| German | 97.7% | 97.1% | 97.0% | 94.7% | 94.3% |
| Arabic | 97.1% | 96.9% | 97.2% | 96.1% | 92.5% |
| Chinese (Simplified) | 97.1% | 96.7% | 96.9% | 95.9% | 94.2% |
| Korean | 96.6% | 96.4% | 96.7% | 95.9% | 93.3% |
| Japanese | 96.9% | 96.2% | 96.8% | 95.6% | 93.5% |
| Hindi | 96.8% | 96.7% | 96.7% | 95.8% | 92.4% |
| Bengali | 95.7% | 95.2% | 95.4% | 94.4% | 90.4% |
| Swahili | 89.8% | 89.5% | 91.1% | 87.1% | 78.3% |
| Yoruba | 80.3% | 78.9% | 79.7% | 76.4% | 52.7% |

<sup>1</sup> With [extended thinking](/docs/en/build-with-claude/extended-thinking).

<Note>
These metrics are based on [MMLU (Massive Multitask Language Understanding)](https://en.wikipedia.org/wiki/MMLU) English test sets that were translated into 14 additional languages by professional human translators, as documented in [OpenAI's simple-evals repository](https://github.com/openai/simple-evals/blob/main/multilingual_mmlu_benchmark_results.md). The use of human translators for this evaluation ensures high-quality translations, particularly important for languages with fewer digital resources.
</Note>

***

## Best practices

When working with multilingual content:

1. **Provide clear language context**: While Claude can detect the target language automatically, explicitly stating the desired input/output language improves reliability. For enhanced fluency, you can prompt Claude to use "idiomatic speech as if it were a native speaker."
2. **Use native scripts**: Submit text in its native script rather than transliteration for optimal results
3. **Consider cultural context**: Effective communication often requires cultural and regional awareness beyond pure translation

Also follow the general [prompt engineering guidelines](/docs/en/build-with-claude/prompt-engineering/overview) to better improve Claude's performance.

***

## Language support considerations

- Claude processes input and generates output in most world languages that use standard Unicode characters
- Performance varies by language, with particularly strong capabilities in widely-spoken languages
- Even in languages with fewer digital resources, Claude maintains meaningful capabilities

<CardGroup cols={1}>
  <Card title="Prompt Engineering Guide" icon="edit" href="/docs/en/build-with-claude/prompt-engineering/overview">
    Master the art of prompt crafting to get the most out of Claude.
  </Card>
</CardGroup>

---

# Search results

URL: https://platform.claude.com/docs/en/build-with-claude/search-results

# Search results

Enable natural citations for RAG applications by providing search results with source attribution

---

<Note>
This feature is eligible for [Zero Data Retention (ZDR)](/docs/en/build-with-claude/api-and-data-retention). When your organization has a ZDR arrangement, data sent through this feature is not stored after the API response is returned.
</Note>

Search result content blocks enable natural citations with proper source attribution, bringing web search-quality citations to your custom applications. This feature is particularly powerful for RAG (Retrieval-Augmented Generation) applications where you need Claude to cite sources accurately.

The search results feature is available on the following models:

- Claude Opus 4.7 (`claude-opus-4-7`)
- Claude Opus 4.6 (`claude-opus-4-6`)
- Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)
- Claude Opus 4.5 (`claude-opus-4-5-20251101`)
- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 ([deprecated](/docs/en/about-claude/model-deprecations)) (`claude-opus-4-20250514`)
- Claude Sonnet 4 ([deprecated](/docs/en/about-claude/model-deprecations)) (`claude-sonnet-4-20250514`)
- Claude Haiku 4.5 (`claude-haiku-4-5-20251001`)
- Claude Haiku 3.5 ([retired, except on Bedrock and Vertex AI](/docs/en/about-claude/model-deprecations)) (`claude-3-5-haiku-20241022`)

## Key benefits

- **Natural citations:** Achieve the same citation quality as web search for any content
- **Flexible integration:** Use in tool returns for dynamic RAG or as top-level content for pre-fetched data
- **Proper source attribution:** Each result includes source and title information for clear attribution
- **No document workarounds needed:** Eliminates the need for document-based workarounds
- **Consistent citation format:** Matches the citation quality and format of Claude's web search functionality

## How it works

Search results can be provided in two ways:

1. **From tool calls:** Your custom tools return search results, enabling dynamic RAG applications
2. **As top-level content:** You provide search results directly in user messages for pre-fetched or cached content

In both cases, Claude can automatically cite information from the search results with proper source attribution.

### Search result schema

Search results use the following structure:

```json
{
  "type": "search_result",
  "source": "https://example.com/article", // Required: Source URL or identifier
  "title": "Article Title", // Required: Title of the result
  "content": [
    // Required: Array of text blocks
    {
      "type": "text",
      "text": "The actual content of the search result..."
    }
  ],
  "citations": {
    // Optional: Citation configuration
    "enabled": true // Enable/disable citations for this result
  }
}
```

### Required fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Must be `"search_result"` |
| `source` | string | The source URL or identifier for the content |
| `title` | string | A descriptive title for the search result |
| `content` | array | An array of text blocks containing the actual content |

### Optional fields

| Field | Type | Description |
|-------|------|-------------|
| `citations` | object | Citation configuration with `enabled` boolean field |
| `cache_control` | object | Cache control settings (e.g., `{"type": "ephemeral"}`) |

Each item in the `content` array must be a text block with:
- `type`: Must be `"text"`
- `text`: The actual text content (non-empty string)

## Method 1: Search results from tool calls

The most powerful use case is returning search results from your custom tools. This enables dynamic RAG applications where tools fetch and return relevant content with automatic citations.

### Example: Knowledge base tool

<CodeGroup>

```python Python nocheck hidelines={1}
from anthropic import Anthropic
from anthropic.types import (
    MessageParam,
    TextBlockParam,
    SearchResultBlockParam,
    ToolResultBlockParam,
)

client = Anthropic()

# Define a knowledge base search tool
knowledge_base_tool = {
    "name": "search_knowledge_base",
    "description": "Search the company knowledge base for information",
    "input_schema": {
        "type": "object",
        "properties": {"query": {"type": "string", "description": "The search query"}},
        "required": ["query"],
    },
}


# Function to handle the tool call
def search_knowledge_base(query):
    # Your search logic here
    # Returns search results in the correct format
    return [
        SearchResultBlockParam(
            type="search_result",
            source="https://docs.company.com/product-guide",
            title="Product Configuration Guide",
            content=[
                TextBlockParam(
                    type="text",
                    text="To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs.",
                )
            ],
            citations={"enabled": True},
        ),
        SearchResultBlockParam(
            type="search_result",
            source="https://docs.company.com/troubleshooting",
            title="Troubleshooting Guide",
            content=[
                TextBlockParam(
                    type="text",
                    text="If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values.",
                )
            ],
            citations={"enabled": True},
        ),
    ]


# Create a message with the tool
response = client.messages.create(
    model="claude-opus-4-7",  # Works with all supported models
    max_tokens=1024,
    tools=[knowledge_base_tool],
    messages=[
        MessageParam(role="user", content="How do I configure the timeout settings?")
    ],
)

# When Claude calls the tool, provide the search results
if response.content[0].type == "tool_use":
    tool_result = search_knowledge_base(response.content[0].input["query"])

    # Send the tool result back
    final_response = client.messages.create(
        model="claude-opus-4-7",  # Works with all supported models
        max_tokens=1024,
        messages=[
            MessageParam(
                role="user", content="How do I configure the timeout settings?"
            ),
            MessageParam(role="assistant", content=response.content),
            MessageParam(
                role="user",
                content=[
                    ToolResultBlockParam(
                        type="tool_result",
                        tool_use_id=response.content[0].id,
                        content=tool_result,  # Search results go here
                    )
                ],
            ),
        ],
    )
```

```typescript TypeScript nocheck hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

// Define a knowledge base search tool
const knowledgeBaseTool: Anthropic.Messages.Tool = {
  name: "search_knowledge_base",
  description: "Search the company knowledge base for information",
  input_schema: {
    type: "object" as const,
    properties: {
      query: {
        type: "string",
        description: "The search query"
      }
    },
    required: ["query"]
  }
};

// Function to handle the tool call
function searchKnowledgeBase(query: string) {
  // Your search logic here
  // Returns search results in the correct format
  return [
    {
      type: "search_result" as const,
      source: "https://docs.company.com/product-guide",
      title: "Product Configuration Guide",
      content: [
        {
          type: "text" as const,
          text: "To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs."
        }
      ],
      citations: { enabled: true }
    },
    {
      type: "search_result" as const,
      source: "https://docs.company.com/troubleshooting",
      title: "Troubleshooting Guide",
      content: [
        {
          type: "text" as const,
          text: "If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values."
        }
      ],
      citations: { enabled: true }
    }
  ];
}

// Create a message with the tool
const response = await anthropic.messages.create({
  model: "claude-opus-4-7", // Works with all supported models
  max_tokens: 1024,
  tools: [knowledgeBaseTool],
  messages: [
    {
      role: "user",
      content: "How do I configure the timeout settings?"
    }
  ]
});

// Handle tool use and provide results
if (response.content[0].type === "tool_use") {
  const input = response.content[0].input as { query: string };
  const toolResult = searchKnowledgeBase(input.query);

  const finalResponse = await anthropic.messages.create({
    model: "claude-opus-4-7", // Works with all supported models
    max_tokens: 1024,
    messages: [
      { role: "user", content: "How do I configure the timeout settings?" },
      { role: "assistant", content: response.content },
      {
        role: "user",
        content: [
          {
            type: "tool_result" as const,
            tool_use_id: response.content[0].id,
            content: toolResult // Search results go here
          }
        ]
      }
    ]
  });
}
```

```csharp C# nocheck
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

public class Program
{
    public static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var knowledgeBaseTool = new Tool
        {
            Name = "search_knowledge_base",
            Description = "Search the company knowledge base for information",
            InputSchema = new
            {
                type = "object",
                properties = new
                {
                    query = new
                    {
                        type = "string",
                        description = "The search query"
                    }
                },
                required = new[] { "query" }
            }
        };

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 1024,
            Tools = new[] { knowledgeBaseTool },
            Messages = new[]
            {
                new MessageParam
                {
                    Role = Role.User,
                    Content = "How do I configure the timeout settings?"
                }
            }
        };

        var response = await client.Messages.Create(parameters);

        if (response.Content[0] is ToolUseBlock toolUse)
        {
            var toolResult = SearchKnowledgeBase(toolUse.Input["query"].ToString());

            var finalParameters = new MessageCreateParams
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                Messages = new[]
                {
                    new MessageParam { Role = Role.User, Content = "How do I configure the timeout settings?" },
                    new MessageParam { Role = Role.Assistant, Content = response.Content },
                    new MessageParam
                    {
                        Role = Role.User,
                        Content = new[]
                        {
                            new ToolResultBlockParam
                            {
                                ToolUseID = toolUse.Id,
                                Content = toolResult
                            }
                        }
                    }
                }
            };

            var finalResponse = await client.Messages.Create(finalParameters);
            Console.WriteLine(finalResponse);
        }
    }

    private static List<SearchResultBlockParam> SearchKnowledgeBase(string query)
    {
        return new List<SearchResultBlockParam>
        {
            new SearchResultBlockParam
            {
                Source = "https://docs.company.com/product-guide",
                Title = "Product Configuration Guide",
                Content = new[]
                {
                    new TextBlockParam
                    {
                        Text = "To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs."
                    }
                },
                Citations = new CitationsConfigParam { Enabled = true }
            },
            new SearchResultBlockParam
            {
                Source = "https://docs.company.com/troubleshooting",
                Title = "Troubleshooting Guide",
                Content = new[]
                {
                    new TextBlockParam
                    {
                        Text = "If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values."
                    }
                },
                Citations = new CitationsConfigParam { Enabled = true }
            }
        };
    }
}
```

```go Go nocheck hidelines={1..12,77..78}
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	knowledgeBaseTool := anthropic.ToolUnionParam{
		OfTool: &anthropic.ToolParam{
			Name:        "search_knowledge_base",
			Description: anthropic.String("Search the company knowledge base for information"),
			InputSchema: anthropic.ToolInputSchemaParam{
				Properties: map[string]any{
					"query": map[string]any{
						"type":        "string",
						"description": "The search query",
					},
				},
				Required: []string{"query"},
			},
		},
	}

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 1024,
		Tools:     []anthropic.ToolUnionParam{knowledgeBaseTool},
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("How do I configure the timeout settings?")),
		},
	})
	if err != nil {
		log.Fatal(err)
	}

	for _, block := range response.Content {
		switch variant := block.AsAny().(type) {
		case anthropic.ToolUseBlock:
			var input struct {
				Query string `json:"query"`
			}
			if err := json.Unmarshal(variant.Input, &input); err != nil {
				log.Fatal(err)
			}
			toolResults := searchKnowledgeBase(input.Query)

			// Build assistant message from the response
			assistantParam := response.ToParam()

			finalResponse, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
				Model:     anthropic.ModelClaudeOpus4_7,
				MaxTokens: 1024,
				Messages: []anthropic.MessageParam{
					anthropic.NewUserMessage(anthropic.NewTextBlock("How do I configure the timeout settings?")),
					assistantParam,
					anthropic.NewUserMessage(anthropic.ContentBlockParamUnion{
						OfToolResult: &anthropic.ToolResultBlockParam{
							ToolUseID: variant.ID,
							Content:   toolResults,
						},
					}),
				},
			})
			if err != nil {
				log.Fatal(err)
			}
			fmt.Println(finalResponse)
		}
	}
}

func searchKnowledgeBase(query string) []anthropic.ToolResultBlockParamContentUnion {
	return []anthropic.ToolResultBlockParamContentUnion{
		{OfSearchResult: &anthropic.SearchResultBlockParam{
			Content: []anthropic.TextBlockParam{
				{Text: "To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs."},
			},
			Source:    "https://docs.company.com/product-guide",
			Title:     "Product Configuration Guide",
			Citations: anthropic.CitationsConfigParam{Enabled: anthropic.Bool(true)},
		}},
		{OfSearchResult: &anthropic.SearchResultBlockParam{
			Content: []anthropic.TextBlockParam{
				{Text: "If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values."},
			},
			Source:    "https://docs.company.com/troubleshooting",
			Title:     "Troubleshooting Guide",
			Citations: anthropic.CitationsConfigParam{Enabled: anthropic.Bool(true)},
		}},
	}
}
```

```java Java nocheck hidelines={1..3,5..7,9..19,75..76,-1}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.ContentBlockParam;
import com.anthropic.models.messages.CitationsConfigParam;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.SearchResultBlockParam;
import com.anthropic.models.messages.TextBlockParam;
import com.anthropic.models.messages.Tool;
import com.anthropic.models.messages.ToolResultBlockParam;
import com.anthropic.models.messages.ToolUseBlock;
import com.anthropic.models.messages.ToolUseBlockParam;
import com.anthropic.core.JsonValue;
import java.util.List;
import java.util.Map;

public class SearchKnowledgeBaseExample {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        Tool knowledgeBaseTool = Tool.builder()
            .name("search_knowledge_base")
            .description("Search the company knowledge base for information")
            .inputSchema(Tool.InputSchema.builder()
                .properties(JsonValue.from(Map.of(
                    "query", Map.of(
                        "type", "string",
                        "description", "The search query"
                    )
                )))
                .putAdditionalProperty("required", JsonValue.from(List.of("query")))
                .build())
            .build();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(1024L)
            .addTool(knowledgeBaseTool)
            .addUserMessage("How do I configure the timeout settings?")
            .build();

        Message response = client.messages().create(params);

        response.content().get(0).toolUse().ifPresent(toolUse -> {
            List<ContentBlockParam> toolResult = searchKnowledgeBase(
                (String) ((Map<?, ?>) toolUse._input()).get("query")
            );

            MessageCreateParams finalParams = MessageCreateParams.builder()
                .model(Model.CLAUDE_OPUS_4_7)
                .maxTokens(1024L)
                .addUserMessage("How do I configure the timeout settings?")
                .addAssistantMessageOfBlockParams(List.of(
                    ContentBlockParam.ofToolUse(ToolUseBlockParam.builder()
                        .id(toolUse.id())
                        .name(toolUse.name())
                        .input(toolUse._input())
                        .build())
                ))
                .addUserMessageOfBlockParams(List.of(
                    ContentBlockParam.ofToolResult(
                        ToolResultBlockParam.builder()
                            .toolUseId(toolUse.id())
                            .contentOfBlockParams(toolResult)
                            .build()
                    )
                ))
                .build();

            Message finalResponse = client.messages().create(finalParams);
            System.out.println(finalResponse);
        });
    }

    private static List<ContentBlockParam> searchKnowledgeBase(String query) {
        return List.of(
            ContentBlockParam.ofSearchResult(
                SearchResultBlockParam.builder()
                    .source("https://docs.company.com/product-guide")
                    .title("Product Configuration Guide")
                    .content(List.of(
                        TextBlockParam.builder()
                            .text("To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs.")
                            .build()
                    ))
                    .citations(CitationsConfigParam.builder().enabled(true).build())
                    .build()
            ),
            ContentBlockParam.ofSearchResult(
                SearchResultBlockParam.builder()
                    .source("https://docs.company.com/troubleshooting")
                    .title("Troubleshooting Guide")
                    .content(List.of(
                        TextBlockParam.builder()
                            .text("If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values.")
                            .build()
                    ))
                    .citations(CitationsConfigParam.builder().enabled(true).build())
                    .build()
            )
        );
    }
}
```

```php PHP nocheck hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$knowledgeBaseTool = [
    'name' => 'search_knowledge_base',
    'description' => 'Search the company knowledge base for information',
    'input_schema' => [
        'type' => 'object',
        'properties' => [
            'query' => [
                'type' => 'string',
                'description' => 'The search query'
            ]
        ],
        'required' => ['query']
    ]
];

function searchKnowledgeBase($query) {
    return [
        [
            'type' => 'search_result',
            'source' => 'https://docs.company.com/product-guide',
            'title' => 'Product Configuration Guide',
            'content' => [
                [
                    'type' => 'text',
                    'text' => 'To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs.'
                ]
            ],
            'citations' => ['enabled' => true]
        ],
        [
            'type' => 'search_result',
            'source' => 'https://docs.company.com/troubleshooting',
            'title' => 'Troubleshooting Guide',
            'content' => [
                [
                    'type' => 'text',
                    'text' => 'If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values.'
                ]
            ],
            'citations' => ['enabled' => true]
        ]
    ];
}

$response = $client->messages->create(
    maxTokens: 1024,
    messages: [
        ['role' => 'user', 'content' => 'How do I configure the timeout settings?']
    ],
    model: 'claude-opus-4-7',
    tools: [$knowledgeBaseTool],
);

$toolUseBlock = null;
foreach ($response->content as $block) {
    if ($block->type === 'tool_use') {
        $toolUseBlock = $block;
        break;
    }
}

if ($toolUseBlock !== null) {
    $toolResult = searchKnowledgeBase($toolUseBlock->input['query']);

    $finalResponse = $client->messages->create(
        maxTokens: 1024,
        messages: [
            ['role' => 'user', 'content' => 'How do I configure the timeout settings?'],
            ['role' => 'assistant', 'content' => $response->content],
            [
                'role' => 'user',
                'content' => [
                    [
                        'type' => 'tool_result',
                        'tool_use_id' => $toolUseBlock->id,
                        'content' => $toolResult
                    ]
                ]
            ]
        ],
        model: 'claude-opus-4-7',
    );
    echo $finalResponse;
} else {
    echo $response;
}
```

```ruby Ruby nocheck hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

knowledge_base_tool = {
  name: "search_knowledge_base",
  description: "Search the company knowledge base for information",
  input_schema: {
    type: "object",
    properties: {
      query: { type: "string", description: "The search query" }
    },
    required: ["query"]
  }
}

def search_knowledge_base(query)
  [
    {
      type: "search_result",
      source: "https://docs.company.com/product-guide",
      title: "Product Configuration Guide",
      content: [
        {
          type: "text",
          text: "To configure the product, navigate to Settings > Configuration. The default timeout is 30 seconds, but can be adjusted between 10-120 seconds based on your needs."
        }
      ],
      citations: { enabled: true }
    },
    {
      type: "search_result",
      source: "https://docs.company.com/troubleshooting",
      title: "Troubleshooting Guide",
      content: [
        {
          type: "text",
          text: "If you encounter timeout errors, first check the configuration settings. Common causes include network latency and incorrect timeout values."
        }
      ],
      citations: { enabled: true }
    }
  ]
end

response = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 1024,
  tools: [knowledge_base_tool],
  messages: [
    { role: "user", content: "How do I configure the timeout settings?" }
  ]
)

if response.content.first.type == :tool_use
  tool_result = search_knowledge_base(response.content.first.input["query"])

  final_response = client.messages.create(
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [
      { role: "user", content: "How do I configure the timeout settings?" },
      { role: "assistant", content: response.content },
      {
        role: "user",
        content: [
          {
            type: "tool_result",
            tool_use_id: response.content.first.id,
            content: tool_result
          }
        ]
      }
    ]
  )
  puts final_response
end
```
</CodeGroup>

## Method 2: Search results as top-level content

You can also provide search results directly in user messages. This is useful for:
- Pre-fetched content from your search infrastructure
- Cached search results from previous queries
- Content from external search services
- Testing and development

### Example: Direct search results

<CodeGroup>
```bash cURL
#!/bin/sh
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-opus-4-7",
    "max_tokens": 1024,
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "search_result",
                    "source": "https://docs.company.com/api-reference",
                    "title": "API Reference - Authentication",
                    "content": [
                        {
                            "type": "text",
                            "text": "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium."
                        }
                    ],
                    "citations": {
                        "enabled": true
                    }
                },
                {
                    "type": "search_result",
                    "source": "https://docs.company.com/quickstart",
                    "title": "Getting Started Guide",
                    "content": [
                        {
                            "type": "text",
                            "text": "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key."
                        }
                    ],
                    "citations": {
                        "enabled": true
                    }
                },
                {
                    "type": "text",
                    "text": "Based on these search results, how do I authenticate API requests and what are the rate limits?"
                }
            ]
        }
    ]
}'
```

```bash CLI
ant messages create <<'YAML'
model: claude-opus-4-7
max_tokens: 1024
messages:
  - role: user
    content:
      - type: search_result
        source: https://docs.company.com/api-reference
        title: API Reference - Authentication
        content:
          - type: text
            text: >-
              All API requests must include an API key in the Authorization
              header. Keys can be generated from the dashboard. Rate limits:
              1000 requests per hour for standard tier, 10000 for premium.
        citations:
          enabled: true
      - type: search_result
        source: https://docs.company.com/quickstart
        title: Getting Started Guide
        content:
          - type: text
            text: >-
              To get started: 1) Sign up for an account, 2) Generate an API
              key from the dashboard, 3) Install our SDK using pip install
              company-sdk, 4) Initialize the client with your API key.
        citations:
          enabled: true
      - type: text
        text: >-
          Based on these search results, how do I authenticate API requests
          and what are the rate limits?
YAML
```

```python Python hidelines={1}
from anthropic import Anthropic
from anthropic.types import MessageParam, TextBlockParam, SearchResultBlockParam

client = Anthropic()

# Provide search results directly in the user message
response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=1024,
    messages=[
        MessageParam(
            role="user",
            content=[
                SearchResultBlockParam(
                    type="search_result",
                    source="https://docs.company.com/api-reference",
                    title="API Reference - Authentication",
                    content=[
                        TextBlockParam(
                            type="text",
                            text="All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium.",
                        )
                    ],
                    citations={"enabled": True},
                ),
                SearchResultBlockParam(
                    type="search_result",
                    source="https://docs.company.com/quickstart",
                    title="Getting Started Guide",
                    content=[
                        TextBlockParam(
                            type="text",
                            text="To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key.",
                        )
                    ],
                    citations={"enabled": True},
                ),
                TextBlockParam(
                    type="text",
                    text="Based on these search results, how do I authenticate API requests and what are the rate limits?",
                ),
            ],
        )
    ],
)

print(response)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic();

// Provide search results directly in the user message
const response = await anthropic.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "search_result" as const,
          source: "https://docs.company.com/api-reference",
          title: "API Reference - Authentication",
          content: [
            {
              type: "text" as const,
              text: "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium."
            }
          ],
          citations: { enabled: true }
        },
        {
          type: "search_result" as const,
          source: "https://docs.company.com/quickstart",
          title: "Getting Started Guide",
          content: [
            {
              type: "text" as const,
              text: "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key."
            }
          ],
          citations: { enabled: true }
        },
        {
          type: "text" as const,
          text: "Based on these search results, how do I authenticate API requests and what are the rate limits?"
        }
      ]
    }
  ]
});

console.log(response);
```

```csharp C# nocheck
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 1024,
            Messages =
            [
                new()
                {
                    Role = Role.User,
                    Content =
                    [
                        new SearchResultBlockParam
                        {
                            Source = "https://docs.company.com/api-reference",
                            Title = "API Reference - Authentication",
                            Content =
                            [
                                new TextBlockParam
                                {
                                    Text = "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium."
                                }
                            ],
                            Citations = new CitationsConfigParam { Enabled = true }
                        },
                        new SearchResultBlockParam
                        {
                            Source = "https://docs.company.com/quickstart",
                            Title = "Getting Started Guide",
                            Content =
                            [
                                new TextBlockParam
                                {
                                    Text = "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key."
                                }
                            ],
                            Citations = new CitationsConfigParam { Enabled = true }
                        },
                        new TextBlockParam
                        {
                            Text = "Based on these search results, how do I authenticate API requests and what are the rate limits?"
                        }
                    ]
                }
            ]
        };

        var message = await client.Messages.Create(parameters);
        Console.WriteLine(message);
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	response, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 1024,
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(
				anthropic.ContentBlockParamUnion{OfSearchResult: &anthropic.SearchResultBlockParam{
					Content: []anthropic.TextBlockParam{
						{Text: "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium."},
					},
					Source:    "https://docs.company.com/api-reference",
					Title:     "API Reference - Authentication",
					Citations: anthropic.CitationsConfigParam{Enabled: anthropic.Bool(true)},
				}},
				anthropic.ContentBlockParamUnion{OfSearchResult: &anthropic.SearchResultBlockParam{
					Content: []anthropic.TextBlockParam{
						{Text: "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key."},
					},
					Source:    "https://docs.company.com/quickstart",
					Title:     "Getting Started Guide",
					Citations: anthropic.CitationsConfigParam{Enabled: anthropic.Bool(true)},
				}},
				anthropic.NewTextBlock("Based on these search results, how do I authenticate API requests and what are the rate limits?"),
			),
		},
	})
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(response)
}
```

```java Java hidelines={1..3,5..7,9..13,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.ContentBlockParam;
import com.anthropic.models.messages.CitationsConfigParam;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Message;
import com.anthropic.models.messages.Model;
import com.anthropic.models.messages.SearchResultBlockParam;
import com.anthropic.models.messages.TextBlockParam;
import java.util.List;

public class SearchResultExample {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(1024L)
            .addUserMessageOfBlockParams(List.of(
                ContentBlockParam.ofSearchResult(
                    SearchResultBlockParam.builder()
                        .source("https://docs.company.com/api-reference")
                        .title("API Reference - Authentication")
                        .content(List.of(
                            TextBlockParam.builder()
                                .text("All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium.")
                                .build()
                        ))
                        .citations(CitationsConfigParam.builder().enabled(true).build())
                        .build()
                ),
                ContentBlockParam.ofSearchResult(
                    SearchResultBlockParam.builder()
                        .source("https://docs.company.com/quickstart")
                        .title("Getting Started Guide")
                        .content(List.of(
                            TextBlockParam.builder()
                                .text("To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key.")
                                .build()
                        ))
                        .citations(CitationsConfigParam.builder().enabled(true).build())
                        .build()
                ),
                ContentBlockParam.ofText(
                    TextBlockParam.builder()
                        .text("Based on these search results, how do I authenticate API requests and what are the rate limits?")
                        .build()
                )
            ))
            .build();

        Message response = client.messages().create(params);
        System.out.println(response);
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$message = $client->messages->create(
    maxTokens: 1024,
    messages: [
        [
            'role' => 'user',
            'content' => [
                [
                    'type' => 'search_result',
                    'source' => 'https://docs.company.com/api-reference',
                    'title' => 'API Reference - Authentication',
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => 'All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium.'
                        ]
                    ],
                    'citations' => ['enabled' => true]
                ],
                [
                    'type' => 'search_result',
                    'source' => 'https://docs.company.com/quickstart',
                    'title' => 'Getting Started Guide',
                    'content' => [
                        [
                            'type' => 'text',
                            'text' => 'To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key.'
                        ]
                    ],
                    'citations' => ['enabled' => true]
                ],
                [
                    'type' => 'text',
                    'text' => 'Based on these search results, how do I authenticate API requests and what are the rate limits?'
                ]
            ]
        ]
    ],
    model: 'claude-opus-4-7',
);

echo json_encode($message, JSON_PRETTY_PRINT);
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

message = client.messages.create(
  model: "claude-opus-4-7",
  max_tokens: 1024,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "search_result",
          source: "https://docs.company.com/api-reference",
          title: "API Reference - Authentication",
          content: [
            {
              type: "text",
              text: "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium."
            }
          ],
          citations: { enabled: true }
        },
        {
          type: "search_result",
          source: "https://docs.company.com/quickstart",
          title: "Getting Started Guide",
          content: [
            {
              type: "text",
              text: "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key."
            }
          ],
          citations: { enabled: true }
        },
        {
          type: "text",
          text: "Based on these search results, how do I authenticate API requests and what are the rate limits?"
        }
      ]
    }
  ]
)

puts message
```
</CodeGroup>

## Claude's response with citations

Regardless of how search results are provided, Claude automatically includes citations when using information from them:

```json
{
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard.",
      "citations": [
        {
          "type": "search_result_location",
          "cited_text": "All API requests must include an API key in the Authorization header. Keys can be generated from the dashboard. Rate limits: 1000 requests per hour for standard tier, 10000 for premium.",
          "source": "https://docs.company.com/api-reference",
          "title": "API Reference - Authentication",
          "search_result_index": 0,
          "start_block_index": 0,
          "end_block_index": 1
        }
      ]
    },
    {
      "type": "text",
      "text": "\n\nTo set this up from scratch, you'll need to "
    },
    {
      "type": "text",
      "text": "sign up for an account, generate an API key from the dashboard, install the SDK using `pip install company-sdk`, and initialize the client with your API key.",
      "citations": [
        {
          "type": "search_result_location",
          "cited_text": "To get started: 1) Sign up for an account, 2) Generate an API key from the dashboard, 3) Install our SDK using pip install company-sdk, 4) Initialize the client with your API key.",
          "source": "https://docs.company.com/quickstart",
          "title": "Getting Started Guide",
          "search_result_index": 1,
          "start_block_index": 0,
          "end_block_index": 1
        }
      ]
    }
  ]
}
```

### Citation fields

Each citation includes:

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Always `"search_result_location"` for search result citations |
| `source` | string | The source from the original search result |
| `title` | string or null | The title from the original search result |
| `cited_text` | string | The full text of the cited block(s), concatenated. Equals the contents of `content[start_block_index:end_block_index]` joined together. Not counted toward output tokens. |
| `search_result_index` | integer | 0-based index of the cited search result among all `search_result` blocks in the request, in the order they appear (across all messages and tool results). |
| `start_block_index` | integer | 0-based index of the first cited block in the search result's `content` array. |
| `end_block_index` | integer | Exclusive end index of the cited block range in the search result's `content` array. Always greater than `start_block_index`. |

The block indices identify a slice of the search result's `content` array, and `cited_text` is the full text of that slice. The text block is the minimal citable unit: Claude cites whole blocks, not substrings within a block. To get finer-grained citations, split your search result content into smaller blocks (see [Multiple content blocks](#multiple-content-blocks)).

## Multiple content blocks

Search results can contain multiple text blocks in the `content` array:

```json
{
  "type": "search_result",
  "source": "https://docs.company.com/api-guide",
  "title": "API Documentation",
  "content": [
    {
      "type": "text",
      "text": "Authentication: All API requests require an API key."
    },
    {
      "type": "text",
      "text": "Rate Limits: The API allows 1000 requests per hour per key."
    },
    {
      "type": "text",
      "text": "Error Handling: The API returns standard HTTP status codes."
    }
  ]
}
```

A citation referencing the rate limits block looks like:

```json
{
  "type": "search_result_location",
  "cited_text": "Rate Limits: The API allows 1000 requests per hour per key.",
  "source": "https://docs.company.com/api-guide",
  "title": "API Documentation",
  "search_result_index": 0,
  "start_block_index": 1,
  "end_block_index": 2
}
```

When this search result is cited, `start_block_index` and `end_block_index` identify which of these blocks the citation covers, and `cited_text` contains exactly those blocks' text. Splitting content into smaller, focused blocks gives Claude finer citation boundaries; combining content into one block means every citation returns the full text. This is the same model used by [custom content documents](/docs/en/build-with-claude/citations#custom-content-documents) in the Citations feature.

## Advanced usage

### Combining both methods

You can use both tool-based and top-level search results in the same conversation:

```python nocheck
from anthropic.types import MessageParam, SearchResultBlockParam, TextBlockParam

# First message with top-level search results
messages = [
    MessageParam(
        role="user",
        content=[
            SearchResultBlockParam(
                type="search_result",
                source="https://docs.company.com/overview",
                title="Product Overview",
                content=[
                    TextBlockParam(
                        type="text", text="Our product helps teams collaborate..."
                    )
                ],
                citations={"enabled": True},
            ),
            TextBlockParam(
                type="text",
                text="Tell me about this product and search for pricing information",
            ),
        ],
    )
]

# Claude might respond and call a tool to search for pricing
# Then you provide tool results with more search results
```

### Combining with other content types

Both methods support mixing search results with other content:

```python nocheck
from anthropic.types import SearchResultBlockParam, TextBlockParam

# In tool results
tool_result = [
    SearchResultBlockParam(
        type="search_result",
        source="https://docs.company.com/guide",
        title="User Guide",
        content=[TextBlockParam(type="text", text="Configuration details...")],
        citations={"enabled": True},
    ),
    TextBlockParam(
        type="text", text="Additional context: This applies to version 2.0 and later."
    ),
]

# In top-level content
user_content = [
    SearchResultBlockParam(
        type="search_result",
        source="https://research.com/paper",
        title="Research Paper",
        content=[TextBlockParam(type="text", text="Key findings...")],
        citations={"enabled": True},
    ),
    {
        "type": "image",
        "source": {"type": "url", "url": "https://example.com/chart.png"},
    },
    TextBlockParam(
        type="text", text="How does the chart relate to the research findings?"
    ),
]
```

### Cache control

Add cache control for better performance:

```json
{
  "type": "search_result",
  "source": "https://docs.company.com/guide",
  "title": "User Guide",
  "content": [{ "type": "text", "text": "..." }],
  "cache_control": {
    "type": "ephemeral"
  }
}
```

### Citation control

By default, citations are disabled for search results. You can enable citations by explicitly setting the `citations` configuration:

```json
{
  "type": "search_result",
  "source": "https://docs.company.com/guide",
  "title": "User Guide",
  "content": [{ "type": "text", "text": "Important documentation..." }],
  "citations": {
    "enabled": true // Enable citations for this result
  }
}
```

When `citations.enabled` is set to `true`, Claude includes citation references when using information from the search result. This enables:
- Natural citations for your custom RAG applications
- Source attribution when interfacing with proprietary knowledge bases
- Web search-quality citations for any custom tool that returns search results

<Warning>
Citations are all-or-nothing: either all search results in a request must have citations enabled, or all must have them disabled. Mixing search results with different citation settings results in an error.
</Warning>

## Best practices

### For tool-based search (Method 1)

- **Dynamic content:** Use for real-time searches and dynamic RAG applications
- **Error handling:** Return appropriate messages when searches fail
- **Result limits:** Return only the most relevant results to avoid context overflow

### For top-level search (Method 2)

- **Pre-fetched content:** Use when you already have search results
- **Batch processing:** Ideal for processing multiple search results at once
- **Testing:** Great for testing citation behavior with known content

### General best practices

1. **Structure results effectively:**
   - Use clear, permanent source URLs
   - Provide descriptive titles
   - Break long content into logical text blocks to give Claude finer citation boundaries

2. **Maintain consistency:**
   - Use consistent source formats across your application
   - Ensure titles accurately reflect content
   - Keep formatting consistent

3. **Handle errors gracefully:**
   
   ```python nocheck
   def search_with_fallback(query):
       try:
           results = perform_search(query)
           if not results:
               return {"type": "text", "text": "No results found."}
           return format_as_search_results(results)
       except Exception as e:
           return {"type": "text", "text": f"Search error: {str(e)}"}
   ```

## Limitations

- Search result content blocks are available on Claude API, Amazon Bedrock, and Google Cloud's Vertex AI
- Only text content is supported within search results (no images or other media)
- The `content` array must contain at least one text block

---

# Streaming messages

URL: https://platform.claude.com/docs/en/build-with-claude/streaming

# Streaming messages

---

When creating a Message, you can set `"stream": true` to incrementally stream the response using [server-sent events](https://developer.mozilla.org/en-US/Web/API/Server-sent%5Fevents/Using%5Fserver-sent%5Fevents) (SSE).

## Streaming with SDKs

The [Python](https://github.com/anthropics/anthropic-sdk-python) and [TypeScript](https://github.com/anthropics/anthropic-sdk-typescript) SDKs offer multiple ways of streaming. The [PHP](https://github.com/anthropics/anthropic-sdk-php) SDK provides streaming via `createStream()`. The Python SDK allows both sync and async streams. See the documentation in each SDK for details.

<CodeGroup>
    ```bash CLI
    ant messages create --stream --format jsonl \
      --model claude-opus-4-7 \
      --max-tokens 1024 \
      --message '{role: user, content: "Hello"}' \
      | while IFS= read -r event; do
          [[ $event == *'"text_delta"'* ]] || continue
          text=${event#*'"text":"'}
          printf '%b' "${text%\"*}"
        done
    ```

    ```python Python hidelines={1..2}
    import anthropic

    client = anthropic.Anthropic()

    with client.messages.stream(
        max_tokens=1024,
        messages=[{"role": "user", "content": "Hello"}],
        model="claude-opus-4-7",
    ) as stream:
        for text in stream.text_stream:
            print(text, end="", flush=True)
    ```

    ```typescript TypeScript hidelines={1..2}
    import Anthropic from "@anthropic-ai/sdk";

    const client = new Anthropic();

    await client.messages
      .stream({
        messages: [{ role: "user", content: "Hello" }],
        model: "claude-opus-4-7",
        max_tokens: 1024
      })
      .on("text", (text) => {
        console.log(text);
      });
    ```

    ```csharp C#
    using Anthropic;
    using Anthropic.Models.Messages;

    class Program
    {
        static async Task Main(string[] args)
        {
            AnthropicClient client = new();

            var parameters = new MessageCreateParams
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 1024,
                Messages = [new() { Role = Role.User, Content = "Hello" }]
            };

            await foreach (var msg in client.Messages.CreateStreaming(parameters))
            {
                Console.Write(msg);
            }
        }
    }
    ```

    ```go Go hidelines={1..11,-1}
    package main

    import (
    	"context"
    	"fmt"
    	"log"

    	"github.com/anthropics/anthropic-sdk-go"
    )

    func main() {
    	client := anthropic.NewClient()

    	stream := client.Messages.NewStreaming(context.TODO(), anthropic.MessageNewParams{
    		Model:     anthropic.ModelClaudeOpus4_7,
    		MaxTokens: 1024,
    		Messages: []anthropic.MessageParam{
    			anthropic.NewUserMessage(anthropic.NewTextBlock("Hello")),
    		},
    	})

    	for stream.Next() {
    		event := stream.Current()
    		switch eventVariant := event.AsAny().(type) {
    		case anthropic.ContentBlockDeltaEvent:
    			switch deltaVariant := eventVariant.Delta.AsAny().(type) {
    			case anthropic.TextDelta:
    				fmt.Print(deltaVariant.Text)
    			}
    		}
    	}
    	if err := stream.Err(); err != nil {
    		log.Fatal(err)
    	}
    }
    ```

    ```java Java hidelines={1..6,-2..}
    import com.anthropic.client.AnthropicClient;
    import com.anthropic.client.okhttp.AnthropicOkHttpClient;
    import com.anthropic.models.messages.MessageCreateParams;

    public class StreamingExample {
        public static void main(String[] args) {
            AnthropicClient client = AnthropicOkHttpClient.fromEnv();

            MessageCreateParams params = MessageCreateParams.builder()
                .model("claude-opus-4-7")
                .maxTokens(1024L)
                .addUserMessage("Hello")
                .build();

            try (var streamResponse = client.messages().createStreaming(params)) {
                streamResponse.stream().forEach(event -> {
                    event.contentBlockDelta().ifPresent(deltaEvent ->
                        deltaEvent.delta().text().ifPresent(td ->
                            System.out.print(td.text())
                        )
                    );
                });
            }
        }
    }
    ```

    ```php PHP hidelines={1..4}
    <?php

    use Anthropic\Client;

    $client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

    $stream = $client->messages->createStream(
        maxTokens: 1024,
        messages: [
            ['role' => 'user', 'content' => 'Hello']
        ],
        model: 'claude-opus-4-7',
    );

    foreach ($stream as $message) {
        echo $message;
    }
    ```

    ```ruby Ruby hidelines={1..2}
    require "anthropic"

    client = Anthropic::Client.new

    stream = client.messages.stream(
      model: "claude-opus-4-7",
      max_tokens: 1024,
      messages: [{ role: "user", content: "Hello" }]
    )

    stream.text.each { |text| print(text) }
    ```
</CodeGroup>

## Get the final message without handling events

If you don't need to process text as it arrives, the SDKs provide a way to use streaming under the hood while returning the complete `Message` object, identical to what `.create()` returns. This is especially useful for requests with large `max_tokens` values, where the SDKs require streaming to avoid HTTP timeouts.

<CodeGroup>
    ```bash CLI
    # The ant CLI's --stream flag emits one event per line and does not
    # accumulate into a final Message. For long generations, stream the
    # raw events:
    ant messages create --stream --format jsonl <<'YAML'
    model: claude-opus-4-7
    max_tokens: 128000
    messages:
      - role: user
        content: Write a detailed analysis...
    YAML
    ```

    ```python Python hidelines={1..2}
    import anthropic

    client = anthropic.Anthropic()

    with client.messages.stream(
        max_tokens=128000,
        messages=[{"role": "user", "content": "Write a detailed analysis..."}],
        model="claude-opus-4-7",
    ) as stream:
        message = stream.get_final_message()

    print(message.content[0].text)
    ```

    ```typescript TypeScript hidelines={1..2}
    import Anthropic from "@anthropic-ai/sdk";

    const client = new Anthropic();

    const stream = client.messages.stream({
      max_tokens: 128000,
      messages: [{ role: "user", content: "Write a detailed analysis..." }],
      model: "claude-opus-4-7"
    });

    const message = await stream.finalMessage();
    const textBlock = message.content.find((block) => block.type === "text");
    if (textBlock && textBlock.type === "text") {
      console.log(textBlock.text);
    }
    ```

    
    ```csharp C# nocheck
    using System;
    using System.Threading.Tasks;
    using Anthropic;
    using Anthropic.Models.Messages;

    class Program
    {
        static async Task Main()
        {
            AnthropicClient client = new();

            var parameters = new MessageCreateParams
            {
                Model = Model.ClaudeOpus4_7,
                MaxTokens = 128000,
                Messages = [new() { Role = Role.User, Content = "Write a detailed analysis..." }]
            };

            var fullText = "";
            await foreach (var msg in client.Messages.CreateStreaming(parameters))
            {
                fullText += msg;
            }

            Console.WriteLine(fullText);
        }
    }
    ```

    ```go Go hidelines={1..11,-1}
    package main

    import (
    	"context"
    	"fmt"
    	"log"

    	"github.com/anthropics/anthropic-sdk-go"
    )

    func main() {
    	client := anthropic.NewClient()

    	stream := client.Messages.NewStreaming(context.TODO(), anthropic.MessageNewParams{
    		Model:     anthropic.ModelClaudeOpus4_7,
    		MaxTokens: 128000,
    		Messages: []anthropic.MessageParam{
    			anthropic.NewUserMessage(anthropic.NewTextBlock("Write a detailed analysis...")),
    		},
    	})

    	message := anthropic.Message{}
    	for stream.Next() {
    		event := stream.Current()
    		if err := message.Accumulate(event); err != nil {
    			log.Fatal(err)
    		}
    	}
    	if err := stream.Err(); err != nil {
    		log.Fatal(err)
    	}

    	fmt.Println(message.Content[0].Text)
    }
    ```

    ```java Java hidelines={1..2,4..9,-2..}
    import com.anthropic.client.AnthropicClient;
    import com.anthropic.client.okhttp.AnthropicOkHttpClient;
    import com.anthropic.helpers.MessageAccumulator;
    import com.anthropic.models.messages.Message;
    import com.anthropic.models.messages.MessageCreateParams;
    import com.anthropic.models.messages.Model;

    public class StreamingExample {
        public static void main(String[] args) {
            AnthropicClient client = AnthropicOkHttpClient.fromEnv();

            MessageCreateParams params = MessageCreateParams.builder()
                .model(Model.CLAUDE_OPUS_4_7)
                .maxTokens(128000L)
                .addUserMessage("Write a detailed analysis...")
                .build();

            MessageAccumulator accumulator = MessageAccumulator.create();
            try (var streamResponse = client.messages().createStreaming(params)) {
                streamResponse.stream().forEach(accumulator::accumulate);
            }

            Message message = accumulator.message();
            message.content().get(0).text().ifPresent(tb -> System.out.println(tb.text()));
        }
    }
    ```

    ```php PHP hidelines={1..4}
    <?php

    use Anthropic\Client;

    $client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

    $stream = $client->messages->createStream(
        maxTokens: 128000,
        messages: [
            ['role' => 'user', 'content' => 'Write a detailed analysis...']
        ],
        model: 'claude-opus-4-7',
    );

    $fullText = '';
    foreach ($stream as $event) {
        if ($event->type === 'content_block_delta') {
            $fullText .= $event->delta->text;
        }
    }

    echo $fullText;
    ```

    ```ruby Ruby hidelines={1..2}
    require "anthropic"

    client = Anthropic::Client.new

    message = client.messages.stream(
      model: "claude-opus-4-7",
      max_tokens: 128000,
      messages: [{ role: "user", content: "Write a detailed analysis..." }]
    ).accumulated_message

    puts message.content.first.text
    ```
</CodeGroup>

The `.stream()` call keeps the HTTP connection alive with server-sent events, then `.get_final_message()` (Python) or `.finalMessage()` (TypeScript) accumulates all events and returns the complete `Message` object. In Go, you call `message.Accumulate(event)` inside the stream loop to build the same complete `Message`. In Java, use `MessageAccumulator.create()` and call `accumulator.accumulate(event)` on each event. In Ruby, call `.accumulated_message` on the stream. In the PHP SDK, you iterate over stream events manually to accumulate the response.

## Event types

Each server-sent event includes a named event type and associated JSON data. Each event uses an SSE event name (e.g. `event: message_stop`), and includes the matching event `type` in its data.

Each stream uses the following event flow:

1. `message_start`: contains a `Message` object with empty `content`.
2. A series of content blocks, each of which have a `content_block_start`, one or more `content_block_delta` events, and a `content_block_stop` event. Each content block has an `index` that corresponds to its index in the final Message `content` array.
3. One or more `message_delta` events, indicating top-level changes to the final `Message` object.
4. A final `message_stop` event.

  <Warning>
  The token counts shown in the `usage` field of the `message_delta` event are *cumulative*.
  </Warning>

### Ping events

Event streams may also include any number of `ping` events.

### Error events

The API may occasionally send [errors](/docs/en/api/errors) in the event stream. For example, during periods of high usage, you may receive an `overloaded_error`, which would normally correspond to an HTTP 529 in a non-streaming context:

```sse Example error
event: error
data: {"type": "error", "error": {"type": "overloaded_error", "message": "Overloaded"}}
```

### Other events

In accordance with the [versioning policy](/docs/en/api/versioning), new event types may be added, and your code should handle unknown event types gracefully.

## Content block delta types

Each `content_block_delta` event contains a `delta` of a type that updates the `content` block at a given `index`.

### Text delta

A `text` content block delta looks like:
```sse Text delta
event: content_block_delta
data: {"type": "content_block_delta","index": 0,"delta": {"type": "text_delta", "text": "ello frien"}}
```

### Input JSON delta

The deltas for `tool_use` content blocks correspond to updates for the `input` field of the block. To support maximum granularity, the deltas are _partial JSON strings_, whereas the final `tool_use.input` is always an _object_.

You can accumulate the string deltas and parse the JSON once you receive a `content_block_stop` event, by using a library like [Pydantic](https://docs.pydantic.dev/latest/concepts/json/#partial-json-parsing) to do partial JSON parsing, or by using the [SDKs](/docs/en/api/client-sdks), which provide helpers to access parsed incremental values.

A `tool_use` content block delta looks like:
```sse Input JSON delta
event: content_block_delta
data: {"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}}
```
Note: Current models only support emitting one complete key and value property from `input` at a time. As such, when using tools, there may be delays between streaming events while the model is working. Once an `input` key and value are accumulated, they are emitted as multiple `content_block_delta` events with chunked partial json so that the format can automatically support finer granularity in future models.

### Thinking delta

When using [extended thinking](/docs/en/build-with-claude/extended-thinking#streaming-thinking) with streaming enabled, you'll receive thinking content via `thinking_delta` events. These deltas correspond to the `thinking` field of the `thinking` content blocks.

For thinking content, a special `signature_delta` event is sent just before the `content_block_stop` event. This signature is used to verify the integrity of the thinking block.

When `display: "omitted"` is set on the thinking configuration, no `thinking_delta` events are sent. The thinking block opens, receives a single `signature_delta`, and closes. See [Controlling thinking display](/docs/en/build-with-claude/extended-thinking#controlling-thinking-display).

A typical thinking delta looks like:
```sse Thinking delta
event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "thinking_delta", "thinking": "I need to find the GCD of 1071 and 462 using the Euclidean algorithm.\n\n1071 = 2 × 462 + 147"}}
```

The signature delta looks like:
```sse Signature delta
event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "signature_delta", "signature": "EqQBCgIYAhIM1gbcDa9GJwZA2b3hGgxBdjrkzLoky3dl1pkiMOYds..."}}
```

## Full HTTP stream response

Use the [client SDKs](/docs/en/api/client-sdks) when using streaming mode. However, if you are building a direct API integration, you need to handle these events yourself.

A stream response consists of:
1. A `message_start` event
2. Potentially multiple content blocks, each of which contains:
    - A `content_block_start` event
    - Potentially multiple `content_block_delta` events
    - A `content_block_stop` event
3. One or more `message_delta` events
4. A `message_stop` event

There may be `ping` events dispersed throughout the response as well. See [Event types](#event-types) for more details on the format.

### Basic streaming request

<CodeGroup>
```bash cURL
curl https://api.anthropic.com/v1/messages \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --data \
'{
  "model": "claude-opus-4-7",
  "messages": [{"role": "user", "content": "Hello"}],
  "max_tokens": 256,
  "stream": true
}'
```

```bash CLI
ant messages create --stream --format jsonl \
  --model claude-opus-4-7 \
  --max-tokens 256 \
  --message '{role: user, content: Hello}'
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-opus-4-7",
    messages=[{"role": "user", "content": "Hello"}],
    max_tokens=256,
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const stream = client.messages.stream({
  model: "claude-opus-4-7",
  messages: [{ role: "user", content: "Hello" }],
  max_tokens: 256
});

for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}
```

```csharp C#
using System;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 256,
            Messages = [new() { Role = Role.User, Content = "Hello" }]
        };

        await foreach (var msg in client.Messages.CreateStreaming(parameters))
        {
            Console.Write(msg);
        }
    }
}
```

```go Go hidelines={1..11,-1}
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/anthropics/anthropic-sdk-go"
)

func main() {
	client := anthropic.NewClient()

	stream := client.Messages.NewStreaming(context.TODO(), anthropic.MessageNewParams{
		Model:     anthropic.ModelClaudeOpus4_7,
		MaxTokens: 256,
		Messages: []anthropic.MessageParam{
			anthropic.NewUserMessage(anthropic.NewTextBlock("Hello")),
		},
	})

	for stream.Next() {
		event := stream.Current()
		switch eventVariant := event.AsAny().(type) {
		case anthropic.ContentBlockDeltaEvent:
			switch deltaVariant := eventVariant.Delta.AsAny().(type) {
			case anthropic.TextDelta:
				fmt.Print(deltaVariant.Text)
			}
		}
	}
	if err := stream.Err(); err != nil {
		log.Fatal(err)
	}
}
```

```java Java hidelines={1..7,-2..}
import com.anthropic.client.AnthropicClient;
import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.messages.MessageCreateParams;
import com.anthropic.models.messages.Model;

public class StreamingExample {
    public static void main(String[] args) {
        AnthropicClient client = AnthropicOkHttpClient.fromEnv();

        MessageCreateParams params = MessageCreateParams.builder()
            .model(Model.CLAUDE_OPUS_4_7)
            .maxTokens(256L)
            .addUserMessage("Hello")
            .build();

        try (var streamResponse = client.messages().createStreaming(params)) {
            streamResponse.stream().forEach(event -> {
                event.contentBlockDelta().ifPresent(deltaEvent ->
                    deltaEvent.delta().text().ifPresent(td ->
                        System.out.print(td.text())
                    )
                );
            });
        }
    }
}
```

```php PHP hidelines={1..4}
<?php

use Anthropic\Client;

$client = new Client(apiKey: getenv("ANTHROPIC_API_KEY"));

$stream = $client->messages->createStream(
    maxTokens: 256,
    messages: [
        ['role' => 'user', 'content' => 'Hello']
    ],
    model: 'claude-opus-4-7',
);

foreach ($stream as $message) {
    echo $message;
}
```

```ruby Ruby hidelines={1..2}
require "anthropic"

client = Anthropic::Client.new

stream = client.messages.stream(
  model: "claude-opus-4-7",
  messages: [{ role: "user", content: "Hello" }],
  max_tokens: 256
)

stream.text.each { |text| print(text) }
```
</CodeGroup>

```sse Response
event: message_start
data: {"type": "message_start", "message": {"id": "msg_1nZdL29xx5MUA1yADyHTEsnR8uuvGzszyY", "type": "message", "role": "assistant", "content": [], "model": "claude-opus-4-7", "stop_reason": null, "stop_sequence": null, "usage": {"input_tokens": 25, "output_tokens": 1}}}

event: content_block_start
data: {"type": "content_block_start", "index": 0, "content_block": {"type": "text", "text": ""}}

event: ping
data: {"type": "ping"}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "text_delta", "text": "Hello"}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "text_delta", "text": "!"}}

event: content_block_stop
data: {"type": "content_block_stop", "index": 0}

event: message_delta
data: {"type": "message_delta", "delta": {"stop_reason": "end_turn", "stop_sequence":null}, "usage": {"output_tokens": 15}}

event: message_stop
data: {"type": "message_stop"}

```

### Streaming request with tool use

<Tip>
Tool use supports [fine-grained streaming](/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming) for parameter values. Enable it per tool with `eager_input_streaming`.
</Tip>

This request asks Claude to use a tool to report the weather.

<CodeGroup>
```bash cURL
  curl https://api.anthropic.com/v1/messages \
    -H "content-type: application/json" \
    -H "x-api-key: $ANTHROPIC_API_KEY" \
    -H "anthropic-version: 2023-06-01" \
    -d '{
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "tools": [
        {
          "name": "get_weather",
          "description": "Get the current weather in a given location",
          "input_schema": {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The city and state, e.g. San Francisco, CA"
              }
            },
            "required": ["location"]
          }
        }
      ],
      "tool_choice": {"type": "any"},
      "messages": [
        {
          "role": "user",
          "content": "What is the weather like in San Francisco?"
        }
      ],
      "stream": true
    }'
```

```bash CLI
ant messages create --stream --format jsonl <<'YAML'
model: claude-opus-4-7
max_tokens: 1024
tools:
  - name: get_weather
    description: Get the current weather in a given location
    input_schema:
      type: object
      properties:
        location:
          type: string
          description: The city and state, e.g. San Francisco, CA
      required:
        - location
tool_choice:
  type: any
messages:
  - role: user
    content: What is the weather like in San Francisco?
YAML
```

```python Python hidelines={1..2}
import anthropic

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather in a given location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA",
                }
            },
            "required": ["location"],
        },
    }
]

with client.messages.stream(
    model="claude-opus-4-7",
    max_tokens=1024,
    tools=tools,
    tool_choice={"type": "any"},
    messages=[
        {"role": "user", "content": "What is the weather like in San Francisco?"}
    ],
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

```typescript TypeScript hidelines={1..2}
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const tools: Anthropic.Tool[] = [
  {
    name: "get_weather",
    description: "Get the current weather in a given location",
    input_schema: {
      type: "object",
      properties: {
        location: {
          type: "string",
          description: "The city and state, e.g. San Francisco, CA"
        }
      },
      required: ["location"]
    }
  }
];

const stream = client.messages.stream({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  tools: tools,
  tool_choice: { type: "any" },
  messages: [
    {
      role: "user",
      content: "What is the weather like in San Francisco?"
    }
  ]
});

for await (const event of stream) {
  if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
    process.stdout.write(event.delta.text);
  }
}
```

```csharp C#
using System;
using System.Text.Json;
using System.Threading.Tasks;
using Anthropic;
using Anthropic.Models.Messages;

class Program
{
    static async Task Main(string[] args)
    {
        AnthropicClient client = new();

        var parameters = new MessageCreateParams
        {
            Model = Model.ClaudeOpus4_7,
            MaxTokens = 1024,
            Tools = [
                new ToolUnion(new Tool()
                {
                    Name = "get_weather",
                    Description = "Get the current weather in a given location",
                    InputSchema = new InputSchema()
                    {
                        Properties = new Dictionary<string, JsonElement>
                        {
                            ["location"] = JsonSerializer.SerializeToElement(new { type = "string", description = "The city and state, e.g. San Francisco, CA" }),
                        },
                        Re