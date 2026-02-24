import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Scale, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stud } from "@/src/data/stud";

export const metadata: Metadata = {
  title: "Our Stud",
  description: `Meet ${stud.name}, our ${stud.breed} stud. Health-tested, athletic, and the perfect sire for our doodle litters.`,
  openGraph: {
    title: `${stud.name} - Our Stud | The Doodle Mix`,
    description: `Meet ${stud.name}, our health-tested ${stud.breed} stud.`,
  },
};

export default function StudPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Proud Papa
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Meet {stud.name}
          </h1>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src={stud.images[0]}
                alt={`${stud.name} - ${stud.breed}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-6 lg:max-w-md">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                {stud.breed}
              </p>
              <h2 className="mt-1 font-serif text-3xl font-bold text-foreground">
                {stud.name}
              </h2>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              {stud.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Heart className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Breed</p>
                <p className="text-sm font-medium text-foreground">{stud.breed}</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Scale className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Weight</p>
                <p className="text-sm font-medium text-foreground">{stud.weight}</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Temperament</p>
                <p className="text-sm font-medium text-foreground">
                  {stud.temperament}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-secondary p-4">
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                Health Testing
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stud.name} is AKC registered with comprehensive health testing
                including hips, elbows, eyes, and full genetic panel. All
                clearances are available upon request.
              </p>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Ask About {stud.name}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
