import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { NewsArchive } from "@/components/ui/news-archive";
import { NEWS_PAGE_SIZE, NewsList } from "@/components/ui/news-list";
import { getVisibleNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Basından",
  description: "Bülent Alıcı basın kayıtları.",
};

export default function NewsPage() {
  const items = getVisibleNews();

  return (
    <Container>
      <div className="py-16 md:py-20">
        <h1 className="page-title">Basından</h1>
        {items.length > 0 ? (
          <Suspense fallback={<NewsList items={items.slice(0, NEWS_PAGE_SIZE)} titleAs="h2" />}>
            <NewsArchive items={items} />
          </Suspense>
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış basın kaydı yok.</EmptyState>
          </div>
        )}
      </div>
    </Container>
  );
}
