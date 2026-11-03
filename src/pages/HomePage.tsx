import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { SacredAxisSection } from '../components/SacredAxisSection';
import { ExpertsSection } from '../components/ExpertsSection';
import { FreeFeaturesSection } from '../components/FreeFeaturesSection';
import { FreeToolsSection } from '../components/FreeToolsSection';
import { TrustSection } from '../components/TrustSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF7F2] dark:bg-[#111217] text-[#181614] dark:text-[#F6ECDD] font-sans-ui selection:bg-[#D4AF37]/30 selection:text-[#181614] dark:selection:text-[#F6ECDD] transition-colors duration-300">
      {/* 1. Masthead with Astrolabe & Theme Switcher */}
      <Header />

      {/* 2. Main Page Content (Zero Cards, Zero Container Boxes, Open Broadsheet) */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero - Asymmetric Split with Gold Architectural Kundli */}
        <HeroSection />

        {/* Section 2: Sacred Energy Axis - 7 Chakras & 12 Handcrafted Gold Rashis */}
        <SacredAxisSection />

        {/* Section 3: 01 · Practitioners Roster - Lineage Astrologers */}
        <ExpertsSection />

        {/* Section 4: 02 · Five Pillars of Classical Jyotish (5 Tabs) */}
        <FreeFeaturesSection />

        {/* Section 5: 03 · Classical Horary & Divisional Tools Directory */}
        <FreeToolsSection />

        {/* Section 6: 04 · Institutional Trust & Lineage Accreditations */}
        <TrustSection />

        {/* Section 7: 05 · Seeker Testimonials */}
        <ReviewsSection />

        {/* Section 8: Final Inquiry Path CTA */}
        <FinalCtaSection />
      </main>

      {/* 3. Editorial Footer */}
      <Footer />
    </div>
  );
};
