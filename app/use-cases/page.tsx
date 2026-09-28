import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Layers, Plug, Search } from "@/components/Icons";
import { CallToAction } from "@/components/MarketingPages";
import { useCases } from "@/content/marketing";

export const metadata: Metadata = { title: "Use cases", description: "See how product, support and AI teams use Ponup to turn organizational knowledge into trusted context." };

const icons = [Plug, Search, Layers];

export default function UseCasesPage() {
  return <>
    <section className="page-hero section-shell"><div className="pill"><span>●</span> PONUP IN PRACTICE</div><h1>Knowledge for people.<br /><em>Context for the work.</em></h1><p>Build one trustworthy knowledge layer, then put it to work across the teams, products and agents that need it.</p></section>
    <section className="card-index section-shell">{useCases.map((item, index) => { const Icon = icons[index]; return <Link href={`/use-cases/${item.slug}/`} className="index-card" key={item.slug}><div className="icon-box"><Icon /></div><span>{item.eyebrow}</span><h2>{item.title}</h2><p>{item.description}</p><strong>Explore the use case <Arrow /></strong></Link>; })}</section>
    <CallToAction />
  </>;
}

