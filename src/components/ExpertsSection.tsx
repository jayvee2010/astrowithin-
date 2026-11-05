import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState<'3d-carousel' | 'grid'>('3d-carousel');
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const featuredExperts = EXPERTS.slice(0, 6);
  const totalCards = featuredExperts.length;
  const activeExpert = featuredExperts[activeIndex];

  // Rotate carousel by delta (-1 or +1)
  const rotateTo = useCallback((delta: number) => {
    setIsFlipped(false); // Reset flip on rotation
    setActiveIndex((prev) => (prev + delta + totalCards) % totalCards);
  }, [totalCards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== '3d-carousel') return;
      if (e.key === 'ArrowLeft') rotateTo(-1);
      if (e.key === 'ArrowRight') rotateTo(1);
      if (e.key === ' ') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, rotateTo]);

  // PERMANENT AUTO-REVOLVE AT EXACT 2 SECONDS TIME GAP
  useEffect(() => {
    if (viewMode !== '3d-carousel' || isFlipped) return;

    const interval = setInterval(() => {
      rotateTo(1);
    }, 2000);

    return () => clearInterval(interval);
  }, [isFlipped, viewMode, rotateTo]);

  // Touch and mouse drag handlers for seamless swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      rotateTo(diff > 0 ? 1 : -1);
    }
    setDragStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 40) {
      rotateTo(diff > 0 ? 1 : -1);
    }
    setDragStartX(null);
  };

  // Cylindrical 3D positions for the 6 cards based on offset from activeIndex
  const getCardStyle = (index: number) => {
    let offset = (index - activeIndex + totalCards) % totalCards;
    if (offset > totalCards / 2) offset -= totalCards;

    // Center Active Card (facing front)
    if (offset === 0) {
      return {
        transform: 'translate3d(0, 0, 160px) rotateY(0deg) scale(1.04)',
        zIndex: 40,
        opacity: 1,
        pointerEvents: 'auto' as const,
      };
    }

    // Immediate Right Flank
    if (offset === 1) {
      return {
        transform: 'translate3d(310px, 0, 30px) rotateY(-30deg) scale(0.92)',
        zIndex: 25,
        opacity: 0.88,
        pointerEvents: 'auto' as const,
      };
    }

    // Immediate Left Flank
    if (offset === -1) {
      return {
        transform: 'translate3d(-310px, 0, 30px) rotateY(30deg) scale(0.92)',
        zIndex: 25,
        opacity: 0.88,
        pointerEvents: 'auto' as const,
      };
    }

    // Far Right Flank
    if (offset === 2) {
      return {
        transform: 'translate3d(540px, 0, -110px) rotateY(-52deg) scale(0.76)',
        zIndex: 15,
        opacity: 0.45,
        pointerEvents: 'auto' as const,
      };
    }

    // Far Left Flank
    if (offset === -2) {
      return {
        transform: 'translate3d(-540px, 0, -110px) rotateY(52deg) scale(0.76)',
        zIndex: 15,
        opacity: 0.45,
        pointerEvents: 'auto' as const,
      };
    }

    // Back of Cylinder
    return {
      transform: 'translate3d(0, 0, -240px) rotateY(180deg) scale(0.6)',
      zIndex: 5,
      opacity: 0.12,
      pointerEvents: 'none' as const,
    };
  };

  return (
    <section
      id="experts"
      aria-label="Astrowithin Scholars"
      className="relative px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors overflow-hidden"
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

            {/* Interactive View Switcher Pill */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-neutral-100 dark:bg-white/10 border border-[#EAE6DF] dark:border-white/10 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('3d-carousel')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === '3d-carousel'
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
                title="3D Revolving Astrolabe Carousel"
              >
                <span>🪐</span>
                <span>3D Astrolabe Ring</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-[#1A1C20] text-[#181716] dark:text-white shadow-xs font-bold'
                    : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
                title="All 6 Astrologer Cards Grid"
              >
                <span>▤</span>
                <span>All Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1. 3D CYLINDRICAL ASTROLABE CAROUSEL VIEW */}
        {viewMode === '3d-carousel' && (
          <div className="relative w-full mb-12">
            
            {/* Top Status Bar: Auto-Revolving Permanent Indicator */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B88E3E] animate-pulse"></span>
                <span className="font-semibold text-[#181716] dark:text-white">
                  Auto-Revolving (2s) · 0{activeIndex + 1} of 0{totalCards}: {activeExpert.name}
                </span>
              </div>

              <div className="text-[11px] font-mono text-[#827E76]">
                Sidereal Lahiri · 3D Celestial Cylinder
              </div>
            </div>

            {/* 3D ASTROLABE STAGE CONTAINER (Clear vertical hierarchy, zero collision) */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="relative w-full min-h-[760px] sm:min-h-[820px] md:min-h-[860px] flex flex-col items-center justify-between select-none perspective-1200 bg-neutral-50/50 dark:bg-white/[0.02] rounded-3xl border border-[#EAE6DF] dark:border-white/10 pt-8 pb-10 px-4 sm:px-8 cursor-grab active:cursor-grabbing"
            >
              {/* Astrolabe Celestial Brass Meridian Coordinate Rings */}
              <div className="absolute w-[800px] sm:w-[960px] md:w-[1120px] h-[800px] sm:h-[960px] md:h-[1120px] rounded-full border-2 border-dashed border-[#B88E3E]/20 dark:border-[#B88E3E]/25 pointer-events-none transform -rotate-x-[72deg] -translate-z-[80px]" />
              <div className="absolute w-[580px] sm:w-[740px] md:w-[860px] h-[580px] sm:h-[740px] md:h-[860px] rounded-full border border-[#B88E3E]/15 dark:border-[#B88E3E]/20 pointer-events-none transform -rotate-x-[72deg] -translate-z-[40px]" />
              <div className="absolute bottom-28 w-3/4 max-w-2xl h-14 bg-black/10 dark:bg-black/40 blur-2xl rounded-full pointer-events-none" />

              {/* CARD TRACK: Generous height (580px - 620px) ensuring cards never leak out of the bottom */}
              <div className="relative w-full h-[580px] sm:h-[620px] flex items-center justify-center preserve-3d scale-[0.84] xs:scale-[0.90] sm:scale-95 md:scale-100 transition-transform duration-300">
                {featuredExperts.map((expert, index) => {
                  const style = getCardStyle(index);
                  const isCenter = index === activeIndex;

                  return (
                    <div
                      key={expert.id}
                      onClick={() => {
                        if (!isCenter) {
                          let delta = (index - activeIndex + totalCards) % totalCards;
                          if (delta > totalCards / 2) delta -= totalCards;
                          rotateTo(delta);
                        }
                      }}
                      style={style}
                      className={`absolute w-[280px] sm:w-[320px] md:w-[350px] h-[480px] sm:h-[520px] rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] preserve-3d ${
                        isCenter
                          ? 'cursor-pointer shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_28px_60px_rgba(0,0,0,0.7)]'
                          : 'cursor-pointer shadow-md hover:opacity-100'
                      }`}
                    >
                      {/* CARD FLIP INNER CONTAINER */}
                      <div
                        style={{
                          transform: isCenter && isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        }}
                        className="relative w-full h-full rounded-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] preserve-3d"
                      >
                        {/* ======================================================== */}
                        {/* CARD FRONT FACE: Framed Portrait & Core Profile           */}
                        {/* ======================================================== */}
                        <div
                          style={{ backfaceVisibility: 'hidden' }}
                          className={`absolute inset-0 rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#1A1C20] border-2 flex flex-col justify-between backface-hidden ${
                            isCenter
                              ? 'border-[#B88E3E] dark:border-[#E5B869]'
                              : 'border-[#EAE6DF] dark:border-white/10'
                          }`}
                        >
                          {/* Card Header & Experience Badge */}
                          <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] dark:border-white/10">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#B88E3E] dark:text-[#E5B869]">
                                0{index + 1}
                              </span>
                              <span className="text-[11px] text-[#827E76] font-sans uppercase tracking-wider font-semibold">
                                · {expert.city.split(',')[0]}
                              </span>
                            </div>

                            <div className="px-3 py-1 rounded-full bg-[#B88E3E]/10 dark:bg-[#E5B869]/10 text-[10px] font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/20">
                              {expert.experience}
                            </div>
                          </div>

                          {/* Framed Archival Portrait - Perfectly Fitted (No Cutoffs) */}
                          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-[#EAE6DF] dark:border-white/10 my-3">
                            <img
                              src={expert.avatar}
                              alt={expert.name}
                              className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0"
                              loading="lazy"
                            />
                            {/* Gold Star Astrowithin Seal Watermark */}
                            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/95 dark:bg-[#1A1C20]/95 backdrop-blur-md flex items-center justify-center border border-[#EAE6DF] dark:border-white/10 shadow-xs text-[#B88E3E] dark:text-[#E5B869]">
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                              </svg>
                            </div>
                          </div>

                          {/* Astrologer Identity */}
                          <div className="flex flex-col">
                            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight mb-1 line-clamp-1">
                              {expert.name}
                            </h3>

                            <span className="text-xs sm:text-sm italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] block mb-1 line-clamp-1">
                              {expert.specialty}
                            </span>

                            <p className="text-xs text-[#827E76] font-normal leading-relaxed line-clamp-2">
                              {expert.bio}
                            </p>
                          </div>

                          {/* Primary Consultation Action Button inside Card */}
                          <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10">
                            {isCenter ? (
                              <Link
                                to={`/experts/${expert.id}`}
                                className="w-full py-3 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-xs uppercase tracking-wider font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>Book Lineage Consultation</span>
                                <span>→</span>
                              </Link>
                            ) : (
                              <div className="text-center text-xs font-mono text-[#827E76] uppercase py-1">
                                Click to Rotate to Center
                              </div>
                            )}
                          </div>
                        </div>

                        {/* ======================================================== */}
                        {/* CARD REVERSE FACE: Methodology, Schedule & Booking CTA   */}
                        {/* ======================================================== */}
                        <div
                          style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                          className="absolute inset-0 rounded-3xl p-6 sm:p-7 bg-[#FAF8F5] dark:bg-[#151619] border-2 border-[#B88E3E] dark:border-[#E5B869] flex flex-col justify-between backface-hidden shadow-2xl"
                        >
                          {/* Reverse Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] dark:border-white/10">
                            <div>
                              <div className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869]">
                                Verified Lineage Dossier
                              </div>
                              <h4 className="font-cormorant text-2xl font-bold leading-tight">
                                {expert.name}
                              </h4>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(false);
                              }}
                              className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-white/10 flex items-center justify-center text-xs text-[#181716] dark:text-white hover:bg-[#B88E3E] hover:text-white transition-colors"
                              title="Flip back to portrait"
                            >
                              ✕
                            </button>
                          </div>

                          {/* Lineage & Methodologies */}
                          <div className="my-2 space-y-3 text-left">
                            <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                              <div className="text-[10px] text-[#827E76] uppercase font-semibold">
                                Accredited Lineage
                              </div>
                              <div className="text-xs font-semibold text-[#181716] dark:text-white line-clamp-1 mt-0.5">
                                {expert.lineage}
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                              <div className="text-[10px] text-[#827E76] uppercase font-semibold">
                                Core Astrological Systems
                              </div>
                              <div className="text-xs font-medium text-[#5A5650] dark:text-[#A09D94] space-y-1.5 mt-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-[#B88E3E]">✦</span>
                                  <span>Navamsa (D9) Chart Rectification</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#B88E3E]">✦</span>
                                  <span>Vimshottari Dasha Karmic Timing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#B88E3E]">✦</span>
                                  <span>Ashtakoota 36 Guna Milan & Kuja Dosha</span>
                                </div>
                              </div>
                            </div>

                            {/* Booking Schedule / Next Slot */}
                            <div className="flex items-center justify-between p-3 rounded-xl bg-[#B88E3E]/10 dark:bg-[#E5B869]/10 text-xs">
                              <span className="font-medium text-[#827E76]">Next Available Slot:</span>
                              <span className="font-bold text-[#B88E3E] dark:text-[#E5B869]">Today, 4:30 PM IST</span>
                            </div>
                          </div>

                          {/* Direct Consultation Action Button */}
                          <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10">
                            <Link
                              to={`/experts/${expert.id}`}
                              className="w-full py-3 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-xs uppercase tracking-wider font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Book Lineage Consultation</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Orbital Navigation Controls (Left & Right Brass Buttons) */}
              <button
                type="button"
                onClick={() => rotateTo(-1)}
                className="absolute left-3 sm:left-6 md:left-8 top-[38%] -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-[#1A1C20]/95 backdrop-blur-md border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center text-sm font-bold text-[#181716] dark:text-white hover:border-[#B88E3E] hover:text-[#B88E3E] shadow-xl transition-all z-50 hover:scale-110 active:scale-95"
                aria-label="Previous Astrologer"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => rotateTo(1)}
                className="absolute right-3 sm:right-6 md:right-8 top-[38%] -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-[#1A1C20]/95 backdrop-blur-md border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center text-sm font-bold text-[#181716] dark:text-white hover:border-[#B88E3E] hover:text-[#B88E3E] shadow-xl transition-all z-50 hover:scale-110 active:scale-95"
                aria-label="Next Astrologer"
              >
                →
              </button>

              {/* DEDICATED FLIP BUTTON & DOTS: PLACED WELL BELOW THE CARDS WITH ZERO OVERLAP */}
              <div className="relative z-50 w-full flex flex-col items-center justify-center pt-8 border-t border-[#EAE6DF]/60 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setIsFlipped((prev) => !prev)}
                  className="px-7 py-3 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Flip the card to inspect methodology and booking availability"
                >
                  <span className="text-sm font-bold">⟲</span>
                  <span>{isFlipped ? 'Flip Back to Portrait' : 'Flip Card · View Methodology & Schedule'}</span>
                </button>

                {/* Astrolabe Circular Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {featuredExperts.map((exp, idx) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => {
                        let delta = (idx - activeIndex + totalCards) % totalCards;
                        if (delta > totalCards / 2) delta -= totalCards;
                        rotateTo(delta);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        idx === activeIndex
                          ? 'w-8 h-2 bg-[#B88E3E] dark:bg-[#E5B869]'
                          : 'w-2 h-2 bg-[#EAE6DF] dark:bg-white/20 hover:bg-[#B88E3E]/50'
                      }`}
                      aria-label={`Jump to ${exp.name}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. ALL CARDS GRID VIEW (Accessible & Alternative View) */}
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