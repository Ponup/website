import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Check, Cloud, Branch } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Self-host Ponup for free or choose a managed Ponup Cloud plan.",
};

const plans = [
  {
    name: "Community", eyebrow: "SELF-HOSTED", price: "$0", suffix: "forever", description: "The complete open-source context layer, on your infrastructure.", cta: "View on GitHub", href: "https://github.com/ctoframework/ponup", icon: Branch,
    features: ["Unlimited Spaces and content", "Semantic search", "MCP, REST and GraphQL", "Local or compatible embeddings", "S3-compatible storage", "MIT licensed"],
  },
  {
    name: "Cloud", eyebrow: "MANAGED", price: "$29", suffix: "per workspace / month", description: "Everything you need to give a growing team and its agents shared context.", cta: "Join the cloud waitlist", href: "/contact/?plan=cloud", icon: Cloud, featured: true,
    features: ["Everything in Community", "Fully managed hosting", "Automatic updates and backups", "25 GB source storage", "250k context searches / month", "Email support"],
  },
  {
    name: "Scale", eyebrow: "CUSTOM", price: "Let’s talk", suffix: "built around your organization", description: "More control, capacity and support for critical knowledge workflows.", cta: "Talk to us", href: "/contact/?plan=scale", icon: Cloud,
    features: ["Everything in Cloud", "Custom usage and storage", "Private networking options", "Custom data retention", "Migration support", "Priority support"],
  },
];

const faqs = [
  ["Is the open-source version limited?", "No. The full core product—including Spaces, search, MCP, REST, GraphQL and publishing—is available under the MIT license. Cloud is for teams that would rather not operate it."],
  ["What counts as a context search?", "A search is one semantic retrieval request, whether it comes from the web workspace, REST, GraphQL or an MCP-connected agent."],
  ["Can I move between self-hosted and Cloud?", "Yes. Ponup uses open formats and standard infrastructure so your content is never held hostage. We can also help with larger migrations."],
  ["Is Cloud available today?", "Ponup Cloud is opening access in stages. Join the waitlist and tell us about your use case; we will share availability and onboarding details directly."],
];

export default function PricingPage() {
  return <>
    <section className="page-hero section-shell">
      <div className="pill"><span>●</span> SIMPLE, PORTABLE PRICING</div>
      <h1>Own the stack.<br /><em>Or skip the upkeep.</em></h1>
      <p>Start open source for free. Choose managed Cloud when your time is better spent on knowledge than infrastructure.</p>
    </section>
    <section className="pricing-section section-shell">
      <div className="pricing-grid">
        {plans.map(({ icon: Icon, ...plan }) => <article className={`pricing-card ${plan.featured ? "featured-plan" : ""}`} key={plan.name}>
          {plan.featured && <div className="popular">MOST POPULAR</div>}
          <div className="pricing-head"><div className="choice-icon"><Icon /></div><span>{plan.eyebrow}</span></div>
          <h2>{plan.name}</h2><p>{plan.description}</p>
          <div className="price"><strong>{plan.price}</strong><span>{plan.suffix}</span></div>
          <Link className={`button ${plan.featured ? "" : "button-ghost"}`} href={plan.href}>{plan.cta} <Arrow /></Link>
          <ul>{plan.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
        </article>)}
      </div>
      <p className="pricing-note">Cloud prices exclude applicable taxes. Fair-use safeguards apply to prevent abuse; we will always talk to you before limiting a legitimate workload.</p>
    </section>
    <section className="compare-banner section-shell"><div><span>NOT SURE WHERE TO START?</span><h2>Prototype open. Scale managed.</h2><p>Build locally with the same core you will use in production. Move to Cloud only when it earns its place.</p></div><Link className="button button-light" href="/contact/">Talk through your setup <Arrow /></Link></section>
    <section className="faq-section section-shell">
      <div className="section-heading"><div><div className="section-kicker">QUESTIONS, ANSWERED</div><h2>Good context starts with clarity.</h2></div></div>
      <div className="faq-grid">{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
    </section>
  </>;
}
