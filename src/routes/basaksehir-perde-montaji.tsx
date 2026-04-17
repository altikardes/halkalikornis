import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'

const faqItems = [
  {
    question: 'Başakşehir perde montajı için aynı gün servis veriyor musunuz?',
    answer:
      'Ekip planına bağlı olarak Başakşehir genelinde aynı gün servis açabiliyoruz. Özellikle Kayaşehir, Bahçeşehir ve Ispartakule çevresinde hızlı randevu oluşturuyoruz.',
  },
  {
    question: 'Başakşehir korniş montajı sırasında ölçüyü kim alıyor?',
    answer:
      'Talep ederseniz ekiplerimiz yerinde ölçü alır ve montaj planını buna göre netleştirir. Doğru ölçü, perde kullanım konforu için kritik olduğu için kontrolü biz tamamlıyoruz.',
  },
  {
    question: 'Korniş ustası Başakşehir aramasında neden sizi tercih etmeliyim?',
    answer:
      'Yerel saha tecrübemiz, temiz işçilik anlayışımız ve hızlı iletişim sürecimiz sayesinde montajı güvenli ve düzenli şekilde tamamlıyoruz. Sonrasında ayar desteği de sunuyoruz.',
  },
  {
    question: 'Sadece yeni montaj mı yapıyorsunuz, eski sistemi yeniliyor musunuz?',
    answer:
      'Hem yeni montaj hem de eski korniş sökümü ve yenileme hizmeti veriyoruz. Mevcut sistemi inceleyip en uygun çözüme göre uygulama yapıyoruz.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Başakşehir Perde ve Korniş Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['Başakşehir, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/basaksehir-perde-montaji')({
  head: () => ({
    meta: [
      { title: 'Başakşehir Perde Montajı ve Korniş Ustası Hizmeti' },
      {
        name: 'description',
        content:
          'Başakşehir perde montajı ve Başakşehir korniş montajı hizmetinde aynı gün servis, yerinde keşif ve garantili işçilik. Korniş ustası Başakşehir ekibi ile hızlı randevu alın.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-basaksehir', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: BasaksehirPerdeMontajiPage,
})

function BasaksehirPerdeMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">Başakşehir Yerel Montaj Hizmeti</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">Başakşehir Perde Montajı ve Korniş Ustası Hizmeti</h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            Başakşehir perde montajı ve Başakşehir korniş montajı ihtiyaçlarınızda hızlı, düzenli ve güvenilir hizmet sunuyoruz.
            Korniş ustası Başakşehir aramalarında bizi tercih eden kullanıcılar için ölçüden uygulamaya kadar tüm süreci tek
            ekiple yönetiyor, özellikle Kayaşehir, Bahçeşehir ve Ispartakule hattında aynı gün servis planlaması yapıyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Başakşehir’de Yerel Montaj Deneyimi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Başakşehir’de yeni konut projeleri, taşınma yoğunluğu ve site yaşamı nedeniyle perde ve korniş montajı talepleri
            hızlı şekilde çözülmesi gereken işler arasında yer alır. Bu noktada sadece montaj yapmak yeterli değildir; binanın
            yapı tipine, tavan durumuna ve yaşam alanının kullanımına uygun bir uygulama gerekir. Ekibimiz, Başakşehir’in
            farklı mahallelerinde çalıştığı için her projede benzer sorunları önceden öngörebilir.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Özellikle Başakşehir perde montajı süreçlerinde pencere ölçüsüne uygun hizalama, ray akışı ve estetik yerleşim
            dikkat istediğinden, işi hızlı tamamlamaya çalışırken kaliteyi düşürmüyoruz. Aynı şekilde Başakşehir korniş
            montajı sırasında sabitleme noktalarını doğru belirleyerek uzun ömürlü bir kullanım hedefliyoruz. Bu yaklaşım,
            kullanıcıların montaj sonrası tekrar servis çağırma ihtiyacını azaltır.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Korniş ustası Başakşehir arayışında olan kullanıcılar için net iletişim de çok önemlidir. Randevu saatini
            planlar, işlem süresini önceden paylaşır ve montaj sonrası alanı temiz teslim ederiz. Bu nedenle hizmetimiz
            sadece teknik uygulama değil, baştan sona güven veren bir hizmet deneyimidir.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Her evin ve ofisin ihtiyacı farklıdır. Bu nedenle standart bir işlem yerine ihtiyaca göre planlanan bir montaj
              süreci sunuyoruz. Uygulama öncesi kısa bir değerlendirme ile doğru ekipman ve montaj yöntemi belirlenir.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, stor, zebra ve fon için profesyonel Başakşehir perde montajı</li>
              <li>- Tek ray ve çift ray sistemlerde Başakşehir korniş montajı</li>
              <li>- Eski kornişin sökülmesi ve yeni sistemin güvenli kurulumu</li>
              <li>- Ofis, daire ve site projelerine uygun planlı uygulama</li>
              <li>- Montaj sonrası ayar, kontrol ve kullanım bilgilendirmesi</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Tüm hizmet detaylarını{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasında
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Doğru montaj, perde ve korniş sisteminin performansını doğrudan etkiler. Ekibimiz işçilik kalitesini öncelikli
              tutar; yanlış dübel, eğri hat veya düşük taşıma kapasitesi gibi sorunları önleyici şekilde çalışır.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası Başakşehir ekibi olarak özellikle aile yaşamının yoğun olduğu sitelerde hızlı ama düzenli çalışma
              planı uygularız. Gürültü, dağınıklık ve gereksiz zaman kaybını en aza indiririz.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Şeffaf iletişim, zamanında teslim ve montaj sonrası destek sayesinde kullanıcılar bizi tekrar tercih ediyor.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Acil taşınma veya tadilat süreçlerinde aynı gün montaj desteği büyük avantaj sağlar. Başakşehir içinde ekip
            uygunluğuna göre aynı gün randevu açıyor, özellikle Kayaşehir ve Bahçeşehir gibi yoğun bölgelerde hızlı planlama
            sunuyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Başakşehir perde montajı talebiniz için perde türü, pencere adedi ve varsa mevcut sistem bilgilerini paylaştığınızda
            hazırlıklı gelerek işlemi tek ziyarette tamamlama ihtimalimizi artırıyoruz.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Randevu için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasını
            </Link>{' '}
            kullanabilir, genel bilgi için{' '}
            <Link to="/" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              ana sayfaya
            </Link>{' '}
            dönebilirsiniz.
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
            Diğer lokasyon içeriklerimizi de incelemek isterseniz{' '}
            <Link to="/ikitelli-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              İkitelli
            </Link>
            ,{' '}
            <Link to="/bagcilar-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              Bağcılar
            </Link>
            ,{' '}
            <Link to="/kucukcekmece-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              Küçükçekmece
            </Link>{' '}
            ve{' '}
            <Link to="/bahcesehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              Bahçeşehir
            </Link>{' '}
            sayfalarına göz atabilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Başakşehir’de Hemen Randevu Oluşturun</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Başakşehir korniş montajı ve perde montajı talepleriniz için hemen bizimle iletişime geçin. WhatsApp üzerinden
            hızlı bilgi alın veya doğrudan arayarak uygun saat için randevunuzu netleştirin.
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
