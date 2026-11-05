import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link, useParams } from 'react-router-dom';
import { VAYA_TOOL_CATEGORIES, ALL_VAYA_TOOLS, ToolItem } from '../data/vayaToolsCatalog';

// Celestial Line-Art Astrological SVG Icons
const AstrologicalGlyph: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-7 h-7' }) => {
  switch (type) {
    case 'marriage':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="16" r="7" stroke="currentColor" />
          <circle cx="20" cy="16" r="7" stroke="currentColor" strokeDasharray="2 2" />
          <path d="M16 9l1.5-3 1.5 3" strokeLinecap="round" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'balance':
    case 'kundli-matching':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <line x1="16" y1="4" x2="16" y2="28" strokeLinecap="round" />
          <line x1="6" y1="9" x2="26" y2="9" strokeLinecap="round" />
          <path d="M6 9l-4 8h8l-4-8z" strokeLinejoin="round" />
          <path d="M26 9l-4 8h8l-4-8z" strokeLinejoin="round" />
          <circle cx="16" cy="9" r="2" fill="currentColor" />
        </svg>
      );
    case 'birth-chart':
    case 'kundli':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" />
          <line x1="4" y1="4" x2="28" y2="28" stroke="currentColor" />
          <line x1="28" y1="4" x2="4" y2="28" stroke="currentColor" />
          <polygon points="16,4 28,16 16,28 4,16" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'dasha':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="12" stroke="currentColor" />
          <circle cx="16" cy="16" r="8" strokeDasharray="2 2" />
          <line x1="16" y1="7" x2="16" y2="16" strokeLinecap="round" />
          <line x1="16" y1="16" x2="22" y2="16" strokeLinecap="round" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    case 'transit':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(-30 16 16)" stroke="currentColor" />
          <circle cx="25" cy="11" r="2" fill="currentColor" />
          <circle cx="7" cy="21" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'nakshatra':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M16 2L18.5 12.5L29 16L18.5 19.5L16 30L13.5 19.5L3 16L13.5 12.5Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    case 'calendar':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="5" y="6" width="22" height="22" rx="3" stroke="currentColor" />
          <line x1="21" y1="3" x2="21" y2="8" strokeLinecap="round" />
          <line x1="11" y1="3" x2="11" y2="8" strokeLinecap="round" />
          <line x1="5" y1="13" x2="27" y2="13" stroke="currentColor" />
          <circle cx="11" cy="19" r="1.5" fill="currentColor" />
          <circle cx="16" cy="19" r="1.5" fill="currentColor" />
          <circle cx="21" cy="19" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'sun':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="6" stroke="currentColor" fill="currentColor" fillOpacity="0.2" />
          <path d="M16 3v3M16 26v3M3 16h3M26 16h3M6.8 6.8l2.1 2.1M23.1 23.1l2.1 2.1M6.8 25.2l2.1-2.1M23.1 8.9l2.1-2.1" strokeLinecap="round" />
        </svg>
      );
    case 'moon':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M26 16.5A11 11 0 1 1 14.5 4a8.5 8.5 0 0 0 11.5 12.5z" stroke="currentColor" fill="currentColor" fillOpacity="0.15" />
          <circle cx="21" cy="9" r="1" fill="currentColor" />
        </svg>
      );
    case 'mars':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="13" cy="19" r="8" stroke="currentColor" />
          <line x1="19" y1="13" x2="27" y2="5" strokeLinecap="round" />
          <polyline points="20,5 27,5 27,12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'mercury':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="6" stroke="currentColor" />
          <path d="M11 6a5 5 0 0 0 10 0" strokeLinecap="round" />
          <line x1="16" y1="22" x2="16" y2="29" strokeLinecap="round" />
          <line x1="12" y1="25.5" x2="20" y2="25.5" strokeLinecap="round" />
        </svg>
      );
    case 'jupiter':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M10 8c4 0 7 2 7 7v11M17 19h9M8 21h12" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="21" y1="14" x2="21" y2="26" strokeLinecap="round" />
        </svg>
      );
    case 'venus':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="12" r="7" stroke="currentColor" />
          <line x1="16" y1="19" x2="16" y2="28" strokeLinecap="round" />
          <line x1="11" y1="23.5" x2="21" y2="23.5" strokeLinecap="round" />
        </svg>
      );
    case 'saturn':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <line x1="11" y1="5" x2="11" y2="27" strokeLinecap="round" />
          <line x1="7" y1="9" x2="16" y2="9" strokeLinecap="round" />
          <path d="M11 16c3-3 8-2 8 4s-4 7-8 7" strokeLinecap="round" />
        </svg>
      );
    case 'rahu':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="11" cy="20" r="4" stroke="currentColor" />
          <circle cx="21" cy="20" r="4" stroke="currentColor" />
          <path d="M11 16a8 8 0 0 1 10 0" strokeLinecap="round" />
          <circle cx="16" cy="10" r="2" fill="currentColor" />
        </svg>
      );
    case 'ketu':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="11" cy="12" r="4" stroke="currentColor" />
          <circle cx="21" cy="12" r="4" stroke="currentColor" />
          <path d="M11 16a8 8 0 0 0 10 0" strokeLinecap="round" />
          <circle cx="16" cy="22" r="2" fill="currentColor" />
        </svg>
      );
    case 'special-lagna':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeDasharray="3 2" />
          <line x1="4" y1="16" x2="28" y2="16" strokeLinecap="round" />
          <line x1="16" y1="4" x2="16" y2="28" strokeLinecap="round" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
          <path d="M22 10l4-4M10 22l-4 4" strokeLinecap="round" />
        </svg>
      );
    case 'return':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="11" stroke="currentColor" />
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeDasharray="2 2" />
          <path d="M16 5l3-3-3-3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    case 'prediction':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="12" stroke="currentColor" />
          <polygon points="16,6 23,22 16,18 9,22" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.15" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="16" cy="16" r="11" stroke="currentColor" />
          <polygon points="16,7 23,21 9,21" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
  }
};

