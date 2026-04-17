import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'

const faqItems = [
  {
    question: 'Küçükçekmece korniş montajı için hangi mahallelere geliyorsunuz?',
    answer:
      'Küçükçekmece genelinde hizmet veriyoruz. Özellikle Atakent, Halkalı Merkez, Sefaköy ve Cennet çevresinde düzenli montaj planlaması yapıyoruz.',
  },
  {
    question: 'Küçükçekmece perde montajı ne kadar sürer?',
    answer:
      'İşin kapsamına göre değişir ancak çoğu daire uygulaması tek ziyarette tamamlanır. Montaj öncesi bilgi alarak süreyi daha net planlıyoruz.',
  },
  {
    question: 'Korniş ustası Küçükçekmece hizmetinizde garanti var mı?',
    answer:
      'Evet, işçilik kalitesine önem veriyor ve montaj sonrası ortaya çıkabilecek ayar ihtiyaçları için destek sunuyoruz.',
  },
  {
    question: 'Eski korniş sökümü de yapıyor musunuz?',
    answer:
      'Evet. Eski sistemin sökülmesi, alanın hazırlanması ve yeni montajın güvenli şekilde tamamlanması hizmet kapsamımızdadır.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Küçükçekmece Korniş ve Perde Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['Küçükçekmece, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/kucukcekmece-kornis-montaji')({
  head: () => ({
    meta: [
      { title: 'Küçükçekmece Korniş Montajı ve Perde Montaj Hizmeti' },
      {
        name: 'description',
        content:
          'Küçükçekmece korniş montajı ve Küçükçekmece perde montajı hizmetinde hızlı keşif, temiz işçilik ve aynı gün servis. Korniş ustası Küçükçekmece ekibiyle hemen iletişime geçin.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-kucukcekmece', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: KucukcekmeceKornisMontajiPage,
})

function KucukcekmeceKornisMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">Küçükçekmece Yerel Montaj Hizmeti</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">Küçükçekmece Korniş Montajı ve Perde Montaj Hizmeti</h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            Küçükçekmece korniş montajı, Küçükçekmece perde montajı ve korniş ustası Küçükçekmece aramalarında doğru ekip
            arayan kullanıcılar için hızlı, temiz ve profesyonel hizmet sunuyoruz. Atakent, Halkalı Merkez, Sefaköy ve
            Cennet çevresinde yerel saha deneyimimizle süreci planlıyor, montajı güvenli şekilde tamamlıyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Küçükçekmece’de Yerel İhtiyaca Uyumlu Hizmet</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Küçükçekmece’de farklı yapı tipleri bir arada bulunduğu için perde ve korniş montajı her adreste aynı şekilde
            ilerlemez. Bazı dairelerde tavan yapısı daha hassas olabilirken, bazı ofis alanlarında ray sistemi daha uzun
            ve çoklu kullanım gerektirebilir. Bu çeşitlilik, işi bilen bir ekiple çalışmayı önemli hale getirir.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Küçükçekmece korniş montajı hizmetimizde önce yüzeyi değerlendirir, bağlantı noktalarını doğru belirler ve
            taşıma güvenliğini test ederiz. Yanlış delme veya yanlış sabitleme gibi hataların ileride sorun yaratmaması için
            her aşamayı kontrollü şekilde tamamlarız.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Küçükçekmece perde montajı uygulamalarında estetik çizgiyi korurken kullanım kolaylığını da hedefleriz.
            Perdenin ray üzerinde akıcı hareket etmesi, doğru yükseklik ve doğru yerleşimle mümkündür. Korniş ustası
            Küçükçekmece ekibimiz, bu detayları standart prosedür değil yerinde çözüm yaklaşımıyla uygular.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Montaj sürecini tek noktadan yönetebilmeniz için kapsamlı bir hizmet seti sunuyoruz. Böylece keşif, söküm,
              montaj ve son kontrol gibi adımları tek plan içinde tamamlıyoruz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, zebra, stor ve fon için profesyonel Küçükçekmece perde montajı</li>
              <li>- Tek ray, çift ray ve özel ölçü Küçükçekmece korniş montajı</li>
              <li>- Eski sistem sökümü ve yeni sistem geçişi</li>
              <li>- Konut ve işyeri projelerine uygun montaj planlaması</li>
              <li>- Son ayar ve kullanım kontrolü</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Tüm hizmet detaylarını{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasında
              </Link>{' '}
              görebilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Güvenilir montaj için doğru ekipman, doğru teknik ve deneyimli ekip gerekir. Biz bu üç unsuru birlikte sunarak
              hızlı ama sağlam bir sonuç üretiriz.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası Küçükçekmece ekibimiz randevu saatine uyum sağlar, çalışma alanını düzenli kullanır ve montajı
              tamamladıktan sonra tüm sistemi test ederek teslim eder.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Bu yaklaşım sayesinde kullanıcılarımız uzun vadede sorunsuz kullanım ve yüksek memnuniyet elde eder.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Taşınma veya acil düzenleme dönemlerinde aynı gün servis önemli bir kolaylık sunar. Küçükçekmece içinde ekip
            uygunluğuna göre aynı gün randevu açarak talebi hızlı şekilde karşılıyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Küçükçekmece perde montajı veya korniş montajı için önceden perde tipi, pencere adedi ve mevcut sistem bilgilerini
            paylaşmanız, uygulamanın daha kısa sürede tamamlanmasına yardımcı olur.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Hemen randevu almak için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasını
            </Link>{' '}
            kullanabilir, genel içerikler için{' '}
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
            Diğer bölgesel hizmet sayfalarımızı da inceleyebilirsiniz: {' '}
            <Link to="/basaksehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Başakşehir</Link>,{' '}
            <Link to="/ikitelli-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">İkitelli</Link>,{' '}
            <Link to="/bagcilar-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bağcılar</Link> ve{' '}
            <Link to="/bahcesehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bahçeşehir</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Küçükçekmece’de Hemen Randevu Oluşturun</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Küçükçekmece korniş montajı ve perde montajı hizmeti için şimdi iletişime geçin. WhatsApp’tan bilgi paylaşın veya
            telefonla arayıp aynı gün uygunluk durumunu öğrenin.
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
