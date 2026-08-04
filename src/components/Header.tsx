// Header component with sticky navigation
import { useState, useEffect } from 'react'
import { shopLinks } from '../data/products'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-red-600">
          BUATORGANGLAPO
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Utama
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Produk Pes
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Testimoni
          </button>
          <button 
            onClick={() => scrollToSection('cta')}
            className="text-gray-700 hover:text-red-600 transition-colors"
          >
            Beli Sekarang
          </button>
        </div>

        {/* Action Button */}
        <a 
          href={shopLinks.shopee} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm transition transform hover:scale-105"
        >
          Beli di Shopee/TikTok
        </a>
      </div>
    </nav>
  )
}
