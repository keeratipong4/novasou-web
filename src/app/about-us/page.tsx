import { ContentBlock } from "@/components/sections/ContentBlock";
import { FeatureGrid, FeatureItem } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

export default function AboutUsPage() {
  const valuesItems: FeatureItem[] = [
    {
      title: "Nordic Clarity",
      description: "Direct, transparent communication and flat structures that empower individuals.",
      icon: Lightbulb,
    },
    {
      title: "Thai Warmth",
      description: "A culture of hospitality, empathy, and strong community bonds.",
      icon: Heart,
    },
    {
      title: "Continuous Growth",
      description: "We believe in long-term potential over short-term gains.",
      icon: GraduationCap,
    },
    {
      title: "Trust First",
      description: "We trust our people to do the right thing, from day one.",
      icon: Users,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="BRIDGING WORLDS"
        subheading="We are on a mission to connect the best of Nordic work culture with the incredible talent of Thailand."
        primaryCtaText="Join Our Team"
        primaryCtaLink="/careers"
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />

      <ContentBlock
        title="Who We Are"
        description="Novasou is more than just an outsourcing company; we are partners in growth. Founded by Nordic tech veterans and Thai business leaders, we understand the nuances of both cultures. We exist to solve the global tech talent shortage while providing Thai developers with world-class opportunities."
        ctaText="Meet The Leaders"
        ctaLink="/teams" // Placeholder link
        imageSrc="/about-image-1.jpg"
      />

      <FeatureGrid
        title="Our Core Values"
        subtitle="The principles that guide every decision we make."
        items={valuesItems}
        columns={4}
      />

      <ContentBlock
        title="Our Vision"
        description="To be the most respected cross-border technology partner in Southeast Asia, known for quality, culture, and positive impact."
        reverse={true}
        imageSrc="/vision-image.jpg"
      />
    </main>
  );
}
