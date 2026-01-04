"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm py-0" 
        : "bg-transparent border-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group">
           {/* Placeholder Icon imitating the N logo */}
           <div className={cn(
             "rounded-lg p-1 mb-1 transition-colors",
             isScrolled ? "bg-primary text-white" : "bg-white text-primary"
           )}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 2L12 22L22 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
           <span className={cn(
             "font-display text-xl font-bold tracking-widest leading-none transition-colors",
             isScrolled ? "text-primary-dark" : "text-white"
           )}>NOVASOU</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                isScrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white",
                pathname === item.href && (isScrolled ? "font-bold text-primary" : "font-bold text-white")
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button className={cn(
              "rounded-full px-8 font-bold transition-all",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary-dark" 
                : "bg-white text-primary-dark hover:bg-gray-100"
            )}>Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 transition-colors", isScrolled ? "text-gray-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-accordion-down">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 px-2 rounded-md hover:bg-gray-50 text-gray-700",
                pathname === item.href && "text-primary bg-blue-50/50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
             <Link href="/careers" onClick={() => setIsOpen(false)}>
                <Button className="w-full">View Open Roles</Button>
             </Link>
          </div>
        </div>
      )}
    </header>
  );
}
