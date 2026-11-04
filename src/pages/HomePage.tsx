import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ExpertsSection } from '../components/ExpertsSection';
import { FreeFeaturesSection } from '../components/FreeFeaturesSection';
import { FreeToolsSection } from '../components/FreeToolsSection';
import { TrustSection } from '../components/TrustSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-[#181716] dark:text-[#F4F1EA] font-sans selection:bg-[#B88E3E]/20 selection:text-[#181716] dark:selection:text-[#F4F1EA] transition-colors duration-300">
      {/* 1. Header with App Download Popover & Theme Switcher */}
      <Header />

      {/* 2. Main Page Content - Option 1 Authentic Vaya Consumer Tech Architecture */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section: Consumer Tech Split with Live Smartphone Kundli Mockup & Dual Stats */}
        <HeroSection />

        {/* Section 01: Practitioners Roster - Verified Senior Jyotish Scholars (3-Column White Cards) */}
        <ExpertsSection />

        {/* Section 02: Five Pillars of Classical Jyotish (5 Interactive Tabs: Horoscope, Kundli, Partner, Dasha, Past events) */}
        <FreeFeaturesSection />

        {/* Section 03: Classical Horary & Divisional Tools Directory (7-Tool Bento Grid) */}
        <FreeToolsSection />

        {/* Section 04: Institutional Trust & Lineage Accreditations (ICAS, BVB, AIFAS, ASI) */}
        <TrustSection />

        {/* Section 05: Seeker Testimonials (3-Column Editorial Quotes) */}
        <ReviewsSection />

        {/* Section 06: Final Inquiry Path CTA ("When will I get married?" / "Is this the right person?") */}
        <FinalCtaSection />
      </main>

      {/* 3. Global Footer with 4-Column Directory */}
      <Footer />
    </div>
  );
};
