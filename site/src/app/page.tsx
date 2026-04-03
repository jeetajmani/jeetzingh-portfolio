'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react';
import { Tilt } from "@/components/ui/tilt";
import { HeroWithBeams } from '@/components/ui/beams-background'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroWithBeams scrollY={scrollY} />

      {/* Latest Work */}
      <section className="py-24 bg-indigo-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Latest Work
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="aspect-square">
                <Tilt
                  rotationFactor={9}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-lg h-full w-full"
                >
                  <div className="absolute inset-3 rounded-lg overflow-hidden shadow-xl">
                    <div className="w-full h-full transform transition-transform duration-700 ease-out relative">
                      <Image
                        src="/images/el_malecon_artwork.jpg"
                        alt="El Malecon La Isla album artwork"
                        fill
                        sizes = "(max-width: 768px) 100vw, 50vw"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">El Malecon</h3>
              {/* <TextShimmer
                duration={2}
                className='text-2xl font-medium mb-2 [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
              >
                PLANET
              </TextShimmer> */}
              <p className="text-gray-400 mb-4">Released: April 2025</p>
              <p className="mb-6">
                “El Malecon” is the 6th track from Victoria-based independent Latin artist Cerbeus. The song is a fusion of Latin and Cuban rhythms, showcasing Cerbeus‘ unique style and sound. The track features a blend of traditional Latin instruments and modern production techniques, creating a fresh and vibrant sound that is sure to get listeners moving.
              </p>
              <p className="mb-6">
                My Contributions: Production, Recording, Mixing, Mastering, Vocal Tuning, Vocal Editing
              </p>
              <div className="flex gap-4">
                <a
                  href="https://open.spotify.com/track/2iAcQVegXgNFIOSrAJvfuk?si=f857d4086566478b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-6 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/ca/album/el-malec%C3%B3n-feat-jeetzingh/1809963063?i=1809963229"
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

      {/* Selected Work */}
      <section className="py-24 bg-indigo-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Selected Work
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="aspect-square">
                <Tilt
                  rotationFactor={9}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className="group relative rounded-lg h-full w-full"
                >
                  <div className="absolute inset-3 rounded-lg overflow-hidden shadow-xl">
                    <div className="w-full h-full transform transition-transform duration-700 ease-out relative">
                      <Image
                        src="/images/planet_artwork.jpg"
                        alt="PLANET album artwork"
                        fill
                        sizes = "(max-width: 768px) 100vw, 33vw"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-2xl font-bold mb-2">PLANET</h3>
              {/* <TextShimmer
                duration={2}
                className='text-2xl font-medium mb-2 [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
              >
                PLANET
              </TextShimmer> */}
              <p className="text-gray-400 mb-4">Released: May 2024</p>
              <p className="mb-6">
                “PLANET” is the explosive first team-up from Vancouver’s Palli P and Armono — a dark, ambitious track that flexes their lyrical and melodic strengths over a hard-hitting beat.
              </p>
              <p className="mb-6">
                My Contributions: Production, Recording, Mixing, Mastering, Vocal Tuning, Vocal Editing, Artwork Design
              </p>
              <div className="flex gap-4">
                <a
                  href="https://open.spotify.com/track/5WolFSDbO3iEkDMejsHTBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-2 px-6 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/ca/album/planet/1745188573?i=1745188575"
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

      {/* <section className="py-24 bg-gradient-to-r from-purple-900 to-black">
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
      </section> */}
    </div>
  )
}