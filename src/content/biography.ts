import type { Biography } from "@/types/content";

/** Bülent Alıcı ile 28 Eylül 2026’da paylaşılan tanıtım. İki yarım cümle okunur biçimde bağlandı. */
export const biographyDraft: Biography = {
  id: "tanitim",
  status: "published",
  lead: "1975 yılında İstanbul’da doğdu, aslen Konyalıdır. Evli ve üç çocuk babasıdır.",
  sections: [
    {
      id: "egitim",
      label: "Eğitim",
      paragraphs: [
        "Vefa Anadolu Lisesi’nin ardından Londra’da, London City University’de başladığı işletme eğitimini Girne Amerikan Üniversitesi’nde tamamladı.",
        "Ayrıca iyi derecede İngilizce bilir.",
      ],
    },
    {
      id: "ticaret",
      label: "Ticaret",
      paragraphs: [
        "Ticaret yolculuğu, babası İsmail Alıcı’nın 1969 yılında İstanbul’a gelmesiyle başladı. Üniversite eğitiminin ardından aile şirketlerinde sorumluluk üstlendi. 2000 yılından bu yana şirketlerin yönetim kurulu başkanlığını yürütüyor.",
        "Bugün turizm, gayrimenkul geliştirme, lojistik ve inşaat sektörlerinde faaliyetlerini sürdürüyor.",
      ],
    },
    {
      id: "otelcilik",
      label: "Otelcilik",
      paragraphs: [
        "Eser Oteller Yönetim Kurulu Başkanı olarak otelciliğin sorumluluklarını ve sektörün karşılaştığı zorlukları bölge bölge yakından bilir. Bu tecrübesini, meslektaşlarının ortak sorunlarına çözüm üretmek için değerlendirmek istiyor.",
      ],
    },
    {
      id: "temsil",
      label: "Temsil",
      paragraphs: [
        "İTO 16. Oteller Komitesi Başkan ve Meclis Üyesi Adayı olarak meslektaşlarını dinleyen, kolayca ulaşılabilen ve birlikte çözüm üreten bir temsil anlayışıyla yola çıktı. İstanbul turizminin geleceğini birlikte şekillendirmek için meslektaşlarının desteğini bekliyor.",
      ],
    },
  ],
  closing: "Daha güçlü bir temsil, daha güçlü bir sektör için değişim şart.",
};
