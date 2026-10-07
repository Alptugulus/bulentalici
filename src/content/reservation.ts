export const demoHotels = [
  {
    id: "demo-1",
    name: "Örnek Otel A",
    district: "Beyoğlu",
    rooms: [
      { id: "a-tipi", name: "A tipi oda", nightly: 3000 },
      { id: "b-tipi", name: "B tipi oda", nightly: 3900 },
    ],
  },
  {
    id: "demo-2",
    name: "Örnek Otel B",
    district: "Fatih",
    rooms: [
      { id: "a-tipi", name: "A tipi oda", nightly: 2500 },
      { id: "b-tipi", name: "B tipi oda", nightly: 3300 },
    ],
  },
  {
    id: "demo-3",
    name: "Örnek Otel C",
    district: "Kadıköy",
    rooms: [
      { id: "a-tipi", name: "A tipi oda", nightly: 2800 },
      { id: "b-tipi", name: "B tipi oda", nightly: 3600 },
    ],
  },
] as const;

export const demoDistricts = ["Tümü", "Beyoğlu", "Fatih", "Kadıköy"] as const;

const tryFormat = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });

export function formatTry(amount: number) {
  return tryFormat.format(amount);
}

export function dayIndex(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    return null;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const index = Date.UTC(year, month - 1, day);
  const check = new Date(index);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) {
    return null;
  }
  return index;
}

export function nightsBetween(checkIn: string, checkOut: string) {
  const start = dayIndex(checkIn);
  const end = dayIndex(checkOut);
  if (start === null || end === null) {
    return null;
  }
  return Math.round((end - start) / 86_400_000);
}

export function todayIndex() {
  const now = new Date();
  return Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
}

export function formatDay(index: number) {
  const date = new Date(index);
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${date.getUTCFullYear()}-${month}-${day}`;
}

const stayFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

export function formatStay(value: string) {
  const index = dayIndex(value);
  if (index === null) {
    return value;
  }
  return stayFormat.format(new Date(index)).replace(/\.$/, "");
}
