import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FinalCtaSection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'timing' | 'person'>('timing');

  return (
    <section
      id="final-cta"
      aria-label="Astrowithin Final Consultation Action"
      className="px-6 sm:px-12 py-24 sm:py-32 border-b border-[#E2DDD4] dark:border-white/10 text-center transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Unboxed Kicker with Gold Star (No Emojis) */}
        <div className="text-[11px] uppercase tracking-[0.3em] font-cinzel opacity-80 mb-5 flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
          </svg>
          <span>Marriage · Sahasrara Crown Crossroads</span>
        </div>

        {/* Monumental Headline (Exact Vaya Copy) */}
        <h2 className="font-cormorant text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-6 leading-tight">
          the right timing, <br className="hidden sm:inline" />
          <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
            the right person.
          </span>
        </h2>

        <p className="opacity-80 max-w-xl text-sm sm:text-base font-light mb-12 leading-relaxed">
          Stand at the cosmic crossroads. Select the question weighing on your heart to resolve your astrological path.
        </p>

        {/* The Two Choice Paths (Open Architectural Selection) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mb-12 text-left">
          
          <button
            onClick={() => setSelectedPath('timing')}
            className={`p-8 border-2 transition-all cursor-pointer ${
              selectedPath === 'timing'
                ? 'border-[#D4AF37] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15 shadow-lg'
                : 'border-[#E2DDD4] dark:border-white/10 hover:border-[#D4AF37]/50'
            }`}
          >
            <div className="text-[10px] font-cinzel uppercase tracking-widest text-[#D9822B] mb-2 font-semibold">
              Path of Timing (Kala) · 7th Bhava
            </div>
            <h3 className="font-cormorant text-2xl font-bold mb-3">
              When will I get married?
            </h3>
            <p className="text-xs opacity-75 font-light leading-relaxed mb-6">
              Analyzed through Vimshottari Mahadasha, Jupiter-Saturn double transit, and 7th lord activation.
            </p>
            <div className="text-xs font-cinzel uppercase tracking-widest font-semibold text-[#D4AF37] flex items-center gap-1.5">
              <span>{selectedPath === 'timing' ? '✓ Path Selected' : 'Choose Path'}</span>
              <span>→</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedPath('person')}
            className={`p-8 border-2 transition-all cursor-pointer ${
              selectedPath === 'person'
                ? 'border-[#D4AF37] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15 shadow-lg'
                : 'border-[#E2DDD4] dark:border-white/10 hover:border-[#D4AF37]/50'
            }`}
          >
            <div className="text-[10px] font-cinzel uppercase tracking-widest text-[#1E3A5F] dark:text-[#60A5FA] mb-2 font-semibold">
              Path of Synastry (Sambandha) · Navamsa
            </div>
            <h3 className="font-cormorant text-2xl font-bold mb-3">
              Is this the right person?
            </h3>
            <p className="text-xs opacity-75 font-light leading-relaxed mb-6">
              Decoded via Jaimini Darakaraka, Venus dignity, and Navamsa (D9) ascendant traits.
            </p>
            <div className="text-xs font-cinzel uppercase tracking-widest font-semibold text-[#D4AF37] flex items-center gap-1.5">
              <span>{selectedPath === 'person' ? '✓ Path Selected' : 'Choose Path'}</span>
              <span>→</span>
            </div>
          </button>

        </div>

        {/* Primary Download / Consultation CTA (Exact Vaya Text: Consult On Astrowithin) */}
        <Link
          to="/download"
          className="px-10 py-5 bg-[#1E3A5F] dark:bg-[#D4AF37] text-white dark:text-[#111217] font-semibold text-xs uppercase tracking-[0.2em] font-cinzel shadow-xl hover:opacity-90 transition-all border border-[#D4AF37] flex items-center gap-3"
        >
          <span>Consult On Astrowithin</span>
          <svg className="w-4 h-4 text-[#D4AF37] dark:text-[#111217]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </Link>

        {/* Subtext (Exact Vaya Subtext) */}
        <p className="mt-6 text-xs font-cinzel opacity-75 max-w-md">
          Our classically trained masters will analyze your D9 Navamsa and Vimshottari period directly on the app.
        </p>

        <span className="text-[10px] uppercase tracking-widest font-cinzel opacity-50 mt-4 block">
          Available on iOS App Store & Google Play Store · 10L+ Consultations Completed
        </span>

      </div>
    </section>
  );
};
