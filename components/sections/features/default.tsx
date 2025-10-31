import { Camera, ScanLine, Search,Tag } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeaturesProps {
  title?: string;
  features?: Feature[];
  className?: string;
}

export default function Features({
  title = "How It Works",
  features = [
    {
      title: "Snap or Select",
      description: "Take a photo with your camera or select from gallery",
      icon: <Camera className="size-5 text-blue-500" />,
    },
    {
      title: "AI Extracts Data",
      description: "Google Gemini AI automatically extracts merchant, date, amount, and items",
      icon: <ScanLine className="size-5 text-blue-500" />,
    },
    {
      title: "Organize & Tag",
      description: "Automatic categorization and custom tags for easy organization",
      icon: <Tag className="size-5 text-blue-500" />,
    },
    {
      title: "Search & Access",
      description: "Find any receipt instantly with indexed search",
      icon: <Search className="size-5 text-blue-500" />,
    },
  ],
  className,
}: FeaturesProps) {
  return (
    <Section className={cn("bg-muted/30 rounded-2xl mx-4", className)}>
      <div className="max-w-container mx-auto py-12">
        <h2 className="text-center text-3xl font-bold mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