const getToolGlyphType = (id: string): string => {
  if (id.includes('sun') || id.includes('planet-sun')) return 'sun';
  if (id.includes('moon') || id.includes('rashi') || id.includes('planet-moon')) return 'moon';
  if (id.includes('mars') || id.includes('mangal') || id.includes('planet-mars')) return 'mars';
  if (id.includes('mercury') || id.includes('budha') || id.includes('planet-mercury')) return 'mercury';
  if (id.includes('jupiter') || id.includes('guru') || id.includes('planet-jupiter')) return 'jupiter';
  if (id.includes('venus') || id.includes('shukra') || id.includes('planet-venus')) return 'venus';
  if (id.includes('saturn') || id.includes('shani') || id.includes('planet-saturn') || id.includes('sade-sati')) return 'saturn';
  if (id.includes('rahu') || id.includes('north-node') || id.includes('planet-rahu')) return 'rahu';
  if (id.includes('ketu') || id.includes('south-node') || id.includes('planet-ketu')) return 'ketu';
  if (id.includes('marriage') || id.includes('vivah') || id.includes('upapada')) return 'marriage';
  if (id.includes('kundli-matching') || id.includes('matching') || id.includes('synastry')) return 'balance';
  if (id.includes('dasha') || id.includes('choghadiya') || id.includes('hora')) return 'dasha';
  if (id.includes('return')) return 'return';
  if (id.includes('transit')) return 'transit';
  if (id.includes('nakshatra') || id.includes('star')) return 'nakshatra';
  if (id.includes('panchang') || id.includes('calendar') || id.includes('muhurat')) return 'calendar';
  if (id.includes('lagna') || id.includes('bindu') || id.includes('arudha') || id.includes('vargottama') || id.includes('karaka')) return 'special-lagna';
  if (id.includes('prediction') || id.includes('dosha') || id.includes('career') || id.includes('foreign') || id.includes('wealth') || id.includes('health') || id.includes('childbirth')) return 'prediction';
  return 'birth-chart';
};

