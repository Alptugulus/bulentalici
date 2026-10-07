import Image from "next/image";
import { Container } from "@/components/layout/container";
import { approach } from "@/content/projects";

export function HomeApproach() {
  return (
    <section id="yaklasim" aria-labelledby="yaklasim-baslik" className="scroll-mt-6 bg-surface py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-14">
          <div className="max-w-2xl">
            <h2 id="yaklasim-baslik" className="page-title text-navy">
              {approach.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-snug text-navy">{approach.summary}</p>
            <div className="mt-4 space-y-4 text-lg leading-relaxed">
              {approach.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 border-l-4 border-navy pl-4 text-2xl font-semibold leading-snug text-navy">
              {approach.invitation}
            </p>
          </div>
          <figure className="overflow-hidden rounded-[18px] bg-paper">
            <Image
              src={approach.poster.src}
              alt={approach.poster.alt}
              width={1080}
              height={1350}
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="h-auto w-full object-contain"
            />
          </figure>
        </div>
        <figure className="mt-8 overflow-hidden rounded-[18px] md:mt-10">
          <Image
            src="/images/kaynak/artik-degisim-sart.avif"
            alt="Artık değişim şart. İstanbul turizminin kaybedecek bir 4 yılı daha yok. Bülent Alıcı, İTO 16. Oteller Komitesi Başkan ve Meclis Üyesi Adayı."
            width={1024}
            height={342}
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="h-auto w-full"
          />
        </figure>
      </Container>
    </section>
  );
}
