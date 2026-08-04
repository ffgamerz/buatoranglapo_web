// Hero section component
import pesRendang from '../assets/images/6.png'

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
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${pesRendang})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Masak Cepat, Rasa Memikat – Pes Masakan Tradisional Dalam 10 Minit!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Tanpa bahan pengawet | Resipi asli | Sedia dimakan | Sesuai untuk semua keluarga
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('products')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            Lihat Semua Pes
          </button>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-800 transition transform hover:scale-105"
          >
            Beli Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
