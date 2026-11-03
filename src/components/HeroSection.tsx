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
      className="relative min-h-[85vh] flex items-center justify-center py-16 sm:py-24 px-6 sm:px-12 border-b border-[#E2DDD4] dark:border-white/10 overflow-hidden transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Monumental Headline & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Unboxed Typographic Kicker with Fine-Line Gold 8-Point Compass Star (NO EMOJIS) */}
          <div className="text-[11px] uppercase tracking-[0.3em] font-cinzel opacity-80 mb-5 flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>{consultations}L+ Consultations Completed · 4.5 Verified Rating</span>
          </div>

          {/* Monumental Display Headline */}
          <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight">
            Consult classically trained <br />
            <span className="italic font-medium text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
              Parashari astrologers.
            </span>
          </h1>

          {/* Scholarly Narrative Paragraph */}
          <p className="mt-8 text-base sm:text-lg opacity-80 font-light leading-relaxed max-w-xl">
            Traditional Vedic clarity on marriage, partnership, and life timing—derived from mathematical birth charts and planetary dashas without superstition or algorithmic approximations.
          </p>

          {/* Direct Non-Boxed Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.2em] font-cinzel">
            <Link
              to="/download"
              className="px-8 py-4 bg-[#1E3A5F] dark:bg-[#D4AF37] text-white dark:text-[#111217] font-semibold hover:opacity-90 transition-all shadow-md flex items-center gap-2.5 border border-[#D4AF37]"
            >
              <span>Get Free Consultation</span>
              <span className="text-[#D4AF37] dark:text-[#111217]">→</span>
            </Link>
            <a
              href="#consultants"
              className="opacity-75 hover:opacity-100 transition-opacity flex items-center gap-2 border-b border-current pb-1"
            >
              <span>Explore Lineage</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural North Indian Janam Kundli Blueprint in 24k Gold */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm aspect-square relative flex items-center justify-center">
            
            <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
              {/* Outer Boundary in Burnished 24k Gold Hairlines */}
              <rect x="10" y="10" width="380" height="380" stroke="#D4AF37" strokeWidth="1.8" />
              <rect x="14" y="14" width="372" height="372" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.6" />
              
              {/* Inner Diamond (Kendra & Trikona Bhavas) */}
              <polygon points="200,14 386,200 200,386 14,200" stroke="#D4AF37" strokeWidth="1.4" />
              
              {/* Diagonals */}
              <line x1="14" y1="14" x2="386" y2="386" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
              <line x1="386" y1="14" x2="14" y2="386" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
              
              {/* Corner Partition Vectors */}
              <line x1="107" y1="107" x2="14" y2="14" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
              <line x1="293" y1="107" x2="386" y2="14" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
              <line x1="107" y1="293" x2="14" y2="386" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
              <line x1="293" y1="293" x2="386" y2="386" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />

              {/* House 1: Lagna / Sun / Fire (Solar Saffron Gemstone) */}
              <circle cx="200" cy="70" r="4.5" fill="#D9822B" stroke="#D4AF37" strokeWidth="1" />
              <text x="200" y="105" font-family="'Cormorant Garamond', serif" fontSize="16" textAnchor="middle" fill="currentColor" fontWeight="700">1 · Lagna (Ascendant)</text>
              <text x="200" y="125" font-family="'Cinzel', serif" fontSize="11" textAnchor="middle" fill="#D9822B" fontWeight="600">Surya (Sun) 14° · Leo</text>

              {/* House 4: Sukha / Moon / Water (Royal Lapis Gemstone) */}
              <circle cx="80" cy="200" r="4.5" fill="#1E3A5F" stroke="#D4AF37" strokeWidth="1" />
              <text x="110" y="200" font-family="'Cormorant Garamond', serif" fontSize="14" textAnchor="middle" fill="currentColor">4 · Sukha</text>
              <text x="110" y="220" font-family="'Cinzel', serif" fontSize="11" textAnchor="middle" fill="#1E3A5F" fontWeight="600">Chandra 08° Exalted</text>

              {/* House 7: Kalatra / Venus / Air (Malachite Emerald Gemstone) */}
              <circle cx="200" cy="330" r="4.5" fill="#1E4334" stroke="#D4AF37" strokeWidth="1" />
              <text x="200" y="285" font-family="'Cormorant Garamond', serif" fontSize="14" textAnchor="middle" fill="currentColor">7 · Kalatra (Marriage)</text>
              <text x="200" y="305" font-family="'Cinzel', serif" fontSize="11" textAnchor="middle" fill="#1E4334" fontWeight="600">Shukra 19° In D9</text>

              {/* House 10: Karma / Jupiter / Ether (Mineral Amethyst Gemstone) */}
              <circle cx="320" cy="200" r="4.5" fill="#48284A" stroke="#D4AF37" strokeWidth="1" />
              <text x="290" y="200" font-family="'Cormorant Garamond', serif" fontSize="14" textAnchor="middle" fill="currentColor">10 · Karma</text>
              <text x="290" y="220" font-family="'Cinzel', serif" fontSize="11" textAnchor="middle" fill="#48284A" fontWeight="600">Guru 21° Pushya</text>

              {/* Secondary Nodes in Terracotta Kumkum & Emerald */}
              <text x="115" y="70" font-family="'Cinzel', serif" fontSize="10" textAnchor="middle" fill="#9E2A2B">Ma 12° · H2</text>
              <text x="285" y="70" font-family="'Cinzel', serif" fontSize="10" textAnchor="middle" fill="#1E4334">Me 24° · H12</text>
            </svg>

            {/* Technical Blueprint Metadata */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-[9px] uppercase tracking-[0.2em] font-cinzel opacity-60">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#D9822B]"></span> Solar Kendra</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F]"></span> Lunar House</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#1E4334]"></span> Navamsa D9</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
