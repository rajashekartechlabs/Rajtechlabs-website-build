"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code2, Zap, Users } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">Our Story</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              About Rajashekar Tech Labs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Building digital products for businesses that want to scale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/images/rajashekar-profile.jpg"
                alt="Rajashekar - Full Stack Developer"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rajashekar Tech Labs is a full-stack development agency founded by Rajashekar Reddy. We specialize in creating custom web applications and digital solutions for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that great technology should be accessible, scalable, and tailored to your unique business needs. Our mission is to transform your ideas into robust, user-friendly digital products.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    From frontend to backend, we handle the complete development stack using modern technologies like React, Next.js, and Node.js.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Performance Focused</h3>
                  <p className="text-muted-foreground">
                    We build fast, scalable applications optimized for performance and user experience across all devices.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Client-Centric</h3>
                  <p className="text-muted-foreground">
                    Your success is our success. We work closely with clients to understand their vision and deliver beyond expectations.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Rigorous testing, code reviews, and best practices ensure reliable, maintainable solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">Web Applications</h3>
                <p className="text-muted-foreground text-sm">
                  Custom-built apps designed specifically for your business requirements and users.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">E-Commerce Platforms</h3>
                <p className="text-muted-foreground text-sm">
                  Complete online stores with payment integration, inventory management, and analytics.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">SaaS Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Scalable software-as-a-service platforms ready to serve multiple users and markets.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">Mobile-Responsive Sites</h3>
                <p className="text-muted-foreground text-sm">
                  Websites that look and perform beautifully on every device and screen size.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">APIs & Backend Systems</h3>
                <p className="text-muted-foreground text-sm">
                  Robust APIs and backend infrastructure for your application's core functionality.
                </p>
              </div>

              <div className="p-6 bg-muted rounded-xl border border-primary/10">
                <h3 className="text-lg font-bold text-foreground mb-3">Maintenance & Support</h3>
                <p className="text-muted-foreground text-sm">
                  Ongoing support, bug fixes, and enhancements to keep your product running smoothly.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Rajashekar Tech Labs can help you build something amazing.
            </p>
            <Button size="lg" asChild>
              <a href="/#contact">Get in Touch</a>
            </Button>
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
