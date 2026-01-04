import { HeroSection } from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { mockJobs } from "@/lib/mock-jobs";
import { ArrowRight, MapPin, Search } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="JOIN THE REVOLUTION"
        subheading="Be part of a team that's redefining what it means to work globally."
        primaryCtaText="View All Roles"
        primaryCtaLink="#roles"
        secondaryCtaText="Life at Novasou"
        secondaryCtaLink="/life-at-novasou"
      />

      <section id="roles" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
               <h2 className="text-3xl font-bold text-primary-dark">Open Positions</h2>
               <p className="text-gray-500 mt-2">We are currently looking for talent in these areas.</p>
            </div>
            {/* Simple Search Placeholder */}
            <div className="relative mt-4 md:mt-0 w-full md:w-80">
               <input 
                 type="text" 
                 placeholder="Search roles..." 
                 className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
               />
               <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
            </div>
          </div>

          <div className="grid gap-6">
            {mockJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">{job.department}</span>
                       <span className="text-gray-400 text-xs flex items-center gap-1"><MapPin size={12}/> {job.location}</span>
                    </div>
                    <Link href={`/careers/${job.slug}`}>
                      <h3 className="text-xl font-bold text-primary-dark hover:text-primary transition-colors cursor-pointer">
                        {job.title}
                      </h3>
                    </Link>
                    <div className="flex gap-2 mt-3">
                       {job.tags.map(tag => (
                          <span key={tag} className="text-xs border border-gray-200 px-2 py-1 rounded text-gray-500">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link href={`/careers/${job.slug}`}>
                      <Button variant="outline" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center bg-blue-50/50 p-12 rounded-3xl">
             <h3 className="text-2xl font-bold text-primary-dark mb-4">Don't see a fit?</h3>
             <p className="text-gray-600 mb-8 max-w-lg mx-auto">
               We're always looking for exceptional talent. Join our talent community to be the first to know about new opportunities.
             </p>
             <Link href="/contact">
                <Button>Join Talent Community</Button>
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
