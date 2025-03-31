import Link from 'next/link'
//import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          {/* Replace with your own hero image */}
          <div className="w-full h-full bg-gradient-to-r from-purple-900 to-black opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            JEETZINGH
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Music Producer • Recording Engineer • Mixing Engineer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/music" 
              className="bg-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Listen Now
            </Link>
            <Link 
              href="/shows" 
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Upcoming Shows
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Release Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Latest Release
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2">
              {/* Replace with your album cover */}
              <div className="aspect-square bg-gray-800 rounded-lg shadow-xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Album Cover
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">Album Title</h3>
              <p className="text-gray-400 mb-4">Released: March 2025</p>
              <p className="mb-6">
                Short description of your latest album or single. Talk about the inspiration, the sound, or anything else that makes this release special.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://spotify.com" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-green-600 text-white py-2 px-6 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Spotify
                </a>
                <a 
                  href="https://music.apple.com" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-pink-600 text-white py-2 px-6 rounded-full font-medium hover:bg-pink-700 transition-colors"
                >
                  Apple Music
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Preview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Upcoming Shows
            </h2>
            <Link 
              href="/shows" 
              className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show cards - replace with your actual shows */}
            {[1, 2, 3].map((show) => (
              <div key={show} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <p className="text-gray-400 mb-2">April {show + 10}, 2025</p>
                  <h3 className="text-xl font-bold text-white mb-2">Venue Name</h3>
                  <p className="text-gray-400 mb-4">City, Country</p>
                  <a 
                    href="#" 
                    className="inline-block bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-200 transition-colors"
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for exclusive updates, behind-the-scenes content, and early access to tickets.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-full text-black"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-black px-6 py-3 rounded-r-full font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}