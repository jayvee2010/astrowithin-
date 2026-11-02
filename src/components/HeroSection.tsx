import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [consultations, setConsultations] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setConsultations(end);
        clearInterval(timer);
      } else {
        setConsultations(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Astrowithin Hero"
      className="relative min-h-[90vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Value Proposition & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Social Proof Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E07A2E]" />
            <span>10L+ Consultations Completed · 4.5 ★ Rating</span>
          </div>

          {/* H1 Headline (Exact Brief Requirement) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-[#F7F4EE] leading-[1.15] max-w-2xl">
            Consult <span className="italic font-normal text-[#E07A2E] font-serif">Classically trained</span> Parashari astrologers
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-[#F7F4EE]/75 max-w-xl font-light leading-relaxed">
            Traditional Vedic clarity on marriage, love, career and life timing—derived from genuine birth charts and planetary dashas without superstition.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/download"
              className="px-7 py-3.5 rounded-full bg-[#E07A2E] hover:bg-[#E07A2E]/90 text-[#141210] font-semibold text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>Download app</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
              </svg>
            </Link>

            <a
              href="#experts"
              className="px-6 py-3.5 rounded-full border border-[#CFAF83]/30 hover:border-[#CFAF83]/80 text-[#F7F4EE]/90 hover:text-[#F7F4EE] text-sm font-serif tracking-wider transition-all"
            >
              Meet the Astrologers ↓
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 pt-8 border-t border-[#CFAF83]/15 grid grid-cols-2 gap-8 w-full max-w-md">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
                {consultations}L+
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A69E94] font-serif mt-1">
                Consultations Completed
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F4EE]">
                  4.5
                </span>
                <div className="flex text-[#E07A2E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#A69E94] font-serif mt-1">
                App Store & Play Store
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Realistic Clean Phone Mockup with Product Screen */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-[300px] sm:w-[320px] rounded-[44px] p-3 bg-gradient-to-b from-[#2C2723] via-[#1E1B18] to-[#141210] border-2 border-[#CFAF83]/30 shadow-2xl">
            
            {/* Phone Speaker Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#141210] rounded-full z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-neutral-800 rounded-full" />
            </div>

            {/* Phone Screen Container */}
            <div className="relative rounded-[36px] bg-[#171412] text-[#F7F4EE] p-5 pt-10 overflow-hidden border border-white/5 flex flex-col justify-between min-h-[580px]">
              
              {/* Screen Top Status */}
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#A69E94] font-serif mb-4">
                  <span>Astrowithin Live</span>
                  <span className="flex items-center gap-1.5 text-[#E07A2E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E] animate-pulse" />
                    Moon in Taurus
                  </span>
                </div>

                {/* Greeting / Today's Transit Card */}
                <div className="p-4 rounded-2xl bg-[#221E1B] border border-[#CFAF83]/20 mb-4">
                  <div className="text-[10px] uppercase tracking-wider text-[#CFAF83] font-serif mb-1">
                    Daily Transit · Rohini Nakshatra
                  </div>
                  <h3 className="font-serif font-semibold text-sm text-[#F7F4EE]">
                    Emotional Serenity & Alignment
                  </h3>
                  <p className="text-[11px] text-[#F7F4EE]/70 font-light mt-1.5 leading-relaxed">
                    Chandra exalted in 2nd house. Auspicious window for financial conversations and marriage discussions.
                  </p>
                </div>

                {/* Kundli Diamond Chart Mini Preview */}
                <div className="p-4 rounded-2xl bg-[#1C1815] border border-[#CFAF83]/15 mb-4">
                  <div className="flex items-center justify-between text-[10px] font-serif text-[#A69E94] mb-2">
                    <span>JANAM KUNDLI (D1)</span>
                    <span className="text-[#E07A2E]">Lagnavastha</span>
                  </div>
                  <div className="w-full aspect-[4/3] rounded-xl border border-[#CFAF83]/25 flex items-center justify-center relative bg-[#141210]">
                    {/* Classical Diamond Grid Lines */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#CFAF83]/40">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.8" />
                      <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="currentColor" strokeWidth="1" />
                      <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1.2" />
                      {/* Planetary Placements */}
                      <text x="50" y="32" fill="#E07A2E" fontSize="6" textAnchor="middle" fontFamily="serif">1 (Ju)</text>
                      <text x="50" y="70" fill="#F4A883" fontSize="6" textAnchor="middle" fontFamily="serif">7 (Ve)</text>
                      <text x="25" y="52" fill="#CFAF83" fontSize="6" textAnchor="middle" fontFamily="serif">4 (Mo)</text>
                      <text x="75" y="52" fill="#CFAF83" fontSize="6" textAnchor="middle" fontFamily="serif">10 (Su)</text>
                    </svg>
                  </div>
                </div>

                {/* Active Astrologer Consultation Tile */}
                <div className="p-3 rounded-2xl bg-[#221E1B] border border-[#CFAF83]/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#352D26] border border-[#CFAF83]/30 flex items-center justify-center text-sm font-serif text-[#CFAF83]">
                    RS
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-serif font-medium text-[#F7F4EE] truncate">
                      Pt. Ramesh Sharma
                    </div>
                    <div className="text-[10px] text-[#A69E94] truncate">
                      18 yrs exp · ICAS Gold Medalist
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#E07A2E]/20 text-[#E07A2E] font-medium">
                    Available
                  </span>
                </div>
              </div>

              {/* Screen Bottom Bar */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-around text-[10px] font-serif text-[#A69E94]">
                <span className="text-[#E07A2E]">Kundli</span>
                <span>Horoscope</span>
                <span>Partner</span>
                <span>Consult</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
