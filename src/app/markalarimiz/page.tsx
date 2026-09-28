import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { getVisibleBrands } from "@/lib/content";

export const metadata: Metadata = {
  title: "Markalarımız",
  description: "Bülent Alıcı ile anılan işletmeler.",
};

export default function BrandsPage() {
  const items = getVisibleBrands();

  return (
    <Container>
      <div className="py-16 md:py-20">
        <h1 className="page-title">Markalarımız</h1>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((brand) => (
              <li key={brand.id}>
                <article className="content-card">
                  <h2 className="text-xl font-semibold leading-snug text-navy">{brand.name}</h2>
                  {brand.description ? (
                    <p className="mt-2 leading-relaxed">{brand.description}</p>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış marka metni yok.</EmptyState>
          </div>
        )}
      </div>
    </Container>
  );
}
