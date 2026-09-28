# Kararlar

## Seçilmiş

| Konu | Karar |
|---|---|
| Ürün | Mevcut tanıtım sitesinin Next.js ile yeniden kurulması |
| Unvan | Yeni arayüzde yalnızca “16. Oteller Komitesi Meclis Üyesi Adayı” |
| Dil | Türkçe; ilk sürümde tek dil |
| Çalışma biçimi | Aşama bitince dur. Sıradaki aşama “Devam” ile başlar |
| Stack (Aşama 1’de kurulacak) | Next.js App Router, TypeScript strict, Tailwind. Kararlı sürümler o aşamada resmi dokümantasyonla doğrulanır. Deneysel sürüm yok |
| İçerik | Dosya tabanlı başlangıç. `draft` / `published`. Üretimde taslak sızmaz |
| Tasarım başlangıcı | Lacivert `#10253F`, beyaz `#FFFFFF`, yüzey `#F3F6FA`, vurgu `#2563EB`, metin `#172B4D`. Renkler CSS değişkenlerinde. Yazı: Inter uygunsa, değilse sistem sans-serif. Gövde en az 16 px |
| Karşılama | İlk başlık isim ve doğrulanmış unvandır. Eski slogan onaysızdır. “Değişim şart.” ve “Mavi listede buluşalım.” kullanıcı 28 Eylül 2026’da tasarım vurgusu olarak verdi; unvanın yerini almaz. Giriş `4.JPG` üzerindedir; imza ve altındaki şirket görevi de görselin üzerindedir. Bu görev adaylık unvanı değildir |
| Menü | Ana Sayfa, Hakkımda, Sözümüz, Projelerimiz, Haberler, Galeri, İletişim. Markalarımız Hakkımda ve alt bilgiden |
| Görseller | Fotoğraf yokken işaretli yerel alan. Yapay portre yok |
| Form ve bülten | Hizmet bağlanmadan yok. Sahte başarı yok |
| İzleme | Analitik, reklam veya çerez katmanı ihtiyaç doğrulanmadan eklenmez |
| Yönlendirme | Kalıcı Next yönlendirmesi 308’dir; 301 diye raporlanmaz. Eşleme dosyası arşiv tamamlanınca `docs/url-eslestirme.csv` olur |
| Yayın | Aşama 8, kullanıcı başlatmadan yapılmaz |
| İndeksleme | Üretim alan adı yokken `noindex, nofollow`; canonical üretilmez |

Başlangıç adres eşlemesi (henüz uygulanmadı): `/` aynı; `/politika` → `/projelerimiz`; `/i-letisim` → `/iletisim`; `/haberler`, `/galeri`, `/markalarimiz` aynı; `/post/<eski-slug>` kayıt bazında `/haberler/<yeni-slug>`.

## Tasarım yönü

Güven veren, sade, mesleki bir aday sitesi. Geniş ekranda solda isim, unvan ve kısa anlatım; sağda gerçek portre. Mobilde üst üste, kesilen metin yok. Birincil bağlantı “Projelerimiz”, ikincil “Bülent Alıcı'yı Tanıyın”. Otomatik kaydırıcı, otomatik video ve yoğun animasyon yok. İTO logosu, kullanım netleşmeden eklenmez. Önemli yazı görsele gömülmez.

Eski slogan taslağı, yalnızca ayrıca onay gelirse: “Otellerimizin sorunlarını biliyor, çözüm için sorumluluk alıyoruz.” Bu cümle arayüzde yok.

28 Eylül 2026 vurgusu, karşılama ve alt bilgide: “Değişim şart.” ve “Mavi listede buluşalım.” Mavi listenin kurumsal açıklaması yazılmadı.

Aynı gün tanıtım metni, Bülent Alıcı ile paylaşılan açıklamadır. Kapanış: “Daha güçlü bir temsil, daha güçlü bir sektör için değişim şart.” Site başlığındaki unvan değişmedi.

Proje yüzeyi, 28 Eylül 2026 akşamı: sekiz başlık. Sayfa sırası amaç cümlesi, konuya uygun anlatım ve gerekiyorsa tek kapanış cümlesidir. Enerji birinci sırada ve eski adresindedir. Eski beş proje adresi 404’tür; yeni başlıklara eşlenmedi.

