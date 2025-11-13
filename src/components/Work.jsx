import { motion } from 'framer-motion'

const logos = [
  'Acme Health',
  'Orbit AI',
  'Wavebank',
  'Nimble SaaS',
  'NorthPeak',
  'Mellow Tea'
]

export default function Work() {
  return (
    <section id="work" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Brands we help grow</h2>
          <p className="mt-3 text-slate-700">From seed-stage to enterprise.</p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {[...logos, ...logos].map((name, i) => (
              <div key={i} className="inline-flex items-center justify-center h-14 min-w-[160px] rounded-xl bg-white ring-1 ring-slate-200 text-slate-700 font-medium">
                {name}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white" />
        </div>
      </div>
    </section>
  )
}
