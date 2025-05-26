"use client"

import { Card, CardContent } from "@/components/ui/card"
import { SiReact, SiWordpress, SiPhp, SiNodedotjs, SiMysql, SiGit, SiDocker } from "react-icons/si"

const technologies = [
  { name: "React", icon: SiReact },
  { name: "WordPress", icon: SiWordpress },
  { name: "PHP", icon: SiPhp },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
]

export function FeaturedTechnologies() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl overflow-hidden border-none bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-xl">
          <CardContent className="p-12">
            <h2 className="mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Featured Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center gap-2 text-center transition-all duration-300 hover:scale-110"
                >
                  <tech.icon className="h-12 w-12 text-gray-700 transition-colors group-hover:text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 