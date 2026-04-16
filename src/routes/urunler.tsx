import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/urunler')({
  head: () => ({
    meta: [
      { title: 'Ürünlerimiz - Perde, Korniş, Stor, Jaluzi Çeşitleri | PerdeUsta İstanbul' },
      {
        name: 'description',
        content:
          'İstanbul\'da perde, korniş, stor perde, jaluzi, zebra perde ve tül perde ürün kataloğu. Geniş renk ve model seçenekleri. Ücretsiz keşif ile evinize en uygun ürünü seçin.',
      },
    ],
  }),
  component: UrunlerPage,
})

const productCategories = [
  {
    name: 'Perdeler',
    icon: '🪟',
    products: [
      {
        name: 'Zebra Perde',
        desc: 'Modern ve şık bir görünüm sunan zebra perdeler, ışık kontrolünü kolaylaştırır ve her ortama uyum sağlar. Hem dekoratif hem kullanışlı bir çözümdür.',
      },
      {
        name: 'Stor Perde',
        desc: 'Minimal ve sade tasarımı ile stor perdeler, ofis ve ev kullanımı için idealdir. Kolay temizlenir ve uzun ömürlüdür.',
      },
      {
        name: 'Tül Perde',
        desc: 'Evinize ferahlık ve zarafet katan tül perdeler, gün ışığını yumuşatarak doğal bir atmosfer oluşturur.',
      },
      {
        name: 'Fon Perde',
        desc: 'Dekorasyonu tamamlayan fon perdeler, hem estetik hem de ışık kontrolü açısından önemli bir tamamlayıcıdır.',
      },
    ],
  },
  {
    name: 'Jaluziler',
    icon: '🏢',
    products: [
      { name: 'Alüminyum Jaluzi', desc: 'Dayanıklı ve hafif yapısı sayesinde hem ofis hem yaşam alanlarında uzun ömürlü kullanım sağlar.' },
      { name: 'Ahşap Jaluzi', desc: 'Doğal dokusu ile mekana sıcaklık katar, dekoratif görünüm ile fonksiyonel kullanım sunar.' },
      { name: 'Dikey Jaluzi', desc: 'Geniş cam yüzeylerde ışık kontrolünü kolaylaştırır ve modern bir görünüm oluşturur.' },
      { name: 'Bambu Jaluzi', desc: 'Doğal malzeme yapısıyla sade ve çevre dostu bir çözüm arayanlar için ideal bir tercihtir.' },
    ],
  },
  {
    name: 'Korniş Sistemleri',
    icon: '📐',
    products: [
      { name: 'Ahşap Korniş', desc: 'Klasik dekorasyon tarzına uyum sağlayan, sağlam ve estetik bir korniş seçeneğidir.' },
      { name: 'Metal Ray Korniş', desc: 'Modern çizgisi ve dayanıklı yapısı ile perde montajı için güvenli kullanım sunar.' },
      { name: 'PVC Korniş', desc: 'Ekonomik ve pratik bir çözüm isteyenler için hafif, dayanıklı ve kullanışlı bir alternatiftir.' },
      { name: 'Çift Ray Korniş', desc: 'Tül ve fon perdeyi birlikte kullanmak isteyenler için düzenli ve işlevsel montaj imkanı sunar.' },
    ],
  },
]

const productIconByName: Record<string, string> = {
  'Zebra Perde': '🟫',
  'Stor Perde': '⬜',
  'Tül Perde': '🌤️',
  'Fon Perde': '🧵',
  'Alüminyum Jaluzi': '🪙',
  'Ahşap Jaluzi': '🪵',
  'Dikey Jaluzi': '📏',
  'Bambu Jaluzi': '🎋',
  'Ahşap Korniş': '🪵',
  'Metal Ray Korniş': '📐',
  'PVC Korniş': '⚪',
  'Çift Ray Korniş': '➖',
}

function UrunlerPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#1A2E4A] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Perde ve Korniş Çözüm Seçenekleri</h1>
          <p className="text-blue-200 text-lg">
            Hizmet odaklı yaklaşımımızla ev ve iş yeriniz için doğru perde ve korniş çözümünü belirliyor,
            profesyonel perde montajı ve korniş montajı ile uyguluyoruz.
          </p>
        </div>
      </div>

      {/* Product Categories */}
      <div className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-14">
          {productCategories.map((cat) => (
            <section key={cat.name} aria-label={cat.name}>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-[#1A2E4A]">{cat.name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.products.map((p) => {
                  const icon = productIconByName[p.name] ?? '🪟'
                  return (
                    <article
                      key={p.name}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-xl" aria-hidden="true">
                        {icon}
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-[#1A2E4A]">{p.name}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#1A2E4A] py-12 px-4 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Hangi Ürün Size Uygun?</h2>
          <p className="text-blue-200 mb-6">
            Ücretsiz keşif ile mekana uygun seçimi birlikte yapalım ve montajı aynı gün planlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+905309264830"
              className="flex items-center justify-center gap-2 bg-white text-[#1A2E4A] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors no-underline"
            >
              📞 Ücretsiz Keşif
            </a>
            <a
              href="https://wa.me/905309264830?text=Merhaba%20korni%C5%9F%20montaj%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum"
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
