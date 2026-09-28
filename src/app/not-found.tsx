import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-semibold leading-tight text-navy">Sayfa bulunamadı</h1>
        <p className="mt-4 max-w-xl leading-relaxed">Bu adres henüz yayında değil ya da hiç yok.</p>
        <p className="mt-6">
          <Link href="/" className="font-medium text-navy underline underline-offset-4">
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </Container>
  );
}
