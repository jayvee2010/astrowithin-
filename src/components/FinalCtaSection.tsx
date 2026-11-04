import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FinalCtaSection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'timing' | 'person'>('timing');

  return (
    <section
      id="final-cta"
      aria-label="Astrowithin Final Consultation Action"
      className="px-6 sm:px-12 py-28 sm:py-36 border-b border-[#EAE6DF] dark:border-white/10 text-center transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Unboxed Kicker Badge */}
        <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-4 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
          </svg>
          <span>Marriage · Sahasrara Crown Crossroads</span>
        </div>

        {/* Monumental Headline (Exact Vaya Copy - Option 1) */}
        <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          the right timing, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
            the right person.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#5A5650] dark:text-[#A09D94] font-normal max-w-xl mb-12 leading-relaxed">
          Stand at the cosmic crossroads. Select the question weighing on your heart to resolve your astrological path.
        </p>

        {/* The Two Choice Paths (Option 1 Vaya Consumer Tech Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mb-12 text-left">
          
          <button
            onClick={() => setSelectedPath('timing')}
            className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 transition-all cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${
              selectedPath === 'timing'
                ? 'border-[#B88E3E] ring-2 ring-[#B88E3E]/20 bg-[#B88E3E]/5'
                : 'border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/60'
            }`}
          >
            <div className="text-xs font-sans uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-2 font-bold">
              Path of Timing (Kala) · 7th Bhava
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold mb-3">
              When will I get married?
            </h3>
            <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6">
              Analyzed through Vimshottari Mahadasha, Jupiter-Saturn double transit, and 7th lord activation.
            </p>
            <div className="text-xs font-sans uppercase tracking-wider font-bold text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1.5">
              <span>{selectedPath === 'timing' ? '✓ Path Selected' : 'Choose Path'}</span>
              <span>→</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedPath('person')}
            className={`p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 transition-all cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${
              selectedPath === 'person'
                ? 'border-[#B88E3E] ring-2 ring-[#B88E3E]/20 bg-[#B88E3E]/5'
                : 'border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/60'
            }`}
          >
            <div className="text-xs font-sans uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-2 font-bold">
              Path of Synastry (Sambandha) · Navamsa
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold mb-3">
              Is this the right person?
            </h3>
            <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6">
              Decoded via Jaimini Darakaraka, Venus dignity, and Navamsa (D9) ascendant traits.
            </p>
            <div className="text-xs font-sans uppercase tracking-wider font-bold text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1.5">
              <span>{selectedPath === 'person' ? '✓ Path Selected' : 'Choose Path'}</span>
              <span>→</span>
            </div>
          </button>

        </div>

        {/* Primary Download / Consultation CTA (Exact Vaya Text: Consult On Astrowithin) */}
        <Link
          to="/download"
          className="px-12 py-5 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
        >
          <span>Consult On Astrowithin</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
          </svg>
        </Link>

        {/* Subtext (Exact Vaya Subtext) */}
        <p className="mt-6 text-xs font-sans uppercase tracking-wider text-[#827E76] font-semibold max-w-md">
          Our classically trained masters will analyze your D9 Navamsa and Vimshottari period directly on the app.
        </p>

        <span className="text-[11px] uppercase tracking-widest font-sans font-medium opacity-50 mt-4 block">
          Available on iOS App Store & Google Play Store · 10L+ Consultations Completed
        </span>

      </div>
    </section>
  );
};
