// Products section component - Improved UX/UI
import { products } from '../data/products'
import type { Product } from '../types'

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilihan Pes Tradisional Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pes masakan tradisional Malaysia yang sedap dan siap dimakan dalam 10 minit
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div 
              key={product.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center overflow-hidden">
                {product.comingSoon ? (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-5xl mb-3">🔜</div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <p className="mt-2 text-sm text-gray-600">Coming Soon</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={product.image || `https://via.placeholder.com/300x200/fff7ed/ea580c?text=${encodeURIComponent(product.name)}`} 
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                {!product.comingSoon && (
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                )}
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Tags */}
                {!product.comingSoon && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      {product.tags.spiciness}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {product.tags.cookTime}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {product.tags.suitableFor}
                    </span>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {product.comingSoon ? (
                    <button 
                      disabled
                      className="w-full bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-sm border border-purple-200 cursor-not-allowed"
                    >
                      Notify Me
                    </button>
                  ) : (
                    <>
                      {product.buyLink.shopee && (
                        <a 
                          href={product.buyLink.shopee} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition transform hover:scale-105 text-sm"
                        >
                          Shopee
                        </a>
                      )}
                      <a 
                        href={product.buyLink.tiktok} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-medium transition transform hover:scale-105 text-sm"
                      >
                        TikTok
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}