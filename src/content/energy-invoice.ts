export const energyInvoice = {
  dateLabel: "17.08.2026",
  dateProse: "17 Ağustos 2026",
  notice: "FATURA BİLGİLENDİRME",
  consumptionLabel: "245.882,88 kWh",
  lead: "Bu örnek faturada dağıtım ve YEK bedeli toplam 640.083,09 TL.",
  share:
    "17 Ağustos 2026 tarihli örnekte, KDV öncesi 1.664.947,17 TL tutarın %38,44’ünü dağıtım ve YEK bedelleri oluşturuyor. Bu iki kalem, diğer fatura kalemlerinin toplamının %62,46’sına karşılık geliyor.",
  distribution:
    "Dağıtım bedeli, elektriğin tüketiciye ulaştırılmasını sağlayan şebekenin yatırım, işletme, bakım ve arıza onarım maliyetlerini kapsar.",
  yek: "YEKDEM, yenilenebilir kaynaklardan elektrik üretimini destekleyen mekanizmadır. Bu örnekteki “YEK Bedeli”, faturanın açıklamasına göre yenilenebilir üretim desteği için tüketimle orantılı yansıtılan tutardır. Doğrudan işletmeye verilen ayrı bir bakım veya dağıtım hizmeti değildir.",
  question: "Bu bedeller neyi karşılıyor; işletmenin üzerindeki yük nasıl azaltılabilir?",
  change:
    "Dağıtım ve YEK indirim oranlarını değiştirerek aynı örnek faturadaki doğrudan tutar farkını inceleyin.",
  footnote:
    "Bu hesap örnek faturaya dayanır. Diğer kalemler sabit tutulmuştur; KDV ve diğer vergilerde doğabilecek ek değişiklikler hesaplanmamıştır. Senaryolar kesin indirim taahhüdü değildir; maliyetin kim tarafından karşılanacağı veya piyasa fiyatlarına dolaylı etkiler bu hesapta yer almaz.",
  singleBill:
    "Bu tek faturadan bütün işletmeler için aynı oran veya yıllık kesin tasarruf çıkarılmaz.",
  naming:
    "1.024.864,08 TL, aktif enerji, kapasitif bedel, güç bedeli ve belediye tüketim vergisinin toplamıdır. Bu tutara kullanım bedeli denmez. KDV öncesi toplam belediye tüketim vergisini içerdiği için vergisiz toplam da denmez.",
  sources: [
    {
      name: "EPDK — Son Kaynak Tedarik Tarifesi SSS",
      href: "https://www.epdk.gov.tr/Detay/Icerik/16-38/son-kaynak-tedarik-tarifesi-sktt-sikca-sorulan-",
    },
    {
      name: "EPİAŞ — YEKDEM Yönetmeliği",
      href: "https://www.epias.com.tr/tum-duyurular/piyasa-duyurulari/elektrik/kayit-ve-uzlastirma/yekdem-yonetmeligi-hakkinda-guncellenmis-hali/",
    },
  ],
} as const;

export const invoiceKurus = {
  aktif: 68_208_058,
  kapasitifGucVergi: 34_278_350,
  dagitim: 41_021_747,
  yek: 22_986_562,
  kdvOncesi: 166_494_717,
  kdv: 33_298_943,
  genel: 199_793_660,
} as const;

export const invoiceLines = [
  { id: "aktif", label: "Aktif enerji", kurus: 68_208_058, highlight: false },
  { id: "kapasitif", label: "Kapasitif bedel", kurus: 23_924_030, highlight: false },
  { id: "guc", label: "Güç bedeli", kurus: 5_794_589, highlight: false },
  { id: "belediye", label: "Belediye tüketim vergisi", kurus: 4_559_731, highlight: false },
  { id: "dagitim", label: "Dağıtım", kurus: invoiceKurus.dagitim, highlight: true },
  { id: "yek", label: "YEK", kurus: invoiceKurus.yek, highlight: true },
  { id: "ara", label: "KDV öncesi toplam", kurus: invoiceKurus.kdvOncesi, highlight: false },
  { id: "kdv", label: "KDV (%20), belgede yazan", kurus: invoiceKurus.kdv, highlight: false },
  { id: "genel", label: "Genel toplam, belgede yazan", kurus: invoiceKurus.genel, highlight: false },
] as const;

const amountFormat = new Intl.NumberFormat("tr-TR");

export function formatLira(kurus: number) {
  const lira = Math.trunc(kurus / 100);
  const fraction = String(Math.abs(kurus % 100)).padStart(2, "0");
  return `${amountFormat.format(lira)},${fraction} TL`;
}

export function remainingKurus(original: number, discountPercent: number) {
  return Math.round((original * (100 - discountPercent)) / 100);
}

export function energyScenario(distributionDiscount: number, yekDiscount: number) {
  const aktif = invoiceKurus.aktif;
  const diger = invoiceKurus.kapasitifGucVergi;
  const dagitim = remainingKurus(invoiceKurus.dagitim, distributionDiscount);
  const yek = remainingKurus(invoiceKurus.yek, yekDiscount);
  const total = aktif + diger + dagitim + yek;
  return {
    aktif,
    diger,
    dagitim,
    yek,
    total,
    difference: invoiceKurus.kdvOncesi - total,
  };
}
