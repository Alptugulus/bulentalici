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
    description: item.summary,
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
          <Link href="/haberler" className="font-medium text-navy underline-offset-4 hover:underline">
            Haberlere dön
          </Link>
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          {item.listedOn}. Yıl kaynakta yok. {item.sourceName}
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">{item.title}</h1>
        <p className="mt-4 leading-relaxed">{item.summary}</p>
        {item.body.length > 0 ? (
          <div className="mt-6 space-y-4">
            {item.body.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-6 leading-relaxed">Bu kayıtta liste sayfasında gövde metin görünmedi.</p>
        )}
        <p className="mt-8 text-sm leading-relaxed">
          Kaynak:{" "}
          <a href={item.sourceUrl} className="text-navy underline underline-offset-4">
            {item.sourceUrl}
          </a>
        </p>
      </article>
    </Container>
  );
}
