// Hero section component - Updated with generated image
export function Hero() {
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gemini-hero.png')",
          backgroundPosition: 'center'
        }}
      >
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="text-red-600">Masak Cepat, Rasa Memikat</span> <br />
            <span className="text-white">Pes Masakan Tradisional Dalam 10 Minit!</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
            Tanpa bahan pengawet | Resipi asli Malaysia | Sedia dimakan | Sesuai untuk semua keluarga
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl border-2 border-white/20"
            >
              Lihat Semua Pes
            </button>
            <a 
              href="https://shopee.com.my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition transform hover:scale-105 shadow-xl"
            >
              Beli di Shopee
            </a>
          </div>
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-yellow-300">4.9</div>
              <span className="ml-2 text-sm">⭐ Rating</span>
            </div>
            <div className="hidden sm:flex items-center">
              <div className="w-px h-6 bg-white/30"></div>
              <div className="ml-3 text-sm">✓ 10 minit siap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}