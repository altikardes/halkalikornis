import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'

const faqItems = [
  {
    question: 'Bahçeşehir perde montajı için hafta sonu hizmet var mı?',
    answer:
      'Randevu yoğunluğuna göre hafta sonu da hizmet sunabiliyoruz. Özellikle 1. Kısım, 2. Kısım, Ispartakule ve Boğazköy çevresinde uygun saat planlaması yapıyoruz.',
  },
  {
    question: 'Bahçeşehir korniş montajı ne kadar sürer?',
    answer:
      'Uygulamanın kapsamına göre süre değişir. Çoğu daire montajı tek ziyarette tamamlanır. Ön bilgi paylaşırsanız süreyi daha net bildiriyoruz.',
  },
  {
    question: 'Korniş ustası Bahçeşehir hizmetinizde keşif zorunlu mu?',
    answer:
      'Her işte zorunlu değil. Basit uygulamalarda keşifsiz plan yapabiliriz, ancak daha özel ölçülerde doğru sonuç için yerinde kontrol öneriyoruz.',
  },
  {
    question: 'Perde montajından sonra kullanım desteği veriyor musunuz?',
    answer:
      'Evet, montaj sonrası kullanım ve ayar desteği sağlıyoruz. Sistemin sorunsuz çalışması için gerekli durumlarda müdahale ediyoruz.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bahçeşehir Perde ve Korniş Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['Bahçeşehir, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/bahcesehir-perde-montaji')({
  head: () => ({
    meta: [
      { title: 'Bahçeşehir Perde Montajı ve Korniş Ustası Hizmeti' },
      {
        name: 'description',
        content:
          'Bahçeşehir perde montajı ve Bahçeşehir korniş montajı hizmetinde aynı gün servis, hızlı keşif ve temiz işçilik. Korniş ustası Bahçeşehir ekibi ile hemen iletişime geçin.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-bahcesehir', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: BahcesehirPerdeMontajiPage,
})

function BahcesehirPerdeMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">Bahçeşehir Yerel Usta Desteği</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">Bahçeşehir Perde Montajı ve Korniş Ustası Hizmeti</h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            Bahçeşehir perde montajı, Bahçeşehir korniş montajı ve korniş ustası Bahçeşehir aramalarında güvenilir bir ekip
            arıyorsanız doğru yerdesiniz. 1. Kısım, 2. Kısım, Ispartakule ve Boğazköy çevresinde hızlı randevu oluşturuyor,
            montaj sürecini planlı ve temiz şekilde tamamlıyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Bahçeşehir’de Yerel Montaj Yaklaşımı</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bahçeşehir bölgesinde site yaşamının yoğun olması, perde ve korniş montajında düzenli ve zamanında hizmeti daha
            kritik hale getirir. Kullanıcılar hem hızlı çözüm ister hem de yaşam alanının dağılmadan teslim edilmesini bekler.
            Biz, bu beklentiyi karşılamak için saha organizasyonunu randevu saatine göre planlıyor ve uygulamayı adım adım
            kontrol ederek ilerletiyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bahçeşehir korniş montajı sürecinde yüzey uygunluğu, ray tipi ve sabitleme noktaları detaylı şekilde incelenir.
            Doğru bağlantı yapılmadığında perde sistemi kısa sürede zorlanabilir. Bu nedenle ekiplerimiz hem güvenlik hem
            estetik için doğru yöntemi uygular.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Bahçeşehir perde montajı uygulamalarında pencere yapısına göre ideal hizalama hedeflenir. Korniş ustası
            Bahçeşehir ekibimiz, perdelerin rahat açılıp kapanmasını sağlayacak ayarları yapar ve montaj sonrası kullanım
            testini tamamlamadan işi teslim etmez.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Farklı mekan türlerine uygun montaj planı oluşturuyor, gereksiz zaman kaybı olmadan ihtiyaca göre çözüm
              üretiyoruz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, stor, zebra ve fon için profesyonel Bahçeşehir perde montajı</li>
              <li>- Tek ray, çift ray ve özel ölçü Bahçeşehir korniş montajı</li>
              <li>- Eski sistem sökümü ve yeni montaj kurulumu</li>
              <li>- Ev, ofis ve proje bazlı uygulamalarda planlı hizmet</li>
              <li>- Son kontrol, ayar ve kullanım desteği</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Ayrıntıları{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasında
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Hızlı montaj kadar doğru montaj da önemlidir. Ekiplerimiz hem teknik uygulama hem saha düzeni konusunda
              deneyimlidir ve süreci kullanıcıyı yormadan yönetir.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası Bahçeşehir ekibi olarak randevu saatine uyum, temiz çalışma ve açık iletişim prensibiyle
              hareket ediyoruz. Sürecin her adımını önceden netleştiriyoruz.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Sonuç olarak estetik, dayanıklı ve uzun ömürlü bir montaj deneyimi elde edersiniz.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bahçeşehir’de acil montaj taleplerinde aynı gün servis seçeneği, özellikle taşınma dönemlerinde önemli avantaj
            sağlar. Ekip planlamasına göre gün içinde hızlı randevu açabiliyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bahçeşehir perde montajı veya korniş montajı için perde tipi ve ölçü bilgilerini paylaşmanız durumunda ekiplerimiz
            uygun ekipmanla gelir ve montaj süreci daha kısa sürer.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Hızlı iletişim için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasını
            </Link>{' '}
            kullanabilir, genel hizmet yapımız için{' '}
            <Link to="/" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              ana sayfayı
            </Link>{' '}
            ziyaret edebilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-5 text-2xl font-bold text-slate-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 p-4">
                <h3 className="mb-2 text-base font-semibold text-slate-900 md:text-lg">{item.question}</h3>
                <p className="text-sm leading-relaxed text-slate-700 md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-700 md:text-base">
            Diğer lokasyon içeriklerimizi de inceleyebilirsiniz: {' '}
            <Link to="/basaksehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Başakşehir</Link>,{' '}
            <Link to="/ikitelli-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">İkitelli</Link>,{' '}
            <Link to="/bagcilar-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bağcılar</Link> ve{' '}
            <Link to="/kucukcekmece-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Küçükçekmece</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Bahçeşehir’de Hemen Ulaşın, Randevunuzu Netleştirelim</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Bahçeşehir perde montajı ve korniş montajı ihtiyaçlarınız için hemen bizimle iletişime geçin. WhatsApp’tan hızlı
            bilgi paylaşın veya telefonla arayarak uygun saat için anında randevu alın.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-green-600 md:text-base"
            >
              💬 WhatsApp ile Yaz
            </a>
            <a
              href="tel:+905309264830"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 no-underline transition-colors hover:bg-slate-200 md:text-base"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
