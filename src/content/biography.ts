import type { Biography } from "@/types/content";

/** Bülent Alıcı ile 28 Eylül 2026’da paylaşılan tanıtım. İki yarım cümle okunur biçimde bağlandı. */
export const biographyDraft: Biography = {
  id: "tanitim",
  status: "published",
  lead: "Ben Bülent Alıcı. 1975 yılında İstanbul’da doğdum, aslen Konyalıyım. Evli ve üç çocuk babasıyım.",
  sections: [
    {
      id: "egitim",
      label: "Eğitim",
      paragraphs: [
        "Vefa Anadolu Lisesi’nin ardından Londra’da, London City University’de başladığım işletme eğitimimi, Girne Amerikan Üniversitesi’nde tamamladım.",
      ],
    },
    {
      id: "ticaret",
      label: "Ticaret",
      paragraphs: [
        "Babam İsmail Alıcı’nın 1969 yılında İstanbul’a gelmesiyle ticaret yolculuğumuz başladı. Üniversite eğitimimin ardından aile şirketlerimizde sorumluluk üstlendim. 2000 yılından bu yana şirketlerimizin yönetim kurulu başkanlığını yürütüyorum.",
        "Bugün turizm, gayrimenkul geliştirme, lojistik ve inşaat sektörlerinde faaliyetlerimizi sürdürüyoruz.",
      ],
    },
    {
      id: "otelcilik",
      label: "Otelcilik",
      paragraphs: [
        "Eser Oteller Yönetim Kurulu Başkanı olarak, otelciliğin sorumluluklarını ve sektörümüzün karşılaştığı zorlukları bölge bölge yakından biliyorum. Bu tecrübemi, meslektaşlarımızın ortak sorunlarına çözüm üretmek için değerlendirmek istiyorum.",
      ],
    },
    {
      id: "temsil",
      label: "Temsil",
      paragraphs: [
        "İTO 16. Oteller Komitesi Başkan ve Meclis Üyesi Adayı olarak; ulaşılabilir, şeffaf ve projeleriyle sonuç üreten bir temsil anlayışı için yola çıktım. Meslektaşlarımızın sesini birlikte güçlendirmek ve İstanbul turizminin geleceğini ortak akılla şekillendirmek için desteğinizi bekliyorum.",
      ],
    },
  ],
  closing: "Daha güçlü bir temsil, daha güçlü bir sektör için değişim şart.",
};
