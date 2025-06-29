"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import heroBg from '../../../public/hero-bg.jpg'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let time = 0
    let lastTime = 0
    const fps = 20 // Lower FPS for better performance
    const fpsInterval = 1000 / fps

    // Reduce grid density significantly
    const rows = 12
    const cols = 12

    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)
        
        time += 0.002
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const cellWidth = canvas.width / cols
        const cellHeight = canvas.height / rows

        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.lineWidth = 1

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const x = j * cellWidth
            const y = i * cellHeight
            const distanceFromCenter = Math.sqrt(
              Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
            )
            const wave = Math.sin(distanceFromCenter * 0.03 + time) * 20

            ctx.beginPath()
            ctx.arc(x + wave, y + wave, 1, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800">
        <Image
          src={heroBg}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>
      
      {/* Canvas Animation Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ background: 'transparent', opacity: 0.4 }}
      />

      {/* Content */}
      <div className="absolute inset-0">
        <div className="container mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
            VAGGELIS BOBONHS
          </h1>
          <h2 className="text-2xl font-bold text-white/80 sm:text-xl md:text-2xl">
            Full Stack & WordPress Developer
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl md:text-2xl">
          I create modern websites and custom WordPress solutions. Currently transitioning from technical support to full-time development.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="/portfolio"
              className="rounded-md border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 