// Header component with responsive navigation
import { useState, useEffect } from 'react'
import { shopLinks } from '../data/products'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const navigationLinks = [
    { id: 'hero', label: 'Utama' },
    { id: 'products', label: 'Produk' },
    { id: 'about', label: 'Penjelasan' },
    { id: 'testimonials', label: 'Testimoni' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍲</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-red-600">
              BUTORANGLAPO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={shopLinks.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm transition"
            >
              Shopee
            </a>
            <a
              href={shopLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-full font-medium text-sm transition"
            >
              TikTok
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-gray-100 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
        }`}>
          <div className="py-4 space-y-2">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a
                href={shopLinks.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition"
              >
                Beli Shopee
              </a>
              <a
                href={shopLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white px-4 py-2 rounded-full font-medium transition"
              >
                Beli TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}