import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { Section } from "../../ui/section";

interface TopicCard {
  title: string;
  subtitle: string;
  background?: string;
}

interface TopicsProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  topics?: TopicCard[];
  className?: string;
}

export default function Topics({
  title = "Use Cases",
  subtitle = "See how Reseebo helps you in everyday situations",
  buttonText = "Download Free",
  buttonHref = "#download",
  topics = [
    {
      title: "Returns & Exchanges",
      subtitle: "Need that receipt for a return? Find it instantly with Reseebo's powerful search.",
      background: "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500",
    },
    {
      title: "Warranty Claims",
      subtitle: "Track warranty expiration dates automatically. Never lose warranty coverage information again.",
      background: "bg-gradient-to-br from-blue-600 via-blue-800 to-black",
    },
    {
      title: "Expense Management",
      subtitle: "Organize receipts for tax season or budgeting. All your financial records in one place.",
      background: "bg-gradient-to-br from-orange-400 via-pink-400 to-purple-400",
    },
    {
      title: "Business Receipts",
      subtitle: "Perfect for freelancers and small business owners tracking business expenses and deductions.",
      background: "bg-gradient-to-br from-purple-900 via-indigo-900 to-black",
    },
  ],
  className,
}: TopicsProps) {
  return (
    <Section className={cn("bg-muted/20", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {subtitle}
            </p>
          </div>
          <Button size="lg" asChild>
            <a href={buttonHref}>{buttonText}</a>
          </Button>
        </div>

        {/* Topic Cards Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className={cn(
                  "min-w-[280px] sm:min-w-[320px] h-[400px] relative overflow-hidden border-0 shadow-lg",
                  topic.background
                )}
              >
                <CardContent className="p-0 h-full flex flex-col justify-between">
                  {/* Content Box */}
                  <div className="bg-background/90 backdrop-blur-sm m-4 rounded-lg p-6 flex flex-col gap-2">
                    <h3 className="font-bold text-lg">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.subtitle}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end p-4">
                    <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="size-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-2 mt-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ChevronLeft className="size-5 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <ChevronRight className="size-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

