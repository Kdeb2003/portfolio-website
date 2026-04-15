import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Experience() {
  const timelineItems = [
    {
      duration: '2024 - Present',
      title: "Master's in AI & Robotics (Germany)",
      description:
        'Focused on machine learning, robotics systems, and intelligent automation for real-world applications.',
    },
    {
      duration: '2020 - 2024',
      title: "Bachelor's Degree in Engineering",
      description:
        'Built strong foundations in programming, algorithms, and applied mathematics with hands-on technical projects.',
    },
    {
      duration: '2023',
      title: 'AI/ML Internship (Placeholder)',
      description:
        'Worked on model experimentation, data pipelines, and prototype deployment for an intelligent product feature.',
    },
  ]

  return (
    <section id="experience" className="w-full bg-[#0B0F19] px-6 py-20 text-white md:px-12">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience &amp; Education</h2>

        <div className="relative mt-10">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

          <div className="space-y-8">
            {timelineItems.map((item) => (
              <article
                key={`${item.duration}-${item.title}`}
                className="group relative pl-12 transition duration-300"
              >
                <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border border-cyan-300/40 bg-[#0B0F19] shadow-[0_0_0_4px_rgba(11,15,25,1)] transition duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_0_4px_rgba(11,15,25,1),0_0_18px_rgba(34,211,238,0.35)]" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 group-hover:bg-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}

export default Experience
