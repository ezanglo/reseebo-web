import { type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import { Mockup } from "../../ui/mockup";
import { Section } from "../../ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  buttons?: CTAButtonProps[] | false;
  mockup?: ReactNode | false;
  className?: string;
}

export default function CTA({
  badge = "READY TO GET STARTED",
  title = "Never lose a receipt again",
  subtitle = "Join thousands of users who are organizing their receipts effortlessly with Reseebo. Download free today and experience the peace of mind that comes with smart receipt management.",
  tagline = "Your smart receipt organizer and warranty tracker",
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
  mockup = (
    <Image
      src="/screenshot-home-data.png"
      alt="Search screen"
      fill
      className="object-cover rounded-lg"
      unoptimized
      priority
    />
  ),
  className,
}: CTAProps) {
  return (
    <Section className={cn("relative overflow-hidden", className)}>
      {/* Background Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-muted/30 rounded-t-[3rem] -mt-32" />
      
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-12 text-center">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {badge}
          </span>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl sm:leading-tight lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </div>

        {/* Phone Mockup */}
        {mockup !== false && (
          <div className="relative w-full flex justify-center pt-8">
            <div className="relative">
              {/* Background Gradient Circles */}
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-30 blur-3xl" />
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full opacity-30 blur-3xl" />
              
              <Mockup
                type="mobile"
                className="shadow-2xl"
              >
                {mockup}
              </Mockup>
            </div>
          </div>
        )}

        {/* Bottom Section with Logo and Buttons */}
        <div className="flex flex-col items-center gap-8 pt-8">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
            <p className="text-muted-foreground">{tagline}</p>
          </div>
          
          {buttons !== false && buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </Section>
  );
}
