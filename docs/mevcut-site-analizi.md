# Mevcut site analizi

Bu belge başlangıç envanteridir. Tam içerik aktarımı tamamlanmış değildir.

## Kaynaklar ve sınır

| Kaynak | Bu oturum | Sınır |
|---|---|---|
| `CURSOR_ANA_PROMPT.md` içindeki 26 Eylül 2026 tarayıcı analizi | Proje belgelerine aktarıldı | Yönetim paneli, veritabanı, form teslimi, ziyaretçi verisi ve tam arşiv incelenmemişti |
| Canlı sayfa metinleri, 26 Eylül 2026 | `/`, `/politika`, `/markalarimiz`, `/haberler`, `/galeri`, `/i-letisim` metin olarak alındı | Görsel varlıkları, sosyal simge hedefleri, mobil yerleşim ve tek tek haber sayfaları yeniden ölçülmedi |
| Bu depo | Yalnızca ana prompt vardı | Git yok; `AGENTS.md`, README, `.cursor/rules`, `sources/` yoktu |
| `../BulentAlıcıITO16.seçim` | Salt okunur bakıldı | WordPress değil. Sunum, baskı ve poster arşivi. Site içeriği olarak içe aktarılmadı |

WordPress kurulumu bu depoda ve bakılan komşu klasörde yok. Kullanıcının andığı WordPress projesi ile referans sitenin aynı kurulum olduğu doğrulanmadı. Prompttaki tarayıcı gözlemi `static.wixstatic.com` bağlantıları gördüğünü belirtiyor; bu oturumdaki metin çekimi Wix dosyalarını ayrıca doğrulamadı. Altyapı bu nedenle kesin hüküm değildir.

## Tarayıcı analizi (prompt, yeniden ölçülmedi)

- Ana sayfa: siyah zemin, imza görseli, büyük portre, adaylık açıklaması.
- Menü: Ana Sayfa, Markalarımız, Sözümüz, Galeri, Haberler, İletişim.
- Hakkında bağlantısı `/politika` adresine gidiyor.
- Sosyal medya başlığı `/markalarimiz` adresine gidiyor.
- Twitter simgesi `https://twitter.com/wix` hedefiyle görüldü. Bu hedef taşınmayacak.
- Instagram `https://www.instagram.com/bulentalicikurumsal/` olarak görüldü. Yeni yayından önce teyit gerekir.
- 390×844 masaüstü görünümünde menü ve bazı metinler sağdan kesildi. Bu gerçek telefon testi değildir.
- Galeri ve haberler metin tarayıcısında hata verse de normal tarayıcıda açılmıştı. Sayfalar silinmiş veya bozuk kabul edilmez.
- Bazı alternatif metinler dosya adı biçimindeydi.
- Alt bilgide eski yıl ve Eser Group adı vardı. Yeni yayıncı bilgisi teyit edilmeden kopyalanmayacak.

## Bu oturumda okunan sayfa metinleri

Ana sayfada şirket unvanı (“Eser Hoteller Yönetim Kurulu Başkanı”) ile adaylık cümlesi birlikte duruyor. Adaylık cümlesi “16. oteller Komitesi Meclis Üyeliğine Adayım” biçiminde. Kısa özgeçmiş ve bir haber özeti var. Turizm istatistiklerine dair haber metnindeki oranlar bu belgede rakam olarak sabitlenmedi; doğruluk incelemesi yok.

`/politika` sayfa başlığında “16. Oteller Komitesi Meclis Üyesi Adayı” yazıyor; kapanışta “16. Turizm Komitesi Meclis Üyesi Adayı” yazıyor. İkisi de arşiv ifadesidir. Yeni sitede kullanılacak unvan kullanıcı doğrulamasıdır.

`/haberler` listesinde dokuz başlık göründü. Ayrı `/post/...` sayfaları açılmadı. Prompttaki örnek kayıt tarihi (11 Şubat 2024) bu oturumda yeniden görülmedi. Liste tarihlerinin yılı çoğu satırda yok.

`/galeri` açıldı. Metin çıktısında `LTF18629.JPG` alternatif metni göründü. Fotoğraf sayısı sayılmadı.

`/i-letisim` metin çıktısında form alanı ve The City Port Hotel bloğu geldi (Büyükçekmece adresi, telefon, `info@eserhotel.com.tr`). Diğer otel blokları bu çekimde doğrulanmadı. Bu bilgiler otel işletmesi iletişimidir; kampanya kanalı değildir.

`/markalarimiz` altı marka metni verdi. Resmi site adresleri bu metin çekiminde yoktu. The City Port Hotel açıklaması, The City Hotel metniyle aynı görünüyor; editoryal teyit gerekir.

## Ölçülmeyenler

Lighthouse, Core Web Vitals, tüm bağlantılar, gerçek cihaz, form teslimi, erişilebilirlik uygunluğu, haber arşivinin tam boyutu, galeri dosya sayısı, sosyal simge hedeflerinin bu oturumda yeniden kontrolü. Bunlar için puan veya sonuç yazılmaz.
