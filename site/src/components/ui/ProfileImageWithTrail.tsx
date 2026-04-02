'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface TrailPoint {
  x: number
  y: number
  timestamp: number
}

export default function ProfileImageWithTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const lastPositionRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
    lastPositionRef.current = { x, y }

    // Add to trail every 15px of movement
    setTrail((prev) => {
      const lastPoint = prev[prev.length - 1]
      const distance = lastPoint
        ? Math.hypot(x - lastPoint.x, y - lastPoint.y)
        : 20

      if (distance > 15) {
        // Keep max 50 points to prevent performance issues
        const newTrail = [...prev, { x, y, timestamp: Date.now() }]
        return newTrail.length > 50 ? newTrail.slice(-50) : newTrail
      }
      return prev
    })
  }

  // Calculate hue based on time (10 second cycle)
  const colorCycle = (Date.now() / 28) % 360

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setTrail((prev) => prev.filter((point) => now - point.timestamp < 1000))
    }, 100) // Reduced cleanup frequency

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full md:w-1/3">
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
        <div
          className="absolute w-32 h-32 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, hsla(${colorCycle}, 100%, 65%, 0.4) 0%, hsla(${colorCycle}, 100%, 65%, 0.1) 70%, transparent 100%)`,
            transform: `translate3d(${position.x - 64}px, ${position.y - 64}px, 0)`,
            filter: 'blur(20px)',
            willChange: 'transform, opacity',
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 50,
          }}
        />

        <Image
          src="/images/profile-2026.jpg"
          alt="Profile Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}
