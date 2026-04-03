'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useSpring, animated, AnimatedProps } from '@react-spring/web'
import React from 'react'
import { Tilt } from '@/components/ui/tilt'

interface TrailPoint {
  x: number
  y: number
  timestamp: number
}

const AnimatedDiv = animated.div as React.FC<AnimatedProps<React.HTMLAttributes<HTMLDivElement>>>

export default function ProfileImageWithTrail({ scrollY = 0 }: { scrollY?: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [colorCycle, setColorCycle] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastPositionRef = useRef({ x: 0, y: 0 })

  const imageAnimation = useSpring({
    transform: `scale(${1 + Math.min(scrollY / 1000, 0.02)})`,
    config: { mass: 1, tension: 70, friction: 40 }
  })

  // Interpolate color between indigo-400 (#818cf8) and #56B9EC
  const getInterpolatedColor = (cycle: number) => {
    // Normalize cycle (0-360) to 0-1
    const t = (Math.sin(cycle * Math.PI / 180) + 1) / 2
    
    // Indigo-400: #818cf8 -> RGB(129, 140, 248)
    const color1 = { r: 129, g: 140, b: 248 }
    // Cyan: #56B9EC -> RGB(86, 185, 236)
    const color2 = { r: 86, g: 185, b: 236 }
    
    const r = Math.round(color1.r + (color2.r - color1.r) * t)
    const g = Math.round(color1.g + (color2.g - color1.g) * t)
    const b = Math.round(color1.b + (color2.b - color1.b) * t)
    
    return { r, g, b }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    lastPositionRef.current = { x, y }

    // Add to trail every 5px of movement for smoother effect
    setTrail((prev) => {
      const lastPoint = prev[prev.length - 1]
      const distance = lastPoint
        ? Math.hypot(x - lastPoint.x, y - lastPoint.y)
        : 20

      if (distance > 5) {
        // Keep max 80 points to show more trail
        const newTrail = [...prev, { x, y, timestamp: Date.now() }]
        return newTrail.length > 80 ? newTrail.slice(-80) : newTrail
      }
      return prev
    })
  }

  // Update color cycle and clean up old trail points - client-side only
  useEffect(() => {
    // Calculate hue based on time (10 second cycle)
    setColorCycle((Date.now() / 28) % 360)

    const colorInterval = setInterval(() => {
      setColorCycle((Date.now() / 28) % 360)
    }, 50)

    const now = Date.now()
    setTrail((prev) => prev.filter((point) => now - point.timestamp < 1000))

    const cleanupInterval = setInterval(() => {
      const trailNow = Date.now()
      setTrail((prev) => prev.filter((point) => trailNow - point.timestamp < 1000))
    }, 100)

    return () => {
      clearInterval(colorInterval)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div className="w-full md:w-1/3">
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
        <div
          ref={containerRef}
          className="aspect-square bg-gray-800 rounded-lg relative overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
        {/* Trail glows */}
        {trail.map((point, index) => {
          const age = Date.now() - point.timestamp
          const maxAge = 1000
          const ageRatio = Math.min(age / maxAge, 1)
          const opacity = Math.max(0, 1 - ageRatio)

          // Transition color from bright indigo to purple
          const r = Math.round(129 - (129 - 88) * ageRatio)
          const g = Math.round(140 - (140 - 86) * ageRatio)
          const b = Math.round(248 - (248 - 214) * ageRatio)
          const color1Opacity = 0.3 - 0.2 * ageRatio
          const color2Opacity = 0.1 - 0.05 * ageRatio

            return (
              <div
                key={index}
                className="absolute w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, rgba(${r}, ${g}, ${b}, ${color1Opacity}) 0%, rgba(${r}, ${g}, ${b}, ${color2Opacity}) 70%, transparent 100%)`,
                  transform: `translate3d(${point.x - 64}px, ${point.y - 64}px, 0)`,
                  filter: 'blur(20px)',
                  opacity: opacity * 1,
                  zIndex: 50,
                  willChange: 'transform, opacity',
                }}
              />
            )
          })}

        {/* Current position glow */}
        {(() => {
          const { r, g, b } = getInterpolatedColor(colorCycle)
          return (
            <div
              className="absolute w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(${r}, ${g}, ${b}, 0.4) 0%, rgba(${r}, ${g}, ${b}, 0.1) 70%, transparent 100%)`,
                transform: `translate3d(${position.x - 64}px, ${position.y - 64}px, 0)`,
                filter: 'blur(20px)',
                willChange: 'transform, opacity',
                opacity: isHovering ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                zIndex: 50,
              }}
            />
          )
        })()}

        <AnimatedDiv style={imageAnimation} className="w-full h-full relative">
          <Image
            src="/images/profile-2026.jpg"
            alt="Profile Image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            priority
          />
        </AnimatedDiv>
        </div>
      </Tilt>
    </div>
  )
}
