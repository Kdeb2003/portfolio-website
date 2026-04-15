import { motion } from 'framer-motion'

const MotionDiv = motion.div

function About() {
  return (
    <section
      id="about"
      className="relative z-10 -mt-16 w-full bg-[#0B0F19] px-6 pb-20 pt-36 text-white md:-mt-24 md:px-12 md:pt-44"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
      >
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              About
            </span>{' '}
            Me
          </h2>
          <div className="mt-3 h-[2px] w-16 rounded-full bg-gradient-to-r from-indigo-400/80 to-cyan-300/80" />

          <div className="mt-6 max-w-xl space-y-4">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              I am an AI and Robotics student passionate about machine learning,
              intelligent systems, and building technology that can solve
              practical problems. I enjoy turning ideas into working solutions
              through experimentation, coding, and continuous learning.
            </p>

            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              My goal is to create real-world AI applications that are reliable,
              human-centered, and scalable. I am focused on deepening my
              research mindset, improving engineering depth, and contributing to
              meaningful projects in robotics and applied machine learning.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="relative mx-auto h-72 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium tracking-wide text-slate-300/80">
                Image Placeholder
              </span>
            </div>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}

export default About
