import { Hero } from "@/components/home/hero"
import { ValueProposition } from "@/components/home/value-proposition"
import { FeaturedTechnologies } from "@/components/home/featured-technologies"

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <FeaturedTechnologies />
    </main>
  )
}
