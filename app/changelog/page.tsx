import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";

export const metadata = {
  title: "Changelog",
  description: "Recent updates and changes to Reseebo",
};

export default function ChangelogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div className="max-w-container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Changelog</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              This page is under construction. Product updates and changelog will be
              displayed here soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

