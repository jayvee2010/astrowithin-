import React, { useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ExpertsSection } from '../components/ExpertsSection';
import { FreeFeaturesSection } from '../components/FreeFeaturesSection';
import { FreeToolsSection } from '../components/FreeToolsSection';
import { TrustSection } from '../components/TrustSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';
import { ChakraNav } from '../components/ChakraNav';
import { CosmicScene3D } from '../components/CosmicScene3D';
import { CelestialCanvas } from '../components/CelestialCanvas';
import { CustomCursor } from '../components/CustomCursor';

export const HomePage: React.FC = () => {
  const { setActiveChakra } = useTheme();

  useEffect(() => {
    const sectionIds = ['hero', 'experts', 'features', 'tools', 'trust', 'reviews', 'final-cta'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveChakra(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveChakra]);

  return (
    <div className="relative min-h-screen custom-cursor-none">
      {/* 1. Interactive WebGL Three.js Navagraha & Astrolabe Armillary 3D Scene */}
      <CosmicScene3D />

      {/* 2. Fluid Stardust Canvas (Water-parting physics & constellation links) */}
      <CelestialCanvas />

      {/* 3. Handcrafted Astrolabe Brass Pointer Cursor */}
      <CustomCursor />

      {/* 4. Astrological Header */}
      <Header />

      {/* 5. Vertical 7-Chakra Navigation Rail */}
      <ChakraNav />

      {/* 6. Cosmos Travel Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Root Chakra -> Hero */}
        <HeroSection />

        {/* Section 2: Sacral Chakra -> Experts */}
        <ExpertsSection />

        {/* Section 3: Solar Plexus Chakra -> Free Features */}
        <FreeFeaturesSection />

        {/* Section 4: Heart Chakra -> Free Tools */}
        <FreeToolsSection />

        {/* Section 5: Throat Chakra -> Trust and Accreditations */}
        <TrustSection />

        {/* Section 6: Third Eye Chakra -> Reviews */}
        <ReviewsSection />

        {/* Section 7: Crown Chakra -> Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 7. Footer: Returning to Earth */}
      <Footer />
    </div>
  );
};
