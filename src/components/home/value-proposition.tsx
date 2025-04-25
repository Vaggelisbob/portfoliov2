"use client"

import { Card, CardContent } from "@/components/ui/card"

export function ValueProposition() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl bg-black/5 backdrop-blur">
          <CardContent className="p-12 text-center">
            <h2 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
              Crafting Clean & Sophisticated Visualizations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              We specialize in transforming complex ideas into elegant, minimalist designs that captivate and communicate with clarity. Our expertise lies in creating sleek visualizations that bring your vision to life with sophistication and purpose.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 