import React, { useState, useMemo, useEffect } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { ALL_NAKSHATRAS, NakshatraItem } from '../data/nakshatrasData';

// Laurel Wreath Trust Metrics for Astrology Pages
const LaurelWreathTrustBadge: React.FC = () => {
  return (
    <dl className="hidden lg:flex items-center gap-6">
      <div className="flex items-center gap-2.5">
        <svg className="h-11 w-7 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
        <div className="flex min-w-[6.5rem] flex-col text-center">
          <dd className="order-1 text-2xl font-semibold tracking-tight tabular-nums text-[#181716] dark:text-[#FAF8F5]">
            27
          </dd>
          <dt className="order-2 mt-0.5 text-[0.65rem] font-medium tracking-[0.16em] text-[#827E76] uppercase leading-tight">
            Lunar<br />Mansions
          </dt>
        </div>
        <svg className="h-11 w-7 -scale-x-100 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="flex items-center gap-2.5">
        <svg className="h-11 w-7 text-[#B88E3E]/70 dark:text-[#E5B869]/70" viewBox="0 0 37 52" fill="none" aria-hidden="true">
          <path d="M19.7203 18.717C19.386 23.9533 21.7942 36.4982 35.4309 44.7872C33.7597 43.6731 29.1473 43.2497 24.067 50.4691" stroke="currentColor" strokeWidth="2.67"></path>
          <path d="M19.829 42.0254C11.3265 45.6222 6.53661 40.9491 4.92894 37.6601C4.77626 37.3478 4.92385 36.9765 5.23899 36.8297C14.0114 32.7428 18.685 37.7095 20.1719 41.2153C20.3062 41.5319 20.1457 41.8914 19.829 42.0254Z" fill="currentColor"></path>
          <path d="M12.7844 31.3C3.85652 28.9501 2.92153 22.3239 3.65924 18.7382C3.7293 18.3976 4.07301 18.194 4.41217 18.2704C13.8533 20.3972 14.5168 27.1848 13.551 30.8683C13.4637 31.201 13.117 31.3875 12.7844 31.3Z" fill="currentColor"></path>
          <path d="M13.804 16.2604C5.96376 11.386 7.02123 4.77821 8.78204 1.56862C8.94926 1.26381 9.33768 1.17042 9.63931 1.34329C18.0357 6.15565 16.6712 12.8377 14.6637 16.0736C14.4824 16.3658 14.0961 16.442 13.804 16.2604Z" fill="currentColor"></path>
        </svg>
        <div className="flex min-w-[6.5rem] flex-col text-center">
          <dd className="order-1 text-2xl font-semibold tracking-tight tabular-nums text-[#181716] dark:text-[#FAF8F5]">
            108
          </dd>
          <dt className="order-2 mt-0.5 text-[0.65rem] font-medium tracking-[0.16em] text-[#827E76] uppercase leading-tight">
            Sacred<br />Padas
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

export const NakshatrasPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRuler, setSelectedRuler] = useState<string>('All');
  const [selectedGana, setSelectedGana] = useState<string>('All');
  const [activeModalNakshatra, setActiveModalNakshatra] = useState<NakshatraItem | null>(null);

  // Handle ESC key and Lock background body scrolling when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalNakshatra(null);
      }
    };

    if (activeModalNakshatra) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalNakshatra]);

  const rulersList = ['All', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury', 'Ketu'];
  const ganasList = ['All', 'Deva', 'Manushya', 'Rakshasa'];

  const filteredNakshatras = useMemo(() => {
    return ALL_NAKSHATRAS.filter((n) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        n.name.toLowerCase().includes(q) ||
        n.sanskrit.includes(q) ||
        n.symbol.toLowerCase().includes(q) ||
        n.deity.toLowerCase().includes(q) ||
        n.ruler.toLowerCase().includes(q) ||
        n.zodiacSign.toLowerCase().includes(q);

      const matchesRuler = selectedRuler === 'All' || n.ruler.toLowerCase() === selectedRuler.toLowerCase();
      const matchesGana = selectedGana === 'All' || n.gana.toLowerCase() === selectedGana.toLowerCase();

      return matchesSearch && matchesRuler && matchesGana;
    });
  }, [searchQuery, selectedRuler, selectedGana]);

  return (
    <PageLayout
      maxWidth="max-w-7xl"
      breadcrumbs={[
        { label: 'Astrology', href: '/' },
        { label: 'Nakshatras' },
      ]}
      badge="The 27 Lunar Mansions of the Zodiac"
      title="The 27 Nakshatras"
      subtitle="Nakshatras divide the zodiac into 27 lunar mansions. Each carries a sacred symbol, presiding deity, ruling planetary lord, temperament (gana), and exact zodiac degree span."
      headerBorder={true}
      rightElement={<LaurelWreathTrustBadge />}
    >
      {/* ======================================================== */}
      {/* 1. TOP SUMMARY STATS TRIAD (Directly Matching Vaya)     */}
      {/* ======================================================== */}
      <dl className="mb-14 grid gap-6 border-b border-[#EAE6DF] dark:border-white/10 pb-8 sm:grid-cols-3">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          <dt className="text-sm font-sans font-medium text-[#827E76] uppercase tracking-wider">
            Nakshatras
          </dt>
          <dd className="mt-1 font-cormorant text-3xl font-bold tracking-tight text-[#181716] dark:text-[#FAF8F5]">
            27 Mansions
          </dd>
          <dd className="mt-1 text-xs text-[#5A5650] dark:text-[#A09D94]">
            Sidereal lunar divisions of the zodiac
          </dd>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          <dt className="text-sm font-sans font-medium text-[#827E76] uppercase tracking-wider">
            Padas
          </dt>
          <dd className="mt-1 font-cormorant text-3xl font-bold tracking-tight text-[#181716] dark:text-[#FAF8F5]">
            108 Quarters
          </dd>
          <dd className="mt-1 text-xs text-[#5A5650] dark:text-[#A09D94]">
            Four sacred Navamsa quarters per nakshatra
          </dd>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
          <dt className="text-sm font-sans font-medium text-[#827E76] uppercase tracking-wider">
            Each Span
          </dt>
          <dd className="mt-1 font-cormorant text-3xl font-bold tracking-tight text-[#B88E3E] dark:text-[#E5B869]">
            13° 20′ Arc
          </dd>
          <dd className="mt-1 text-xs text-[#5A5650] dark:text-[#A09D94]">
            Exactly 800 arcminutes across the ecliptic
          </dd>
        </div>
      </dl>

      {/* ======================================================== */}
      {/* 2. SEARCH & FILTER SUITE (Clean & Uncluttered)          */}
      {/* ======================================================== */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search by nakshatra (Rohini, Ashwini, Pushya)..."
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
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-2.5 w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center text-xs text-[#827E76] hover:text-[#181716] dark:hover:text-white cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Result Count Indicator */}
          <span className="text-xs font-sans text-[#827E76]">
            Showing <strong className="text-[#181716] dark:text-white">{filteredNakshatras.length}</strong> of 27 lunar mansions
          </span>
        </div>

        {/* Filter Rails */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-sans">
          <span className="font-bold text-[#827E76] uppercase tracking-wider text-[11px] mr-1">Ruler:</span>
          {rulersList.map((ruler) => (
            <button
              key={ruler}
              type="button"
              onClick={() => setSelectedRuler(ruler)}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                selectedRuler === ruler
                  ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716] font-bold shadow-xs'
                  : 'bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#5A5650] dark:text-[#A09D94] hover:border-[#B88E3E]'
              }`}
            >
              {ruler}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
          <span className="font-bold text-[#827E76] uppercase tracking-wider text-[11px] mr-1">Gana:</span>
          {ganasList.map((gana) => (
            <button
              key={gana}
              type="button"
              onClick={() => setSelectedGana(gana)}
              className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                selectedGana === gana
                  ? 'bg-[#B88E3E] text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#5A5650] dark:text-[#A09D94] hover:border-[#B88E3E]'
              }`}
            >
              {gana === 'All' ? 'All Ganas' : `${gana} Gana`}
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. 27 NAKSHATRAS MASTER GRID                            */}
      {/* ======================================================== */}
      <section className="mt-8 mb-24">
        <div className="mb-8">
          <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
            Lunar Mansions Catalog
          </span>
          <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
            Explore the lunar mansions
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
            Discover how your Janma Nakshatra (birth star) shapes your inner mind, spiritual temperament, planetary dasha chronology, and sacred compatibility.
          </p>
        </div>

        {filteredNakshatras.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
            <p className="text-sm text-[#827E76]">No nakshatras found matching your search and filter criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedRuler('All');
                setSelectedGana('All');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-[#B88E3E] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredNakshatras.map((nak) => (
              <div
                key={nak.id}
                onClick={() => setActiveModalNakshatra(nak)}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Aspect 2:1 High-Resolution Artwork Container */}
                  <div className="relative aspect-[2/1] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={nak.image}
                      alt={nak.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Corner Tag: Number & Sanskrit */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 dark:bg-[#181716]/85 backdrop-blur-md border border-white/20 text-[10px] font-sans font-bold text-[#181716] dark:text-white uppercase tracking-wider">
                      #{String(nak.number).padStart(2, '0')} · {nak.sanskrit}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-sans font-medium text-white/90">
                      {nak.zodiacSign}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    {/* Planetary Ruler Kicker */}
                    <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-1">
                      Ruler: {nak.ruler}
                    </p>

                    {/* Nakshatra Name */}
                    <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#FAF8F5] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors leading-tight mb-3">
                      {nak.name}
                    </h3>

                    {/* Description excerpt */}
                    <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed line-clamp-3 mb-5 font-normal">
                      {nak.desc}
                    </p>

                    {/* Definition List (Matching Vaya Specs) */}
                    <dl className="space-y-2 border-t border-[#EAE6DF] dark:border-white/10 pt-4 text-xs font-sans">
                      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
                        <dt className="text-[#827E76]">Symbol</dt>
                        <dd className="font-medium text-[#181716] dark:text-[#FAF8F5] truncate">
                          {nak.symbol}
                        </dd>
                      </div>

                      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
                        <dt className="text-[#827E76]">Deity</dt>
                        <dd className="font-medium text-[#181716] dark:text-[#FAF8F5] truncate">
                          {nak.deity}
                        </dd>
                      </div>

                      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
                        <dt className="text-[#827E76]">Zodiac Span</dt>
                        <dd className="font-medium font-mono text-[#181716] dark:text-[#FAF8F5]">
                          {nak.span}
                        </dd>
                      </div>

                      <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-2">
                        <dt className="text-[#827E76]">Gana</dt>
                        <dd className="font-medium text-[#B88E3E] dark:text-[#E5B869]">
                          {nak.gana}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Bottom Action Button (White with 2px gold border) */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                      Read nakshatra guide
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#B88E3E]/40 flex items-center justify-center text-xs text-[#B88E3E] group-hover:bg-[#B88E3E] group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* 4. LIFE GUIDANCE CALLOUT SECTION (Matching Vaya Style)  */}
      {/* ======================================================== */}
      <section className="mb-20 pt-12 border-t border-[#EAE6DF] dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Link
            to="/tools/rashi-calculator"
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] shadow-sm hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                Janma Nakshatra Calculator
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#181716] dark:text-white mb-3">
                Find your birth star &amp; Moon sign
              </h3>
              <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                Calculate your precise sidereal Moon degree, birth pada, and initial starting Vimshottari dasha balance.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
              <span>Calculate My Nakshatra</span>
              <span>→</span>
            </span>
          </Link>

          <Link
            to="/tools/kundli-matching"
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] shadow-sm hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                Ashtakoota Synastry
              </span>
              <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#181716] dark:text-white mb-3">
                Nakshatra compatibility for marriage
              </h3>
              <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                Test 36-point Guna Milan matching Nadi, Bhakoot, Gana, and Graha Maitri across two birth stars.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
              <span>Match Both Nakshatras</span>
              <span>→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. LUXURY NAKSHATRA DOSSIER MODAL (Pinterest Astrological)*/}
      {/* ======================================================== */}
      {activeModalNakshatra && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setActiveModalNakshatra(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF8F5] dark:bg-[#181A1F] border-2 border-[#B88E3E]/40 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prominent High-Contrast Floating Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalNakshatra(null)}
              className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-white dark:bg-[#181716] text-[#181716] dark:text-white border-2 border-stone-200 dark:border-white/20 shadow-2xl hover:scale-110 active:scale-95 flex items-center justify-center font-bold text-lg cursor-pointer transition-all"
              title="Close (or press Esc)"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Hero Artwork Banner */}
            <div className="relative aspect-[2.2/1] overflow-hidden bg-neutral-900">
              <img
                src={activeModalNakshatra.image}
                alt={activeModalNakshatra.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] dark:from-[#181A1F] via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 sm:left-8 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#B88E3E] text-white">
                  Nakshatra #{activeModalNakshatra.number} · {activeModalNakshatra.sanskrit}
                </span>
                <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-[#181716] dark:text-white mt-2">
                  {activeModalNakshatra.name}
                </h2>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Core Astrological Attribute Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Ruling Planet</span>
                  <span className="font-semibold text-sm text-[#B88E3E] dark:text-[#E5B869] mt-0.5 block">
                    {activeModalNakshatra.ruler}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Zodiac Span</span>
                  <span className="font-mono font-semibold text-xs text-[#181716] dark:text-white mt-0.5 block truncate">
                    {activeModalNakshatra.span}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Temperament</span>
                  <span className="font-semibold text-sm text-[#181716] dark:text-white mt-0.5 block">
                    {activeModalNakshatra.gana} Gana
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Purushartha</span>
                  <span className="font-semibold text-sm text-[#181716] dark:text-white mt-0.5 block">
                    {activeModalNakshatra.element}
                  </span>
                </div>
              </div>

              {/* In-depth Astrological Essence */}
              <div>
                <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-2">
                  Mythological &amp; Psychological Essence
                </h4>
                <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                  {activeModalNakshatra.desc}
                </p>
              </div>

              {/* Trait Chips */}
              <div>
                <h5 className="text-xs uppercase font-sans font-bold tracking-widest text-[#827E76] mb-3">
                  Core Archetypal Traits
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeModalNakshatra.traits.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-[#B88E3E]/30 text-xs font-sans font-semibold text-[#B88E3E] dark:text-[#E5B869]"
                    >
                      ✦ {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 4 Padas Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white">
                    The 4 Padas (Navamsa Harmonic Quarters)
                  </h4>
                  <span className="text-xs font-mono text-[#827E76]">3° 20′ each</span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#EAE6DF] dark:border-white/10 bg-white dark:bg-white/5">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76] bg-neutral-50 dark:bg-white/5">
                        <th className="py-2.5 px-4">Pada</th>
                        <th className="py-2.5 px-4">Arc Span</th>
                        <th className="py-2.5 px-4">Navamsa Sign</th>
                        <th className="py-2.5 px-4">Psychological Nature</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                      {activeModalNakshatra.padas.map((p) => (
                        <tr key={p.pada} className="hover:bg-[#B88E3E]/5 transition-colors">
                          <td className="py-2.5 px-4 font-bold text-[#B88E3E] dark:text-[#E5B869]">
                            Pada {p.pada}
                          </td>
                          <td className="py-2.5 px-4 font-mono text-[#827E76]">{p.span}</td>
                          <td className="py-2.5 px-4 font-semibold text-[#181716] dark:text-white">
                            {p.navamsa}
                          </td>
                          <td className="py-2.5 px-4 text-[#5A5650] dark:text-[#A09D94]">{p.nature}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Seed Syllables */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-[#B88E3E]/20">
                <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                  Nama Akshara (Sacred Sound Syllables)
                </span>
                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] mb-3">
                  Traditional Vedic syllables for naming babies born under each pada of {activeModalNakshatra.name}:
                </p>
                <div className="flex items-center gap-3">
                  {activeModalNakshatra.syllables.map((syl, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white dark:bg-[#181A1F] border border-[#B88E3E]/30 text-sm font-mono font-bold text-[#181716] dark:text-white text-center shadow-xs"
                    >
                      Pada {i + 1}: <span className="text-[#B88E3E] dark:text-[#E5B869]">{syl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career & Marriage Guidance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h5 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white mb-2">
                    Vocational Inclinations
                  </h5>
                  <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                    {activeModalNakshatra.career}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h5 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white mb-2">
                    Marital &amp; Romantic Dynamics
                  </h5>
                  <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                    {activeModalNakshatra.marriage}
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#827E76]">
                  Governed by {activeModalNakshatra.deity} · Symbolized by {activeModalNakshatra.symbol}
                </span>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalNakshatra(null)}
                    className="px-5 py-2.5 rounded-full bg-white dark:bg-[#181716] border border-[#EAE6DF] dark:border-white/20 text-xs font-bold text-[#181716] dark:text-white hover:border-[#B88E3E] cursor-pointer shadow-xs"
                  >
                    Close Dossier ✕
                  </button>
                  <Link
                    to={`/astrology/nakshatras/${activeModalNakshatra.id}`}
                    className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
                  >
                    Open Full Page Guide ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};
