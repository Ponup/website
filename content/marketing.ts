export type UseCase = {
  slug: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  outcome: string;
  pains: string[];
  benefits: { title: string; text: string }[];
  workflow: { title: string; text: string }[];
};

export const useCases: UseCase[] = [
  {
    slug: "ai-agents",
    eyebrow: "AI AGENTS",
    title: "Give every agent a memory it can trust.",
    accent: "A shared context layer for every model, workflow and agent.",
    description: "Ponup turns scattered product knowledge, policies and operational know-how into precise, source-linked context your agents can retrieve when they need it.",
    outcome: "Agents that answer from your knowledge—not from a guess.",
    pains: ["Prompts grow while answers stay inconsistent", "Every agent builds its own ingestion pipeline", "Teams cannot see which source shaped an answer"],
    benefits: [
      { title: "One memory, many agents", text: "Connect assistants, copilots and automations to the same governed Spaces through MCP, REST or GraphQL." },
      { title: "Context with provenance", text: "Return ranked passages with their source, metadata and stable identity so every answer can be inspected." },
      { title: "Designed to evolve", text: "Shape context by audience, task and sensitivity, then measure which knowledge improves agent outcomes." },
    ],
    workflow: [
      { title: "Collect", text: "Bring in docs, files and structured records." },
      { title: "Prepare", text: "Chunk, tag and organize knowledge into focused Spaces." },
      { title: "Retrieve", text: "Find the smallest useful context for the task at hand." },
      { title: "Improve", text: "Trace sources, learn from usage and keep context current." },
    ],
  },
  {
    slug: "customer-support",
    eyebrow: "CUSTOMER SUPPORT",
    title: "Resolve more questions with answers people can verify.",
    accent: "One support knowledge layer for customers, teammates and AI.",
    description: "Bring help content, product notes and internal runbooks together so support teams and automated assistants work from the same current answer.",
    outcome: "Faster resolutions without losing the source of truth.",
    pains: ["Public help content and internal guidance drift apart", "Agents search across tabs before they can answer", "Support AI responds without enough product context"],
    benefits: [
      { title: "One answer, every channel", text: "Reuse governed knowledge in your help centre, support workspace, chatbot and internal tools." },
      { title: "Internal and public by design", text: "Keep operational notes private while publishing approved answers from the same underlying source." },
      { title: "Context that follows the case", text: "Retrieve guidance by product, plan, version or customer state so answers fit the situation." },
    ],
    workflow: [
      { title: "Unify", text: "Gather guides, policies and proven resolutions." },
      { title: "Separate", text: "Define internal knowledge and public-ready content." },
      { title: "Deliver", text: "Serve precise context in the tools handling the conversation." },
      { title: "Refine", text: "Turn recurring gaps into durable, reusable answers." },
    ],
  },
  {
    slug: "product-teams",
    eyebrow: "PRODUCT TEAMS",
    title: "Keep the why behind every product decision.",
    accent: "Make research, decisions and specifications useful long after the meeting.",
    description: "Ponup gives product teams a focused home for durable knowledge—and gives the tools building, selling and supporting the product direct access to that context.",
    outcome: "A product memory that compounds instead of disappearing into documents.",
    pains: ["Decisions are buried in meeting notes and chat", "Specs lose their connection to research and rationale", "Every team interprets product truth differently"],
    benefits: [
      { title: "Knowledge shaped around the product", text: "Organize research, decisions, specifications and launch context without forcing them into one giant wiki." },
      { title: "Useful beyond the workspace", text: "Let developer tools, support assistants and internal agents retrieve the same product truth through open interfaces." },
      { title: "A living decision trail", text: "Connect each answer to its source and keep the current view clear as products and assumptions change." },
    ],
    workflow: [
      { title: "Capture", text: "Record the insight, decision and rationale." },
      { title: "Connect", text: "Group knowledge by product, initiative and audience." },
      { title: "Share", text: "Deliver it to the people and systems doing the work." },
      { title: "Revisit", text: "Find the original context when the next decision arrives." },
    ],
  },
];

export type Alternative = {
  slug: string;
  name: string;
  label: string;
  title: string;
  description: string;
  bestForThem: string;
  bestForPonup: string;
  rows: [string, string, string][];
  reasons: { title: string; text: string }[];
};

