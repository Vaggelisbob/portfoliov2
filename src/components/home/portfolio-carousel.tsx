"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Digital Transformation",
    description: "Modern solutions for the digital age",
  },
  {
    id: 2,
    title: "Brand Evolution",
    description: "Elevating brand identities",
  },
  {
    id: 3,
    title: "User Experience",
    description: "Intuitive design solutions",
  },
  {
    id: 4,
    title: "Visual Innovation",
    description: "Pushing creative boundaries",
  },
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const progress = ((currentIndex + 1) / portfolioItems.length) * 100

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {portfolioItems[currentIndex].title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {portfolioItems[currentIndex].description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-8">
            <Progress
              value={progress}
              className="h-1 w-full bg-muted [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 