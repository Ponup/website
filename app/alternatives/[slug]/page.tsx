import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlternativePage } from "@/components/MarketingPages";
import { alternatives } from "@/content/marketing";

export function generateStaticParams() { return alternatives.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = alternatives.find(entry => entry.slug === slug); return item ? { title: `Ponup vs ${item.name}: comparison and alternative`, description: item.description } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = alternatives.find(entry => entry.slug === slug); if (!item) notFound(); return <AlternativePage item={item} />; }

