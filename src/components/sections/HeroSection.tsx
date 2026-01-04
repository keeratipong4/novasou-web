import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroSectionProps {
  headline: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  backgroundImageUrl?: string; // Optional for dynamic images later
}

export function HeroSection({
  headline,
  subheading,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary-dark text-white">
      {/* Background Gradient/Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-[#0a1e5c] to-primary pointer-events-none" />
      
      {/* Radial overlay to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#04184C_80%)] pointer-events-none" />

      {/* Grid Pattern (Optional aesthetic) */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
          {headline}
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link href={primaryCtaLink}>
            <Button size="lg" className="w-full sm:w-auto min-w-[200px] shadow-lg shadow-blue-900/50 hover:shadow-blue-900/80 hover:scale-105 transition-all">
              {primaryCtaText}
            </Button>
          </Link>
          <Link href={secondaryCtaLink}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] border-white/20 text-white hover:bg-white/10">
              {secondaryCtaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
