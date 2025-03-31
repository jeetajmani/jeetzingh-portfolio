'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-black text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          JEETZINGH
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/music" className="hover:text-gray-300 transition-colors">
            My Work
          </Link>
          {/* <Link href="/shows" className="hover:text-gray-300 transition-colors">
            Shows
          </Link> */}
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="block py-2 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/music" 
              className="block py-2 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Music
            </Link>
            <Link 
              href="/shows" 
              className="block py-2 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Shows
            </Link>
            <Link 
              href="/about" 
              className="block py-2 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar