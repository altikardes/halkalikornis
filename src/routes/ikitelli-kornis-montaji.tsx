import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'

const faqItems = [
  {
    question: 'İkitelli korniş montajı için ne kadar sürede randevu veriyorsunuz?',
    answer:
      'Ekip takvimine göre çoğu talepte aynı gün veya ertesi gün randevu veriyoruz. Özellikle Atatürk, Mehmet Akif ve Ziya Gökalp çevresinde hızlı planlama yapabiliyoruz.',
  },
  {
    question: 'İkitelli perde montajı hizmetinde keşif gerekiyor mu?',
    answer:
      'Basit uygulamalarda telefonla bilgi alıp doğrudan montaja gelebiliyoruz. Karmaşık ölçülerde yerinde keşif yaparak doğru ekipmanla işlem planlıyoruz.',
  },
  {
    question: 'Korniş ustası İkitelli hizmetiniz hangi alanları kapsıyor?',
    answer:
      'Daire, ofis, mağaza ve küçük işletmelerde korniş ve perde montajı yapıyoruz. Mevcut sistem sökümü ve yenileme işlemleri de hizmet kapsamındadır.',
  },
  {
    question: 'Montaj sonrası destek sağlıyor musunuz?',
    answer:
      'Evet. Kullanım sırasında oluşan ayar ihtiyaçları veya küçük düzeltmeler için destek veriyoruz. Hedefimiz montaj sonrası uzun süre sorunsuz kullanım sağlamaktır.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'İkitelli Korniş ve Perde Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['İkitelli, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/ikitelli-kornis-montaji')({
  head: () => ({
    meta: [
      { title: 'İkitelli Korniş Montajı ve Perde Montaj Hizmeti' },
      {
        name: 'description',
        content:
          'İkitelli korniş montajı ve İkitelli perde montajı hizmetinde hızlı randevu, temiz işçilik ve aynı gün servis imkanı. Korniş ustası İkitelli ekibi ile güvenli montaj.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-ikitelli', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: IkitelliKornisMontajiPage,
})

function IkitelliKornisMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">İkitelli Yerel Montaj Desteği</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">İkitelli Korniş Montajı ve Perde Montaj Hizmeti</h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            İkitelli korniş montajı, İkitelli perde montajı ve korniş ustası İkitelli aramalarında güvenilir sonuç arayan
            kullanıcılar için hızlı, temiz ve planlı uygulama sunuyoruz. Yerel ekip yapımız sayesinde Atatürk, Mehmet Akif
            ve Ziya Gökalp çevresinde randevu sürecini hızlandırıyor, montajı tek ziyarette tamamlamayı hedefliyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">İkitelli’de Yerel Hizmet Anlayışı</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli bölgesi hem konut hem işyeri yoğunluğu nedeniyle pratik ve doğru montaj hizmetine en çok ihtiyaç duyulan
            noktalardan biridir. Yeni taşınma, ofis düzenleme veya tadilat sonrasında perde ve korniş montajı ertelendiğinde,
            yaşam alanlarının kullanımı doğrudan etkilenir. Biz bu ihtiyacı hızlı ama kaliteden ödün vermeyen bir yaklaşımla
            karşılıyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli korniş montajı uygulamalarında en önemli konu sabitleme güvenliğidir. Tavan ve duvar türüne uygun
            bağlantı malzemesi seçilmezse zamanla sarkma, rayda takılma veya düşme riski oluşabilir. Ekibimiz, montaj
            öncesi yüzeyi kontrol ederek doğru sistemi kurar ve perde hareketini test ederek teslim yapar.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli perde montajı taleplerinde ise sadece estetik görünümü değil, günlük kullanım rahatlığını da önemsiyoruz.
            Korniş yüksekliği, perde açılım yönü ve pencere yapısına göre yapılan doğru yerleşim, uzun vadeli memnuniyetin
            temelini oluşturur. Bu nedenle korniş ustası İkitelli ekibimiz her projeyi standart paket yerine yerinde çözümlerle ele alır.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Sadece tek bir montaj adımı değil, ölçüden son kontrole kadar tüm süreci kapsayan bir hizmet veriyoruz.
              Böylece farklı ekiplerle uğraşmadan tek noktadan destek alabilirsiniz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, zebra, stor ve fon için profesyonel İkitelli perde montajı</li>
              <li>- Tek ray, çift ray ve özel ölçü İkitelli korniş montajı</li>
              <li>- Eski korniş sökümü, bakım ve yenileme uygulamaları</li>
              <li>- Ofis, mağaza ve dairelerde planlı montaj organizasyonu</li>
              <li>- Kullanım testi ve montaj sonrası düzenleme desteği</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Ayrıntılı hizmet başlıklarına{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasından
              </Link>{' '}
              ulaşabilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Montaj hizmetinde hız kadar doğru uygulama da önemlidir. Yanlış ölçü veya yanlış montaj tekniği kısa sürede
              masraf çıkarabilir. Ekibimiz bu riskleri minimize ederek sağlam ve düzenli sonuç üretir.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası İkitelli hizmetimizde randevu saatine uyum, temiz işçilik ve açık iletişim temel prensiptir.
              Sürecin başında ne yapılacağı netleşir, montaj sırasında sürprizler yaşanmaz.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              İş sonunda alanı toplu bırakır, perde açılımını test eder ve kullanıcıya kısa kullanım bilgilendirmesi yaparız.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli’de acil montaj taleplerinde aynı gün servis büyük kolaylık sağlar. Özellikle yeni taşınan kullanıcılar
            için perdelerin hızlı kullanıma alınması yaşam konforunu artırır.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            İkitelli perde montajı veya İkitelli korniş montajı için ön bilgi verirseniz ekiplerimiz doğru ekipmanla gelir.
            Bu sayede uygulamayı tek seferde tamamlama oranımız yükselir.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Randevu oluşturmak için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasını
            </Link>{' '}
            kullanabilir, hizmet akışını görmek için{' '}
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
            Diğer bölgeler için hazırladığımız içeriklere de bakabilirsiniz: {' '}
            <Link to="/basaksehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Başakşehir</Link>,{' '}
            <Link to="/bagcilar-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bağcılar</Link>,{' '}
            <Link to="/kucukcekmece-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Küçükçekmece</Link> ve{' '}
            <Link to="/bahcesehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bahçeşehir</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">İkitelli’de Montaj İçin Hemen Ulaşın</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            İkitelli korniş montajı ve perde montajı için beklemeden iletişime geçin. WhatsApp üzerinden bilgi paylaşın veya
            doğrudan arayarak size uygun saat için hızlı randevu alın.
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