export const alternatives: Alternative[] = [
  {
    slug: "notion-alternative",
    name: "Notion",
    label: "PONUP VS NOTION",
    title: "When your knowledge needs to work beyond the workspace.",
    description: "Notion is an expansive workspace for docs, projects and collaboration. Ponup is purpose-built to turn governed knowledge into precise context for people, products and AI agents.",
    bestForThem: "Choose Notion when you want an all-in-one collaboration workspace with rich pages, projects and databases.",
    bestForPonup: "Choose Ponup when knowledge delivery, open infrastructure and agent-ready retrieval are the core requirement.",
    rows: [
      ["Primary job", "All-in-one team workspace", "Knowledge and context delivery layer"],
      ["AI access", "AI experiences within a broad workspace", "MCP, REST and GraphQL as first-class interfaces"],
      ["Retrieval", "Workspace and enterprise search", "Ranked, source-linked passages shaped for downstream use"],
      ["Deployment", "Vendor-hosted SaaS", "Managed cloud or self-hosted"],
      ["Ownership", "Platform-managed ecosystem", "MIT-licensed core and portable infrastructure"],
    ],
    reasons: [
      { title: "Built for context, not pages", text: "Ponup treats every piece of knowledge as something that must be found, filtered and delivered—not simply stored." },
      { title: "Agents are first-class users", text: "Stable resources and purpose-built interfaces make the same knowledge directly usable by assistants, products and automations." },
      { title: "Keep architectural control", text: "Run Ponup on your infrastructure, choose your models and storage, and move without rebuilding your knowledge layer." },
    ],
  },
  {
    slug: "confluence-alternative",
    name: "Confluence",
    label: "PONUP VS CONFLUENCE",
    title: "A lighter path from team knowledge to usable context.",
    description: "Confluence is a broad collaboration hub with deep Atlassian integration. Ponup focuses on a smaller, critical job: keeping knowledge clear and delivering it wherever humans and agents work.",
    bestForThem: "Choose Confluence when Atlassian-native collaboration, whiteboards and enterprise workspace features anchor your process.",
    bestForPonup: "Choose Ponup when you want a focused, portable knowledge layer without making one vendor suite the centre of your AI architecture.",
    rows: [
      ["Primary job", "Enterprise collaboration and documentation", "Focused knowledge and context infrastructure"],
      ["Ecosystem", "Deeply connected to Atlassian tools", "Model-, agent- and application-neutral"],
      ["Content delivery", "Pages, search and suite integrations", "Semantic passages, raw sources, APIs and public resources"],
      ["Deployment", "Cloud and enterprise deployment options", "Managed cloud or self-hosted with standard infrastructure"],
      ["Extensibility", "Apps and Atlassian platform capabilities", "Open-source core and open interfaces"],
    ],
    reasons: [
      { title: "A calmer knowledge model", text: "Focused Spaces, open formats and explicit metadata keep the system understandable as knowledge grows." },
      { title: "Independent by design", text: "Use the agent, model and application stack that fits each job instead of designing around a single suite." },
      { title: "From source to answer", text: "Ponup owns the path from original content to ranked, attributable context—with visibility at every step." },
    ],
  },
  {
    slug: "custom-rag-alternative",
    name: "a custom RAG stack",
    label: "PONUP VS DIY RAG",
    title: "Own the context layer without building every moving part.",
    description: "A custom RAG pipeline can fit one use case perfectly. Ponup gives you the reusable ingestion, organization, retrieval and delivery foundation to serve the next ten use cases too.",
    bestForThem: "Build custom when retrieval itself is your differentiator or an unusual data model demands a bespoke pipeline.",
    bestForPonup: "Choose Ponup when you want to own the stack while spending product time on the experiences that make your business distinct.",
    rows: [
      ["Starting point", "Components and architecture decisions", "Working open-source context layer"],
      ["Content operations", "Built and maintained by your team", "Authoring, uploads, metadata and processing included"],
      ["Interfaces", "Designed per application", "MCP, REST, GraphQL, web and public links"],
      ["Operations", "You assemble observability, retries and lifecycle tools", "Processing state, retry and traceability built into the workflow"],
      ["Control", "Complete, with complete maintenance responsibility", "Self-hosted control with a managed path when wanted"],
    ],
    reasons: [
      { title: "Skip the undifferentiated plumbing", text: "Start with the ingestion, indexing, search and content operations every reliable RAG system eventually needs." },
      { title: "Keep an escape hatch", text: "The MIT-licensed core, PostgreSQL, pgvector and S3-compatible storage keep the architecture legible and adaptable." },
      { title: "Improve context as a system", text: "Manage evaluation, retrieval policy and content quality together instead of tuning disconnected pipelines one at a time." },
    ],
  },
];

