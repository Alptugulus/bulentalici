import type { Project, ProjectCategory } from "@/types/content";

export const projectsLead =
  "Otellerimizin maliyetlerini azaltmak, gelirlerini artırmak ve İstanbul turizmini birlikte güçlendirmek için çalışacağız.";

export const projectsHeading = "İstanbul otelciliği için somut projeler.";

const projectTopics: Record<string, string> = {
  sgk: "SGK desteği",
  enerji: "dağıtım ve YEKDEM bedelleri",
  vergi: "vergi indirimi",
  rezervasyon: "rezervasyon platformu",
  dijital: "yapay zekâ",
  "oda-geliri": "oda geliri",
  donem: "dönem sınırı",
  genc: "gençlerin temsili",
  kapsayici: "kapsayıcı temsil",
  seffaflik: "şeffaf yönetim",
  sorun: "üye sorun takibi",
  etkinlik: "etkinlik takvimi",
};

export function projectsIntro(items: readonly { id: string }[]) {
  const topics = items.map((item) => projectTopics[item.id]).filter((topic) => topic !== undefined);
  if (topics.length === 0) {
    return "Her başlıkta hedef ve adım yazıyor.";
  }
  if (topics.length === 1) {
    return `Her başlıkta hedef ve adım yazıyor: ${topics[0]}.`;
  }
  const last = topics[topics.length - 1];
  return `Her başlıkta hedef ve adım yazıyor: ${topics.slice(0, -1).join(", ")} ve ${last}.`;
}

export const projectGroups: readonly { id: ProjectCategory; title: string }[] = [
  { id: "isletme-maliyetleri", title: "İşletme maliyetleri ve destekler" },
  { id: "rezervasyon-dijitallesme", title: "Rezervasyon ve dijitalleşme" },
  { id: "temsil-yonetim", title: "Temsil ve yönetim" },
  { id: "uye-hizmetleri", title: "Üye hizmetleri ve sektör gelişimi" },
];

export const approach = {
  title: "Dört yılın sonunda otelciler ne kazandı?",
  summary:
    "Temsil görevinin başarısı, sektöre sağlanan somut sonuçla ölçülür.",
  paragraphs: [
    "Dönem sonunda sorulacak soru şudur: hangi proje üretildi, hangi maliyet azaldı, hangi teşvik genişledi, hangi sorun çözüldü.",
  ],
  invitation: "27 Ekim'de mavi listede buluşalım.",
  poster: {
    src: "/images/kaynak/001-dort-yilin-sonunda.png",
    alt: "Dört yılın sonunda otelciler ne kazandı başlıklı paylaşım afişi.",
  },
};

function poster(file: string, alt: string) {
  return { src: `/images/kaynak/${file}.png`, alt };
}

