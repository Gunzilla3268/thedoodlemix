import type { Metadata } from "next";
import { PuppiesGrid } from "@/components/puppies/puppies-grid";

export const metadata: Metadata = {
  title: "Available Puppies",
  description:
    "Browse our current available Golden Doodle and Double Doodle puppies. Family-raised in Queen Creek, Arizona. First-come, first-served.",
  openGraph: {
    title: "Available Puppies | The Doodle Mix",
    description:
      "Browse our current available Golden Doodle and Double Doodle puppies. Family-raised in Queen Creek, Arizona.",
  },
};

export default function AvailablePuppiesPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Find Your New Best Friend
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Available Puppies
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            All of our puppies are family-raised, health-tested, and ready to
            join their forever homes. Browse the current litter below and
            contact us to schedule a visit.
          </p>
        </div>

        <PuppiesGrid />
      </div>
    </section>
  );
}
