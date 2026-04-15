import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'kushal@example.com',
      href: 'mailto:kushal@example.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kushaldeb',
      href: 'https://linkedin.com/in/kushaldeb',
    },
    {
      label: 'GitHub',
      value: 'github.com/kushaldeb',
      href: 'https://github.com/kushaldeb',
    },
  ]

  return (
    <section id="contact" className="w-full bg-[#0B0F19] px-6 py-20 text-white md:px-12">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-4xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Me</h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m open to opportunities, collaborations, and interesting projects.
          Feel free to reach out through any of the channels below.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left backdrop-blur-sm transition transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] active:scale-95"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {contact.label}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-cyan-200">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href="mailto:kushal@example.com"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.3)] transition transform duration-300 hover:scale-105 hover:brightness-110 hover:from-indigo-400 hover:to-cyan-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.4)] active:scale-95"
        >
          Let&apos;s Connect
        </a>
      </MotionDiv>
    </section>
  )
}

export default Contact
