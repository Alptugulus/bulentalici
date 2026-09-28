import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getVisibleNews, getVisibleNewsItem } from "@/lib/content";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getVisibleNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getVisibleNewsItem(slug);

  if (!item) {
    notFound();
  }

  return {
    title: item.title,
    description: item.summary || item.title,
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getVisibleNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <Container>
      <article className="max-w-3xl py-16 md:py-20">
        <p>
          <Link href="/haberler" className="project-back underline-offset-4 hover:underline">
            Haberlere dön
          </Link>
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          {item.listedOn}
          {item.sourceName ? ` · ${item.sourceName}` : ""}
        </p>
        <h1 className="page-title mt-3">{item.title}</h1>
        {item.summary ? <p className="mt-4 leading-relaxed">{item.summary}</p> : null}
        {item.body.length > 0 ? (
          <div className="mt-6 space-y-4">
            {item.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        {item.sourceUrl ? (
          <p className="mt-8 text-sm leading-relaxed">
            <a href={item.sourceUrl} className="text-navy underline underline-offset-4">
              Haberi oku
            </a>
          </p>
        ) : null}
      </article>
    </Container>
  );
}
