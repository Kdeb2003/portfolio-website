import { motion } from 'framer-motion'
import profile from '../assets/kushalherosectionimage.png'

const MotionH1 = motion.h1
const MotionP = motion.p
const MotionDiv = motion.div

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] px-6 pt-10 text-white md:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[72vh] w-full max-w-6xl items-start pt-10 pb-8 md:min-h-[78vh] md:items-center md:pt-0 md:pb-0">
        <div className="order-1 max-w-xl -translate-y-6 text-center md:-translate-y-10 md:text-left">
          <MotionH1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
          >
            Kushal Deb
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            className="mt-4 text-base font-medium text-slate-300 sm:text-lg md:text-xl"
          >
            AI & Robotics Student | ML Enthusiast
          </MotionP>

          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:mx-0 md:text-lg"
          >
            Passionate about building intelligent systems with machine learning and
            robotics, and turning AI ideas into practical, real-world solutions.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row md:justify-start"
          >
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] transition transform duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_36px_rgba(99,102,241,0.5)] active:scale-95 sm:w-auto"
            >
              View Projects
            </button>

            <button
              type="button"
              className="w-full rounded-full border border-cyan-300/50 bg-cyan-300/5 px-8 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition transform duration-300 hover:scale-105 hover:brightness-110 hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] active:scale-95 sm:w-auto"
            >
              Contact Me
            </button>
          </MotionDiv>
        </div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        className="relative z-30 mt-8 flex justify-center md:absolute md:right-0 md:mt-0 md:bottom-0 lg:-bottom-2"
      >
        <img
          src={profile}
          alt="Kushal Deb profile"
          className="w-[340px] object-contain drop-shadow-[0_0_28px_rgba(99,102,241,0.22)] transition-transform duration-500 md:w-[700px] lg:w-[860px]"
        />
      </MotionDiv>
    </section>
  )
}

export default Hero
