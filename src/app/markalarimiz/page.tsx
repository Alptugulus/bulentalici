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
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">Markalarımız</h1>
          <p className="mt-4 leading-relaxed">
            Eski sitede görülen işletmeler. Oda sayıları ve web adresleri doğrulanmadığı için yok.
          </p>
        </div>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {items.map((brand) => (
              <li key={brand.id}>
                <article className="h-full rounded-md border border-navy/10 bg-paper p-5">
                  <h2 className="text-xl font-semibold leading-snug text-navy">{brand.name}</h2>
                  <p className="mt-2 leading-relaxed">{brand.description}</p>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <EmptyState>Yayımlanmış marka metni yok.</EmptyState>
          </div>
        )}
        {items[0] ? <p className="mt-8 max-w-3xl text-sm leading-relaxed">{items[0].sourceNote}</p> : null}
      </div>
    </Container>
  );
}
