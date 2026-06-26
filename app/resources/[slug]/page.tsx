import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, getResourceBySlug } from "@/data/resources";
import ResourcePageTemplate from "@/components/templates/ResourcePageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: resource.seoTitle,
    description: resource.seoDescription,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  return <ResourcePageTemplate resource={resource} />;
}
