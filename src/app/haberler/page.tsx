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
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">Haberler</h1>
          <p className="mt-4 leading-relaxed">
            Eski sitede görülen dokuz kayıt. Arşivin tamamı bu liste değildir. Tarihlerde yıl yok.
            Tekil sayfa adresleri eşlenmedi.
          </p>
        </div>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4">
            {items.map((item) => (
              <li key={item.id}>
                <article className="rounded-md border border-navy/10 bg-paper p-5">
                  <p className="text-sm leading-relaxed">
                    {item.listedOn}. Yıl yazılmadı. {item.sourceName}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug text-navy">
                    <Link
                      href={`/haberler/${item.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-2 leading-relaxed">{item.summary}</p>
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
