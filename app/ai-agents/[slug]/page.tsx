import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { agents, getAgentBySlug } from "@/data/agents";
import AgentPageTemplate from "@/components/templates/AgentPageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return {};
  return {
    title: agent.seoTitle,
    description: agent.seoDescription,
  };
}

export default async function AgentPage({ params }: Props) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();
  return <AgentPageTemplate agent={agent} />;
}
