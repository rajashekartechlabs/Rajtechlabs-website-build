"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">Legal</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Important terms and limitations of liability
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Results Depend on Client Requirements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The quality and success of development projects are directly dependent on clear requirements, specifications, and feedback provided by the client. We are not responsible for misunderstandings regarding project scope or missing requirements that were not communicated.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are not liable for issues arising from third-party services, including:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Cloud hosting provider outages or service issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Third-party API downtime or changes to their services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Payment processor failures or errors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Domain registrar or DNS issues</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Website Performance</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Website performance depends on multiple factors including hosting quality, traffic volume, content size, user device capabilities, and internet connection speed. We develop performant applications but cannot guarantee specific load times or uptime percentages, which depend on infrastructure and external factors.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Security and Data Protection</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                While we implement industry-standard security practices, no system is 100% secure. We are not liable for:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Unauthorized access due to weak client passwords or poor credential management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Data breaches resulting from client negligence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Attacks on infrastructure or hosting platforms beyond our control</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Portfolio and Examples</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Examples and portfolio projects shown are for demonstration purposes only. They represent past work and may not be indicative of future projects. Every project is unique with different requirements, timelines, and complexities.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Rajashekar Tech Labs is not liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to services provided.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About This Disclaimer?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this disclaimer, please contact us for clarification.
              </p>
              <Button asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
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
