import { FolderTree, Lock,ScanLine } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "../../ui/card";
import { Mockup } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface FeatureCard {
  title: string;
  description?: string;
  icon: ReactNode;
  highlighted?: boolean;
}

interface BusinessProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  mockup?: ReactNode | false;
  className?: string;
}

export default function Business({
  badge = "KEY FEATURES",
  title = "Everything you need to organize your receipts",
  description = "Reseebo combines AI-powered scanning with smart organization to make receipt management effortless.",
  features = [
    {
      title: "AI-Powered Scanning",
      description: "Google Gemini AI automatically extracts merchant, date, amount, receipt number, payment method, and items purchased—no manual entry required.",
      icon: <ScanLine className="size-5" />,
      highlighted: true,
    },
    {
      title: "Smart Organization",
      description: "Automatic categorization and custom tags help you organize receipts by type, warranty status, or importance.",
      icon: <FolderTree className="size-5" />,
    },
    {
      title: "Offline-First Privacy",
      description: "All data stored locally on your device. No cloud sync, no account required—complete privacy and control.",
      icon: <Lock className="size-5" />,
    },
  ],
  mockup = (
    <Image
      src="/add-receipt-screenshot.png"
      alt="Add receipt screen"
      fill
      className="object-cover rounded-lg"
      unoptimized
      priority
    />
  ),
  className,
}: BusinessProps) {
  return (
    <Section className={cn("bg-muted/30", className)}>
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Visual */}
          {mockup !== false && (
            <div className="relative order-2 lg:order-1">
              <div className="relative flex items-center justify-center">
                {/* Background Gradient Circles */}
                <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-40 blur-3xl" />
                <div className="absolute -right-8 -top-8 w-56 h-56 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-30 blur-3xl" />
                
                {/* Phone Mockup */}
                <div className="relative z-10">
                  <Mockup
                    type="mobile"
                    className=""
                  >
                    {mockup}
                  </Mockup>
                </div>
              </div>
            </div>
          )}

          {/* Right Column - Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {badge}
              </span>
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {description}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mt-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={cn(
                    "border transition-colors",
                    feature.highlighted
                      ? "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800"
                      : "bg-muted/50"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "shrink-0 p-2 rounded-lg",
                          feature.highlighted
                            ? "text-orange-600 bg-orange-100 dark:bg-orange-900/30"
                            : "text-foreground"
                        )}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        {feature.description && (
                          <p className="text-sm text-muted-foreground mt-2">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

