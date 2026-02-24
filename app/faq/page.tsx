import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/src/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The Doodle Mix puppies, reservations, health guarantees, and more. Queen Creek, Arizona.",
  openGraph: {
    title: "FAQ | The Doodle Mix",
    description:
      "Frequently asked questions about our puppies, reservations, and policies.",
  },
};

export default function FaqPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Common Questions
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Everything you need to know about our puppies, process, and
            policies. Still have questions? We are happy to help.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-muted-foreground">
            {"Did not find what you were looking for?"}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
