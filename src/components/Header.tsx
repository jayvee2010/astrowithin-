import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showQr, setShowQr] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-10 pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Handcrafted Brand Seal / Yantra Medallion */}
        <Link
          to="/"
          className="pointer-events-auto group relative flex items-center gap-3.5 px-4 py-2 rounded-full border border-[#CFAF83]/40 bg-[#120E18]/85 backdrop-blur-md shadow-[0_0_25px_rgba(207,175,131,0.18)] hover:border-[#E07A2E] hover:shadow-[0_0_30px_rgba(224,122,46,0.35)] transition-all duration-300"
        >
          {/* Inked Vedic Diamond Kundli Yantra in Gold Leaf */}
          <div className="relative w-11 h-11 rounded-full border border-[#CFAF83]/60 flex items-center justify-center bg-gradient-to-tr from-[#3B2A3F]/80 via-[#1E293B]/70 to-[#120E18] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#CFAF83]">
              {/* Outer Square & Diamond Star */}
              <rect x="7" y="7" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <polygon points="20,4 36,20 20,36 4,20" fill="none" stroke="#E07A2E" strokeWidth="1.4" />
              <circle cx="20" cy="20" r="3.5" fill="#F4A883" />
            </svg>
            {/* Subtle orbital ping */}
            <span className="absolute inset-0 rounded-full border border-[#E07A2E]/30 animate-ping pointer-events-none opacity-40" />
          </div>

          <span className="font-display text-2xl tracking-[0.2em] text-[#F6ECDD] group-hover:text-[#E07A2E] transition-colors leading-none pr-1">
            ASTROWITHIN
          </span>
        </Link>

        {/* Center: Inked Astrolabe Celestial Floating Rail (Blog, Tools, Signs, Nakshatras) */}
        <nav
          aria-label="Celestial Navigation"
          className="pointer-events-auto hidden lg:flex items-center gap-1 px-6 py-2 rounded-full border border-[#CFAF83]/30 bg-[#120E18]/85 backdrop-blur-md shadow-[0_0_30px_rgba(18,14,24,0.7)]"
        >
          <Link
            to="/blog"
            className="group relative px-4 py-1.5 text-xs font-serif uppercase tracking-widest text-[#F6ECDD]/80 hover:text-[#F6ECDD] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">✧</span>
            <span>Blog</span>
          </Link>

          <span className="text-[#CFAF83]/30 text-xs select-none">·</span>

          <Link
            to="/tools"
            className="group relative px-4 py-1.5 text-xs font-serif uppercase tracking-widest text-[#F6ECDD]/80 hover:text-[#F6ECDD] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">◈</span>
            <span>Tools</span>
          </Link>

          <span className="text-[#CFAF83]/30 text-xs select-none">·</span>

          <Link
            to="/astrology/zodiac-signs"
            className="group relative px-4 py-1.5 text-xs font-serif uppercase tracking-widest text-[#F6ECDD]/80 hover:text-[#F6ECDD] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">☽</span>
            <span>Signs</span>
          </Link>

          <span className="text-[#CFAF83]/30 text-xs select-none">·</span>

          <Link
            to="/astrology/nakshatras"
            className="group relative px-4 py-1.5 text-xs font-serif uppercase tracking-widest text-[#F6ECDD]/80 hover:text-[#F6ECDD] transition-colors flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">⭐</span>
            <span>Nakshatras</span>
          </Link>
        </nav>

        {/* Right: Theme Twinkle Star, "Scan to download" QR, and Download CTA */}
        <div className="pointer-events-auto flex items-center gap-3">
          
          {/* THEME SWITCH: Lone Twinkling Polestar with Supernova Radiance */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'dawn' : 'dusk'} sky`}
            title={`Switch to ${theme === 'dark' ? 'dawn' : 'dusk'} sky`}
            className="group relative w-11 h-11 rounded-full border border-[#CFAF83]/40 bg-[#120E18]/85 backdrop-blur-md flex items-center justify-center hover:border-[#E07A2E] shadow-[0_0_20px_rgba(207,175,131,0.15)] hover:shadow-[0_0_25px_rgba(224,122,46,0.35)] transition-all duration-300 focus:outline-none"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#CFAF83] group-hover:text-[#F4A883] group-hover:rotate-45 transition-all duration-500">
                <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="#F6ECDD" className="animate-ping" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E07A2E] animate-spin-slow">
                <circle cx="12" cy="12" r="5" fill="#E07A2E" />
                <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" stroke="#E07A2E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* "Scan to download" QR Capsule with Popover */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowQr(!showQr)}
              className="px-4 py-2.5 rounded-full border border-[#CFAF83]/35 bg-[#120E18]/85 backdrop-blur-md text-[11px] font-serif uppercase tracking-widest text-[#CFAF83] hover:text-[#F4A883] hover:border-[#E07A2E] flex items-center gap-2 transition-all shadow-md focus:outline-none"
            >
              <span>Scan to download</span>
              <svg className="w-3.5 h-3.5 text-[#E07A2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" strokeWidth="1.8" />
                <rect x="14" y="3" width="7" height="7" strokeWidth="1.8" />
                <rect x="14" y="14" width="7" height="7" strokeWidth="1.8" />
                <rect x="3" y="14" width="7" height="7" strokeWidth="1.8" />
              </svg>
            </button>

            {/* Inked Astrological QR Modal */}
            {showQr && (
              <div className="absolute right-0 top-12 w-56 p-5 rounded-3xl bg-[#120E18] border-2 border-[#CFAF83] shadow-[0_0_40px_rgba(207,175,131,0.3)] z-50 text-center animate-in fade-in zoom-in-95">
                <div className="text-[10px] font-serif text-[#F4A883] uppercase tracking-widest mb-1">
                  Jyotish Ephemeris
                </div>
                <p className="text-xs text-[#F6ECDD] mb-3 font-serif font-bold">
                  Scan to Install Astrowithin App
                </p>
                
                <div className="p-3 bg-[#F6ECDD] rounded-2xl inline-block shadow-inner">
                  <svg className="w-28 h-28 text-[#120E18]" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="25" height="25" fill="#120E18" />
                    <rect x="15" y="15" width="15" height="15" fill="#F6ECDD" />
                    <rect x="19" y="19" width="7" height="7" fill="#120E18" />
                    <rect x="65" y="10" width="25" height="25" fill="#120E18" />
                    <rect x="70" y="15" width="15" height="15" fill="#F6ECDD" />
                    <rect x="74" y="19" width="7" height="7" fill="#120E18" />
                    <rect x="10" y="65" width="25" height="25" fill="#120E18" />
                    <rect x="15" y="70" width="15" height="15" fill="#F6ECDD" />
                    <rect x="19" y="74" width="7" height="7" fill="#120E18" />
                    <circle cx="50" cy="50" r="10" fill="#E07A2E" />
                    <rect x="42" y="15" width="6" height="20" fill="#120E18" />
                    <rect x="70" y="65" width="18" height="18" fill="#120E18" />
                  </svg>
                </div>

                <div className="text-[10px] text-[#7A6D7F] mt-3 font-serif">
                  iOS & Android · Free Kundli
                </div>
                <button
                  onClick={() => setShowQr(false)}
                  className="mt-2 text-[10px] text-[#CFAF83] hover:text-[#E07A2E] underline underline-offset-4 block mx-auto font-serif"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Download CTA Button: Hand-cut Gold & Solar Flare Pill */}
          <Link
            to="/download"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E07A2E] via-[#F4A883] to-[#CFAF83] text-[#120E18] font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(224,122,46,0.4)] hover:shadow-[0_0_35px_rgba(224,122,46,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Download</span>
            <span className="text-sm">↓</span>
          </Link>

        </div>

      </div>
    </header>
  );
};
