// Testimonials section component
import { testimonials } from '../data/testimonials'
import type { Testimonial } from '../types'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apa Yang Katakan Pelanggan Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex text-yellow-400 mb-3">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600">
            📈 Lebih 10,000+ pek telah terjual!
          </p>
        </div>
      </div>
    </section>
  )
}
