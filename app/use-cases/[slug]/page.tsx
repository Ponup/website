import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCasePage } from "@/components/MarketingPages";
import { useCases } from "@/content/marketing";

export function generateStaticParams() { return useCases.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = useCases.find(entry => entry.slug === slug); return item ? { title: item.eyebrow.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase()), description: item.description } : {}; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = useCases.find(entry => entry.slug === slug); if (!item) notFound(); return <UseCasePage item={item} />; }

