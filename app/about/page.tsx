import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export const metadata = {
  title: "About",
  description: "Learn more about Reseebo",
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Reseebo</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. More details about Reseebo will be
              added here soon.
            </p>
            <p>
              Reseebo is your smart receipt organizer and warranty tracker,
              designed to help you manage your receipts and warranties with ease.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

