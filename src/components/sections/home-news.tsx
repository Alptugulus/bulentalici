import Link from "next/link";
import { Container } from "@/components/layout/container";
import { EmptyState } from "@/components/ui/empty-state";
import { getVisibleNews } from "@/lib/content";

export function HomeNews() {
  const items = getVisibleNews().slice(0, 3);

  return (
    <section id="haberler" aria-labelledby="haberler-baslik" className="scroll-mt-6 py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="haberler-baslik" className="text-3xl font-semibold leading-tight text-navy">
            Son haberler
          </h2>
          <p className="mt-4 leading-relaxed">
            Eski sitede görülen kayıtlar. Çoğunda yıl yok. Kesilen cümleler tamamlanmadı.
          </p>
        </div>
        {items.length > 0 ? (
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id} className="min-w-0">
                <article className="h-full rounded-md border border-navy/10 bg-paper p-5">
                  <p className="text-sm leading-relaxed">{item.listedOn}. Yıl yazılmadı.</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-navy">
                    <Link
                      href={`/haberler/${item.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
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
        <p className="mt-6">
          <Link href="/haberler" className="font-medium text-navy underline-offset-4 hover:underline">
            Tüm haberler
          </Link>
        </p>
      </Container>
    </section>
  );
}
