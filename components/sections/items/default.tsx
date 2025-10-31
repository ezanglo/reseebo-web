import {
  CameraIcon,
  FileTextIcon,
  FolderTreeIcon,
  LockIcon,
  ScanLineIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
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
      icon: <ScanLineIcon className="size-5 stroke-1" />,
    },
    {
      title: "Smart Organization",
      description: "Automatic categorization and custom tags help you organize receipts by type, warranty status, or importance",
      icon: <FolderTreeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Offline-First Privacy",
      description: "All data stored locally on your device. No cloud sync, no account required—complete privacy and control",
      icon: <LockIcon className="size-5 stroke-1" />,
    },
    {
      title: "Warranty Tracking",
      description: "Automatically detect and track warranty information, return policies, and expiration dates on receipts",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Lightning-Fast Search",
      description: "Find any receipt instantly with indexed search across titles, notes, tags, categories, and merchant names",
      icon: <SearchIcon className="size-5 stroke-1" />,
    },
    {
      title: "Easy Capture",
      description: "Take photos directly with your camera or select from gallery—beautiful, intuitive interface",
      icon: <CameraIcon className="size-5 stroke-1" />,
    },
    {
      title: "Structured Data",
      description: "Extracts structured fields: merchant, date, amount, subtotal, tax, receipt number, and payment method",
      icon: <FileTextIcon className="size-5 stroke-1" />,
    },
    {
      title: "Edit & Review",
      description: "Easy to review and edit all extracted information. Auto-generates notes with purchased items",
      icon: <SparklesIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
