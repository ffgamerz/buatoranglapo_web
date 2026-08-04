// FAQ and final CTA section component
import { questions } from '../data/faq'
import { shopLinks } from '../data/products'

export function FAQ() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Jangan Lepaskan Rasa Sedap Tradisional!
        </h2>
        <p className="mb-8">
          Tekan butang di bawah untuk beli sekarang di platform kegemaran anda.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href={shopLinks.shopee} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            Beli di Shopee Sekarang
          </a>
          <a 
            href={shopLinks.tiktok} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            Beli di TikTok Shop Sekarang
          </a>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6">Soalan Kerap Ditanyai (FAQ)</h3>
          <div className="text-left max-w-3xl mx-auto">
            {questions.map((q, index) => (
              <details 
                key={index}
                className="mb-4 open:bg-white open:bg-opacity-10 open:rounded-lg open:padding-2"
              >
                <summary className="cursor-pointer font-medium py-3 px-2">
                  {q.question}
                </summary>
                <p className="mt-2 text-sm opacity-90 px-2">
                  {q.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
