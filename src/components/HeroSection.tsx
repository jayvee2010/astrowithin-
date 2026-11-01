import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const [consultations, setConsultations] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10;
    const duration = 1600;
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
      aria-label="Root Chakra - Hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      {/* Root Chakra 3D Animated Lotus SVG Background in Solar Flare & Ember Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 dark:opacity-30">
        <svg
          viewBox="0 0 600 600"
          className="w-[500px] h-[500px] md:w-[750px] md:h-[750px] animate-spin-slow text-[#E07A2E]"
        >
          <circle cx="300" cy="300" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="120" fill="none" stroke="#CFAF83" strokeWidth="1" strokeDasharray="4 6" />
          
          {/* 4 Cardinal Lotus Petals */}
          <path
            d="M300,60 C380,180 380,240 300,300 C220,240 220,180 300,60 Z"
            fill="rgba(224,122,46,0.15)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M300,540 C380,420 380,360 300,300 C220,360 220,420 300,540 Z"
            fill="rgba(224,122,46,0.15)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M60,300 C180,380 240,380 300,300 C240,220 180,220 60,300 Z"
            fill="rgba(224,122,46,0.15)"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M540,300 C420,380 360,380 300,300 C360,220 420,220 540,300 Z"
            fill="rgba(224,122,46,0.15)"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          {/* Golden Ochre Yantra Triangle */}
          <polygon
            points="300,360 240,260 360,260"
            fill="rgba(207,175,131,0.2)"
            stroke="#CFAF83"
            strokeWidth="2"
          />
          <circle cx="300" cy="300" r="12" fill="#E07A2E" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Chakra Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E07A2E]/15 border border-[#E07A2E]/40 text-[#F4A883] text-xs font-serif tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(224,122,46,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#E07A2E] animate-ping" />
          <span>Muladhara · Grounded in Classical Parashara Hora</span>
        </div>

        {/* H1 - Exact Brief Requirement */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F6ECDD] dark:text-[#F6ECDD] light:text-[#1E293B] leading-[1.15] max-w-3xl">
          Consult <span className="text-gold-leaf italic font-serif">Classically trained</span> Parashari astrologers
        </h1>

        {/* Subtitle description */}
        <p className="mt-6 text-base sm:text-lg text-[#F6ECDD]/80 dark:text-[#F6ECDD]/80 light:text-[#475368] max-w-2xl font-light leading-relaxed">
          Traditional Vedic clarity on marriage, love, career and life timing—derived from genuine birth charts and planetary dashas without superstition.
        </p>

        {/* CTA "Download app" - Exact Brief Requirement */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/download"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E07A2E] via-[#F4A883] to-[#CFAF83] text-[#120E18] font-semibold text-base tracking-wide shadow-[0_0_30px_rgba(224,122,46,0.4)] hover:shadow-[0_0_40px_rgba(224,122,46,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            <span>Download app</span>
            <svg className="w-5 h-5 text-[#120E18]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
            </svg>
          </Link>
          <a
            href="#experts"
            className="px-7 py-4 rounded-full border border-[#CFAF83]/40 text-[#CFAF83] hover:bg-[#CFAF83]/10 font-serif text-sm tracking-wider transition-all"
          >
            Meet the Masters ↓
          </a>
        </div>

        {/* Stats Section - Exact Brief Requirement */}
        <div className="mt-16 pt-8 border-t border-[#CFAF83]/20 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
          
          <div className="flex flex-col items-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-leaf">
              {consultations}L+
            </div>
            <div className="text-xs uppercase tracking-widest text-[#CFAF83] font-serif mt-1">
              Consultations Completed
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-leaf">
                4.5
              </span>
              <div className="flex text-[#E07A2E]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-xs uppercase tracking-widest text-[#CFAF83] font-serif mt-1">
              Rating, App Store & Play Store
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
