import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2 } from "lucide-react"

const SkillsSection = React.memo(function SkillsSection({ skills }: { skills: any }) {
  return (
    <section className="mb-24">
      <Card className="overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="mb-8 flex items-center gap-4">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>
          {/* Frontend Development */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.frontend.title}</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.frontend.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Backend Development */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.backend.title}</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.backend.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* WordPress Development */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.wordpress.title}</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.wordpress.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Development Tools */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.tools.title}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {skills.tools.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Technical Support */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.support.title}</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {skills.support.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-semibold">{skills.soft.title}</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {skills.soft.categories.map((category: any) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-medium">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Languages */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold">{skills.languages.title}</h3>
            <ul className="space-y-2">
              {skills.languages.items.map((item: string) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
})

export default SkillsSection 