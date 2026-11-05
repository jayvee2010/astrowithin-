import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToolsIndexPage, ToolCalculatorPage } from './pages/ToolsPages';
import {
  SignsPage,
  NakshatrasPage,
  HousesPage,
  PlanetsPage,
  TransitsPage,
  YogasPage,
} from './pages/AstrologyPages';
import { ZodiacSignDetailPage } from './pages/ZodiacSignDetailPage';
import {
  ExpertsDirectoryPage,
  ExpertDetailPage,
  StaticContentPage,
} from './pages/CompanyPages';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* 1. Main Home Landing Page */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Tools Routes */}
      <Route path="/tools" element={<ToolsIndexPage />} />
      <Route
        path="/tools/marriage-prediction"
        element={
          <ToolCalculatorPage
            toolName="Marriage Prediction"
            badge="7th House & Vivaha Timing"
            formulaDescription="Determining favorable marriage timing through the dual transit of Jupiter and Saturn, 7th house lord placements, and Vimshottari dasha activations."
          />
        }
      />
      <Route
        path="/tools/kundli-matching"
        element={
          <ToolCalculatorPage
            toolName="Kundli Matching"
            badge="Ashtakoota 36-Point Milan"
            formulaDescription="Calculates compatibility across Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi with Manglik dosha cancellation rules."
          />
        }
      />
      <Route
        path="/tools/premium-kundli"
        element={
          <ToolCalculatorPage
            toolName="Birth Chart (Janam Kundli)"
            badge="Sidereal Lahiri Horoscope"
            formulaDescription="Comprehensive 12-Bhava chart with exact planetary degrees, retrograde states, combustion checks, and Shadbala planetary potency scores."
          />
        }
      />
      <Route
        path="/tools/navamsa"
        element={
          <ToolCalculatorPage
            toolName="Navamsa (D9) Chart"
            badge="9th Divisional Harmonic"
            formulaDescription="Calculates each 3° 20' division of signs to determine true fruit of the natal chart, dharmic destiny, and spouse characteristics."
          />
        }
      />
      <Route
        path="/tools/dasha-calculator"
        element={
          <ToolCalculatorPage
            toolName="Dasha Calculator"
            badge="Vimshottari 120-Year Cycle"
            formulaDescription="Determines your exact balance of Janma Nakshatra dasha at birth, computing Mahadasha, Antardasha, and Pratyantardasha periods."
          />
        }
      />
      <Route
        path="/tools/career-prediction"
        element={
          <ToolCalculatorPage
            toolName="Career Prediction"
            badge="10th Bhava & Dasamsa (D10)"
            formulaDescription="Vocational aptitude analyzed through 10th lord, Amatyakaraka, Saturn transits, and the Dasamsa divisional chart."
          />
        }
      />
      <Route
        path="/tools/rashi-calculator"
        element={
          <ToolCalculatorPage
            toolName="Rashi Calculator"
            badge="Chandra Rashi & Janma Nakshatra"
            formulaDescription="Accurate sidereal Moon sign, birth star, pada (quarter), and governing planetary deity based on precise birth time coordinates."
          />
        }
      />
      <Route
        path="/tools/atmakaraka-darakaraka-calculator"
        element={
          <ToolCalculatorPage
            toolName="Atmakaraka & Darakaraka Calculator"
            badge="Jaimini Chara Karakas"
            formulaDescription="Identifies the highest longitude planet (Atmakaraka, king of the soul) and lowest longitude planet (Darakaraka, spouse signifier)."
          />
        }
      />
      <Route
        path="/tools/panchang"
        element={
          <ToolCalculatorPage
            toolName="Daily Vedic Panchang"
            badge="Five Limbs of Time"
            formulaDescription="Calculates Tithi, Vara, Nakshatra, Yoga, and Karana alongside auspicious Muhurta windows and Rahu Kaal periods."
          />
        }
      />
      <Route
        path="/tools/upapada-lagna"
        element={
          <ToolCalculatorPage
            toolName="Upapada Lagna (UL)"
            badge="12th House Arudha & Matrimony"
            formulaDescription="Calculates the Arudha Pada of the 12th house, determining how your marriage manifests tangibly in society, spouse background, and marital longevity."
          />
        }
      />
      <Route
        path="/tools/sade-sati"
        element={
          <ToolCalculatorPage
            toolName="Sade Sati Calculator"
            badge="7.5-Year Saturn Transit Cycle"
            formulaDescription="Tracks Saturn's 7.5-year transit through the 12th, 1st, and 2nd houses from your natal Moon, decoding your karmic growth and maturation phases."
          />
        }
      />
      <Route
        path="/tools/hora-lagna"
        element={
          <ToolCalculatorPage
            toolName="Hora Lagna (Wealth)"
            badge="Special Wealth & Asset Ascendant"
            formulaDescription="Calculates the primary special ascendant for financial prosperity, assets, liquidity, and investment timing according to classical Parashari formulas."
          />
        }
      />
      <Route path="/tools/muhurat/:muhuratType" element={<ToolCalculatorPage />} />
      <Route path="/tools/:toolId" element={<ToolCalculatorPage />} />

      {/* 3. Astrology Educational Reference Routes */}
      <Route path="/astrology/zodiac-signs" element={<SignsPage />} />
      <Route path="/astrology/zodiac-signs/:signId" element={<ZodiacSignDetailPage />} />
      <Route path="/astrology/nakshatras" element={<NakshatrasPage />} />
      <Route path="/astrology/houses" element={<HousesPage />} />
      <Route path="/astrology/planets" element={<PlanetsPage />} />
      <Route path="/astrology/transits" element={<TransitsPage />} />
      <Route path="/astrology/yogas" element={<YogasPage />} />

      {/* 4. Experts Routes */}
      <Route path="/experts" element={<ExpertsDirectoryPage />} />
      <Route path="/experts/:id" element={<ExpertDetailPage />} />

      {/* 5. Blog & Publications Routes */}
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />

      {/* 6. Company & Legal Content Routes */}
      <Route
        path="/wiki"
        element={
          <StaticContentPage
            title="Jyotish Wiki & Glossary"
            badge="Classical Reference"
            category="Knowledge Repository"
            body="A comprehensive encyclopedia defining Sanskrit terms, planetary dignities (Uccha, Neecha, Moolatrikona), Shadbala, and divisional charts."
          />
        }
      />
      <Route
        path="/contact"
        element={
          <StaticContentPage
            title="Contact Astrowithin"
            badge="Direct Inquiries"
            category="Support & Partnerships"
            body="Reach out to our customer guidance team, technical support, or partnership desk. We respond to all authentic astrological inquiries within 24 hours."
          />
        }
      />
      <Route
        path="/press"
        element={
          <StaticContentPage
            title="Press & Media"
            badge="Press Room"
            category="News & Publications"
            body="Press releases, media kits, and coverage of Astrowithin's mission to bring authentic, classical Parashari astrology to modern seekers globally."
          />
        }
      />
      <Route
        path="/terms"
        element={
          <StaticContentPage
            title="Terms of Service"
            badge="Legal Agreements"
            category="User Terms"
            body="By accessing Astrowithin, you agree to our consultation standards, intellectual property protection, and community code of conduct."
          />
        }
      />
      <Route
        path="/privacy"
        element={
          <StaticContentPage
            title="Privacy Policy"
            badge="Data Protection"
            category="Privacy & Encryption"
            body="Your birth details, birth coordinates, and consultation questions are strictly private, encrypted, and never sold to third-party advertising networks."
          />
        }
      />
      <Route
        path="/refund-policy"
        element={
          <StaticContentPage
            title="Refund Policy"
            badge="Satisfaction Charter"
            category="Billing Policies"
            body="We maintain a transparent satisfaction guarantee. If your consultation experiences technical disruption or does not meet classical standards, our support team reviews refund requests promptly."
          />
        }
      />
      <Route
        path="/download"
        element={
          <StaticContentPage
            title="Download Astrowithin App"
            badge="Mobile Application"
            category="iOS & Android"
            body="Experience live consultations, daily personalized Moon horoscopes, full Kundli generation, and Vimshottari dasha tracking in the palm of your hand."
          />
        }
      />
      </Routes>
    </>
  );
};
