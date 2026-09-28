import Link from "next/link";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsCard } from "@/components/ui/news-card";
import { getVisibleNews } from "@/lib/content";

export function HomeNews() {
  const items = getVisibleNews().slice(0, 3);

  return (
    <section id="haberler" aria-labelledby="haberler-baslik" className="scroll-mt-6 py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="haberler-baslik" className="page-title">
            Son haberler
          </h2>
        </div>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id} className="min-w-0">
                <NewsCard item={item} titleAs="h3" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış haber yok.</EmptyState>
          </div>
        )}
        <p className="mt-6">
          <Link href="/haberler" className="text-action underline-offset-4 hover:underline">
            Tüm haberler
          </Link>
        </p>
      </Container>
    </section>
  );
}
