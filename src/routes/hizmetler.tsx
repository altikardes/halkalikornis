import { createFileRoute } from '@tanstack/react-router'
import { services } from '@/data/services'

export const Route = createFileRoute('/hizmetler')({
  head: () => ({
    meta: [
      { title: 'Hizmetlerimiz - Perde Montajı, Korniş, Stor, Jaluzi | PerdeUsta İstanbul' },
      {
        name: 'description',
        content:
          'İstanbul\'da perde montajı, korniş montajı, stor perde, jaluzi montajı, tül perde ve zebra perde kurulum hizmetleri. Profesyonel ekip, garantili işçilik.',
      },
      { property: 'og:title', content: 'Hizmetlerimiz | PerdeUsta İstanbul' },
    ],
  }),
  component: HizmetlerPage,
})

const serviceImages: Record<string, string> = {
  'perde-montaji': 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80&w=800',
  'kornis-montaji': 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86c?auto=format&fit=crop&q=80&w=800',
  'stor-perde': 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800',
  'jaluzi': 'https://images.unsplash.com/photo-1528318269466-69fc65070a2b?auto=format&fit=crop&q=80&w=800',
  'tul-perde': 'https://images.unsplash.com/photo-1522771731478-446370ba05b9?auto=format&fit=crop&q=80&w=800',
  'zebra-perde': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
}

function HizmetlerPage() {
  return (
    <div className="bg-slate-50/50 selection:bg-blue-200 selection:text-blue-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-4 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 border border-blue-700/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-200 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
            Kapsamlı Montaj Desteği
          </p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl lg:text-6xl">Hizmetlerimiz</h1>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-blue-100/90 md:text-lg">
            İstanbul genelinde ev ve iş yeriniz için ihtiyacınız olan tüm perde ve korniş çözümlerini tek çatı altında sunuyoruz. Uzman ekibimizle yaşam alanlarınızı güvenle yenileyin.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-10" />
                  <img src={serviceImages[service.id] || serviceImages['perde-montaji']} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <h2 className="absolute bottom-4 left-6 z-20 text-2xl font-bold text-white tracking-tight">{service.title}</h2>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4 md:text-4xl">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            İstanbul'da montaj konusunda yılların getirdiği tecrübe ile kaliteden ödün vermeden çalışıyoruz. Bizi öne çıkaran en önemli değerlerimiz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Alanında Uzman Ekip',
                desc: 'İstanbul\'un farklı yapı tiplerinde binlerce montaj gerçekleştirdik. Tavan yapınıza uygun malzeme ve tekniği ilk bakışta belirleriz.',
              },
              {
                icon: '🛡️',
                title: 'Sağlam & Temiz İşçilik',
                desc: 'Kullandığımız dübelden vida seçimine kadar her adımda uzun ömürlü bir sabitleme hedefler, işlem sonrası mekanı temiz bırakırız.',
              },
              {
                icon: '⭐',
                title: 'Hızlı ve Şeffaf İletişim',
                desc: 'Randevu saatine sadık kalır, işlem maliyetini sürprizlere yer vermeden baştan paylaşır ve aynı gün çözüm sunmayı hedefleriz.',
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 transition-all hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-[#1A2E4A] to-[#2c4b7c] px-6 py-14 text-center text-white shadow-2xl md:px-12 md:py-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Hızlı Randevu ve Fiyat Teklifi Alın</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            Mekana uygun seçimi birlikte yapalım, evinize veya ofisinize en çok yakışan ürünü güvenle kullanıma sunalım.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/905309264830?text=Merhaba%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 no-underline"
            >
              💬 WhatsApp ile Ulaş
            </a>
            <a
              href="tel:+905309264830"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-xl no-underline"
            >
              📞 Hemen Arayın
            </a>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://instagram.com/perdeusta75"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-blue-100 ring-1 ring-white/20 transition-all hover:bg-white/20 hover:text-white hover:ring-white/30 no-underline"
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Instagram'da Bizi Takip Edin: @perdeusta75
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
