import { Link, createFileRoute } from '@tanstack/react-router'

const faqItems = [
  {
    question: 'Halkalı korniş montajı aynı gün yapılabiliyor mu?',
    answer:
      'Ekip uygunluğuna göre aynı gün servis planlayabiliyoruz. Özellikle Halkalı içindeki taleplerde hızlı dönüş sağlamak için randevuları gün içinde optimize ediyoruz.',
  },
  {
    question: 'Halkalı perde montajı için ölçüyü kim alıyor?',
    answer:
      'İsterseniz ölçüyü siz paylaşabilirsiniz, isterseniz ekibimiz keşif sırasında ölçü alır. Doğru ölçü, sorunsuz montajın en önemli adımı olduğu için kontrolü mutlaka biz de yapıyoruz.',
  },
  {
    question: 'Korniş ustası Halkalı bölgesinde hangi mahallelere geliyor?',
    answer:
      'Halkalı Merkez, Atakent, İstasyon ve Fatih başta olmak üzere Halkalı çevresindeki mahallelere düzenli servis sağlıyoruz. Yakın bölgeler için de planlamaya göre randevu açıyoruz.',
  },
  {
    question: 'Montajdan sonra destek veriyor musunuz?',
    answer:
      'Evet, montaj sonrası kullanım ve ayar desteği veriyoruz. Gerekli durumlarda kontrol için tekrar ziyaret planlayarak sistemin sorunsuz çalışmasını sağlıyoruz.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Halkalı Korniş ve Perde Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['Halkalı, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/halkali-kornis-montaji')({
  head: () => ({
    meta: [
      { title: 'Halkalı Korniş Montajı ve Perde Montaj Hizmeti' },
      {
        name: 'description',
        content:
          'Halkalı korniş montajı ve halkalı perde montajı hizmetinde aynı gün servis, garantili işçilik ve profesyonel uygulama. Korniş ustası Halkalı bölgesinde hızlı keşif ve net çözüm.',
      },
      { property: 'og:title', content: 'Halkalı Korniş Montajı ve Perde Montaj Hizmeti' },
      {
        property: 'og:description',
        content:
          'Korniş ustası Halkalı ekibi ile hızlı randevu alın. Halkalı korniş montajı ve perde montajı hizmetinde güvenilir, temiz ve garantili uygulama.',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(faqSchema),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: HalkaliKornisMontajiPage,
})

function HalkaliKornisMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
            Küçükçekmece / Halkalı Yerel Hizmet
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
            Halkalı Korniş Montajı ve Perde Montaj Hizmeti
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            Halkalı korniş montajı ve halkalı perde montajı hizmetinde uzmanlaşmış yerel ekibimiz, korniş ustası halkalı
            aramalarında güvenilir çözüm arayan kullanıcılar için hızlı, temiz ve garantili uygulama sunar. Eviniz ya da iş
            yeriniz için aynı gün planlama yaparak montaj sürecini baştan sona düzenli ve sorunsuz şekilde yönetiyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Giriş: Halkalı’da Yerel ve Hızlı Montaj Desteği</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Halkalı bölgesinde perde ve korniş montajı ihtiyaçları genellikle taşınma, tadilat veya yenileme dönemlerinde
            ortaya çıkar. Bu süreçte kullanıcıların en çok zorlandığı konuların başında doğru ölçü, uygun ekipman seçimi ve
            temiz uygulama gelir. Biz, mahalle dinamiklerini bilen yerel bir ekip olarak hem apartman dairelerinde hem de
            ofis projelerinde güvenli montaj hizmeti sunuyoruz. Özellikle halkalı korniş montajı süreçlerinde tavan yapısı,
            duvar tipi ve mevcut ray sistemini dikkatle değerlendirerek uzun ömürlü sonuç üretiyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Sadece montajı tamamlamak değil, montaj sonrası kullanım konforunu da artırmak önceliğimizdir. Perdenin rahat
            açılıp kapanması, rayın doğru hizalanması ve estetik görünümün korunması için detaylı işçilik uygularız. Bu
            yaklaşım, halkalı perde montajı taleplerinde müşteri memnuniyetini belirgin şekilde yükseltir. Eğer siz de hızlı
            ama özensiz bir işlem yerine profesyonel bir sonuç istiyorsanız, bölgedeki deneyimli ekibimizle güvenle
            çalışabilirsiniz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Özellikle Halkalı Merkez, Atakent, İstasyon ve Fatih mahallelerinde sık hizmet veriyor; bina tipine ve mevcut
            altyapıya uygun montaj çözümleri geliştiriyoruz. Mahalle bazlı tecrübemiz sayesinde doğru ekipmanla gelir,
            işlemi gereksiz uzatmadan tamamlarız.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Çalışmalarımızı planlarken ev içi düzeninizi bozmayacak şekilde ilerler, randevu saatine sadık kalır ve montaj
            sonrası alanı temiz teslim ederiz. Bu nedenle birçok kullanıcı bizi “korniş ustası halkalı” aramasıyla bulur ve
            düzenli olarak tavsiye eder.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Hizmet kapsamımız yalnızca tek bir montaj işleminden ibaret değildir. İhtiyacınıza göre keşif, ölçü kontrolü,
              eski sistem sökümü, yeni korniş uygulaması ve perde montajı adımlarını birlikte planlıyoruz. Bu sayede hem
              zaman hem maliyet açısından daha verimli bir süreç elde edersiniz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, fon, stor ve zebra için profesyonel halkalı perde montajı</li>
              <li>- Tek ray, çift ray ve özel ölçü halkalı korniş montajı</li>
              <li>- Eski korniş sökümü ve yeni sistemle güvenli yenileme</li>
              <li>- Ofis ve konut projelerine uygun planlı uygulama</li>
              <li>- Montaj sonrası kontrol, ayar ve kullanım bilgilendirmesi</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Tüm bu hizmetlerin detaylarını görmek için{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfamızı
              </Link>{' '}
              ziyaret edebilirsiniz.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Montaj hizmetinde en önemli farkı işçilik kalitesi oluşturur. Bizim için her proje aynı özenle ele alınır.
              Doğru dübel seçimi, uygun delme tekniği ve sağlam sabitleme ile uzun süre sorunsuz kullanım hedeflenir.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Özellikle korniş ustası halkalı arayışında olan kullanıcılar için hızlı geri dönüş, net iletişim ve zamanında
              hizmet sunuyoruz. Fiyat ve uygulama sürecini baştan şeffaf şekilde paylaştığımız için sürpriz yaşamazsınız.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Ekipman kalitesi, deneyim ve temiz çalışma prensibi sayesinde hem estetik hem dayanıklı bir sonuç elde
              edersiniz. Hedefimiz tek seferlik işlem değil, uzun vadeli memnuniyettir.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Acil montaj ihtiyaçlarında aynı gün servis, özellikle yeni taşınan kullanıcılar için büyük avantaj sağlar.
            Halkalı içi planlamalarda ekip uygunluğuna göre aynı gün randevu açabiliyoruz. Bu hizmet, özellikle salon ve
            yatak odası gibi hızlı şekilde kullanıma alınması gereken alanlarda ciddi kolaylık sunar.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Aynı gün servis talebinizde işin hızlı ilerlemesi için perde ölçüsü, pencere sayısı ve mevcut korniş durumu gibi
            bilgileri önceden paylaşmanız yeterlidir. Bu sayede ekibimiz doğru ekipmanla gelir ve halkalı korniş montajı
            işlemi tek ziyarette tamamlanabilir.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Planlama, keşif veya teklif için doğrudan{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfasından
            </Link>{' '}
            bize ulaşabilir, en kısa sürede dönüş alabilirsiniz. Ayrıca genel hizmet yapımızı görmek için{' '}
            <Link to="/" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              ana sayfamızı
            </Link>{' '}
            inceleyebilirsiniz. Bölgesel hizmet içeriklerini karşılaştırmak için diğer lokasyon sayfalarımıza da göz
            atabilirsiniz.
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
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Halkalı’da Montaj İçin Hemen İletişime Geçin</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Halkalı korniş montajı ve perde montajı talebiniz için beklemeden bizimle iletişime geçin. WhatsApp üzerinden
            fotoğraf ve ölçü paylaşabilir, telefonla doğrudan randevu oluşturabilirsiniz.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-green-600 md:text-base"
            >
              💬 WhatsApp ile Hızlı Bilgi Al
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
