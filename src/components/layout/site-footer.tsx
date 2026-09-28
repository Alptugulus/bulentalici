import Link from "next/link";
import { Container } from "@/components/layout/container";
import { brandsHref, mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer mt-auto border-t border-ink/10 bg-surface">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8 py-8">
          <div className="min-w-0 max-w-xl">
            <p className="font-semibold text-navy">{siteConfig.name}</p>
            <p className="mt-1 leading-relaxed">{siteConfig.candidacyTitle}</p>
            <p className="mt-3 font-medium leading-snug text-navy">
              {siteConfig.campaignLines[0]} {siteConfig.campaignLines[1]}
            </p>
          </div>
          <nav aria-label="Alt bilgi" className="flex flex-wrap gap-x-4 gap-y-2">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base leading-snug text-navy underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={brandsHref.href}
              className="text-base leading-snug text-navy underline-offset-4 hover:underline"
            >
              {brandsHref.label}
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
