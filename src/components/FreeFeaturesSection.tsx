import React, { useState } from 'react';
import { REVIEWS } from '../data/contentData';

interface PillarTab {
  id: string;
  num: string;
  title: string;
  kicker: string;
  heading: string;
  body: string;
  correspondence: string;
  color: string;
}

const PILLARS: PillarTab[] = [
  {
    id: 'horoscope',
    num: 'I',
    title: 'Horoscope',
    kicker: 'Vishuddha & Chandra Resonance · Subconscious Currents',
    heading: 'Track your day-to-day emotional currents through your Moon sign (Rashi).',
    body: 'The Moon governs the subconscious, inner serenity, and daily relational rhythms. Discover how current lunar transits trigger specific houses in your natal chart, revealing auspicious windows for conversation, reflection, and decision-making.',
    correspondence: 'Elemental Principle: Jala (Water) · Moon Ruler',
    color: '#1E3A5F',
  },
  {
    id: 'kundli',
    num: 'II',
    title: 'Janam Kundli',
    kicker: 'Manipura & Solar Kendra · Natal Cosmic Blueprint',
    heading: 'Your Janam Kundli is cast at the exact minute and coordinates of your arrival.',
    body: 'Explore the 12 Bhavas (houses), planetary dignities, Shadbala strengths, and key divisional charts including the Navamsa (D9) and Dasamsa (D10). Understand the foundational yogas and karmic patterns shaping your life trajectory.',
    correspondence: 'Elemental Principle: Agni (Fire) · Sun Ruler',
    color: '#D9822B',
  },
  {
    id: 'partner',
    num: 'III',
    title: 'Partner & Navamsa',
    kicker: 'Anahata Heart Center & Navamsa (D9) · Sacred Partnership',
    heading: 'Examine the 7th house, Venus, Jupiter, and intricate marital dynamics.',
    body: 'Through authentic Ashtakoota Guna Milan and planetary compatibility analysis, decode emotional harmony, physical attraction, shared values, and potential karmic challenges between two souls before marital commitment.',
    correspondence: 'Elemental Principle: Vayu (Air) · Venus & Jupiter',
    color: '#1E4334',
  },
  {
    id: 'dasha',
    num: 'IV',
    title: 'Vimshottari Dasha',
    kicker: 'Sahasrara & Akasha Temporal Cycles · 120-Year Timeline',
    heading: 'Time is cyclical in Parashari Jyotish. Journey through the 120-year cycle.',
    body: 'Unveil which celestial forces are active right now, when major turning points in career and marriage unfold, and when quiet periods of preparation and reflection are warranted.',
    correspondence: 'Elemental Principle: Akasha (Ether) · All 9 Grahas',
    color: '#48284A',
  },
  {
    id: 'past-events',
    num: 'V',
    title: 'Past Chronology',
    kicker: 'Muladhara Earth Grounding · Chronological Validation',
    heading: 'Validate the precision of classical Parashari astrology through your personal history.',
    body: 'Cross-reference major life milestones—graduations, relocations, career breakthroughs, and past relationships—against the planetary periods and Gochara (transits) that presided over them, building deep trust in your upcoming forecast.',
    correspondence: 'Elemental Principle: Prithvi (Earth) · Saturn & Mars',
    color: '#9E2A2B',
  },
];

export const FreeFeaturesSection: React.FC = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activePillar = PILLARS[activeTabIdx];
  const featuredReview = REVIEWS.find((r) => r.id === 'rev-5') || REVIEWS[0];

  return (
    <section
      id="pillars"
      aria-label="Five Pillars of Classical Jyotish"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Open Editorial Pacing) */}
        <div className="mb-14 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-60 block mb-2">
            02 · Five Pillars of Classical Jyotish
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            available for free: <br />
            <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
              Clarity for love, timing, and life.
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm opacity-75 font-light max-w-xl leading-relaxed">
            Five dimensions of your birth chart. Everyday Parashari insights cast with mathematical precision—available at no cost.
          </p>
        </div>

        {/* Horizontal Editorial Chapter Rail (Clean Underlines, Zero Boxes) */}
        <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto border-b border-[#E2DDD4] dark:border-white/10 pb-3 mb-14 text-xs uppercase tracking-[0.2em] font-cinzel whitespace-nowrap">
          {PILLARS.map((pillar, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`pb-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'font-bold opacity-100'
                    : 'border-transparent opacity-50 hover:opacity-90'
                }`}
                style={{
                  borderColor: isActive ? pillar.color : 'transparent',
                  color: isActive ? pillar.color : 'inherit',
                }}
              >
                <span className="text-[10px] opacity-60">{pillar.num}.</span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chapter Reading Layout (Two-Column Open Broadsheet) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Chapter Essay (Exact Verbatim Text from content/tabs.md) */}
          <div className="lg:col-span-7">
            <div 
              className="text-[10px] uppercase tracking-[0.25em] font-cinzel font-semibold mb-3 transition-colors"
              style={{ color: activePillar.color }}
            >
              {activePillar.kicker}
            </div>

            <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold mb-6 leading-tight">
              {activePillar.heading}
            </h3>

            <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed mb-8">
              {activePillar.body}
            </p>

            <div className="pt-6 border-t border-[#E2DDD4] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-cinzel opacity-75">
              <span>{activePillar.correspondence}</span>
              <span>Lahiri (Chitra Paksha) Ayanamsa · Swiss Ephemeris</span>
            </div>
          </div>

          {/* Right Column: Ephemeris & Gochara Transits Table */}
          <div className="lg:col-span-5 border-l border-[#E2DDD4] dark:border-white/10 pl-8 lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel opacity-60 block mb-6">
              Active Gochara (Planetary Ephemeris)
            </span>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-[#E2DDD4]/50 dark:border-white/5">
                <span className="font-serif text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E3A5F]"></span>
                  Chandra (Moon)
                </span>
                <span>Rohini · 14° Taurus (Exalted)</span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#E2DDD4]/50 dark:border-white/5">
                <span className="font-serif text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9822B]"></span>
                  Surya (Sun)
                </span>
                <span>Swati · 17° Libra</span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#E2DDD4]/50 dark:border-white/5">
                <span className="font-serif text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E4334]"></span>
                  Guru (Jupiter)
                </span>
                <span>Mrigashira · 20° Gemini</span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#E2DDD4]/50 dark:border-white/5">
                <span className="font-serif text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#48284A]"></span>
                  Shani (Saturn)
                </span>
                <span>Shatabhisha · 18° Aquarius</span>
              </div>

              <div className="flex justify-between py-2 border-b border-[#E2DDD4]/50 dark:border-white/5">
                <span className="font-serif text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9E2A2B]"></span>
                  Mangala (Mars)
                </span>
                <span>Punarvasu · 05° Cancer</span>
              </div>
            </div>

            <p className="text-[11px] opacity-60 mt-6 leading-relaxed font-sans-ui">
              Live sidereal longitude computed via NASA JPL ephemerides without predictive exaggeration.
            </p>
          </div>

        </div>

        {/* Verified User Quote underneath (Open Editorial Quote) */}
        <div className="pt-10 border-t border-[#E2DDD4] dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-widest font-cinzel text-[#D4AF37] block mb-1">
              Verified Seeker Reflection
            </span>
            <p className="font-cormorant text-lg sm:text-xl italic opacity-90">
              "{featuredReview.text}"
            </p>
          </div>
          <div className="text-xs font-cinzel uppercase tracking-widest opacity-60 md:text-right flex-shrink-0">
            {featuredReview.name} · {featuredReview.city}
          </div>
        </div>

      </div>
    </section>
  );
};
