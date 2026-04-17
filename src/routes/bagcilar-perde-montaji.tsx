import { Link, createFileRoute } from '@tanstack/react-router'
import { buildFaqSchema } from '@/lib/seo-schema'

const faqItems = [
  {
    question: 'Bağcılar perde montajı için aynı gün destek alabilir miyim?',
    answer:
      'Evet, ekip yoğunluğuna bağlı olarak Bağcılar içinde aynı gün servis planlayabiliyoruz. Güneşli, Mahmutbey, Kirazlı ve 100. Yıl çevresinde hızlı dönüş sağlıyoruz.',
  },
  {
    question: 'Bağcılar korniş montajı fiyatı neye göre belirleniyor?',
    answer:
      'Fiyatlandırma montaj yapılacak alanın ölçüsü, korniş türü ve uygulama zorluğuna göre belirlenir. Ön bilgi sonrası net ve şeffaf teklif paylaşıyoruz.',
  },
  {
    question: 'Korniş ustası Bağcılar hizmetiniz ofisler için de uygun mu?',
    answer:
      'Evet. Dairelerin yanında ofis ve mağaza alanlarında da montaj hizmeti sunuyoruz. İşletme düzenini bozmadan planlı ve hızlı uygulama yapıyoruz.',
  },
  {
    question: 'Montaj sonrası perde açma-kapama sorunu olursa ne yapıyorsunuz?',
    answer:
      'Montaj sonrası kullanım kontrolü yapıyoruz. Sonradan ayar ihtiyacı olursa destek vererek sistemin düzgün çalışmasını sağlıyoruz.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bağcılar Perde ve Korniş Montaj Hizmeti',
  telephone: '+905309264830',
  areaServed: ['Bağcılar, Istanbul'],
  serviceType: 'curtain and cornice installation',
}

export const Route = createFileRoute('/bagcilar-perde-montaji')({
  head: () => ({
    meta: [
      { title: 'Bağcılar Perde Montajı ve Korniş Ustası Hizmeti' },
      {
        name: 'description',
        content:
          'Bağcılar perde montajı ve Bağcılar korniş montajı hizmetlerinde hızlı randevu, temiz işçilik ve aynı gün servis. Korniş ustası Bağcılar ekibi ile hemen iletişime geçin.',
      },
    ],
    scripts: [
      { id: 'faqpage-schema', type: 'application/ld+json', children: JSON.stringify(buildFaqSchema(faqItems)) },
      { id: 'localbusiness-schema-bagcilar', type: 'application/ld+json', children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: BagcilarPerdeMontajiPage,
})

function BagcilarPerdeMontajiPage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-14 text-white md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">Bağcılar Yerel Servis Ağı</p>
          <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">Bağcılar Perde Montajı ve Korniş Ustası Hizmeti</h1>
          <p className="max-w-3xl text-base leading-relaxed text-blue-100 md:text-lg">
            Bağcılar perde montajı, Bağcılar korniş montajı ve korniş ustası Bağcılar aramalarında güvenilir ekibe ulaşmak
            isteyenler için hızlı, temiz ve planlı uygulama sunuyoruz. Güneşli, Mahmutbey, Kirazlı ve 100. Yıl çevresinde
            yerel saha deneyimimizle ölçüden montaja kadar tüm süreci tek noktadan yönetiyoruz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Bağcılar’da Yerel İhtiyaca Uygun Çözüm</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bağcılar’da konut yoğunluğu ve sürekli yenilenen yaşam alanları nedeniyle perde ve korniş montajı hizmetleri
            düzenli olarak talep edilir. Ancak her binanın tavan yapısı ve her dairenin pencere planı farklı olduğu için
            montajın doğru hazırlanması gerekir. Ekibimiz, sahadaki tecrübesiyle bu farklılıkları hızlı tespit ederek işe
            uygun uygulama yöntemi belirler.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bağcılar korniş montajı sırasında sağlam sabitleme yapılmadığında kısa sürede gevşeme veya ray hatası oluşabilir.
            Bu nedenle bağlantı noktalarını yüzey tipine göre seçiyor, taşıma dayanımını kontrol ederek teslim ediyoruz.
            Özellikle yoğun kullanılan salon ve çocuk odalarında güvenli montaj yaklaşımı büyük önem taşır.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Bağcılar perde montajı taleplerinde estetik ve kullanım dengesini birlikte düşünüyoruz. Perde yüksekliği, açılma
            yönü ve pencere kenar boşlukları doğru ayarlandığında hem daha şık bir görünüm hem de daha rahat kullanım elde
            edilir. Korniş ustası Bağcılar ekibimiz bu detayları titizlikle uygulayarak uzun vadeli memnuniyet sağlar.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sunduğumuz Hizmetler</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Talep türüne göre özelleştirdiğimiz hizmet akışı sayesinde hem bireysel hem kurumsal kullanıcılar için pratik
              bir montaj süreci sunuyoruz.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              <li>- Tül, zebra, stor ve fon için profesyonel Bağcılar perde montajı</li>
              <li>- Tek ray ve çift ray sistemlerde Bağcılar korniş montajı</li>
              <li>- Eski sistem sökümü ve yeni kurulum</li>
              <li>- Ev, ofis ve mağaza alanlarına uygun montaj planı</li>
              <li>- Son kontrol, ayar ve kullanım bilgilendirmesi</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Detaylı hizmet başlıklarını{' '}
              <Link to="/hizmetler" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
                hizmetler sayfasında
              </Link>{' '}
              inceleyebilirsiniz.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Kaliteli montaj, doğru malzeme kadar doğru uygulama tekniğiyle mümkündür. Ekibimiz hem hız hem kalite dengesini
              koruyarak işçilikten ödün vermeden çalışır.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Korniş ustası Bağcılar ekibimiz randevu saatine sadık kalır, çalışma alanını korur ve montaj sonunda temiz
              teslim yapar. Süreç boyunca ne yapılacağını net şekilde aktarırız.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Böylece hem hızlı sonuç alır hem de montaj sonrası tekrar sorun yaşama ihtimalinizi düşürürsünüz.
            </p>
          </article>
        </div>
      </section>

      <section className="px-4 pb-12 md:pb-14">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Aynı Gün Servis Bilgisi</h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Acil montaj gereken durumlarda aynı gün servis planlaması ciddi avantaj sağlar. Bağcılar içinde ekip uygunluğuna
            göre hızlı randevu açıyor, özellikle Güneşli ve Mahmutbey bölgesinde yoğun talepleri günlük planla karşılıyoruz.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Bağcılar perde montajı veya korniş montajı talebinizde pencere sayısı ve perde türünü önceden paylaşırsanız ekipler
            hazırlıklı gelir ve uygulama süresi kısalır.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Hızlı dönüş almak için{' '}
            <Link to="/iletisim" className="font-semibold text-blue-700 no-underline hover:text-blue-900">
              iletişim sayfamızdan
            </Link>{' '}
            bize yazabilir, genel hizmet yapımız için{' '}
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
            Diğer lokasyon sayfalarına da göz atabilirsiniz: {' '}
            <Link to="/basaksehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Başakşehir</Link>,{' '}
            <Link to="/ikitelli-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">İkitelli</Link>,{' '}
            <Link to="/kucukcekmece-kornis-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Küçükçekmece</Link> ve{' '}
            <Link to="/bahcesehir-perde-montaji" className="font-semibold text-blue-700 no-underline hover:text-blue-900">Bahçeşehir</Link>.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 p-7 text-white shadow-xl md:p-9">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Bağcılar’da Montaj İçin Hemen İletişime Geçin</h2>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Bağcılar perde montajı ve korniş montajı için hızlı çözüm arıyorsanız şimdi ulaşın. WhatsApp üzerinden bilgi
            gönderin veya doğrudan arayarak randevunuzu anında oluşturun.
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
