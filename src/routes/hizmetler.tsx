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

function HizmetlerPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A2E4A] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-blue-200 text-lg">
            İstanbul'da ev ve iş yeriniz için eksiksiz perde ve korniş çözümleri.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{service.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-[#1A2E4A] mb-2">{service.title}</h2>
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A2E4A] mb-4">Neden PerdeUsta?</h2>
          <p className="text-gray-600 mb-12">
            İstanbul'da perde montajı konusunda 20 yıldır güvenle tercih ediliyoruz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: '20 Yıllık Deneyim',
                desc: 'İstanbul\'un her köşesinde binlerce montaj gerçekleştirdik. Tecrübemiz en büyük güvenceniz.',
              },
              {
                icon: '🛡️',
                title: 'Garantili İşçilik',
                desc: 'Tüm montaj işlemlerimiz 2 yıl işçilik garantisi kapsamındadır. Sorun yaşarsanız ücretsiz geliyoruz.',
              },
              {
                icon: '⭐',
                title: '500+ Mutlu Müşteri',
                desc: 'Google ve Instagram\'da 4.9 yıldız ile İstanbul\'un en beğenilen perde ustasıyız.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-[#F5F5F5]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#1A2E4A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2E4A] py-12 px-4 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ücretsiz Keşif İçin Hemen Arayın</h2>
          <p className="text-blue-200 mb-6">Uzman ekibimiz evinize gelsin, size özel teklif hazırlasın.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+905309264830"
              className="flex items-center justify-center gap-2 bg-white text-[#1A2E4A] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors no-underline"
            >
              📞 Hemen Ara
            </a>
            <a
              href="https://wa.me/905309264830"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors no-underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
