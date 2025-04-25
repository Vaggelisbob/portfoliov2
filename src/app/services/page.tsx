"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: [
        "Full-stack development",
        "Responsive design",
        "Performance optimization",
        "SEO-friendly architecture"
      ]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS and Android apps",
        "Cross-platform solutions",
        "App Store optimization",
        "Push notifications"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Visual design"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services.",
      features: [
        "Cloud architecture",
        "CI/CD pipelines",
        "Infrastructure as code",
        "24/7 monitoring"
      ]
    }
  ]

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth
      const newIndex = Math.round(carouselRef.current.scrollLeft / slideWidth)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="relative flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-full snap-center px-4"
            >
              <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <svg
                        className="w-6 h-6 text-[#1A1A1A] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                activeIndex === index 
                  ? "bg-[#1A1A1A]" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex justify-between items-center absolute top-1/2 left-4 right-4 -translate-y-1/2 pointer-events-none">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeIndex - 1))}
            className={cn(
              "p-2 rounded-full bg-white/80 shadow-lg pointer-events-auto transition-opacity",
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
            )}
            disabled={activeIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(services.length - 1, activeIndex + 1))}
            className={cn(
              "p-2 rounded-full bg-white/80 shadow-lg pointer-events-auto transition-opacity",
              activeIndex === services.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
            )}
            disabled={activeIndex === services.length - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 