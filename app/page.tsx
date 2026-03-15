"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Mail, Instagram, Youtube, CheckCircle, Clock, Users, Zap, Target, TrendingUp, PhoneCall } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm font-semibold text-primary">Full-Stack Development</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
                Build Your Next Digital Product
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
                Custom web applications, full-stack development, and innovative solutions for businesses ready to scale
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button asChild size="lg" className="px-8 py-6 text-base font-semibold rounded-lg shadow-lg shadow-primary/25">
                <a href="/book">Book a Call</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <img
                src="/images/rajashekar-profile.jpg"
                alt="Rajashekar Reddy - Creative Professional"
                className="w-48 h-56 md:w-64 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:col-span-3 space-y-6">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">About</p>
                <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 leading-tight">
                  Rajashekar Tech Labs
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a full-stack development agency building custom web applications and digital solutions for forward-thinking businesses. From concept to production, we handle everything your project needs.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise covers the complete development spectrum:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Full-stack web development with React, Next.js, and Node.js</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custom web applications and progressive web apps</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Backend APIs, database design, and system architecture</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Testing, debugging, and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What We Build</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Web Applications</h3>
                <p className="text-muted-foreground">
                  Custom-built web apps tailored to your business needs with modern technologies and scalable architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Backend APIs</h3>
                <p className="text-muted-foreground">
                  Robust REST and GraphQL APIs designed for performance, security, and seamless integration.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Database Design</h3>
                <p className="text-muted-foreground">
                  Optimized database schemas and architecture for reliability, performance, and data integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Bug Fixes & Maintenance</h3>
                <p className="text-muted-foreground">
                  Professional debugging, performance optimization, and ongoing maintenance support for your projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Engagement</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Project-Based Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Custom quotes based on scope, complexity, and timeline. Let's discuss your project.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-6 text-base font-semibold rounded-lg"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Why Choose Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional services backed by training and a commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Expert Developers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep expertise in modern web technologies and full-stack development practices
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Scalable Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Architecture designed to grow with your business and handle increased demands
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Efficient development processes with clear timelines and transparent communication
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Dedicated Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ongoing assistance with maintenance, updates, and feature enhancements
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous testing and optimization to ensure reliability and performance
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Innovation First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Staying current with latest technologies and industry best practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Explore full-stack development projects and professional work
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-12 rounded-2xl text-center">
            <Clock className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-3">View Full Portfolio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Check out my complete portfolio of web applications and development projects
            </p>
            <Button asChild size="lg">
              <a href="https://rajportfolio1.vercel.app" target="_blank" rel="noopener noreferrer">
                Open Portfolio
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your project? Reach out and let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email Card */}
            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground text-sm">Drop me a message anytime</p>
                </div>
                <Button asChild className="w-full">
                  <a href="mailto:rajthekingoftheeditors@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* Book Call Card */}
            <Card className="p-8 bg-gradient-to-br from-white to-muted border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PhoneCall className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Strategy Call</h3>
                  <p className="text-muted-foreground text-sm">Book a 1-on-1 session</p>
                </div>
                <Button asChild className="w-full">
                  <a href="/book">Book a Call</a>
                </Button>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
              <CardContent className="p-0 space-y-6">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Ready to Start?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Fast turnaround</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Professional quality</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Competitive pricing</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Rajashekar Tech Labs</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Full-stack development and custom web solutions for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#about" className="hover:text-primary-foreground transition">About</a></li>
                <li><a href="#packages" className="hover:text-primary-foreground transition">Services</a></li>
                <li><a href="#projects" className="hover:text-primary-foreground transition">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="/privacy-policy" className="hover:text-primary-foreground transition">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-primary-foreground transition">Refund Policy</a></li>
                <li><a href="/return-policy" className="hover:text-primary-foreground transition">Return Policy</a></li>
                <li><a href="/disclaimer" className="hover:text-primary-foreground transition">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="mailto:rajthekingoftheeditors@gmail.com" className="hover:text-primary-foreground transition">Email</a></li>
                <li><a href="https://rajportfolio1.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition">Portfolio</a></li>
                <li><a href="/contact" className="hover:text-primary-foreground transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-sm text-primary-foreground/60">© 2025 Rajashekar Tech Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
