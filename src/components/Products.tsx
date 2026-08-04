// Products section component
import { products } from '../data/products'
import type { Product } from '../types'

export function Products() {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Produk Pes Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product) => (
            <div 
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:translate-y-1 ${
                product.comingSoon ? 'bg-gradient-to-br from-purple-400 to-pink-500 text-white' : ''
              } ${
                product.tags.spiciness.includes('📦') ? 'border-2 border-yellow-400' : ''
              }`}
            >
              {product.comingSoon ? (
                <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl">
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="text-6xl mb-4">🔜</div>
                                    <h3 className="text-2xl font-bold">{product.name}</h3>
                                    <p className="mt-2">Coming Soon</p>
                                  </div>
                                </div>
                              </div>
              ) : (
                <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl">
                <img 
                  src={product.image || ''} 
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
              )}
              
              <div className="p-6">
                {product.comingSoon ? (
                  <p className="mb-4">{product.description}</p>
                ) : (
                  <>
                    <h3 className={`text-xl font-bold mb-2 ${
                      product.tags.spiciness.includes('📦') ? 'text-yellow-700' : 'text-gray-800'
                    }`}>{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                  </>
                )}
                
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
                
                <div className="flex gap-2">
                  {product.comingSoon ? (
                    <button 
                      disabled 
                      className="w-full bg-white text-purple-600 px-6 py-2 rounded-full font-bold"
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
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium text-center transition"
                        >
                          Shopee
                        </a>
                      )}
                      <a 
                        href={product.buyLink.tiktok} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-medium text-center transition"
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
