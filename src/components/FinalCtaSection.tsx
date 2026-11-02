import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const FinalCtaSection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<'timing' | 'person' | null>(null);

  return (
    <section
      id="final-cta"
      aria-label="Astrowithin Final Consultation Action"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
          <span>Begin Your Consultation</span>
        </div>

        {/* H2 Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F7F4EE] mb-6 leading-tight">
          the right timing, <span className="italic font-normal text-[#E07A2E]">the right person</span>
        </h2>

        <p className="text-[#F7F4EE]/75 max-w-xl text-sm sm:text-base font-light mb-12 leading-relaxed">
          Select the inquiry closest to your heart to connect with a classically trained Parashari master.
        </p>

        {/* The Two Choice Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-12">
          
          <button
            onClick={() => setSelectedPath('timing')}
            className={`p-8 rounded-3xl transition-all duration-300 text-left flex flex-col justify-between border ${
              selectedPath === 'timing'
                ? 'bg-[#25211D] border-[#E07A2E] ring-1 ring-[#E07A2E] shadow-lg'
                : 'bg-[#1A1714] border-[#CFAF83]/20 hover:border-[#CFAF83]/50'
            }`}
          >
            <div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-[#E07A2E] mb-2">
                Path of Timing (Kala) · 7th Bhava
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4EE]">
                When will I get married?
              </h3>
            </div>
            <div className="mt-6 text-xs text-[#CFAF83] font-serif flex items-center gap-1.5">
              <span>{selectedPath === 'timing' ? '✓ Path Selected' : 'Select Path →'}</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedPath('person')}
            className={`p-8 rounded-3xl transition-all duration-300 text-left flex flex-col justify-between border ${
              selectedPath === 'person'
                ? 'bg-[#25211D] border-[#E07A2E] ring-1 ring-[#E07A2E] shadow-lg'
                : 'bg-[#1A1714] border-[#CFAF83]/20 hover:border-[#CFAF83]/50'
            }`}
          >
            <div>
              <div className="text-[10px] font-serif uppercase tracking-widest text-[#E07A2E] mb-2">
                Path of Synastry · Navamsa
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4EE]">
                Is this the right person?
              </h3>
            </div>
            <div className="mt-6 text-xs text-[#CFAF83] font-serif flex items-center gap-1.5">
              <span>{selectedPath === 'person' ? '✓ Path Selected' : 'Select Path →'}</span>
            </div>
          </button>

        </div>

        {/* Primary Download / Consultation CTA */}
        <Link
          to="/download"
          className="px-10 py-4 rounded-full bg-[#E07A2E] hover:bg-[#E07A2E]/90 text-[#141210] font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2.5"
        >
          <span>Consult On Astrowithin</span>
          <span>→</span>
        </Link>

        {selectedPath && (
          <p className="mt-5 text-xs font-serif text-[#CFAF83]">
            Our classically trained masters will analyze your D9 Navamsa and Vimshottari period directly on the app.
          </p>
        )}

      </div>
    </section>
  );
};
