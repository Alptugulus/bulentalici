import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsCard } from "@/components/ui/news-card";
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
                <NewsCard item={item} titleAs="h2" />
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
