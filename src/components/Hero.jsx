import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              Full-funnel digital marketing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Grow faster with a modern, data-driven marketing partner
            </h1>
            <p className="text-slate-700 text-lg max-w-xl">
              We blend strategy, creative and performance to acquire customers, increase LTV and turn your brand into a growth engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800">
                Get a free audit
              </a>
              <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold hover:bg-slate-50">
                Explore services
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">250%+</p>
                <p className="text-xs text-slate-600">Avg. ROAS improvement</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">120M+</p>
                <p className="text-xs text-slate-600">Ad impressions managed</p>
              </div>
              <div className="text-left">
                <p className="text-3xl font-bold text-slate-900">35+</p>
                <p className="text-xs text-slate-600">Scaling startups helped</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