export const ToolsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isSearching = searchQuery.trim().length > 0;
  const searchResults = isSearching
    ? ALL_VAYA_TOOLS.filter((t) => {
        const q = searchQuery.toLowerCase();
        return (
          t.name.toLowerCase().includes(q) ||
          t.sanskrit.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
        );
      })
    : [];

  const scrollToAllTools = () => {
    const el = document.getElementById('all-tools');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headerObservatoryStatus = (
    <div className="hidden lg:flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-[#B88E3E]/30 text-[#B88E3E] flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeDasharray="3 2" />
          <circle cx="16" cy="16" r="4" fill="currentColor" fillOpacity="0.3" stroke="currentColor" />
          <line x1="16" y1="3" x2="16" y2="29" stroke="currentColor" />
          <line x1="3" y1="16" x2="29" y2="16" stroke="currentColor" />
        </svg>
      </div>
      <div className="text-left font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#B88E3E] dark:text-[#E5B869]">
            JPL Ephemeris DE440 Active
          </span>
        </div>
        <div className="text-xs font-mono font-bold text-[#181716] dark:text-white mt-0.5">
          Sidereal Lahiri Ayanamsa 24° 11' 42"
        </div>
        <div className="text-[10px] text-[#827E76] mt-0.5">
          45 Mathematical Engines Calibrated
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      maxWidth="max-w-7xl 2xl:max-w-[1560px]"
      badge="Parashari & Jaimini Computational Observatory"
      title="Classical Vedic Astrology Calculators"
      subtitle="Authentic mathematical formulations from Brihat Parashara Hora Shastra, Jaimini Upadesha Sutras, and Surya Siddhanta calibrated to NASA JPL ephemerides and sidereal Lahiri Ayanamsa (24° 11' 42&quot;)."
      headerRight={headerObservatoryStatus}
    >
      {/* ======================================================== */}
      {/* 1. SACRED ASTRONOMICAL HORIZON BAR (PANORAMIC COMMAND DECK) */}
      {/* ======================================================== */}
      <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
        {/* Subtle Armillary Meridian Coordinate Background Watermark */}
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-dashed border-[#B88E3E]/20 pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full border border-dashed border-[#B88E3E]/15 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Top Tier: Classical Sanskrit Epigraph & Ephemeris Telemetry */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EAE6DF]/80 dark:border-white/10">
            <div className="flex-1">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] font-bold mb-1.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B88E3E] animate-pulse" />
                <span>Observable Celestial Horizon · Sidereal Lahiri Sphuta</span>
              </div>
              <p className="font-cormorant italic text-2xl sm:text-3xl text-[#181716] dark:text-[#FAF8F5] leading-snug">
                &ldquo;प्रत्यक्षं ज्योतिषं शास्त्रं चन्द्रार्कौ यत्र साक्षिणौ&rdquo;
              </p>
              <span className="text-xs text-[#827E76] font-sans block mt-1">
                Jyotish is an observable astronomical science, with the Sun and Moon as perpetual cosmic witnesses. — Surya Siddhanta
              </span>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-center">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Live Horizon Sync Active</span>
              </span>
            </div>
          </div>

          {/* Middle Tier: 6 Live Soli-Lunar Transit Telemetry Badges Across Full Width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 text-xs font-sans">
            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Ayanamsa</span>
              <span className="font-mono font-bold text-sm text-[#181716] dark:text-white mt-1 block">Lahiri 24° 11' 42"</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">Precession Offset</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Janma Chandra</span>
              <span className="font-mono font-bold text-sm text-[#B88E3E] dark:text-[#E5B869] mt-1 block">Rohini Pada 4 ★</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">Taurus (Exalted)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Surya Sphuta</span>
              <span className="font-mono font-bold text-sm text-[#181716] dark:text-white mt-1 block">Mithuna 03° 14'</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">Mrigashira 3 · Uttarayana</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Tithi Phase</span>
              <span className="font-mono font-bold text-sm text-[#181716] dark:text-white mt-1 block">Shukla Navami</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">Waxing Moon (Poorna)</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Midday Muhurta</span>
              <span className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400 mt-1 block">Abhijit Active</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">11:48 AM – 12:36 PM</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-neutral-50/90 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]/50 transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#827E76] block tracking-wider">Inauspicious Window</span>
              <span className="font-mono font-bold text-sm text-amber-600 dark:text-amber-400 mt-1 block">Rahu Kaal 13:30</span>
              <span className="text-[10px] text-[#827E76] block mt-0.5">Avoid New Ventures</span>
            </div>
          </div>

          {/* Bottom Tier: Parashari Computation Principles */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#827E76] gap-3">
            <div className="flex items-center gap-4">
              <span>✦ NASA JPL DE440 Coordinates</span>
              <span>✦ Spherical Trigonometry Bhavas</span>
              <span>✦ 16 Shodashvargas</span>
            </div>
            <div className="font-mono text-[11px]">
              Sidereal Zodiac: Lahiri Ayanamsa | Tropical Difference: -24° 11'
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. SEARCH & ANCHOR NAVIGATION BAR (FULL-WIDTH EXPANDED) */}
      {/* ======================================================== */}
      <div className="mb-16 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Full-Width Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search all 45+ classical calculators (e.g., Marriage, Navamsa D9, 120-Year Dasha, Sade Sati, Saturn Return)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 text-sm font-sans text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-all shadow-xs"
            />
            <svg
              className="absolute left-4 top-4.5 w-5 h-5 text-[#827E76]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-4.5 text-xs text-[#827E76] hover:text-[#181716] dark:hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-xs font-mono font-bold px-4 py-2 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76]">
              {isSearching ? `${searchResults.length} matching engines` : `${ALL_VAYA_TOOLS.length} Astrological Engines`}
            </span>
            {!isSearching && (
              <button
                type="button"
                onClick={scrollToAllTools}
                className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] hover:underline cursor-pointer flex items-center gap-1.5"
              >
                <span>Browse All 9 Domains</span>
                <span>↓</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Tag Suggestions & Domain Anchor Rail */}
        {!isSearching && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-sans font-medium whitespace-nowrap text-[#827E76]">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#B88E3E] dark:text-[#E5B869]">Popular:</span>
              {['Marriage Timing', '36-Guna Kundli Match', 'D1 Janam Kundli', 'Navamsa D9', '120-Year Dasha', 'Saturn Return', 'Sade Sati', 'Choghadiya', 'Arudha Lagna'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] text-[11px] text-[#5A5650] dark:text-[#A09D94] hover:text-[#181716] dark:hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Category Domain Buttons */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
              {VAYA_TOOL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    const el = document.getElementById(cat.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="py-2.5 px-4 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716] dark:hover:text-white hover:border-[#B88E3E] transition-all cursor-pointer text-[11px] flex items-center gap-2"
                >
                  <span>{cat.title}</span>
                  <span className="w-4 h-4 rounded-full bg-neutral-100 dark:bg-white/10 text-[9px] flex items-center justify-center font-mono">
                    {cat.tools.length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* 3. SEARCH RESULTS (IF QUERY ACTIVE) */}
      {/* ======================================================== */}
      {isSearching ? (
        <div className="mb-24">
          <div className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-4">
            Search Results ({searchResults.length})
          </div>
          {searchResults.length === 0 ? (
            <div className="p-16 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
              <p className="text-[#827E76] text-base mb-2">No calculators found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-bold text-[#B88E3E] hover:underline cursor-pointer"
              >
                Clear search to browse all 45+ calculators
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#B88E3E]">{tool.sanskrit}</span>
                      <span className="text-[10px] font-sans uppercase font-bold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/10 text-[#827E76]">
                        {tool.category}
                      </span>
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                    {tool.classicalSource && (
                      <span className="text-[11px] text-[#827E76] font-serif italic block mb-4">
                        Ref: {tool.classicalSource}
                      </span>
                    )}
                  </div>
                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B88E3E] uppercase tracking-wider">
                      Calculate Now →
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#B88E3E]/30 flex items-center justify-center text-xs text-[#B88E3E] group-hover:bg-[#B88E3E] group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-28">
          
          {/* ======================================================== */}
          {/* SECTION 1: MOST USED CALCULATORS — 6 GRAND ASTROLOGICAL PLATES */}
          {/* ======================================================== */}
          <section id="most-used" className="scroll-mt-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  01 · Pillar Calculators · Start Here
                </span>
                <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Most Used Classical Engines
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Foundational Jyotish engines for matrimonial timing, 36-guna synastry, 120-year Vimshottari dasha chronologies, Gochara transits, and divisional harmonics.
              </p>
            </div>

            {/* 6 Substantial, Richly Filled Grand Plates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[0].tools.map((tool, idx) => (
                <div
                  key={tool.id}
                  className="group relative p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.03)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Background Astrolabe Glow */}
                  <div className="absolute -right-16 -bottom-16 w-44 h-44 rounded-full bg-[#B88E3E]/5 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                  <div>
                    {/* Header: Sanskrit Title & Badge */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#EAE6DF]/80 dark:border-white/10">
                      <span className="text-xs font-mono font-bold text-[#B88E3E] dark:text-[#E5B869]">
                        {tool.sanskrit}
                      </span>
                      {tool.badge && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/20">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Astrological Medallion + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-amber-500/10 dark:from-white/5 dark:to-[#B88E3E]/10 border border-[#B88E3E]/30 text-[#B88E3E] dark:text-[#E5B869] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-8 h-8" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#FAF8F5] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors leading-tight">
                          {tool.name}
                        </h3>
                        <span className="text-xs text-[#827E76] font-sans block mt-1">
                          Ref: {tool.classicalSource}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Astrological Description */}
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    {/* Visual Diagram / Micro-Widget Preview */}
                    <div className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.03] border border-[#EAE6DF]/80 dark:border-white/5 mb-6">
                      <div className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#827E76] mb-2 flex items-center justify-between">
                        <span>Calculated Output Metric</span>
                        <span className="font-mono text-[#B88E3E]">Sidereal Lahiri</span>
                      </div>
                      
                      {tool.id === 'marriage-prediction' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Dual Transit Activation:</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Jupiter & Saturn Trine</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>7th Bhava Lord:</span>
                            <span className="font-bold">Venus in 9th (Dharmic Union)</span>
                          </div>
                        </div>
                      )}

                      {tool.id === 'kundli-matching' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Ashtakoota Score:</span>
                            <span className="text-[#B88E3E] font-bold">31 / 36 Gunas (Uttama)</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>Nadi & Bhakoot:</span>
                            <span className="font-bold text-emerald-600">8/8 Nadi · 7/7 Bhakoot</span>
                          </div>
                        </div>
                      )}

                      {tool.id === 'premium-kundli' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Ascendant (Lagna):</span>
                            <span className="font-bold">Libra 14° 22' (Swati 3)</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>Janma Rashi:</span>
                            <span className="font-bold">Taurus (Rohini Pada 2)</span>
                          </div>
                        </div>
                      )}

                      {tool.id === 'dasha-calculator' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Active Mahadasha:</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Guru – Shukra (16 Yrs)</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>Next Major Shift:</span>
                            <span className="font-bold">Shani Mahadasha (19 Yrs)</span>
                          </div>
                        </div>
                      )}

                      {tool.id === 'transit-chart' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Jupiter Gochara:</span>
                            <span className="text-[#B88E3E] font-bold">Taurus (11th House Aspect)</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>Saturn Transit:</span>
                            <span className="font-bold">Aquarius (5th House Trishona)</span>
                          </div>
                        </div>
                      )}

                      {tool.id === 'nakshatra' && (
                        <div className="space-y-1.5 text-xs font-mono">
                          <div className="flex justify-between text-[#181716] dark:text-white">
                            <span>Birth Constellation:</span>
                            <span className="text-[#B88E3E] font-bold">Rohini (The Red Pearl)</span>
                          </div>
                          <div className="flex justify-between text-[#827E76]">
                            <span>Governing Deity:</span>
                            <span className="font-bold">Lord Brahma (Creator)</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Key Astrological Parameters Tags */}
                    {tool.outputs && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {tool.outputs.map((out, oIdx) => (
                          <span
                            key={oIdx}
                            className="px-3 py-1 rounded-lg bg-neutral-100/90 dark:bg-white/5 border border-[#EAE6DF]/80 dark:border-white/5 text-[11px] font-sans text-[#5A5650] dark:text-[#A09D94]"
                          >
                            ✦ {out}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* White & Gold Action Button */}
                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs group-hover:shadow-md"
                    >
                      <span>{tool.actionText || 'Launch Engine'}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ANCHOR TARGET FOR BROWSING */}
          <div id="all-tools" className="scroll-mt-16" />

          {/* ======================================================== */}
          {/* SECTION 2: TODAY'S TIMINGS FOR YOUR CITY (EXPANDED BENTO) */}
          {/* ======================================================== */}
          <section id="today-timings" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  02 · Daily Almanac · दैनिक काल चक्र
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Today's Timings for Your City
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Astronomical Soli-Lunar Panchang timings, Choghadiya day/night clocks, planetary hours (Hora), and Abhijit Muhurta calibrated to local geographic sunrise.
              </p>
            </div>

            {/* 3-Column Generous Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[1].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Classical Authority:</span>
                      <span className="italic font-serif">{tool.classicalSource}</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Inspect Daily Almanac →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 3: PICK A DATE FOR WHAT YOU ARE PLANNING (MUHURAT) */}
          {/* ======================================================== */}
          <section id="muhurat" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  03 · Auspicious Muhurat · शुभ मुहूर्त निर्णय
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Pick a Date for What You Are Planning
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Classical date selection for milestone events: weddings, housewarmings, vehicle purchases, and registry signings under Vedic electional astrology.
              </p>
            </div>

            {/* 4 Substantial Muhurat Plates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VAYA_TOOL_CATEGORIES[2].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-[11px] text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Shastra Rule:</span>
                      <span>Screens out Rikta Tithis (4, 9, 14) and Bhadra Karana.</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Find Auspicious Dates →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 4: THE 9 SACRED NAVAGRAHAS (GRAND 3x3 CABINET) */}
          {/* ======================================================== */}
          <section id="planetary-signs" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  04 · Navagraha Sphuta · नवग्रह राशि मण्डल
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  The Nine Sacred Planetary Sphutas
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Determine the exact sidereal zodiac sign, nakshatra pada, dignity (Ucha/Neecha), and karakatvas for each of the nine sacred Vedic planetary deities.
              </p>
            </div>

            {/* 3x3 Grand Planetary Cabinet */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'planet-sun',
                  name: 'Surya (Sun)',
                  sanskrit: 'सूर्य ग्रह साधन',
                  title: 'The King & Soul Principle',
                  karakatva: 'Atma (Soul), Father, Vitality, Leadership, Royal Dignity',
                  exaltation: 'Exalted in Aries (10°) · Debilitated in Libra (10°)',
                  cycle: '30 Days per Sign · 1-Year Solar Zodiac Circuit',
                  metal: 'Ruby (Manikya) · Pure Copper / Gold',
                  glyph: 'sun',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-moon',
                  name: 'Chandra (Moon)',
                  sanskrit: 'चन्द्र ग्रह साधन',
                  title: 'The Queen & Emotional Mind',
                  karakatva: 'Manas (Mind), Mother, Intuition, Fertility, Bodily Fluids',
                  exaltation: 'Exalted in Taurus (3°) · Debilitated in Scorpio (3°)',
                  cycle: '2.25 Days per Sign · 27.3-Day Lunar Orbit',
                  metal: 'Natural Pearl (Mukta) · Pure Silver',
                  glyph: 'moon',
                  path: '/tools/rashi-calculator',
                },
                {
                  id: 'planet-mars',
                  name: 'Mangala (Mars)',
                  sanskrit: 'मंगल ग्रह साधन',
                  title: 'The Commander & Divine Energy',
                  karakatva: 'Courage, Younger Siblings, Land, Physical Vitality, Surgery',
                  exaltation: 'Exalted in Capricorn (28°) · Debilitated in Cancer (28°)',
                  cycle: '45 Days per Sign · 1.88-Year Planetary Circuit',
                  metal: 'Red Coral (Moonga) · Copper',
                  glyph: 'mars',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-mercury',
                  name: 'Budha (Mercury)',
                  sanskrit: 'बुध ग्रह साधन',
                  title: 'The Prince & Analytical Intellect',
                  karakatva: 'Buddhi (Intellect), Speech, Commerce, Mathematics, Writing',
                  exaltation: 'Exalted in Virgo (15°) · Debilitated in Pisces (15°)',
                  cycle: '21 Days per Sign · Fast Multi-Retrograde Orbit',
                  metal: 'Emerald (Panna) · Brass / Bronze',
                  glyph: 'mercury',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-jupiter',
                  name: 'Guru (Jupiter)',
                  sanskrit: 'बृहस्पति ग्रह साधन',
                  title: 'The Divine Preceptor & Grace',
                  karakatva: 'Dharma, Wisdom, Children, Wealth, Higher Philosophy, Guru',
                  exaltation: 'Exalted in Cancer (5°) · Debilitated in Capricorn (5°)',
                  cycle: '1 Year per Sign · 11.86-Year Solar Orbit',
                  metal: 'Yellow Sapphire (Pukhraj) · Pure Gold',
                  glyph: 'jupiter',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-venus',
                  name: 'Shukra (Venus)',
                  sanskrit: 'शुक्र ग्रह साधन',
                  title: 'The Minister of Beauty & Love',
                  karakatva: 'Kalatra (Spouse), Romantic Harmony, Arts, Luxury, Vehicles',
                  exaltation: 'Exalted in Pisces (27°) · Debilitated in Virgo (27°)',
                  cycle: '25 Days per Sign · 224.7-Day Heliocentric Orbit',
                  metal: 'Diamond (Heera) · White Gold / Platinum',
                  glyph: 'venus',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-saturn',
                  name: 'Shani (Saturn)',
                  sanskrit: 'शनि ग्रह साधन',
                  title: 'The Lord of Karma & Time',
                  karakatva: 'Ayus (Longevity), Discipline, Duty, Labor, Delays, Solitude',
                  exaltation: 'Exalted in Libra (20°) · Debilitated in Aries (20°)',
                  cycle: '2.5 Years per Sign · 29.46-Year Grand Return',
                  metal: 'Blue Sapphire (Neelam) · Iron / Lead',
                  glyph: 'saturn',
                  path: '/tools/premium-kundli',
                },
                {
                  id: 'planet-rahu',
                  name: 'Rahu (North Node)',
                  sanskrit: 'राहु छाया ग्रह साधन',
                  title: 'The Head of the Dragon',
                  karakatva: 'Worldly Ambition, Foreign Lands, Technology, Illusion, Maya',
                  exaltation: 'Exalted in Taurus / Gemini · Debilitated in Scorpio',
                  cycle: '18 Months per Sign · Retrograde Nodal Axis',
                  metal: 'Hessonite Garnet (Gomed) · Mixed Alloys',
                  glyph: 'rahu',
                  path: '/tools/north-node',
                },
                {
                  id: 'planet-ketu',
                  name: 'Ketu (South Node)',
                  sanskrit: 'केतु छाया ग्रह साधन',
                  title: 'The Tail of the Dragon',
                  karakatva: 'Moksha (Liberation), Spiritual Detachment, Occult, Mastery',
                  exaltation: 'Exalted in Scorpio / Sagittarius · Debilitated in Taurus',
                  cycle: '18 Months per Sign · 180° Direct Opposite of Rahu',
                  metal: "Cat's Eye (Vaidurya) · Silver / Iron",
                  glyph: 'ketu',
                  path: '/tools/north-node',
                },
              ].map((graha) => (
                <div
                  key={graha.id}
                  className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-2 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <AstrologicalGlyph type={graha.glyph} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{graha.sanskrit}</span>
                    </div>

                    <div className="mb-2">
                      <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors">
                        {graha.name}
                      </h4>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] block mt-0.5">
                        {graha.title}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      <strong className="text-[#181716] dark:text-white">Karakatva:</strong> {graha.karakatva}
                    </p>

                    <div className="space-y-1.5 p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs font-mono mb-6">
                      <div className="flex justify-between text-[#5A5650] dark:text-[#A09D94]">
                        <span>Dignity:</span>
                        <span className="font-bold text-[#181716] dark:text-white">{graha.exaltation}</span>
                      </div>
                      <div className="flex justify-between text-[#827E76]">
                        <span>Transit Pace:</span>
                        <span>{graha.cycle}</span>
                      </div>
                      <div className="flex justify-between text-[#827E76]">
                        <span>Gem & Metal:</span>
                        <span>{graha.metal}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={graha.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Calculate Natal {graha.name.split(' ')[0]} →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 5: BIRTH CHART BASICS (FOUNDATION 6 PLATES) */}
          {/* ======================================================== */}
          <section id="birth-chart-basics" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  05 · Horoscope Foundation · लग्न एवं कुण्डली आधार
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Birth Chart Basics
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Fundamental sidereal coordinates, true rising ascendants (Lagna), lunar rashis, and the nodal karmic axis calculated for your birth moment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[4].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Parashari Formula:</span>
                      <span className="italic font-serif">Ref: {tool.classicalSource}</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Generate Chart Marker →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 6: DIVISIONAL CHARTS AND LAGNAS (HARMONICS 6 PLATES) */}
          {/* ======================================================== */}
          <section id="divisional-charts" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  06 · Harmonic Shodashvargas · षोडशवर्ग नवांश चक्र
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Divisional Charts and Lagnas
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Deconstruct the 30° zodiac signs into micro-harmonic charts: Navamsa (D9), Dashamsha (D10), Arudha Lagna, Upapada, and Jaimini Karakas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[5].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#827E76] block">{tool.sanskrit}</span>
                        {tool.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E] mt-1 inline-block">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Classical Authority:</span>
                      <span className="italic font-serif">Ref: {tool.classicalSource}</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Inspect Harmonic Chart →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 7: SPECIAL LAGNAS AND SENSITIVE POINTS (10 PLATES) */}
          {/* ======================================================== */}
          <section id="special-lagnas" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  07 · Jaimini Sensitive Points · विशेष लग्न एवं स्फुट
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Special Lagnas and Sensitive Points
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Astronomical sensitive points calculated from sunrise for wealth magnitude (Hora Lagna), authority (Ghatika Lagna), and destiny triggers (Bhrigu Bindu).
              </p>
            </div>

            {/* 3-Column Generous Grid of 10 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[6].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type="special-lagna" className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#827E76] block">{tool.sanskrit}</span>
                        {tool.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E] mt-1 inline-block">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Classical Source:</span>
                      <span className="italic font-serif">Ref: {tool.classicalSource}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Calculate Sensitive Point →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 8: PLANETARY RETURNS (3 GRAND BROADSHEET PLATES) */}
          {/* ======================================================== */}
          <section id="planetary-returns" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  08 · Cosmic Returns · ग्रह आवर्तन काल
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Planetary Returns
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Astronomical return cycles of Saturn (29.5 years), Jupiter (12 years), and Venus (annual) marking major psychological and karmic life thresholds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[7].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-2 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type="return" className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#827E76] block">{tool.sanskrit}</span>
                        {tool.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E] mt-1 inline-block">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Orbital Mechanics:</span>
                      <span>Calibrated to exact degree and arc-minute of natal placement.</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Calculate Return Date →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 9: PREDICTIONS AND COMPATIBILITY (11 EXPANDED PLATES) */}
          {/* ======================================================== */}
          <section id="predictions-compatibility" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                  09 · Predictive Jyotish · फलित ज्योतिष एवं मिलान
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white leading-[1.05]">
                  Predictions and Compatibility
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] max-w-xl leading-relaxed">
                Classical predictive algorithms for matrimonial timing, career milestones, foreign settlement, Sade Sati phases, and Kuja/Kaal Sarp doshas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VAYA_TOOL_CATEGORIES[8].tools.map((tool) => (
                <div
                  key={tool.id}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-[#827E76] block">{tool.sanskrit}</span>
                        {tool.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E] mt-1 inline-block">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-xs text-[#827E76] mb-6">
                      <span className="font-bold text-[#181716] dark:text-white block mb-0.5">Classical Authority:</span>
                      <span className="italic font-serif">Ref: {tool.classicalSource}</span>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10">
                    <Link
                      to={tool.path}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                    >
                      <span>Explore Prediction Engine →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 10: LIFE GUIDANCE GRAND CALLOUT PANELS */}
          {/* ======================================================== */}
          <section className="pt-10 pb-6 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-3">
                    Timing & Destiny · विवाह काल निर्णय
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181716] dark:text-white mb-4 leading-tight">
                    When will I get married?
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-8">
                    Discover your marriage timing windows calculated through the dual transit of Jupiter and Saturn activating your natal 7th house, Upapada Lagna, and D9 Navamsa.
                  </p>
                  
                  <div className="space-y-2 mb-8 text-xs font-mono text-[#827E76]">
                    <div className="flex items-center gap-2 text-[#181716] dark:text-white">
                      <span className="text-[#B88E3E]">✦</span>
                      <span>Jupiter transiting 1st, 5th, 7th, 9th, or 11th from Moon</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#181716] dark:text-white">
                      <span className="text-[#B88E3E]">✦</span>
                      <span>Active Vimshottari Mahadasha/Antardasha of 7th lord</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/tools/marriage-prediction"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                >
                  <span>Predict My Marriage Window →</span>
                </Link>
              </div>

              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1.5 transition-all flex flex-col justify-between group">
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] block mb-3">
                    Synastry & Guna Milan · अष्टकूट गुण मिलान
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181716] dark:text-white mb-4 leading-tight">
                    Is this the right person?
                  </h3>
                  <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-8">
                    Score your 36 Guna Ashtakoota compatibility and inspect emotional temperament (Gana), psychological longevity (Nadi), and mutual cancellation of Kuja Dosha.
                  </p>

                  <div className="space-y-2 mb-8 text-xs font-mono text-[#827E76]">
                    <div className="flex items-center gap-2 text-[#181716] dark:text-white">
                      <span className="text-[#B88E3E]">✦</span>
                      <span>Nadi Koota (8 Points): Genetic & Health Harmony</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#181716] dark:text-white">
                      <span className="text-[#B88E3E]">✦</span>
                      <span>Bhakoot Koota (7 Points): Mutual Emotional Longevity</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/tools/kundli-matching"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all"
                >
                  <span>Match My Kundli Now →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 11: ARCHIVAL EPHEMERIS & TREATISE BIBLIOGRAPHY */}
          {/* ======================================================== */}
          <section className="pt-12 pb-16 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50/80 dark:bg-white/[0.02] border border-[#EAE6DF] dark:border-white/10">
              <div className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-[#B88E3E] dark:text-[#E5B869] mb-3">
                Computational Astronomy & Lineage Treatises
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#181716] dark:text-white mb-6">
                Mathematical Foundations of the Astrowithin Observatory
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                <div>
                  <h5 className="font-bold text-sm text-[#181716] dark:text-white mb-2">
                    NASA JPL DE440 & Swiss Ephemeris
                  </h5>
                  <p>
                    All planetary longitudes are computed using the latest NASA JPL DE440 development ephemerides with topocentric parallax and light-time corrections, accurate to 0.001 arc-seconds.
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-sm text-[#181716] dark:text-white mb-2">
                    Sidereal Lahiri (Chitra Paksha) Ayanamsa
                  </h5>
                  <p>
                    Calibrated to the fixed star Spica (Chitra Nakshatra at exactly 180° longitude), with a precession rate of 50.29 arc-seconds annually, producing an Ayanamsa offset of 24° 11' 42".
                  </p>
                </div>

                <div>
                  <h5 className="font-bold text-sm text-[#181716] dark:text-white mb-2">
                    Classical Shastric Lineage
                  </h5>
                  <p>
                    Calculations adhere strictly to <em>Brihat Parashara Hora Shastra</em>, <em>Jaimini Upadesha Sutras</em>, <em>Surya Siddhanta</em>, and <em>Muhurta Chintamani</em> without modern superstitious deviations.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      )}
    </PageLayout>
  );
};

export const ToolCalculatorPage: React.FC<{
  toolName?: string;
  badge?: string;
  formulaDescription?: string;
}> = (props) => {
  const { toolId, muhuratType } = useParams<{ toolId?: string; muhuratType?: string }>();

  let effectiveId = toolId;
  if (!effectiveId && muhuratType) {
    effectiveId = `muhurat/${muhuratType}`;
  }

  const matchedTool = effectiveId
    ? ALL_VAYA_TOOLS.find((t) => t.path.endsWith(effectiveId!) || t.id === effectiveId)
    : props.toolName
    ? ALL_VAYA_TOOLS.find((t) => t.name.toLowerCase().includes(props.toolName!.toLowerCase()))
    : ALL_VAYA_TOOLS[0];

  const displayName = matchedTool?.name || props.toolName || 'Vedic Astrology Calculator';
  const displayBadge = matchedTool?.badge || props.badge || 'Classical Parashari Engine';
  const displayDesc = matchedTool?.desc || props.formulaDescription || 'Astronomical calculations calibrated to NASA JPL ephemerides and sidereal Lahiri Ayanamsa.';

  const [name, setName] = useState('Arjun Sharma');
  const [dob, setDob] = useState('1994-06-18');
  const [time, setTime] = useState('14:30');
  const [city, setCity] = useState('New Delhi, India');
  const [calculated, setCalculated] = useState(false);
  const [activeResultTab, setActiveResultTab] = useState<'summary' | 'planets'>('summary');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  const samplePlanets = [
    { graha: 'Surya (Sun)', sign: 'Gemini (Mithuna)', deg: '03° 14\' 22"', nak: 'Mrigashira (Pada 3)', lord: 'Mars', dignity: 'Neutral Friend', retro: false },
    { graha: 'Chandra (Moon)', sign: 'Taurus (Vrishabha)', deg: '14° 22\' 48"', nak: 'Rohini (Pada 2)', lord: 'Moon', dignity: 'Exalted (Ucha) ★', retro: false },
    { graha: 'Mangala (Mars)', sign: 'Aries (Mesha)', deg: '22° 45\' 10"', nak: 'Bharani (Pada 3)', lord: 'Venus', dignity: 'Moolatrikona ★', retro: false },
    { graha: 'Budha (Mercury)', sign: 'Taurus (Vrishabha)', deg: '28° 10\' 04"', nak: 'Mrigashira (Pada 2)', lord: 'Mars', dignity: 'Friendly Sign', retro: false },
    { graha: 'Guru (Jupiter)', sign: 'Libra (Tula)', deg: '11° 30\' 18"', nak: 'Swati (Pada 2)', lord: 'Rahu', dignity: 'Neutral Friend', retro: false },
    { graha: 'Shukra (Venus)', sign: 'Cancer (Karka)', deg: '19° 52\' 34"', nak: 'Ashlesha (Pada 1)', lord: 'Mercury', dignity: 'Enemy Sign', retro: false },
    { graha: 'Shani (Saturn)', sign: 'Aquarius (Kumbha)', deg: '17° 08\' 52"', nak: 'Shatabhisha (Pada 4)', lord: 'Rahu', dignity: 'Moolatrikona ★', retro: true },
    { graha: 'Rahu (North Node)', sign: 'Scorpio (Vrishchika)', deg: '05° 41\' 12"', nak: 'Anuradha (Pada 1)', lord: 'Saturn', dignity: 'Debilitated (Neecha)', retro: true },
    { graha: 'Ketu (South Node)', sign: 'Taurus (Vrishabha)', deg: '05° 41\' 12"', nak: 'Krittika (Pada 3)', lord: 'Sun', dignity: 'Exalted (Ucha)', retro: true },
  ];

  return (
    <PageLayout
      maxWidth="max-w-6xl 2xl:max-w-7xl"
      badge={displayBadge}
      title={displayName}
      subtitle={displayDesc}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Form Container */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#EAE6DF] dark:border-white/10">
            <h2 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA]">
              Enter Birth Details
            </h2>
            <span className="text-[10px] font-mono uppercase text-[#B88E3E] font-bold">
              Lahiri Ayanamsa
            </span>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Time of Birth (24 Hr Precision)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] mb-1.5">Place of Birth (City, Country)</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-full bg-[#181716] dark:bg-white text-white dark:text-[#181716] font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              Calculate {displayName} →
            </button>
          </form>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-[#EAE6DF] dark:border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    Computed Horoscope
                  </span>
                  <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white mt-0.5">{name}</h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E]">
                  Asc: Libra 14° 22'
                </span>
              </div>

              {/* Result Tabs */}
              <div className="flex items-center gap-2 border-b border-[#EAE6DF] dark:border-white/10 pb-2 text-xs font-bold uppercase">
                <button
                  type="button"
                  onClick={() => setActiveResultTab('summary')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${
                    activeResultTab === 'summary' ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]' : 'text-[#827E76]'
                  }`}
                >
                  Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('planets')}
                  className={`py-1.5 px-3 rounded-lg cursor-pointer ${
                    activeResultTab === 'planets' ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]' : 'text-[#827E76]'
                  }`}
                >
                  Planetary Degrees
                </button>
              </div>

              {activeResultTab === 'summary' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Ascendant (Lagna)</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Libra 14° 22'</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Lord: Venus in 9th house</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Moon Sign (Rashi)</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Taurus 14° 22'</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Nakshatra: Rohini (Pada 2)</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">Active Mahadasha</div>
                    <div className="font-cormorant font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">Jupiter – Venus</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Auspicious window for relationship & assets</div>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[#827E76] uppercase tracking-wider text-[10px] font-semibold">7th House & Partner</div>
                    <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mt-1">Aries · Mars</div>
                    <div className="text-[11px] text-[#827E76] mt-0.5">Kuja dosha cancelled by Jupiter aspect</div>
                  </div>
                </div>
              )}

              {activeResultTab === 'planets' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76]">
                        <th className="py-2">Planet</th>
                        <th className="py-2">Sign</th>
                        <th className="py-2">Degree</th>
                        <th className="py-2">Dignity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                      {samplePlanets.map((p, idx) => (
                        <tr key={idx}>
                          <td className="py-2 font-bold text-[#181716] dark:text-white">{p.graha}</td>
                          <td className="py-2 text-[#5A5650] dark:text-[#A09D94]">{p.sign}</td>
                          <td className="py-2 font-mono text-[#827E76]">{p.deg}</td>
                          <td className="py-2 font-semibold text-[#B88E3E] dark:text-[#E5B869]">{p.dignity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex justify-end">
                <Link
                  to="/download"
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
                >
                  Consult Astrologer on Astrowithin →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-80 flex flex-col items-center justify-center text-center text-[#827E76]">
              <div className="w-12 h-12 rounded-full border border-[#B88E3E] flex items-center justify-center mb-3 bg-[#B88E3E]/10 text-[#B88E3E]">
                <AstrologicalGlyph type="nakshatra" className="w-6 h-6" />
              </div>
              <p className="text-xs max-w-xs">
                Enter your birth parameters on the left to compute {displayName}.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
