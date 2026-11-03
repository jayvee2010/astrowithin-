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
  planetName: string;
  planetRashi: string;
  // Deep Vaya interactive tab content
  vayaCard: {
    badge: string;
    headline: string;
    subheadline: string;
    statusBadge: string;
    metrics: { label: string; value: string; detail: string }[];
    insightNotes: string[];
  };
}

const PILLARS: PillarTab[] = [
  {
    id: 'horoscope',
    num: 'I',
    title: 'Horoscope',
    kicker: 'Vishuddha & Chandra Resonance · Subconscious Currents',
    heading: 'Daily emotional currents through your Moon sign',
    body: 'Track your day-to-day emotional currents through your Moon sign (Rashi), not generic sun sign predictions. The Moon governs the subconscious, inner serenity, and daily relational rhythms. Discover how current lunar transits trigger specific houses in your natal chart, revealing auspicious windows for conversation, reflection, and decision-making.',
    correspondence: 'Elemental Principle: Jala (Water) · Moon (Chandra) Ruler',
    color: '#1E3A5F',
    planetName: 'Chandra (Moon)',
    planetRashi: 'Vrishabha (Taurus Exalted)',
    vayaCard: {
      badge: 'Chandra Rashi Gochara',
      headline: 'Rohini Nakshatra · Taurus (Exalted)',
      subheadline: 'Current Lunar Transit through 4th Bhava of Inner Peace',
      statusBadge: 'Peaceful Transit',
      metrics: [
        { label: 'Lunar Phase', value: 'Waxing Gibbous (Shukla Paksha)', detail: '84% Illumination · High Emotional Receptivity' },
        { label: 'Shubh Muhurta', value: '10:14 AM – 12:45 PM', detail: 'Auspicious Window for Pivotal Conversations' },
        { label: 'Vedic Panchang', value: 'Navami Tithi · Vriddhi Yoga', detail: 'Balava Karana · Favorable for Reconciliation' },
      ],
      insightNotes: [
        'Moon transiting exalted in Rohini Nakshatra triggers calm subconscious clarity.',
        'Avoid hasty impulsive commitments after 06:30 PM as lunar aspect shifts toward Mars.',
        'Ideal period for heartfelt relationship dialogues and resolving lingering domestic friction.',
      ],
    },
  },
  {
    id: 'kundli',
    num: 'II',
    title: 'Kundli',
    kicker: 'Manipura & Solar Kendra · Natal Cosmic Blueprint',
    heading: 'Cosmic birth blueprint cast at exact coordinates',
    body: 'Your Janam Kundli is your cosmic birth blueprint cast at the exact minute and coordinates of your arrival on earth. Explore the 12 Bhavas (houses), planetary dignities, Shadbala strengths, and key divisional charts including the Navamsa (D9) and Dasamsa (D10). Understand the foundational yogas and karmic patterns shaping your life trajectory.',
    correspondence: 'Elemental Principle: Agni (Fire) · Sun (Surya) Ruler',
    color: '#D9822B',
    planetName: 'Surya (Sun)',
    planetRashi: 'Simha (Leo Own House)',
    vayaCard: {
      badge: '12 Bhavas & Divisional Harmonics',
      headline: 'Lagna: Tula (Libra) · 7th Bhava: Mesha (Aries)',
      subheadline: 'Sidereal Lahiri Ayanamsa · Exact Degree Ephemeris',
      statusBadge: 'Sidereal Lahiri Verified',
      metrics: [
        { label: 'Primary Yogas', value: 'Gaja Kesari · Dharma Karmadhipati', detail: 'Conjunction of Jupiter in Kendra with Venus' },
        { label: 'Planetary Dignities', value: 'Jupiter Exalted · Sun Digbala (10th)', detail: '92% Shadbala Strength across Cardinal Bhavas' },
        { label: 'Harmonic Charts', value: 'D1 Rashi · D9 Navamsa · D10 Dasamsa', detail: 'Complete Divisional Deconstruction available' },
      ],
      insightNotes: [
        'Ascendant lord Venus placed auspiciously in the 9th house of fortune (Bhagya Bhava).',
        '7th house lord Mars in Pushya Nakshatra indicates a disciplined, spiritually inclined spouse.',
        'Navamsa (D9) ascendant confirms high post-marital wealth and professional growth.',
      ],
    },
  },
  {
    id: 'partner',
    num: 'III',
    title: 'Partner',
    kicker: 'Anahata Heart Center & Navamsa (D9) · Sacred Partnership',
    heading: 'Sacred partnership, Venus & Navamsa (D9) analysis',
    body: 'Examine the 7th house of sacred partnership, Venus, Jupiter, and the intricate dynamics of the Navamsa (D9) chart. Through authentic Ashtakoota Guna Milan and planetary compatibility analysis, decode emotional harmony, physical attraction, shared values, and potential karmic challenges between two souls before marital commitment.',
    correspondence: 'Elemental Principle: Vayu (Air) · Venus (Shukra) & Jupiter',
    color: '#1E4334',
    planetName: 'Shukra (Venus)',
    planetRashi: 'Tula (Libra)',
    vayaCard: {
      badge: 'Ashtakoota 36-Point Guna Milan',
      headline: '31 / 36 Gunas Matched',
      subheadline: 'Exceptional Long-Term Emotional & Marital Harmony',
      statusBadge: 'High Compatibility (Uttama)',
      metrics: [
        { label: 'Nadi Koota', value: '8 / 8 Points (Full Score)', detail: 'Genetic & Health Harmony · Different Nadis' },
        { label: 'Bhakoot Koota', value: '7 / 7 Points (Full Score)', detail: 'Mutual Emotional Compassion & Longevity' },
        { label: 'Gana & Maitri', value: '6 / 6 Gana · 5 / 5 Graha Maitri', detail: 'Shared Temperament & Deep Intellectual Friendship' },
      ],
      insightNotes: [
        'Yoni score of 4/4 confirms magnetic mutual attraction and physiological balance.',
        'Kuja (Manglik) Dosha evaluated: Complete cancellation verified through Jupiter 5th aspect.',
        'Venus-Jupiter synastry indicates shared family values and mutual financial stability.',
      ],
    },
  },
  {
    id: 'dasha',
    num: 'IV',
    title: 'Dasha',
    kicker: 'Sahasrara & Akasha Temporal Cycles · 120-Year Timeline',
    heading: 'Vimshottari Dasha system: 120-year planetary cycles',
    body: 'Time is cyclical in Parashari Jyotish. Journey through the Vimshottari Dasha system—the 120-year planetary cycle of Mahadashas, Antardashas, and Pratyantardashas. Unveil which celestial forces are active right now, when major turning points in career and marriage unfold, and when quiet periods of preparation are warranted.',
    correspondence: 'Elemental Principle: Akasha (Ether) · All 9 Grahas',
    color: '#48284A',
    planetName: 'Guru (Jupiter)',
    planetRashi: 'Dhanu (Sagittarius)',
    vayaCard: {
      badge: 'Vimshottari Planetary Timeline',
      headline: 'Jupiter Mahadasha · Venus Antardasha',
      subheadline: 'Active Cycle: November 2024 – August 2027',
      statusBadge: 'Golden Auspicious Phase',
      metrics: [
        { label: 'Current Sub-Period', value: 'Moon Pratyantardasha', detail: 'Active through late 2025 · Focus on Relationship Milestones' },
        { label: 'Next Turning Point', value: 'Saturn Antardasha begins Oct 2027', detail: 'Major Career Consolidation & Long-Term Assets' },
        { label: 'Marriage Window', value: 'Active Now (Peak: Q1–Q3 2026)', detail: 'Dual Transit of Jupiter & Saturn over 7th House' },
      ],
      insightNotes: [
        'Jupiter Mahadasha acts as the supreme benefic teacher, triggering spiritual and material expansion.',
        'Venus Antardasha in the 7th house creates the definitive life window for marital union.',
        'Preparation phase: Resolve past financial entanglements before the Saturn cycle begins.',
      ],
    },
  },
  {
    id: 'past-events',
    num: 'V',
    title: 'Past events',
    kicker: 'Muladhara Earth Grounding · Chronological Validation',
    heading: 'Cross-reference milestones against historical transits',
    body: 'Validate the precision of classical Parashari astrology through your personal history. Cross-reference major life milestones—graduations, relocations, career breakthroughs, and past relationships—against the planetary periods and Gochara (transits) that presided over them, building trust in your upcoming forecast.',
    correspondence: 'Elemental Principle: Prithvi (Earth) · Saturn (Shani)',
    color: '#9E2A2B',
    planetName: 'Shani (Saturn)',
    planetRashi: 'Makara (Capricorn)',
    vayaCard: {
      badge: 'Empirical Historical Verification',
      headline: 'Milestone Timeline Verified 100%',
      subheadline: 'Cross-Referenced Against Historical Ephemerides',
      statusBadge: 'Classical Proof of Method',
      metrics: [
        { label: '2019 Relocation Abroad', value: 'Rahu-Mercury Antardasha', detail: 'Exact transit over 9th house of foreign travel confirmed' },
        { label: '2021 Career Breakthrough', value: 'Jupiter Gochara over 10th House', detail: 'Promotion coincided with Sun-Jupiter mutual trine' },
        { label: '2023 Significant Partnership', value: 'Venus Transit over Natal 7th', detail: 'Meeting aligned precisely to Moon dasha activation' },
      ],
      insightNotes: [
        'By matching historical life pivots with past dashas, you confirm the exactness of your birth chart.',
        'Removes subjective guesswork: past accuracy guarantees confidence in future timing.',
        'Enables chart rectification to the exact minute for optimal consultation results.',
      ],
    },
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
        
        {/* Section Header: Exact Vaya Headline */}
        <div className="mb-14 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-60 mb-2 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>02 · Essential Tools For Everyday Living</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            available for free: <br />
            <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
              Clarity for love, timing, and life.
            </span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm opacity-75 font-light max-w-xl leading-relaxed">
            Everyday Parashari insights cast with mathematical precision—available at no cost.
          </p>
        </div>

        {/* Horizontal Editorial Chapter Rail (All 5 Vaya Tabs: Horoscope, Kundli, Partner, Dasha, Past events) */}
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
                <span className="text-[10px] opacity-60">{`0${idx + 1}.`}</span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Deep Reading & Interactive Vaya Tab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Chapter Essay (Exact Verbatim Text from content/tabs.md) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div 
                className="text-[10px] uppercase tracking-[0.25em] font-cinzel font-semibold mb-3 transition-colors flex items-center gap-2"
                style={{ color: activePillar.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activePillar.color }}></span>
                <span>{activePillar.kicker}</span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold mb-6 leading-tight">
                {activePillar.heading}
              </h3>

              <p className="text-sm sm:text-base opacity-80 font-light leading-relaxed mb-8">
                {activePillar.body}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E2DDD4] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-cinzel opacity-75">
              <span>{activePillar.correspondence}</span>
              <span>Ruler: {activePillar.planetName} ({activePillar.planetRashi})</span>
            </div>
          </div>

          {/* Right Column: Deep Vaya Live Interactive Tab Card & Metrics Breakdown */}
          <div className="lg:col-span-6 border-l border-[#E2DDD4] dark:border-white/10 pl-6 sm:pl-10">
            
            {/* Top Card Masthead with Status */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD4] dark:border-white/10 mb-6">
              <div>
                <span 
                  className="text-[9px] uppercase tracking-widest font-cinzel font-semibold block mb-1"
                  style={{ color: activePillar.color }}
                >
                  {activePillar.vayaCard.badge}
                </span>
                <h4 className="font-cormorant text-xl font-bold">
                  {activePillar.vayaCard.headline}
                </h4>
                <p className="text-[11px] opacity-60 font-light mt-0.5">
                  {activePillar.vayaCard.subheadline}
                </p>
              </div>
              <span 
                className="text-[10px] uppercase tracking-widest font-cinzel px-2.5 py-1 border font-semibold flex-shrink-0"
                style={{ borderColor: activePillar.color, color: activePillar.color }}
              >
                {activePillar.vayaCard.statusBadge}
              </span>
            </div>

            {/* 3 Detailed Metric Rows */}
            <div className="space-y-4 mb-6">
              {activePillar.vayaCard.metrics.map((metric, mIdx) => (
                <div 
                  key={mIdx}
                  className="py-3 border-b border-[#E2DDD4]/50 dark:border-white/5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                >
                  <div>
                    <span className="text-xs font-cinzel uppercase tracking-wider font-semibold block">
                      {metric.label}
                    </span>
                    <span className="text-[11px] opacity-65 font-light">
                      {metric.detail}
                    </span>
                  </div>
                  <span 
                    className="text-xs font-mono font-bold whitespace-nowrap sm:text-right mt-1 sm:mt-0"
                    style={{ color: activePillar.color }}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* In-Depth Astrological Guidance Notes */}
            <div className="pt-4 border-t border-[#E2DDD4]/60 dark:border-white/10">
              <span className="text-[9px] uppercase tracking-[0.2em] font-cinzel opacity-60 block mb-2">
                Classical Interpretation Notes
              </span>
              <ul className="space-y-1.5 text-xs opacity-75 font-light">
                {activePillar.vayaCard.insightNotes.map((note, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold mt-0.5">·</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Featured Testimonial Beneath (Exact Vaya Review: Meera Patel) */}
        <div className="pt-10 border-t border-[#E2DDD4] dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-widest font-cinzel text-[#D4AF37] block mb-1">
              Verified Seeker Reflection on Free Features
            </span>
            <p className="font-cormorant text-lg sm:text-xl italic opacity-90 leading-relaxed">
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
