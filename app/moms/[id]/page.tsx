import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, Scale, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moms, getMomById } from "@/src/data/moms";
import { getLitterById } from "@/src/data/litters";

interface MomPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return moms.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: MomPageProps): Promise<Metadata> {
  const { id } = await params;
  const mom = getMomById(id);
  if (!mom) return { title: "Mom Not Found" };

  return {
    title: `${mom.name} - ${mom.breedMix}`,
    description: mom.description,
  };
}

export default async function MomDetailPage({ params }: MomPageProps) {
  const { id } = await params;
  const mom = getMomById(id);

  if (!mom) {
    notFound();
  }

  const pastLitters = mom.pastLitters
    .map((lid) => getLitterById(lid))
    .filter(Boolean);

  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <Link
          href="/moms"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Moms
        </Link>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Image */}
          <div className="flex-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src={mom.images[0]}
                alt={`${mom.name} - ${mom.breedMix}`}
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
                {mom.breedMix}
              </p>
              <h1 className="mt-1 font-serif text-3xl font-bold text-foreground md:text-4xl">
                {mom.name}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              {mom.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Heart className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Age</p>
                <p className="text-sm font-medium text-foreground">
                  {mom.age} years
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Scale className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Weight</p>
                <p className="text-sm font-medium text-foreground">{mom.weight}</p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground">Temperament</p>
                <p className="text-sm font-medium text-foreground">{mom.temperament}</p>
              </div>
            </div>

            {/* Past Litters */}
            {pastLitters.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Past Litters
                </h3>
                <div className="flex flex-col gap-2">
                  {pastLitters.map(
                    (litter) =>
                      litter && (
                        <Link
                          key={litter.id}
                          href="/past-litters"
                          className="rounded-lg border border-border bg-secondary p-3 text-sm transition-colors hover:bg-muted"
                        >
                          <span className="font-medium text-foreground">
                            {litter.name}
                          </span>
                          <span className="text-muted-foreground">
                            {" "}
                            &middot; Born{" "}
                            {new Date(litter.dob).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            <Button asChild size="lg" className="w-full">
              <Link href="/contact">Ask About {mom.name}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
