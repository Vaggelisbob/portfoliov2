import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact | Vaggelis Bobonhs",
  description: "Get in touch with me to discuss your project or any questions you might have.",
}

export default function ContactPage() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-card p-8">
            <h1 className="mb-6 text-3xl font-bold">Get in Touch</h1>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
              <p className="text-muted-foreground">
                Contact me via the contact form or directly via my social media.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">ebomponis@gmail.com</p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">(+30) 698 6563 740</p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">Athens, Greece</p>
            </div>
            
            <div className="flex gap-4">
                <Link href="https://www.facebook.com/profile.php?id=100008346042367&locale=el_GR" target="_blank" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="black" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
               
                <Link href="https://github.com/Vaggelisbob" target="_blank" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="black" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>

                <Link href="https://www.linkedin.com/in/βαγγέλης-μπομπόνης" target="_blank" className="text-white/70 hover:text-white transition-colors">
                  <svg className="h-5 w-5" viewBox="0 0 448 512" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.5 107.3 0 82.8 0 52.7A52.8 52.8 0 0152.8 0a52.8 52.8 0 0152.7 52.8c0 30.1-24.5 54.6-52.66 54.5zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.4-2.3 5.5-2.9 13.2-2.9 20.9V448h-92.5s1.2-263.7 0-290.1h92.5v41.1c12.3-19 34.3-46 83.5-46 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                  </svg>
                </Link>
              </div>  
          </div>
        </div>
      </div>
    </section>
  )
} 