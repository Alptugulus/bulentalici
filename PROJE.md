# Bülent Alıcı — proje sözleşmesi

Yeniden geliştirilecek site, İstanbul Ticaret Odası bağlamında **Bülent Alıcı** için güven veren, sade bir aday tanıtım sitesidir. Referans: [bulentalici.com.tr](https://www.bulentalici.com.tr/). Mevcut site yeni tasarımla, gerçek Next.js kullanılarak yeniden kurulacak. Dil Türkçedir; ilk sürümde çoklu dil yoktur.

## Doğrulanmış bilgiler

Kullanıcının doğruladığı adaylık unvanı tek kaynaktır: **16. Oteller Komitesi Meclis Üyesi Adayı**.

“Yönetim Kurulu Başkanı” şirket içi bir iş unvanıdır; adaylık unvanı değildir. Eski sitede “Başkan adayı”, “Turizm Komitesi” ve “Meclis Üyeliğine Adayım” gibi farklı ifadeler vardır. Yeni arayüz doğrulanmış unvanı kullanır. Arşiv haberi ve alıntı sessizce yeniden yazılmaz.

Klasör adlarındaki “İTO Başkanlık” ifadesi unvan kaynağı değildir.

## Kapsam

İlk sürüm: ana sayfa, özgeçmiş, projeler listesi ve detayları, haberler listesi ve detayları, galeri, markalar, iletişim, temel arama motoru metadata’sı, eski adres geçişleri ve erişilebilir mobil tasarım.

İlk sürüme kendiliğinden eklenmez: yönetim paneli, üyelik, bağış, ödeme, destekçi kaydı, CRM, chatbot, çoklu dil, gelişmiş arama, ziyaretçi profilleme, otomatik sosyal paylaşım, otomatik e-posta kampanyası, mobil uygulama, karmaşık animasyon.

Bülten alanı ve haber yorumları envanterdedir. Kullanım ve hizmet doğrulanmadığı için ilk uygulamada açılmaz.

## Ana kararlar

- Geliştirme parçalıdır. Aktif aşama `docs/ilerleme.md` içindedir. Bir aşama bitince durulur.
- İçerik dosya tabanlı başlar. WordPress veya başka bir CMS, kurulumu doğrulanmadan bağlanmaz.
- İçerik durumları: `draft` ve `published`. Yeni sitede henüz yayımlanmış içerik yoktur. Arayüz dolsun diye kayıt `published` yapılmaz.
- Üretimde taslaklar sunucu tarafında elenir; CSS ile gizlemek yeterli değildir.
- Yeni fotoğraflar kullanıcıdan gelecek. Yapay portre, stok kişi veya eski fotoğraf nihai görsel sayılmaz.
- Kampanya telefonu ve e-postası doğrulanmadan otel rezervasyon iletişimi kullanılmaz.
- Teknik ayrıntı, açık kararlar ve kaynak sınırları: `docs/kararlar.md`, `docs/mevcut-site-analizi.md`, `docs/icerik-envanteri.md`.
