import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { NewsFigures } from "@/components/ui/news-figures";
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
        {item.contentType === "text_and_image" && item.summary ? (
          <section className="mt-8" aria-labelledby="haber-ozeti">
            <h2 id="haber-ozeti" className="text-xl font-semibold text-navy">
              Haber özeti
            </h2>
            <p className="mt-4 leading-relaxed">{item.summary}</p>
          </section>
        ) : null}
        <NewsFigures images={item.images} />
        <p className="mt-8">
          <a
            href={item.sourceUrl}
            className="text-action underline-offset-4 hover:underline"
            rel="noopener noreferrer"
          >
            Kaynak haberi aç
          </a>
        </p>
      </article>
    </Container>
  );
}
