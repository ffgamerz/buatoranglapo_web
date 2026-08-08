// Testimonials section component - Improved UX/UI
import { testimonials } from '../data/testimonials'
import type { Testimonial } from '../types'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Yang Katakan Pelanggan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat sebab ramai pelanggan kami kembali untuk pes masakan kami
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex text-yellow-400 mb-3">
                {'⭐'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.comment}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white px-6 py-4 rounded-full shadow-md">
            <div>
              <span className="text-3xl font-bold text-red-600">4.9</span>
              <span className="text-sm text-gray-500 ml-2">⭐ Rating</span>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <span className="text-3xl font-bold text-orange-600">10K+</span>
              <span className="text-sm text-gray-500 ml-2">Pek Terjual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}