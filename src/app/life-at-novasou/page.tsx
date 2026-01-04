import { ContentBlock } from "@/components/sections/ContentBlock";
import { FeatureGrid, FeatureItem } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { Coffee, Gamepad2, Heart, Music, Sun, Users } from "lucide-react";

export default function LifeAtNovasouPage() {
  const cultureItems: FeatureItem[] = [
    {
      title: "Collaborative Spirit",
      description: "We win together. No driven silos, just cross-functional success.",
      icon: Users,
    },
    {
      title: "Balance & Wellbeing",
      description: "Mental health days, ergonomic workspace, and flexible hours.",
      icon: Sun,
    },
    {
      title: "Fun & Play",
      description: "Board game nights, FIFA tournaments, and regular company outings.",
      icon: Gamepad2,
    },
    {
      title: "Shared Passions",
      description: "From coffee brewing clubs to music jams, find your tribe here.",
      icon: Music,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="LIFE AT NOVASOU"
        subheading="More than just code. It's about property, passion, and people."
        primaryCtaText="See Open Roles"
        primaryCtaLink="/careers"
        secondaryCtaText="Our Values"
        secondaryCtaLink="/about-us"
      />

      <ContentBlock
        title="A Culture of Belonging"
        description="At Novasou, we've carefully curated an environment where everyone feels safe to speak up, share ideas, and be their authentic selves. We celebrate diversity not just in our hiring, but in our daily interactions."
        imageSrc="/culture-1.jpg"
      />

      <FeatureGrid
        title="What Makes Us Tick"
        subtitle="The little things that make a big difference."
        items={cultureItems}
        columns={2}
      />

      <ContentBlock
        title="The Hub"
        description="Our office is designed for collaboration. With open spaces, quiet zones, and a fully stocked kitchen, it's a place you'll actually want to come to. Plus, it's located in the heart of the city with easy access to everything."
        reverse={true}
        imageSrc="/office-interior.jpg"
        ctaText="View Locations"
        ctaLink="/contact"
      />
      
      {/* Gallery Section Placeholder */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-display font-bold mb-12">Captured Moments</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-gray-800 rounded-xl hover:bg-gray-700 transition"></div>
              <div className="aspect-square bg-gray-800 rounded-xl hover:bg-gray-700 transition"></div>
              <div className="aspect-square bg-gray-800 rounded-xl hover:bg-gray-700 transition"></div>
              <div className="aspect-square bg-gray-800 rounded-xl hover:bg-gray-700 transition"></div>
           </div>
        </div>
      </section>
    </main>
  );
}
