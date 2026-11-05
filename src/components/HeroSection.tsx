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
      className="relative min-h-[90vh] flex items-center justify-center py-20 sm:py-28 px-6 sm:px-12 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Typography & Narrative (Option 1 Vaya Consumer Tech) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Unboxed Kicker Badge */}
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-5 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>Muladhara · Grounded in Classical Parashara Hora</span>
          </div>

          {/* Large Commanding Display Headline (Enlarged to match screenshot zoom) */}
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-[4.75rem] font-bold leading-[1.06] tracking-tight mb-6">
            Consult <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">Classically trained</span> <br className="hidden sm:inline" />
            Parashari astrologers.
          </h1>

          {/* Subtitle (Readable humanist sans) */}
          <p className="text-lg sm:text-xl text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed max-w-xl mb-10">
            Traditional Vedic clarity on marriage, love, career and life timing—derived from genuine birth charts and planetary dashas without superstition.
          </p>

          {/* Actions: Pill CTA & Secondary Text Link */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <Link
              to="/download"
              className="px-9 py-4 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-base font-bold tracking-wide rounded-full hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-3"
            >
              <span>Download app</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
              </svg>
            </Link>
            <a
              href="#experts"
              className="text-xs uppercase tracking-[0.2em] font-sans font-bold opacity-80 hover:opacity-100 hover:text-[#B88E3E] transition-all flex items-center gap-2 border-b-2 border-current pb-1"
            >
              <span>Meet the Astrologers</span>
              <span>↓</span>
            </a>
          </div>

          {/* Prominent Dual Stats (10L+ & 4.5 Stars) */}
          <div className="pt-8 border-t border-[#EAE6DF] dark:border-white/10 grid grid-cols-2 gap-8 w-full max-w-lg">
            <div>
              <div className="font-cormorant text-5xl sm:text-6xl font-bold text-[#B88E3E] dark:text-[#E5B869] leading-none mb-1.5">
                {consultations}L+
              </div>
              <div className="text-xs uppercase tracking-widest font-sans font-semibold opacity-70">
                Consultations Completed
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-cormorant text-5xl sm:text-6xl font-bold text-[#B88E3E] dark:text-[#E5B869] leading-none">
                  4.5
                </span>
                <div className="flex text-[#B88E3E] dark:text-[#E5B869]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs uppercase tracking-widest font-sans font-semibold opacity-70">
                Rating, App Store & Play Store
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Flagship Smartphone Mockup (Enlarged to match screenshot) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[430px] lg:max-w-[460px] rounded-[48px] bg-white dark:bg-[#1A1C20] border-[8px] border-[#222120] dark:border-[#383734] shadow-[0_25px_60px_rgba(0,0,0,0.16)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            
            {/* Phone Speaker Notch */}
            <div className="w-28 h-4 bg-[#222120] dark:bg-[#383734] rounded-b-xl mx-auto flex-shrink-0" />

            <div className="p-6 flex flex-col gap-4">
              {/* App Status Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#EAE6DF] dark:border-white/10">
                <div>
                  <div className="font-sans font-bold text-sm uppercase tracking-wider">Astrowithin App</div>
                  <div className="text-xs text-[#827E76] font-medium">Janam Kundli · Sidereal Lahiri</div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#B88E3E]/15 text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-wider">
                  Live Gochara
                </span>
              </div>

              {/* Diamond Janam Kundli Blueprint inside Smartphone */}
              <div className="p-4 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-[#EAE6DF] dark:border-white/10 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-52 sm:h-56" fill="none">
                  <rect x="5" y="5" width="190" height="190" stroke="#B88E3E" strokeWidth="1.4" />
                  <polygon points="100,5 195,100 100,195 5,100" stroke="#B88E3E" strokeWidth="1.2" />
                  <line x1="5" y1="5" x2="195" y2="195" stroke="#B88E3E" strokeWidth="0.8" opacity="0.7" />
                  <line x1="195" y1="5" x2="5" y2="195" stroke="#B88E3E" strokeWidth="0.8" opacity="0.7" />
                  
                  {/* House 1: Lagna */}
                  <circle cx="100" cy="38" r="3.5" fill="#D9822B" />
                  <text x="100" y="56" fontFamily="serif" fontSize="10" textAnchor="middle" fill="currentColor" fontWeight="700">1 · Lagna</text>
                  <text x="100" y="68" fontFamily="sans-serif" fontSize="7" textAnchor="middle" fill="#B88E3E">Sun 14° Leo</text>
                  
                  {/* House 4: Moon */}
                  <circle cx="38" cy="100" r="3.5" fill="#1E3A5F" />
                  <text x="56" y="103" fontFamily="serif" fontSize="9" textAnchor="middle" fill="currentColor">4 · Moon</text>
                  
                  {/* House 7: Venus */}
                  <circle cx="100" cy="162" r="3.5" fill="#1E4334" />
                  <text x="100" y="152" fontFamily="serif" fontSize="9" textAnchor="middle" fill="currentColor">7 · Venus D9</text>
                  
                  {/* House 10: Jupiter */}
                  <circle cx="162" cy="100" r="3.5" fill="#48284A" />
                  <text x="144" y="103" fontFamily="serif" fontSize="9" textAnchor="middle" fill="currentColor">10 · Jupiter</text>
                </svg>
              </div>

              {/* Today's Moon Transit Card */}
              <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1A1C20] rounded-xl border border-[#EAE6DF] dark:border-white/10 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-sm font-bold">Moon in Taurus (Rohini)</div>
                  <div className="text-xs text-[#827E76]">Waxing Gibbous · 84% Illumination</div>
                </div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Auspicious
                </span>
              </div>

              {/* Shubh Muhurta Card */}
              <div className="p-3.5 sm:p-4 bg-white dark:bg-[#1A1C20] rounded-xl border border-[#EAE6DF] dark:border-white/10 flex items-center justify-between shadow-xs">
                <div>
                  <div className="text-sm font-bold">Shubh Muhurta Window</div>
                  <div className="text-xs text-[#827E76]">10:14 AM – 12:45 PM Today</div>
                </div>
                <span className="text-xs font-bold text-[#B88E3E] dark:text-[#E5B869]">
                  Favorable
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
