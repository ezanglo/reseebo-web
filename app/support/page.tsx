import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Support",
  description: "Get help and support for Reseebo",
};

export default function SupportPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Support</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. Support information, FAQ, and help
              resources will be added here soon.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Contact Support
              </h2>
              <p>
                For immediate assistance, please contact us at{" "}
                <a
                  href={siteConfig.links.email}
                  className="text-primary underline hover:no-underline"
                >
                  {siteConfig.links.email.replace("mailto:", "")}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

