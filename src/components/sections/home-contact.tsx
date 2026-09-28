import Link from "next/link";
import { Container } from "@/components/layout/container";

export function HomeContact() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-6 py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="iletisim-baslik" className="text-3xl font-semibold leading-tight text-navy">
            İletişim
          </h2>
          <p className="mt-4 leading-relaxed">
            Kampanya telefonu ve e-postası henüz teyit edilmedi. Otel rezervasyon bilgileri bu
            alanda kullanılmıyor.
          </p>
          <p className="mt-6">
            <Link href="/iletisim" className="font-medium text-navy underline-offset-4 hover:underline">
              İletişim sayfası
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
