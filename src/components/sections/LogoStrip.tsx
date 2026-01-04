import { cn } from "@/lib/utils";

interface LogoStripProps {
  title?: string;
  logos?: string[]; // Array of strings (names) or URLs in future
}

export function LogoStrip({ title = "Trusted by industry leaders", logos = [] }: LogoStripProps) {
  // Placeholder logos since we don't have assets yet
  const placeholders = ["Company A", "Global Tech", "Nordic Systems", "Thai Innovations", "Future Corp"];
  const displayLogos = logos.length > 0 ? logos : placeholders;

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {title && <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">{title}</p>}
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {displayLogos.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-display font-bold text-gray-400 hover:text-primary transition-colors">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
