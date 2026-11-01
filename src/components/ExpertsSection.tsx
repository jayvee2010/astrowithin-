import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS, Expert } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeExpert: Expert = EXPERTS[selectedIndex] || EXPERTS[0];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % EXPERTS.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + EXPERTS.length) % EXPERTS.length);
  };

  return (
    <section
      id="experts"
      aria-label="Sacral Chakra - Experts"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Svadhisthana Sacral Glow in Ember Glow & Solar Flare */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#F4A883]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4A883]/15 border border-[#F4A883]/30 text-[#F4A883] text-xs font-serif uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4A883]" />
            <span>Svadhisthana · Sacral Resonance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F6ECDD] dark:text-[#F6ECDD] light:text-[#1E293B]">
            Understand your <span className="text-gold-leaf italic font-serif">married life</span>
          </h2>
          <p className="mt-4 text-[#F6ECDD]/80 dark:text-[#F6ECDD]/80 light:text-[#475368] max-w-xl mx-auto text-sm sm:text-base font-light">
            Vetted scholars with decades of lineage-based practice in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* Orbit of Experts */}
        <div className="relative py-10 flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* Orbital Celestial Dial */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center select-none">
            
            <div className="absolute inset-0 rounded-full border border-[#CFAF83]/30 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-[#E07A2E]/25 border-dashed pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-[#9D886B]/20 pointer-events-none" />

            {/* Central Sun in Solar Flare & Golden Ochre */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E07A2E] via-[#F4A883] to-[#CFAF83] flex items-center justify-center shadow-[0_0_30px_rgba(224,122,46,0.5)] border border-[#F6ECDD]/40">
              <span className="font-serif text-[#120E18] font-bold text-xs uppercase tracking-wider text-center">
                JYOTISH<br/>ORBIT
              </span>
            </div>

            {EXPERTS.map((expert, idx) => {
              const angle = (idx / EXPERTS.length) * (2 * Math.PI) - Math.PI / 2;
              const radius = 135;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = selectedIndex === idx;

              return (
                <button
                  key={expert.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none ${
                    isSelected
                      ? 'scale-125 z-30 ring-4 ring-[#E07A2E] shadow-[0_0_25px_rgba(224,122,46,0.8)]'
                      : 'opacity-70 hover:opacity-100 hover:scale-110 z-20'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  aria-label={`Select astrologer ${expert.name}`}
                >
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                  />
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E07A2E] shadow-glow" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded Nearest Astrologer Showcase */}
          <div className="w-full max-w-md relative p-8 bg-[#120E18]/85 dark:bg-[#120E18]/85 light:bg-[#F6ECDD]/95 border border-[#CFAF83]/35 rounded-[2.5rem] shadow-2xl backdrop-blur-md">
            
            <div className="absolute top-3 left-3 text-[#CFAF83] text-xs font-serif select-none">◈</div>
            <div className="absolute top-3 right-3 text-[#CFAF83] text-xs font-serif select-none">◈</div>
            <div className="absolute bottom-3 left-3 text-[#CFAF83] text-xs font-serif select-none">◈</div>
            <div className="absolute bottom-3 right-3 text-[#CFAF83] text-xs font-serif select-none">◈</div>

            <div className="flex flex-col items-start">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-serif bg-[#E07A2E]/20 border border-[#E07A2E]/40 text-[#F4A883]">
                  {activeExpert.experience} Experience
                </span>
                <span className="text-xs text-[#7A6D7F] font-serif">
                  · {activeExpert.city}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#F6ECDD] dark:text-[#F6ECDD] light:text-[#1E293B]">
                {activeExpert.name}
              </h3>

              <div className="text-xs text-[#CFAF83] font-serif mt-1 italic">
                {activeExpert.specialty}
              </div>

              <div className="text-[11px] text-[#7A6D7F] dark:text-[#7A6D7F] light:text-[#475368] mt-2 border-b border-[#CFAF83]/20 pb-3 w-full">
                Lineage: {activeExpert.lineage}
              </div>

              <p className="mt-4 text-sm text-[#F6ECDD]/85 dark:text-[#F6ECDD]/85 light:text-[#1E293B] leading-relaxed font-light">
                {activeExpert.bio}
              </p>

              <div className="mt-8 pt-4 w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous astrologer"
                    className="w-9 h-9 rounded-full border border-[#CFAF83]/40 hover:border-[#E07A2E] flex items-center justify-center text-[#CFAF83] hover:text-[#E07A2E] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next astrologer"
                    className="w-9 h-9 rounded-full border border-[#CFAF83]/40 hover:border-[#E07A2E] flex items-center justify-center text-[#CFAF83] hover:text-[#E07A2E] transition-colors"
                  >
                    →
                  </button>
                </div>

                <Link
                  to={`/experts/${activeExpert.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-[#CFAF83] hover:text-[#F4A883] underline underline-offset-4 transition-colors"
                >
                  <span>View Consultation Profile</span>
                  <span>→</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
