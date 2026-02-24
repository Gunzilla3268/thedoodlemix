import type { Metadata } from "next";
import { Phone, MessageSquare, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Doodle Mix to ask about available puppies, schedule a visit, or learn about upcoming litters. Queen Creek, Arizona.",
  openGraph: {
    title: "Contact Us | The Doodle Mix",
    description:
      "Get in touch to ask about available puppies or schedule a visit.",
  },
};

export default function ContactPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {"We'd Love to Hear From You"}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Whether you are interested in a puppy, want to schedule a visit, or
            just have a question, we are here to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Phone */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Call Us</h3>
              </div>
              <a
                href="tel:+14805551234"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                (480) 555-1234
              </a>
              <p className="text-xs text-muted-foreground">
                Available Mon-Sat, 9am - 7pm MST
              </p>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Text Us</h3>
              </div>
              <a
                href="sms:+14805551234"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                (480) 555-1234
              </a>
              <p className="text-xs text-muted-foreground">
                Texting is the fastest way to reach us.
              </p>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Queen Creek, Arizona
              </p>
              <p className="text-xs text-muted-foreground">
                Exact address shared after scheduling a visit.
              </p>
            </div>

            {/* Payment & Safety */}
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-secondary p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">Payment & Safety</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We accept <strong className="text-foreground">Cash, Zelle, or Venmo</strong> only. We do not take card
                payments or online checkout.
              </p>
              <p className="text-xs font-medium text-muted-foreground">
                We never request gift cards, crypto, or wire transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
