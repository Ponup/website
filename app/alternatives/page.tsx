import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Branch, File, Layers } from "@/components/Icons";
import { CallToAction } from "@/components/MarketingPages";
import { alternatives } from "@/content/marketing";

export const metadata: Metadata = { title: "Ponup alternatives and comparisons", description: "Compare Ponup with Notion, Confluence and a custom RAG stack for delivering trusted knowledge to people and AI." };
const icons = [File, Layers, Branch];

export default function AlternativesPage() {
  return <>
    <section className="page-hero section-shell"><div className="pill"><span>●</span> COMPARE PONUP</div><h1>Choose where knowledge lives.<br /><em>And how far it travels.</em></h1><p>Workspaces help teams create knowledge. Retrieval stacks help models find it. Ponup connects both jobs in one open, focused layer.</p></section>
    <section className="card-index section-shell alternative-index">{alternatives.map((item, index) => { const Icon = icons[index]; return <Link href={`/alternatives/${item.slug}/`} className="index-card" key={item.slug}><div className="icon-box"><Icon /></div><span>{item.label}</span><h2>Ponup vs {item.name}</h2><p>{item.description}</p><strong>Compare the approaches <Arrow /></strong></Link>; })}</section>
    <CallToAction title="Choose the layer that stays yours." />
  </>;
}

