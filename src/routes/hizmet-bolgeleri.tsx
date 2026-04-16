import { createFileRoute, Link } from '@tanstack/react-router'
import { neighborhoods } from '@/data/neighborhoods'

export const Route = createFileRoute('/hizmet-bolgeleri')({
  head: () => ({
    meta: [
      { title: 'Hizmet Bölgelerimiz - İstanbul Perde Montajı | PerdeUsta' },
      {
        name: 'description',
        content:
          'Halkalı, İkitelli, Bahçelievler, Zeytinburnu, Bahçeşehir, Bağcılar, Başakşehir, Bakırköy, Küçükçekmece ve Arnavutköy\'de perde montajı ve korniş kurulum hizmetleri.',
      },
    ],
  }),
  component: HizmetBolgeleriPage,
})

function HizmetBolgeleriPage() {
  return (
    <div>
      <div className="bg-[#1A2E4A] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hizmet Bölgelerimiz</h1>
          <p className="text-blue-200 text-lg">
            İstanbul'un bu ilçelerinde ücretsiz keşif ve profesyonel perde montajı yapıyoruz.
          </p>
        </div>
      </div>

      <section className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                to="/hizmet-bolgeleri/$bolge"
                params={{ bolge: n.slug }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all no-underline group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h2 className="font-bold text-[#1A2E4A] group-hover:text-blue-600 transition-colors">
                      {n.name}
                    </h2>
                    <p className="text-gray-400 text-xs">{n.district} İlçesi</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{n.description}</p>
                <div className="flex flex-wrap gap-2">
                  {n.keywords.slice(0, 2).map((kw) => (
                    <span key={kw} className="text-xs bg-[#F5F5F5] text-gray-500 px-2 py-1 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-blue-500 text-sm font-medium group-hover:text-blue-700">
                  Detayları Gör →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2E4A] py-12 px-4 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Bölgeniz Listede Yok mu?</h2>
          <p className="text-blue-200 mb-6">
            İstanbul'un diğer ilçelerine de hizmet veriyoruz. Bizi arayın, bölgenize gelelim!
          </p>
          <a
            href="tel:+905309264830"
            className="inline-flex items-center gap-2 bg-white text-[#1A2E4A] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors no-underline"
          >
            📞 Hemen Arayın
          </a>
        </div>
      </section>
    </div>
  )
}
