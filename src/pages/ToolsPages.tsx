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
  if (id.includes('marriage') || id.includes('vivah')) return 'marriage';
  if (id.includes('kundli-matching') || id.includes('matching') || id.includes('synastry')) return 'balance';
  if (id.includes('dasha') || id.includes('choghadiya') || id.includes('hora')) return 'dasha';
  if (id.includes('transit') || id.includes('return')) return 'transit';
  if (id.includes('nakshatra') || id.includes('star')) return 'nakshatra';
  if (id.includes('panchang') || id.includes('calendar') || id.includes('muhurat')) return 'calendar';
  if (id.includes('sun') || id.includes('abhijit')) return 'sun';
  if (id.includes('moon') || id.includes('rashi')) return 'moon';
  return 'birth-chart';
};

// Laurel Wreath Trust Badge (Matches Vaya's editorial trust component)
const LaurelWreathTrustMetrics: React.FC = () => {
  return (
    <dl className="hidden lg:flex items-center gap-8">
      {/* 10L+ Consultations completed */}
      <div className="flex items-center gap-2.5">
        <svg className="h-11 w-7 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
        <div className="flex min-w-[7rem] flex-col text-center">
          <dd className="order-1 text-3xl font-semibold tracking-tight tabular-nums text-[#181716] dark:text-[#FAF8F5]">
            10L+
          </dd>
          <dt className="order-2 mt-1 text-[0.65rem] font-medium tracking-[0.16em] text-[#827E76] uppercase leading-tight">
            Consultations<br />completed
          </dt>
        </div>
        <svg className="h-11 w-7 -scale-x-100 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* 4.5 Rating */}
      <div className="flex items-center gap-2.5">
        <svg className="h-11 w-7 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
        <div className="flex min-w-[7rem] flex-col text-center">
          <dd className="order-1 text-3xl font-semibold tracking-tight tabular-nums text-[#181716] dark:text-[#FAF8F5]">
            4.5 ★
          </dd>
          <dt className="order-2 mt-1 text-[0.65rem] font-medium tracking-[0.16em] text-[#827E76] uppercase leading-tight">
            App Store &amp;<br />Play Store
          </dt>
        </div>
        <svg className="h-11 w-7 -scale-x-100 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
      </div>
    </dl>
  );
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

  return (
    <PageLayout
      maxWidth="max-w-7xl"
      breadcrumbs={[
        { label: 'Astrology', href: '/' },
        { label: 'Tools' },
      ]}
      title="Vedic astrology calculators"
      subtitle="Jyotish tools created with our classically trained Vedic astrologers for birth charts, compatibility, planetary signs, dashas, transits, yogas, and daily panchang."
      headerBorder={true}
      rightElement={<LaurelWreathTrustMetrics />}
    >
      {/* Clean, Minimal Search Input */}
      <div className="mb-12 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search all classical calculators (Marriage, Navamsa, Dasha)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-sm font-sans text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-all shadow-xs"
          />
          <svg
            className="absolute left-4 top-3.5 w-4 h-4 text-[#827E76]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {isSearching && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-2.5 w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-xs text-[#827E76] hover:text-[#181716] dark:hover:text-white cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. SEARCH RESULTS (IF QUERY ACTIVE) */}
      {/* ======================================================== */}
      {isSearching ? (
        <div className="mb-20">
          <div className="text-xs uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-4">
            Search Results ({searchResults.length})
          </div>
          {searchResults.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
              <p className="text-[#827E76] text-sm">No calculators found matching &ldquo;{searchQuery}&rdquo;.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {searchResults.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-6 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#827E76]">{tool.sanskrit}</span>
                      <span className="text-[10px] font-sans uppercase font-bold text-[#B88E3E]">{tool.category}</span>
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-4">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Calculate Now</span>
                    <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-24">
          
          {/* ======================================================== */}
          {/* SECTION 1: MOST USED CALCULATORS — 6 GRAND ASTROLOGICAL PLATES */}
          {/* ======================================================== */}
          <section id="most-used" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE6DF] dark:border-white/10 gap-3">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Start here
                </span>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Most used calculators
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md leading-relaxed">
                Foundational Jyotish calculators for matrimonial timing, 36-guna synastry, 120-year dasha chronologies, and divisional harmonics.
              </p>
            </div>

            {/* 6 Substantial, Richly Filled Astrological Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[0].tools.map((tool, idx) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="group relative p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Background Astrolabe Glow */}
                  <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-[#B88E3E]/5 group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                  <div>
                    {/* Header: Sanskrit Title & Badge */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EAE6DF]/80 dark:border-white/10">
                      <span className="text-xs font-mono font-bold text-[#B88E3E] dark:text-[#E5B869]">
                        {tool.sanskrit}
                      </span>
                      {tool.badge && (
                        <span className="px-3 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] border border-[#B88E3E]/20">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Astrological Medallion + Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FAF8F5] to-amber-500/10 dark:from-white/5 dark:to-[#B88E3E]/10 border border-[#B88E3E]/30 text-[#B88E3E] dark:text-[#E5B869] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#FAF8F5] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors leading-tight">
                          {tool.name}
                        </h3>
                        <span className="text-[11px] text-[#827E76] font-sans block mt-1">
                          Ref: {tool.classicalSource}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Astrological Description */}
                    <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>

                    {/* Key Astrological Parameters Tags */}
                    {tool.outputs && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {tool.outputs.map((out, oIdx) => (
                          <span
                            key={oIdx}
                            className="px-2.5 py-1 rounded-lg bg-neutral-100/80 dark:bg-white/5 border border-[#EAE6DF]/60 dark:border-white/5 text-[10px] font-sans text-[#5A5650] dark:text-[#A09D94]"
                          >
                            ✦ {out}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* White & Gold Action Button */}
                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                      {tool.actionText || 'Launch Engine →'}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#B88E3E]/30 flex items-center justify-center text-xs text-[#B88E3E] group-hover:bg-[#B88E3E] group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ANCHOR TARGET FOR BROWSING */}
          <div id="all-tools" className="scroll-mt-16" />

          {/* ======================================================== */}
          {/* SECTION 2: TODAY'S TIMINGS FOR YOUR CITY (ALMANAC) */}
          {/* ======================================================== */}
          <section id="today-timings" className="scroll-mt-24 pt-6 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Daily Almanac · दैनिक काल चक्र
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Today's timings for your city
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Astronomical panchang, choghadiya, and auspicious muhurtas calibrated to your local sunrise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[1].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Inspect Almanac</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 3: PICK A DATE FOR WHAT YOU ARE PLANNING (MUHURAT) */}
          {/* ======================================================== */}
          <section id="muhurat" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Auspicious Timing · शुभ मुहूर्त निर्णय
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Pick a date for what you are planning
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Classical date selection for weddings, housewarming, vehicle purchase, and asset registration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[2].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Find Auspicious Dates</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 4: THE 9 SACRED GRAHAS (PLANETARY SIGNS) */}
          {/* ======================================================== */}
          <section id="planetary-signs" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Navagraha Sphuta · नवग्रह राशि मण्डल
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Find planetary signs
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Determine the exact sidereal zodiac sign and degree for each of the nine sacred Vedic planets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[3].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                    </div>

                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>

                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Calculate Sign</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 5: BIRTH CHART BASICS (FOUNDATION) */}
          {/* ======================================================== */}
          <section id="birth-chart-basics" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Horoscope Foundation · लग्न एवं कुण्डली आधार
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Birth chart basics
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                True sidereal Lahiri coordinates, rising ascendants, moon rashis, and lunar nodal axes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[4].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#B88E3E] flex items-center justify-center">
                        <AstrologicalGlyph type={getToolGlyphType(tool.id)} className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Generate Chart</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 6: DIVISIONAL CHARTS AND LAGNAS (DEEPER CHARTS) */}
          {/* ======================================================== */}
          <section id="divisional-charts" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Harmonic Shodashvargas · षोडशवर्ग नवांश चक्र
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Divisional charts and lagnas
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Deconstruct the 30° zodiac signs into Navamsa (D9), Dashamsha (D10), Arudhas, and Vargottamas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[5].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Inspect Harmonic</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 7: SPECIAL LAGNAS AND SENSITIVE POINTS (JAIMINI) */}
          {/* ======================================================== */}
          <section id="special-lagnas" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Jaimini Sensitive Points · विशेष लग्न एवं स्फुट
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Special lagnas and sensitive points
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Astronomical points calculated from sunrise for wealth magnitude, power, and destiny triggers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[6].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#827E76] block">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h5 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2 leading-snug">
                      {tool.name}
                    </h5>
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Calculate Point</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 8: PLANETARY RETURNS (CYCLES) */}
          {/* ======================================================== */}
          <section id="planetary-returns" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Cosmic Returns · ग्रह आवर्तन काल
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Planetary returns
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Astronomical return cycles of Saturn, Jupiter, and Venus to their exact birth degrees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[7].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Calculate Return Date</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 9: PREDICTIONS AND COMPATIBILITY (LIFE QUESTIONS) */}
          {/* ======================================================== */}
          <section id="predictions-compatibility" className="scroll-mt-24 pt-8 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-[#EAE6DF] dark:border-white/10 gap-2">
              <div>
                <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Predictive Jyotish · फलित ज्योतिष एवं मिलान
                </span>
                <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
                  Predictions and compatibility
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#827E76] max-w-md">
                Predictive engines for career, foreign settlement, marriage timing, and doshas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VAYA_TOOL_CATEGORIES[8].tools.map((tool) => (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] hover:-translate-y-1.5 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#827E76]">{tool.sanskrit}</span>
                      {tool.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase bg-[#B88E3E]/10 text-[#B88E3E]">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white group-hover:text-[#B88E3E] transition-colors mb-2">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 font-normal">
                      {tool.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#B88E3E] pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span>Explore Prediction</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 10: LIFE GUIDANCE QUESTION CALLOUT PANELS */}
          {/* ======================================================== */}
          <section className="pt-10 pb-16 border-t border-[#EAE6DF] dark:border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Link
                to="/tools/marriage-prediction"
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-3">
                    Timing & Destiny · विवाह काल
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181716] dark:text-white mb-4 leading-tight">
                    When will I get married?
                  </h3>
                  <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-8">
                    Analyze the dual transit of Jupiter and Saturn activating your natal 7th house and Upapada Lagna.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                  <span>Predict My Marriage</span>
                  <span>→</span>
                </span>
              </Link>

              <Link
                to="/tools/kundli-matching"
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] shadow-md hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-3">
                    Synastry & Guna Milan · गुण मिलान
                  </span>
                  <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181716] dark:text-white mb-4 leading-tight">
                    Is this the right person?
                  </h3>
                  <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-8">
                    Score your 36 Guna Ashtakoota compatibility and inspect emotional, psychological, and longevity factors.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                  <span>Match My Kundli</span>
                  <span>→</span>
                </span>
              </Link>
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
      maxWidth="max-w-6xl"
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
