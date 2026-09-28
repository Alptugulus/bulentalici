import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { getVisibleNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Haberler",
  description: "Bülent Alıcı basın kayıtları.",
};

export default function NewsPage() {
  const items = getVisibleNews();

  return (
    <Container>
      <div className="py-16 md:py-20">
        <h1 className="page-title">Haberler</h1>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4">
            {items.map((item) => (
              <li key={item.id}>
                <article className="content-card">
                  <p className="text-sm leading-relaxed">
                    {item.listedOn}
                    {item.sourceName ? ` · ${item.sourceName}` : ""}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-navy">
                    <Link
                      href={`/haberler/${item.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  {item.summary ? <p className="mt-2 leading-relaxed">{item.summary}</p> : null}
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış haber yok.</EmptyState>
          </div>
        )}
      </div>
    </Container>
  );
}
