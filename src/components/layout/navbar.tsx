"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, ChevronDown } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface NavigationItem {
  title: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/portfolio" },
  { title: "About Me", href: "/about_me" },
  { title: "Get In Touch", href: "/contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#1A1A1A]">Vaggelis Bobonhs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 md:gap-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(), 
                        "px-3 py-2 text-[#1A1A1A]/90 hover:text-[#1A1A1A] bg-transparent hover:bg-gray-100 focus:bg-transparent active:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 data-[state=open]:bg-transparent data-[active]:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent"
                      )}
                    >
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                {/* CV Button */}
                <NavigationMenuItem>
                  <div className="relative">
                    <button
                      onClick={() => setIsCVDropdownOpen(!isCVDropdownOpen)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-3 py-2 text-[#1A1A1A]/90 hover:text-[#1A1A1A] bg-transparent hover:bg-gray-100 focus:bg-transparent active:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 flex items-center gap-2"
                      )}
                    >
                      <FileText className="h-4 w-4" />
                      CV
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isCVDropdownOpen ? "rotate-180" : ""
                      )} />
                    </button>
                    {isCVDropdownOpen && (
                      <div className="absolute right-0 mt-1 w-[200px] bg-white rounded-md shadow-lg border">
                        <ul className="py-2">
                          <li>
                            <Link
                              href="/ΕΥΑΓΓΕΛΟΣ ΙΩΑΝΝΗΣ ΜΠΟΜΠΟΝΗΣ CV.pdf"
                              target="_blank"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsCVDropdownOpen(false)}
                            >
                              View CV
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ΕΥΑΓΓΕΛΟΣ ΙΩΑΝΝΗΣ ΜΠΟΜΠΟΝΗΣ CV.pdf"
                              download
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsCVDropdownOpen(false)}
                            >
                              Download CV
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A1A1A] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#1A1A1A] shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav>
              <ul className="space-y-1">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* Mobile CV Links */}
                <li className="pt-2">
                  <div className="px-3 py-2">
                    <span className="text-sm font-medium text-white/70">CV Options</span>
                  </div>
                  <div className="mt-1 space-y-1">
                    <Link
                      href="/ΕΥΑΓΓΕΛΟΣ ΙΩΑΝΝΗΣ ΜΠΟΜΠΟΝΗΣ CV.pdf"
                      target="_blank"
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FileText className="h-4 w-4" />
                      View CV
                    </Link>
                    <Link
                      href="/ΕΥΑΓΓΕΛΟΣ ΙΩΑΝΝΗΣ ΜΠΟΜΠΟΝΗΣ CV.pdf"
                      download
                      className="flex items-center gap-2 px-3 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FileText className="h-4 w-4" />
                      Download CV
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 