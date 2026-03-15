"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">Let's Talk</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm">Send us an email with details about your project</p>
                </div>
                <Button asChild className="w-full">
                  <a href="mailto:rajthekingoftheeditors@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Quick Chat</h3>
                  <p className="text-muted-foreground text-sm">Discuss your project requirements with us</p>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground text-sm">Schedule a call to discuss your needs</p>
                </div>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Project Inquiry</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Email us with the following details to help us better understand your project:
              </p>
              
              <ul className="text-left space-y-4 mb-8 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Project description and goals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>Target audience and key features needed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Your timeline and budget range</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">4.</span>
                  <span>Any specific technologies or preferences</span>
                </li>
              </ul>

              <Button asChild size="lg">
                <a href="mailto:rajthekingoftheeditors@gmail.com?subject=Project Inquiry - Rajashekar Tech Labs">
                  Start Your Project
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">How long do projects take?</h3>
                <p className="text-muted-foreground">
                  Project timelines depend on scope and complexity. Simple websites can take 2-4 weeks, while complex applications may take 2-3 months or more. We'll provide accurate estimates after discussing your requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What's your development process?</h3>
                <p className="text-muted-foreground">
                  We follow an agile approach with regular communication. You'll have updates on progress, opportunities for feedback, and revisions throughout the development process.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Do you offer maintenance and support?</h3>
                <p className="text-muted-foreground">
                  Yes! We provide ongoing maintenance, bug fixes, and enhancement services after project delivery to keep your application running smoothly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">What technologies do you use?</h3>
                <p className="text-muted-foreground">
                  We specialize in modern web technologies including React, Next.js, Node.js, PostgreSQL, MongoDB, and cloud platforms. We choose the best tools for each project's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 Rajashekar Tech Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
