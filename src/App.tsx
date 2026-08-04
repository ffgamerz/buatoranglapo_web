// App.tsx - Main landing page component
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
