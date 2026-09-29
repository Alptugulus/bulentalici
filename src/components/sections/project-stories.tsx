export function SgkStory() {
  return (
    <div className="mt-4 space-y-4">
      <section className="rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="sgk-baslik">
        <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
        <h2 id="sgk-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
          SGK prim desteğini otellerimize de getireceğiz.
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <article className="rounded-md bg-surface p-5">
            <h3 className="text-xl font-semibold text-navy">Bugün</h3>
            <p className="mt-3 leading-relaxed">Destek, Turizm İşletmesi Belgeli tesislerde.</p>
          </article>
          <article className="rounded-md bg-surface p-5">
            <h3 className="text-xl font-semibold text-navy">Hedefimiz</h3>
            <p className="mt-3 leading-relaxed">Basit Konaklama Belgeli otellerimiz de bu desteğin içinde olacak.</p>
          </article>
        </div>
      </section>
      <details className="rounded-md border border-navy/10 bg-paper p-6">
        <summary className="cursor-pointer text-lg font-semibold text-navy">Hesaplama ve kaynaklar</summary>
        <p className="mt-4 leading-relaxed">
          SGK’nın 4 Eylül 2026 tarihli 2026/21 sayılı genelgesi, 2026 Mayıs–Aralık dönemindeki ücret
          desteğini turizm işletmesi belgeli konaklama tesisleriyle sınırlar. Basit konaklama turizm
          işletmesi belgeli işyerleri bu genelgede kapsam dışındadır. Bu sayfa kişisel uygunluk sonucu
          vermez.
        </p>
      </details>
    </div>
  );
}

export function TaxStory() {
  return (
    <section className="mt-4 rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="vergi-baslik">
      <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
      <h2 id="vergi-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
        Turizmde vergi yükünü 5 puan azaltacağız.
      </h2>
      <p className="mt-4 leading-relaxed">
        Kaynak vergi türünü belirtmiyor. Kazancın yatırıma, istihdama ve hizmet kalitesine yönelmesi amaçlanıyor.
      </p>
      <p className="mt-4 leading-relaxed">
        Bu sayfada daha önce hedef, yüzde 10 olan yükün yüzde 5’e inmesi olarak yazılmıştı. Güncel kaynak 5 puan diyor.
      </p>
    </section>
  );
}

const digitalTopics = [
  {
    title: "Rezervasyon istekleri",
    text: "Yapay zekâ, misafirimizin rezervasyon isteğini otelimizin ekibine iletir.",
  },
  {
    title: "Rezervasyon takibi",
    text: "Yapay zekâ, rezervasyon sürecini kayıttan konaklamaya kadar takip eder.",
  },
  {
    title: "Rezervasyon rekabet takibi",
    text: "Yapay zekâ rakip analizini yapar. Otelimiz oda fiyatını bu analize göre belirler.",
  },
  {
    title: "Ulaşım maliyeti ve tarifi",
    text: "Misafirimiz gideceği yeri ve ulaşım yolunu seçer. Ortalama maliyeti ve tarifi görür. İsterse taksisini uygulama üzerinden çağırır.",
  },
  {
    title: "İki dilde şehir turu",
    text: "Şehir turunu ve tanıtımını misafirimize en az iki dilde sunarız.",
  },
] as const;

export function DigitalStory() {
  return (
    <section className="mt-4 rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="dijital-baslik">
      <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
      <h2 id="dijital-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
        Rezervasyon takibini ve rakip analizini yapay zekâya yönettiririz.
      </h2>
      <p className="mt-3 max-w-3xl leading-relaxed">
        Geliştireceğimiz uygulamada yapay zekâ, otellerimizin rezervasyon sürecini takip eder ve rakip
        analizini yapar. Bu işlerin sürecini yapay zekâ yönetir. Böylece otel maliyeti düşer, iş hızlanır
        ve hizmet gelişir.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {digitalTopics.map((topic) => (
          <article key={topic.title} className="rounded-md bg-surface p-5">
            <h3 className="text-xl font-semibold text-navy">{topic.title}</h3>
            <p className="mt-3 leading-relaxed">{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EventsStory() {
  return (
    <section className="mt-4 rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="etkinlik-baslik">
      <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
      <h2 id="etkinlik-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
        Etkinlik gelmeden otellerimiz hazır olsun.
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Fuarlar</h3>
          <p className="mt-3 leading-relaxed">Fuar tarihini otellerimize erken duyuracağız. Odalar bu tarihe göre hazırlanır.</p>
        </article>
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Kültür ve sanat</h3>
          <p className="mt-3 leading-relaxed">Kültür ve sanat programını konaklama planının içine alacağız.</p>
        </article>
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Gastronomi</h3>
          <p className="mt-3 leading-relaxed">Gastronomi buluşmasını otellerimizin takvimine bağlayacağız.</p>
        </article>
      </div>
      <ol className="mt-6 grid gap-3 sm:grid-cols-3">
        {["Etkinliği öğreniriz", "Otellerimizle paylaşırız", "Konaklamayı hazırlarız"].map((step, index) => (
          <li key={step} className="rounded-md bg-navy px-4 py-4 text-paper">
            <span className="block text-sm">{index + 1}</span>
            <span className="mt-1 block text-lg font-semibold">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TransparencyStory() {
  return (
    <section className="mt-4 rounded-md border border-navy/10 bg-paper p-6" aria-labelledby="seffaflik-baslik">
      <p className="text-sm font-medium tracking-wide text-navy">Geldiğimizde yapacaklarımız</p>
      <h2 id="seffaflik-baslik" className="mt-2 text-2xl font-semibold leading-snug text-navy">
        Üyelerimiz üç şeyi eksiksiz görecek.
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Ne yaptık</h3>
          <p className="mt-3 leading-relaxed">Her çalışmanın adı ve durumu yazılır.</p>
        </article>
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Ne harcadık</h3>
          <p className="mt-3 leading-relaxed">Harcama kalemi ayrıca gösterilir. Olmayan harcamayı sıfır lira diye yazmayız.</p>
        </article>
        <article className="rounded-md bg-surface p-5">
          <h3 className="text-xl font-semibold text-navy">Ne sonuç aldık</h3>
          <p className="mt-3 leading-relaxed">Sonuç, çalışma bitince yazılır. Bitmeyen işi bitmiş göstermeyiz.</p>
        </article>
      </div>
      <p className="mt-5 leading-relaxed">Bu düzen göreve geldiğimizde başlar. Bugün satır uydurmayız.</p>
    </section>
  );
}
