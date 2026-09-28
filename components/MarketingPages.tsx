import Link from "next/link";
import { Alternative, UseCase } from "@/content/marketing";
import { Arrow, Check, Layers, Search, Share } from "@/components/Icons";
import { SOCIAL_URLS } from "@/constants/social";

export function CallToAction({ title = "Make your knowledge useful everywhere." }: { title?: string }) {
  return <section className="final-cta section-shell compact-cta"><div className="cta-glow" /><span className="section-kicker">BUILD THE CONTEXT LAYER</span><h2>{title}</h2><p>Start with the open-source core or talk to us about a managed Ponup workspace.</p><div className="hero-actions"><Link className="button button-light" href="/contact/">Start with Ponup <Arrow /></Link><a className="button button-dark-ghost" href={SOCIAL_URLS.github}>Explore open source <span>↗</span></a></div></section>;
}

export function UseCasePage({ item }: { item: UseCase }) {
  const icons = [Layers, Search, Share];
  return <>
    <section className="content-hero section-shell">
      <div className="breadcrumb"><Link href="/use-cases/">Use cases</Link><span>/</span><span>{item.eyebrow.toLowerCase()}</span></div>
      <div className="pill"><span>●</span> {item.eyebrow}</div>
      <h1>{item.title}</h1><p>{item.description}</p>
      <div className="hero-actions"><Link className="button" href="/contact/">Build with Ponup <Arrow /></Link><a className="button button-ghost" href={SOCIAL_URLS.github}>View on GitHub <span>↗</span></a></div>
    </section>
    <section className="content-band"><div className="section-shell statement-grid"><span>THE OUTCOME</span><h2>{item.outcome}</h2><p>{item.accent}</p></div></section>
    <section className="content-section section-shell split-section">
      <div><div className="section-kicker">WHY NOW</div><h2>Knowledge exists.<br />Useful context doesn’t.</h2></div>
      <ul className="pain-list">{item.pains.map(pain => <li key={pain}><span>×</span>{pain}</li>)}</ul>
    </section>
    <section className="content-section soft-section"><div className="section-shell"><div className="section-heading"><div><div className="section-kicker">WHY PONUP</div><h2>One foundation.<br />Built around the work.</h2></div></div><div className="benefit-grid">{item.benefits.map((benefit, index) => { const Icon = icons[index]; return <article key={benefit.title}><div className="icon-box"><Icon /></div><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>; })}</div></div></section>
    <section className="content-section section-shell"><div className="section-heading centered"><div className="section-kicker">HOW IT FLOWS</div><h2>From source to useful context.</h2></div><div className="step-grid">{item.workflow.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
    <CallToAction title="Give this knowledge somewhere to work." />
  </>;
}

export function AlternativePage({ item }: { item: Alternative }) {
  return <>
    <section className="content-hero section-shell compare-hero">
      <div className="breadcrumb"><Link href="/alternatives/">Alternatives</Link><span>/</span><span>{item.name}</span></div>
      <div className="pill"><span>●</span> {item.label}</div>
      <h1>{item.title}</h1><p>{item.description}</p>
      <div className="hero-actions"><Link className="button" href="/contact/">Try Ponup <Arrow /></Link><Link className="text-arrow" href="#comparison">See the comparison ↓</Link></div>
    </section>
    <section className="fit-section section-shell"><article><span>{item.name.toUpperCase()} IS A STRONG FIT WHEN</span><p>{item.bestForThem}</p></article><article className="ponup-fit"><span>PONUP IS A STRONG FIT WHEN</span><p>{item.bestForPonup}</p></article></section>
    <section className="comparison-section section-shell" id="comparison"><div className="section-heading"><div><div className="section-kicker">AT A GLANCE</div><h2>Two tools.<br />Different centre of gravity.</h2></div></div><div className="comparison-table" role="table"><div className="comparison-row comparison-head" role="row"><div>Capability</div><div>{item.name}</div><div>Ponup</div></div>{item.rows.map(([label, them, ponup]) => <div className="comparison-row" role="row" key={label}><div><strong>{label}</strong></div><div>{them}</div><div><Check />{ponup}</div></div>)}</div></section>
    <section className="content-section dark-section"><div className="section-shell"><div className="section-heading"><div><div className="section-kicker">THE PONUP DIFFERENCE</div><h2>Why teams choose<br />Ponup instead.</h2></div><p>A focused context layer makes knowledge easier to govern, retrieve and reuse without dictating the rest of your stack.</p></div><div className="reason-grid">{item.reasons.map((reason, index) => <article key={reason.title}><span>0{index + 1}</span><h3>{reason.title}</h3><p>{reason.text}</p></article>)}</div></div></section>
    <section className="content-section section-shell migration-section"><div><div className="section-kicker">A PRACTICAL PATH</div><h2>Start alongside.<br />Move what matters.</h2></div><div><p>Ponup does not require a big-bang migration. Begin with the knowledge that powers one high-value agent or workflow. Keep existing systems in place, prove the retrieval path, then expand Space by Space.</p><ul><li><Check />Import source files and open formats</li><li><Check />Connect through MCP, REST or GraphQL</li><li><Check />Self-host or let Ponup run the infrastructure</li></ul></div></section>
    <CallToAction title={`See what changes with Ponup.`} />
    <p className="trademark-note section-shell">All product names and trademarks belong to their respective owners. Ponup is not affiliated with {item.name}.</p>
  </>;
}