Aynı gün öğleden sonra dil: net cümle, “otellerimiz” ve “misafirimiz”; samimi, kurumsal çizgide. Vergi hedefi kullanıcının verdiği oranlardır: yüzde 10’dan yüzde 5’e. Yapay zekâ sayfasında ayrıntılı otel ve güzergâh örneği yoktur; başlıklar rezervasyon, ulaşım ve en az iki dilde şehir turudur.

28 Eylül 2026 akşamı söz ekranı: `/sozumuz`. Metin ve siyah mektup düzeni kullanıcıdan geldi. İmzadaki şirket görevi adaylık unvanı değildir. Mektup kapanışı “Eser Hoteller ve Eser Yapı Yönetim Kurulu Başkanı” satırını kullanıcının yazdığı biçimde taşır. “16. Turizm Komitesi” yeni arayüze yazılmaz; unvan “16. Oteller Komitesi Meclis Üyesi Adayı”dır. Komite bütçesi cümlesi Oteller Komitesi olarak yazıldı. Ciro vergisi binde 7,5’ten en az binde 3,5’e ve şehir vergisinin kabul edilmemesi bu mektuba aittir. Proje sayfasındaki yüzde 10’dan yüzde 5 hedefi durur; iki oran birbiriyle değiştirilmedi. Güneş panelinde arazi tahsisi “bakanlık” olarak kaldı; bakanlık adı verilmediği için eklenmedi. Burs oranı yüzde 25, kongre vadisi ve nöbetçi noter örneği kullanıcının cümlesidir.

28 Eylül 2026 gece tasarım bütünlüğü: lacivert, beyaz ve mavi duruyor. Sayfa başlığı, kart ve bağlantı ölçüsü ortak. Proje sahneleri temsili ve metinsizdir; başlık görselin üstünde HTML’dir. Sözümüz aynı akşam siyah mektup düzeninden çıkarıldı; metin durur, zemin site renkleridir, imza ana sayfadaki dosyadır.

28 Eylül 2026 akşamı haberler: paylaşılan paketteki altı kayıt. Kapaklar yerel dosyadır. Görünür tarih yıl içermez. Yazılı gövdesi olmayan röportajlar sayfa görseli olarak durur. Kaynak adresi eski site haber sayfasıdır.

Aynı gün kampanya cümlesi: her projede hedef ve adım yazılır. Enerji muhatabı Enerji ve Tabii Kaynaklar Bakanlığı, Kültür ve Turizm Bakanlığı ve sektörün sivil toplum kuruluşlarıdır; ortak dilde toplantı yapılacaktır. Vergi muhatabı Hazine ve Maliye Bakanlığı’dır; dosya Kültür ve Turizm Bakanlığı ile hazırlanır. SGK talebi Sosyal Güvenlik Kurumu ve Çalışma ve Sosyal Güvenlik Bakanlığı’nadır. Etkinlik iş birliği Kültür ve Turizm Bakanlığı iledir. Platform, yapay zekâ, oda geliri ve şeffaflık Oteller Komitesi ile otelcinin işidir. Belirli STK adı, enerji yüzdesi, SGK tutarı, etkinlik adı ve harcama tutarı uydurulmaz.

## Açık kararlar

Aynı sorular yeniden sorulmaz. İlgili aşamada netleşir.

| Karar | Ne zaman | O zamana kadar |
|---|---|---|
| Nihai vaatler | Ayrıca onay | 28 Eylül 2026’da özgeçmiş, altı çalışma başlığı, dokuz haber ve altı marka eski siteden yayına alındı. `/politika` oranları katılmadı |
| Yeni portre, saha fotoğrafları, logo | Görseller | İşaretli fotoğraf alanı |
| İçeriği kim güncelleyecek | Aşama 5 | Dosya tabanlı içerik |
| WordPress adresinin varlığı | Aşama 5 | Kurulum doğrulanmadı; API varmış gibi kod yazılmaz |
| Kampanya telefonu, e-posta, sosyal hesaplar | İletişim | Otel iletişimi kullanılmaz |
| Form ve bülten | Entegrasyon | Sahte gönderim yok |
| Barındırma ve alan adı | Yayın hazırlığı | Yerel geliştirme |
| Seçim tarihi | İçeriğe eklenirse | Sayım sayacı eklenmez |
| Alt bilgi yayıncısı | Yayın öncesi | Eski Eser Group satırı kopyalanmaz |
| Gizlilik metni | Veri toplanacaksa | Banner veya analitik eklenmez |
