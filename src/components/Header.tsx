import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showQr, setShowQr] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 border-b bg-[#FAF7F2]/95 dark:bg-[#111217]/95 backdrop-blur-md border-[#E2DDD4] dark:border-white/10 text-[#181614] dark:text-[#F6ECDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Wordmark with Gold Astrolabe Emblem */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="w-9 h-9 border border-[#D4AF37] flex items-center justify-center p-1.5 bg-[#FAF7F2] dark:bg-[#161720] shadow-xs transition-colors">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" opacity="0.8" />
              <polygon points="50,10 90,80 10,80" stroke="#D4AF37" strokeWidth="2.5" />
              <polygon points="50,90 90,20 10,20" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="14" stroke="#1E3A5F" strokeWidth="2.5" fill="#1E3A5F" fillOpacity="0.1" />
              <circle cx="50" cy="50" r="4" fill="#D9822B" />
            </svg>
          </div>
          <div>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-[0.16em] block leading-none">
              ASTROWITHIN
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-cinzel opacity-60 block mt-1">
              Parashari Jyotish · Classical Vedanga Hora
            </span>
          </div>
        </Link>

        {/* Center: Inked Astrolabe Celestial Navigation Tabs (Exact Vaya Tabs: Blog, Tools, Signs, Nakshatras) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-cinzel opacity-80"
        >
          <Link
            to="/blog"
            className="hover:opacity-100 hover:text-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>Blog</span>
          </Link>

          <span className="text-[#D4AF37]/40 text-xs select-none">·</span>

          <Link
            to="/tools"
            className="hover:opacity-100 hover:text-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <span>Tools</span>
          </Link>

          <span className="text-[#D4AF37]/40 text-xs select-none">·</span>

          <Link
            to="/astrology/zodiac-signs"
            className="hover:opacity-100 hover:text-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <span>Signs</span>
          </Link>

          <span className="text-[#D4AF37]/40 text-xs select-none">·</span>

          <Link
            to="/astrology/nakshatras"
            className="hover:opacity-100 hover:text-[#D4AF37] transition-all flex items-center gap-1.5"
          >
            <span>Nakshatras</span>
          </Link>
        </nav>

        {/* Right: Theme Toggle, Scan to Download QR, and Download CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#D4AF37]/50 text-xs font-cinzel uppercase tracking-widest hover:border-[#D4AF37] transition-colors bg-black/5 dark:bg-white/5"
          >
            {isDark ? (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
                <span className="text-[10px] hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#1E3A5F]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="text-[10px] hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* "Scan to download" QR Capsule with Popover (Exact Vaya Feature) */}
          <button
            onClick={() => setShowQr(!showQr)}
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-cinzel opacity-75 hover:opacity-100 hover:text-[#D4AF37] transition-all"
          >
            <span>Scan to download</span>
            <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" strokeWidth="1.8" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="1.8" />
              <rect x="14" y="14" width="7" height="7" strokeWidth="1.8" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="1.8" />
            </svg>
          </button>

          {/* Download App CTA (Exact Vaya Text: Download) */}
          <Link
            to="/download"
            className="px-5 py-2.5 bg-[#1E3A5F] dark:bg-[#D4AF37] text-white dark:text-[#111217] text-xs uppercase tracking-[0.2em] font-cinzel font-semibold hover:opacity-90 transition-all shadow-sm border border-[#D4AF37] flex items-center gap-1.5"
          >
            <span>Download</span>
            <span className="text-[#D4AF37] dark:text-[#111217]">↓</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-current opacity-80 hover:opacity-100"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Exact Vaya Tabs: Blog, Tools, Signs, Nakshatras) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2DDD4] dark:border-white/10 px-6 py-6 bg-[#FAF7F2] dark:bg-[#111217] flex flex-col gap-5 text-sm uppercase tracking-[0.18em] font-cinzel">
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-current/10">
            Blog
          </Link>
          <Link to="/tools" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-current/10">
            Tools
          </Link>
          <Link to="/astrology/zodiac-signs" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-current/10">
            Signs
          </Link>
          <Link to="/astrology/nakshatras" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-current/10">
            Nakshatras
          </Link>
          <Link
            to="/download"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 px-4 bg-[#1E3A5F] dark:bg-[#D4AF37] text-white dark:text-[#111217] text-center font-bold tracking-widest mt-2 border border-[#D4AF37]"
          >
            Download App ↓
          </Link>
        </div>
      )}

      {/* QR Code Modal */}
      {showQr && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setShowQr(false)}
        >
          <div 
            className="bg-[#FAF7F2] dark:bg-[#161720] border-2 border-[#D4AF37] max-w-sm w-full p-8 text-center relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-4 right-4 text-xs font-mono opacity-60 hover:opacity-100"
            >
              ✕ CLOSE
            </button>
            <div className="w-12 h-12 mx-auto mb-4 border border-[#D4AF37] flex items-center justify-center p-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D4AF37]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
            </div>
            <h3 className="font-cormorant text-2xl font-bold mb-2">Scan to Download</h3>
            <p className="text-xs opacity-75 font-light mb-6">
              Access your Janam Kundli, Vimshottari Dashas, and classical consultations on iOS and Android.
            </p>
            <div className="bg-white p-4 inline-block border border-[#D4AF37]/50 shadow-inner">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://astrowithin.com/download"
                alt="Astrowithin App QR Code"
                className="w-40 h-40"
              />
            </div>
            <div className="mt-6 text-[10px] font-cinzel uppercase tracking-widest opacity-60">
              Compatible with iOS 16+ & Android 12+
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
