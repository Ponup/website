import type { MetadataRoute } from "next";
import { alternatives, useCases } from "@/content/marketing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/pricing/", "/contact/", "/use-cases/", "/alternatives/", ...useCases.map(item => `/use-cases/${item.slug}/`), ...alternatives.map(item => `/alternatives/${item.slug}/`)];
  return paths.map(path => ({ url: `https://ponup.dev${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.8 : 1 }));
}
