# Test raporu

Son güncelleme: 28 Eylül 2026, Aşama 4. Yerel geliştirme sunucusu `http://localhost:3000`. Bu bir Lighthouse veya gerçek cihaz raporu değildir.

## Otomatik

| Komut | Sonuç |
|---|---|
| `npx tsc --noEmit` | Geçti |
| `npm run lint` | Geçti |
| `npm run build` | Geçti |

`GET /` 200, `GET /olmayan-sayfa` 404, `GET /icon` 200.

HTML: `lang="tr"`, başlık “Bülent Alıcı — 16. Oteller Komitesi Meclis Üyesi Adayı”, `noindex, nofollow`. Sayfada şirket unvanı, slogan, Twitter veya Instagram bağlantısı yok.

## Ekran

Gömülü tarayıcıda `Emulation.setDeviceMetricsOverride` ile ölçüldü. Yatay taşma: `scrollWidth` görünür genişliği aşmadı.

| Genişlik | Sonuç |
|---|---|
| 360 | Metin ve fotoğraf alanı alt alta. Taşma yok. Lacivert alan 360 px. |
| 390 | Taşma yok. Kök yazı 32 px (%200) iken de taşma yok. |
| 768 | İki sütun; metin ve fotoğraf alanı yatayda çakışmıyor. Taşma yok. |
| 1024 | İki sütun. Taşma yok. |
| 1440 | Taşma yok. Başlık 48 px. |

Kontrast hesabı: mürekkep `#172B4D` / beyaz 14.10:1, beyaz / lacivert `#10253F` 15.46:1, vurgu `#2563EB` / beyaz 5.17:1. Vurgu / lacivert 2.99:1 olduğu için lacivert zemin üzerinde vurgu rengi metin veya tek başına odak çizgisi olarak kullanılmadı. Odak çizgisi beyaz halka ve lacivert gölge.

## Akış

- Üst bilgideki ad ana sayfada kalıyor.
- `/olmayan-sayfa` Türkçe “Sayfa bulunamadı” gösteriyor. “Ana sayfaya dön” ile `/` açıldı.
- “İçeriğe geç” erişilebilirlik ağacında ilk bağlantı. Gömülü tarayıcıda `document.hasFocus()` false olduğu için `:focus` kutusu görsel olarak doğrulanamadı. Kural stil dosyasında duruyor.

## Aşama 2 — ana sayfa

Yerel sunucuda taslak etiketli altı proje kartı ve kısa tanıtım görünüyor. Haber, galeri ve kampanya iletişimi boş durumda. Slogan ve “Yönetim Kurulu” yok. Sayfada tek `h1` var.

Bağlantılar yalnızca `/`, `/#tanitim`, `/#projeler`, `/#haberler` ve `/#galeri`. “Projelerimiz” `#projeler` bölümünü açtı. Menüdeki “Haberler” `#haberler` bölümünü açtı.

| Genişlik | Sonuç |
|---|---|
| 360 | Taşma yok. Menü alt satıra geçiyor. Düğmeler alt alta. Kök yazı 32 px iken de taşma yok. |
| 390 | Normal ve %200 metinde taşma yok. |
| 768 | Proje kartları ikişerli, üç satır. Taşma yok. |
| 1024 | Proje kartları üçerli, iki satır. Taşma yok. |
| 1440 | Aynı üçlü ızgara. Taşma yok. |

Üretim derlemesinin HTML’i taslak proje başlığını ve taslak özgeçmiş cümlesini içermiyor. Boş durum metinleri duruyor. Portre alanındaki “İçerik taslağı” etiketi fotoğraf gelene kadar üretim çıktısında da var.

## Aşama 3 — sayfalar ve portreler

28 Eylül 2026. Yerelde menüden `/projelerimiz`, proje detayı, `/hakkimda` ve `/galeri` açıldı. Bilinmeyen proje adresi Türkçe 404. 360 px genişlikte ana akışlarda yatay taşma yok. `/galeri` 16 görsel, bozuk görsel 0.

Üretim HTML’i: ana sayfada “Değişim şart” ve `masa-mavi.jpg` var; “Enerji ve işletme” ve “Konya doğumlu” yok. `/projelerimiz` boş durum metnini gösteriyor. Taslak proje adresi ve olmayan sayfa 404. Galeride portre alt metinleri var.

## Aşama 4 — haber, marka, iletişim, galeri

28 Eylül 2026. `npx tsc --noEmit`, `npm run lint` ve `npm run build` geçti. Üretim sunucusunda şu adresler 200: `/`, `/hakkimda`, `/projelerimiz`, bir proje detayı, `/haberler`, bir haber detayı, `/galeri`, `/markalarimiz`, `/iletisim`. `/politika`, olmayan haber ve olmayan proje 404.

Üretim HTML’inde “Konya doğumlu”, “Enerji ve işletme”, “Değişim şart” ve 16 galeri görseli var. “Başkan adayı”, “Turizm Komitesi”, `info@eserhotel`, `binde`, 172, 434, 218 ve 550 yok.

Tarayıcıda `/hakkimda` şirket görevini adaylıktan ayırıyor. Haber listesinde dokuz kayıt var; değişim yazısı kesilen cümleyi tamamlamıyor. Galeride bir kare açıldı, sağ ok 2/16 yaptı, Escape kapattı. Markalarda The City Port’un kendi metninin olmadığı yazılı. İletişimde form yok. 360 px ana sayfada yatay taşma yok. 1280 px karşılama portresi 461×576, taşma yok.

## Düzeltme — proje ayrıntısı

28 Eylül 2026. Ana sayfada “İçerik taslağı” yok. Altı proje sayfasında “Örnek akış” var. Enerji sayfasında önceki bağlantı yok. Şeffaf temsil sayfasında sonraki bağlantı yok; ilgili haber var. Dijitalleşme sayfasında ilgili haber yok. Nitelikli personelden sonraki bağlantı Dijitalleşme sayfasını açtı. 360 px genişlikte bu sayfada yatay taşma yok.

## Tasarım — proje yüzeyi

28 Eylül 2026. `/projelerimiz` altı kartı numara ve adımlarla gösteriyor. Sayfada görsel yok. Proje detayında lacivert başlık, sorun ve öneri yan yana, adımlar numaralı sıra. 1280 ve 360 px genişlikte yatay taşma yok. Başlık kutunun içinde kalıyor.

## Karşılama — imza görselin üzerinde

28 Eylül 2026. İmza ve “Eser Hoteller Yönetim Kurulu Başkanı” yazısı `4.JPG` bandının içinde. 1100 px ve 390 px genişlikte imza fotoğraf kutusunun altında değil; yatay taşma yok. Telefonda yüz kadrajda.

## Haber — Quality of Magazine

2 Ekim 2026. `/haberler` ilk kartı Ekim 2026 kapağı. Detayda kapak, sayfa 56-57 ve sayfa 58-59 yüklendi. Kaynak adresi olmadığı için “Kaynak haberi aç” yok. 713 px genişlikte yatay taşma yok.

## Ölçülmeyen

Gerçek telefon, işletim sisteminin metin büyütme ayarı (yalnızca kök `font-size` denendi), Lighthouse, klavye odağının pencere odaklı bir tarayıcıdaki görünümü. Ana sayfadaki geç yüklenen portreler kaydırınca adres aldı; bozuk görsel sayılmadı.
