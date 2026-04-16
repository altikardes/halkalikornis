import { createFileRoute, notFound, Link } from '@tanstack/react-router'
import { getNeighborhoodBySlug } from '@/data/neighborhoods'
import { services } from '@/data/services'

export const Route = createFileRoute('/hizmet-bolgeleri/$bolge')({
  head: ({ params }) => {
    const n = getNeighborhoodBySlug(params.bolge)
    if (!n) return { meta: [{ title: 'Sayfa Bulunamadı' }] }
    return {
      meta: [
        {
          title: `${n.name} Perde Montajı ve Korniş Kurulumu | PerdeUsta İstanbul`,
        },
        {
          name: 'description',
          content: `${n.name}'da perde montajı, korniş kurulumu, stor perde ve jaluzi hizmetleri. Profesyonel ekip, garantili işçilik, ücretsiz keşif. ${n.keywords[0]}.`,
        },
        {
          property: 'og:title',
          content: `${n.name} Perde Montajı | PerdeUsta`,
        },
      ],
    }
  },
  loader: ({ params }) => {
    const n = getNeighborhoodBySlug(params.bolge)
    if (!n) throw notFound()
    return n
  },
  component: BolgeDetailPage,
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold text-[#1A2E4A]">Bölge bulunamadı</h1>
      <Link to="/hizmet-bolgeleri" className="text-blue-500 mt-4 inline-block">← Tüm bölgeler</Link>
    </div>
  ),
})

function BolgeDetailPage() {
  const n = Route.useLoaderData()

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1A2E4A] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-300 text-sm mb-2">
            <Link to="/hizmet-bolgeleri" className="hover:text-white no-underline">Hizmet Bölgeleri</Link>
            {' → '}
            {n.name}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {n.name} Perde Montajı ve Korniş Kurulumu
          </h1>
          <p className="text-blue-200 text-lg">{n.description}</p>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-[#1A2E4A] mb-4">
                {n.name}'da Perde ve Korniş Hizmetleri
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{n.content}</p>

              <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-[#1A2E4A] mb-3">Arama Kelimeleri</h3>
                <div className="flex flex-wrap gap-2">
                  {n.keywords.map((kw) => (
                    <span key={kw} className="bg-white border text-gray-600 text-sm px-3 py-1 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#1A2E4A] mb-4">
                {n.name}'da Sunduğumuz Hizmetler
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {services.map((s) => (
                  <div key={s.id} className="flex items-center gap-2 p-3 bg-[#F5F5F5] rounded-xl">
                    <span>{s.icon}</span>
                    <span className="text-sm font-medium text-[#1A2E4A]">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#1A2E4A] text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">{n.name} İçin Hemen Arayın</h3>
                <p className="text-blue-200 text-sm mb-6">
                  Ücretsiz keşif ve fiyat teklifi için şimdi iletişime geçin.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+905309264830"
                    className="flex items-center justify-center gap-2 bg-white text-[#1A2E4A] py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors no-underline"
                  >
                    📞 Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905309264830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors no-underline"
                  >
                    💬 WhatsApp
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-800">
                  <div className="flex items-center gap-2 text-sm text-blue-200 mb-2">
                    <span>✅</span> Ücretsiz keşif
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200 mb-2">
                    <span>✅</span> Aynı gün servis
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200 mb-2">
                    <span>✅</span> Garantili işçilik
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-200">
                    <span>✅</span> Uygun fiyat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="bg-[#F5F5F5] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-[#1A2E4A] mb-6">Diğer Hizmet Bölgelerimiz</h2>
          <Link
            to="/hizmet-bolgeleri"
            className="inline-flex items-center gap-2 border-2 border-[#1A2E4A] text-[#1A2E4A] px-6 py-3 rounded-xl font-semibold hover:bg-[#1A2E4A] hover:text-white transition-colors no-underline"
          >
            Tüm Bölgeleri Gör →
          </Link>
        </div>
      </section>
    </div>
  )
}
