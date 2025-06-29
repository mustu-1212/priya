import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EditorialSection from "@/components/EditorialSection";
import PolaroidsSection from "@/components/PolaroidsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="font-poppins text-charcoal">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EditorialSection />
      <PolaroidsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <Lightbox />
    </div>
  );
}
