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
      className="px-6 sm:px-12 py-14 sm:py-18 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Exact Vaya Headline (Option 1 Clean Consumer Tech) */}
        <div className="mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2.5 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>02 · Essential Tools For Everyday Living</span>
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
            available for free: <br />
            <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
              Clarity for love, timing, and life.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5650] dark:text-[#A09D94] font-normal max-w-xl leading-relaxed">
            Track your emotional currents, investigate your natal blueprint, and verify life milestones directly.
          </p>
        </div>

        {/* Horizontal Tab Rail (All 5 Vaya Tabs: Horoscope, Kundli, Partner, Dasha, Past events) */}
        <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto border-b-2 border-[#EAE6DF] dark:border-white/10 pb-0 mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-[0.15em] font-sans font-bold whitespace-nowrap">
          {PILLARS.map((pillar, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`py-3 px-4 sm:px-5 border-b-[3px] transition-all cursor-pointer flex items-center gap-2 -mb-[2px] ${
                  isActive
                    ? 'border-[#B88E3E] text-[#181716] dark:text-white font-extrabold'
                    : 'border-transparent text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                <span className="text-xs opacity-60 font-mono">{`0${idx + 1}.`}</span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Deep Reading & Interactive Vaya Tab Showcase - items-start removes top empty void */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
          
          {/* Left Column: Chapter Essay (Exact Verbatim Text from content/tabs.md) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B88E3E]"></span>
                <span>{activePillar.kicker}</span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {activePillar.heading}
              </h3>

              <p className="text-base sm:text-lg text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6">
                {activePillar.body}
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans uppercase tracking-wider font-semibold text-[#827E76]">
              <span>{activePillar.correspondence}</span>
              <span>Ruler: {activePillar.planetName}</span>
            </div>
          </div>

          {/* Right Column: Clean White Software Card (Option 1 Vaya Consumer Tech Card) */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-[#1A1C20] rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col gap-5">
              
              {/* Card Header with Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF] dark:border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                    {activePillar.vayaCard.badge}
                  </span>
                  <h4 className="font-cormorant text-xl sm:text-2xl font-bold">
                    {activePillar.vayaCard.headline}
                  </h4>
                  <p className="text-xs text-[#827E76] font-normal mt-0.5">
                    {activePillar.vayaCard.subheadline}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-sans font-bold px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/30 flex-shrink-0">
                  {activePillar.vayaCard.statusBadge}
                </span>
              </div>

              {/* 3 Detailed Metric Rows */}
              <div className="space-y-2.5">
                {activePillar.vayaCard.metrics.map((metric, mIdx) => (
                  <div 
                    key={mIdx}
                    className="p-3.5 rounded-2xl bg-neutral-50/70 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                  >
                    <div>
                      <span className="text-xs font-sans uppercase tracking-wider font-bold block">
                        {metric.label}
                      </span>
                      <span className="text-xs text-[#827E76] font-normal">
                        {metric.detail}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold whitespace-nowrap text-[#B88E3E] dark:text-[#E5B869] sm:text-right">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* In-Depth Astrological Guidance Notes */}
              <div className="pt-3.5 border-t border-[#EAE6DF] dark:border-white/10">
                <span className="text-[11px] uppercase tracking-wider font-sans font-bold text-[#827E76] block mb-2">
                  Classical Interpretation Notes
                </span>
                <ul className="space-y-1 text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                  {activePillar.vayaCard.insightNotes.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-2">
                      <span className="text-[#B88E3E] font-bold mt-0.5">·</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

        {/* Featured Testimonial Beneath (Exact Vaya Review: Meera Patel) */}
        <div className="p-6 sm:p-7 bg-white dark:bg-[#1A1C20] rounded-3xl border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
              Verified Seeker Reflection on Free Features
            </span>
            <p className="font-cormorant text-xl sm:text-2xl italic leading-relaxed">
              "{featuredReview.text}"
            </p>
          </div>
          <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#827E76] md:text-right flex-shrink-0">
            {featuredReview.name} · {featuredReview.city}
          </div>
        </div>

      </div>
    </section>
  );
};
