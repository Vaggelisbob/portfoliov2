import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Portfolio | Vaggelis Bobonhs",
  description: "Explore my portfolio of web development projects and applications.",
}

interface Project {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: "Spiros Barbershop",
    description:
      "A modern website for a barbershop, featuring online booking, service listings, and a gallery of work. Built with Next.js and Tailwind CSS.",
    image: "/spiros-barbershop.png",
    link: "https://spiros-barbershop.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills. Built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/portfolio.png",
    link: "https://vaggelis-bobonhs.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
]

export default function PortfolioPage() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">My Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge
            and solution in web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:border-primary"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 