import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Korniş ve Perde Montajı İstanbul | Hızlı Usta Hizmeti' },
      {
        name: 'description',
        content:
          'İstanbul genelinde hızlı korniş montajı ve perde montajı hizmeti. 500+ müşteri, aynı gün servis ve garantili işçilik ile Halkalı, İkitelli, Başakşehir ve çevresinde profesyonel uygulama.',
      },
      { property: 'og:title', content: 'Korniş ve Perde Montajı İstanbul | Hızlı Usta Hizmeti' },
    ],
  }),
  component: HomePage,
})

const trustBadges = [
  { title: '500+ müşteri', desc: 'İstanbul genelinde tamamlanan montaj' },
  { title: 'Aynı gün servis', desc: 'Müsaitlik durumuna göre hızlı randevu' },
  { title: 'Garantili işçilik', desc: 'Sağlam ve temiz uygulama garantisi' },
]

const serviceAreas = [
  'Halkalı',
  'İkitelli',
  'Başakşehir',
  'Bahçeşehir',
  'Bağcılar',
  'Küçükçekmece',
  'Bakırköy',
  'Zeytinburnu',
]

function HomePage() {
  return (
    <div className="bg-slate-50">
      <section className="px-4 pt-10 pb-14 md:pt-16 md:pb-20" aria-label="Korniş montajı ve perde montajı hero bölümü">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              İstanbul Korniş Montajı & Perde Montajı
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
              Evinize aynı gün gelen usta ile hızlı ve temiz montaj
            </h1>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Profesyonel ekip ile korniş montajı ve perde montajı hizmetini güvenle alın. Randevu sonrası hızlı keşif,
              net fiyatlandırma ve garantili işçilik sunuyoruz.
            </p>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+905309264830"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-slate-700 no-underline"
              >
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905309264830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-green-600 no-underline"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-sm text-slate-500">Halkalı merkezli ekip ile İstanbul Avrupa Yakası genelinde hizmet.</p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src="/images/1.jpg"
              alt="İstanbul'da profesyonel korniş montajı yapılan modern salon"
              className="h-full min-h-[280px] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Güven unsurları">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="mb-1 text-xl font-bold text-slate-900">{badge.title}</h2>
              <p className="text-sm text-slate-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Hizmet içeriği">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/2.jpg"
              alt="Evde perde montajı yapan usta ekibi"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-slate-900">Perde Montajı</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Tül, fon, zebra, stor ve jaluzi perde montajı ölçüye uygun şekilde yapılır. Düzgün hizalama, temiz işçilik
                ve uzun ömürlü kullanım hedeflenir.
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/3.jpg"
              alt="Yeni takılmış korniş sistemi ve perde uygulaması"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-slate-900">Korniş Montajı</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Beton, alçıpan ve farklı duvar tiplerine uygun güvenli korniş montajı yapılır. Eski sistem sökümü ve yeni
                sistem kurulumu tek ziyarette tamamlanır.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Montaj çalışmalarından örnek galeri">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold text-slate-900">Uygulama Galerisi</h2>
            <p className="text-sm text-slate-600">Gerçek daire ve ofis uygulamalarından seçilmiş montaj örnekleri.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: '/images/4.jpg',
                alt: 'Halkalı bölgesinde tamamlanmış korniş montajı ve tül perde uygulaması',
              },
              {
                src: '/images/5.jpg',
                alt: 'Başakşehir dairesinde yapılan perde montajı ve ray hizalama çalışması',
              },
              {
                src: '/images/6.jpg',
                alt: 'Bakırköy ofisinde profesyonel stor perde montajı uygulaması',
              },
            ].map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 md:pb-20" aria-label="Hizmet Verdiğimiz Bölgeler">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-5 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="mt-2 text-sm text-slate-600">
              Bu bölgelerde aynı gün korniş montajı ve perde montajı için hızlı randevu oluşturabilirsiniz.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20" aria-label="İletişim çağrısı">
        <div className="mx-auto w-full max-w-6xl rounded-3xl bg-slate-900 px-6 py-10 text-center text-white shadow-xl md:px-8">
          <h2 className="mb-3 text-3xl font-bold">Bugün randevu alın, montajı ertelemeyin</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-slate-300">
            Hızlı fiyat almak için bizi hemen arayın veya WhatsApp’tan fotoğraf paylaşın. Ekip planlamasına göre aynı gün
            servis için yönlendirme yapalım.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+905309264830"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-slate-900 transition-colors hover:bg-slate-200 no-underline"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905309264830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-green-600 no-underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
