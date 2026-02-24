import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { moms } from "@/src/data/moms";

export const metadata: Metadata = {
  title: "Our Moms",
  description:
    "Meet the amazing moms behind The Doodle Mix. Health-tested, family-raised Golden Doodles and Double Doodles in Queen Creek, Arizona.",
  openGraph: {
    title: "Our Moms | The Doodle Mix",
    description:
      "Meet the amazing moms behind The Doodle Mix puppies.",
  },
};

export default function MomsPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Heart of Our Program
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Our Moms
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our moms are the foundation of everything we do. Each one is
            health-tested, loved, and treated as a member of our family.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {moms.map((mom) => (
            <Link
              key={mom.id}
              href={`/moms/${mom.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg md:flex-row"
            >
              <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden md:w-64">
                <Image
                  src={mom.images[0]}
                  alt={`${mom.name} - ${mom.breedMix}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  {mom.name}
                </h2>
                <p className="text-sm font-medium text-primary">{mom.breedMix}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{mom.age} years old</span>
                  <span>{mom.weight}</span>
                </div>
                <p className="text-sm text-muted-foreground">{mom.temperament}</p>
                <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {mom.description}
                </p>
                <span className="mt-auto pt-2 text-sm font-medium text-primary">
                  View Full Profile
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
