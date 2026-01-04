"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
  { label: "Life at Novasou", href: "/life-at-novasou" },
  { label: "Growth & Benefits", href: "/growth-benefits" },
  { label: "About Us", href: "/about-us" },
  { label: "For Companies", href: "/for-companies" },
];

export function NavList() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-transparent bg-gradient-to-r from-gradient-start/90 to-gradient-end/90 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
           {/* Placeholder Icon imitating the N logo */}
           <div className="bg-white text-primary rounded-lg p-1 mb-1">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 2L12 22L22 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
           <span className="font-display text-xl font-bold text-white tracking-widest leading-none">NOVASOU</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white/80 relative group text-white",
                pathname === item.href ? "font-bold" : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button className="bg-white text-primary-dark hover:bg-gray-100 rounded-full px-8 font-bold">Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-linear-to-r from-gradient-start to-gradient-end border-b border-white/10 shadow-lg py-6 px-4 flex flex-col gap-4 animate-accordion-down text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 px-2 rounded-md hover:bg-white/10",
                pathname === item.href && "text-white bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10">
             <Link href="/careers" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-white text-primary-dark hover:bg-gray-100">View Open Roles</Button>
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}
