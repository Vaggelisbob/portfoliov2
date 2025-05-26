"use client"

import { Card, CardContent } from "@/components/ui/card"

export function ValueProposition() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl overflow-hidden border-none bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-xl">
          <CardContent className="p-12">
          <h2 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent text-center md:text-3xl">  
              Crafting Clean & Sophisticated Visualizations
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-lg md:text-xl">
              <p className="text-gray-700">
                2+ Years Technical Experience
              </p>
              <p className="text-gray-700">
                Full Stack Development Skills
              </p>
              <p className="text-gray-700">
                WordPress Developer
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 