// Footer component
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-xl font-bold text-red-500 mb-4 md:mb-0">
            BUATORGANGLAPO
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition"
            >
              TikTok
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition"
            >
              Instagram
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition"
            >
              Facebook
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 Buatoranglapo. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: Gambar produk adalah ilustrasi. Rasa sebenar mungkin berbeza mengikut batch.
          </p>
          <p className="mt-1">
            Dasar Privacy | Syarat Penggunaan
          </p>
        </div>
      </div>
    </footer>
  )
}
