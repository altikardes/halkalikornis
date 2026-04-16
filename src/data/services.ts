export interface Service {
  id: string
  title: string
  description: string
  longDescription: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'perde-montaji',
    title: 'Perde Montajı',
    description: 'Her türlü perde modeli için profesyonel montaj hizmeti. Ölçüm, kesim ve kurulum dahil.',
    longDescription:
      'Evinizdeki her odaya özel perde çözümleri sunuyoruz. Kumaş perden başlayarak özel dikim perdelere kadar tüm perde modellerini profesyonel ekibimizle monte ediyoruz. Ücretsiz keşif hizmetimizle evinizie gelip en uygun perde çözümünü belirliyoruz.',
    icon: '🪟',
    features: ['Ücretsiz ölçüm', 'Aynı gün montaj', 'Garanti belgesi', 'Sonrası temizlik'],
  },
  {
    id: 'kornis-montaji',
    title: 'Korniş Montajı',
    description: 'Ahşap, metal ve PVC korniş sistemleri kurulumu. Sağlam ve estetik montaj.',
    longDescription:
      'Farklı iç mekan stillerine uygun ahşap, metal ve PVC korniş seçeneklerimizle evinize zarif bir görünüm kazandırıyoruz. Uzman ekibimiz korniş montajını hızlı ve sağlam biçimde gerçekleştirir.',
    icon: '📐',
    features: ['Ahşap korniş', 'Metal ray sistemi', 'PVC korniş', 'Çift ray seçeneği'],
  },
  {
    id: 'stor-perde',
    title: 'Stor Perde',
    description: 'Işık kontrolü ve modern görünüm için stor perde sistemleri. Elektrikli seçenek mevcut.',
    longDescription:
      'Stor perdeler, ışık geçirgenliği ayarlanabilir yapısıyla hem fonksiyonel hem de şık bir çözüm sunar. Manuel ve elektrikli stor perde sistemleri kurulumu yapıyoruz.',
    icon: '🔆',
    features: ['Blackout seçeneği', 'Elektrikli motor', 'Kolay kullanım', 'Farklı renk seçenekleri'],
  },
  {
    id: 'jaluzi',
    title: 'Jaluzi Montajı',
    description: 'Yatay ve dikey jaluzi sistemleri. Ofis ve ev için ideal ışık kontrol çözümü.',
    longDescription:
      'Alüminyum, ahşap ve PVC jaluzi seçeneklerimizle pencerelerinize hem işlevsel hem de estetik bir görünüm kazandırıyoruz. Yatay ve dikey jaluzi sistemleri kurulumu yapıyoruz.',
    icon: '🏢',
    features: ['Alüminyum jaluzi', 'Ahşap jaluzi', 'Dikey jaluzi', 'Ofis tipi'],
  },
  {
    id: 'tul-perde',
    title: 'Tül Perde',
    description: 'Şeffaf ve yarı şeffaf tül perde modelleri. Işığı süzerek gizliliğinizi korur.',
    longDescription:
      'Tül perdeler, güneş ışığını yumuşatarak odanıza sıcak bir atmosfer katarken mahremiyet sağlar. Farklı doku ve desenlerde tül perde montaj hizmetimizden yararlanın.',
    icon: '✨',
    features: ['Yarı şeffaf modeller', 'Baskılı desenler', 'Beyaz & krem tonda', 'Kolay yıkama'],
  },
  {
    id: 'zebra-perde',
    title: 'Zebra Perde',
    description: 'Modern çizgili yapısıyla ışık ayarlanabilir zebra perde sistemleri.',
    longDescription:
      'Zebra perdeler, şeffaf ve opak bantlarının birleşimiyle istediğiniz ışık miktarını ayarlamanızı sağlar. Minimalist ve modern dekorasyon anlayışına mükemmel uyum sağlar.',
    icon: '🦓',
    features: ['Işık kontrolü', 'Modern tasarım', 'Kolay montaj', 'Uzun ömürlü'],
  },
]
