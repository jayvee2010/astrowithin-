import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FinalCtaSection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'timing' | 'person' | null>(null);

  return (
    <section
      id="final-cta"
      aria-label="Crown Chakra - Final CTA"
      className="relative min-h-screen py-28 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden text-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Sahasrara Crown Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CFAF83]/50 bg-[#120E18]/70 text-[#CFAF83] text-xs font-serif uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(207,175,131,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#E07A2E] animate-ping" />
          <span>Marriage · Sahasrara Crown Crossroads</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F6ECDD] mb-6 leading-tight">
          the right timing, <span className="text-gold-leaf italic font-serif">the right person</span>
        </h2>

        <p className="text-[#F6ECDD]/85 max-w-xl text-base sm:text-lg font-light mb-14">
          Stand at the cosmic crossroads. Select the question weighing on your heart to resolve your astrological path.
        </p>

        {/* The Two Paths as Two Curved Celestial Portals / Mandalas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mb-14">
          
          <button
            onClick={() => setSelectedPath('timing')}
            className={`p-8 sm:p-10 transition-all duration-500 text-left flex flex-col justify-between focus:outline-none ${
              selectedPath === 'timing'
                ? 'scale-105 ring-4 ring-[#E07A2E] shadow-[0_0_40px_rgba(224,122,46,0.6)]'
                : 'hover:scale-103 opacity-90 hover:opacity-100'
            }`}
            style={{
              borderRadius: '3.5rem 1rem 3.5rem 1rem',
              background: 'linear-gradient(135deg, rgba(59, 42, 63, 0.7) 0%, rgba(18, 14, 24, 0.95) 100%)',
              border: '2px solid rgba(207, 175, 131, 0.4)',
            }}
          >
            <div>
              <div className="text-[11px] font-serif text-[#F4A883] uppercase tracking-widest mb-3">
                Path of Timing (Kala) · 7th Bhava
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6ECDD] leading-snug">
                When will I get married?
              </h3>
            </div>
            <div className="mt-8 text-xs text-[#CFAF83] font-serif flex items-center gap-2">
              <span className="text-base">☸</span>
              <span>{selectedPath === 'timing' ? '✓ Path Selected' : 'Choose Path →'}</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedPath('person')}
            className={`p-8 sm:p-10 transition-all duration-500 text-left flex flex-col justify-between focus:outline-none ${
              selectedPath === 'person'
                ? 'scale-105 ring-4 ring-[#E07A2E] shadow-[0_0_40px_rgba(224,122,46,0.6)]'
                : 'hover:scale-103 opacity-90 hover:opacity-100'
            }`}
            style={{
              borderRadius: '1rem 3.5rem 1rem 3.5rem',
              background: 'linear-gradient(135deg, rgba(59, 42, 63, 0.7) 0%, rgba(18, 14, 24, 0.95) 100%)',
              border: '2px solid rgba(207, 175, 131, 0.4)',
            }}
          >
            <div>
              <div className="text-[11px] font-serif text-[#F4A883] uppercase tracking-widest mb-3">
                Path of Synastry (Sambandha) · Navamsa
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F6ECDD] leading-snug">
                Is this the right person?
              </h3>
            </div>
            <div className="mt-8 text-xs text-[#CFAF83] font-serif flex items-center gap-2">
              <span className="text-base">☸</span>
              <span>{selectedPath === 'person' ? '✓ Path Selected' : 'Choose Path →'}</span>
            </div>
          </button>

        </div>

        {/* Button: "Consult On Astrowithin" (renamed to the brand) */}
        <Link
          to="/download"
          className="px-12 py-5 rounded-full bg-gradient-to-r from-[#E07A2E] via-[#F4A883] to-[#CFAF83] text-[#120E18] font-bold text-lg tracking-wider uppercase shadow-[0_0_45px_rgba(224,122,46,0.6)] hover:shadow-[0_0_60px_rgba(224,122,46,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
        >
          <span>Consult On Astrowithin</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </Link>

        {selectedPath && (
          <p className="mt-6 text-xs font-serif text-[#F4A883] animate-pulse">
            Our classically trained masters will analyze your D9 Navamsa and Vimshottari period directly on the app.
          </p>
        )}

      </div>
    </section>
  );
};
