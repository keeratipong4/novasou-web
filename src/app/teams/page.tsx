import { FeatureGrid, FeatureItem } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { Code2, Database, Globe, HeartHandshake, Headphones, LayoutDashboard, LineChart, ShieldCheck } from "lucide-react";

export default function TeamsPage() {
  const allTeams: FeatureItem[] = [
    {
      title: "Engineering",
      description: "Frontend, Backend, DevOps, and QA. The builders of the future.",
      icon: Code2,
    },
    {
      title: "Data & Analytics",
      description: "Turning raw data into actionable insights with ML and AI.",
      icon: Database,
    },
    {
      title: "Product Management",
      description: "Bridging the gap between business needs and technical possibilities.",
      icon: LayoutDashboard,
    },
    {
      title: "Product Design",
      description: "Crafting intuitive and beautiful user experiences.",
      icon: Globe,
    },
    {
      title: "Customer Success",
      description: "Ensuring our clients achieve their goals with our products.",
      icon: HeartHandshake,
    },
    {
      title: "Technical Support",
      description: "Solving complex issues and keeping systems running smoothly.",
      icon: Headphones,
    },
    {
      title: "Marketing & Growth",
      description: "Telling our story and finding new partners.",
      icon: LineChart,
    },
    {
      title: "Cybersecurity",
      description: "Protecting our assets and our clients' data.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="OUR TALENT ECOSYSTEM"
        subheading="Diverse expertise, united by a common goal of excellence."
        primaryCtaText="Join A Team"
        primaryCtaLink="/careers"
        secondaryCtaText="Partner With Us"
        secondaryCtaLink="/contact"
      />

      <FeatureGrid
        title="Explore Our Teams"
        subtitle="Discover where your skills can make the biggest impact."
        items={allTeams}
        columns={4}
      />
    </main>
  );
}
