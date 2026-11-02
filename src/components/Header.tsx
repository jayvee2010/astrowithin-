import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showQr, setShowQr] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#141210]/90 dark:bg-[#141210]/90 backdrop-blur-md border-b border-[#CFAF83]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Refined Typographic Brand Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          {/* Subtle Vedic Diamond Yantra Emblem */}
          <div className="w-8 h-8 rounded-full border border-[#CFAF83]/50 flex items-center justify-center bg-[#1F1C18] group-hover:border-[#E07A2E] transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">
              <polygon points="12,2 22,12 12,22 2,12" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold text-[#F7F4EE] group-hover:text-[#E07A2E] transition-colors">
            ASTROWITHIN
          </span>
        </Link>

        {/* Center: Editorial Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8"
        >
          <Link
            to="/blog"
            className="text-xs uppercase tracking-[0.2em] font-serif text-[#F7F4EE]/75 hover:text-[#E07A2E] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/tools"
            className="text-xs uppercase tracking-[0.2em] font-serif text-[#F7F4EE]/75 hover:text-[#E07A2E] transition-colors"
          >
            Tools
          </Link>
          <Link
            to="/astrology/zodiac-signs"
            className="text-xs uppercase tracking-[0.2em] font-serif text-[#F7F4EE]/75 hover:text-[#E07A2E] transition-colors"
          >
            Signs
          </Link>
          <Link
            to="/astrology/nakshatras"
            className="text-xs uppercase tracking-[0.2em] font-serif text-[#F7F4EE]/75 hover:text-[#E07A2E] transition-colors"
          >
            Nakshatras
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-full border border-[#CFAF83]/25 flex items-center justify-center text-[#CFAF83] hover:text-[#E07A2E] hover:border-[#E07A2E]/50 transition-colors"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

          {/* QR Code Popover */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowQr(!showQr)}
              className="text-xs uppercase tracking-wider font-serif text-[#CFAF83] hover:text-[#F7F4EE] px-3 py-1.5 rounded-full border border-[#CFAF83]/30 hover:border-[#CFAF83]/70 transition-colors flex items-center gap-1.5"
            >
              <span>Scan to download</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="3" width="7" height="7" strokeWidth="1.8" />
                <rect x="14" y="3" width="7" height="7" strokeWidth="1.8" />
                <rect x="14" y="14" width="7" height="7" strokeWidth="1.8" />
                <rect x="3" y="14" width="7" height="7" strokeWidth="1.8" />
              </svg>
            </button>

            {showQr && (
              <div className="absolute right-0 top-11 w-52 p-4 rounded-2xl bg-[#1C1916] border border-[#CFAF83]/30 shadow-2xl z-50 text-center animate-in fade-in duration-200">
                <p className="text-xs font-serif text-[#F7F4EE] mb-2 font-medium">
                  Scan to install app
                </p>
                <div className="p-2.5 bg-white rounded-xl inline-block">
                  <svg className="w-24 h-24 text-black" viewBox="0 0 100 100">
                    <rect x="10" y="10" width="25" height="25" fill="black" />
                    <rect x="15" y="15" width="15" height="15" fill="white" />
                    <rect x="19" y="19" width="7" height="7" fill="black" />
                    <rect x="65" y="10" width="25" height="25" fill="black" />
                    <rect x="70" y="15" width="15" height="15" fill="white" />
                    <rect x="74" y="19" width="7" height="7" fill="black" />
                    <rect x="10" y="65" width="25" height="25" fill="black" />
                    <rect x="15" y="70" width="15" height="15" fill="white" />
                    <rect x="19" y="74" width="7" height="7" fill="black" />
                    <circle cx="50" cy="50" r="8" fill="#E07A2E" />
                    <rect x="42" y="15" width="6" height="20" fill="black" />
                    <rect x="70" y="65" width="18" height="18" fill="black" />
                  </svg>
                </div>
                <div className="text-[10px] text-[#A69E94] mt-2 font-serif">
                  iOS & Android
                </div>
                <button
                  onClick={() => setShowQr(false)}
                  className="mt-2 text-[10px] text-[#CFAF83] hover:underline block mx-auto"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>

          {/* Primary CTA Button: Download App */}
          <Link
            to="/download"
            className="px-5 py-2.5 rounded-full bg-[#E07A2E] hover:bg-[#E07A2E]/90 text-[#141210] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            Download app
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F4EE] hover:text-[#E07A2E] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#CFAF83]/15 bg-[#141210] px-6 py-6 space-y-4">
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest font-serif text-[#F7F4EE]/90 hover:text-[#E07A2E]"
          >
            Blog
          </Link>
          <Link
            to="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest font-serif text-[#F7F4EE]/90 hover:text-[#E07A2E]"
          >
            Tools
          </Link>
          <Link
            to="/astrology/zodiac-signs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest font-serif text-[#F7F4EE]/90 hover:text-[#E07A2E]"
          >
            Signs
          </Link>
          <Link
            to="/astrology/nakshatras"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest font-serif text-[#F7F4EE]/90 hover:text-[#E07A2E]"
          >
            Nakshatras
          </Link>
        </div>
      )}
    </header>
  );
};
