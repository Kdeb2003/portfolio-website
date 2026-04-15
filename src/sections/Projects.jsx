import { motion } from 'framer-motion'

const MotionDiv = motion.div

function Projects() {
  const projects = [
    {
      title: 'AI Resume Analyzer',
      description:
        'A web app that analyzes resumes using NLP and provides skill-match insights for specific job roles.',
      tech: ['React', 'Python', 'FastAPI', 'NLP'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Smart Object Detection Dashboard',
      description:
        'Real-time object detection dashboard with camera input, analytics, and confidence tracking for edge devices.',
      tech: ['PyTorch', 'OpenCV', 'React', 'Docker'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Robotics Path Planning Visualizer',
      description:
        'Interactive simulator to compare A*, Dijkstra, and RRT algorithms for autonomous robot navigation tasks.',
      tech: ['JavaScript', 'Three.js', 'Node.js'],
      github: '#',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="w-full bg-[#0B0F19] px-6 py-20 text-white md:px-12">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-6xl"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            >
              <div className="h-44 w-full bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-cyan-400/20" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition transform duration-300 hover:scale-105 hover:brightness-110 hover:border-cyan-300 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] active:scale-95"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white transition transform duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_24px_rgba(99,102,241,0.35)] active:scale-95"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </MotionDiv>
    </section>
  )
}

export default Projects
