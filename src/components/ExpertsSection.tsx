import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS, Expert } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [manualMode, setManualMode] = useState<'scroll' | 'grid' | 'pyramid'>('scroll');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // We feature 6 astrologers in the House of Cards & 3-column reading grid
  const featuredExperts = EXPERTS.slice(0, 6);

  // Track scroll position through the section track
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section starts driving when its top enters the upper half of the viewport
      const startOffset = windowHeight * 0.7;
      const totalDistance = rect.height - windowHeight * 0.4;

      if (totalDistance <= 0) return;

      const current = startOffset - rect.top;
      const progress = Math.max(0, Math.min(1, current / totalDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate how many cards have dropped onto the screen (0 to 6)
  const getDroppedCount = (): number => {
    if (manualMode === 'grid') return 6;
    if (manualMode === 'pyramid') return 0;
    // Sequential drop milestones as user scrolls down:
    if (scrollProgress < 0.12) return 0;
    if (scrollProgress < 0.26) return 1;
    if (scrollProgress < 0.40) return 2;
    if (scrollProgress < 0.54) return 3;
    if (scrollProgress < 0.68) return 4;
    if (scrollProgress < 0.82) return 5;
    return 6;
  };

  const droppedCount = getDroppedCount();

  // House of Cards Pyramid Coordinates for the 6 cards (modeled after the uploaded reference)
  // Tier 3 (Apex): Cards 0 & 1 leaning against each other (/\)
  // Tier 2 (Middle): Cards 2 & 3 leaning below apex (/\)
  // Tier 1 (Base): Cards 4 & 5 forming the wide foundation (/\)
  const pyramidTransforms = [
    {
      // Card 0: Apex Left (leans right towards partner)
      rotate: 'rotate-[26deg]',
      x: '-translate-x-[42px] sm:-translate-x-[52px]',
      y: '-translate-y-[130px] sm:-translate-y-[150px]',
      zIndex: 35,
      side: 'left',
      tier: 'Peak Apex',
    },
    {
      // Card 1: Apex Right (leans left towards partner)
      rotate: '-rotate-[26deg]',
      x: 'translate-x-[42px] sm:translate-x-[52px]',
      y: '-translate-y-[130px] sm:-translate-y-[150px]',
      zIndex: 34,
      side: 'right',
      tier: 'Peak Apex',
    },
    {
      // Card 2: Middle Tier Left
      rotate: 'rotate-[26deg]',
      x: '-translate-x-[150px] sm:-translate-x-[185px]',
      y: '-translate-y-[10px] sm:-translate-y-[15px]',
      zIndex: 25,
      side: 'left',
      tier: 'Middle Tier',
    },
    {
      // Card 3: Middle Tier Right
      rotate: '-rotate-[26deg]',
      x: 'translate-x-[150px] sm:translate-x-[185px]',
      y: '-translate-y-[10px] sm:-translate-y-[15px]',
      zIndex: 24,
      side: 'right',
      tier: 'Middle Tier',
    },
    {
      // Card 4: Base Foundation Left
      rotate: 'rotate-[26deg]',
      x: '-translate-x-[260px] sm:-translate-x-[320px]',
      y: 'translate-y-[110px] sm:translate-y-[125px]',
      zIndex: 15,
      side: 'left',
      tier: 'Base Foundation',
    },
    {
      // Card 5: Base Foundation Right
      rotate: '-rotate-[26deg]',
      x: 'translate-x-[260px] sm:translate-x-[320px]',
      y: 'translate-y-[110px] sm:translate-y-[125px]',
      zIndex: 14,
      side: 'right',
      tier: 'Base Foundation',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experts"
      aria-label="Astrowithin Scholars"
      className="relative px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Vaya Headline & Pacing */}
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

            {/* Interactive Control Pill: Toggle or reset House of Cards */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 dark:bg-white/10 border border-[#EAE6DF] dark:border-white/10 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setManualMode('pyramid')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  droppedCount === 0
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
                title="Assemble cards in pyramid"
              >
                <span>🂠</span>
                <span>House of Cards</span>
              </button>

              <button
                type="button"
                onClick={() => setManualMode('grid')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  droppedCount === 6
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
                title="Drop all cards into reading grid"
              >
                <span>▤</span>
                <span>Deal All Cards</span>
              </button>

              {manualMode !== 'scroll' && (
                <button
                  type="button"
                  onClick={() => setManualMode('scroll')}
                  className="px-2.5 py-1 text-[11px] text-[#B88E3E] dark:text-[#E5B869] underline font-medium hover:opacity-80"
                  title="Return to scroll tracking"
                >
                  Sync Scroll
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Status Prompt & Progress Rail */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B88E3E] animate-pulse"></span>
            <span>
              {droppedCount === 0
                ? 'House of Cards Standing · Slowly scroll down to drop each card onto the screen'
                : droppedCount === 6
                ? 'All 6 Astrologer Cards Dealt & Ready to Read'
                : `Dropping cards one by one (${droppedCount} of 6 dealt onto screen)`}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px]">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                  i < droppedCount
                    ? 'bg-[#B88E3E] dark:bg-[#E5B869]'
                    : 'bg-[#EAE6DF] dark:bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 1. THE HOUSE OF CARDS PYRAMID (Visible when cards remain in the pyramid) */}
        {droppedCount < 6 && (
          <div className="relative w-full h-[460px] sm:h-[520px] mb-12 flex items-center justify-center perspective-1200 overflow-hidden select-none">
            {/* Ambient floor shadow */}
            <div className="absolute bottom-6 w-3/4 max-w-2xl h-12 bg-black/10 dark:bg-black/40 blur-2xl rounded-full pointer-events-none" />

            {/* Pyramid Cards Assembly */}
            <div className="relative w-full h-full flex items-center justify-center scale-[0.62] xs:scale-[0.72] sm:scale-[0.88] md:scale-100 origin-center transition-transform duration-300">
              {featuredExperts.map((expert, index) => {
                const config = pyramidTransforms[index];
                const isDropped = index < droppedCount;

                // When dropped, the card tumbles downward out of the pyramid
                return (
                  <div
                    key={expert.id}
                    onClick={() => {
                      // Clicking any card in the pyramid drops it into the reading grid
                      setManualMode('scroll');
                    }}
                    onMouseEnter={() => setHoveredCard(expert.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ zIndex: isDropped ? 5 : config.zIndex }}
                    className={`absolute w-[200px] sm:w-[240px] md:w-[260px] h-[300px] sm:h-[350px] md:h-[370px] rounded-2xl p-3.5 sm:p-4 bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/15 transition-all duration-700 ease-[cubic-bezier(0.34,1.4,0.64,1)] cursor-pointer flex flex-col justify-between ${
                      config.x
                    } ${config.y} ${
                      isDropped
                        ? 'translate-y-[400px] opacity-0 scale-75 pointer-events-none rotate-0'
                        : `${config.rotate} shadow-[0_18px_38px_rgba(0,0,0,0.14)] dark:shadow-[0_22px_45px_rgba(0,0,0,0.6)] hover:scale-105 hover:shadow-2xl hover:border-[#B88E3E]`
                    }`}
                  >
                    {/* Playing Card Top Header / Suit / Rank */}
                    <div className="flex items-center justify-between pb-2 border-b border-[#EAE6DF] dark:border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold text-[#B88E3E] dark:text-[#E5B869] tracking-wider uppercase">
                          {expert.experience.split(' ')[0]} EXP
                        </span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#B88E3E]/10 dark:bg-[#E5B869]/10 flex items-center justify-center text-[#B88E3E] dark:text-[#E5B869]">
                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Framed Astrologer Portrait - Perfectly Fitted */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-[#EAE6DF] dark:border-white/10 my-2">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-1.5 left-2 text-[9px] font-sans font-bold text-white uppercase tracking-wider">
                        {expert.city.split(',')[0]}
                      </div>
                    </div>

                    {/* Scholar Identity on Card */}
                    <div className="flex flex-col">
                      <h4 className="font-cormorant text-base sm:text-lg font-bold tracking-tight leading-tight line-clamp-1">
                        {expert.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] line-clamp-1 mb-1">
                        {expert.specialty}
                      </p>
                      <div className="pt-1.5 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-[9px] font-mono text-[#827E76] uppercase">
                        <span>{config.tier}</span>
                        <span className="text-[#B88E3E]">Card 0{index + 1}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. THE READING GRID: CARDS DROP DOWN ONTO THE SCREEN ONE BY ONE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperts.map((expert, index) => {
            const isDropped = index < droppedCount;

            // When a card has dropped, it renders in full readable glory
            if (!isDropped) {
              // Placeholder slot while card is still up in the house of cards
              return (
                <div
                  key={expert.id}
                  className="rounded-3xl border-2 border-dashed border-[#EAE6DF] dark:border-white/10 p-8 min-h-[460px] flex flex-col items-center justify-center text-center text-[#827E76] bg-neutral-50/50 dark:bg-white/[0.02] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center mb-4 text-[#B88E3E] dark:text-[#E5B869] font-mono font-bold text-sm">
                    0{index + 1}
                  </div>
                  <h4 className="font-cormorant text-xl font-bold mb-1 opacity-70">
                    {expert.name}
                  </h4>
                  <p className="text-xs text-[#827E76] max-w-xs mb-4">
                    Positioned in House of Cards ({pyramidTransforms[index].tier})
                  </p>
                  <span className="text-[11px] uppercase tracking-widest font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    ↓ Scroll to drop onto screen
                  </span>
                </div>
              );
            }

            // Card has dropped: Full, readable, exquisitely framed presentation
            return (
              <article 
                key={expert.id} 
                className="bg-white dark:bg-[#1A1C20] rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:border-[#B88E3E]/40 transition-all duration-300 animate-card-drop"
              >
                {/* Playing Card Header Indices */}
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

                {/* Framed Archival Portrait - Fits the Card Properly */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/80 border border-[#EAE6DF] dark:border-white/10 mb-6 group-hover:border-[#B88E3E]/40 transition-colors">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Verified Astrowithin Scholar Watermark */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 dark:bg-[#1A1C20]/95 backdrop-blur-md flex items-center justify-center border border-[#EAE6DF] dark:border-white/10 shadow-xs text-[#B88E3E] dark:text-[#E5B869]">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                      <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                    </svg>
                  </div>
                </div>

                {/* Card Content & Readable Information */}
                <div className="flex flex-col flex-1">
                  {/* Scholar Name */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight mb-1 group-hover:text-[#B88E3E] transition-colors">
                    {expert.name}
                  </h3>

                  {/* Specialty */}
                  <span className="text-sm italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                    {expert.specialty}
                  </span>

                  {/* Lineage Accreditation */}
                  <span className="text-xs text-[#827E76] font-medium block mb-4 border-b border-[#EAE6DF] dark:border-white/10 pb-3">
                    Lineage: {expert.lineage}
                  </span>

                  {/* Full Readable Bio */}
                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6 flex-1">
                    {expert.bio}
                  </p>

                  {/* Action Link */}
                  <Link
                    to={`/experts/${expert.id}`}
                    className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] transition-colors flex items-center justify-between pt-4 border-t border-[#EAE6DF] dark:border-white/10 mt-auto"
                  >
                    <span>View Consultation Profile</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Practitioners Link */}
        <div className="mt-16 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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