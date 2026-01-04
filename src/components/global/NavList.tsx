"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Teams", href: "/teams" },
  { label: "Life at Novasou", href: "/life-at-novasou" },
  { label: "Growth & Benefits", href: "/growth-benefits" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function NavList() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold text-primary-dark tracking-tighter">
          NOVASOU
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.href ? "text-primary font-bold" : "text-gray-600"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full",
                 pathname === item.href && "w-full"
              )}/>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/careers">
            <Button size="sm">View Open Roles</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col gap-4 animate-accordion-down">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium py-2 px-2 rounded-md hover:bg-gray-50",
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
