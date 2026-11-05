import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLASSICAL_TOOLS, TECHNICAL_PILLARS, GLOBAL_TOOLS_FAQS, ClassicalTool } from '../data/toolsData';

export const FreeToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeToolId, setActiveToolId] = useState<string>('marriage');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  // If the currently active tool is not in the filtered list, default to first item
  const activeTool = filteredTools.find((t) => t.id === activeToolId) || filteredTools[0] || CLASSICAL_TOOLS[0];
  const activeIndex = filteredTools.findIndex((t) => t.id === activeTool.id);

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

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

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
              <span>03 · Vedic Astrology Engines ({CLASSICAL_TOOLS.length} Free Calculators)</span>
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
            const count = cat === 'All'
              ? CLASSICAL_TOOLS.length
              : CLASSICAL_TOOLS.filter((t) => t.category === cat).length;
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
                <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* OPTION 1: THE CELESTIAL ENGINE DIAL & LIVE INSPECTOR CONSOLE */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
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

                {/* Gliding Brass Reticle Bead - Moves smoothly to active index position */}
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
              <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1" role="tablist" aria-label="Astrology Engines">
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

                      {/* Astronomical Degree Mark */}
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

                    <div className="p-4 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
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
                          <div className="absolute flex flex-col items-center">
                            <span className="font-mono text-sm font-bold">{compatPresets[compatPreset].score}</span>
                            <span className="text-[8px] text-[#827E76]">/ 36</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-xs text-[#181716] dark:text-white">
                            {compatPresets[compatPreset].grade}
                          </div>
                          <div className="text-[11px] text-[#827E76] mt-0.5">
                            {compatPresets[compatPreset].mangal}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 w-full sm:w-auto text-center border-t sm:border-t-0 sm:border-l border-[#EAE6DF] dark:border-white/10 pt-2 sm:pt-0 sm:pl-4">
                        <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-white/5">
                          <div className="text-[9px] text-[#827E76] uppercase">Nadi</div>
                          <div className="font-mono font-bold text-xs text-[#B88E3E]">{compatPresets[compatPreset].nadi}</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-white/5">
                          <div className="text-[9px] text-[#827E76] uppercase">Bhakoot</div>
                          <div className="font-mono font-bold text-xs text-[#B88E3E]">{compatPresets[compatPreset].bhakoot}</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-neutral-50 dark:bg-white/5">
                          <div className="text-[9px] text-[#827E76] uppercase">Maitri</div>
                          <div className="font-mono font-bold text-xs text-[#B88E3E]">{compatPresets[compatPreset].maitri}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 03. BIRTH CHART: Interactive Kendra Bhava Selector */}
                {activeTool.id === 'birth-chart' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Interactive Kendra Bhava Inspector
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        House {activeKendraHouse} / 12
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { num: 1, name: '1st (Lagna)', planet: 'Jupiter' },
                        { num: 4, name: '4th (Sukha)', planet: 'Moon' },
                        { num: 7, name: '7th (Kalatra)', planet: 'Venus' },
                        { num: 10, name: '10th (Karma)', planet: 'Sun (Digbala)' },
                      ].map((h) => (
                        <button
                          key={h.num}
                          type="button"
                          onClick={() => setActiveKendraHouse(h.num)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            activeKendraHouse === h.num
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="block text-[11px]">{h.name}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{h.planet}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {activeKendraHouse === 1 && '1st Bhava: Ascendant in Libra 14° 22\' · Ruled by Venus'}
                          {activeKendraHouse === 4 && '4th Bhava: Capricorn 14° 22\' · Inner Emotional Peace & Maternal Assets'}
                          {activeKendraHouse === 7 && '7th Bhava: Aries 14° 22\' · Partner Manifestation & Legal Contracts'}
                          {activeKendraHouse === 10 && '10th Bhava: Cancer 14° 22\' · Sun in Digbala (Maximum Directional Power)'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Equal-house Parashari calculation verified with high-precision NASA ephemerides.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        Digbala 100%
                      </span>
                    </div>
                  </div>
                )}

                {/* 04. NAVAMSA: Interactive D1 vs D9 Harmonic Switcher */}
                {activeTool.id === 'navamsa' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Harmonic Micro-Division Comparison
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {harmonicTab === 'd9' ? 'D9 Navamsa (3° 20\' Arc)' : 'D1 Rashi (30° Sign)'}
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
                        Natal Rashi (D1 Seed)
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
                        Navamsa Harmonic (D9 Fruit)
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {harmonicTab === 'd9'
                            ? 'Vargottama Jupiter in Cancer D9: Peak Spiritual Dharma & Matrimonial Protection'
                            : 'Jupiter in 9th House D1: Philosophical Aptitude & Academic Honors'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          {harmonicTab === 'd9'
                            ? 'Identical placement in D1 & D9 yields unbreakable resilience after age 30.'
                            : 'Base baseline natal position before applying 9th divisional harmonic multiplier.'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        Vargottama ★
                      </span>
                    </div>
                  </div>
                )}

                {/* 05. DASHA: Interactive 120-Year Vimshottari Timeline Stepper */}
                {activeTool.id === 'dasha' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Interactive Vimshottari Mahadasha Stepper
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {activeDashaGraha} Phase
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { name: 'Rahu', span: '18 Yrs', status: 'Past' },
                        { name: 'Jupiter', span: '16 Yrs', status: 'Active Now' },
                        { name: 'Saturn', span: '19 Yrs', status: 'Next Phase' },
                        { name: 'Mercury', span: '17 Yrs', status: 'Future' },
                      ].map((d) => (
                        <button
                          key={d.name}
                          type="button"
                          onClick={() => setActiveDashaGraha(d.name)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            activeDashaGraha === d.name
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="block text-[11px]">{d.name}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{d.span}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {activeDashaGraha === 'Jupiter' && 'Active Jupiter Mahadasha: Period of intellectual expansion, marriage, and family assets.'}
                          {activeDashaGraha === 'Rahu' && 'Past Rahu Mahadasha: Period of worldly exploration, foreign travel, and intense ambition.'}
                          {activeDashaGraha === 'Saturn' && 'Upcoming Saturn Mahadasha: Period of structured career consolidation and enduring legacy.'}
                          {activeDashaGraha === 'Mercury' && 'Future Mercury Mahadasha: High commercial acumen, advisory authority, and intellectual writing.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Calculated from Moon elapsed degrees in Rohini Janma Nakshatra.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        120-Yr Cycle
                      </span>
                    </div>
                  </div>
                )}

                {/* 06. CAREER: Interactive Dasamsa Vocational Sector Matrix */}
                {activeTool.id === 'career' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Dasamsa (D10) Vocational Affinity
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        Amatyakaraka Alignment
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { id: 'leadership', label: 'Executive Leadership', planet: 'Sun 10th' },
                        { id: 'technology', label: 'Tech & Engineering', planet: 'Mars-Rahu' },
                        { id: 'advisory', label: 'Advisory & Strategy', planet: 'Jupiter-Merc' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setCareerSector(s.id as any)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            careerSector === s.id
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="block text-[11px] truncate">{s.label}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{s.planet}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {careerSector === 'leadership' && 'High Executive Gravitas: Sun in Leo D10 confers corporate authority and independent command.'}
                          {careerSector === 'technology' && 'Technical Innovation: Mars-Mercury aspect indicates computational reasoning and system architecture.'}
                          {careerSector === 'advisory' && 'Strategic Advisory: Jupiter aspecting Midheaven indicates consulting, legal, and financial counsel.'}
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

                {/* 07. CHARA KARAKAS: Interactive AK vs DK Comparator */}
                {activeTool.id === 'darakaraka-atmakaraka' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Jaimini Longitude Degree Inspector
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        {selectedKaraka === 'ak' ? 'Atmakaraka (Highest °)' : 'Darakaraka (Lowest °)'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => setSelectedKaraka('ak')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedKaraka === 'ak'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        Atmakaraka (King of Soul)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedKaraka('dk')}
                        className={`py-2 px-3 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedKaraka === 'dk'
                            ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                            : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                        }`}
                      >
                        Darakaraka (Spouse Mirror)
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {selectedKaraka === 'ak'
                            ? 'Sun at 28° 42\' (Atmakaraka): Soul journey demands transcending personal ego and serving with magnanimity.'
                            : 'Venus at 02° 14\' (Darakaraka): Spouse embodies artistic elegance, empathetic listening, and shared aesthetic taste.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Evaluated by Jaimini 7 Chara Karaka scheme (Rahu/Ketu excluded from longitude ranking).
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        {selectedKaraka === 'ak' ? '28° 42\'' : '02° 14\''}
                      </span>
                    </div>
                  </div>
                )}

                {/* 08. UPAPADA LAGNA: Interactive UL & 2nd House Sustenance */}
                {activeTool.id === 'upapada-lagna' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Upapada Arudha Manifestation
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        12th Bhava Pada
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          Upapada Lagna in Pisces (Meena) with Jupiter in 2nd from UL
                        </span>
                        <span className="text-[11px] text-[#827E76] block mt-1">
                          The 2nd house from Upapada Lagna governs matrimonial food/sustenance. Jupiter’s aspect here ensures enduring emotional and economic stability throughout the marriage.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        High Durability
                      </span>
                    </div>
                  </div>
                )}

                {/* 09. SADE SATI: Interactive 3-Phase Saturn Transit Simulator */}
                {activeTool.id === 'sade-sati' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        7.5-Year Saturn Transit Phase
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        Phase {sadeSatiPhase} / 3
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { phase: 1, name: 'Phase 1: Rising', house: '12th from Moon' },
                        { phase: 2, name: 'Phase 2: Peak', house: 'Over Janma Moon' },
                        { phase: 3, name: 'Phase 3: Setting', house: '2nd from Moon' },
                      ].map((p) => (
                        <button
                          key={p.phase}
                          type="button"
                          onClick={() => setSadeSatiPhase(p.phase)}
                          className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            sadeSatiPhase === p.phase
                              ? 'bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] shadow-xs'
                              : 'bg-white/60 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#827E76]'
                          }`}
                        >
                          <span className="block text-[11px] truncate">{p.name}</span>
                          <span className="block text-[9px] font-normal text-[#827E76] truncate">{p.house}</span>
                        </button>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          {sadeSatiPhase === 1 && 'Phase 1 (Rising): Financial re-evaluation, increased travel, and internal contemplation.'}
                          {sadeSatiPhase === 2 && 'Phase 2 (Peak): Saturn directly transits natal Moon. Deep character discipline and emotional fortitude forged.'}
                          {sadeSatiPhase === 3 && 'Phase 3 (Setting): Financial recovery, family consolidation, and manifestation of long-term career rewards.'}
                        </span>
                        <span className="text-[11px] text-[#827E76]">
                          Moon Ashtakavarga Bindus: 32 (High cushioning against stress).
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        {sadeSatiPhase === 2 ? 'Active Peak' : 'Cushioned'}
                      </span>
                    </div>
                  </div>
                )}

                {/* 10. HORA LAGNA: Wealth & Dhana Yoga Simulator */}
                {activeTool.id === 'hora-lagna' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Special Wealth Ascendant (Hora Lagna)
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        Dhana Yoga Confirmed
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs flex items-center justify-between gap-3">
                      <div>
                        <span className="font-bold text-[#181716] dark:text-white block">
                          Venus acts as Yogada: Aspects both Janma Lagna and Hora Lagna
                        </span>
                        <span className="text-[11px] text-[#827E76] block mt-1">
                          Classical Parashari Dhana Yoga formation conferring prosperity through strategic partnerships, real estate, and creative business ventures.
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] whitespace-nowrap">
                        Yogada 98%
                      </span>
                    </div>
                  </div>
                )}

                {/* 11. PANCHANG: Five Limbs of Time Simulator */}
                {activeTool.id === 'panchang' && (
                  <div className="p-5 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border border-[#EAE6DF] dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE6DF] dark:border-white/10 text-xs">
                      <span className="font-bold text-[#827E76] uppercase tracking-wider text-[10px]">
                        Today’s Sacred Soli-Lunar Muhurta
                      </span>
                      <span className="font-mono text-xs text-[#B88E3E] dark:text-[#E5B869] font-bold">
                        Abhijit Active
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center mb-3">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
                        <div className="text-[9px] text-[#827E76] uppercase font-bold">Tithi</div>
                        <div className="font-cormorant font-bold text-sm text-[#181716] dark:text-white mt-0.5">Shukla Navami</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
                        <div className="text-[9px] text-[#827E76] uppercase font-bold">Nakshatra</div>
                        <div className="font-cormorant font-bold text-sm text-[#B88E3E] dark:text-[#E5B869] mt-0.5">Rohini (Pada 4)</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
                        <div className="text-[9px] text-[#827E76] uppercase font-bold">Abhijit Muhurta</div>
                        <div className="font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400 mt-1">11:48 AM – 12:36 PM</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 12. RASHI: Interactive Sidereal Moon & Nakshatra Orb */}
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

        {/* ======================================================== */}
        {/* EDITORIAL CONTENT: THE 4 TECHNICAL CALCULATION PILLARS */}
        {/* ======================================================== */}
        <div className="pt-12 pb-16 border-t border-[#EAE6DF] dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
              Computational Rigor
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
              The Astronomical Architecture <br />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                Behind Our Classical Engines.
              </span>
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
        {/* TOOLS FAQ ACCORDION: Authentic User Questions Answered */}
        {/* ======================================================== */}
        <div className="pt-12 pb-8 border-t border-[#EAE6DF] dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                Frequently Asked Questions
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
                Vedic Astrology Software & Methodology FAQ
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
              Answers regarding calculations, ayanamsas, dosha cancellations, and computational accuracy.
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

        {/* Explore All Tools Link */}
        <div className="mt-12 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
          <Link
            to="/tools"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Explore All 12 Vedic Calculators in Directory</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
