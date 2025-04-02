import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

// Use Roboto_Flex instead of Roboto for Next.js 13+
// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], 
  display: 'swap', 
  variable: '--font-roboto'
})

export const metadata = {
  title: 'JEETZINGH Music Portfolio',
  description: 'Professional portfolio showcasing music production, recording, and mixing skills.',
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
        </main>
        <Footer />
      </body>
    </html>
  )
}