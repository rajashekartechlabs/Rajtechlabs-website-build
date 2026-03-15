"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              How we handle and protect your information
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We collect information necessary to provide you with development services:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Name, email address, and phone number</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Project details and requirements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Business information and credentials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Payment and billing information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Communication records and feedback</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Your information is used solely for:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Developing and delivering your project</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Communicating about project progress and updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Processing payments and invoices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Providing technical support and maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Improving our services based on feedback</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Confidentiality</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to maintaining strict confidentiality of all client information. Your project details, business information, and personal data will never be shared with third parties without your explicit consent, except as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Client Data Ownership</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                All code, designs, and work products created for your project are your intellectual property. Upon final payment, you own all deliverables completely.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We may use third-party services for development and hosting, including:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Cloud hosting providers for deployment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Version control systems for code management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Payment processors for secure transactions</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These services maintain their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                If you have any questions about how we handle your data, please contact us.
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
