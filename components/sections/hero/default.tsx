import { type VariantProps } from "class-variance-authority";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import { Mockup } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  mockupFront?: ReactNode | false;
  mockupBack?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Never lose a receipt again",
  description = "Your smart receipt organizer and warranty tracker. Organize, search, and manage receipts with AI-powered scanning—all offline, all private.",
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        100% Offline • Privacy First • No Account Required
      </span>
    </Badge>
  ),
  mockup,
  mockupFront = (
    <Image
      src="/screenshot-home.png"
      alt="Reseebo home screen"
      fill
      className="object-cover rounded-lg"
      unoptimized
      priority
    />
  ),
  mockupBack = (
    <Image
      src="/screenshot-add-receipt.png"
      alt="Add receipt screen"
      fill
      className="object-cover rounded-lg"
      unoptimized
      priority
    />
  ),
  buttons = [
    {
      href: siteConfig.downloadUrl,
      text: "Download Free",
      variant: "default",
    },
    {
      href: "#features",
      text: "Learn More",
      variant: "outline",
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6 text-left">
            {badge !== false && badge}
            <h1 className="animate-appear relative z-10 text-4xl leading-tight font-bold text-balance sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
              {title}
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 font-normal text-balance opacity-0 delay-100 sm:text-lg">
              {description}
            </p>
            {buttons !== false && buttons.length > 0 && (
              <div className="animate-appear relative z-10 flex flex-wrap gap-4 opacity-0 delay-300">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                  >
                    <a href={button.href}>
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </a>
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Phone Mockups */}
          {(mockup !== false || (mockupFront !== false && mockupBack !== false)) && (
            <div className="relative w-full pt-12">
              <div className="relative flex items-center justify-center">
                {/* Background Gradient Circles */}
                <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-30 blur-3xl" />
                <div className="absolute -right-12 -top-12 w-56 h-56 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 blur-3xl" />
                
                {/* Front Phone */}
                <div className="relative z-10 transform -rotate-6">
                  <Mockup
                    type="mobile"
                    className=""
                  >
                    {mockup || mockupFront}
                  </Mockup>
                </div>

                {/* Back Phone */}
                <div className="absolute right-0 top-8 z-0 transform rotate-6 scale-90">
                  <Mockup
                    type="mobile"
                    className="ring-2 ring-purple-400/50 animate-appear opacity-0 delay-900"
                  >
                    {mockup || mockupBack}
                  </Mockup>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 animate-appear opacity-0 delay-1000">
          <ArrowDown className="size-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Scroll down to explore features</p>
        </div>
      </div>
    </Section>
  );
}
