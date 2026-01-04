import { Button } from "@/components/ui/Button";
import { mockJobs } from "@/lib/mock-jobs";
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: {
    slug: string;
  };
}

// In Next.js 15+, params is an async access in some cases or just props. 
// Standard Server Component:
export default async function JobPage({ params }: JobPageProps) {
  // Mock fetching data
  const job = mockJobs.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/careers" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
           <ArrowLeft className="mr-2 h-4 w-4" /> Back to Careers
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
           {/* Header */}
           <div className="bg-primary-dark p-8 md:p-12 text-white">
              <div className="flex gap-3 mb-4">
                 <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">{job.department}</span>
                 <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">{job.type}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">{job.title}</h1>
              <div className="flex items-center gap-2 text-gray-300">
                 <MapPin className="h-5 w-5" /> {job.location}
              </div>
           </div>

           {/* Content */}
           <div className="p-8 md:p-12 space-y-12">
              <section>
                 <h2 className="text-2xl font-bold text-primary-dark mb-4">About the Role</h2>
                 <p className="text-gray-600 leading-relaxed text-lg font-light">
                   As a {job.title} at Novasou, you will be working directly with our Nordic partners to build scalable, high-impact solutions. You are not just a coder; you are a problem solver and a key part of the product lifecycle.
                 </p>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-primary-dark mb-4">What You'll Do</h2>
                 <ul className="space-y-3">
                    {["Collaborate with cross-functional teams to define, design, and ship new features.", 
                      "Write clean, maintainable, and efficient code.",
                      "Participate in code reviews and advocate for best practices.",
                      "Troubleshoot and debug applications to optimize performance."].map((item, i) => (
                       <li key={i} className="flex gap-3 text-gray-600">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                          <span>{item}</span>
                       </li>
                    ))}
                 </ul>
              </section>

              <section>
                 <h2 className="text-2xl font-bold text-primary-dark mb-4">What We're Looking For</h2>
                 <ul className="space-y-3">
                    {job.tags.map((tag, i) => (
                       <li key={i} className="flex gap-3 text-gray-600">
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                          <span>Experience with {tag} and related ecosystems.</span>
                       </li>
                    ))}
                    <li className="flex gap-3 text-gray-600">
                       <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                       <span>Strong English communication skills (written and spoken).</span>
                    </li>
                 </ul>
              </section>

              <hr className="border-gray-100" />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                 <div>
                    <h3 className="text-xl font-bold text-primary-dark">Interested?</h3>
                    <p className="text-gray-500">Take the next step in your career.</p>
                 </div>
                 <Button size="lg" className="px-8 shadow-blue-500/20 shadow-lg">Apply for this Job</Button>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
