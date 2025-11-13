import { ChartNoAxesCombined, Megaphone, Target, LineChart } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Paid Media',
    desc: 'Meta, Google, TikTok and LinkedIn campaigns focused on measurable growth.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'SEO & Content',
    desc: 'Technical SEO, content engines and programmatic pages that compound.',
  },
  {
    icon: Target,
    title: 'CRO & Funnels',
    desc: 'Landing pages, A/B testing and lifecycle flows that convert better.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Attribution',
    desc: 'Clean tracking, server-side events and actionable dashboards.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent -z-[1]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">Full-service performance marketing for brands that care about sustainable, compounding growth.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 transition-all hover:shadow-xl hover:-translate-y-0.5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
