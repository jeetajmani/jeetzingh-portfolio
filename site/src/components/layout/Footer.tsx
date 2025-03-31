'use client'

import Link from 'next/link'
import { Instagram, Youtube} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              JEETZINGH
            </Link>
            <p className="mt-2 text-gray-400">Musician • Producer • Artist</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://instagram.com/jeetzingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            {/* <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a> */}
            <a 
              href="https://youtube.com/@jeetzingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            {/* <a 
              href="https://facebook.com/yourpage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a> */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} JEETZINGH. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer