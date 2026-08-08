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
    description: 'Rasa kari yang kaya dengan rempah-rempah tradisional. Sesuai untuk ayam, daging, dan sayuran.',
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
    description: 'Sambal pedas dengan cili papi sebenar untuk rasa yang memukau. Sesuai untuk pecinta pedas sebenar.',
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
    description: 'Rasa kicap yang kental dan penuh, memberi wangian istimewa pada setiap hidangan.',
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
    description: 'Manisan kurma semula jadi memberikan rasa manis yang lembut dan menggiurkan.',
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
    description: 'Rendang autentik dengan rempah pilihan dan santan kelapa yang kaya.',
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
    comingSoon: true
  },
  {
    id: 'combo-4',
    name: 'Pek Combo 4 Jenis',
    description: 'Pakej istimewa dengan 4 jenis pes pilihan: Kari, Sambal, Kicap, dan Kurma.',
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
    description: 'Pakej lengkap dengan 5 jenis pes termasuk rendang untuk pengalaman rasa penuh.',
    image: combo5,
    tags: {
      spiciness: '📦 5 Jenis',
      cookTime: '⏱️ 15 Minit',
      suitableFor: '🎁 Terbaik'
    },
    buyLink: {
      shopee: '', // Not available on Shopee
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