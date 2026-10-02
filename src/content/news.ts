import type { NewsImage, NewsItem } from "@/types/content";

function image(file: string, width: number, height: number, alt: string): NewsImage {
  return { src: `/haberler/${file}.avif`, width, height, alt };
}

export const news: readonly NewsItem[] = [
  {
    id: "haber-07",
    slug: "quality-of-magazine-roportaji",
    title: "Otelcinin kaybedecek bir dört yıl daha yok",
    summary:
      "Quality of Magazine’in Ekim 2026, sayı 208 kapağında Bülent Alıcı yer alıyor. Kapak satırı “Sektöre hizmet için adayım.” Röportaj bu başlıkla yayımlanmış.",
    status: "published",
    order: 1,
    listedOn: "Ekim 2026",
    sourceName: "Quality of Magazine",
    sourceUrl: "",
    contentType: "text_and_image",
    images: [
      image(
        "quality-of-magazine-kapak",
        768,
        1024,
        "Quality of Magazine Ekim 2026, sayı 208 kapağı. Bülent Alıcı ve “Sektöre hizmet için adayım” satırı.",
      ),
      image(
        "quality-of-magazine-sayfa-1",
        1024,
        682,
        "Quality of Magazine röportajı, sayfa 56 ve 57. Başlık: Otelcinin kaybedecek bir dört yıl daha yok.",
      ),
      image(
        "quality-of-magazine-sayfa-2",
        1024,
        682,
        "Quality of Magazine röportajının devamı, sayfa 58 ve 59.",
      ),
    ],
  },
  {
    id: "haber-01",
    slug: "paravizyon-roportaji",
    title: "Bülent Alıcı Paravizyon Röportajı",
    summary: "",
    status: "published",
    order: 2,
    listedOn: "3 Ağu",
    sourceName: "Paravizyon",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/b%C3%BClent-al%C4%B1c%C4%B1-paravizyon-r%C3%B6portaj%C4%B1",
    contentType: "image_only",
    images: [
      image(
        "paravizyon-roportaji-kapak",
        1024,
        1575,
        "Paravizyon röportajının birinci sayfası.",
      ),
      image(
        "paravizyon-roportaji-sayfa-2",
        1024,
        1576,
        "Paravizyon röportajının ikinci sayfası.",
      ),
    ],
  },
  {
    id: "haber-02",
    slug: "tuketici-dergisi-roportaji",
    title: "Bülent Alıcı Tüketici Dergisi Röportajı",
    summary: "",
    status: "published",
    order: 3,
    listedOn: "3 Ağu",
    sourceName: "Tüketici Dergisi",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/b%C3%BClent-al%C4%B1c%C4%B1t%C3%BCketici-dergisi-r%C3%B6portaj%C4%B1",
    contentType: "image_only",
    images: [
      image(
        "tuketici-dergisi-roportaji-kapak",
        1168,
        828,
        "Tüketici Dergisi röportajının birinci sayfası.",
      ),
      image(
        "tuketici-dergisi-roportaji-sayfa-2",
        1480,
        1046,
        "Tüketici Dergisi röportajının ikinci sayfası.",
      ),
    ],
  },
  {
    id: "haber-03",
    slug: "turizm-ajansi",
    title: "Bülent Alıcı Turizm Ajansina Konuştu",
    summary:
      "Bülent Alıcı, turizm sektörüne yönelik sigorta primi desteğinin basit konaklama belgeli tesisleri de kapsamasını talep ediyor. Haberde İstanbul’daki yaklaşık 1.900 tesisin mevcut düzenlemeden yararlanamadığı belirtiliyor. Alıcı, bu işletmelerin de bakanlığa bağlı çalıştığını, SGK yükümlülüklerini yerine getirdiğini ve istihdam sağladığını vurgulayarak destek kapsamının genişletilmesini savunuyor.",
    status: "published",
    order: 4,
    listedOn: "3 Ağu",
    sourceName: "Turizm Ajansı",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/b%C3%BClent-al%C4%B1c%C4%B1-turizm-ajansina-konu%C5%9Ftu",
    contentType: "text_and_image",
    images: [
      image("turizm-ajansi-kapak", 1168, 876, "Turizm Ajansı haberinin kapak görseli."),
    ],
  },
  {
    id: "haber-04",
    slug: "hotel-gazetesi",
    title: "Bülent Alıcı Hotel Gazetesine Konuştu",
    summary:
      "Haberde Alıcı’nın SGK prim desteğinde tesislerin belge türüne göre ayrılmaması yönündeki çağrısı aktarılıyor. İstanbul’da yaklaşık 1.900 basit konaklama belgeli işletmenin vergi, kayıtlı istihdam ve turizm katkısı bakımından değerlendirilmesi gerektiği belirtiliyor. Desteklerin yasal olarak faaliyet gösteren tüm konaklama tesislerine yayılması isteniyor.",
    status: "published",
    order: 5,
    listedOn: "3 Ağu",
    sourceName: "Hotel Gazetesi",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/b%C3%BClent-al%C4%B1c%C4%B1-hotel-gazetesine-konu%C5%9Ftu-1",
    contentType: "text_and_image",
    images: [
      image("hotel-gazetesi-kapak", 1140, 660, "Hotel Gazetesi haberinin kapak görseli."),
    ],
  },
  {
    id: "haber-05",
    slug: "turizm-aktuel",
    title: "Bülent Alıcı Turizm Aktüel Röpörtajı",
    summary:
      "Alıcı, İstanbul turizminin başarısının doluluk kadar ziyaretçilerin şehirde bıraktığı ekonomik değerle ölçülmesini savunuyor. Önerileri arasında yerli rezervasyon platformu, doğrudan satışların artırılması ve aracı maliyetlerinin azaltılması bulunuyor. Fuar, kongre, ulaşım ve konaklamanın birlikte planlanması; uluslararası tanıtım, etkinlikler ve şehir deneyimleriyle talebin yıl geneline yayılması öneriliyor. İlçelerin farklı turizm potansiyellerine göre gelişmesi ve dijital gelir yönetimi de ele alınıyor. Metin, 2026 İTO seçimleri bağlamında sektörün ortak hareket etmesi ve kamu ile iletişimin güçlendirilmesi çağrısını içeriyor. Konaklama vergisinin azaltılması veya kaldırılması bir öneri olarak sunuluyor.",
    status: "published",
    order: 6,
    listedOn: "22 Nis",
    sourceName: "Turizm Aktüel",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/b%C3%BClent-al%C4%B1c%C4%B1-turizm-akt%C3%BCel-r%C3%B6p%C3%B6rtaj%C4%B1",
    contentType: "text_and_image",
    images: [
      image("turizm-aktuel-kapak", 851, 551, "Turizm Aktüel röportajının kapak görseli."),
    ],
  },
  {
    id: "haber-06",
    slug: "ito-oteller-komitesi",
    title: "İTO Oteller Komitesi'nde değişim rüzgarı!",
    summary:
      "Turizm Güncel’den Okan Beltek’e verilen açıklamaları aktaran haberde Alıcı, İstanbul’da konaklama süresini ve ziyaretçi başına harcamayı artıracak bir turizm modeli öneriyor. Kongreler, fuarlar, gastronomi ve kültür etkinlikleri bu yaklaşımın parçaları olarak ele alınıyor. Yerli rezervasyon platformuyla komisyon yükünün azaltılması; yapay zekâ destekli fiyatlama, pazarlama ve operasyon uygulamalarının yaygınlaştırılması hedefleniyor. İTO öncülüğünde eğitim ve danışmanlık, teknoloji kuruluşları ve üniversitelerle iş birliği öneriliyor. Alıcı ayrıca önceki seçim deneyimini değerlendirerek sektör temsilcilerini 2026 seçimlerine katılmaya çağırıyor.",
    status: "published",
    order: 7,
    listedOn: "3 Ağu",
    sourceName: "Turizm Güncel",
    sourceUrl:
      "https://www.bulentalici.com.tr/post/i-to-oteller-komitesi-nde-de%C4%9Fi%C5%9Fim-r%C3%BCzgar%C4%B1",
    contentType: "text_and_image",
    images: [
      image(
        "ito-oteller-komitesi-kapak",
        1023,
        640,
        "İTO Oteller Komitesi haberinin kapak görseli.",
      ),
    ],
  },
];
