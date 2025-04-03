import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Analytics } from "@vercel/analytics/react"

// Use Roboto_Flex instead of Roboto for Next.js 13+
// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
  display: 'swap', 
  variable: '--font-roboto'
})

export const metadata = {
  title: 'JEETZINGH | Music Producer, Recording Engineer, Mixing Engineer',
  description: 'Professional portfolio showcasing music production, recording, and mixing skills.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}