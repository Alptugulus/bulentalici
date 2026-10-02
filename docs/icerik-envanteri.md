# İçerik envanteri

28 Eylül 2026: özgeçmiş, altı proje, dokuz haber ve altı marka `published`. Kaynak eski sitedir. Eski oranlı vaatler, doğrulanmayan oda sayıları, marka siteleri ve kesilen cümlelerin devamı yazılmadı.

Ortak alanlar: `id`, `slug`, `title`, `summary`, `status`, isteğe bağlı `sourceUrl` ve `reviewedAt`. Haberlerde gerçek `publishedAt` ayrıca durur. İnceleme tarihi, haberin ilk yayın tarihi değildir.

## Sayfalar

| Kaynak | Görülen içerik | Yeni hedef | Durum |
|---|---|---|---|
| `/` | Adaylık tanıtımı, kısa özgeçmiş, öne çıkan haber, bülten alanı | `/` | Kimlik, vurgu, özgeçmiş, projeler, üç haber ve portre önizlemesi yayında. Bülten yok |
| `/politika` | Eski vaatler | Yönlendirme yok | Güncel vaat değil. `/politika` 404 |
| `/markalarimiz` | Altı marka | `/markalarimiz` | Yayında. Oda sayısı ve web adresi yok |
| `/galeri` | Fotoğraf galerisi | `/galeri` | 16 portre ve büyütme penceresi. Saha fotoğrafı yok |
| `/haberler` | Basın ve röportaj listesi | `/haberler` | Görülen dokuz kayıt yayında. Arşivin tamamı değil |
| `/post/...` | Haber detayları | `/haberler/<yeni-slug>` | Tekil eski adres eşlenmedi. Kaynak liste sayfası |
| `/i-letisim` | Form ve otel iletişimleri | `/iletisim` | Sayfa var. Telefon, e-posta ve form yok |

Sayfası olan adresler: `/hakkimda`, `/projelerimiz`, `/projelerimiz/[slug]`, `/haberler`, `/haberler/[slug]`, `/galeri`, `/markalarimiz`, `/iletisim`. Kodu olmayan adres: `/gizlilik`.

## Kimlik

| Alan | Değer | Durum |
|---|---|---|
| Ad | Bülent Alıcı | Kullanıcı doğruladı |
| Adaylık unvanı | 16. Oteller Komitesi Başkan ve Meclis Üyesi Adayı | 29 Eylül 2026 teyidi |
| Kurumsal bağlam | İstanbul Ticaret Odası | Bağlam; sitenin İTO’nun resmi sitesi olduğu izlenimi verilmez |
| Şirket içi görev | Eski sitede Eser Hoteller / Eser Oteller Grubu Yönetim Kurulu Başkanı | İş unvanı; adaylık unvanından ayrı, yazım teyidi gerekir |

## Özgeçmiş

Kaynak: Bülent Alıcı ile paylaşılan tanıtım, 28 Eylül 2026. Durum: `published`. Eski “Konya doğumlu” ve yüksek lisans cümlesi bu metinle değişti.

- 1975, İstanbul doğumlu; aslen Konyalı; evli, üç çocuk.
- Vefa Anadolu Lisesi. İşletme eğitimi Londra’da London City University’de başladı, Girne Amerikan Üniversitesi’nde tamamlandı. Okul adı kullanıcı 28 Eylül 2026’da verdi.
- İsmail Alıcı, 1969’da İstanbul. 2000’den beri şirketlerin yönetim kurulu başkanlığı.
- Sektörler: turizm, gayrimenkul geliştirme, lojistik, inşaat.
- Şirket görevi: Eser Oteller Yönetim Kurulu Başkanı.
- Tanıtım cümlesinde “Başkan ve Meclis Üyesi Adayı” geçer. Site başlığı “16. Oteller Komitesi Meclis Üyesi Adayı” olarak durur.

## Eski vaatler (`/politika`)

Güncel taahhüt olarak kullanılmaz. Oran, yetki ve zaman ifadeleri doğrulanmadı. Yeni altı başlıkla birleştirilmez.

Konular: elektrik indiriminin küçük işletmeye de uygulanması; banka teminat mektupları; güneş paneli ve arazi tahsisi; ciro vergisi ve şehir vergisi; Bakırköy kongre vadisi; turizm öğrencisi bursları. Kaynak metindeki oranlar belgeye rakam olarak işlenmedi.

## Yeni proje başlıkları

Durum: `published`. 28 Eylül 2026 akşamı sekiz başlık. Eski `/politika` oranları bu başlıklara katılmadı. Vergi sayfasındaki yüzde 10’dan yüzde 5’e hedefi, kullanıcı 28 Eylül 2026 öğleden sonra verdi. Aynı gün metinler kampanya cümlesine çekildi. Enerji indirim sözü değildir. Şeffaflıkta uydurma harcama satırı yoktur.

| Sıra | Başlık | Kısa yön |
|---|---|---|
| 1 | Enerji maliyetlerinin düşürülmesi | `/projelerimiz/enerji-ve-isletme-maliyetleri` |
| 2 | İstanbul Rezervasyon Platformu | `/projelerimiz/istanbul-rezervasyon-platformu` |
| 3 | Basit Konaklama Belgeli Otellere SGK Prim Desteği | `/projelerimiz/basit-konaklama-sgk-prim-destegi` |
| 4 | Turizmde vergi yükünün azaltılması | `/projelerimiz/turizmde-vergi-yuku` |
| 5 | Yapay zekâ ve dijital dönüşüm | `/projelerimiz/yapay-zeka-ve-dijital-donusum` |
| 6 | İstanbul’u global fuar ve etkinlik şehri yapmak | `/projelerimiz/istanbul-etkinlik-sehri` |
| 7 | Otelcinin odasını hak ettiği fiyata satması | `/projelerimiz/oda-geliri` |
| 8 | Şeffaf ve proje odaklı komite yönetimi | `/projelerimiz/seffaf-komite-yonetimi` |

Eski adresler 404: `finansmana-erisim`, `nitelikli-personel`, `dijitallesme`, `bolgesel-sorunlarin-takibi`, `seffaf-temsil`. Yeni başlıklara yönlendirilmedi.

Enerji sayfası örnek fatura hesabını korur. Kesin indirim taahhüdü yazılmaz.

2 Ekim 2026: Quality of Magazine, Ekim 2026, sayı 208. Kapak ve iki iç sayfa. Başlık “Otelcinin kaybedecek bir dört yıl daha yok”. Kapak satırı “Sektöre hizmet için adayım.”

## Haber listesi (kısmi)

Liste sayfasında görülen başlıklar. Yıl çoğu satırda yok. “0 dakikada okunur” olanlar büyük olasılıkla görsel ağırlıklı; yapay haber metniyle doldurulmayacak. Arşivin tamamı bu dokuz kayıt değildir.

| Başlık | Listede görülen tarih | Not |
|---|---|---|
| Bülent Alıcı Paravizyon Röportajı | 3 Ağu | Süre 0 dk |
| Bülent Alıcı Tüketici Dergisi Röportajı | 3 Ağu | Süre 0 dk |
| Bülent Alıcı Turizm Ajansina Konuştu | 3 Ağu | Basit belgeli otel / SGK ifadesi; arşiv unvanı “Başkan adayı” |
| İTO Oteller Komitesi'nde değişim rüzgarı! | 3 Ağu | Arşiv unvanı farklı olabilir |
| Bülent Alıcı Hotel Gazetesine Konuştu | 3 Ağu | SGK prim desteği |
| Bülent Alıcı Turizm Aktüel Röpörtajı | 22 Nis | |
| Bülent Alıcı Turizm Aktüel e Konuştu | 22 Nis | Metinde 2026 ITB Berlin geçiyor |
| Bülent Alıcı Hotel Gazetesine Konuştu | 22 Nis | Süre 0 dk; önceki Hotel Gazetesi kaydından ayrı görünüyor |
| Bülent Alıcı Klass Magazine Konuştu | 22 Nis | |

Prompttaki 11 Şubat 2024 örnek kaydı bu listede görünmedi. Tekil sayfalar ve `legacyPath` değerleri sonraki içerik aktarımında eşlenecek.

## Markalar

Durum: `published`. Resmi web adresleri ve oda sayıları yazılmadı.

| Marka | Kaynak notu |
|---|---|
| Eser Premium Hotel | Büyükçekmece; 172 oda / 434 yatak ifadesi doğrulanmadı |
| Eser Diamond Hotel | 218 oda / 550 yatak ifadesi doğrulanmadı |
| The City Hotel | Taksim / metro anlatımı |
| The City Port Hotel | Kaynak metin The City Hotel ile aynı görünüyor |
| Harem Kebap | Eser Premium içi; kaynakta yazım hatası var |
| Monkeys | Eser Premium giriş katı olarak anlatılıyor |

Kapasite rakamları eski site metnidir; yeni sitede doğrulanmadan yinelenmez.

## Galeri, görseller, iletişim

28 Eylül 2026’da 16 portre siteye alındı. Karşılama, hakkımda, proje prototipleri ve `/galeri` bu kareleri kullanır. Uzun kenar en çok 1800 px. Saha, toplantı ve otel fotoğrafı yok. Logo yok. Kökteki orijinal dosyalar kaynak kopyadır.

İletişim: kampanya telefonu, e-posta ve sosyal hesaplar teyitsiz. Instagram adresi eski sitede görüldü, yeni yayın için onaylanmadı. `twitter.com/wix` taşınmaz. Otel adresi ve `info@eserhotel.com.tr` kampanya alıcısı yapılmaz.

Bülten ve yorumlar envanterde, kapalı. Gizlilik metni, veri toplanacaksa gerçek akışa göre ayrıca yazılır.
