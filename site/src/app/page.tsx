'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSpring, animated, AnimatedProps } from 'react-spring'
import { motion } from 'framer-motion';
import React from 'react';

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
                src="/jeetzingh-website-header.png"
                alt="JEETZINGH music producer background image"
                fill
                priority
                className="object-cover filter blur-sm"
              />
            </AnimatedDiv>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6">
            JEETZINGH
          </motion.h1>

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