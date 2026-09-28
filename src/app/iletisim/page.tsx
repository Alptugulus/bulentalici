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
        <h1 className="page-title">İletişim</h1>
      </div>
    </Container>
  );
}
