import Link from "next/link";
import { Container } from "@/components/layout/container";

export function HomeContact() {
  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="scroll-mt-6 py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 id="iletisim-baslik" className="page-title">
            İletişim
          </h2>
          <p className="mt-6">
            <Link href="/iletisim" className="text-action underline-offset-4 hover:underline">
              İletişim sayfası
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
