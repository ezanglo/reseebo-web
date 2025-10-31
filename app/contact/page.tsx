import type { Metadata } from "next";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Reseebo team. Have questions, feedback, or need support? We're here to help you with your receipt organization needs.",
  openGraph: {
    title: `Contact - ${siteConfig.name}`,
    description:
      "Get in touch with the Reseebo team. Have questions, feedback, or need support? We're here to help.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Contact`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact - ${siteConfig.name}`,
    description: "Get in touch with the Reseebo team. We're here to help.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const emailAddress = siteConfig.links.email.replace("mailto:", "");
  
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Have questions, feedback, or need support? We&apos;d love to hear from you.
            Send us an email and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="space-y-8">
            <section className="bg-muted/50 rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For general inquiries, support questions, or feedback, please send us an email.
              </p>
              <a
                href={siteConfig.links.email}
                className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {emailAddress}
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                We typically respond within 24-48 hours during business days.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

