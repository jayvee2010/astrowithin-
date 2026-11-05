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
  inspector: {
    title: string;
    statusBadge: string;
    headline: string;
    description: string;
    highlightScore?: { label: string; value: string; status: string; percent: string };
    metrics: { label: string; value: string; detail: string }[];
    insightNotes: string[];
  };
}

export const FreeToolsSection: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string>('compatibility');

  const tools: ToolEngine[] = [
    {
      id: 'marriage',
      num: '01',
      name: 'Marriage',
      sanskrit: 'विवाह विचार',
      tag: '7th House Lord & Dasha Timing',
      route: '/tools/marriage-prediction',
      action: 'Calculate Marriage Timing →',
      inspector: {
        title: '7th House Lord & Dasha Timing Engine',
        statusBadge: 'Karmic Union Alignment',
        headline: 'Matrimonial Timing & Upapada Lagna Alignment',
        description: 'Calculates the exact temporal window for matrimonial commitment by examining the dual transit of Jupiter and Saturn over your natal 7th house and Upapada Lagna.',
        highlightScore: {
          label: 'Auspicious Union Window',
          value: 'Q1 2026 – Q3 2026',
          status: 'Peak Gochara Alignment',
          percent: '92%',
        },
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
      inspector: {
        title: 'Ashtakoota 36-Point Milan Engine',
        statusBadge: 'Uttama (High Harmony)',
        headline: 'Comprehensive 8-Koota Synastry Analysis',
        description: 'Evaluates the 8 foundational psychological and physiological compatibility layers between partners using sidereal Moon nakshatra coordinates.',
        highlightScore: {
          label: 'Ashtakoota Match Score',
          value: '31 / 36 Gunas',
          status: 'High Long-Term Harmony',
          percent: '86%',
        },
        metrics: [
          { label: 'Nadi Koota', value: '8 / 8 Points', detail: 'Genetic & physiological harmony (Different Nadis)' },
          { label: 'Bhakoot Koota', value: '7 / 7 Points', detail: 'Mutual emotional compassion and financial longevity' },
          { label: 'Graha Maitri', value: '5 / 5 Points', detail: 'Deep planetary friendship and shared worldview' },
        ],
        insightNotes: [
          'Scores 31 out of 36 points, firmly in the highest "Uttama" tier for enduring marital success.',
          'Kuja (Manglik) Dosha verified: Neutralized through Jupiter fifth mutual trine aspect.',
          'Yoni score of 4/4 confirms magnetic mutual attraction and physiological balance.',
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
      inspector: {
        title: '12-Bhava Natal Horoscope Engine',
        statusBadge: 'Sidereal Lahiri Verified',
        headline: 'Exact Degree Natal Planetary Longitudes',
        description: 'Casts the fundamental North Indian diamond Janam Kundli blueprint at the exact minute and geographical coordinates of birth using high-precision ephemerides.',
        highlightScore: {
          label: 'Shadbala Power Index',
          value: '94% Strength',
          status: 'Cardinal Kendra Dignity',
          percent: '94%',
        },
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
      inspector: {
        title: 'Divisional Navamsa (D9) Engine',
        statusBadge: 'Spouse & Inner Destiny',
        headline: 'The 9th Divisional Harmonic of the Natal Rashi',
        description: 'The Navamsa decomposes each 30° zodiac sign into 9 micro-divisions of 3° 20\', revealing the hidden destiny of the second half of life and matrimonial fortune.',
        highlightScore: {
          label: 'Navamsa Fortitude',
          value: 'Vargottama Jupiter',
          status: 'Exalted in 4th Pada',
          percent: '90%',
        },
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
      inspector: {
        title: '120-Year Vimshottari Cycle Engine',
        statusBadge: 'Karmic Timeline Active',
        headline: 'Chronological Unfolding of Planetary Periods',
        description: 'Calculates the 120-year astronomical Vimshottari Dasha sequence from the Moon\'s exact nakshatra degree at birth down to Antardasha and Pratyantardasha intervals.',
        highlightScore: {
          label: 'Active Karmic Cycle',
          value: 'Guru-Shukra Phase',
          status: 'Jupiter Mahadasha · Venus Antardasha',
          percent: '78%',
        },
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
      inspector: {
        title: '10th House & Dasamsa (D10) Engine',
        statusBadge: 'Vocational Strength',
        headline: 'Midheaven, 10th Bhava & Professional Trajectory',
        description: 'Analyzes the 10th house of worldly profession, Amatya Karaka, and the D10 Dasamsa harmonic to pinpoint career breakthroughs and vocational calling.',
        highlightScore: {
          label: 'Vocational Potential',
          value: 'Executive Leadership',
          status: '10th Lord Sun in Kendra',
          percent: '91%',
        },
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
      inspector: {
        title: 'Sidereal Moon & Janma Nakshatra Engine',
        statusBadge: 'Subconscious Identity',
        headline: 'True Lunar Sign, Nakshatra Pada & Daily Rhythms',
        description: 'Calculates your true sidereal Moon sign (Rashi) and birth star (Janma Nakshatra), unlocking your emotional temperament, instinctual habits, and daily transit rhythms.',
        highlightScore: {
          label: 'Lunar Dignity',
          value: 'Vrishabha (Taurus)',
          status: 'Exalted at 14° · Rohini Nakshatra',
          percent: '95%',
        },
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

  const activeTool = tools.find((t) => t.id === activeToolId) || tools[1];

  return (
    <section
      id="tools"
      aria-label="Astrowithin Classical Tools"
      className="px-6 sm:px-12 py-16 sm:py-20 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: The Celestial Engine Selector Dial (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs text-[#827E76]">
              <span className="font-sans uppercase tracking-wider font-bold text-[11px] text-[#B88E3E] dark:text-[#E5B869]">
                Celestial Engine Registry
              </span>
              <span className="font-mono text-[11px] opacity-70">
                0{tools.findIndex((t) => t.id === activeToolId) + 1} of 07 Selected
              </span>
            </div>

            {/* List of 7 Engines with clean interactive states */}
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
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] shadow-[0_6px_20px_rgba(184,142,62,0.12)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] translate-x-1'
                        : 'bg-white/60 dark:bg-white/[0.02] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/60 hover:bg-white dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
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

                    {/* Active State Indicator Dot or Subtle Arrow */}
                    <div className="flex items-center gap-1.5 flex-shrink-0 pl-2">
                      {isActive ? (
                        <span className="px-2.5 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] text-[10px] font-sans font-bold uppercase tracking-wider border border-[#B88E3E]/20">
                          Active
                        </span>
                      ) : (
                        <span className="text-[#827E76] text-xs font-mono group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: The Live Engine Inspector Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1A1C20] rounded-3xl p-6 sm:p-8 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between transition-all">
              
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
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-[#181716] dark:text-white mb-1.5">
                    {activeTool.inspector.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                    {activeTool.inspector.description}
                  </p>
                </div>

                {/* Interactive Live Calculation Highlight Box */}
                {activeTool.inspector.highlightScore && (
                  <div className="p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-5 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-sans font-bold text-[#827E76] block mb-0.5">
                        {activeTool.inspector.highlightScore.label}
                      </span>
                      <div className="text-xl sm:text-2xl font-cormorant font-bold text-[#181716] dark:text-white">
                        {activeTool.inspector.highlightScore.value}
                      </div>
                      <span className="text-[11px] text-[#B88E3E] dark:text-[#E5B869] font-medium">
                        {activeTool.inspector.highlightScore.status}
                      </span>
                    </div>

                    <div className="w-14 h-14 rounded-full border-2 border-[#B88E3E] dark:border-[#E5B869] flex flex-col items-center justify-center flex-shrink-0 bg-white dark:bg-[#1A1C20] shadow-xs">
                      <span className="font-mono text-xs font-bold text-[#B88E3E] dark:text-[#E5B869]">
                        {activeTool.inspector.highlightScore.percent}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider text-[#827E76]">Match</span>
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

        {/* Explore All Tools Link (Preserved from Content) */}
        <div className="mt-12 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#827E76]">
            Showing 7 Classical Parashari & Jaimini Computational Engines
          </div>

          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold hover:text-[#B88E3E] transition-colors opacity-80 hover:opacity-100"
          >
            <span>Explore all tools ({tools.length})</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
