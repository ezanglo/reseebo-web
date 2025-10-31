import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import ReactMarkdown from "react-markdown";
import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read Reseebo's Terms and Conditions to understand the terms of use for our receipt organizer and warranty tracker application.",
  openGraph: {
    title: `Terms and Conditions - ${siteConfig.name}`,
    description:
      "Read Reseebo's Terms and Conditions to understand the terms of use for our application.",
    url: `${siteConfig.url}/terms-and-conditions`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Terms and Conditions`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms and Conditions - ${siteConfig.name}`,
    description:
      "Read Reseebo's Terms and Conditions to understand the terms of use.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

async function getTermsAndConditions() {
  const filePath = join(process.cwd(), "lib", "terms-and-conditions.md");
  const fileContents = await readFile(filePath, "utf8");
  return fileContents;
}

export default async function TermsAndConditionsPage() {
  const content = await getTermsAndConditions();

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-5xl font-bold mb-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-8 mb-4">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 mb-4">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="mb-2">{children}</li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

