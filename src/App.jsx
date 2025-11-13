import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
        <footer className="border-t border-slate-200 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} BlueWave Digital. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#work" className="hover:text-slate-900">Work</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
