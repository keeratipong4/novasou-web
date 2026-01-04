"use client";

import { Button } from "@/components/ui/Button";
import { HeroSection } from "@/components/sections/HeroSection";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        headline="LET'S CONNECT"
        subheading="Whether you're a candidate looking for your next challenge or a company seeking top talent, we're here to help."
        primaryCtaText="Send a Message"
        primaryCtaLink="#form"
        secondaryCtaText="Visit Us"
        secondaryCtaLink="#office"
      />

      <section id="form" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      id="name" 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                   <input 
                      id="subject" 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="How can we help?"
                    />
                </div>

                <div className="space-y-2">
                   <label htmlFor="role" className="text-sm font-medium text-gray-700">I am a...</label>
                   <select 
                      id="role"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white"
                   >
                      <option>Candidate looking for work</option>
                      <option>Company looking for talent</option>
                      <option>Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                   <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us more about your needs..."
                   />
                </div>

                <Button size="lg" className="w-full md:w-auto px-8">Send Message</Button>
              </form>
            </div>

            {/* Office Info */}
            <div id="office" className="space-y-12">
               <div>
                  <h2 className="text-3xl font-bold text-primary-dark mb-6">Visit Our Office</h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                     We are located in the heart of Bangkok's tech district. Come say hello and have a coffee with us.
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                           <MapPin size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-primary-dark">Novasou HQ</h4>
                           <p className="text-gray-500">
                              123 Tech Tower, Sukhumvit Road<br/>
                              Wattana, Bangkok 10110<br/>
                              Thailand
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                           <Mail size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-primary-dark">Email Us</h4>
                           <a href="mailto:hello@novasou.com" className="text-blue-600 hover:underline">hello@novasou.com</a>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Map Placeholder */}
               <div className="aspect-video w-full bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 relative overflow-hidden group">
                  <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bangkok&zoom=12&size=600x300&sensor=false')] bg-cover bg-center" /> 
                  {/* Note: Above is a fake URL pattern just for structure explanation, actual map needs API key */}
                  <div className="relative z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full font-medium text-gray-500 shadow-sm border border-gray-100">
                     Interactive Map Loading...
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
