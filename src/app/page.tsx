import { ContentBlock } from "@/components/sections/ContentBlock";
import { FeatureGrid, FeatureItem } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe, GraduationCap, Heart, Rocket, Smile, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const whyNovasouItems: FeatureItem[] = [
    {
      title: "Culture & Community",
      description: "We build more than just teams; we build communities rooted in trust and collaboration.",
      icon: Users,
    },
    {
      title: "Learning & Growth",
      description: "Continuous development through our Novasou Academy and mentorship programs.",
      icon: GraduationCap,
    },
    {
      title: "Impact & Innovation",
      description: "Work on global products that matter, using cutting-edge technologies.",
      icon: Rocket,
    },
    {
      title: "Flexibility & Balance",
      description: "Hybrid work models that respect your life outside of code.",
      icon: Heart,
    },
  ];

  const teamsItems: FeatureItem[] = [
    {
      title: "Engineering",
      description: "Frontend, Backend, and Full-stack developers building scalable solutions.",
      icon: Globe,
    },
    {
      title: "Data & AI",
      description: "Data Scientists and AI Engineers pushing the boundaries of intelligence.",
      icon: Rocket,
    },
    {
      title: "Product",
      description: "Product Managers and Owners defining the future of our platforms.",
      icon: Users,
    },
    {
      title: "Customer Success",
      description: "Dedicated teams ensuring client satisfaction and growth.",
      icon: Smile,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="WHERE NORDIC CLARITY MEETS THAI WARMTH"
        subheading="We build high-performing offshore tech teams that feel like they're right next door."
        primaryCtaText="View Open Roles"
        primaryCtaLink="/careers"
        secondaryCtaText="Join Talent Community"
        secondaryCtaLink="/contact"
      />

      <LogoStrip title="Trusted by Global Innovators" />

      <FeatureGrid
        title="Why Novasou?"
        subtitle="Bridging the gap between talent and opportunity with a human-centric approach."
        items={whyNovasouItems}
        columns={2}
      />

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">Teams at a Glance</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">Find where you belong in our diverse ecosystem.</p>
        </div>
        <div className="container mx-auto px-4">
           {/* Reusing FeatureGrid logic but custom wrapper for layout if needed, for now standard FeatureGrid is fine but let's manual map for variety */}
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamsItems.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all text-left group">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.icon && <item.icon size={24} />}
                   </div>
                   <h3 className="font-display font-bold text-xl mb-3 text-primary-dark">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
           </div>
           <div className="mt-12 text-center">
             <Link href="/teams">
               <Button variant="outline">Explore All Teams <ArrowRight className="ml-2 h-4 w-4" /></Button>
             </Link>
           </div>
        </div>
      </section>

      <ContentBlock
        title="Life at Novasou"
        description="From Friday socials to knowledge sharing sessions, life here is vibrant, inclusive, and fun. We believe that happy people build better software."
        ctaText="Explore Our Culture"
        ctaLink="/life-at-novasou"
        reverse={true} // Image on right
        imageSrc="/office-life.jpg"
      />

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
             <h2 className="text-3xl font-display font-bold mb-8">Hear From Our Team</h2>
             <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed">
               "Novasou isn't just a workplace; it's a place where I'm challenged to grow every day while being supported by amazing mentors."
             </blockquote>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" /> {/* Avatar Placeholder */}
             <div className="font-bold text-lg">Keerati Pong</div>
             <div className="text-blue-200">Senior Frontend Developer</div>
           </div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-dark mb-6">
            Ready to make your mark?
          </h2>
          <p className="text-xl text-gray-500 mb-10 font-light">
            Join a team that values your craft and your wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/careers"><Button size="lg" className="px-10">View Open Roles</Button></Link>
            <Link href="/contact"><Button variant="outline" size="lg">Join Talent Community</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
