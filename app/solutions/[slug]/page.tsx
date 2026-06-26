import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, getSolutionBySlug } from "@/data/solutions";
import SolutionPageTemplate from "@/components/templates/SolutionPageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionPageTemplate solution={solution} />;
}
