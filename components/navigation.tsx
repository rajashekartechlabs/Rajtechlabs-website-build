"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Rajashekar Tech Labs
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <a
                href="/about"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </button>
              <a
                href="/contact"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <Button size="sm" className="ml-4 hidden lg:flex" asChild>
                <a href="/book">Book a Call</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Home
              </button>
              <a
                href="/about"
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                About
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Projects
              </button>
              <a
                href="/contact"
                className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full justify-start" asChild>
                  <a href="/book">Book a Call</a>
                </Button>
              </div>
              <hr className="my-2 border-border" />
              <a
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-sm w-full text-left transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/return-policy"
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-sm w-full text-left transition-colors"
              >
                Return Policy
              </a>
              <a
                href="/refund-policy"
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-sm w-full text-left transition-colors"
              >
                Refund Policy
              </a>
              <a
                href="/disclaimer"
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-sm w-full text-left transition-colors"
              >
                Disclaimer
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
