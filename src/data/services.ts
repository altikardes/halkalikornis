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
    title: 'Profesyonel Perde Montajı',
    description: 'Tül, fon, stor ve jaluzi dahil tüm perde modelleri için ölçüye uygun, kusursuz montaj hizmeti.',
    longDescription:
      'Yaşam alanlarına estetik katan perdelerinizin montajını büyük bir titizlikle gerçekleştiriyoruz. Kumaş perdeden özel dikim modellere, stordan jaluziye kadar tüm sistemleri uzman ekibimizle kuruyoruz. Ücretsiz keşif hizmetimizle adresinize gelerek pencere yapınıza en uygun montaj planını belirliyor, temiz ve güvenli bir şekilde teslim ediyoruz.',
    icon: '🪟',
    features: ['Ücretsiz Keşif ve Ölçüm', 'Aynı Gün Hızlı Montaj', 'Garantili İşçilik', 'Montaj Sonrası Temizlik'],
  },
  {
    id: 'kornis-montaji',
    title: 'Korniş Kurulumu ve Yenileme',
    description: 'Ahşap, metal, alüminyum ve PVC korniş sistemleri için uzun ömürlü ve sağlam sabitleme.',
    longDescription:
      'Doğru korniş montajı, perdelerinizin akıcı ve sorunsuz çalışması için kritik öneme sahiptir. Tavan ve duvar yapınızı analiz ederek (alçıpan, beton vb.) en uygun dübel ve bağlantı elemanlarını kullanıyoruz. Sarkma veya kopma riskini tamamen ortadan kaldıran güvenli korniş uygulamaları sunuyoruz.',
    icon: '📐',
    features: ['Alçıpan/Beton Uyumu', 'Alüminyum ve Plastik Ray', 'Eski Korniş Sökümü', 'Ağır Yük Dayanımı'],
  },
  {
    id: 'stor-perde',
    title: 'Stor Perde Sistemleri',
    description: 'Işık kontrolü ve şık görünüm sunan manuel veya motorlu stor perde montajı.',
    longDescription:
      'Evinize veya ofisinize modern bir dokunuş katan stor perdeler, ışık geçirgenliğini dilediğiniz gibi ayarlamanızı sağlar. Tam karartma (blackout) veya yarı geçirgen kumaşlara sahip storlarınızı, dilerseniz motorlu sistemlerle entegre ederek hızlıca kullanıma hazır hale getiriyoruz.',
    icon: '🔆',
    features: ['Blackout (Karartma)', 'Motorlu ve Kumandalı', 'Hassas Terazi Ayarı', 'Mekanizma Bakımı'],
  },
  {
    id: 'jaluzi',
    title: 'Jaluzi Sistemleri',
    description: 'Ahşap, alüminyum ve PVC jaluzi sistemleriyle ev ve ofisleriniz için estetik ışık kontrolü.',
    longDescription:
      'Alüminyum, doğal ahşap ve PVC jaluzi seçenekleriyle hem işlevsel hem de dekoratif sonuçlar üretiyoruz. Jaluzi kanatlarının takılmadan sorunsuz dönmesi için montaj sırasında hassas ölçüleme yapıyor, pencere açılımlarını engellemeyecek şekilde konumlandırıyoruz.',
    icon: '🏢',
    features: ['Alüminyum ve Ahşap', 'Ofis ve Plaza Çözümleri', 'Cam İçi Jaluzi', 'Kolay Yön Kontrolü'],
  },
  {
    id: 'tul-perde',
    title: 'Klasik ve Tül Perde',
    description: 'Şeffaf ve yarı şeffaf tül ile fon perdelerinizi dekorasyona uygun şekilde asıyoruz.',
    longDescription:
      'Tül ve fon perdeler, odanızın atmosferini yumuşatarak ferah bir görünüm sağlar. Pile dökümlerinin düzgün durması, korniş üzerinde takılmadan akması ve kilit sistemlerinin sağlam yapılması uzmanlık gerektirir. Tüm klasik perde gruplarında temiz işçilik sunuyoruz.',
    icon: '✨',
    features: ['Pile Ayarı ve Hizalama', 'Kruvaze Kurulum', 'Fon Bağı Montajı', 'Pencereye Özel Tasarım'],
  },
  {
    id: 'zebra-perde',
    title: 'Zebra Perde Montajı',
    description: 'Gece ve gündüz kullanımına uygun, pratik çizgili mekanizmalı zebra perdeler.',
    longDescription:
      'Tül ve kalın kumaş bantlarının kusursuz uyumuyla istenilen ışık seviyesini yakalamanızı sağlayan zebra perdelerin montajında milimetrik çalışıyoruz. Perdenizin mekanizmada dengeli sarılması ve yamukluk yapmaması için terazili sistemle vidalama yapıyoruz.',
    icon: '🦓',
    features: ['Gece-Gündüz Kontrolü', 'Çift Mekanizma', 'Leke Tutmaz Kumaş', 'Uzun Ömürlü Kullanım'],
  },
]
