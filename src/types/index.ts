// Product data type definition
export interface Product {
  id: string
  name: string
  description: string
  image: string
  tags: {
    spiciness: string
    cookTime: string
    suitableFor: string
  }
  buyLink: {
    shopee: string
    tiktok: string
  }
  comingSoon?: boolean
}

// Testimonial type
export interface Testimonial {
  id: number
  name: string
  rating: number
  location: string
  comment: string
}
