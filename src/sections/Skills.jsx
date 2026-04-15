import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'],
    },
    {
      title: 'AI / ML',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'Linux', 'Jupyter', 'VS Code'],
    },
  ]

  return (
    <section id="skills" className="w-full bg-[#0B0F19] px-6 py-20 text-white md:px-12">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            >
              <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-300 sm:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MotionDiv>
    </section>
  )
}

export default Skills
