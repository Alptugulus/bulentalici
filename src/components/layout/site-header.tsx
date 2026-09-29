import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header border-b border-ink/10 bg-paper">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3">
          <Link href="/" className="header-logo" aria-label={siteConfig.name}>
            <Image
              src="/images/giris/imza-header.png"
              alt=""
              width={410}
              height={128}
              priority
            />
          </Link>
          <nav aria-label="Ana menü" className="flex flex-wrap gap-x-4 gap-y-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base leading-snug text-navy underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
