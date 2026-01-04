import type { Metadata } from "next";
import { Audiowide, Titillium_Web } from "next/font/google";
import { Footer } from "@/components/global/Footer";
import { NavList } from "@/components/global/NavList";
import "./globals.css";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "Novasou - Nordic Clarity Meets Thai Warmth",
  description: "Bridging Worlds, Building Futures. Offshore talent solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${titillium.variable} antialiased`}
      >
        <NavList />
        {children}
        <Footer />
      </body>
    </html>
  );
}
