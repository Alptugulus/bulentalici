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
      "Quality of Magazine’in Ekim 2026, sayı 208 kapağında Bülent Alıcı yer alıyor. Kapak satırı “Sektöre hizmet için adayım.”",
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
    id: "haber-10",
    slug: "gumbur-gumbur-geliyoruz",
    title: "Gümbür gümbür geliyoruz",
    summary:
      "Turizm Güncel’in 11 Eylül 2026 haberinde Bülent Alıcı’nın “Otelcinin kaybedecek bir dört yılı daha yok” röportajı aktarılıyor.",
    status: "published",
    order: 2,
    listedOn: "11 Eylül 2026",
    sourceName: "Turizm Güncel",
    sourceUrl:
      "https://www.turizmguncel.com/haber/ito-oteller-komitesi-secimlerinde-aday-olan-bulent-alicidan-dikkat-ceken-cikis",
    contentType: "text_and_image",
    images: [
      image(
        "turizm-guncel-gumbur-gumbur",
        768,
        1024,
        "Turizm Güncel haberi. Başlık: Gümbür gümbür geliyoruz.",
      ),
    ],
  },
  {
    id: "haber-09",
    slug: "hotel-gazetesi-2026-degisim-cagrisi",
    title: "Bülent Alıcı’dan değişim çağrısı",
    summary:
      "Hotel Gazetesi’nin Eylül 2026, sayı 46, yıl 11 sayısında Bülent Alıcı yer alıyor. Röportaj başlığı “Otelcinin kaybedecek bir dört yılı daha yok.” Sayfalar 10 ve 11.",
    status: "published",
    order: 3,
    listedOn: "9 Eylül 2026",
    sourceName: "Hotel Gazetesi",
    sourceUrl:
      "https://otelgazetesi.com/2026/09/09/bulent-alicidan-degisim-cagrisi-sgkdan-enerjiye-vergiden-komisyona-otelcinin-kaybedecek-bir-dort-yili-daha-yok/",
    contentType: "text_and_image",
    images: [
      image(
        "hotel-gazetesi-2026-eylul-kapak",
        837,
        1024,
        "Hotel Gazetesi Eylül 2026, sayı 46, yıl 11 kapağı. Bülent Alıcı ve “Otelcinin kaybedecek bir dört yılı daha yok” satırı.",
      ),
      image(
        "hotel-gazetesi-2026-eylul-sayfa-10",
        837,
        1024,
        "Hotel Gazetesi röportajı, sayfa 10. Başlık: Otelcinin kaybedecek bir dört yılı daha yok.",
      ),
      image(
        "hotel-gazetesi-2026-eylul-sayfa-11",
        837,
        1024,
        "Hotel Gazetesi röportajının devamı, sayfa 11.",
      ),
      image(
        "hotel-gazetesi-2026-eylul-kart",
        1024,
        592,
        "Hotel Gazetesi kartı. Başlık: Bülent Alıcı’dan değişim çağrısı.",
      ),
    ],
  },
  {
    id: "haber-11",
    slug: "ito-proje-ve-cozum",
    title: "İTO Oteller Komitesi'nde artık sorunları çözen proje üretme zamanı",
    summary:
      "Turizm Güncel’in 6 Ağustos 2026 haberinde Bülent Alıcı, İTO 16. Oteller Komitesi’nin proje ve çözüm üretmesi gerektiğini söylüyor.",
    status: "published",
    order: 4,
    listedOn: "6 Ağustos 2026",
    sourceName: "Turizm Güncel",
    sourceUrl:
      "https://www.turizmguncel.com/haber/eser-otelleri-yonetim-kurulu-baskani-bulent-alici-itoyu-proje-ve-cozum-ureten-bir-yere-donusturecegiz",
    contentType: "text_and_image",
    images: [
      image(
        "turizm-guncel-proje-kapak",
        1024,
        640,
        "Turizm Güncel özel haber kapağı. Bülent Alıcı masada.",
      ),
      image(
        "turizm-guncel-proje-ayakta",
        1024,
        937,
        "Bülent Alıcı, ayakta.",
      ),
      image(
        "turizm-guncel-proje-oturarak",
        1024,
        739,
        "Bülent Alıcı, otururken.",
      ),
    ],
    body: [
      {
        text: "27 Ekim'de yapılacak İTO 16. Oteller Komitesi Başkanlığı ve Meclis Üyeliği için aday olan Eser Otelleri Yönetim Kurulu Başkanı Bülent Alıcı, sektörle ilgili değerlendirmelerde bulunurken seçimi kazanması durumunda hedeflerini de anlattı. Alıcı, İTO'yu proje ve çözüm üreten bir yere dönüştüreceklerini söyledi. Şu anki yönetime seslenerek “İstanbul turizmine ne katkı sağladınız?” sorusunu yöneltti.",
      },
      {
        text: "Türkiye turizminin son yıllarda bir ivme yakaladığına dikkat çeken Alıcı, “Ancak artık başarıyı yalnızca turist sayısıyla değil, turizmden elde edilen ekonomik değerle ölçmek zorundayız. Turizm; otellerden restoranlara, esnaftan ulaşıma, üreticiden kültür ve sanat sektörüne kadar geniş bir ekonomik zinciri besleyen stratejik bir alandır.” dedi. Sektörü ilgilendiren her olumlu gelişmeyi desteklediklerini, eksik noktaları ise “Yapıcı bir anlayışla dile getiriyoruz.” sözleriyle anlattı.",
      },
      {
        heading: "SGK desteğinin kapsamı genişlemeli",
        text: "Çalışma ve Sosyal Güvenlik Bakanlığı tarafından açıklanan SGK prim desteği kararının sektör için çok önemli olduğunu belirten Alıcı, desteğin kapsamının genişletilmesini istedi. “Yayımlanan genelgede desteğin yalnızca Turizm İşletmesi Belgeli tesisleri kapsaması, İstanbul’da faaliyet gösteren yaklaşık 1.900 Basit Konaklama Turizm İşletmesi Belgeli tesisi kapsam dışında bırakmıştır.”",
      },
      {
        text: "Bu işletmelerin de Kültür ve Turizm Bakanlığı denetiminde faaliyet gösterdiğini vurgulayan Alıcı şunları söyledi: “Bu işletmeler SGK primlerini ve vergilerini düzenli olarak ödemekte, binlerce kişiye istihdam sağlamaktadır. Aynı sektörde faaliyet gösteren işletmeler arasında yalnızca belge türüne göre ayrım yapılmasının doğru olmadığına inanıyoruz. Beklentimiz; genelgenin kapsamının genişletilerek Basit Konaklama Turizm İşletmesi Belgeli tesislerin de sigorta primi desteğinden yararlandırılmasıdır. Turizmde güçlü bir gelecek inşa etmek istiyorsak, destekler de kapsayıcı ve adil olmalıdır.”",
      },
      {
        heading: "Gerçek başarı, bırakılan ekonomik değerdir",
        text: "“Bugün artık ‘kaç turist geldi?’ sorusunun ötesine geçmeliyiz. Asıl sormamız gereken soru şudur: İstanbul’a gelen turist şehrimize ne kadar ekonomik değer bırakıyor? Gerçek başarı, otelleri düşük fiyatlarla doldurmak değil; kaliteli turistle, yüksek katma değer üreten bir turizm modeli oluşturmaktır. Turistin yaptığı harcama yalnızca otellere değil; restoranlara, kafelere, mağazalara, ulaşım sektörüne ve binlerce esnafa katkı sağlar. Bu nedenle turizm politikaları şehir ekonomisini büyütecek projeler üzerine kurulmalıdır.”",
      },
      {
        heading: "Yerli dijital rezervasyon platformu",
        text: "Sektörde yerli ve milli bir dijital rezervasyon platformu kurulmasının zorunluluk olduğunu söyleyen Alıcı, “Bugün milyonlarca avroluk rezervasyon komisyonu yurt dışındaki platformlara ödenmektedir. Türkiye’nin, İTO öncülüğünde kamu ve özel sektör iş birliğiyle güçlü bir yerli dijital rezervasyon platformu kurması artık stratejik bir ihtiyaçtır. Bu sistem hem işletmelerimizin maliyetlerini düşürecek hem de ülkemizde üretilen ekonomik değerin yurt içinde kalmasını sağlayacaktır.” dedi.",
      },
      {
        heading: "Dijital dönüşüm ve yapay zekâ",
        text: "Turizmde büyük bir dijital dönüşüm yaşandığını ve sektörün yapay zekâ destekli sistemlerle yönetildiğini belirten Alıcı, İTO 16. Oteller Komitesi’nin en önemli görevlerinden birinin sektörü bu dönüşüme hazırlamak olduğunu söyledi. Seçimi kazanması durumunda otellere eğitim, danışmanlık ve teknoloji iş birlikleri kazandıracak projeleri hayata geçirmeyi öncelikleri arasında saydı.",
      },
      {
        text: "İstanbul’un, tarihî mirası, kültürü ve coğrafi konumuyla dünyanın en güçlü turizm şehirlerinden biri olduğunu söyleyen Alıcı, bu potansiyelin daha yüksek gelire dönüşmesi için uluslararası kongreler, fuarlar, gastronomi festivalleri, spor organizasyonları ve dünyaca ünlü sanatçıların katılacağı etkinlikler planlanması gerektiğini belirtti. “Turistin konaklama süresini uzatacak ve şehir ekonomisine daha fazla katkı sağlayacak projeler geliştirilmelidir.”",
      },
      {
        heading: "İTO proje ve çözüm üreten bir yer olmalı",
        text: "“İTO’nun görevi yalnızca sektörün sorunlarını dile getirmek değildir. Görevi; ilgili bakanlıklarla, kamu kurumlarıyla ve sektör temsilcileriyle birlikte çözüm üretmek, projeler geliştirmek ve bunların takipçisi olmaktır. Biz, komitenin bu anlayışla çalışması gerektiğine inanıyoruz.”",
      },
      {
        heading: "İstanbul turizmine ne katkı sağladınız?",
        text: "İTO 16. Oteller Komitesi’nde görev yapan kişilere sektör adına sorular yönelten Alıcı, “Artık hesap verme ve şeffaflık zamanıdır.” dedi. “Yıllardır İTO 16. Oteller Komitesi’nde görev yapan arkadaşlarımıza sektörümüz adına şu soruyu yöneltmek istiyoruz: Görev yaptığınız süre boyunca otelcilik sektörümüz adına hangi somut projeleri hayata geçirdiniz? Hangi sorunların çözümüne öncülük ettiniz? İstanbul turizmine ve otel işletmelerine hangi kalıcı katkıları sağladınız? Sektörümüz bu soruların cevaplarını bilmek istemektedir. Çünkü temsil makamları, yapılan çalışmaların şeffaf bir şekilde paylaşılmasını ve hesap verebilir olmayı gerektirir. Biz eleştirmek için değil, daha iyisini yapmak için yola çıktık. Ancak sektörümüz artık sadece konuşan değil; proje üreten, sonuç alan ve düzenli olarak hesap veren bir yönetim anlayışı beklemektedir.”",
      },
      {
        heading: "28 Ekim’den sonra yeni bir sayfa",
        text: "“28 Ekim’de sektörümüzün desteğiyle göreve geldiğimiz takdirde, İTO 16. Oteller Komitesi’nde şeffaf, katılımcı ve hesap verebilir bir yönetim anlayışını hayata geçireceğiz. Yapacağımız her çalışma, gerçekleştireceğimiz her resmi görüşme, hazırlayacağımız her proje ve elde edeceğimiz her sonuç sektörümüzle düzenli olarak paylaşılacaktır. Ayrıca belirli aralıklarla faaliyet raporları yayımlayacak, üyelerimizi yapılan çalışmalar hakkında düzenli olarak bilgilendireceğiz. İTO 16. Oteller Komitesi, kapalı kapılar ardında çalışan değil; üyeleriyle sürekli iletişim kuran, ortak akılla hareket eden örnek bir komite olacaktır. Çünkü biz temsilin yalnızca seçim dönemlerinde değil, görev süresinin her gününde sorumluluk gerektirdiğine inanıyoruz.”",
      },
      {
        heading: "Vizyon",
        text: "“Bizim hedefimiz yalnızca bir seçimi kazanmak değildir. Hedefimiz; İstanbul turizmine değer katacak projeleri hayata geçirmek, sektörümüzün her kesimini adil şekilde temsil etmek ve otelcilerimizin güçlü sesi olmaktır. Turizm güçlenirse oteller kazanır. Oteller kazanırsa çalışan kazanır. Çalışan kazanırsa esnaf kazanır. Esnaf kazanırsa İstanbul kazanır. İstanbul kazanırsa Türkiye kazanır. Artık değişim bir tercih değil, sektörümüzün geleceği için bir zorunluluktur.”",
      },
    ],
  },
  {
    id: "haber-08",
    slug: "hotel-gazetesi-2026-dayaniklilik",
    title: "2026 Dayanıklılık Yılı Olacak",
    summary:
      "Hotel Gazetesi’nin Şubat 2026, sayı 45, yıl 11 sayısında Bülent Alıcı yer alıyor. Röportaj başlığı “2026 Dayanıklılık Yılı Olacak.” Sayfalar 6 ve 7.",
    status: "published",
    order: 10,
    listedOn: "Şubat 2026",
    sourceName: "Hotel Gazetesi",
    sourceUrl: "https://otelgazetesi.com/2026/02/23/bulent-alici-2026-dayaniklilik-yili-olacak/",
    contentType: "text_and_image",
    images: [
      image(
        "hotel-gazetesi-2026-kapak",
        1308,
        1600,
        "Hotel Gazetesi Şubat 2026, sayı 45, yıl 11 kapağı. Bülent Alıcı ve “2026 Dayanıklılık Yılı Olacak” satırı.",
      ),
      image(
        "hotel-gazetesi-2026-sayfa-6",
        1308,
        1600,
        "Hotel Gazetesi röportajı, sayfa 6. Başlık: 2026 Dayanıklılık Yılı Olacak.",
      ),
      image(
        "hotel-gazetesi-2026-sayfa-7",
        1308,
        1600,
        "Hotel Gazetesi röportajının devamı, sayfa 7.",
      ),
    ],
  },
  {
    id: "haber-01",
    slug: "paravizyon-roportaji",
    title: "Bülent Alıcı Paravizyon Röportajı",
    summary: "",
    status: "published",
    order: 7,
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
    order: 8,
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
    title: "Belge ayrımı değil, eşit destek anlayışının hakim olmasını istiyoruz",
    summary:
      "Bülent Alıcı, turizm sektörüne yönelik sigorta primi desteğinin basit konaklama belgeli tesisleri de kapsamasını talep ediyor. Haberde İstanbul’daki yaklaşık 1.900 tesisin mevcut düzenlemeden yararlanamadığı belirtiliyor. Alıcı, bu işletmelerin de bakanlığa bağlı çalıştığını, SGK yükümlülüklerini yerine getirdiğini ve istihdam sağladığını vurgulayarak destek kapsamının genişletilmesini savunuyor.",
    status: "published",
    order: 5,
    listedOn: "3 Ağu",
    sourceName: "Turizm Ajansı",
    sourceUrl:
      "https://www.turizmajansi.com/haber/bulent-alici-belge-ayrimi-degil-esit-destek-anlayisinin-hakim-olmasini-istiyoruz-h73411",
    contentType: "text_and_image",
    images: [
      image("turizm-ajansi-kapak", 1168, 876, "Turizm Ajansı haberinin kapak görseli."),
    ],
  },
  {
    id: "haber-04",
    slug: "hotel-gazetesi",
    title: "Prim desteği basit konaklama belgeli tesisleri de kapsamalı",
    summary:
      "Haberde Alıcı’nın SGK prim desteğinde tesislerin belge türüne göre ayrılmaması yönündeki çağrısı aktarılıyor. İstanbul’da yaklaşık 1.900 basit konaklama belgeli işletmenin vergi, kayıtlı istihdam ve turizm katkısı bakımından değerlendirilmesi gerektiği belirtiliyor. Desteklerin yasal olarak faaliyet gösteren tüm konaklama tesislerine yayılması isteniyor.",
    status: "published",
    order: 6,
    listedOn: "3 Ağu",
    sourceName: "Hotel Gazetesi",
    sourceUrl:
      "https://otelgazetesi.com/2026/08/03/bulent-alicidan-cagri-prim-destegi-basit-konaklama-belgeli-tesisleri-de-kapsamali/",
    contentType: "text_and_image",
    images: [
      image("hotel-gazetesi-kapak", 1140, 660, "Hotel Gazetesi haberinin kapak görseli."),
    ],
  },
  {
    id: "haber-12",
    slug: "hotel-gazetesi-adaylik-aciklamasi",
    title: "İTO 16. Oteller Komitesi başkanlığına adaylığını açıkladı",
    summary:
      "Hotel Gazetesi’nin 10 Temmuz 2026 haberinde Bülent Alıcı, 2026 Ekim’inde yapılacak İstanbul Ticaret Odası seçimlerinde 16. Oteller Komitesi Komite Başkanlığı ve Meclis Üyeliği için aday olduğunu duyuruyor.",
    status: "published",
    order: 9,
    listedOn: "10 Temmuz 2026",
    sourceName: "Hotel Gazetesi",
    sourceUrl: "https://otelgazetesi.com/2026/07/10/bulent-alici-ito-16-oteller-komitesi-baskanligina-adayligini-acikladi/",
    contentType: "text_and_image",
    images: [
      image(
        "hotel-gazetesi-adaylik",
        1024,
        592,
        "Hotel Gazetesi kartı. Başlık: Bülent Alıcı, İTO 16. Oteller Komitesi başkanlığına adaylığını açıkladı.",
      ),
    ],
  },
  {
    id: "haber-05",
    slug: "turizm-aktuel",
    title: "Bülent Alıcı Turizm Aktüel Röpörtajı",
    summary:
      "Alıcı, İstanbul turizminin başarısının doluluk kadar ziyaretçilerin şehirde bıraktığı ekonomik değerle ölçülmesini savunuyor. Önerileri arasında yerli rezervasyon platformu, doğrudan satışların artırılması ve aracı maliyetlerinin azaltılması bulunuyor. Fuar, kongre, ulaşım ve konaklamanın birlikte planlanması; uluslararası tanıtım, etkinlikler ve şehir deneyimleriyle talebin yıl geneline yayılması öneriliyor. İlçelerin farklı turizm potansiyellerine göre gelişmesi ve dijital gelir yönetimi de ele alınıyor. Metin, 2026 İTO seçimleri bağlamında sektörün ortak hareket etmesi ve kamu ile iletişimin güçlendirilmesi çağrısını içeriyor. Konaklama vergisinin azaltılması veya kaldırılması bir öneri olarak sunuluyor.",
    status: "published",
    order: 11,
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
    order: 12,
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
