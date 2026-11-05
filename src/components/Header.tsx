import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

export const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showQr, setShowQr] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 border-b bg-[#FAF8F5]/90 dark:bg-[#121316]/90 backdrop-blur-md border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA]">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Left: Brand Wordmark with Clean Astrolabe Seal */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="w-10 h-10 border border-[#B88E3E] rounded-xl flex items-center justify-center p-2 bg-white dark:bg-[#1A1C20] shadow-sm transition-colors">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#B88E3E]" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="50" cy="50" r="45" strokeDasharray="2 2" opacity="0.8" />
              <polygon points="50,10 90,80 10,80" stroke="#B88E3E" strokeWidth="2.5" />
              <polygon points="50,90 90,20 10,20" stroke="#B88E3E" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="5" fill="#B88E3E" />
            </svg>
          </div>
          <div>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold tracking-[0.12em] block leading-none">
              ASTROWITHIN
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60 block mt-1 font-medium">
              Parashari Vedic Astrology
            </span>
          </div>
        </Link>

        {/* Center: Clean Navigation Tabs (Exact Vaya Tabs: Blog, Tools, Signs, Nakshatras) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em]"
        >
          <Link
            to="/blog"
            className="opacity-75 hover:opacity-100 hover:text-[#B88E3E] transition-all"
          >
            Blog
          </Link>

          <Link
            to="/tools"
            className="opacity-75 hover:opacity-100 hover:text-[#B88E3E] transition-all"
          >
            Tools
          </Link>

          <Link
            to="/astrology/zodiac-signs"
            className="opacity-75 hover:opacity-100 hover:text-[#B88E3E] transition-all"
          >
            Signs
          </Link>

          <Link
            to="/astrology/nakshatras"
            className="opacity-75 hover:opacity-100 hover:text-[#B88E3E] transition-all"
          >
            Nakshatras
          </Link>
        </nav>

        {/* Right: Theme Toggle, Scan to Download QR, and Download CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EAE6DF] dark:border-white/10 text-xs font-sans uppercase tracking-wider hover:border-[#B88E3E] transition-colors bg-white/60 dark:bg-white/5"
          >
            {isDark ? (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#E5B869]" fill="none" stroke="currentColor" strokeWidth="2">
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
                <span className="text-[10px] hidden sm:inline font-semibold">Light</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#181716]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="text-[10px] hidden sm:inline font-semibold">Dark</span>
              </>
            )}
          </button>

          {/* "Scan to download" QR Capsule with Popover (Exact Vaya Feature) */}
          <button
            onClick={() => setShowQr(!showQr)}
            className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-75 hover:opacity-100 hover:text-[#B88E3E] transition-all"
          >
            <span>Scan to download</span>
            <svg className="w-3.5 h-3.5 text-[#B88E3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="3" y="3" width="7" height="7" strokeWidth="1.8" />
              <rect x="14" y="3" width="7" height="7" strokeWidth="1.8" />
              <rect x="14" y="14" width="7" height="7" strokeWidth="1.8" />
              <rect x="3" y="14" width="7" height="7" strokeWidth="1.8" />
            </svg>
          </button>

          {/* Download App CTA (Exact Vaya Pill: Download) */}
          <Link
            to="/download"
            className="px-6 py-2.5 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
          >
            <span>Download app</span>
            <span>↓</span>
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
        <div className="md:hidden border-t border-[#EAE6DF] dark:border-white/10 px-6 py-6 bg-[#FAF8F5] dark:bg-[#121316] flex flex-col gap-4 text-sm font-sans font-semibold uppercase tracking-[0.16em]">
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-black/5 dark:border-white/5 opacity-80 hover:opacity-100">
            Blog
          </Link>
          <Link to="/tools" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-black/5 dark:border-white/5 opacity-80 hover:opacity-100">
            Tools
          </Link>
          <Link to="/astrology/zodiac-signs" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-black/5 dark:border-white/5 opacity-80 hover:opacity-100">
            Signs
          </Link>
          <Link to="/astrology/nakshatras" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-black/5 dark:border-white/5 opacity-80 hover:opacity-100">
            Nakshatras
          </Link>
          <Link
            to="/download"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3.5 px-6 bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] text-center font-bold tracking-wider mt-2 rounded-full shadow-md"
          >
            Download App ↓
          </Link>
        </div>
      )}

      {/* QR Code Modal */}
      {showQr && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          onClick={() => setShowQr(false)}
        >
          <div 
            className="bg-white dark:bg-[#1A1C20] rounded-3xl border border-[#EAE6DF] dark:border-white/10 max-w-sm w-full p-8 text-center relative shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-5 right-5 text-xs font-mono opacity-50 hover:opacity-100 p-1"
            >
              ✕
            </button>
            <div className="w-12 h-12 mx-auto mb-4 border border-[#B88E3E] rounded-xl flex items-center justify-center p-2 bg-[#FAF8F5] dark:bg-white/5">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
            </div>
            <h3 className="font-cormorant text-3xl font-bold mb-2">Scan to Download</h3>
            <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal mb-6 leading-relaxed">
              Access your Janam Kundli, Vimshottari Dashas, and classical consultations on iOS and Android.
            </p>
            <div className="bg-white p-4 inline-block rounded-2xl border border-[#EAE6DF] shadow-xs">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://astrowithin.com/download"
                alt="Astrowithin App QR Code"
                className="w-40 h-40"
              />
            </div>
            <div className="mt-6 text-xs font-sans uppercase tracking-widest opacity-60 font-semibold">
              Compatible with iOS 16+ & Android 12+
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