export const projects: readonly Project[] = [
  {
    id: "sgk",
    slug: "basit-konaklama-sgk-prim-destegi",
    title: "Basit Konaklama Belgeli Tesislere SGK Desteği",
    summary: "Basit Konaklama Belgeli tesislerin de SGK desteğine dahil edilmesi için çalışacağız.",
    status: "published",
    order: 1,
    example: "sgk",
    category: "isletme-maliyetleri",
    paragraphs: [
      "Basit Konaklama Belgeli tesislerin de SGK desteğine dahil edilmesi için çalışma hedefi.",
      "Aynı sektörde faaliyet gösteren, istihdam sağlayan ve yükümlülüklerini yerine getiren işletmeler için daha adil destek amaçlanıyor.",
    ],
    poster: poster(
      "002-proje-1-sgk-destegi",
      "Basit Konaklama Belgeli Tesislere SGK Desteği başlıklı paylaşım afişi.",
    ),
  },
  {
    id: "enerji",
    slug: "enerji-ve-isletme-maliyetleri",
    title: "Enerjide Dağıtım ve YEKDEM Bedelleri",
    summary: "Otellerimizin dağıtım ve YEKDEM bedellerini makul seviyeye çekeceğiz.",
    status: "published",
    order: 2,
    example: "energy",
    category: "isletme-maliyetleri",
    paragraphs: [
      "Otellerin dağıtım ve YEKDEM bedellerinin makul seviyeye çekilmesi öneriliyor.",
      "Kesintisiz hizmet veren otellerin enerji maliyeti ele alınıyor. Amaç işletme maliyetini azaltmak, rekabet gücünü ve sürdürülebilirliği desteklemek.",
    ],
    poster: poster(
      "003-proje-2-enerji-bedelleri",
      "Enerjide Dağıtım ve YEKDEM Bedelleri başlıklı paylaşım afişi.",
    ),
    closing:
      "Dağıtım ve YEKDEM için Enerji ve Tabii Kaynaklar Bakanlığı, Kültür ve Turizm Bakanlığı ve sektörün sivil toplum kuruluşlarıyla ortak dilde toplantı yapacağız. Örnek fatura bir indirim sözü değildir.",
  },
  {
    id: "vergi",
    slug: "turizmde-vergi-yuku",
    title: "Turizmde Vergi Yükünün 5 Puan Azaltılması",
    summary: "Turizmde vergi yükünü 5 puan azaltacağız.",
    status: "published",
    order: 3,
    example: "tax",
    category: "isletme-maliyetleri",
    paragraphs: [
      "Turizmde vergi yükünün 5 puan azaltılması hedefleniyor.",
      "Öneri, otelcinin kazancını yeniden yatırıma, istihdama ve hizmet kalitesine yönlendirebilmesini amaçlıyor. Kaynak, hangi vergi türünün kastedildiğini belirtmiyor.",
    ],
    priorStatement:
      "Bu sayfada daha önce hedef, yüzde 10 olan yükün yüzde 5’e inmesi olarak yazılmıştı. Güncel kaynak 5 puan diyor.",
    poster: poster("004-proje-3-vergi-yuku", "Turizmde vergi yükünün 5 puan azaltılması başlıklı paylaşım afişi."),
    closing:
      "Vergi düzenlemesi Hazine ve Maliye Bakanlığı’nın işidir. 5 puanlık indirimi bu bakanlığa taşıyacağız. Dosyayı Kültür ve Turizm Bakanlığı ile birlikte hazırlayacağız.",
  },
  {
    id: "rezervasyon",
    slug: "istanbul-rezervasyon-platformu",
    title: "İstanbul Rezervasyon Platformu",
    summary: "Otelcilerin söz sahibi olduğu, düşük komisyonlu bir rezervasyon platformu kuracağız.",
    status: "published",
    order: 4,
    example: "reservation",
    category: "rezervasyon-dijitallesme",
    paragraphs: [
      "Otelcilerin söz sahibi olduğu, düşük komisyonlu bir rezervasyon platformu kurulması hedefleniyor.",
      "Hedef, büyük platformlarda alınan hizmetin alınabildiği ve yönü Oteller Komitesi üyelerinin verdiği bir modeldir. Amaç komisyon yükünü azaltmak, geliri sektörde tutmak ve rekabet gücünü artırmak.",
    ],
    poster: poster(
      "005-proje-4-rezervasyon-platformu",
      "İstanbul Rezervasyon Platformu başlıklı paylaşım afişi.",
    ),
    closing: "Bu platformu Oteller Komitesi olarak otellerimizle kuracağız.",
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
    category: "rezervasyon-dijitallesme",
    paragraphs: [],
    closing:
      "Uygulamayı Oteller Komitesi otellerimizle geliştirecek. Misafirimiz aynı uygulamada ulaşımını ve şehir turunu da görür.",
  },
  {
    id: "oda-geliri",
    slug: "oda-geliri",
    title: "Otelcinin odasını hak ettiği fiyata satması",
    summary: "Otellerimiz odayı doluluğa göre kırmayacak. Fiyatı oda gelirine göre koyacağız.",
    status: "published",
    order: 6,
    example: "room-revenue",
    category: "rezervasyon-dijitallesme",
    paragraphs: [],
    closing: "Oda fiyatının sahibi otelcidir. Komite, ortak ölçüyü oda geliri yapar.",
  },
  {
    id: "donem",
    slug: "komite-ve-temsil-gorevlerinde-donem-siniri",
    title: "Komite ve Temsil Görevlerinde Dönem Sınırı",
    summary: "Görev süresinde 2 dönem esas, en fazla 3 dönem sınır olsun.",
    status: "draft",
    order: 7,
    example: "term-limit",
    category: "temsil-yonetim",
    paragraphs: [
      "Görev süresinde 2 dönemin esas, en fazla 3 dönemin sınır olması öneriliyor.",
      "Öneri, yeni fikirlere ve daha güçlü katılıma alan açmayı, sorumluluğun paylaşılmasını ve temsil görevlerinde yenilenmeyi amaçlıyor.",
    ],
    poster: poster(
      "006-proje-5-donem-siniri",
      "Komite ve temsil görevlerinde dönem sınırı başlıklı paylaşım afişi.",
    ),
  },
  {
    id: "genc",
    slug: "genclerin-temsili",
    title: "Gençlerin Önünü Açmalıyız",
    summary: "Tecrübeyle gençliği aynı masada buluşturan bir temsil istiyoruz.",
    status: "draft",
    order: 8,
    example: "youth",
    category: "temsil-yonetim",
    paragraphs: [
      "Tecrübeyle gençliği aynı masada buluşturan bir temsil modeli öneriliyor.",
      "Gençlerin projeleri ve heyecanlarıyla söz sahibi olması, yeni fikirlere alan açılması hedefleniyor.",
    ],
    poster: poster("007-proje-7-genc-temsil", "Gençlerin önünü açmalıyız başlıklı paylaşım afişi."),
  },
  {
    id: "kapsayici",
    slug: "kapsayici-ve-adil-temsil",
    title: "Herkesi Kucaklayan Oteller Komitesi",
    summary: "Beş yıldızlı, butik, zincir ve bağımsız oteller aynı masada temsil edilsin.",
    status: "draft",
    order: 9,
    example: "inclusive",
    category: "temsil-yonetim",
    paragraphs: [
      "Beş yıldızlı, butik, zincir ve bağımsız otellerin adil biçimde temsil edilmesi hedefleniyor.",
      "Ayrım yapmadan bütün otelleri aynı masada buluşturan bir temsil amaçlanıyor.",
    ],
    poster: poster(
      "008-proje-8-kapsayici-temsil",
      "Herkesi kucaklayan Oteller Komitesi başlıklı paylaşım afişi.",
    ),
  },
  {
    id: "seffaflik",
    slug: "seffaf-komite-yonetimi",
    title: "Şeffaf ve Hesap Verebilir Yönetim",
    summary: "Aidat, faaliyet ve harcamayı üyelerimizle açık paylaşacağız.",
    status: "published",
    order: 10,
    example: "transparency",
    category: "temsil-yonetim",
    paragraphs: [
      "Aidatların, faaliyetlerin ve harcamaların üyelerle düzenli ve açık paylaşılması öneriliyor.",
      "Üye bilgilendirme, mali şeffaflık ve faaliyet raporlarıyla güven veren bir yönetim amaçlanıyor.",
    ],
    poster: poster(
      "009-proje-9-seffaf-yonetim",
      "Şeffaf ve hesap verebilir yönetim başlıklı paylaşım afişi.",
    ),
    closing: "Bu hesap Oteller Komitesi’nin işidir. Üyelerimize açık yazılır.",
  },
  {
    id: "sorun",
    slug: "uye-sorun-takibi-ve-cozum-masalari",
    title: "Üye Sorun Takip Sistemi ve Çözüm Masaları",
    summary: "Üye sorununu takip eden ve çözüm masası kuran bir komite hedefliyoruz.",
    status: "draft",
    order: 11,
    example: "member-desk",
    category: "uye-hizmetleri",
    paragraphs: [
      "Üye sorunlarının takip edildiği ve ortak çözüm masalarının kurulduğu bir komite hedefleniyor.",
      "Haftanın 5 günü, 12 saat erişilebilir iletişim hedefi belirtiliyor. Üyeler temsilcilerine ulaşsın; önemli konularda kurumlarla ve sektör temsilcileriyle çözüm masası kurulsun.",
    ],
    poster: poster(
      "010-proje-10-sorun-takibi",
      "Üye sorun takip sistemi ve çözüm masaları başlıklı paylaşım afişi.",
    ),
  },
  {
    id: "etkinlik",
    slug: "istanbul-etkinlik-sehri",
    title: "İstanbul’u global fuar ve etkinlik şehri yapmak",
    summary:
      "Fuar, kültür ve gastronomi takvimini otellerimizle önceden paylaşacağız. Konaklama bu takvime göre hazırlanacak.",
    status: "published",
    order: 12,
    example: "events",
    category: "uye-hizmetleri",
    paragraphs: [],
    closing:
      "Uluslararası festivalleri, dünyaca ünlü şefleri ve sanatçıları İstanbul’la buluşturacak iş birliğini Kültür ve Turizm Bakanlığı ile kuracağız; otellerimizin bu etkinliklerin konaklama ortağı olmasını sağlayacağız.",
  },
];
