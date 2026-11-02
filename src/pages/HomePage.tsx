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
    <div className="relative min-h-screen bg-[#141210] dark:bg-[#141210] text-[#F7F4EE] transition-colors duration-500 font-sans selection:bg-[#E07A2E]/30 selection:text-[#F4A883]">
      {/* 1. Clean Sticky Editorial Header */}
      <Header />

      {/* 2. Main Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero - Editorial Split with App Mockup */}
        <HeroSection />

        {/* Section 2: Experts - Warm Portrait Cards with Scholarly Lineage */}
        <ExpertsSection />

        {/* Section 3: Free Features - Interactive App Feature Showcase */}
        <FreeFeaturesSection />

        {/* Section 4: Free Tools - Clean Modern Bento Grid */}
        <FreeToolsSection />

        {/* Section 5: Trust & Accreditations - Dignified Institutional Band */}
        <TrustSection />

        {/* Section 6: Reviews - Editorial Quote Testimonials */}
        <ReviewsSection />

        {/* Section 7: Final CTA - Grounded Closing Consultation Action */}
        <FinalCtaSection />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};
