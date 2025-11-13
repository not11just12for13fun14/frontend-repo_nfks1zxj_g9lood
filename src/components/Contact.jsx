import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)

    // Normally this would POST to backend; here we just simulate success
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! We’ll be in touch within 24 hours.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">Let’s grow together</h3>
            <p className="mt-3 text-slate-700">Tell us about your goals. We’ll review and send a tailored growth plan.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li>• Performance audits in 48 hours</li>
              <li>• Flexible, month-to-month plans</li>
              <li>• Senior team, no hand-offs</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">What do you need help with?</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:ring-slate-900 focus:border-slate-900" />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold hover:bg-slate-800">Request proposal</button>
              <span className="text-sm text-slate-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
