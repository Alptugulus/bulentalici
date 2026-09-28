"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import {
  energyInvoice,
  energyScenario,
  formatLira,
  invoiceKurus,
  invoiceLines,
} from "@/content/energy-invoice";

const chartSegments = [
  { key: "aktif", label: "Aktif enerji", className: "bg-navy" },
  { key: "diger", label: "Kapasitif, güç ve belediye vergisi", className: "bg-[#5b7194]" },
  { key: "dagitim", label: "Dağıtım", className: "bg-accent" },
  { key: "yek", label: "YEK", className: "bg-[#9ec1ff]" },
] as const;

function clampPercent(value: number) {
  if (Number.isNaN(value)) {
    return 0;
  }
  return Math.min(100, Math.max(0, Math.round(value)));
}

export function EnergyInvoice() {
  const [distributionDiscount, setDistributionDiscount] = useState(0);
  const [yekDiscount, setYekDiscount] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const resultId = useId();
  const scenario = energyScenario(distributionDiscount, yekDiscount);
  const scale = invoiceKurus.kdvOncesi;

  function showInvoice() {
    dialogRef.current?.showModal();
  }

  function hideInvoice() {
    dialogRef.current?.close();
  }

  function applyPreset(distribution: number, yek: number) {
    setDistributionDiscount(distribution);
    setYekDiscount(yek);
  }

  return (
    <div className="mt-4 space-y-4">
      <section className="rounded-md bg-surface p-6" aria-labelledby="ornek-tutar">
        <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
        <p id="ornek-tutar" className="mt-2 text-2xl font-semibold leading-snug text-navy">
          Bu örnek faturada dağıtım ve YEK toplamı 640.083,09 TL.
        </p>
        <p className="mt-3 text-lg leading-relaxed">KDV öncesi toplamın %38,44’ü bu iki kalemden oluşuyor.</p>
        <button
          type="button"
          className="mt-5 rounded-md bg-navy px-4 py-2 font-medium text-paper"
          onClick={showInvoice}
        >
          Örnek faturayı aç
        </button>
      </section>

      <dialog
        ref={dialogRef}
        className="max-h-[calc(100%-2rem)] w-[min(42rem,calc(100%-2rem))] overflow-y-auto rounded-md bg-paper p-6 text-ink backdrop:bg-navy/80"
        aria-labelledby={titleId}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-navy">{energyInvoice.notice}</p>
            <h2 id={titleId} className="mt-1 text-2xl font-semibold leading-snug text-navy">
              Örnek fatura
            </h2>
          </div>
          <button type="button" className="rounded-md border border-navy/20 px-3 py-1.5 font-medium" onClick={hideInvoice}>
            Kapat
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          {energyInvoice.dateProse} tarihli örnek belge. Dağıtım ve YEK satırları aşağıdaki aktarımda öne
          çıkarılmıştır.
        </p>
        <Image
          src="/images/enerji/ornek-fatura.png"
          alt="17 Ağustos 2026 tarihli örnek fatura bilgilendirme. Dağıtım ve YEK bedeli belgede yazılıdır."
          width={1414}
          height={2000}
          className="mt-4 h-auto w-full"
        />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <caption className="sr-only">
              {energyInvoice.dateLabel} tarihli örnek fatura kalemleri
            </caption>
            <thead>
              <tr className="border-b border-navy/15 text-navy">
                <th scope="col" className="py-2 pr-3 font-semibold">
                  Kalem
                </th>
                <th scope="col" className="py-2 text-right font-semibold">
                  Tutar
                </th>
              </tr>
            </thead>
            <tbody>
              {invoiceLines.map((line) => (
                <tr key={line.id} className={line.highlight ? "bg-accent/10" : undefined}>
                  <th scope="row" className="py-2 pr-3 font-medium">
                    {line.label}
                    {line.highlight ? <span className="ml-2 text-xs font-semibold text-accent">Öne çıkan</span> : null}
                  </th>
                  <td className="py-2 text-right tabular-nums">{formatLira(line.kurus)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed">{energyInvoice.naming}</p>
      </dialog>

      <section className="rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="karsilik">
        <h2 id="karsilik" className="sr-only">
          Tanımlar
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-md bg-accent/10 p-4">
            <h3 className="text-xl font-semibold text-navy">Dağıtım</h3>
            <p className="mt-2 leading-relaxed">
              Elektriğin işletmenize ulaştırıldığı şebekenin yatırım, bakım ve işletim bedeli.
            </p>
          </article>
          <article className="rounded-md bg-[#9ec1ff]/30 p-4">
            <h3 className="text-xl font-semibold text-navy">YEKDEM</h3>
            <p className="mt-2 leading-relaxed">Yenilenebilir elektrik üretimini desteklemek için yansıtılan bedel.</p>
          </article>
        </div>
      </section>

      <section className="rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="senaryo-baslik">
        <h2 id="senaryo-baslik" className="text-2xl font-semibold leading-snug text-navy">
          Bu bedeller azalsa ne değişir?
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-md border border-navy/20 px-3 py-2 font-medium"
            aria-pressed={distributionDiscount === 0 && yekDiscount === 0}
            onClick={() => applyPreset(0, 0)}
          >
            Mevcut
          </button>
          <button
            type="button"
            className="rounded-md border border-navy/20 px-3 py-2 font-medium"
            aria-pressed={distributionDiscount === 50 && yekDiscount === 50}
            onClick={() => applyPreset(50, 50)}
          >
            İkisi de yarıya inse
          </button>
          <button
            type="button"
            className="rounded-md border border-navy/20 px-3 py-2 font-medium"
            aria-pressed={distributionDiscount === 100 && yekDiscount === 100}
            onClick={() => applyPreset(100, 100)}
          >
            İkisi de kaldırılsa
          </button>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className="block font-medium text-navy">
            Dağıtım indirimi: %{distributionDiscount}
            <input
              className="mt-2 block w-full accent-accent"
              type="range"
              min={0}
              max={100}
              value={distributionDiscount}
              onChange={(event) => setDistributionDiscount(clampPercent(event.currentTarget.valueAsNumber))}
            />
          </label>
          <label className="block font-medium text-navy">
            YEK indirimi: %{yekDiscount}
            <input
              className="mt-2 block w-full accent-accent"
              type="range"
              min={0}
              max={100}
              value={yekDiscount}
              onChange={(event) => setYekDiscount(clampPercent(event.currentTarget.valueAsNumber))}
            />
          </label>
        </div>
        <div className="mt-6 space-y-4">
          <Bar
            label="Mevcut"
            parts={[
              { key: "aktif", kurus: invoiceKurus.aktif },
              { key: "diger", kurus: invoiceKurus.kapasitifGucVergi },
              { key: "dagitim", kurus: invoiceKurus.dagitim },
              { key: "yek", kurus: invoiceKurus.yek },
            ]}
            scale={scale}
          />
          <Bar
            label="Senaryo"
            parts={[
              { key: "aktif", kurus: scenario.aktif },
              { key: "diger", kurus: scenario.diger },
              { key: "dagitim", kurus: scenario.dagitim },
              { key: "yek", kurus: scenario.yek },
            ]}
            scale={scale}
          />
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {chartSegments.map((segment) => (
              <li key={segment.key} className="flex items-center gap-2">
                <span className={`size-3 ${segment.className}`} aria-hidden="true" />
                {segment.label}
              </li>
            ))}
          </ul>
        </div>
        <dl id={resultId} className="mt-5 grid gap-3 sm:grid-cols-3" aria-live="polite">
          <div className="rounded-md bg-surface p-4">
            <dt className="font-medium text-navy">Mevcut toplam</dt>
            <dd className="mt-1 text-lg">{formatLira(invoiceKurus.kdvOncesi)}</dd>
          </div>
          <div className="rounded-md bg-surface p-4">
            <dt className="font-medium text-navy">Yeni toplam</dt>
            <dd className="mt-1 text-lg">{formatLira(scenario.total)}</dd>
          </div>
          <div className="rounded-md bg-surface p-4">
            <dt className="font-medium text-navy">Azalma</dt>
            <dd className="mt-1 text-lg">{formatLira(scenario.difference)}</dd>
          </div>
        </dl>
        <p className="mt-4 leading-relaxed">
          Örnek hesap: Diğer kalemler sabit tutulmuştur. KDV etkisi hariçtir; kesin indirim taahhüdü değildir.
        </p>
      </section>
      <details className="rounded-md border border-navy/10 bg-paper p-6">
        <summary className="cursor-pointer text-lg font-semibold text-navy">Hesaplama ve kaynaklar</summary>
        <div className="mt-4 space-y-3 leading-relaxed">
          <p>{energyInvoice.naming}</p>
          <p>{energyInvoice.footnote}</p>
          <p>
            Belge tarihi {energyInvoice.dateLabel}. Aktif tüketim {energyInvoice.consumptionLabel}.{" "}
            {energyInvoice.singleBill}
          </p>
          <p>
            <a className="font-medium text-navy underline underline-offset-4" href={energyInvoice.sources[0].href}>
              {energyInvoice.sources[0].name}
            </a>
          </p>
          <p>
            <a className="font-medium text-navy underline underline-offset-4" href={energyInvoice.sources[1].href}>
              {energyInvoice.sources[1].name}
            </a>
          </p>
        </div>
      </details>
    </div>
  );
}

function Bar({
  label,
  parts,
  scale,
}: {
  label: string;
  parts: readonly { key: (typeof chartSegments)[number]["key"]; kurus: number }[];
  scale: number;
}) {
  const summary = parts
    .map((part) => {
      const name = chartSegments.find((segment) => segment.key === part.key)?.label ?? part.key;
      return `${name} ${formatLira(part.kurus)}`;
    })
    .join(", ");

  return (
    <div>
      <p className="text-sm font-medium text-navy">{label}</p>
      <div
        className="mt-2 flex h-8 w-full overflow-hidden rounded-sm bg-navy/5"
        role="img"
        aria-label={`${label}: ${summary}`}
      >
        {parts.map((part) => {
          const segment = chartSegments.find((item) => item.key === part.key);
          if (!segment || part.kurus <= 0) {
            return null;
          }
          return (
            <span
              key={part.key}
              className={segment.className}
              style={{ width: `${(part.kurus / scale) * 100}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
