import Business from "../components/sections/business/default";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Features from "../components/sections/features/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Users from "../components/sections/users/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <Hero />
      <Features />
      <Business />
      <Users />
      <FAQ />
      <Items />
      <CTA />
      <Footer />
    </main>
  );
}
