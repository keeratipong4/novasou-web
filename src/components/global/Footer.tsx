import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#284BE3] to-[#002CAD] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-3xl font-bold tracking-tighter mb-6 block">
              NOVASOU
            </Link>
            <p className="text-gray-300 text-lg mb-8 max-w-sm font-light">
              Bridging Nordic Clarity with Thai Warmth. Building the future of global teams.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-blue-200">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/teams" className="text-gray-300 hover:text-white transition-colors">Our Teams</Link></li>
              <li><Link href="/life-at-novasou" className="text-gray-300 hover:text-white transition-colors">Culture</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-blue-200">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/growth-benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Socials / Location */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-blue-200">Office</h4>
            <p className="text-gray-300 mb-2">Bangkok, Thailand</p>
            <a href="mailto:hello@novasou.com" className="text-white hover:underline decoration-blue-400 underline-offset-4">
              hello@novasou.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Novasou. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
