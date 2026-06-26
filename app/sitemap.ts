import type { MetadataRoute } from "next";
import { agents } from "@/data/agents";
import { industries } from "@/data/industries";
import { solutions } from "@/data/solutions";
import { resources } from "@/data/resources";

const BASE_URL = "https://oai.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/operational-os`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ai-agents`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/methodology`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/operational-os/architecture`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/operational-os/governance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/operational-os/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/operational-os/ai-maturity-model`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/operational-os/ai-readiness-assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/company/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/company/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/company/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const agentRoutes: MetadataRoute.Sitemap = agents.map((a) => ({
    url: `${BASE_URL}/ai-agents/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE_URL}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE_URL}/resources/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...agentRoutes,
    ...industryRoutes,
    ...solutionRoutes,
    ...resourceRoutes,
  ];
}
