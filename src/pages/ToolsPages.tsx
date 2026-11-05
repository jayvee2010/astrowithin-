import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link, useParams } from 'react-router-dom';
import { VAYA_TOOL_CATEGORIES, ALL_VAYA_TOOLS, ToolItem } from '../data/vayaToolsCatalog';

// Clean SVG Icons for Tool Cards
const ToolIcon: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'marriage':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
          <path d="M12 7l1.5-2 1.5 2" />
        </svg>
      );
    case 'kundli':
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="3" x2="21" y2="21" />
          <line x1="21" y1="3" x2="3" y2="21" />
          <polygon points="12,3 21,12 12,21 3,12" />
        </svg>
      );
    case 'dasha':
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'transit':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="4" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
        </svg>
      );
    case 'nakshatra':
    case 'star':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      );
    case 'balance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 3v18M6 8l6-3 6 3M6 8l-3 6h6L6 8zM18 8l-3 6h6l-3-6z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
};

const getToolIconType = (id: string): string => {
  if (id.includes('marriage') || id.includes('vivah')) return 'marriage';
  if (id.includes('kundli') || id.includes('matching') || id.includes('synastry')) return 'balance';
  if (id.includes('dasha') || id.includes('choghadiya') || id.includes('hora')) return 'dasha';
  if (id.includes('transit') || id.includes('return')) return 'transit';
  if (id.includes('nakshatra') || id.includes('star')) return 'nakshatra';
  if (id.includes('panchang') || id.includes('calendar') || id.includes('muhurat')) return 'calendar';
  if (id.includes('sun') || id.includes('abhijit')) return 'sun';
  if (id.includes('moon') || id.includes('rashi')) return 'moon';
  return 'chart';
};

