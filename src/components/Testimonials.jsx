const testimonials = [
  {
    quote: 'They 3x’d our trials in 90 days while lowering CAC. Best growth partner we’ve worked with.',
    author: 'Maya Patel',
    role: 'CMO, Orbit AI'
  },
  {
    quote: 'Smart strategy, clean tracking and creative that converts. Our LTV is up 42%.',
    author: 'Daniel Lee',
    role: 'Head of Growth, Wavebank'
  },
  {
    quote: 'The CRO experiments paid for themselves in a month. Highly recommend.',
    author: 'Sara Kim',
    role: 'Founder, Nimble SaaS'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">{t.author} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
