import React, { useState, useMemo } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { ALL_NAKSHATRAS } from '../data/nakshatrasData';

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

  const filteredNakshatras = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return ALL_NAKSHATRAS;
    return ALL_NAKSHATRAS.filter((n) => {
      return (
        n.name.toLowerCase().includes(q) ||
        n.sanskrit.includes(q) ||
        n.symbol.toLowerCase().includes(q) ||
        n.deity.toLowerCase().includes(q) ||
        n.ruler.toLowerCase().includes(q) ||
        n.zodiacSign.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

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
      {/* 2. 27 NAKSHATRAS MASTER GRID & SEARCH                   */}
      {/* ======================================================== */}
      <section className="mt-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs uppercase font-sans font-bold tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] block mb-1">
              Lunar Mansions Catalog
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight text-[#181716] dark:text-white">
              Explore the lunar mansions
            </h2>
            <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
              Discover how your Janma Nakshatra (birth star) shapes your inner mind, spiritual temperament, planetary dasha chronology, and sacred compatibility.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <input
              type="text"
              placeholder="Search by name, deity, or symbol..."
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
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {filteredNakshatras.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
            <p className="text-sm text-[#827E76]">No nakshatras found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-4 px-5 py-2 rounded-full bg-[#B88E3E] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {filteredNakshatras.map((nak) => (
              <Link
                key={nak.id}
                to={`/astrology/nakshatras/${nak.id}`}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden"
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
              </Link>
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
    </PageLayout>
  );
};
