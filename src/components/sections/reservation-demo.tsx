"use client";

import { useMemo, useState } from "react";
import {
  dayIndex,
  demoDistricts,
  demoHotels,
  formatDay,
  formatTry,
  nightsBetween,
  todayIndex,
} from "@/content/reservation";

export function ReservationDemo() {
  const initial = useMemo(() => {
    const today = todayIndex();
    return { checkIn: formatDay(today + 86_400_000), checkOut: formatDay(today + 3 * 86_400_000) };
  }, []);
  const [district, setDistrict] = useState<(typeof demoDistricts)[number]>("Tümü");
  const [checkIn, setCheckIn] = useState(initial.checkIn);
  const [checkOut, setCheckOut] = useState(initial.checkOut);
  const [hotelId, setHotelId] = useState<string | null>(null);
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
  const hotel = hotels.find((item) => item.id === hotelId) ?? null;
  const room = hotel?.rooms.find((item) => item.id === roomId) ?? null;

  function updateStay(nextDistrict: (typeof demoDistricts)[number], nextIn: string, nextOut: string) {
    setDistrict(nextDistrict);
    setCheckIn(nextIn);
    setCheckOut(nextOut);
    setHotelId(null);
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
        <form className="mt-5 grid gap-4 sm:grid-cols-3" onSubmit={(event) => event.preventDefault()}>
          <label className="block font-medium text-navy">
            Bölge
            <select
              className="mt-2 block w-full rounded-md border border-navy/20 bg-paper px-3 py-2 font-normal"
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
          <label className="block font-medium text-navy">
            Giriş
            <input
              className="mt-2 block w-full rounded-md border border-navy/20 px-3 py-2 font-normal"
              type="date"
              value={checkIn}
              onChange={(event) => updateStay(district, event.currentTarget.value, checkOut)}
            />
          </label>
          <label className="block font-medium text-navy">
            Çıkış
            <input
              className="mt-2 block w-full rounded-md border border-navy/20 px-3 py-2 font-normal"
              type="date"
              value={checkOut}
              onChange={(event) => updateStay(district, checkIn, event.currentTarget.value)}
            />
          </label>
        </form>
        {dateError ? <p className="mt-3 text-navy">{dateError}</p> : null}

        {hotels.length > 0 ? (
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {hotels.map((item) => (
              <li key={item.id}>
                <article className="h-full rounded-md bg-surface p-4">
                  <h3 className="text-xl font-semibold text-navy">{item.name}</h3>
                  <p className="mt-1">{item.district}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    {item.rooms.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        className="rounded-md border border-navy/15 bg-paper px-3 py-2 text-left"
                        aria-pressed={hotelId === item.id && roomId === option.id}
                        onClick={() => {
                          setHotelId(item.id);
                          setRoomId(option.id);
                        }}
                      >
                        {option.name}
                        <span className="mt-1 block">{formatTry(option.nightly)} / gece</span>
                      </button>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : dateError ? null : (
          <p className="mt-6">Bu bölgede gösterilecek örnek otel yok.</p>
        )}

        {hotel && room && nights && nights > 0 ? (
          <div className="mt-6 rounded-md bg-navy px-5 py-5 text-paper" aria-live="polite">
            <h3 className="text-xl font-semibold">Oda özeti</h3>
            <p className="mt-3 leading-relaxed">
              {hotel.name}, {hotel.district}. {checkIn} – {checkOut}, {nights} gece, {room.name}. Örnek
              konaklama tutarı {formatTry(room.nightly * nights)}. Gerçek rezervasyon yapılmaz.
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
