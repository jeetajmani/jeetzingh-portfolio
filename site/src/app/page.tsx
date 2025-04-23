'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSpring, animated, AnimatedProps } from 'react-spring'
import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from "@/components/ui/tilt";
import { TextShimmer } from '@/components/ui/text-shimmer';

// Define the animated div properly for TypeScript
const AnimatedDiv = animated.div as React.FC<AnimatedProps<React.HTMLAttributes<HTMLDivElement>>>

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Create spring animation for the zoom effect
  const imageAnimation = useSpring({
    transform: `scale(${1 + Math.min(scrollY / 1000, 0.02)})`,
    config: { mass: 1, tension: 70, friction: 40 }
  })

  const terms = ["Music Producer", "Recording Engineer", "Mixing Engineer"];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6, // Longer delay between terms
        delayChildren: 0.8
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Animated image with React Spring */}
            <AnimatedDiv
              style={imageAnimation}
              className="w-full h-full"
            >
              <Image
                src="/images/jeetzingh-website-header.png"
                alt="JEETZINGH music producer background image"
                fill
                priority
                className="object-cover object-[20%_center] filter blur-sm"
              />
            </AnimatedDiv>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}>
            <TextShimmer
              duration={5}
              className='text-5xl md:text-7xl font-bold mb-6 [--base-color:theme(colors.indigo.400)] [--base-gradient-color:theme(colors.indigo.200)]'
            >
              JEETZINGH
            </TextShimmer>
          </motion.div>

          <div className="container mx-auto p-8">
            <motion.div
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {terms.map((term, i) => (
                <React.Fragment key={i}>
                  <motion.span variants={item} className="inline-block">
                    {term}
                  </motion.span>

                  {i < terms.length - 1 && (
                    <motion.span
                      variants={item}
                      className="inline-block mx-2"
                    >
                      •
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
            <Link
              href="/about"
              className="bg-white border-2 border-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-200 hover:border-gray-200 transition-colors"
            >
              Bio
            </Link>
            <Link
              href="/mywork"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Projects
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-indigo-400 border-2 border-indigo-400 text-white py-3 px-22 rounded-full font-medium hover:bg-indigo-500 hover:border-indigo-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

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
                  rotationFactor={6}
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
                    <div className="w-full h-full transform transition-transform duration-700 ease-out">
                      <Image
                        src="/images/el_malecon_artwork.jpg"
                        alt="El Malecon La Isla album artwork"
                        fill
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
                  rotationFactor={6}
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
                    <div className="w-full h-full transform transition-transform duration-700 ease-out">
                      <Image
                        src="/images/planet_artwork.jpg"
                        alt="PLANET album artwork"
                        fill
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