export const ToolsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isSearching = searchQuery.trim().length > 0;
  const searchResults = isSearching
    ? ALL_VAYA_TOOLS.filter((t) => {
        const q = searchQuery.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          t.sanskrit.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
        );
      })
    : [];

  const scrollToAllTools = () => {
    const el = document.getElementById('all-tools');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout
      badge="Free Vedic Astrology Calculators"
      title="Astrology Tools & Calculators"
      subtitle="Free Vedic Astrology Kundli tools created with Classically Trained Parashari Astrologers. Find out your Marriage Timing, characteristics of your future partner, and active planetary periods."
    >
      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-16">
        <div className="relative">
          <input
            type="text"
            placeholder="Search all 45+ calculators (e.g. Marriage, Dasha, Navamsa)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-sm font-sans text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-colors shadow-xs"
          />
          <svg
            className="absolute left-4 top-4 w-4 h-4 text-[#827E76]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* SEARCH RESULTS VIEW */}
      {isSearching ? (
        <div className="mb-20">
          <div className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-4">
            Search Results ({searchResults.length})
          </div>
          {searchResults.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
              <p className="text-[#827E76] text-sm">No calculators found matching "{searchQuery}".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-[#B88E3E]">
                    <ToolIcon type={getToolIconType(tool.id)} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-cormorant font-bold text-lg text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors truncate">
                      {tool.name}
                    </h4>
                    <span className="text-[11px] text-[#827E76] font-mono block truncate">{tool.sanskrit}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          
          {/* ======================================================== */}
          {/* SECTION 1: MOST USED CALCULATORS (Vaya Hero 6-Card Grid) */}
          {/* ======================================================== */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-1">
                  Start here
                </p>
                <h2 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Most used calculators
                </h2>
              </div>
              <button
                type="button"
                onClick={scrollToAllTools}
                className="text-xs font-sans font-bold text-[#827E76] hover:text-[#181716] dark:hover:text-white transition-colors cursor-pointer"
              >
                Browse all tools ↓
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {VAYA_TOOL_CATEGORIES[0].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="group relative p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Medallion */}
                    <div className="w-13 h-13 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#B88E3E] dark:text-[#E5B869] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <ToolIcon type={getToolIconType(tool.id)} className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors leading-snug">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] flex-shrink-0">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#827E76] font-mono block mt-0.5">
                        {tool.sanskrit}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    <span>{tool.actionText || 'Calculate →'}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ANCHOR TARGET FOR BROWSING */}
          <div id="all-tools" className="scroll-mt-12" />

          {/* ======================================================== */}
          {/* CATEGORY SECTIONS (Sections 2 to 9) */}
          {/* ======================================================== */}
          {VAYA_TOOL_CATEGORIES.slice(1).map((category) => (
            <section key={category.id} className="mb-16">
              
              {/* Refined Architectural Divider with Floating Tag */}
              <div className="relative my-10 text-center sm:text-left">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#EAE6DF] dark:border-white/10"></div>
                </div>
                <div className="relative inline-block bg-[#FAF8F5] dark:bg-[#121316] pr-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#827E76]">
                    {category.kicker}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight text-[#181716] dark:text-white">
                  {category.title}
                </h2>
              </div>

              {/* Rhythmic Tile Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.id}
                    to={tool.path}
                    className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center group min-h-[145px]"
                  >
                    <div className="w-11 h-11 rounded-full bg-neutral-100 dark:bg-white/5 text-[#B88E3E] dark:text-[#E5B869] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <ToolIcon type={getToolIconType(tool.id)} className="w-5 h-5" />
                    </div>

                    <h4 className="font-cormorant font-bold text-base sm:text-lg text-[#181716] dark:text-white group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors leading-tight">
                      {tool.name.replace(' Calculator', '')}
                    </h4>

                    <span className="text-[10px] text-[#827E76] font-mono mt-1 block">
                      {tool.sanskrit}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* ======================================================== */}
          {/* LIFE GUIDANCE CALLOUT CARDS (Matching Vaya) */}
          {/* ======================================================== */}
          <section className="pt-10 pb-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <Link
                to="/tools/marriage-prediction"
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                    Timing & Destiny
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#181716] dark:text-white mb-3">
                    When will I get married?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                    Analyze the dual transit of Jupiter and Saturn activating your natal 7th house and Upapada Lagna.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                  <span>Predict My Marriage</span>
                  <span>→</span>
                </span>
              </Link>

              <Link
                to="/tools/kundli-matching"
                className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                    Synastry & Guna Milan
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#181716] dark:text-white mb-3">
                    Is this the right person?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                    Score your 36 Guna Ashtakoota compatibility and inspect emotional, psychological, and longevity factors.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                  <span>Match My Kundli</span>
                  <span>→</span>
                </span>
              </Link>

            </div>
          </section>

        </div>
      )}
    </PageLayout>
  );
};

export const ToolCalculatorPage: React.FC<{
  toolName?: string;
  badge?: string;
  formulaDescription?: string;
}> = (props) => {
  const { toolId, muhuratType } = useParams<{ toolId?: string; muhuratType?: string }>();

  let effectiveId = toolId;
  if (!effectiveId && muhuratType) {
    effectiveId = `muhurat/${muhuratType}`;
  }

  const matchedTool = effectiveId
    ? ALL_VAYA_TOOLS.find((t) => t.path.endsWith(effectiveId!) || t.id === effectiveId)
    : props.toolName
    ? ALL_VAYA_TOOLS.find((t) => t.name.toLowerCase().includes(props.toolName!.toLowerCase()))
    : ALL_VAYA_TOOLS[0];

  const displayName = matchedTool?.name || props.toolName || 'Vedic Astrology Calculator';
  const displayBadge = matchedTool?.badge || props.badge || 'Classical Parashari Engine';
  const displayDesc = matchedTool?.desc || props.formulaDescription || 'Astronomical calculations calibrated to NASA JPL ephemerides and sidereal Lahiri Ayanamsa.';

  const [name, setName] = useState('Arjun Sharma');
  const [dob, setDob] = useState('1994-06-18');
  const [time, setTime] = useState('14:30');
  const [city, setCity] = useState('New Delhi, India');
  const [calculated, setCalculated] = useState(false);
  const [activeResultTab, setActiveResultTab] = useState<'summary' | 'planets'>('summary');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  const samplePlanets = [
    { graha: 'Surya (Sun)', sign: 'Gemini (Mithuna)', deg: '03° 14\' 22"', nak: 'Mrigashira (Pada 3)', lord: 'Mars', dignity: 'Neutral Friend', retro: false },
    { graha: 'Chandra (Moon)', sign: 'Taurus (Vrishabha)', deg: '14° 22\' 48"', nak: 'Rohini (Pada 2)', lord: 'Moon', dignity: 'Exalted (Ucha) ★', retro: false },
    { graha: 'Mangala (Mars)', sign: 'Aries (Mesha)', deg: '22° 45\' 10"', nak: 'Bharani (Pada 3)', lord: 'Venus', dignity: 'Moolatrikona ★', retro: false },
    { graha: 'Budha (Mercury)', sign: 'Taurus (Vrishabha)', deg: '28° 10\' 04"', nak: 'Mrigashira (Pada 2)', lord: 'Mars', dignity: 'Friendly Sign', retro: false },
    { graha: 'Guru (Jupiter)', sign: 'Libra (Tula)', deg: '11° 30\' 18"', nak: 'Swati (Pada 2)', lord: 'Rahu', dignity: 'Neutral Friend', retro: false },
    { graha: 'Shukra (Venus)', sign: 'Cancer (Karka)', deg: '19° 52\' 34"', nak: 'Ashlesha (Pada 1)', lord: 'Mercury', dignity: 'Enemy Sign', retro: false },
    { graha: 'Shani (Saturn)', sign: 'Aquarius (Kumbha)', deg: '17° 08\' 52"', nak: 'Shatabhisha (Pada 4)', lord: 'Rahu', dignity: 'Moolatrikona ★', retro: true },
    { graha: 'Rahu (North Node)', sign: 'Scorpio (Vrishchika)', deg: '05° 41\' 12"', nak: 'Anuradha (Pada 1)', lord: 'Saturn', dignity: 'Debilitated (Neecha)', retro: true },
    { graha: 'Ketu (South Node)', sign: 'Taurus (Vrishabha)', deg: '05° 41\' 12"', nak: 'Krittika (Pada 3)', lord: 'Sun', dignity: 'Exalted (Ucha)', retro: true },
  ];

  return (
    <PageLayout
      badge={displayBadge}
      title={displayName}
      subtitle={displayDesc}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Form Container */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#EAE6DF] dark:border-white/10">
            <h2 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA]">
              Enter Birth Details
            </h2>
            <span className="text-[10px] font-mono uppercase text-[#B88E3E] font-bold">
              Lahiri Ayanamsa
            </span>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Time of Birth (24 Hr Precision)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Place of Birth (City, Country)</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-full bg-[#181716] dark:bg-white text-white dark:text-[#181716] font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              Calculate {displayName} →
            </button>
          </form>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-[#EAE6DF] dark:border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    Computed Horoscope
                  </span>
                  <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white mt-0.5">{name}</h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E]">
                  Asc: Libra 14° 22'
                </span>
              </div>

              {/* Result Tabs */}
              <div className="flex items-center gap-2 border-b border-[#EAE6DF] dark:border-white/10 pb-2 text-xs font-bold uppercase">
                <button
                  type="button"
                  onClick={() => setActiveResultTab('summary')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${
                    activeResultTab === 'summary' ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]' : 'text-[#827E76]'
                  }`}
                >
                  Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('planets')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${
                    activeResultTab === 'planets' ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]' : 'text-[#827E76]'
                  }`}
                >
                  Planetary Degrees
                </button>
              </div>

              {activeResultTab === 'summary' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Ascendant (Lagna)</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Libra 14° 22'</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Lord: Venus in 9th house</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Moon Sign (Rashi)</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Taurus 14° 22'</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Nakshatra: Rohini (Pada 2)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Active Mahadasha</div>
                    <div className="font-cormorant font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">Jupiter – Venus</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Auspicious window for relationship & assets</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">7th House & Partner</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Aries · Mars</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Kuja dosha cancelled by Jupiter aspect</div>
                  </div>
                </div>
              )}

              {activeResultTab === 'planets' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76]">
                        <th className="py-2">Planet</th>
                        <th className="py-2">Sign</th>
                        <th className="py-2">Degree</th>
                        <th className="py-2">Dignity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                      {samplePlanets.map((p, idx) => (
                        <tr key={idx}>
                          <td className="py-2 font-bold text-[#181716] dark:text-white">{p.graha}</td>
                          <td className="py-2 text-[#5A5650] dark:text-[#A09D94]">{p.sign}</td>
                          <td className="py-2 font-mono text-[#827E76]">{p.deg}</td>
                          <td className="py-2 font-semibold text-[#B88E3E] dark:text-[#E5B869]">{p.dignity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex justify-end">
                <Link
                  to="/download"
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
                >
                  Consult Astrologer on Astrowithin →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-80 flex flex-col items-center justify-center text-center text-[#827E76]">
              <div className="w-12 h-12 rounded-full border border-[#B88E3E] flex items-center justify-center mb-3 bg-[#B88E3E]/10 text-[#B88E3E]">
                <ToolIcon type="star" className="w-6 h-6" />
              </div>
              <p className="text-xs max-w-xs">
                Enter your birth parameters on the left to compute {displayName}.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
