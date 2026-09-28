"use client";

import { useState } from "react";
import { formatRoomLira, grossRoomRevenue, readWhole, roomRevenueDefaults } from "@/content/room-revenue";

type Fields = {
  rooms: string;
  days: string;
  occupancyA: string;
  priceA: string;
  occupancyB: string;
  priceB: string;
};

const initial: Fields = {
  rooms: String(roomRevenueDefaults.rooms),
  days: String(roomRevenueDefaults.days),
  occupancyA: String(roomRevenueDefaults.occupancyA),
  priceA: String(roomRevenueDefaults.priceA),
  occupancyB: String(roomRevenueDefaults.occupancyB),
  priceB: String(roomRevenueDefaults.priceB),
};

function occupancyError(value: number | null) {
  if (value === null || value > 100) {
    return "Doluluk 0 ile 100 arasında tam sayı olmalıdır.";
  }
  return null;
}

export function RoomRevenueDemo() {
  const [fields, setFields] = useState<Fields>(initial);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  const rooms = readWhole(fields.rooms);
  const days = readWhole(fields.days);
  const occupancyA = readWhole(fields.occupancyA);
  const priceA = readWhole(fields.priceA);
  const occupancyB = readWhole(fields.occupancyB);
  const priceB = readWhole(fields.priceB);
  const roomsError = rooms === null || rooms < 1 ? "Oda sayısı en az 1 olmalıdır." : null;
  const daysError = days === null || days < 1 ? "Gün sayısı en az 1 olmalıdır." : null;
  const occupancyAError = occupancyError(occupancyA);
  const occupancyBError = occupancyError(occupancyB);
  const priceAError = priceA === null ? "Oda fiyatı sıfır veya daha büyük bir tam sayı olmalıdır." : null;
  const priceBError = priceB === null ? "Oda fiyatı sıfır veya daha büyük bir tam sayı olmalıdır." : null;
  const error = roomsError ?? daysError ?? occupancyAError ?? priceAError ?? occupancyBError ?? priceBError;
  const revenueA =
    error || rooms === null || days === null || occupancyA === null || priceA === null
      ? null
      : grossRoomRevenue(rooms, days, occupancyA, priceA);
  const revenueB =
    error || rooms === null || days === null || occupancyB === null || priceB === null
      ? null
      : grossRoomRevenue(rooms, days, occupancyB, priceB);
  const difference = revenueA === null || revenueB === null ? null : revenueB - revenueA;
  const scale = Math.max(revenueA ?? 0, revenueB ?? 0, 1);

  return (
    <section className="mt-4 rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="gelir-baslik">
      <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
      <h2 id="gelir-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
        Doluluk artsın diye fiyatı kırmayacağız.
      </h2>
      <p className="mt-3 leading-relaxed">
        Hesap oda geliri üzerinden yürür. İki senaryoyu otelin oda sayısı, doluluğu ve fiyatıyla kurarsınız.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <NumberField label="Oda sayısı" value={fields.rooms} error={roomsError} onChange={(value) => update("rooms", value)} />
        <NumberField label="Gün sayısı" value={fields.days} error={daysError} onChange={(value) => update("days", value)} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <ScenarioFields
          title="Senaryo A"
          occupancy={fields.occupancyA}
          price={fields.priceA}
          occupancyError={occupancyAError}
          priceError={priceAError}
          onOccupancy={(value) => update("occupancyA", value)}
          onPrice={(value) => update("priceA", value)}
        />
        <ScenarioFields
          title="Senaryo B"
          occupancy={fields.occupancyB}
          price={fields.priceB}
          occupancyError={occupancyBError}
          priceError={priceBError}
          onOccupancy={(value) => update("occupancyB", value)}
          onPrice={(value) => update("priceB", value)}
        />
      </div>
      {revenueA !== null && revenueB !== null && difference !== null ? (
        <div className="mt-6 space-y-4" aria-live="polite">
          <RevenueBar label="Senaryo A" amount={revenueA} scale={scale} />
          <RevenueBar label="Senaryo B" amount={revenueB} scale={scale} />
          <p className="text-lg leading-relaxed">
            Brüt oda geliri: Senaryo A {formatRoomLira(revenueA)}, Senaryo B {formatRoomLira(revenueB)}. Fark{" "}
            {formatRoomLira(difference)}.
          </p>
        </div>
      ) : null}
      <p className="mt-4 leading-relaxed">Bu hesap örnek içindir. Gider düşülmemiştir. Fiyat veya doluluk sözü değildir.</p>
    </section>
  );
}

function NumberField({
  label,
  value,
  error,
  onChange,
}: {
  label: string;
  value: string;
  error: string | null;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block font-medium text-navy">
      {label}
      <input
        className="mt-2 block w-full rounded-md border border-navy/20 px-3 py-2 font-normal"
        inputMode="numeric"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
      />
      {error ? <span className="mt-2 block font-normal">{error}</span> : null}
    </label>
  );
}

function ScenarioFields({
  title,
  occupancy,
  price,
  occupancyError,
  priceError,
  onOccupancy,
  onPrice,
}: {
  title: string;
  occupancy: string;
  price: string;
  occupancyError: string | null;
  priceError: string | null;
  onOccupancy: (value: string) => void;
  onPrice: (value: string) => void;
}) {
  return (
    <fieldset className="rounded-md bg-surface p-4">
      <legend className="px-1 font-semibold text-navy">{title}</legend>
      <div className="mt-3 grid gap-4">
        <NumberField label="Doluluk (%)" value={occupancy} error={occupancyError} onChange={onOccupancy} />
        <NumberField label="Ortalama oda fiyatı (TL)" value={price} error={priceError} onChange={onPrice} />
      </div>
    </fieldset>
  );
}

function RevenueBar({ label, amount, scale }: { label: string; amount: number; scale: number }) {
  return (
    <div>
      <p className="font-medium text-navy">
        {label}: {formatRoomLira(amount)}
      </p>
      <div className="mt-2 h-8 rounded-sm bg-navy/5" role="img" aria-label={`${label} ${formatRoomLira(amount)}`}>
        <span className="block h-full rounded-sm bg-navy" style={{ width: `${(amount / scale) * 100}%` }} />
      </div>
    </div>
  );
}
