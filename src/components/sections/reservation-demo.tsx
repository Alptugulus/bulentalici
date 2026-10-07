"use client";

import { useMemo, useState } from "react";
import {
  dayIndex,
  demoDistricts,
  demoHotels,
  formatDay,
  formatStay,
  formatTry,
  nightsBetween,
  todayIndex,
} from "@/content/reservation";

const fieldClass =
  "mt-1 block w-full border-0 bg-transparent p-0 font-normal text-ink outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ReservationDemo() {
  const initial = useMemo(() => {
    const today = todayIndex();
    return { checkIn: formatDay(today + 86_400_000), checkOut: formatDay(today + 3 * 86_400_000) };
  }, []);
  const [district, setDistrict] = useState<(typeof demoDistricts)[number]>("Tümü");
  const [checkIn, setCheckIn] = useState(initial.checkIn);
  const [checkOut, setCheckOut] = useState(initial.checkOut);
  const [openId, setOpenId] = useState<string | null>(null);
  const [roomId, setRoomId] = useState<string | null>(null);

  const nights = nightsBetween(checkIn, checkOut);
  const checkInIndex = dayIndex(checkIn);
  const dateError =
    checkInIndex === null || nights === null
      ? "Giriş ve çıkış tarihini seçin."
      : checkInIndex < todayIndex()
        ? "Giriş tarihi bugünden önce olamaz."
        : nights <= 0
          ? "Çıkış, girişten sonra olmalıdır."
          : null;
  const hotels = dateError
    ? []
    : demoHotels.filter((hotel) => district === "Tümü" || hotel.district === district);
  const openHotel = hotels.find((item) => item.id === openId) ?? null;
  const room = openHotel?.rooms.find((item) => item.id === roomId) ?? null;
  const stay =
    nights && nights > 0 ? `${formatStay(checkIn)} – ${formatStay(checkOut)} · ${nights} gece` : null;

  function updateStay(nextDistrict: (typeof demoDistricts)[number], nextIn: string, nextOut: string) {
    setDistrict(nextDistrict);
    setCheckIn(nextIn);
    setCheckOut(nextOut);
    setOpenId(null);
    setRoomId(null);
  }

  return (
    <div className="mt-4 space-y-4">
      <section className="rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="rezervasyon-akis">
        <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
        <h2 id="rezervasyon-akis" className="mt-2 text-2xl font-semibold leading-snug text-navy">
          Ortak platformu kuracağız. Oda otelcinin elinde kalacak.
        </h2>
        <p className="mt-3 leading-relaxed">
          Aşağıdaki akış, kuracağımız platformun örneğidir. Gerçek rezervasyon yapılmaz.
        </p>

        <div className="mt-6 rounded-md bg-surface p-3 sm:p-4">
          <form
            className="grid overflow-hidden rounded-md border border-navy/10 bg-paper sm:grid-cols-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="border-b border-navy/10 px-4 py-3 sm:border-r sm:border-b-0">
              <span className="text-xs font-medium tracking-wide text-navy/70">Bölge</span>
              <select
                className={fieldClass}
                value={district}
                onChange={(event) =>
                  updateStay(event.currentTarget.value as (typeof demoDistricts)[number], checkIn, checkOut)
                }
              >
                {demoDistricts.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="border-b border-navy/10 px-4 py-3 sm:border-r sm:border-b-0">
              <span className="text-xs font-medium tracking-wide text-navy/70">Giriş</span>
              <input
                className={fieldClass}
                type="date"
                value={checkIn}
                onChange={(event) => updateStay(district, event.currentTarget.value, checkOut)}
              />
            </label>
            <label className="px-4 py-3">
              <span className="text-xs font-medium tracking-wide text-navy/70">Çıkış</span>
              <input
                className={fieldClass}
                type="date"
                value={checkOut}
                onChange={(event) => updateStay(district, checkIn, event.currentTarget.value)}
              />
            </label>
          </form>

          {dateError ? <p className="mt-3 text-navy">{dateError}</p> : null}

          {hotels.length > 0 && nights && nights > 0 && stay ? (
            openHotel ? (
              <RoomBoard
                hotel={openHotel}
                nights={nights}
                stay={stay}
                roomId={room?.id ?? null}
                onBack={() => {
                  setOpenId(null);
                  setRoomId(null);
                }}
                onSelect={(nextRoomId) => setRoomId(nextRoomId)}
              />
            ) : (
              <HotelResults
                hotels={hotels}
                nights={nights}
                stay={stay}
                district={district}
                onOpen={(id) => {
                  setOpenId(id);
                  setRoomId(null);
                }}
              />
            )
          ) : dateError ? null : (
            <p className="mt-4">Bu bölgede gösterilecek örnek otel yok.</p>
          )}

          {openHotel && room && nights && nights > 0 ? (
            <div className="mt-4 rounded-md bg-navy px-5 py-5 text-paper" aria-live="polite">
              <h3 className="text-xl font-semibold">Seçilen oda</h3>
              <p className="mt-3 leading-relaxed">
                {openHotel.name}, {openHotel.district}. {formatStay(checkIn)} – {formatStay(checkOut)}, {nights} gece,{" "}
                {room.name}. Örnek konaklama tutarı {formatTry(room.nightly * nights)}. Gerçek rezervasyon yapılmaz.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function HotelResults({
  hotels,
  nights,
  stay,
  district,
  onOpen,
}: {
  hotels: readonly (typeof demoHotels)[number][];
  nights: number;
  stay: string;
  district: string;
  onOpen: (id: string) => void;
}) {
  return (
    <div className="mt-4">
      <p className="text-sm text-navy">
        {hotels.length} örnek otel · {district} · {stay}
      </p>
      <ul className="mt-3 space-y-3">
        {hotels.map((hotel) => {
          const from = Math.min(...hotel.rooms.map((item) => item.nightly));
          return (
            <li key={hotel.id}>
              <article className="overflow-hidden border border-navy/10 bg-paper">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex min-h-24 items-end bg-navy px-4 py-4 text-paper sm:w-36 sm:shrink-0">
                    <p>
                      <span className="block text-xs tracking-wide text-paper/70">Örnek otel</span>
                      <span className="mt-1 block text-lg font-semibold">{hotel.district}</span>
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-navy">{hotel.name}</h3>
                      <p className="mt-1">{hotel.district}</p>
                      <p className="mt-1 text-sm">{hotel.rooms.length} oda tipi</p>
                    </div>
                    <div className="flex items-end justify-between gap-4 sm:flex-col sm:items-end">
                      <p className="text-right">
                        <span className="block text-xs tracking-wide text-navy/70">Başlangıç</span>
                        <span className="mt-1 block text-2xl font-semibold tracking-tight text-navy">
                          {formatTry(from * nights)}
                        </span>
                        <span className="mt-1 block text-sm">{nights} gece</span>
                      </p>
                      <button
                        type="button"
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 font-medium text-paper"
                        onClick={() => onOpen(hotel.id)}
                      >
                        Odaları gör
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function RoomBoard({
  hotel,
  nights,
  stay,
  roomId,
  onBack,
  onSelect,
}: {
  hotel: (typeof demoHotels)[number];
  nights: number;
  stay: string;
  roomId: string | null;
  onBack: () => void;
  onSelect: (roomId: string) => void;
}) {
  return (
    <div className="mt-4">
      <button type="button" className="font-medium text-navy underline-offset-4 hover:underline" onClick={onBack}>
        ← Otellere dön
      </button>
      <article className="mt-3 overflow-hidden border border-navy/10 bg-paper">
        <header className="flex flex-col gap-1 border-b border-navy/10 px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-navy">{hotel.name}</h3>
            <p className="mt-1">{hotel.district}</p>
          </div>
          <p className="text-sm text-navy">{stay}</p>
        </header>
        <div className="hidden grid-cols-[1fr_auto_6rem] items-center gap-4 border-b border-navy/10 px-4 py-2 text-xs font-medium tracking-wide text-navy/70 sm:grid">
          <span>Oda tipi</span>
          <span className="text-right">Konaklama tutarı</span>
          <span className="sr-only">Seçim</span>
        </div>
        <ul>
          {hotel.rooms.map((option) => {
            const selected = roomId === option.id;
            return (
              <li key={option.id} className={selected ? "border-b border-navy/10 bg-surface last:border-b-0" : "border-b border-navy/10 last:border-b-0"}>
                <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 px-4 py-4 sm:grid-cols-[1fr_auto_6rem]">
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-lg font-semibold text-navy">{option.name}</p>
                    <p className="mt-1 text-sm">Gecelik {formatTry(option.nightly)}</p>
                  </div>
                  <p className="text-right">
                    <span className="block text-2xl font-semibold tracking-tight text-navy">
                      {formatTry(option.nightly * nights)}
                    </span>
                    <span className="mt-1 block text-sm">{nights} gece</span>
                  </p>
                  <button
                    type="button"
                    className={
                      selected
                        ? "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-navy px-4 font-medium text-paper"
                        : "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-4 font-medium text-paper"
                    }
                    aria-pressed={selected}
                    onClick={() => onSelect(option.id)}
                  >
                    {selected ? "Seçildi" : "Seç"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
}
