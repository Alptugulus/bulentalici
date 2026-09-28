import type { Metadata } from "next";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bülent Alıcı kampanya iletişimi.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="max-w-3xl py-16 md:py-20">
        <h1 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">İletişim</h1>
        <p className="mt-4 leading-relaxed">
          Kampanya telefonu, e-posta ve sosyal hesap henüz teyit edilmedi. Bu yüzden burada bir
          numara veya form yok.
        </p>
        <p className="mt-4 leading-relaxed">
          Otel rezervasyon adresleri ve otel e-postası kampanya kanalı olarak kullanılmıyor.
        </p>
      </div>
    </Container>
  );
}
