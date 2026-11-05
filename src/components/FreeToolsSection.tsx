import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ToolEngine {
  id: string;
  num: string;
  name: string;
  sanskrit: string;
  tag: string;
  route: string;
  action: string;
  degreeMark: string;
  inspector: {
    title: string;
    statusBadge: string;
    headline: string;
    description: string;
    metrics: { label: string; value: string; detail: string }[];
    insightNotes: string[];
  };
}

export const FreeToolsSection: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string>('compatibility');

  // Interactive States within the Inspector Widgets
  const [compatPreset, setCompatPreset] = useState<number>(0);
  const [marriageYear, setMarriageYear] = useState<number>(2026);
  const [activeKendraHouse, setActiveKendraHouse] = useState<number>(1);
  const [harmonicTab, setHarmonicTab] = useState<'d1' | 'd9'>('d9');
  const [activeDashaGraha, setActiveDashaGraha] = useState<string>('Jupiter');
  const [careerSector, setCareerSector] = useState<'leadership' | 'advisory' | 'technology'>('leadership');
  const [lunarPhase, setLunarPhase] = useState<'shukla' | 'krishna'>('shukla');

  const tools: ToolEngine[] = [
    {
      id: 'marriage',
      num: '01',
      name: 'Marriage',
      sanskrit: 'विवाह विचार',
      tag: '7th House Lord & Dasha Timing',
      route: '/tools/marriage-prediction',
      action: 'Calculate Marriage Timing →',
      degreeMark: '15° 30\'',
      inspector: {
        title: '7th House Lord & Dasha Timing Engine',
        statusBadge: 'Karmic Union Alignment',
        headline: 'Matrimonial Timing & Upapada Lagna Alignment',
        description: 'Calculates the exact temporal window for matrimonial commitment by examining the dual transit of Jupiter and Saturn over your natal 7th house and Upapada Lagna.',
        metrics: [
          { label: '7th Bhava Lord', value: 'Venus in 9th (Bhagya)', detail: 'Auspicious trine placement indicates lasting devotion' },
          { label: 'Vimshottari Dasha', value: 'Jupiter-Venus Phase', detail: 'Primary 120-year cycle favorable for sacred union' },
          { label: 'Transit Aspect', value: 'Jupiter 5th Trine Aspect', detail: 'Benefic protection over natal 7th house cusp' },
        ],
        insightNotes: [
          'Evaluates exact planetary longitudes to distinguish between fleeting infatuation and destined marriage.',
          'Cross-references the Upapada Lagna (UL) in the Navamsa to verify spouse physical and spiritual attributes.',
          'Identifies protective benefic counter-aspects that cancel temporal Kuja (Manglik) tensions.',
        ],
      },
    },
    {
      id: 'compatibility',
      num: '02',
      name: 'Compatibility',
      sanskrit: 'गुण मिलान',
      tag: '36-Point Ashtakoota Milan',
      route: '/tools/kundli-matching',
      action: 'Calculate Compatibility Milan →',
      degreeMark: '42° 18\'',
      inspector: {
        title: 'Ashtakoota 36-Point Milan Engine',
        statusBadge: 'Uttama (High Harmony)',
        headline: 'Comprehensive 8-Koota Synastry Analysis',
        description: 'Evaluates the 8 foundational psychological and physiological compatibility layers between partners using sidereal Moon nakshatra coordinates.',
        metrics: [
          { label: 'Nadi Koota', value: '8 / 8 Points', detail: 'Genetic & physiological harmony (Different Nadis)' },
          { label: 'Bhakoot Koota', value: '7 / 7 Points', detail: 'Mutual emotional compassion and financial longevity' },
          { label: 'Graha Maitri', value: '5 / 5 Points', detail: 'Deep planetary friendship and shared worldview' },
        ],
        insightNotes: [
          'Scores firmly in the highest tier for enduring marital success and mutual understanding.',
          'Kuja (Manglik) Dosha verified: Neutralized through Jupiter fifth mutual trine aspect.',
          'Yoni score confirms magnetic mutual attraction and physiological balance.',
        ],
      },
    },
    {
      id: 'birth-chart',
      num: '03',
      name: 'Birth chart',
      sanskrit: 'जन्म कुण्डली',
      tag: '12-Bhava Natal Horoscope',
      route: '/tools/premium-kundli',
      action: 'Generate Natal Birth Chart →',
      degreeMark: '68° 45\'',
      inspector: {
        title: '12-Bhava Natal Horoscope Engine',
        statusBadge: 'Sidereal Lahiri Verified',
        headline: 'Exact Degree Natal Planetary Longitudes',
        description: 'Casts the fundamental North Indian diamond Janam Kundli blueprint at the exact minute and geographical coordinates of birth using high-precision ephemerides.',
        metrics: [
          { label: 'Ayanamsa Method', value: 'Sidereal Lahiri', detail: 'Chitra Paksha Ayanamsa calibrated to 24° 11\' 42"' },
          { label: 'Kendra Dignities', value: 'Sun & Jupiter 10th', detail: 'Digbala directional power across professional Bhavas' },
          { label: 'Primary Yoga', value: 'Gaja Kesari Yoga', detail: 'Mutual Kendra angles between Moon and Jupiter' },
        ],
        insightNotes: [
          'Calculates house cusps using authentic equal-sign Parashari principles.',
          'Tabulates exact Shadbala strengths (Sthana, Dig, Kala, Chesta, Naisargika, Drik).',
          'Forms the master baseline for all subsequent divisional and dasha calculations.',
        ],
      },
    },
    {
      id: 'd9-chart',
      num: '04',
      name: 'D9 chart',
      sanskrit: 'नवांश चक्र',
      tag: 'Divisional Navamsa Harmonic',
      route: '/tools/navamsa',
      action: 'Inspect Navamsa Harmonic →',
      degreeMark: '95° 12\'',
      inspector: {
        title: 'Divisional Navamsa (D9) Engine',
        statusBadge: 'Spouse & Inner Destiny',
        headline: 'The 9th Divisional Harmonic of the Natal Rashi',
        description: 'The Navamsa decomposes each 30° zodiac sign into 9 micro-divisions of 3° 20\', revealing the hidden destiny of the second half of life and matrimonial fortune.',
        metrics: [
          { label: 'D9 Lagna', value: 'Vrishabha (Taurus)', detail: 'Ruled by Venus, denoting steady post-marital prosperity' },
          { label: 'Dara Karaka', value: 'Mercury in 5th D9', detail: 'Intellectual, artistic spouse with high social standing' },
          { label: 'Vargottama Planets', value: 'Moon & Venus', detail: 'Planets occupying identical signs in both D1 and D9' },
        ],
        insightNotes: [
          'Crucial chart for assessing true marriage compatibility and spouse personality.',
          'Reveals whether latent natal yogas will produce physical fruit after age 28–32.',
          'Essential for verifying birth time accuracy through divisional sub-period events.',
        ],
      },
    },
    {
      id: 'dasha',
      num: '05',
      name: 'Dasha',
      sanskrit: 'दशा साधन',
      tag: '120-Year Vimshottari Cycle',
      route: '/tools/dasha-calculator',
      action: 'Explore Vimshottari Dasha →',
      degreeMark: '124° 50\'',
      inspector: {
        title: '120-Year Vimshottari Cycle Engine',
        statusBadge: 'Karmic Timeline Active',
        headline: 'Chronological Unfolding of Planetary Periods',
        description: 'Calculates the 120-year astronomical Vimshottari Dasha sequence from the Moon\'s exact nakshatra degree at birth down to Antardasha and Pratyantardasha intervals.',
        metrics: [
          { label: 'Active Mahadasha', value: 'Jupiter (16 Years)', detail: 'Period of intellectual expansion, spiritual growth, and assets' },
          { label: 'Sub-Period (Antar)', value: 'Venus (Nov 2024–Aug 2027)', detail: 'Golden window for matrimony, partnerships, and creative fruition' },
          { label: 'Next Major Shift', value: 'Saturn Phase (2027)', detail: 'Long-term structural consolidation and career leadership' },
        ],
        insightNotes: [
          'Precise chronological dates calculated down to the day and hour.',
          'Identifies the presiding planetary ruler influencing current life decisions.',
          'Distinguishes between favorable growth cycles and quiet consolidation periods.',
        ],
      },
    },
    {
      id: 'career',
      num: '06',
      name: 'Career',
      sanskrit: 'कर्म भाव',
      tag: '10th House & Dasamsa (D10)',
      route: '/tools/career-prediction',
      action: 'Examine Career Engine →',
      degreeMark: '152° 08\'',
      inspector: {
        title: '10th House & Dasamsa (D10) Engine',
        statusBadge: 'Vocational Strength',
        headline: 'Midheaven, 10th Bhava & Professional Trajectory',
        description: 'Analyzes the 10th house of worldly profession, Amatya Karaka, and the D10 Dasamsa harmonic to pinpoint career breakthroughs and vocational calling.',
        metrics: [
          { label: '10th Bhava Lord', value: 'Sun in 10th (Digbala)', detail: 'High executive status, public authority, and autonomy' },
          { label: 'Dasamsa (D10) Lagna', value: 'Simha (Leo Own House)', detail: 'Confirms career in technology, leadership, or advisory' },
          { label: 'Amatya Karaka', value: 'Mercury in Gemini', detail: 'Analytical acumen, mathematical reasoning, and strategy' },
        ],
        insightNotes: [
          'Pinpoints optimal sectors: technology, executive leadership, or advisory.',
          'Maps career promotions to favorable Gochara (transit) cycles.',
          'Decodes the Dasamsa chart to evaluate sustained public reputation and legacy.',
        ],
      },
    },
    {
      id: 'rashi',
      num: '07',
      name: 'Rashi',
      sanskrit: 'चन्द्र राशि',
      tag: 'Sidereal Moon & Janma Nakshatra',
      route: '/tools/rashi-calculator',
      action: 'Calculate Moon Rashi →',
      degreeMark: '178° 42\'',
      inspector: {
        title: 'Sidereal Moon & Janma Nakshatra Engine',
        statusBadge: 'Subconscious Identity',
        headline: 'True Lunar Sign, Nakshatra Pada & Daily Rhythms',
        description: 'Calculates your true sidereal Moon sign (Rashi) and birth star (Janma Nakshatra), unlocking your emotional temperament, instinctual habits, and daily transit rhythms.',
        metrics: [
          { label: 'Sidereal Moon', value: 'Taurus 14° 22\'', detail: 'Moon placed in exaltation, conferring calm mental fortitude' },
          { label: 'Janma Nakshatra', value: 'Rohini (4th Pada)', detail: 'Ruled by Prajapati, fostering creative and aesthetic refinement' },
          { label: 'Lunar Day (Tithi)', value: 'Shukla Paksha Navami', detail: 'Active phase of emotional expansion and clarity' },
        ],
        insightNotes: [
          'Calculates true sidereal coordinates, adjusting for the 24° precession of equinoxes.',
          'Reveals subconscious emotional needs that drive relationship decisions.',
          'Forms the calculation foundation for daily personal muhurtas and transit forecasts.',
        ],
      },
    },
  ];

  const activeIndex = tools.findIndex((t) => t.id === activeToolId);
  const activeTool = tools[activeIndex >= 0 ? activeIndex : 1];

  // Presets for Compatibility Interactive Simulator
  const compatPresets = [
    {
      label: 'Taurus + Virgo',
      names: 'Rohini & Hasta',
      score: 31,
      total: 36,
      pct: 86,
      grade: 'Uttama (High Match)',
      nadi: '8/8',
      bhakoot: '7/7',
      maitri: '5/5',
      mangal: 'Manglik Cancelled (Jupiter Trine)',
    },
    {
      label: 'Aries + Leo',
      names: 'Ashwini & Magha',
      score: 29,
      total: 36,
      pct: 81,
      grade: 'Shreshtha (Very Good)',
      nadi: '8/8',
      bhakoot: '5/7',
      maitri: '5/5',
      mangal: 'No Kuja Dosha Present',
    },
    {
      label: 'Cancer + Scorpio',
      names: 'Pushya & Anuradha',
      score: 34,
      total: 36,
      pct: 94,
      grade: 'Param Uttama (Supreme)',
      nadi: '8/8',
      bhakoot: '7/7',
      maitri: '5/5',
      mangal: 'Mutual Benefic Cancellation',
    },
  ];

  return (
    <section
      id="tools"
      aria-label="Astrowithin Classical Tools"
      className="relative px-6 sm:px-12 py-16 sm:py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors overflow-hidden"
    >
      {/* Background Sacred Astrolabe Meridian Coordinate Rings (Slowly Rotating) */}
      <div className="absolute -right-48 -top-48 w-[620px] h-[620px] rounded-full border-2 border-dashed border-[#B88E3E]/10 dark:border-[#B88E3E]/15 pointer-events-none animate-spin-slow" />
      <div className="absolute -left-48 -bottom-48 w-[580px] h-[580px] rounded-full border border-dashed border-[#B88E3E]/10 dark:border-[#B88E3E]/15 pointer-events-none animate-spin-slow" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header: Authentic Vaya Headline (Option 1 Palette) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2.5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>03 · Vedic Astrology Engines</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Tools for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                love, marriage & match.
              </span>
            </h2>
          </div>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm leading-relaxed">
            Authentic mathematical Vedic calculations for relationship clarity, planetary timelines, and karmic charts.
          </p>
        </div>

        {/* OPTION 1: THE CELESTIAL ENGINE DIAL & LIVE INSPECTOR CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: The Celestial Engine Selector Dial (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Top Dial Coordinate Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs text-[#827E76]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B88E3E] animate-pulse"></span>
                <span className="font-sans uppercase tracking-wider font-bold text-[11px] text-[#B88E3E] dark:text-[#E5B869]">
                  Celestial Armillary Dial
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#827E76]">
                Sidereal {activeTool.degreeMark}
              </span>
            </div>

            {/* Dial Stage: Stack of 7 Engines with Left Brass Graduation Track & Gliding Reticle */}
            <div className="relative pl-7 sm:pl-8">
              
              {/* Vertical Calibrated Brass Axis with Degree Tick Marks */}
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#EAE6DF] dark:bg-white/10 pointer-events-none">
                {/* Degree Tick marks */}
                {tools.map((_, i) => (
                  <div
                    key={i}
                    style={{ top: `${(i / (tools.length - 1)) * 96 + 2}%` }}
                    className="absolute -left-1 w-2.5 h-[1.5px] bg-[#B88E3E]/40"
                  />
                ))}

                {/* Gliding Brass Reticle Bead - Moves smoothly to active index position */}
                <div
                  style={{
                    top: `${(activeIndex / (tools.length - 1)) * 96 + 2}%`,
                  }}
                  className="absolute -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] shadow-md flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B88E3E] dark:bg-[#E5B869] animate-pulse" />
                </div>
              </div>

              {/* 7 Engines List */}
              <div className="space-y-2.5" role="tablist" aria-label="Astrology Engines">
                {tools.map((tool, idx) => {
                  const isActive = tool.id === activeToolId;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveToolId(tool.id)}
                      className={`relative w-full p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer flex items-center justify-between group overflow-hidden ${
                        isActive
                          ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] shadow-[0_8px_24px_rgba(184,142,62,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.6)] translate-x-1.5'
                          : 'bg-white/60 dark:bg-white/[0.02] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/60 hover:bg-white dark:hover:bg-white/5 hover:translate-x-1'
                      }`}
                    >
                      {/* Active Indicator Accent Line on Left */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B88E3E] dark:bg-[#E5B869]" />
                      )}

                      <div className="flex items-center gap-3.5 min-w-0 pl-1">
                        {/* Numeral Badge */}
                        <span
                          className={`font-mono text-xs font-bold transition-colors ${
                            isActive
                              ? 'text-[#B88E3E] dark:text-[#E5B869]'
                              : 'text-[#827E76] group-hover:text-[#181716] dark:group-hover:text-white'
                          }`}
                        >
                          {tool.num}
                        </span>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-cormorant text-lg sm:text-xl font-bold truncate transition-colors ${
                                isActive
                                  ? 'text-[#181716] dark:text-white'
                                  : 'text-[#5A5650] dark:text-[#A09D94] group-hover:text-[#181716] dark:group-hover:text-white'
                              }`}
                            >
                              {tool.name}
                            </span>
                            <span className="text-xs text-[#827E76] font-normal hidden sm:inline truncate">
                              · {tool.sanskrit}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#827E76] block truncate font-sans">
                            {tool.tag}
                          </span>
                        </div>
                      </div>

                      {/* Astronomical Degree Mark (Clean, No Pill Capsules) */}
                      <div className="flex items-center gap-2 flex-shrink-0 pl-2">
                        <span
                          className={`text-[11px] font-mono transition-colors ${
                            isActive
                              ? 'text-[#B88E3E] dark:text-[#E5B869] font-bold'
                              : 'text-[#827E76] opacity-60 group-hover:opacity-100'
                          }`}
                        >
                          {tool.degreeMark}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: The Live Engine Inspector Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div
              key={activeTool.id}
              className="bg-white dark:bg-[#1A1C20] rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] dark:border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_6px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-300 animate-[fadeIn_0.35s_ease-out]"
            >
              <div>
                
                {/* Inspector Header with Status Badge */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE6DF] dark:border-white/10">
                  <div>
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                      Engine Inspector · {activeTool.num} / 07
                    </span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-bold leading-tight">
                      {activeTool.name} <span className="font-normal text-lg sm:text-xl text-[#827E76]">({activeTool.sanskrit})</span>
                    </h3>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-sans font-bold px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/30 flex-shrink-0">
                    {activeTool.inspector.statusBadge}
                  </span>
                </div>

                {/* Subtitle & Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#181716] dark:text-white mb-1">
                    {activeTool.inspector.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                    {activeTool.inspector.description}
                  </p>
                </div>

                {/* ======================================================== */}
                {/* DYNAMIC INTERACTIVE SIMULATOR WIDGET (Per Selected Engine) */}
                {/* ======================================================== */}

                {/* 01. MARRIAGE: Interactive Matrimonial Transit Timeline */}
                {activeTool.id === 'marriage' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Interactive Transit Window Simulator
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {marriageYear === 2026 ? 'Peak Muhurta Window ★' : 'Alignment Phase'}
                      </span>
                    </div>

                    {/* Timeline Year Tabs */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[2024, 2025, 2026, 2027].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setMarriageYear(yr)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                            marriageYear === yr
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs scale-105'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716]'
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>

                    {/* Year Inspection Result */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {marriageYear === 2024 && '2024: Karmic Chart Rectification & Preparation'}
                          {marriageYear === 2025 && '2025: Venus Transits 9th House of Fortune'}
                          {marriageYear === 2026 && '2026: Dual Jupiter-Saturn Gochara over 7th House (Golden Peak)'}
                          {marriageYear === 2027 && '2027: Long-Term Matrimonial Asset Consolidation'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          {marriageYear === 2026
                            ? 'Favorable alignment of 7th Lord Venus with Navamsa Ascendant.'
                            : 'Preparatory planetary cycle building toward prime matrimonial window.'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        {marriageYear === 2026 ? '94% Match' : '78% Match'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 02. COMPATIBILITY: Interactive 36-Point Ashtakoota Milan Simulator */}
                {activeTool.id === 'compatibility' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    {/* Scenario Switcher Buttons */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Interactive Partner Simulator
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {compatPresets[compatPreset].grade}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {compatPresets.map((preset, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => setCompatPreset(pIdx)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            compatPreset === pIdx
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs scale-105'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716]'
                          }`}
                        >
                          <span className="block text-[11px] truncate">{preset.label}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{preset.names}</span>
                        </button>
                      ))}
                    </div>

                    {/* Live Gauge & Koota Breakdown */}
                    <div className="p-4 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Circular SVG Arc Gauge */}
                        <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-neutral-200 dark:text-neutral-800"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-[#B88E3E] dark:text-[#E5B869] transition-all duration-700 ease-out"
                              strokeDasharray={`${compatPresets[compatPreset].pct}, 100`}
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <span className="absolute font-mono text-xs font-bold text-[#181716] dark:text-white">
                            {compatPresets[compatPreset].score}
                          </span>
                        </div>

                        <div>
                          <div className="text-xl font-cormorant font-bold">
                            {compatPresets[compatPreset].score} <span className="text-sm font-normal text-[#827E76]">/ 36 Gunas</span>
                          </div>
                          <span className="text-xs font-sans text-[#B88E3E] dark:text-[#E5B869] font-semibold">
                            {compatPresets[compatPreset].mangal}
                          </span>
                        </div>
                      </div>

                      {/* 3 Key Koota Badges */}
                      <div className="flex sm:flex-col gap-2 text-[11px] font-mono">
                        <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5">
                          Nadi: <strong className="text-[#B88E3E] dark:text-[#E5B869]">{compatPresets[compatPreset].nadi}</strong>
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5">
                          Bhakoot: <strong className="text-[#B88E3E] dark:text-[#E5B869]">{compatPresets[compatPreset].bhakoot}</strong>
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/5">
                          Maitri: <strong className="text-[#B88E3E] dark:text-[#E5B869]">{compatPresets[compatPreset].maitri}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 03. BIRTH CHART: Interactive Janam Kundli Kendra Inspector */}
                {activeTool.id === 'birth-chart' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Interactive Janam Kundli Kendra Inspector
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        House {activeKendraHouse} Selected
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { h: 1, label: '1st (Lagna)' },
                        { h: 4, label: '4th (Sukha)' },
                        { h: 7, label: '7th (Kalatra)' },
                        { h: 10, label: '10th (Karma)' },
                      ].map((item) => (
                        <button
                          key={item.h}
                          type="button"
                          onClick={() => setActiveKendraHouse(item.h)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            activeKendraHouse === item.h
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs scale-105'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                    {/* Kendra Meaning Box */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {activeKendraHouse === 1 && '1st Bhava (Lagna): Tula (Libra) 14° · Venus Ascendant'}
                          {activeKendraHouse === 4 && '4th Bhava (Sukha): Makara (Capricorn) 22° · Emotional Serenity'}
                          {activeKendraHouse === 7 && '7th Bhava (Kalatra): Mesha (Aries) 14° · Mars Ruler & Sacred Union'}
                          {activeKendraHouse === 10 && '10th Bhava (Karma): Karka (Cancer) 18° · Digbala Sun & Jupiter'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          {activeKendraHouse === 1 && 'Determines core physical constitution, life direction, and temperament.'}
                          {activeKendraHouse === 4 && 'Governs peace of mind, domestic harmony, and ancestral maternal lineage.'}
                          {activeKendraHouse === 7 && 'Governs sacred marriage, contractual partnerships, and public alliances.'}
                          {activeKendraHouse === 10 && 'Governs leadership vocation, public authority, and career legacy.'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        Kendra Power
                      </span>
                    </div>
                  </div>
                )}

                {/* 04. D9 NAVAMSA: Interactive Harmonic Root vs Soul Comparator */}
                {activeTool.id === 'd9-chart' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Harmonic D1 vs D9 Comparator
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {harmonicTab === 'd1' ? 'Root Janam Chart' : 'Navamsa Destiny Chart'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => setHarmonicTab('d1')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          harmonicTab === 'd1'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        D1 Rashi (Root Blueprint)
                      </button>
                      <button
                        type="button"
                        onClick={() => setHarmonicTab('d9')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          harmonicTab === 'd9'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        D9 Navamsa (Soul's Fruit)
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {harmonicTab === 'd1'
                            ? 'D1 Baseline: Venus in 9th, Jupiter in 10th Kendra'
                            : 'D9 Fortitude: Vargottama Jupiter Exalted in 4th Pada'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          {harmonicTab === 'd1'
                            ? 'Physical life seed potential cast at exact minute of birth.'
                            : 'Reveals true marital partner characteristics and soul maturity past age 30.'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        9th Harmonic
                      </span>
                    </div>
                  </div>
                )}

                {/* 05. DASHA: Interactive 120-Year Vimshottari Mahadasha Timeline */}
                {activeTool.id === 'dasha' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        120-Year Mahadasha Sequence
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {activeDashaGraha} Period Selected
                      </span>
                    </div>

                    {/* Timeline Graha Selector Rail */}
                    <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3">
                      {['Rahu (18y)', 'Jupiter (16y)', 'Saturn (19y)', 'Mercury (17y)', 'Ketu (7y)', 'Venus (20y)'].map((label) => {
                        const graha = label.split(' ')[0];
                        const isG = activeDashaGraha === graha;
                        return (
                          <button
                            key={graha}
                            type="button"
                            onClick={() => setActiveDashaGraha(graha)}
                            className={`py-1.5 px-3 rounded-lg text-[11px] font-mono whitespace-nowrap font-bold transition-all cursor-pointer ${
                              isG
                                ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                                : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {activeDashaGraha === 'Jupiter' && 'Guru Mahadasha: Supreme expansion, wisdom, and marriage window.'}
                          {activeDashaGraha === 'Venus' && 'Shukra Mahadasha: Peak artistic fruition, wealth, and relationship harmony.'}
                          {activeDashaGraha === 'Saturn' && 'Shani Mahadasha: Discipline, karmic reckoning, and long-term asset building.'}
                          {activeDashaGraha === 'Mercury' && 'Budha Mahadasha: Commercial intellect, publishing, and strategic speech.'}
                          {activeDashaGraha === 'Rahu' && 'Rahu Mahadasha: Material ambitions, rapid relocation, and unconventional growth.'}
                          {activeDashaGraha === 'Ketu' && 'Ketu Mahadasha: Spiritual detachment, introspection, and ancestral reckoning.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Vimshottari progression mapped from natal Moon degree.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        120-Yr Cycle
                      </span>
                    </div>
                  </div>
                )}

                {/* 06. CAREER: Interactive Vocational Power Gauge */}
                {activeTool.id === 'career' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Dasamsa (D10) Vocational Radar
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold uppercase">
                        {careerSector}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { id: 'leadership', label: 'Executive Leadership' },
                        { id: 'advisory', label: 'Strategy & Advisory' },
                        { id: 'technology', label: 'Systems & Engineering' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCareerSector(item.id as any)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            careerSector === item.id
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs scale-105'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="text-[11px] block truncate">{item.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {careerSector === 'leadership' && 'Sun in 10th Digbala + Mars Aspect confers natural command.'}
                          {careerSector === 'advisory' && 'Jupiter-Venus Trine indicates high trust in advisory and fiduciary roles.'}
                          {careerSector === 'technology' && 'Mercury in Gemini conjoined Rahu provides structural architectural talent.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Derived from 10th Bhava Lord and D10 harmonic longitudes.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        {careerSector === 'leadership' ? '94% Affinity' : '88% Affinity'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 07. RASHI: Interactive Sidereal Moon & Nakshatra Orb */}
                {activeTool.id === 'rashi' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Sidereal Moon & Nakshatra Phase
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {lunarPhase === 'shukla' ? 'Waxing Gibbous (Shukla)' : 'Waning Crescent (Krishna)'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => setLunarPhase('shukla')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          lunarPhase === 'shukla'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        Waxing (Shukla Paksha · 84% Illumination)
                      </button>
                      <button
                        type="button"
                        onClick={() => setLunarPhase('krishna')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          lunarPhase === 'krishna'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        Waning (Krishna Paksha · Reflective)
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {lunarPhase === 'shukla'
                            ? 'Exalted Moon in Rohini Nakshatra: Peak emotional receptivity and intuition.'
                            : 'Introspective lunar phase: Ideal for internal meditation, budgeting, and reflection.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Adjusted for Sidereal Lahiri Ayanamsa (24° 11' precision).
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        Rohini Pada 4
                      </span>
                    </div>
                  </div>
                )}

                {/* 3 Detailed Metric Rows */}
                <div className="space-y-2.5 mb-5">
                  {activeTool.inspector.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-neutral-50/70 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
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

                {/* In-Depth Classical Astrological Notes */}
                <div className="pt-3.5 border-t border-[#EAE6DF] dark:border-white/10 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-sans font-bold text-[#827E76] block mb-2">
                    Parashari Mathematical Notes
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                    {activeTool.inspector.insightNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2">
                        <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold mt-0.5">·</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* White & Gold Launch Engine Action Button */}
              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center sm:justify-start">
                <Link
                  to={activeTool.route}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span>{activeTool.action}</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Explore All Tools Link */}
        <div className="mt-12 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold hover:text-[#B88E3E] transition-colors opacity-80 hover:opacity-100"
          >
            <span>Explore all tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
