"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const storageKey = "ba-imza-giris";

export function SignatureSplash() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(storageKey) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      setPhase("gone");
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = window.setTimeout(() => setPhase("hide"), reduce ? 400 : 1200);
    const done = window.setTimeout(() => {
      try {
        sessionStorage.setItem(storageKey, "1");
      } catch {
        // Oturum kaydı yazılamazsa yükleme yine kapanır.
      }
      setPhase("gone");
    }, reduce ? 450 : 1700);

    return () => {
      window.clearTimeout(hold);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "gone") {
    return null;
  }

  return (
    <div
      className={
        phase === "hide"
          ? "signature-splash pointer-events-none opacity-0"
          : "signature-splash opacity-100"
      }
      role="status"
      aria-live="polite"
      aria-label="Sayfa açılıyor"
    >
      <Image
        src="/images/giris/imza-header.png"
        alt=""
        width={410}
        height={128}
        priority
        className="h-auto w-56 sm:w-72"
      />
    </div>
  );
}
