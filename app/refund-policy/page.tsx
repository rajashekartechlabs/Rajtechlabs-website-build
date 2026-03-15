"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function RefundPolicy() {
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
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              100% Satisfaction Guarantee - Our commitment to your happiness
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">100% Satisfaction Guarantee</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your satisfaction is our priority. If the delivered work does not meet the agreed-upon requirements or specifications, we offer a full refund within the terms outlined below.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Refund Eligibility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                You are eligible for a refund if:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>The delivered work does not meet the agreed specifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Critical functionality is missing or non-functional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Project is cancelled before completion (partial refund applies)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Refund requested within 14 days of project completion</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Non-Refundable Costs</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The following costs are non-refundable as they represent third-party services and infrastructure:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Domain registration and annual fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Hosting and server infrastructure costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Third-party API fees and subscriptions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Plugin and software licenses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>SSL certificates and security services</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Refund Process</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To request a refund:
              </p>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Contact us within 14 days of project completion</li>
                <li>Provide detailed explanation of issues or non-compliance</li>
                <li>Allow 5 business days for review and investigation</li>
                <li>If approved, refund will be processed within 7-10 business days</li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact for Refunds</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To initiate a refund request or discuss any concerns about your project, please reach out to us directly.
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
