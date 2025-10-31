import type { Metadata } from "next";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest news, updates, and tips about receipt organization, warranty tracking, and productivity from Reseebo.",
  openGraph: {
    title: `Blog - ${siteConfig.name}`,
    description:
      "Stay updated with the latest news, updates, and tips about receipt organization, warranty tracking, and productivity from Reseebo.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Blog`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog - ${siteConfig.name}`,
    description:
      "Stay updated with the latest news, updates, and tips about receipt organization and warranty tracking.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. Blog posts and articles will be
              displayed here soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

