import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const [activeExpertIndex, setActiveExpertIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d-fan' | 'grid'>('3d-fan');
  const featuredExperts = EXPERTS.slice(0, 6);

  const activeExpert = featuredExperts[activeExpertIndex];

  // 3D Tarot Fan Spreads for the 6 Astrologer Cards
  const fanAngles = [-18, -10, -2, 6, 14, 22];
  const fanTranslatesX = [-180, -110, -35, 40, 115, 190];
  const fanTranslatesY = [25, 8, 0, 4, 16, 32];

  return (
    <section
      id="experts"
      aria-label="Astrowithin Scholars"
      className="relative px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>01 · Lineage Astrologers</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Understand your <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                married life.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
            <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm leading-relaxed">
              Vetted scholars with decades of lineage-based practice in Parashari Hora and Jaimini synastry.
            </p>

            {/* Interactive Mode Toggle */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 dark:bg-white/10 border border-[#EAE6DF] dark:border-white/10 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('3d-fan')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === '3d-fan'
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                <span>🂠</span>
                <span>3D Tarot Deck</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                <span>▤</span>
                <span>All Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: 3D TAROT DECK FAN & SPOTLIGHT STAGE */}
        {viewMode === '3d-fan' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            {/* Left Column: 3D Interactive Fan of Dealt Cards */}
            <div className="lg:col-span-6 relative h-[440px] sm:h-[480px] flex items-center justify-center perspective-1200 overflow-hidden select-none bg-neutral-50/60 dark:bg-white/[0.02] rounded-3xl border border-[#EAE6DF] dark:border-white/10 p-6">
              <div className="text-center absolute top-4 left-6 text-xs text-[#827E76] uppercase tracking-wider font-semibold">
                Click any card to inspect scholar · 0{activeExpertIndex + 1} of 06
              </div>

              {/* The Fan Spread */}
              <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
                {featuredExperts.map((expert, idx) => {
                  const isActive = idx === activeExpertIndex;
                  const rot = fanAngles[idx];
                  const tx = fanTranslatesX[idx];
                  const ty = fanTranslatesY[idx];

                  return (
                    <button
                      key={expert.id}
                      type="button"
                      onClick={() => setActiveExpertIndex(idx)}
                      style={{
                        transform: isActive
                          ? 'translate3d(0, -30px, 60px) rotate(0deg) scale(1.08)'
                          : `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(0.96)`,
                        zIndex: isActive ? 40 : 10 + idx,
                      }}
                      className={`absolute w-[180px] sm:w-[210px] h-[280px] sm:h-[320px] rounded-2xl p-3 bg-white dark:bg-[#1A1C20] border-2 transition-all duration-500 text-left flex flex-col justify-between ${
                        isActive
                          ? 'border-[#B88E3E] shadow-[0_25px_50px_rgba(184,142,62,0.25)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.8)]'
                          : 'border-[#EAE6DF] dark:border-white/15 opacity-85 hover:opacity-100 hover:scale-100 hover:border-[#B88E3E]/60 shadow-lg'
                      }`}
                    >
                      {/* Card Rank Header */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-[#EAE6DF] dark:border-white/10 text-[10px] font-mono">
                        <span className="font-bold text-[#B88E3E]">0{idx + 1}</span>
                        <span className="text-[#827E76] uppercase tracking-wider">{expert.experience.split(' ')[0]} EXP</span>
                      </div>

                      {/* Framed Image */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 my-1.5 border border-[#EAE6DF] dark:border-white/10">
                        <img
                          src={expert.avatar}
                          alt={expert.name}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Footer Identity */}
                      <div>
                        <h4 className="font-cormorant text-base font-bold line-clamp-1">
                          {expert.name}
                        </h4>
                        <p className="text-[10px] text-[#B88E3E] italic font-cormorant line-clamp-1">
                          {expert.specialty}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next controls */}
              <div className="absolute bottom-4 right-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveExpertIndex((prev) => (prev > 0 ? prev - 1 : featuredExperts.length - 1))}
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center text-xs hover:border-[#B88E3E] transition-colors shadow-xs"
                  aria-label="Previous scholar"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActiveExpertIndex((prev) => (prev < featuredExperts.length - 1 ? prev + 1 : 0))}
                  className="w-9 h-9 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center text-xs hover:border-[#B88E3E] transition-colors shadow-xs"
                  aria-label="Next scholar"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Column: Active Card Detail & Readable Profile */}
            <div className="lg:col-span-6 bg-white dark:bg-[#1A1C20] rounded-3xl p-8 sm:p-10 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col transition-all duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE6DF] dark:border-white/10 mb-6">
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E]">
                    Selected Lineage Scholar · 0{activeExpertIndex + 1}
                  </span>
                  <div className="text-xs text-[#827E76] font-medium mt-0.5">
                    {activeExpert.city}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] text-xs font-bold uppercase tracking-wider">
                  {activeExpert.experience} Experience
                </span>
              </div>

              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                {activeExpert.name}
              </h3>

              <div className="text-base italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] mb-4">
                {activeExpert.specialty}
              </div>

              <div className="text-xs text-[#827E76] font-medium pb-4 border-b border-[#EAE6DF] dark:border-white/10 mb-6">
                Accredited Lineage: <span className="text-[#181716] dark:text-white font-semibold">{activeExpert.lineage}</span>
              </div>

              <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-8">
                {activeExpert.bio}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#EAE6DF] dark:border-white/10 mt-auto">
                <Link
                  to={`/experts/${activeExpert.id}`}
                  className="px-6 py-3 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-xs uppercase tracking-wider font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  Book Lineage Consultation →
                </Link>

                <div className="text-xs text-[#827E76]">
                  Verified Parashari Jyotish Parampara
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FULL 3-COLUMN READING GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredExperts.map((expert, index) => (
              <article 
                key={expert.id} 
                className="bg-white dark:bg-[#1A1C20] rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:border-[#B88E3E]/40 transition-all duration-300"
              >
                {/* Header Indices */}
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#EAE6DF] dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#B88E3E] dark:text-[#E5B869]">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] text-[#827E76] font-sans uppercase tracking-wider font-semibold">
                      · {expert.city}
                    </span>
                  </div>

                  <div className="px-2.5 py-0.5 rounded-full bg-[#B88E3E]/10 dark:bg-[#E5B869]/10 text-[10px] font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/20">
                    {expert.experience}
                  </div>
                </div>

                {/* Framed Archival Portrait - Perfectly Fitted */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/80 border border-[#EAE6DF] dark:border-white/10 mb-6 group-hover:border-[#B88E3E]/40 transition-colors">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 dark:bg-[#1A1C20]/95 backdrop-blur-md flex items-center justify-center border border-[#EAE6DF] dark:border-white/10 shadow-xs text-[#B88E3E] dark:text-[#E5B869]">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                      <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight mb-1 group-hover:text-[#B88E3E] transition-colors">
                    {expert.name}
                  </h3>

                  <span className="text-sm italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                    {expert.specialty}
                  </span>

                  <span className="text-xs text-[#827E76] font-medium block mb-4 border-b border-[#EAE6DF] dark:border-white/10 pb-3">
                    Lineage: {expert.lineage}
                  </span>

                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6 flex-1">
                    {expert.bio}
                  </p>

                  <Link
                    to={`/experts/${expert.id}`}
                    className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] transition-colors flex items-center justify-between pt-4 border-t border-[#EAE6DF] dark:border-white/10 mt-auto"
                  >
                    <span>View Consultation Profile</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View All Practitioners Link */}
        <div className="mt-8 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#827E76]">
            Showing 6 of {EXPERTS.length} Classical Parashari Astrologers
          </div>

          <Link
            to="/experts"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold hover:text-[#B88E3E] transition-colors opacity-80 hover:opacity-100"
          >
            <span>View All Lineage Astrologers ({EXPERTS.length})</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};