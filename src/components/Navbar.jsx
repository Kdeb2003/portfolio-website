import { useEffect, useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 12
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (event, href) => {
    setIsOpen(false)
    const target = document.querySelector(href)

    if (target) {
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#0B0F19]/80 shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
          : 'border-b border-white/10 bg-[#0B0F19]/55'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#home"
          onClick={(event) => handleLinkClick(event, '#home')}
          className="text-lg font-semibold tracking-wide text-slate-100 transition-colors duration-300 hover:text-cyan-300"
        >
          Kushal Deb
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.href)}
              className="relative text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 transition duration-300 hover:bg-white/10 hover:text-cyan-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0B0F19]/70 backdrop-blur-md transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/10 hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
