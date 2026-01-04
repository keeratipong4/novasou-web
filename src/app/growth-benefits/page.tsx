import { ContentBlock } from "@/components/sections/ContentBlock";
import { FeatureGrid, FeatureItem } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { BookOpen, Coffee, Coins, Heart, Home, Laptop, Plane, Trophy } from "lucide-react";

export default function GrowthBenefitsPage() {
  const benefits: FeatureItem[] = [
    {
      title: "Flexible Work",
      description: "Remote-first culture with access to modern collaborative office spaces.",
      icon: Home,
    },
    {
      title: "Health & Wellbeing",
      description: "Premium health insurance including dental and mental health support.",
      icon: Heart,
    },
    {
      title: "Learning Budget",
      description: "Annual stipend for courses, conferences, and books to fuel your growth.",
      icon: BookOpen,
    },
    {
      title: "Top-tier Gear",
      description: "Late model MacBooks and noise-cancelling headphones for everyone.",
      icon: Laptop,
    },
    {
      title: "Performance Bonus",
      description: "Competitive salary packages with annual performance-based bonuses.",
      icon: Trophy,
    },
    {
      title: "Provident Fund",
      description: "We contribute to your future savings with a matching provident fund.",
      icon: Coins,
    },
    {
      title: "Global Offsites",
      description: "Annual company retreats to connect with international colleagues.",
      icon: Plane,
    },
    {
      title: "Office Perks",
      description: "Free snacks, barista coffee, and Friday happy hours at the hub.",
      icon: Coffee,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="GROW WITH NOVASOU"
        subheading="We invest in our people because we believe that when you thrive, we all thrive."
        primaryCtaText="See Open Positions"
        primaryCtaLink="/careers"
        secondaryCtaText="Life at Novasou"
        secondaryCtaLink="/life-at-novasou"
      />

      <FeatureGrid
        title="Perks & Benefits"
        subtitle="Designed to support your lifestyle and professional journey."
        items={benefits}
        columns={4}
      />

      <ContentBlock
        title="Novasou Academy"
        description="Growth is in our DNA. Novasou Academy offers internal workshops, mentorship programs from Nordic seniors, and sponsored certification paths. Whether you want to master a new language or step into leadership, we have the roadmap for you."
        ctaText="See Learning Paths"
        ctaLink="#"
        imageSrc="/learning.jpg"
      />
    </main>
  );
}
