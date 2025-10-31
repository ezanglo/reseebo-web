import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "Do I need an internet connection?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          No, Reseebo works completely offline. All your receipt data is stored
          locally on your device using SQLite database. You only need internet
          for the initial AI-powered receipt scanning, but after that, all
          access, search, and organization features work without any connection.
        </p>
      ),
    },
    {
      question: "Is my data private?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes, absolutely. All data is stored locally on your device. We
            don&apos;t use cloud sync, don&apos;t collect your information, and
            don&apos;t require an account. Your receipts and personal
            information stay on your phone, giving you complete privacy and
            control.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            The AI scanning uses Google Gemini API, but we process receipts
            securely and don&apos;t store them on our servers.
          </p>
        </>
      ),
    },
    {
      question: "Can I search old receipts?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes! Reseebo features instant indexed search that lets you find any
          receipt in seconds. You can search across merchant names, dates,
          amounts, categories, tags, notes, and even items purchased. The
          search is fast and works completely offline.
        </p>
      ),
    },
    {
      question: "What if the AI extraction is wrong?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          All extracted information is easy to review and edit. After the AI
          scans your receipt, you can check and modify any field—merchant name,
          date, amount, items, tags, or notes. Reseebo gives you full control
          to ensure accuracy.
        </p>
      ),
    },
    {
      question: "Does it work on iOS and Android?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes, Reseebo is available on both iOS and Android platforms. You can
          download it from the App Store or Google Play Store. All features work
          the same across both platforms.
        </p>
      ),
    },
    {
      question: "How does warranty tracking work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Reseebo automatically detects warranty information on receipts when
            available. You can also manually tag receipts with warranty
            information and set expiration dates. The app helps you track
            return policies and never lose warranty coverage information.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
