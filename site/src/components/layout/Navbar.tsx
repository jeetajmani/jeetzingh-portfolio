'use client';
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Bio' },
    { href: '/mywork', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest hover:text-indigo-300 transition-colors">
          JEETZINGH
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-white/70 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative text-sm tracking-widest uppercase pb-0.5
                  transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-px after:bg-indigo-400
                  after:transition-all after:duration-300
                  ${isActive
                    ? 'text-white after:w-full'
                    : 'text-white/50 hover:text-white after:w-0 hover:after:w-full'
                  }
                `}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-zinc-950 border-t border-white/10 px-4 py-2">
          {links.map(({ href, label }, i) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={toggleMenu}
                className={`
                  block py-3 text-sm tracking-widest uppercase border-b border-white/5
                  transition-all duration-200
                  hover:text-white hover:translate-x-1.5
                  ${isActive ? 'text-indigo-300' : 'text-white/50'}
                `}
                style={{ transitionDelay: isMenuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar