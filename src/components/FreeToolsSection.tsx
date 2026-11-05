import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLASSICAL_TOOLS, ClassicalTool } from '../data/toolsData';

export const FreeToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeToolId, setActiveToolId] = useState<string>('marriage');

  // Interactive States within the Inspector Widgets
  const [compatPreset, setCompatPreset] = useState<number>(0);
  const [marriageYear, setMarriageYear] = useState<number>(2026);
  const [activeKendraHouse, setActiveKendraHouse] = useState<number>(1);
  const [harmonicTab, setHarmonicTab] = useState<'d1' | 'd9'>('d9');
  const [activeDashaGraha, setActiveDashaGraha] = useState<string>('Jupiter');
  const [careerSector, setCareerSector] = useState<'leadership' | 'advisory' | 'technology'>('leadership');
  const [lunarPhase, setLunarPhase] = useState<'shukla' | 'krishna'>('shukla');
  const [sadeSatiPhase, setSadeSatiPhase] = useState<number>(2);
  const [selectedKaraka, setSelectedKaraka] = useState<'ak' | 'dk'>('ak');

  const categories = ['All', 'Love & Marriage', 'Natal & Vargas', 'Dashas & Timing', 'Jaimini & Yogas'];

  const filteredTools = selectedCategory === 'All'
    ? CLASSICAL_TOOLS
    : CLASSICAL_TOOLS.filter((t) => t.category === selectedCategory);

  const activeTool = filteredTools.find((t) => t.id === activeToolId) || filteredTools[0] || CLASSICAL_TOOLS[0];
  const activeIndex = filteredTools.findIndex((t) => t.id === activeTool.id);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-6">
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
                love, marriage & life path.
              </span>
            </h2>
          </div>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm leading-relaxed">
            Authentic mathematical Parashari and Jaimini calculations calibrated to NASA JPL ephemerides and sidereal Lahiri Ayanamsa.
          </p>
        </div>

        {/* Category Filter Pills (Domain Tabs) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstInCat = cat === 'All' ? CLASSICAL_TOOLS[0] : CLASSICAL_TOOLS.find((t) => t.category === cat);
                  if (firstInCat) setActiveToolId(firstInCat.id);
                }}
                className={`py-2 px-4 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716] shadow-xs'
                    : 'bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* OPTION 1: THE CELESTIAL ENGINE DIAL & LIVE INSPECTOR CONSOLE */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
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

            {/* Dial Stage: Stack of Engines with Left Brass Graduation Track & Gliding Reticle */}
            <div className="relative pl-7 sm:pl-8">
              
              {/* Vertical Calibrated Brass Axis with Degree Tick Marks */}
              <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#EAE6DF] dark:bg-white/10 pointer-events-none">
                {filteredTools.map((_, i) => (
                  <div
                    key={i}
                    style={{ top: `${(i / Math.max(filteredTools.length - 1, 1)) * 96 + 2}%` }}
                    className="absolute -left-1 w-2.5 h-[1.5px] bg-[#B88E3E]/40"
                  />
                ))}

                {/* Gliding Brass Reticle Bead */}
                <div
                  style={{
                    top: `${(Math.max(activeIndex, 0) / Math.max(filteredTools.length - 1, 1)) * 96 + 2}%`,
                  }}
                  className="absolute -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] shadow-md flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B88E3E] dark:bg-[#E5B869] animate-pulse" />
                </div>
              </div>

              {/* Engine Buttons List */}
              <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1" role="tablist" aria-label="Astrology Engines">
                {filteredTools.map((tool) => {
                  const isActive = tool.id === activeTool.id;
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
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B88E3E] dark:bg-[#E5B869]" />
                      )}

                      <div className="flex items-center gap-3.5 min-w-0 pl-1">
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
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                      Engine Inspector · {activeTool.num} / {CLASSICAL_TOOLS.length}
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

                {/* SIMULATOR WIDGET */}
                {activeTool.id === 'marriage' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Transit Window Simulator
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {marriageYear === 2026 ? 'Peak Muhurta Window ★' : 'Alignment Phase'}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[2024, 2025, 2026, 2027].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setMarriageYear(yr)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                            marriageYear === yr
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {marriageYear === 2026
                            ? '2026: Dual Jupiter-Saturn Gochara over 7th House (Golden Peak)'
                            : `${marriageYear}: Preparatory transit cycle across natal axis.`}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Cross-referenced with Upapada Lagna in D9 Navamsa.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        {marriageYear === 2026 ? '94% Match' : '78% Match'}
                      </span>
                    </div>
                  </div>
                )}

                {activeTool.id === 'compatibility' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Ashtakoota 36-Point Simulator
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
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="block text-[11px] truncate">{preset.label}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{preset.names}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          Score: {compatPresets[compatPreset].score} / 36 · {compatPresets[compatPreset].grade}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Nadi: {compatPresets[compatPreset].nadi} · Bhakoot: {compatPresets[compatPreset].bhakoot} · {compatPresets[compatPreset].mangal}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-lg text-[#B88E3E] dark:text-[#E5B869]">
                        {compatPresets[compatPreset].pct}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Metric Rows */}
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

                {/* Classical Notes */}
                <div className="pt-3.5 border-t border-[#EAE6DF] dark:border-white/10 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-sans font-bold text-[#827E76]">
                      Parashari Mathematical Notes
                    </span>
                    <span className="text-[10px] text-[#827E76] italic font-serif">
                      Ref: {activeTool.classicalSource}
                    </span>
                  </div>
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

              {/* White & Gold Action Button */}
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

        {/* Clean Directory Link */}
        <div className="mt-8 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
          <Link
            to="/tools"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Explore All 45+ Vedic Calculators in Directory</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
