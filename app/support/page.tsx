import type { Metadata } from "next";
import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help and support for Reseebo. Find answers to frequently asked questions, contact support, and learn how to make the most of your receipt organizer.",
  openGraph: {
    title: `Support - ${siteConfig.name}`,
    description:
      "Get help and support for Reseebo. Find answers to frequently asked questions and contact support.",
    url: `${siteConfig.url}/support`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Support`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Support - ${siteConfig.name}`,
    description:
      "Get help and support for Reseebo. Find answers to frequently asked questions.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/support`,
  },
};

export default function SupportPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Support</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            We&apos;re here to help! Find answers to common questions below, or
            contact us directly for personalized assistance.
          </p>

          <div className="space-y-12">
            {/* Contact Support Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
              <p className="mb-4 leading-relaxed">
                Need help? Have a question or feedback? We&apos;d love to hear
                from you. Send us an email and we&apos;ll get back to you as
                soon as possible.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <p className="mb-2 font-medium">Email Support:</p>
                <a
                  href={siteConfig.links.email}
                  className="text-primary underline hover:no-underline text-lg"
                >
                  {siteConfig.links.email.replace("mailto:", "")}
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="offline">
                  <AccordionTrigger>
                    Do I need an internet connection?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      No, Reseebo works completely offline. All your receipt
                      data is stored locally on your device using SQLite
                      database. You only need internet for the initial
                      AI-powered receipt scanning, but after that, all access,
                      search, and organization features work without any
                      connection.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="privacy">
                  <AccordionTrigger>Is my data private?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="leading-relaxed">
                        Yes, absolutely. Currently, all data is stored locally on your
                        device. We don&apos;t use cloud sync, don&apos;t collect
                        your information, and don&apos;t require an account.
                        Your receipts and personal information stay on your
                        phone, giving you complete privacy and control.
                      </p>
                      <p className="leading-relaxed">
                        In the future, we plan to add optional cloud backup
                        functionality, which will allow you to securely back up
                        your receipts to the cloud if you choose to. This will
                        remain completely optional—your data will continue to
                        be stored locally by default.
                      </p>
                      <p className="leading-relaxed">
                        The AI scanning uses Google Gemini API, but we process
                        receipts securely and don&apos;t store them on our
                        servers.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="search">
                  <AccordionTrigger>Can I search old receipts?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes! Reseebo features instant indexed search that lets you
                      find any receipt in seconds. You can search across merchant
                      names, dates, amounts, categories, tags, notes, and even
                      items purchased. The search is fast and works completely
                      offline.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-extraction">
                  <AccordionTrigger>
                    What if the AI extraction is wrong?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      All extracted information is easy to review and edit.
                      After the AI scans your receipt, you can check and modify
                      any field—merchant name, date, amount, items, tags, or
                      notes. Reseebo gives you full control to ensure accuracy.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="platforms">
                  <AccordionTrigger>
                    What platforms is Reseebo available on?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Reseebo is currently available on iOS. You can download it
                      from the App Store. We&apos;re working on bringing Reseebo
                      to other platforms in the future.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warranty">
                  <AccordionTrigger>
                    How does warranty tracking work?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Reseebo automatically detects warranty information on
                      receipts when available. You can also manually tag
                      receipts with warranty information and set expiration
                      dates. The app helps you track return policies and never
                      lose warranty coverage information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Bug Reports & Feature Requests */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                Bug Reports & Feature Requests
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Found a bug or have an idea for a new feature? We&apos;re
                always looking to improve Reseebo. Please send us an email with
                as much detail as possible, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground mb-4">
                <li>iOS device model and version</li>
                <li>App version</li>
                <li>Steps to reproduce the issue (for bugs)</li>
                <li>Screenshots if applicable</li>
              </ul>
              <p className="leading-relaxed text-muted-foreground">
                Your feedback helps us make Reseebo better for everyone!
              </p>
            </section>

            {/* Legal & Policies */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                Legal & Policies
              </h2>
              <div className="space-y-2">
                <p className="leading-relaxed text-muted-foreground">
                  For more information about how we handle your data and our
                  terms of service, please review:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-primary underline hover:no-underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="text-primary underline hover:no-underline"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

