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
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. Contact information and form will be
              added here soon.
            </p>
            <p>
              For now, you can reach us at{" "}
              <a
                href={siteConfig.links.email}
                className="text-primary hover:underline"
              >
                {siteConfig.links.email.replace("mailto:", "")}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

