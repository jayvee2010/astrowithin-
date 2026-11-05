import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { ALL_NAKSHATRAS } from '../data/nakshatrasData';

export const NakshatraDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const nakshatra = ALL_NAKSHATRAS.find((n) => n.id === slug) || ALL_NAKSHATRAS[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'padas' | 'love' | 'career'>('overview');

  const currentIndex = nakshatra.number - 1;
  const prevNakshatra = ALL_NAKSHATRAS[(currentIndex - 1 + 27) % 27];
  const nextNakshatra = ALL_NAKSHATRAS[(currentIndex + 1) % 27];

  const relatedNakshatras = ALL_NAKSHATRAS.filter(
    (n) => n.id !== nakshatra.id && (n.ruler === nakshatra.ruler || n.zodiacSign.includes(nakshatra.zodiacSign.split(' ')[0]))
  ).slice(0, 3);

  return (
    <PageLayout
      maxWidth="max-w-7xl"
      breadcrumbs={[
        { label: 'Astrology', href: '/' },
        { label: 'Nakshatras', href: '/astrology/nakshatras' },
        { label: nakshatra.name },
      ]}
      badge={`Lunar Mansion #${nakshatra.number} of 27 · ${nakshatra.sanskrit}`}
      title={`${nakshatra.name} Nakshatra`}
      subtitle={nakshatra.desc}
      headerBorder={true}
    >
      <div className="space-y-12 animate-in fade-in">
        {/* Navigation Bar between Nakshatras */}
        <div className="flex items-center justify-between py-3 px-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs font-sans">
          <Link
            to={`/astrology/nakshatras/${prevNakshatra.id}`}
            className="flex items-center gap-2 text-[#5A5650] dark:text-[#A09D94] hover:text-[#B88E3E] transition-colors"
          >
            <span>←</span>
            <span>#{prevNakshatra.number} {prevNakshatra.name}</span>
          </Link>

          <Link
            to="/astrology/nakshatras"
            className="font-bold text-[#B88E3E] dark:text-[#E5B869] hover:underline"
          >
            All 27 Nakshatras
          </Link>

          <Link
            to={`/astrology/nakshatras/${nextNakshatra.id}`}
            className="flex items-center gap-2 text-[#5A5650] dark:text-[#A09D94] hover:text-[#B88E3E] transition-colors"
          >
            <span>#{nextNakshatra.number} {nextNakshatra.name}</span>
            <span>→</span>
          </Link>
        </div>

        {/* Hero Card Split */}
        <div className="relative rounded-3xl p-6 sm:p-10 border border-[#EAE6DF] dark:border-white/10 overflow-hidden bg-white dark:bg-[#1A1C20] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Artwork Banner */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-[#EAE6DF] dark:border-white/10 shadow-xs">
                <img
                  src={nakshatra.image}
                  alt={nakshatra.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E5B869] block mb-1">
                    {nakshatra.sanskrit} · Pada 1-4
                  </span>
                  <span className="font-cormorant font-bold text-3xl">
                    {nakshatra.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Specifications Table */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Ruling Planet</span>
                  <span className="font-bold text-sm text-[#B88E3E] dark:text-[#E5B869] mt-0.5 block">
                    {nakshatra.ruler}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Zodiac Span</span>
                  <span className="font-mono font-semibold text-xs text-[#181716] dark:text-white mt-0.5 block truncate">
                    {nakshatra.span}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Temperament</span>
                  <span className="font-semibold text-sm text-[#181716] dark:text-white mt-0.5 block">
                    {nakshatra.gana} Gana
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Symbol</span>
                  <span className="font-semibold text-xs text-[#181716] dark:text-white mt-0.5 block truncate">
                    {nakshatra.symbol}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Presiding Deity</span>
                  <span className="font-semibold text-xs text-[#181716] dark:text-white mt-0.5 block truncate">
                    {nakshatra.deity}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#827E76] block">Element</span>
                  <span className="font-semibold text-sm text-[#181716] dark:text-white mt-0.5 block">
                    {nakshatra.element}
                  </span>
                </div>
              </div>

              {/* Trait Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {nakshatra.traits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#B88E3E]/30 text-xs font-semibold text-[#B88E3E] dark:text-[#E5B869]"
                  >
                    ✦ {trait}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex flex-wrap gap-4">
                <Link
                  to="/tools/rashi-calculator"
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
                >
                  Calculate My Nakshatra →
                </Link>
                <Link
                  to="/tools/kundli-matching"
                  className="px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-white/10 text-[#181716] dark:text-white text-xs font-bold uppercase tracking-wider hover:bg-[#181716] hover:text-white transition-all"
                >
                  Match with Partner
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-3 border-b border-[#EAE6DF] dark:border-white/10 pb-4 overflow-x-auto text-xs font-sans font-bold uppercase tracking-wider">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-5 rounded-full transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]'
                : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
            }`}
          >
            Overview &amp; Mythology
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('padas')}
            className={`py-2 px-5 rounded-full transition-all cursor-pointer ${
              activeTab === 'padas'
                ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]'
                : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
            }`}
          >
            The 4 Padas &amp; Syllables
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('love')}
            className={`py-2 px-5 rounded-full transition-all cursor-pointer ${
              activeTab === 'love'
                ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]'
                : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
            }`}
          >
            Love &amp; Marriage
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('career')}
            className={`py-2 px-5 rounded-full transition-all cursor-pointer ${
              activeTab === 'career'
                ? 'bg-[#181716] text-white dark:bg-white dark:text-[#181716]'
                : 'text-[#827E76] hover:text-[#181716] dark:hover:text-white'
            }`}
          >
            Careers &amp; Vocation
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 space-y-4">
              <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white">
                Cosmic Deity: {nakshatra.deity}
              </h3>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                In classical Vedic cosmology, each Nakshatra is consecrated by a presiding divine archetype. {nakshatra.name} is presided over by {nakshatra.deity}, symbolizing the divine virtues of {nakshatra.symbol}.
              </p>
              <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                {nakshatra.desc}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 space-y-4">
              <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white">
                Temperament &amp; Guna Balance
              </h3>
              <div className="space-y-3 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="font-bold uppercase text-[#827E76]">Gana Classification</span>
                  <p className="text-sm text-[#181716] dark:text-white mt-1">
                    <strong>{nakshatra.gana}</strong> — {nakshatra.gana === 'Deva' ? 'Divine, philanthropic, noble nature' : nakshatra.gana === 'Manushya' ? 'Human, balanced, hardworking and ethical' : 'Primal, passionate, fiercely independent and transformative'}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="font-bold uppercase text-[#827E76]">Sacred Animal Totem</span>
                  <p className="text-sm text-[#181716] dark:text-white mt-1">
                    <strong>{nakshatra.animal}</strong> — used in classical Yoni Koota compatibility matching.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="font-bold uppercase text-[#827E76]">Primary Guna Composition</span>
                  <p className="text-sm text-[#181716] dark:text-white mt-1">
                    <strong>{nakshatra.guna}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'padas' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
              <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white mb-4">
                The 4 Navamsa Padas of {nakshatra.name}
              </h3>
              <p className="text-sm text-[#5A5650] dark:text-[#A09D94] mb-6 max-w-2xl">
                Each nakshatra of 13° 20′ is divided into four equal 3° 20′ quarters (padas), matching the 9th divisional harmonic (D9 Navamsa) to reveal your deeper soul destiny.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-[#EAE6DF] dark:border-white/10">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76] bg-neutral-50 dark:bg-white/5">
                      <th className="py-3 px-5">Pada</th>
                      <th className="py-3 px-5">Arc Span</th>
                      <th className="py-3 px-5">Navamsa Sign</th>
                      <th className="py-3 px-5">Psychological Manifestation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                    {nakshatra.padas.map((p) => (
                      <tr key={p.pada} className="hover:bg-[#B88E3E]/5 transition-colors">
                        <td className="py-3 px-5 font-bold text-[#B88E3E] dark:text-[#E5B869]">
                          Pada {p.pada}
                        </td>
                        <td className="py-3 px-5 font-mono text-[#827E76]">{p.span}</td>
                        <td className="py-3 px-5 font-semibold text-[#181716] dark:text-white">
                          {p.navamsa}
                        </td>
                        <td className="py-3 px-5 text-[#5A5650] dark:text-[#A09D94]">{p.nature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Nama Akshara */}
            <div className="p-8 rounded-3xl bg-amber-500/10 border border-[#B88E3E]/30">
              <h4 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-2">
                Nama Akshara — Sacred Birth Syllables
              </h4>
              <p className="text-xs text-[#5A5650] dark:text-[#A09D94] mb-4">
                In classical Vedic naming ceremonies (Namakarana), the first syllable of the child's name is chosen based on the birth Pada:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {nakshatra.syllables.map((syl, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#B88E3E]/30 text-center shadow-xs"
                  >
                    <span className="text-[10px] font-mono text-[#827E76] uppercase block">Pada {idx + 1}</span>
                    <span className="font-mono font-bold text-2xl text-[#B88E3E] dark:text-[#E5B869] mt-1 block">
                      {syl}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'love' && (
          <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 space-y-6">
            <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white">
              Love, Compatibility &amp; Marriage Dynamics
            </h3>
            <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
              {nakshatra.marriage}
            </p>
            <div className="pt-6 border-t border-[#EAE6DF] dark:border-white/10">
              <Link
                to="/tools/kundli-matching"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
              >
                <span>Calculate 36-Guna Match with this Nakshatra</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'career' && (
          <div className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 space-y-6">
            <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-white">
              Vocational Calling &amp; Professional Talents
            </h3>
            <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
              {nakshatra.career}
            </p>
            <div className="pt-6 border-t border-[#EAE6DF] dark:border-white/10">
              <Link
                to="/tools/career-prediction"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-xs font-bold uppercase tracking-wider hover:bg-[#B88E3E] hover:text-white transition-all shadow-xs"
              >
                <span>Examine Career in Dasamsa (D10)</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Explore Related Nakshatras */}
        <section className="pt-8 border-t border-[#EAE6DF] dark:border-white/10">
          <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-6">
            Explore Related Nakshatras
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedNakshatras.map((rel) => (
              <Link
                key={rel.id}
                to={`/astrology/nakshatras/${rel.id}`}
                className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] transition-all flex items-center gap-4 group"
              >
                <div className="w-16 h-12 rounded-xl overflow-hidden bg-neutral-900 flex-shrink-0">
                  <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#B88E3E] dark:text-[#E5B869] block">
                    #{rel.number} · Ruler: {rel.ruler}
                  </span>
                  <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white truncate">
                    {rel.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
