import {
  ScanLine,
  FolderTree,
  Lock,
  ShieldCheck,
  Search,
  Camera,
  FileText,
  Sparkles,
} from "lucide-react";
import { ReactNode } from "react";

import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Everything you need to organize your receipts",
  items = [
    {
      title: "AI-Powered Scanning",
      description: "Google Gemini AI automatically extracts merchant, date, amount, and items from receipt photos—no manual entry",
      icon: <ScanLine className="size-6 text-blue-500" />,
    },
    {
      title: "Smart Organization",
      description: "Automatic categorization and custom tags help you organize receipts by type, warranty status, or importance",
      icon: <FolderTree className="size-6 text-blue-500" />,
    },
    {
      title: "Offline-First Privacy",
      description: "All data stored locally on your device. No cloud sync, no account required—complete privacy and control",
      icon: <Lock className="size-6 text-blue-500" />,
    },
    {
      title: "Warranty Tracking",
      description: "Automatically detect and track warranty information, return policies, and expiration dates on receipts",
      icon: <ShieldCheck className="size-6 text-blue-500" />,
    },
    {
      title: "Lightning-Fast Search",
      description: "Find any receipt instantly with indexed search across titles, notes, tags, categories, and merchant names",
      icon: <Search className="size-6 text-blue-500" />,
    },
    {
      title: "Easy Capture",
      description: "Take photos directly with your camera or select from gallery—beautiful, intuitive interface",
      icon: <Camera className="size-6 text-blue-500" />,
    },
    {
      title: "Structured Data",
      description: "Extracts structured fields: merchant, date, amount, subtotal, tax, receipt number, and payment method",
      icon: <FileText className="size-6 text-blue-500" />,
    },
    {
      title: "Edit & Review",
      description: "Easy to review and edit all extracted information. Auto-generates notes with purchased items",
      icon: <Sparkles className="size-6 text-blue-500" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
            {title}
          </h2>
        </div>
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/20 mb-2">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
