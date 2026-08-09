// Product data for buatoranglapo landing page
import type { Product } from '../types'
import pesKari from '../assets/images/pes_kari.png'
import pesSambal from '../assets/images/pes_sambal.png'
import pesKicap from '../assets/images/pes_kicap.png'
import pesKurma from '../assets/images/pes_kurma.png'
import pesRendang from '../assets/images/pes_rendang.png'
import combo4 from '../assets/images/combo4.png'
import combo5 from '../assets/images/combo5.png'

export const shopLinks = {
  shopee: 'https://s.shopee.com.my/8AJONHoAqZ',
  tiktok: 'https://vt.tiktok.com/ZS9hWhU1nBrc8-bNBhe/'
}

export const products: Product[] = [
  {
    id: 'kari',
    name: 'Pes Kari',
    description: 'Daging ayam rebus dengan kuah kari kaya rempah. Ditambah kentang dan telur. Ramuan: bawang merah, bawang putih, daun kari, serbuk kari, asam jawa, garam.',
    image: pesKari,
    tags: {
      spiciness: '🌶️ Pedas Sedang',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🥩 Daging/Ayam'
    },
    buyLink: {
      shopee: 'https://s.shopee.com.my/6fUaacaH50',
      tiktok: 'https://vt.tiktok.com/ZS9hWh2VUFRvt-cqIO3/'
    }
  },
  {
    id: 'sambal-pedas',
    name: 'Pes Sambal Pedas',
    description: 'Sambal pedas kuah dengan cili padi sebenar. Digunakan untuk ayam, ikan, daging, udang, telur. Ramuan: bawang merah, bawang putih, cili kering, asam jawa, garam, gula.',
    image: pesSambal,
    tags: {
      spiciness: '🔥 Super Pedas',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🐟 Ikan/Seafood'
    },
    buyLink: {
      shopee: 'https://s.shopee.com.my/1B9e2a2ff7',
      tiktok: 'https://vt.tiktok.com/ZS9hWhYKgSK7m-m0uZ3/'
    }
  },
  {
    id: 'kicap',
    name: 'Pes Kicap',
    description: 'Kuah kicap pekat dengan rasa manis asin. Ditambah ayam, ikan, daging. Ramuan: bawang merah, bawang putih, cili kering, kicap, sos tiram, asam jawa, garam, gula.',
    image: pesKicap,
    tags: {
      spiciness: '🌶️ Pedas Lemah',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🐟 Ikan/Telur'
    },
    buyLink: {
      shopee: 'https://s.shopee.com.my/40TpPkveHB',
      tiktok: 'https://vt.tiktok.com/ZS9hWhFGAQXb2-FUuKx/'
    }
  },
  {
    id: 'kurma',
    name: 'Pes Kurma',
    description: 'Masakan manis dengan kurma dan rempah. Ditambah ayam, daging, telur, kentang. Ramuan: bawang merah, bawang putih, serbuk kurma, serbuk kari, bunga lawang, kulit kayu manis, garam, gula.',
    image: pesKurma,
    tags: {
      spiciness: '🌶️ Tidak Pedas',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🍯 Manis/Segar'
    },
    buyLink: {
      shopee: 'https://s.shopee.com.my/AA4Sl6UXOu',
      tiktok: 'https://vt.tiktok.com/ZS9hWhroFcYjW-rU5Pi/'
    }
  },
  {
    id: 'rendang',
    name: 'Pes Rendang',
    description: 'Daging ayam merendang dalam kuah santan pekat dengan rempah. Ramuan: bawang merah, bawang putih, serai, halia, lengkuas, kunyit, cili padi, daun kunyit, santan, kerisik, garam, gula, asam, perasa.',
    image: pesRendang,
    tags: {
      spiciness: '🌶️ Pedas Sedang',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🥩 Daging Sapi'
    },
    buyLink: {
      shopee: '',
      tiktok: ''
    },
    soldOut: true
  },
  {
    id: 'combo-4',
    name: 'Pek Combo 4 Jenis',
    description: 'Pakej istimewa dengan 4 jenis pes pilihan: Kari, Sambal, Kicap, dan Kurma. Kamu akan dapat 4 porsi pes berlainan.',
    image: combo4,
    tags: {
      spiciness: '📦 4 Jenis',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🎁 Best Seller'
    },
    buyLink: {
      shopee: 'https://s.shopee.com.my/6AjOU1hGQs',
      tiktok: 'https://vt.tiktok.com/ZS9hWhhaNymcT-NV0Tk/'
    }
  },
  {
    id: 'combo-5',
    name: 'Pek Combo 5 Jenis',
    description: 'Pakej lengkap dengan 5 jenis pes termasuk rendang untuk pengalaman rasa penuh. Kamu akan dapat 5 porsi pes berlainan.',
    image: combo5,
    tags: {
      spiciness: '📦 5 Jenis',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🎁 Terbaik'
    },
    buyLink: {
      shopee: '',
      tiktok: 'https://vt.tiktok.com/ZS9hWhhabGJhK-UzYq1/'
    }
  },
  {
    id: 'cili-padi',
    name: 'Pes Cili Padi',
    description: 'Rasa pedas cili api yang super – sedang dalam pembangunan untuk semua pecinta pedas sebenar.',
    image: '',
    tags: {
      spiciness: '🔥 Super Pedas',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🔥 Pecinta Pedas'
    },
    buyLink: {
      shopee: '#',
      tiktok: '#'
    },
    comingSoon: true
  }
]