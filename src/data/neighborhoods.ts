export interface Neighborhood {
  slug: string
  name: string
  district: string
  description: string
  content: string
  keywords: string[]
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'halkali',
    name: 'Halkalı',
    district: 'Küçükçekmece',
    description: 'Halkalı ve çevresinde perde montajı, korniş kurulumu hizmetleri.',
    content:
      'Halkalı\'da perde montajı ve korniş kurulumu konusunda İstanbul\'un en güvenilir ekibiyiz. Halkalı Merkez, Halkalı Caddesi ve tüm Halkalı mahallelerinde hizmet veriyoruz. Stor perde, jaluzi, zebra perde ve tül perde montajı için bizi arayın.',
    keywords: ['Halkalı perde montajı', 'Halkalı korniş', 'Halkalı stor perde', 'Halkalı jaluzi montajı'],
  },
  {
    slug: 'ikitelli',
    name: 'İkitelli',
    district: 'Başakşehir',
    description: 'İkitelli\'de profesyonel perde ve korniş montaj hizmetleri.',
    content:
      'İkitelli Organize Sanayi Bölgesi çevresinde yaşayan ailelere kaliteli perde ve korniş montajı sunuyoruz. İkitelli\'nin tüm mahallelerinde aynı gün servis imkânı ile hizmetinizdeyiz.',
    keywords: ['İkitelli perde montajı', 'İkitelli korniş', 'İkitelli zebra perde', 'İkitelli stor perde'],
  },
  {
    slug: 'bahcelievler',
    name: 'Bahçelievler',
    district: 'Bahçelievler',
    description: 'Bahçelievler\'de perde montajı, korniş ve jaluzi kurulum hizmetleri.',
    content:
      'Bahçelievler\'de 20 yıllık deneyimimizle ev ve işyerlerinize özel perde çözümleri sunuyoruz. Kısa Caddesi\'nden Soğanlı\'ya tüm Bahçelievler mahallelerinde hizmet veriyoruz.',
    keywords: ['Bahçelievler perde montajı', 'Bahçelievler korniş', 'Bahçelievler jaluzi', 'Bahçelievler zebra perde'],
  },
  {
    slug: 'zeytinburnu',
    name: 'Zeytinburnu',
    district: 'Zeytinburnu',
    description: 'Zeytinburnu\'nda güvenilir perde ve korniş montaj hizmeti.',
    content:
      'Zeytinburnu\'nda Merkezefendi, Sümer ve Telsiz mahallelerinde perde ve korniş montajı yapıyoruz. Uygun fiyat garantisi ve ücretsiz keşif ile evinizi güzelleştiriyoruz.',
    keywords: ['Zeytinburnu perde montajı', 'Zeytinburnu korniş', 'Zeytinburnu stor perde', 'Zeytinburnu tül perde'],
  },
  {
    slug: 'bahcesehir',
    name: 'Bahçeşehir',
    district: 'Başakşehir',
    description: 'Bahçeşehir\'de perde montajı, stor perde ve korniş kurulum hizmetleri.',
    content:
      'Bahçeşehir\'in 1. ve 2. Kısım mahallelerinde profesyonel perde montajı ve korniş kurulumu yapıyoruz. Modern konutlara uygun zebra perde ve stor perde çözümleri sunuyoruz.',
    keywords: ['Bahçeşehir perde montajı', 'Bahçeşehir korniş', 'Bahçeşehir zebra perde', 'Bahçeşehir stor perde'],
  },
  {
    slug: 'bagcilar',
    name: 'Bağcılar',
    district: 'Bağcılar',
    description: 'Bağcılar\'da uygun fiyatlı perde ve korniş montaj hizmeti.',
    content:
      'Bağcılar\'da Güneşli\'den Kirazlı\'ya tüm mahallelerde perde ve korniş montajı yapıyoruz. Uygun fiyatlı perde montajı için İstanbul\'un en tecrübeli ekibiyiz.',
    keywords: ['Bağcılar perde montajı', 'Bağcılar korniş', 'Bağcılar uygun fiyat perde', 'Bağcılar jaluzi'],
  },
  {
    slug: 'basaksehir',
    name: 'Başakşehir',
    district: 'Başakşehir',
    description: 'Başakşehir\'de korniş montajı, perde kurulumu ve jaluzi hizmetleri.',
    content:
      'Başakşehir\'in tüm sitelerinde ve apartmanlarında perde montajı ve korniş kurulumu yapıyoruz. Yeni binalar için özellikle stor perde ve zebra perde çözümlerimiz çok tercih edilmektedir.',
    keywords: ['Başakşehir korniş montajı', 'Başakşehir perde', 'Başakşehir stor perde', 'Başakşehir zebra perde'],
  },
  {
    slug: 'bakirkoy',
    name: 'Bakırköy',
    district: 'Bakırköy',
    description: 'Bakırköy\'de profesyonel perde montajı ve korniş kurulum hizmeti.',
    content:
      'Bakırköy, Ataköy ve Yeşilköy\'de perde montajı yapıyoruz. Yüksek kaliteli malzeme ve garantili işçilik ile evinize özel perde çözümleri sunuyoruz.',
    keywords: ['Bakırköy perde montajı', 'Bakırköy korniş', 'Bakırköy tül perde', 'Bakırköy zebra perde'],
  },
  {
    slug: 'kucukcekmece',
    name: 'Küçükçekmece',
    district: 'Küçükçekmece',
    description: 'Küçükçekmece\'de perde montajı, korniş ve stor perde kurulumu.',
    content:
      'Küçükçekmece, Atakent, Cennet ve Kanarya mahallelerinde perde ve korniş montajı hizmetleri sunuyoruz. Ücretsiz keşif için bizi arayın.',
    keywords: ['Küçükçekmece perde montajı', 'Küçükçekmece korniş', 'Küçükçekmece stor perde', 'Küçükçekmece jaluzi'],
  },
  {
    slug: 'arnavutkoy',
    name: 'Arnavutköy',
    district: 'Arnavutköy',
    description: 'Arnavutköy\'de perde montajı ve korniş kurulumu hizmetleri.',
    content:
      'Arnavutköy\'de Hadımköy ve Boyalık mahallelerine kadar geniş hizmet bölgemizde perde montajı yapıyoruz. Yeni yapılaşma bölgelerine özel uygun fiyatlı perde paketi çözümlerimiz mevcuttur.',
    keywords: ['Arnavutköy perde montajı', 'Arnavutköy korniş', 'Arnavutköy stor perde', 'Arnavutköy zebra perde'],
  },
]

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}
