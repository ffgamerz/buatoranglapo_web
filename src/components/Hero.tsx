// Hero section component
import pesRendang from '../assets/images/pes_rendang.png'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pesRendang})`,
          backgroundPosition: 'center top'
        }}
      ></div>
      
      {/* Light gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Masak Cepat, Rasa Memikat – Pes Masakan Tradisional Dalam 10 Minit!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          Tanpa bahan pengawet | Resipi asli | Sedia dimakan | Sesuai untuk semua keluarga
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('products')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105 shadow-xl border-2 border-white/20"
          >
            Lihat Semua Pes
          </button>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-800 transition transform hover:scale-105 shadow-xl"
          >
            Beli Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
