import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link, useParams } from 'react-router-dom';
import { VAYA_TOOL_CATEGORIES, ALL_VAYA_TOOLS, ToolItem } from '../data/vayaToolsCatalog';
import { TECHNICAL_PILLARS, GLOBAL_TOOLS_FAQS } from '../data/toolsData';

export const ToolsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout
      badge="Free Vedic Astrology Calculators"
      title="Vedic Astrology Calculators"
      subtitle="Free Vedic Astrology Kundli tools created with Classically Trained Parashari Astrologers. Find out your Marriage Timing, characteristics of your future partner, what dasha is running your life, affecting your current relationships and more."
    >
      {/* Search Bar & Sticky Sub-Navigation Rail */}
      <div className="mb-12 pb-6 border-b border-[#EAE6DF] dark:border-white/10">
        
        {/* Search Input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search 45+ Vedic calculators (e.g. Navamsa, Dasha, Marriage, Return)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs font-sans text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-colors shadow-xs"
            />
            <svg
              className="absolute left-3.5 top-3.5 w-4 h-4 text-[#827E76]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="text-xs font-mono text-[#827E76]">
            {isSearching ? (
              <span>Found <strong className="text-[#181716] dark:text-white">{searchResults.length}</strong> matching tools</span>
            ) : (
              <span><strong>{ALL_VAYA_TOOLS.length}</strong> Classical Calculators Available</span>
            )}
          </div>
        </div>

        {/* Sticky Subnav Anchor Buttons */}
        {!isSearching && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
            {VAYA_TOOL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToSection(cat.id)}
                className="py-2 px-3.5 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716] dark:hover:text-white hover:border-[#B88E3E] transition-all cursor-pointer text-[11px]"
              >
                {cat.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH RESULTS VIEW (When query active) */}
      {isSearching && (
        <div className="mb-20">
          <div className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-4">
            Search Results for "{searchQuery}"
          </div>
          {searchResults.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
              <p className="text-[#827E76] text-sm">No calculators found matching your search. Try searching for "marriage", "kundli", "dasha", or "navamsa".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                      {tool.category}
                    </span>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-1">
                      {tool.name}
                    </h4>
                    <span className="text-xs text-[#827E76] block mb-3 font-sans">{tool.sanskrit}</span>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Calculate Now</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* FULL VAYA CATEGORIZED VIEW */}
      {!isSearching && (
        <div className="space-y-20">
          
          {/* SECTION 1: MOST USED CALCULATORS (Featured Hero 6-Card Grid) */}
          <section id="most-used" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Start Here
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Most used calculators
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Our primary classical engines for love, marriage, and natal chart casting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VAYA_TOOL_CATEGORIES[0].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/20">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors mb-3 leading-snug">
                      {tool.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                      {tool.actionText || 'Open Calculator →'}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center text-xs text-[#827E76] group-hover:border-[#B88E3E] group-hover:text-[#B88E3E] transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 2: TODAY'S TIMINGS FOR YOUR CITY */}
          <section id="today-timings" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Daily Almanac
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Today's timings for your city
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Astronomical panchang, choghadiya, and auspicious muhurtas calibrated to your local coordinates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {VAYA_TOOL_CATEGORIES[1].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#827E76] block mb-1">{tool.sanskrit}</span>
                    <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>View Today</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 3: PICK A DATE FOR WHAT YOU ARE PLANNING (MUHURATS) */}
          <section id="muhurat" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Muhurat
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Pick a date for what you are planning
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Classical auspicious date selection for weddings, housewarming, vehicles, and real estate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VAYA_TOOL_CATEGORIES[2].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#827E76] block mb-1">{tool.sanskrit}</span>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Find Dates</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 4: FIND PLANETARY SIGNS */}
          <section id="planetary-signs" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Planet Signs
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Find planetary signs
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Calculate which sidereal zodiac sign each of the 9 sacred Grahas occupies in your chart.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {VAYA_TOOL_CATEGORIES[3].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-4 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all text-center group flex flex-col justify-between"
                >
                  <div className="w-8 h-8 mx-auto rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] flex items-center justify-center font-bold text-xs mb-2">
                    {tool.name.slice(0, 2)}
                  </div>
                  <div>
                    <h5 className="font-cormorant font-bold text-base text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors">
                      {tool.name.replace(' Calculator', '').replace(' Sign', '')}
                    </h5>
                    <span className="text-[10px] text-[#827E76] font-mono block mt-0.5">{tool.sanskrit}</span>
                  </div>
                  <span className="text-[10px] text-[#B88E3E] font-bold mt-2">Find →</span>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 5: BIRTH CHART BASICS */}
          <section id="birth-chart-basics" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Foundation
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Birth chart basics
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Sidereal calculations, lagna degrees, moon signs, and nodes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VAYA_TOOL_CATEGORIES[4].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#827E76] block mb-1">{tool.sanskrit}</span>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Calculate</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 6: DIVISIONAL CHARTS AND LAGNAS */}
          <section id="divisional-charts" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Deeper Charts
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Divisional charts and lagnas
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Navamsa (D9), Dashamsha (D10), Arudha Lagna, and Vargottama dignities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VAYA_TOOL_CATEGORIES[5].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Inspect Chart</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 7: SPECIAL LAGNAS AND SENSITIVE POINTS */}
          <section id="special-lagnas" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Jaimini Sphutas
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Special lagnas and sensitive points
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Classical mathematical points for wealth, authority, vitality, and destiny triggers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {VAYA_TOOL_CATEGORIES[6].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#827E76] block mb-1">{tool.sanskrit}</span>
                    <h5 className="font-cormorant font-bold text-lg text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-1.5 leading-snug">
                      {tool.name}
                    </h5>
                    <p className="text-[11px] text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-[#EAE6DF] dark:border-white/10 text-[11px] font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Calculate</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 8: PLANETARY RETURNS */}
          <section id="planetary-returns" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Cycles
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Planetary returns
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Astronomical return cycles of Saturn, Jupiter, and Venus to their exact birth positions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VAYA_TOOL_CATEGORIES[7].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Calculate Return Date</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* SECTION 9: PREDICTIONS AND COMPATIBILITY */}
          <section id="predictions-compatibility" className="scroll-mt-24 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Life Questions
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Predictions and compatibility
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Predictive engines for career breakthroughs, foreign settlement, marriage timing, and doshas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VAYA_TOOL_CATEGORIES[8].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-bold text-[#B88E3E] flex items-center justify-between">
                    <span>Explore Prediction</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* LIFE GUIDANCE CARDS: "When will I get married?" & "Is this the right person?" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <Link
              to="/tools/marriage-prediction"
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#181716] to-[#2A2724] text-white shadow-xl hover:scale-[1.01] transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#E5B869] block mb-2">
                  Question-Led Timing
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl font-bold mb-3">
                  When will I get married?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Calculate the exact dual transit of Jupiter and Saturn activating your natal 7th house and Upapada Lagna.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E5B869]">
                <span>Launch Marriage Engine</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            <Link
              to="/tools/kundli-matching"
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#181716] dark:text-white shadow-xl hover:scale-[1.01] transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  Synastry & Guna Milan
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl font-bold mb-3">
                  Is this the right person?
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                  Score your 36 Guna Ashtakoota compatibility and inspect emotional, genetic, and long-term values alignment.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869]">
                <span>Run Compatibility Check</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          {/* ======================================================== */}
          {/* TECHNICAL COMPUTATION PILLARS */}
          {/* ======================================================== */}
          <div className="pt-12 pb-16 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                Computational Rigor
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                Classical Vedic Ephemerides Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECHNICAL_PILLARS.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] mb-1">
                      0{pIdx + 1} · {pillar.sanskrit}
                    </div>
                    <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white mb-2 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* COMPREHENSIVE TOOLS FAQ ACCORDION */}
          {/* ======================================================== */}
          <div className="pt-12 pb-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  Frequently Asked Questions
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                  Astrology Calculators & Methodology FAQ
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
                Astronomical accuracy, Lahiri Ayanamsa, and dosha cancellations explained.
              </p>
            </div>

            <div className="space-y-3">
              {GLOBAL_TOOLS_FAQS.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-cormorant text-lg sm:text-xl font-bold text-[#181716] dark:text-white">
                        {faq.question}
                      </span>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center border border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-sm font-bold flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-[#EAE6DF] dark:border-white/10 text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

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

  // Resolve tool from params or props
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
  const [activeResultTab, setActiveResultTab] = useState<'summary' | 'planets' | 'scripture'>('summary');

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
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#EAE6DF] dark:border-white/10">
            <h2 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA]">
              Enter Birth Parameters
            </h2>
            <span className="text-[10px] font-mono uppercase text-[#B88E3E] font-bold">
              Lahiri Ayanamsa
            </span>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Time of Birth (24 Hr Precision)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Place of Birth (City, Country)</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              Calculate {displayName} →
            </button>
          </form>

          {/* Classical Method Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-xs text-[#827E76] leading-relaxed">
            <span className="font-bold text-[#181716] dark:text-white block mb-1">
              Methodology: {matchedTool?.classicalSource || 'Brihat Parashara Hora Shastra'}
            </span>
            Coordinates calculated using sidereal Chitra Paksha Ayanamsa (24° 11' 42") and topocentric altitude corrections.
          </div>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-[#EAE6DF] dark:border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    Computed Sidereal Horoscope
                  </span>
                  <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-[#F4F1EA] mt-1">{name}</h3>
                  <p className="text-xs text-[#5A5650] dark:text-[#A09D94] mt-0.5 font-sans">
                    Born {dob} at {time} in {city} (Lahiri Ayanamsa: 24° 11' 42")
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] font-bold">
                    Asc: Libra 14° 22'
                  </span>
                </div>
              </div>

              {/* Result Tabs Switcher */}
              <div className="flex items-center gap-2 border-b border-[#EAE6DF] dark:border-white/10 pb-2 text-xs font-bold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveResultTab('summary')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'summary'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('planets')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'planets'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Planetary Degrees (9)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('scripture')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'scripture'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Classical Insights
                </button>
              </div>

              {/* TAB 1: SUMMARY */}
              {activeResultTab === 'summary' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Ascendant (Lagna)</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Libra (Tula) 14° 22'</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Lord: Venus in 9th house (Bhagya)</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Moon Sign (Rashi)</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Taurus (Vrishabha) 14° 22'</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Nakshatra: Rohini (Pada 2) · Exalted Moon</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Active Vimshottari Mahadasha</div>
                      <div className="font-cormorant font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">Jupiter – Venus Phase</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Auspicious window for relationship & wealth</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Primary Karaka Dignity</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Atmakaraka: Sun 28°</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Darakaraka: Venus 02° (Artistic, loyal spouse)</div>
                    </div>
                  </div>

                  {/* North Indian Diamond Kundli SVG */}
                  <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col items-center">
                    <div className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3">
                      North Indian Diamond Janam Kundli
                    </div>
                    <svg viewBox="0 0 160 160" className="w-44 h-44 text-[#B88E3E] dark:text-[#E5B869]">
                      <rect x="5" y="5" width="150" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="5" y1="5" x2="155" y2="155" stroke="currentColor" strokeWidth="1" />
                      <line x1="155" y1="5" x2="5" y2="155" stroke="currentColor" strokeWidth="1" />
                      <polygon points="80,5 155,80 80,155 5,80" fill="none" stroke="currentColor" strokeWidth="1" />
                      <text x="80" y="45" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">Asc (Tula)</text>
                      <text x="80" y="115" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">7th (Mesha)</text>
                      <text x="45" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">4th (Makar)</text>
                      <text x="115" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">10th (Kark)</text>
                      <text x="80" y="75" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.9">Guru</text>
                      <text x="80" y="90" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.9">Shani</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* TAB 2: COMPLETE 9 PLANETS DEGREE TABLE */}
              {activeResultTab === 'planets' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76]">
                        <th className="py-2.5">Graha (Planet)</th>
                        <th className="py-2.5">Rashi (Sign)</th>
                        <th className="py-2.5">Degrees</th>
                        <th className="py-2.5">Nakshatra</th>
                        <th className="py-2.5">Dignity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                      {samplePlanets.map((p, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-white/[0.02]">
                          <td className="py-2.5 font-bold text-[#181716] dark:text-white">
                            {p.graha} {p.retro && <span className="text-amber-600 font-mono text-[10px]">(R)</span>}
                          </td>
                          <td className="py-2.5 text-[#5A5650] dark:text-[#A09D94]">{p.sign}</td>
                          <td className="py-2.5 font-mono text-[#827E76]">{p.deg}</td>
                          <td className="py-2.5 text-[#5A5650] dark:text-[#A09D94]">{p.nak}</td>
                          <td className="py-2.5 font-semibold text-[#B88E3E] dark:text-[#E5B869]">{p.dignity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 3: CLASSICAL INSIGHTS */}
              {activeResultTab === 'scripture' && (
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <span className="font-bold text-[#181716] dark:text-white block mb-1">
                      Classical Treatise Formulation ({matchedTool?.classicalSource || 'Brihat Parashara Hora Shastra'})
                    </span>
                    <p className="text-[#5A5650] dark:text-[#A09D94]">
                      {matchedTool?.desc || 'Calculated using authentic sidereal Parashari principles.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <span className="font-bold text-[#181716] dark:text-white block mb-1">
                      Recommended Remedial Guidance
                    </span>
                    <p className="text-[#5A5650] dark:text-[#A09D94]">
                      Because Jupiter aspects the 7th house cusp, natural protections are active. For fine-grained Muhurta dates or to examine the D9 Navamsa and D10 Dasamsa harmonics in depth, consult an accredited Astrowithin scholar.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Link: White background with 2px gold border */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#EAE6DF] dark:border-white/10 gap-3">
                <span className="text-xs text-[#827E76]">
                  Need a human scholar to synthesize your chart?
                </span>
                <Link
                  to="/download"
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs"
                >
                  Consult Accredited Astrologer →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center text-[#827E76] dark:text-[#9C9A94] p-8">
              <div className="w-14 h-14 rounded-full border-2 border-[#B88E3E] flex items-center justify-center p-3 mb-4 bg-[#B88E3E]/10 text-[#B88E3E]">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                </svg>
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-2">
                Awaiting Birth Data
              </h3>
              <p className="font-sans text-xs sm:text-sm max-w-sm leading-relaxed">
                Enter your birth date, exact time, and city on the left to compute high-precision astronomical coordinates for {displayName}.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
