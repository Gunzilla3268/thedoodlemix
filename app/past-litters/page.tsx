import type { Metadata } from "next";
import Image from "next/image";
import { litters } from "@/src/data/litters";
import { getMomById } from "@/src/data/moms";

export const metadata: Metadata = {
  title: "Past Litters",
  description:
    "Browse past litters from The Doodle Mix. See our beautiful Golden Doodle and Double Doodle puppies from previous litters.",
  openGraph: {
    title: "Past Litters | The Doodle Mix",
    description:
      "Browse past litters from The Doodle Mix.",
  },
};

export default function PastLittersPage() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our History
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Past Litters
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Take a look at some of our previous litters. Every one of these
            puppies has found a wonderful forever home.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {litters.map((litter) => {
            const mom = getMomById(litter.parents.momId);
            return (
              <div key={litter.id}>
                <div className="mb-4 flex flex-col gap-1">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {litter.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {mom && (
                      <span>
                        Mom: <strong className="text-foreground">{mom.name}</strong>{" "}
                        &middot;{" "}
                      </span>
                    )}
                    Stud: <strong className="text-foreground">{litter.parents.studName}</strong>{" "}
                    &middot; Born{" "}
                    {new Date(litter.dob).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {litter.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden rounded-xl"
                    >
                      <Image
                        src={img}
                        alt={`${litter.name} photo ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
