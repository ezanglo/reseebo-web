import { ShieldCheck, Search, Camera } from "lucide-react";
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

interface UsersProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  mockup?: ReactNode | false;
  className?: string;
}

export default function Users({
  badge = "BENEFITS",
  title = "Why choose Reseebo?",
  description = "Experience the peace of mind that comes with never losing a receipt again. Reseebo is designed to make receipt management effortless and secure.",
  features = [
    {
      title: "Warranty Tracking",
      description: "Automatically detect and track warranty information, return policies, and expiration dates on receipts. Never lose warranty coverage information again.",
      icon: <ShieldCheck className="size-5" />,
      highlighted: true,
    },
    {
      title: "Lightning-Fast Search",
      description: "Find any receipt instantly with indexed search across titles, notes, tags, categories, and merchant names.",
      icon: <Search className="size-5" />,
    },
    {
      title: "Easy Capture",
      description: "Take photos directly with your camera or select from gallery—beautiful, intuitive interface that makes capturing receipts simple.",
      icon: <Camera className="size-5" />,
    },
  ],
  mockup = (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-purple-200 to-purple-400 rounded-lg" />
      <span className="relative z-10 text-foreground font-medium text-center px-4">
        Insert your Screenshot
      </span>
    </div>
  ),
  className,
}: UsersProps) {
  return (
    <Section className={cn("bg-background", className)}>
      <div className="max-w-container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
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

          {/* Right Column - Visual */}
          {mockup !== false && (
            <div className="relative">
              <div className="relative flex items-center justify-center">
                {/* Background Gradient Circles */}
                <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-40 blur-3xl" />
                <div className="absolute -right-8 -top-8 w-56 h-56 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-40 blur-3xl" />
                
                {/* Phone Mockup */}
                <div className="relative z-10 transform rotate-3">
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
        </div>
      </div>
    </Section>
  );
}

