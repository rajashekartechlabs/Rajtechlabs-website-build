"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function ReturnPolicy() {
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
              Return Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Understanding our return policy for digital services and development projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Digital Services Are Non-Returnable</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital development services and custom code are non-returnable once delivered. This is standard across the software development industry as the services are immediately consumed and cannot be resold or transferred.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Revision Policy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                While services cannot be returned, we offer comprehensive revision rounds during development to ensure the final product meets your requirements:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Unlimited revisions during the development phase</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Clear communication about project scope and deliverables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Regular check-ins to ensure alignment with your vision</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Final approval process before project completion</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Satisfaction Guarantee</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our primary goal is your complete satisfaction. If you're not satisfied with the delivered work, please refer to our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> which outlines our satisfaction guarantee and refund eligibility criteria.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If you have any questions about our return policy, please don't hesitate to contact us.
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
