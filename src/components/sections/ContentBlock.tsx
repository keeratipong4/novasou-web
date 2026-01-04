import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ContentBlockProps {
  title: string;
  description: string;
  imageSrc?: string; // In real app, this would be an object from Strapi
  imageAlt?: string;
  reverse?: boolean; // If true, image is on the right
  ctaText?: string;
  ctaLink?: string;
}

export function ContentBlock({
  title,
  description,
  imageSrc = "/placeholder.jpg",
  imageAlt = "Image",
  reverse = false,
  ctaText,
  ctaLink,
}: ContentBlockProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn("flex flex-col gap-12 lg:gap-20 items-center", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight">
              {title}
            </h2>
            <div className="bg-blue-600 h-1 w-20 rounded-full" />
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              {description}
            </p>
            {ctaText && ctaLink && (
              <Link href={ctaLink}>
                <Button className="mt-4" size="lg">
                  {ctaText}
                </Button>
              </Link>
            )}
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition hover:skew-y-0 duration-500">
               {/* Using a colored div as placeholder if no image provided, but Next/Image requires src */}
               <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  {/* <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    fill 
                    className="object-cover"
                  /> */}
                  <span className="font-display text-xl">Image Placeholder</span>
               </div>
            </div>
            {/* Decorative background element */}
            <div className={cn(
              "absolute -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter",
              reverse ? "right-10 top-10" : "left-10 bottom-10"
            )} />
          </div>

        </div>
      </div>
    </section>
  );
}
