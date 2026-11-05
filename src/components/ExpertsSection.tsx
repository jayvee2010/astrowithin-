import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const featuredExperts = EXPERTS.slice(0, 6);
  const totalCards = featuredExperts.length;
  const activeExpert = featuredExperts[activeIndex];

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Core scheduler: Auto-revolves at 2s by default, or waits 4s when user interacts with a card
  const scheduleNextRotation = useCallback((delayMs: number = 2000) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setTimeout(() => {
      setIsFlipped(false);
      setActiveIndex((prev) => (prev + 1) % totalCards);
      // Once moved to next card, resume standard 2-second auto-revolve
      scheduleNextRotation(2000);
    }, delayMs);
  }, [totalCards]);

  // Start auto-revolve on mount and handle pause on flip
  useEffect(() => {
    if (isFlipped) {
      // Pause completely while user is reading the reverse-side methodology
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Start / resume auto-revolving
    scheduleNextRotation(2000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isFlipped, scheduleNextRotation]);

  // When user clicks a specific card: Hold on that card for 4 full seconds!
  const selectCardWithHold = useCallback((newIndex: number) => {
    setIsFlipped(false);
    setActiveIndex(newIndex);
    // User interacted: Stay on this card for 4 seconds before moving to the next one!
    scheduleNextRotation(4000);
  }, [scheduleNextRotation]);

  const rotateTo = useCallback((delta: number) => {
    const nextIdx = (activeIndex + delta + totalCards) % totalCards;
    selectCardWithHold(nextIdx);
  }, [activeIndex, totalCards, selectCardWithHold]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') rotateTo(-1);
      if (e.key === 'ArrowRight') rotateTo(1);
      if (e.key === ' ') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotateTo]);

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

  // Cylindrical 3D positions for the 6 cards based on offset from activeIndex (Scaled up for commanding presence)
  const getCardStyle = (index: number) => {
    let offset = (index - activeIndex + totalCards) % totalCards;
    if (offset > totalCards / 2) offset -= totalCards;

    // Center Active Card (facing front)
    if (offset === 0) {
      return {
        transform: 'translate3d(0, 0, 180px) rotateY(0deg) scale(1.05)',
        zIndex: 40,
        opacity: 1,
        pointerEvents: 'auto' as const,
      };
    }

    // Immediate Right Flank
    if (offset === 1) {
      return {
        transform: 'translate3d(370px, 0, 40px) rotateY(-26deg) scale(0.92)',
        zIndex: 25,
        opacity: 0.9,
        pointerEvents: 'auto' as const,
      };
    }

    // Immediate Left Flank
    if (offset === -1) {
      return {
        transform: 'translate3d(-370px, 0, 40px) rotateY(26deg) scale(0.92)',
        zIndex: 25,
        opacity: 0.9,
        pointerEvents: 'auto' as const,
      };
    }

    // Far Right Flank
    if (offset === 2) {
      return {
        transform: 'translate3d(640px, 0, -100px) rotateY(-46deg) scale(0.78)',
        zIndex: 15,
        opacity: 0.5,
        pointerEvents: 'auto' as const,
      };
    }

    // Far Left Flank
    if (offset === -2) {
      return {
        transform: 'translate3d(-640px, 0, -100px) rotateY(46deg) scale(0.78)',
        zIndex: 15,
        opacity: 0.5,
        pointerEvents: 'auto' as const,
      };
    }

    // Back of Cylinder
    return {
      transform: 'translate3d(0, 0, -260px) rotateY(180deg) scale(0.60)',
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
        
        {/* Section Header: Clean Editorial Headline & Pacing */}
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

          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm leading-relaxed">
            Vetted scholars with decades of lineage-based practice in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* 3D CYLINDRICAL ASTROLABE CAROUSEL VIEW */}
        <div className="relative w-full mb-8">
          
          {/* 3D ASTROLABE STAGE CONTAINER (Enlarged with generous height, zero overlap) */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="relative w-full min-h-[860px] sm:min-h-[920px] md:min-h-[960px] flex flex-col items-center justify-between select-none perspective-1200 bg-neutral-50/50 dark:bg-white/[0.02] rounded-3xl border border-[#EAE6DF] dark:border-white/10 pt-10 pb-12 px-4 sm:px-8 cursor-grab active:cursor-grabbing overflow-hidden"
          >
            {/* Astrolabe Celestial Brass Meridian Coordinate Rings */}
            <div className="absolute w-[920px] sm:w-[1120px] md:w-[1280px] h-[920px] sm:h-[1120px] md:h-[1280px] rounded-full border-2 border-dashed border-[#B88E3E]/20 dark:border-[#B88E3E]/25 pointer-events-none transform -rotate-x-[72deg] -translate-z-[80px]" />
            <div className="absolute w-[700px] sm:w-[880px] md:w-[1000px] h-[700px] sm:h-[880px] md:h-[1000px] rounded-full border border-[#B88E3E]/15 dark:border-[#B88E3E]/20 pointer-events-none transform -rotate-x-[72deg] -translate-z-[40px]" />
            <div className="absolute bottom-32 w-3/4 max-w-2xl h-16 bg-black/10 dark:bg-black/40 blur-2xl rounded-full pointer-events-none" />

            {/* CARD TRACK: Scaled up to 640px - 700px height ensuring enlarged cards fit with room to spare */}
            <div className="relative w-full h-[640px] sm:h-[680px] md:h-[700px] flex items-center justify-center preserve-3d scale-[0.88] xs:scale-[0.92] sm:scale-95 md:scale-100 transition-transform duration-300">
              {featuredExperts.map((expert, index) => {
                const style = getCardStyle(index);
                const isCenter = index === activeIndex;

                return (
                  <div
                    key={expert.id}
                    onClick={() => {
                      if (!isCenter) {
                        selectCardWithHold(index);
                      }
                    }}
                    style={style}
                    className={`absolute w-[320px] sm:w-[370px] md:w-[400px] h-[540px] sm:h-[580px] rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] preserve-3d ${
                      isCenter
                        ? 'cursor-pointer shadow-[0_26px_56px_rgba(0,0,0,0.13)] dark:shadow-[0_30px_65px_rgba(0,0,0,0.7)]'
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

                          <span className="text-xs sm:text-sm italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] block mb-1.5 line-clamp-1">
                            {expert.specialty}
                          </span>

                          <p className="text-xs text-[#827E76] font-normal leading-relaxed line-clamp-2">
                            {expert.bio}
                          </p>
                        </div>

                        {/* White & Gold Consultation Button (Compact, Fits inside Box) */}
                        <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
                          {isCenter ? (
                            <Link
                              to={`/experts/${expert.id}`}
                              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Book Consultation</span>
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
                        <div className="my-2 space-y-2.5 text-left">
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
                            <div className="text-xs font-medium text-[#5A5650] dark:text-[#A09D94] space-y-1.5 mt-1">
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

                        {/* White & Gold Consultation Button (Compact, Fits inside Box) */}
                        <div className="pt-3 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
                          <Link
                            to={`/experts/${expert.id}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Book Consultation</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* DEDICATED FLIP BUTTON & DOTS: POSITIONED FULLY BELOW WITH AMPLE CLEARANCE */}
            <div className="relative z-50 w-full flex flex-col items-center justify-center mt-12 sm:mt-16 pt-6 border-t border-[#EAE6DF]/60 dark:border-white/10">
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
                    onClick={() => selectCardWithHold(idx)}
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