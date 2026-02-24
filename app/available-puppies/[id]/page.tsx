import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Palette, Dog, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { puppies, getPuppyById } from "@/src/data/puppies";
import { getLitterById } from "@/src/data/litters";

interface PuppyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return puppies.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PuppyPageProps): Promise<Metadata> {
  const { id } = await params;
  const puppy = getPuppyById(id);
  if (!puppy) return { title: "Puppy Not Found" };

  return {
    title: `${puppy.name} - ${puppy.breedMix}`,
    description: puppy.description,
    openGraph: {
      title: `${puppy.name} | The Doodle Mix`,
      description: puppy.description,
      images: puppy.images.map((img) => ({ url: img })),
    },
  };
}

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  Available: "default",
  Reserved: "secondary",
  Sold: "outline",
};

export default async function PuppyDetailPage({ params }: PuppyPageProps) {
  const { id } = await params;
  const puppy = getPuppyById(id);

  if (!puppy) {
    notFound();
  }

  const litter = getLitterById(puppy.litterId);

  return (
    <section className="bg-background py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Back link */}
        <Link
          href="/available-puppies"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Puppies
        </Link>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Gallery */}
          <div className="flex-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={puppy.images[0]}
                alt={`${puppy.name} - ${puppy.color} ${puppy.breedMix}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute right-4 top-4">
                <Badge variant={statusVariant[puppy.status]} className="text-sm px-3 py-1">
                  {puppy.status}
                </Badge>
              </div>
            </div>
            {puppy.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {puppy.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img}
                      alt={`${puppy.name} photo ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-1 flex-col gap-6 lg:max-w-md">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                {puppy.breedMix}
              </p>
              <h1 className="mt-1 font-serif text-3xl font-bold text-foreground md:text-4xl">
                {puppy.name}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground">
              {puppy.description}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <Dog className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Sex</p>
                  <p className="text-sm font-medium text-foreground">{puppy.sex}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <Palette className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Color</p>
                  <p className="text-sm font-medium text-foreground">{puppy.color}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Born</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(puppy.dob).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                <DollarSign className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Price</p>
                  <p className="text-sm font-medium text-foreground">
                    ${puppy.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Go Home Date */}
            <div className="rounded-lg border border-border bg-secondary p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Go Home Date:</strong>{" "}
                {new Date(puppy.goHomeDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              {litter && (
                <p className="mt-1 text-sm text-muted-foreground">
                  <strong className="text-foreground">Litter:</strong> {litter.name}
                </p>
              )}
            </div>

            {/* CTA */}
            {puppy.status === "Available" && (
              <div className="flex flex-col gap-3">
                <Button asChild size="lg" className="w-full">
                  <Link href="/contact">Contact to Reserve {puppy.name}</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Puppies are first-come, first-served. We accept Cash, Zelle,
                  or Venmo only.
                </p>
              </div>
            )}

            {puppy.status === "Reserved" && (
              <div className="rounded-lg border border-border bg-secondary p-4 text-center">
                <p className="text-sm font-medium text-foreground">
                  {puppy.name} has been reserved.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <Link href="/contact" className="text-primary underline">
                    Contact us
                  </Link>{" "}
                  to ask about upcoming litters.
                </p>
              </div>
            )}

            {puppy.status === "Sold" && (
              <div className="rounded-lg border border-border bg-secondary p-4 text-center">
                <p className="text-sm font-medium text-foreground">
                  {puppy.name} has found their forever home!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <Link href="/contact" className="text-primary underline">
                    Contact us
                  </Link>{" "}
                  to ask about upcoming litters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
