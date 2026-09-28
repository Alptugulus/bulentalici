import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BiographyStatement } from "@/components/sections/biography-statement";

export function HomeIntro() {
  return (
    <section id="tanitim" aria-labelledby="tanitim-baslik" className="scroll-mt-6 py-16 md:py-24">
      <Container>
        <BiographyStatement heading="Tanıtım" headingAs="h2" headingId="tanitim-baslik" labelAs="h3" />
        <p className="mt-8">
          <Link href="/hakkimda" className="font-medium text-navy underline-offset-4 hover:underline">
            Hakkımda sayfası
          </Link>
        </p>
      </Container>
    </section>
  );
}
