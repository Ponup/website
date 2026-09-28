import Link from "next/link";
import { ContextDemo } from "@/components/ContextDemo";
import { Arrow, Branch, Check, Cloud, File, Layers, Lock, Plug, Search, Share, Shield, Upload } from "@/components/Icons";
import { SOCIAL_URLS } from "@/constants/social";

const features = [
  { icon: Layers, title: "Spaces that match your world", text: "Organize knowledge by product, team, client or agent. Each Space stays focused, searchable and easy to reason about." },
  { icon: File, title: "Content, not just documents", text: "Author Markdown and structured JSON, or bring PDFs, text files and images. Preserve the source while Ponup prepares useful context." },
  { icon: Search, title: "Meaning-first retrieval", text: "Find the right passage by intent—not an exact keyword. Filter by tags and return ranked, source-linked context." },
  { icon: Plug, title: "Native to the agent stack", text: "Connect through MCP, REST or GraphQL. Agents can discover, search, read and manage context using the interface they already speak." },
  { icon: Share, title: "Publish without duplicating", text: "Turn private knowledge into a stable public resource when it is ready. One source powers internal workflows and human-friendly links." },
  { icon: Branch, title: "Built for living knowledge", text: "Edit content, retry processing and watch indexing state. Checksums, metadata and stable slugs keep every artifact traceable." },
];

