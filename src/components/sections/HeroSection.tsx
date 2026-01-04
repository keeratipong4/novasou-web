import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface HeroSectionProps {
  headline?: string;
  subheading?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImageUrl?: string; 
}

export function HeroSection({
  headline = "BUILD GLOBAL PRODUCTS - WORK FROM THAILAND",
  subheading = "For Thai & international tech talent",
  primaryCtaText = "View Open Roles",
  primaryCtaLink = "/careers",
  secondaryCtaText = "For Companies",
  secondaryCtaLink = "/contact",
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-gradient-to-br from-[#284BE3] to-[#002CAD] text-white">
      
      {/* Background Dotted Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 pointer-events-none" />

      {/* Grid Layout */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6">
          <span className="text-lg md:text-xl font-medium text-blue-100 tracking-wide">
             {subheading}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] uppercase">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-xl leading-relaxed">
            Novasou connects global companies with talented people who wants to build meaningful careers in Thailand.
            <br/><br/>
            Whether you already call Thailand your home or you're moving from abroad, we help you connect with global product teams in a Nordic-Thai work culture.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href={primaryCtaLink}>
              <Button size="lg" className="bg-white text-primary-dark hover:bg-gray-100 rounded-full px-8 text-base font-bold min-w-[180px]">
                {primaryCtaText}
              </Button>
            </Link>
            <Link href={secondaryCtaLink}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-8 text-base font-bold min-w-[180px]">
                {secondaryCtaText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative w-full h-full min-h-[400px] flex justify-center lg:justify-end items-center">
           <div className="relative w-full max-w-lg aspect-[4/5] rounded-[3rem] rounded-tl-none rounded-br-none overflow-hidden border-4 border-white/10 shadow-2xl">
              {/* Using a placeholder image or the one from previous context if available. 
                  Since I don't have the exact image file, I will use a high quality office abstract or verify if I can use a placeholder service. 
                  For now, replacing with a generic work image placeholder. */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Woman working at computer" 
                className="object-cover w-full h-full"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl" />
           </div>
        </div>

      </div>
    </section>
  );
}
