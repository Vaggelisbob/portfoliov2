import { Hero } from "@/components/home/hero"
import { ValueProposition } from "@/components/home/value-proposition"
import { PortfolioCarousel } from "@/components/home/portfolio-carousel"

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <PortfolioCarousel />
    </main>
  )
}
