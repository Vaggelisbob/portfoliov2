"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Briefcase, 
  Lightbulb, 
  Rocket, 
  BookOpen, 
  Target,
  Globe,
  GraduationCap,
  Users,
  Brain,
  Clock,
  Zap
} from "lucide-react"

export default function AboutMePage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const about_me = [
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
      description: "Scalable cloud infrastructure and DevOps about_me.",
      features: [
        "Cloud architecture",
        "CI/CD pipelines",
        "Infrastructure as code",
        "24/7 monitoring"
      ]
    }
  ]

  const skills = {
    frontend: {
      title: "Frontend Development",
      categories: [
        {
          title: "Languages & Frameworks",
          items: [
            "HTML5 - Semantic markup and modern standards",
            "CSS3 - Flexbox, Grid, animations, responsive design",
            "JavaScript (ES6+) - Modern JavaScript features and best practices",
            "React.js - Component-based UI development",
            "React Hooks - State management and lifecycle methods"
          ]
        },
        {
          title: "Styling & Design",
          items: [
            "Responsive Design - Mobile-first approach",
            "CSS Preprocessors - Sass/SCSS",
            "CSS Frameworks - Bootstrap, Tailwind CSS",
            "Design Tools - Basic Figma and Adobe XD"
          ]
        }
      ]
    },
    backend: {
      title: "Backend Development",
      categories: [
        {
          title: "Server-Side Technologies",
          items: [
            "PHP - Object-oriented programming and modern practices",
            "Node.js - Server-side JavaScript development",
            "Express.js - RESTful API development",
            "RESTful APIs - Design and implementation"
          ]
        },
        {
          title: "Database Management",
          items: [
            "MySQL - Relational database design and optimization",
            "PostgreSQL - Advanced database features",
            "Database Design - Normalization and schema planning"
          ]
        }
      ]
    },
    wordpress: {
      title: "WordPress Development",
      categories: [
        {
          title: "Core WordPress",
          items: [
            "Custom Themes - From scratch development",
            "Custom Plugins - Extending WordPress functionality",
            "Custom Post Types - Content structure design",
            "WordPress Hooks - Actions and filters"
          ]
        },
        {
          title: "WordPress Ecosystem",
          items: [
            "WooCommerce - E-commerce solutions",
            "Advanced Custom Fields - Content management",
            "WordPress REST API - Headless WordPress development",
            "WordPress Security - Best practices and hardening"
          ]
        }
      ]
    },
    tools: {
      title: "Development Tools & Workflow",
      categories: [
        {
          title: "Version Control",
          items: [
            "Git - Version control and collaboration",
            "GitHub - Repository management and collaboration"
          ]
        },
        {
          title: "Development Environment",
          items: [
            "Docker - Containerization and development environments",
            "Local Development - XAMPP, WAMP, Local by Flywheel",
            "Code Editors - VS Code, PHPStorm"
          ]
        },
        {
          title: "Deployment & Hosting",
          items: [
            "Vercel - Frontend deployment",
            "Netlify - Static site hosting",
            "cPanel - Traditional hosting management",
            "FTP/SFTP - File transfer protocols"
          ]
        }
      ]
    },
    support: {
      title: "Technical Support & Problem Solving",
      categories: [
        {
          title: "Enterprise Systems",
          items: [
            "Oracle CRM Siebel - Customer relationship management",
            "Axiros & Axtract - Network equipment management",
            "Ticketing Systems - Issue tracking and resolution"
          ]
        },
        {
          title: "Communication & Collaboration",
          items: [
            "Microsoft Teams - Team collaboration and presentations",
            "Documentation - Technical writing and process documentation",
            "Training & Coaching - Mentoring team members"
          ]
        }
      ]
    },
    soft: {
      title: "Soft Skills",
      categories: [
        {
          title: "Communication",
          items: [
            "Customer Service - High satisfaction ratings",
            "Technical Explanation - Breaking down complex concepts",
            "Team Collaboration - Working effectively in teams",
            "Presentation Skills - Training colleagues and clients"
          ]
        },
        {
          title: "Problem Solving",
          items: [
            "Analytical Thinking - Breaking down complex problems",
            "Debugging - Systematic troubleshooting approach",
            "Research Skills - Finding solutions independently",
            "Attention to Detail - Quality-focused development"
          ]
        },
        {
          title: "Project Management",
          items: [
            "Time Management - Handling multiple priorities",
            "Deadline Management - Consistent delivery",
            "Self-Directed Learning - Staying current with technology",
            "Adaptability - Learning new tools and frameworks quickly"
          ]
        }
      ]
    },
    languages: {
      title: "Languages",
      items: [
        "Greek - Native speaker",
        "English - Fluent (C2 level) - Written and spoken"
      ]
    }
  }

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
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black/5 to-transparent py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Full Stack Developer & WordPress Developer
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* My Story Section */}
        <section className="mb-24">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">My Story</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  My path to development began during my studies in Digital Systems at the University of Thessaly. While working as an IT Technical Support Specialist at Vodafone, I discovered my true passion for creating solutions rather than just fixing problems.
                </p>
                <p className="mb-6">
                  Every day at Vodafone, I resolve 40-50 technical tickets, troubleshoot complex systems, and help customers navigate technology challenges. This experience has given me invaluable skills in problem-solving, communication, and working under pressure – skills that translate perfectly into development work.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Drives Me Section */}
        <section className="mb-24">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <Rocket className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">What Drives Me</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  I'm fascinated by the power of code to solve real-world problems. Whether it's building a custom WordPress plugin to streamline a business process or developing a React application that improves user experience, I love the challenge of turning ideas into functional, elegant solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* My Approach Section */}
        <section className="mb-24">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">My Approach</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">My background in technical support has taught me to:</p>
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <Brain className="mt-1 h-5 w-5 text-primary" />
                    <span>Listen carefully to understand the real problem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code2 className="mt-1 h-5 w-5 text-primary" />
                    <span>Think systematically to find the best solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="mt-1 h-5 w-5 text-primary" />
                    <span>Communicate clearly with both technical and non-technical stakeholders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 text-primary" />
                    <span>Stay calm under pressure and meet deadlines</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Beyond Coding Section */}
        <section className="mb-24">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Beyond Coding</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">When I'm not coding, you'll find me:</p>
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <Zap className="mt-1 h-5 w-5 text-primary" />
                    <span>Exploring new technologies and frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 text-primary" />
                    <span>Reading about web development trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code2 className="mt-1 h-5 w-5 text-primary" />
                    <span>Listening to music while debugging code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="mt-1 h-5 w-5 text-primary" />
                    <span>Planning my move to Athens for new opportunities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Currently Working On Section */}
        <section className="mb-24">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Currently Working On</h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  I'm putting the finishing touches on my thesis project – a comprehensive WordPress platform for university alumni networking. It's been an incredible learning experience that combines everything I've learned about custom WordPress development, database design, and user experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
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
                  {skills.frontend.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.backend.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.wordpress.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.tools.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.support.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.soft.categories.map((category) => (
                    <div key={category.title} className="space-y-4">
                      <h4 className="text-lg font-medium">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
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
                  {skills.languages.items.map((item) => (
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
      </div>
    </main>
  )
} 