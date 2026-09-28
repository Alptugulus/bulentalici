import type { Project } from "@/types/content";

export const projectsIntro =
  "Geldiğimizde yapacaklarımız sekiz başlıktır. Her başlıkta hedef ve adım yazıyor: maliyet, rezervasyon, vergi, misafir ve açık temsil.";

export const projects: readonly Project[] = [
  {
    id: "enerji",
    slug: "enerji-ve-isletme-maliyetleri",
    title: "Enerji maliyetlerinin düşürülmesi",
    summary: "Otellerimizin elektrik faturasındaki dağıtım ve YEKDEM yükünü azaltacağız.",
    status: "published",
    order: 1,
    example: "energy",
    closing:
      "Dağıtım ve YEKDEM için Enerji ve Tabii Kaynaklar Bakanlığı, Kültür ve Turizm Bakanlığı ve sektörün sivil toplum kuruluşlarıyla ortak dilde toplantı yapacağız. Örnek fatura bir indirim sözü değildir.",
  },
  {
    id: "rezervasyon",
    slug: "istanbul-rezervasyon-platformu",
    title: "İstanbul Rezervasyon Platformu",
    summary:
      "İstanbul otellerinin ortak rezervasyon platformunu kuracağız. Rezervasyondan doğan değer otelcide ve ülkemizde kalacak.",
    status: "published",
    order: 2,
    example: "reservation",
    closing: "Bu platformu Oteller Komitesi olarak otellerimizle kuracağız.",
  },
  {
    id: "sgk",
    slug: "basit-konaklama-sgk-prim-destegi",
    title: "Basit Konaklama Belgeli Otellere SGK Prim Desteği",
    summary: "SGK prim desteğini Basit Konaklama Belgeli otellerimize de getireceğiz.",
    status: "published",
    order: 3,
    example: "sgk",
    closing:
      "Prim desteği Sosyal Güvenlik Kurumu’nun işidir. Talebi Sosyal Güvenlik Kurumu’na ve Çalışma ve Sosyal Güvenlik Bakanlığı’na taşıyacağız. Her gelişmeyi üyelerimizle paylaşacağız.",
  },
  {
    id: "vergi",
    slug: "turizmde-vergi-yuku",
    title: "Turizmde vergi yükünün azaltılması",
    summary: "Otellerimizde yüzde 10 olan vergi yükünü yüzde 5’e düşüreceğiz.",
    status: "published",
    order: 4,
    example: "tax",
    closing:
      "Vergi düzenlemesi Hazine ve Maliye Bakanlığı’nın işidir. Yüzde 10’dan yüzde 5’e inişi bu bakanlığa taşıyacağız. Dosyayı Kültür ve Turizm Bakanlığı ile birlikte hazırlayacağız.",
  },
  {
    id: "dijital",
    slug: "yapay-zeka-ve-dijital-donusum",
    title: "Yapay zekâ ve dijital dönüşüm",
    summary:
      "Yapay zekâ, otellerimizde rezervasyon takibini ve rakip analizini yönetir. Maliyet düşer, iş hızlanır, hizmet gelişir.",
    status: "published",
    order: 5,
    example: "digital",
    closing:
      "Uygulamayı Oteller Komitesi otellerimizle geliştirecek. Misafirimiz aynı uygulamada ulaşımını ve şehir turunu da görür.",
  },
  {
    id: "etkinlik",
    slug: "istanbul-etkinlik-sehri",
    title: "İstanbul’u global fuar ve etkinlik şehri yapmak",
    summary:
      "Fuar, kültür ve gastronomi takvimini otellerimizle önceden paylaşacağız. Konaklama bu takvime göre hazırlanacak.",
    status: "published",
    order: 6,
    example: "events",
    closing:
      "Uluslararası festivalleri, dünyaca ünlü şefleri ve sanatçıları İstanbul’la buluşturacak iş birliğini Kültür ve Turizm Bakanlığı ile kuracağız; otellerimizin bu etkinliklerin konaklama ortağı olmasını sağlayacağız.",
  },
  {
    id: "oda-geliri",
    slug: "oda-geliri",
    title: "Otelcinin odasını hak ettiği fiyata satması",
    summary: "Otellerimiz odayı doluluğa göre kırmayacak. Fiyatı oda gelirine göre koyacağız.",
    status: "published",
    order: 7,
    example: "room-revenue",
    closing: "Oda fiyatının sahibi otelcidir. Komite, ortak ölçüyü oda geliri yapar.",
  },
  {
    id: "seffaflik",
    slug: "seffaf-komite-yonetimi",
    title: "Şeffaf ve proje odaklı komite yönetimi",
    summary: "Yaptığımız işi, harcadığımız parayı ve aldığımız sonucu üyelerimize açık yazacağız.",
    status: "published",
    order: 8,
    example: "transparency",
    closing: "Bu hesap Oteller Komitesi’nin işidir. Üyelerimize açık yazılır.",
  },
];
