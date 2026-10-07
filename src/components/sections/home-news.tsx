import Link from "next/link";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsList } from "@/components/ui/news-list";
import { getVisibleNews } from "@/lib/content";

export function HomeNews() {
  const items = getVisibleNews().slice(0, 3);

  return (
    <section id="haberler" aria-labelledby="haberler-baslik" className="scroll-mt-6 py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="haberler-baslik" className="page-title">
            Basından
          </h2>
        </div>
        {items.length > 0 ? (
          <NewsList items={items} titleAs="h3" />
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış basın kaydı yok.</EmptyState>
          </div>
        )}
        <p className="mt-6">
          <Link href="/haberler" className="text-action underline-offset-4 hover:underline">
            Tüm basın
          </Link>
        </p>
      </Container>
    </section>
  );
}