const allFeatures = [
  ["Organize", ["Reusable Spaces", "Markdown authoring", "Structured JSON", "PDF & text extraction", "File uploads", "Tags & custom metadata"]],
  ["Retrieve", ["Semantic vector search", "Ranked passages", "Tag-filtered search", "Source attribution", "Local embeddings", "OpenAI-compatible embeddings"]],
  ["Deliver", ["MCP tools & resources", "REST API", "GraphQL queries", "Public content links", "Raw source access", "Web workspace"]],
  ["Operate", ["Async processing", "Live index status", "Failed-job retry", "Private by default", "PostgreSQL + pgvector", "S3-compatible storage"]],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="pill"><span>●</span> Open source + managed cloud</div>
          <h1>One source of truth.<br /><em>Every intelligence.</em></h1>
          <p className="hero-lede">Ponup turns the content your team understands into the context your AI needs—organized, searchable and ready to use.</p>
          <div className="hero-actions">
            <Link className="button" href="/contact/">Start with Ponup Cloud <Arrow /></Link>
            <a className="button button-ghost" href={SOCIAL_URLS.github}>View on GitHub <span>↗</span></a>
          </div>
          <div className="trust-row"><span><Check /> MIT licensed</span><span><Check /> Self-hostable</span><span><Check /> No lock-in</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="float-chip chip-human">For humans <i>✦</i></span>
          <span className="float-chip chip-ai"><i>⌘</i> For agents</span>
          <ContextDemo />
        </div>
      </section>

      <section className="signal-bar" aria-label="Ponup interfaces">
        <span>BUILT FOR THE MODERN AI STACK</span><b>MCP</b><b>REST</b><b>GraphQL</b><b>PostgreSQL</b><b>pgvector</b><b>S3</b>
      </section>

      <section className="problem section-shell">
        <div className="section-kicker">THE MISSING LAYER</div>
        <div className="problem-grid">
          <h2>Your AI is only as useful as the context it can reach.</h2>
          <div><p>Knowledge is scattered across docs, drives and databases. People lose time searching. Agents guess, hallucinate or work from stale information.</p><p>Ponup creates one calm layer between what your organization knows and every person or model that needs to use it.</p></div>
        </div>
        <div className="flow-line">
          <div><Upload /><strong>Bring your knowledge</strong><span>Author or upload</span></div><i>→</i>
          <div><Layers /><strong>Shape the context</strong><span>Chunk, tag & embed</span></div><i>→</i>
          <div><Search /><strong>Find what matters</strong><span>Retrieve by meaning</span></div><i>→</i>
          <div><Plug /><strong>Put it to work</strong><span>People, apps & agents</span></div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-shell">
          <div className="section-heading centered"><div className="section-kicker">ONE KNOWLEDGE LAYER</div><h2>Made for people.<br /><em>Engineered for context.</em></h2><p>Simple enough to become the place your team writes. Structured enough to become the memory your AI relies on.</p></div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }, index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="interface-section section-shell">
        <div className="interface-copy">
          <div className="section-kicker">CONTEXT IN. INTELLIGENCE OUT.</div>
          <h2>Meet every user where they work.</h2>
          <p>A clear workspace for humans. Purpose-built interfaces for software and agents. Both reach the same governed source—so context stays consistent everywhere.</p>
          <ul className="check-list"><li><Check />A focused content workspace</li><li><Check />MCP tools and stable resources</li><li><Check />Typed REST and GraphQL access</li><li><Check />Public links when knowledge should travel</li></ul>
        </div>
        <div className="interface-diagram">
          <div className="diagram-source"><span className="logo-mark"><i/><i/><i/></span><strong>Ponup</strong><small>Knowledge layer</small></div>
          <span className="connector connector-a"/><span className="connector connector-b"/><span className="connector connector-c"/>
          <div className="endpoint ep-one"><span>⌘</span><div><strong>AI agents</strong><small>MCP</small></div></div>
          <div className="endpoint ep-two"><span>⌁</span><div><strong>Your products</strong><small>REST + GraphQL</small></div></div>
          <div className="endpoint ep-three"><span>◎</span><div><strong>Your team</strong><small>Web workspace</small></div></div>
        </div>
      </section>

      <section className="complete-section">
        <div className="section-shell">
          <div className="section-heading"><div><div className="section-kicker">THE COMPLETE TOOLKIT</div><h2>Everything knowledge needs.</h2></div><p>From raw files to precise retrieval, every part of the context pipeline is yours to inspect, extend and own.</p></div>
          <div className="complete-grid">
            {allFeatures.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}><Check />{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="choice-section section-shell">
        <div className="choice-card dark-choice">
          <div className="choice-icon"><Branch /></div><span className="choice-label">OPEN SOURCE</span><h2>Your stack. Your data.<br />Your rules.</h2><p>Run Ponup anywhere Docker runs. Read every line, change what you need and keep your knowledge entirely in your own infrastructure.</p><ul><li><Check />Free forever under MIT</li><li><Check />Local embedding support</li><li><Check />Deploy with Docker Compose</li></ul><a href={SOCIAL_URLS.github}>Explore the repository <Arrow /></a>
        </div>
        <div className="choice-card cloud-choice">
          <div className="choice-icon"><Cloud /></div><span className="choice-label">PONUP CLOUD</span><h2>The context layer,<br />without the upkeep.</h2><p>We run, secure and update Ponup for you. Create a workspace and focus on the knowledge—not the infrastructure behind it.</p><ul><li><Check />Managed updates & backups</li><li><Check />Scale as your context grows</li><li><Check />Human support included</li></ul><Link href="/pricing/">See cloud pricing <Arrow /></Link>
        </div>
      </section>

      <section className="security-strip section-shell">
        <div><Shield /><span><strong>Private by default</strong><small>You choose what becomes public.</small></span></div>
        <div><Lock /><span><strong>Portable by design</strong><small>Open formats and open interfaces.</small></span></div>
        <div><Branch /><span><strong>MIT licensed</strong><small>Use it, change it, build on it.</small></span></div>
      </section>

      <section className="final-cta section-shell">
        <div className="cta-glow" /><span className="section-kicker">BETTER CONTEXT STARTS HERE</span><h2>Give your knowledge<br />somewhere to <em>live.</em></h2><p>Build a shared source of truth for the people and intelligence shaping what comes next.</p><div className="hero-actions"><Link className="button button-light" href="/contact/">Start with Ponup Cloud <Arrow /></Link><a className="button button-dark-ghost" href={SOCIAL_URLS.github}>Self-host Ponup <span>↗</span></a></div>
      </section>
    </>
  );
}
