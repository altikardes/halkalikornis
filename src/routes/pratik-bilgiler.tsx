import { createFileRoute } from '@tanstack/react-router'
import pratikBilgilerMd from '../../content/pratik-bilgiler.md?raw'
import { PratikBilgilerArticle } from '@/components/pratik-bilgiler/PratikBilgilerArticle'
import { PratikBilgilerCta } from '@/components/pratik-bilgiler/PratikBilgilerCta'
import { PratikBilgilerFaq } from '@/components/pratik-bilgiler/PratikBilgilerFaq'
import { parsePratikBilgilerMarkdown } from '@/lib/parse-pratik-bilgiler-md'
import { buildFaqSchema } from '@/lib/seo-schema'

const SITE_ORIGIN = 'https://halkalikornis.com.tr'
const PAGE_PATH = '/pratik-bilgiler'
const PAGE_URL = `${SITE_ORIGIN}${PAGE_PATH}`

const parsedPratikBilgiler = parsePratikBilgilerMarkdown(pratikBilgilerMd)

const pageTitle = 'Pratik Bilgiler | Tül Perde, Temizlik ve Korniş Montajı Rehberi'
const pageDescription =
  'Tül perde seçimi, perde yıkama ve beyazlatma, toz alma, korniş montajı ve bakımı hakkında pratik bilgiler. Sık sorulan sorular ve İstanbul’da profesyonel montaj için halkalikornis.com.tr.'

export const Route = createFileRoute('/pratik-bilgiler')({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: 'description', content: pageDescription },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: pageDescription },
      { property: 'og:url', content: PAGE_URL },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'halkalikornis.com.tr' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: PAGE_URL }],
    scripts:
      parsedPratikBilgiler.faq.length > 0
        ? [
            {
              id: 'faqpage-schema-pratik-bilgiler',
              type: 'application/ld+json',
              children: JSON.stringify(buildFaqSchema(parsedPratikBilgiler.faq)),
            },
          ]
        : [],
  }),
  component: PratikBilgilerPage,
})

function PratikBilgilerPage() {
  const { introNote, sections, faq } = parsedPratikBilgiler

  return (
    <div className="bg-slate-50">
      <section className="bg-[#1A2E4A] px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Tül Perde, Temizlik ve Korniş Montajı – Pratik Bilgiler
          </h1>
          <p className="text-base leading-relaxed text-blue-100 md:text-lg">
            Perde seçimi, bakım, temizlik ve korniş montajıyla ilgili özet rehber; sık sorulan sorular ve yerel hizmet
            bağlantılarıyla güncellenmiş içerik.
          </p>
        </div>
      </section>

      {introNote ? (
        <section className="px-4 pt-10 md:pt-12" aria-label="İçerik notu">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">{introNote}</p>
          </div>
        </section>
      ) : null}

      <section className={`px-4 py-14 md:py-16 ${introNote ? 'pt-8 md:pt-10' : ''}`}>
        <div className="mx-auto max-w-4xl">
          <PratikBilgilerArticle sections={sections} />
        </div>
      </section>

      {faq.length > 0 ? (
        <section className="px-4 pb-14 md:pb-16" aria-labelledby="pratik-bilgiler-faq-heading">
          <div className="mx-auto max-w-4xl">
            <h2
              id="pratik-bilgiler-faq-heading"
              className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Sık Sorulan Sorular
            </h2>
            <PratikBilgilerFaq items={faq} />
          </div>
        </section>
      ) : null}

      <PratikBilgilerCta />
    </div>
  )
}
