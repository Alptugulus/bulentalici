export const roomRevenueDefaults = {
  rooms: 50,
  days: 30,
  occupancyA: 80,
  priceA: 3000,
  occupancyB: 65,
  priceB: 3800,
} as const;

const liraFormat = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });

export function formatRoomLira(amount: number) {
  return liraFormat.format(amount);
}

export function grossRoomRevenue(rooms: number, days: number, occupancy: number, price: number) {
  return Math.round((rooms * days * occupancy * price) / 100);
}

export function readWhole(value: string) {
  if (!/^\d+$/.test(value)) {
    return null;
  }
  return Number(value);
}
