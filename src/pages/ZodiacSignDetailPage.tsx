import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { ZODIAC_SIGNS_DATA, ZodiacSignDetail } from '../data/zodiacData';

export const ZodiacSignDetailPage: React.FC = () => {
  const { signId } = useParams<{ signId: string }>();
  const sign: ZodiacSignDetail =
    ZODIAC_SIGNS_DATA.find((s) => s.id === signId) || ZODIAC_SIGNS_DATA[0];

  // Interactive Tab within the Sign detail page
  const [activeTab, setActiveTab] = useState<'overview' | 'personality' | 'love' | 'career' | 'nakshatras' | 'remedies'>('overview');

  // Interactive Compatibility Checker state
  const [partnerSignId, setPartnerSignId] = useState<string>(
    sign.loveAndMarriage.idealMatches[0]?.toLowerCase().includes('leo')
      ? 'leo'
      : sign.id === 'aries'
      ? 'leo'
      : 'taurus'
  );

  return (
    <PageLayout
      badge={`Sign ${sign.signNumber} of 12 · ${sign.sanskrit} · ${sign.dates}`}
      title={`${sign.name}`}
      subtitle={sign.shortDesc}
    >
      <div className="space-y-12 animate-in fade-in">
        
        {/* Top Hero Section: Inked Placecard Artwork + Key Astrological Specs */}
        <div className="relative rounded-3xl p-8 sm:p-12 border border-[#EAE6DF] dark:border-white/10 overflow-hidden bg-white dark:bg-[#1A1C20] shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {/* Subtle Ambient Elemental Glow */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-10 blur-[100px]"
            style={{
              backgroundColor:
                sign.element === 'Fire'
                  ? '#B88E3E'
                  : sign.element === 'Earth'
                  ? '#B88E3E'
                  : sign.element === 'Air'
                  ? '#827E76'
                  : '#1E3A5F',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: The Card Artwork with Authentic Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-72 h-96 sm:h-[28rem] rounded-2xl overflow-hidden border border-[#EAE6DF] dark:border-white/10 bg-[#FAF8F5] dark:bg-[#15161A] flex items-center justify-center shadow-xs">
                <img
                  src={sign.image}
                  alt={sign.name}
                  className="w-full h-full object-contain p-4 drop-shadow-md"
                />
              </div>
            </div>

            {/* Right: Foundational Cosmic Metrics Table */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                </svg>
                <span>{sign.element} Element · {sign.quality} · Symbol: {sign.symbol}</span>
              </div>

              <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-[#181716] dark:text-[#F4F1EA] leading-tight">
                Cosmic Essence of {sign.westernName}
              </h2>

              <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                {sign.overview}
              </p>

              {/* Parashari Metric Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-sans">
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Ruling Lord</span>
                  <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold text-sm">{sign.lord}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Vedic Gemstone</span>
                  <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold text-sm">{sign.favorableGem.split('/')[0]}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Kalapurusha Part</span>
                  <span className="text-[#181716] dark:text-[#F4F1EA] font-bold text-sm">{sign.bodyPart}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Auspicious Color</span>
                  <span className="text-[#181716] dark:text-[#F4F1EA] font-bold text-sm">{sign.luckyColor.split(',')[0]}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Lucky Numbers</span>
                  <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold text-sm">{sign.favorableNumbers}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#827E76] dark:text-[#9C9A94] block uppercase tracking-wider text-[10px] font-semibold">Sidereal Arc</span>
                  <span className="text-[#181716] dark:text-[#F4F1EA] font-bold text-sm">{(sign.signNumber - 1) * 30}° – {sign.signNumber * 30}°</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive In-depth Navigation Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#EAE6DF] dark:border-white/10 pb-4">
          {[
            { id: 'overview', label: 'Overview & Essence', icon: '☉' },
            { id: 'personality', label: 'Personality & Traits', icon: '✧' },
            { id: 'love', label: 'Love, Marriage & Synastry', icon: '⚭' },
            { id: 'career', label: 'Career & Wealth', icon: '⚒' },
            { id: 'nakshatras', label: 'Lunar Nakshatras', icon: '⭐' },
            { id: 'remedies', label: 'Classical Remedies', icon: '☸' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold shadow-sm'
                    : 'bg-white dark:bg-[#1A1C20] text-[#5A5650] dark:text-[#A09D94] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] hover:text-[#181716] dark:hover:text-[#F4F1EA]'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest">
                Parashari Foundations
              </div>
              <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                The Architectural Role of {sign.name} in the Zodiac
              </h3>
              <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal">
                {sign.overview}
              </p>
              <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 mt-6">
                <h4 className="font-cormorant font-bold text-xl text-[#B88E3E] dark:text-[#E5B869] mb-2">
                  The Kalapurusha Anatomy: {sign.bodyPart}
                </h4>
                <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal">
                  In classical Vedic texts, each sign corresponds to a sacred limb of the Kalapurusha. For {sign.name}, it governs the {sign.bodyPart.toLowerCase()}. Planetary afflictions in this sign frequently manifest as sensitivities in these physiological sectors, requiring conscious lifestyle and Ayurvedic grounding.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PERSONALITY */}
          {activeTab === 'personality' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest mb-1">
                  Psychological & Karmic Blueprint
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                  Core Nature of {sign.name}
                </h3>
                <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal mt-3">
                  {sign.personality.core}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#EAE6DF] dark:border-white/10">
                {/* Strengths */}
                <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-[#F4F1EA] mb-4 flex items-center gap-2">
                    <span>✦</span>
                    <span>Noble Strengths (Punya Gunas)</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#5A5650] dark:text-[#A09D94] font-normal">
                    {sign.personality.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shadow Traits */}
                <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-[#F4F1EA] mb-4 flex items-center gap-2">
                    <span>◈</span>
                    <span>Shadow Aspects & Karmic Lessons</span>
                  </h4>
                  <ul className="space-y-2.5 text-sm text-[#5A5650] dark:text-[#A09D94] font-normal">
                    {sign.personality.shadowTraits.map((sh, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold">!</span>
                        <span>{sh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LOVE & MARRIAGE */}
          {activeTab === 'love' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest mb-1">
                  7th Bhava & Kalatra Synastry
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                  Relationship Dynamic & Compatibility
                </h3>
                <p className="text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal mt-3">
                  {sign.loveAndMarriage.overview}
                </p>
              </div>

              {/* Interactive Match Checker */}
              <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-[#F4F1EA]">
                      Interactive Synastry Match Explorer
                    </h4>
                    <p className="text-xs text-[#827E76] dark:text-[#9C9A94]">Select a partner's Moon sign to evaluate classical harmony</p>
                  </div>
                  <select
                    value={partnerSignId}
                    onChange={(e) => setPartnerSignId(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-[#EAE6DF] dark:border-white/20 text-[#181716] dark:text-[#F4F1EA] text-xs font-sans focus:outline-none focus:border-[#B88E3E]"
                  >
                    {ZODIAC_SIGNS_DATA.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({item.element})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-sans text-[#181716] dark:text-[#F4F1EA]">
                    <span className="text-[#827E76] dark:text-[#9C9A94]">Pairing: </span>
                    <span className="font-bold text-[#181716] dark:text-[#F4F1EA]">{sign.westernName}</span> +{' '}
                    <span className="font-bold text-[#B88E3E] dark:text-[#E5B869]">
                      {ZODIAC_SIGNS_DATA.find((x) => x.id === partnerSignId)?.westernName}
                    </span>
                  </div>
                  <div className="text-xs font-sans">
                    {sign.loveAndMarriage.idealMatches.some((m) =>
                      m.toLowerCase().includes(partnerSignId)
                    ) ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">★ Auspicious Harmony (High Synastry)</span>
                    ) : sign.loveAndMarriage.challengingMatches.some((m) =>
                        m.toLowerCase().includes(partnerSignId)
                      ) ? (
                      <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold">▲ Karmic Growth Pairing (Requires Patience)</span>
                    ) : (
                      <span className="text-[#827E76] dark:text-[#9C9A94] font-semibold">● Balanced Neutral Dynamic</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Most Harmonious Matches</span>
                  <div className="text-[#181716] dark:text-[#F4F1EA] font-medium">{sign.loveAndMarriage.idealMatches.join(', ')}</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold block mb-1">Challenging / Growth Matches</span>
                  <div className="text-[#181716] dark:text-[#F4F1EA] font-medium">{sign.loveAndMarriage.challengingMatches.join(', ')}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CAREER & WEALTH */}
          {activeTab === 'career' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest mb-1">
                  10th Bhava (Karma) & 2nd/11th Dhana Bhavas
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                  Vocation, Wealth & Leadership
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h4 className="font-cormorant font-bold text-lg text-[#181716] dark:text-[#F4F1EA] mb-3">Optimal Professional Vocations</h4>
                  <ul className="space-y-2 text-sm text-[#5A5650] dark:text-[#A09D94]">
                    {sign.careerAndWealth.vocations.map((v, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#B88E3E] dark:text-[#E5B869]">▸</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h4 className="font-cormorant font-bold text-lg text-[#181716] dark:text-[#F4F1EA] mb-3">Wealth & Fiscal Tendencies</h4>
                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal">
                    {sign.careerAndWealth.financialApproach}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <h4 className="font-cormorant font-bold text-lg text-[#181716] dark:text-[#F4F1EA] mb-3">Leadership & Authority Style</h4>
                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal">
                    {sign.careerAndWealth.leadershipStyle}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: NAKSHATRAS INVOLVED */}
          {activeTab === 'nakshatras' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest mb-1">
                  The Lunar Mansions of {sign.name}
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                  Constituent Nakshatra Quarters (Padas)
                </h3>
                <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal mt-1">
                  Every 30° zodiac sign is composed of exactly 2.25 Nakshatras (9 padas of 3°20' each).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sign.nakshatrasInvolved.map((nak, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1.5 mb-2">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                        </svg>
                        <span>Nakshatra #{i + 1}</span>
                      </div>
                      <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-[#F4F1EA] mb-1">
                        {nak.name}
                      </h4>
                      <div className="text-xs text-[#827E76] dark:text-[#9C9A94] font-sans mb-3">
                        Governing Deity: {nak.deity}
                      </div>
                      <div className="text-xs text-[#5A5650] dark:text-[#A09D94]">
                        Padas: {nak.pada}
                      </div>
                    </div>

                    <Link
                      to="/astrology/nakshatras"
                      className="mt-6 pt-3 border-t border-[#EAE6DF] dark:border-white/10 text-xs font-sans font-semibold text-[#181716] dark:text-[#F4F1EA] hover:text-[#B88E3E] dark:hover:text-[#E5B869] flex items-center justify-between"
                    >
                      <span>Explore Nakshatra</span>
                      <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: PARASHARI REMEDIES */}
          {activeTab === 'remedies' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <div className="text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] uppercase tracking-widest mb-1">
                  Classical Jyotish Upayas
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA]">
                  Remedies & Auspicious Harmonizers for {sign.name}
                </h3>
                <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal mt-1">
                  Classical Parashari remedial measures to pacify malefic transits and enhance the beneficial potency of {sign.lord}.
                </p>
              </div>

              <div className="space-y-4">
                {sign.parashariRemedies.map((rem, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#B88E3E] flex items-center justify-center text-xs font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] bg-white dark:bg-[#1A1C20] flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal pt-1">
                      {rem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation: Switch between all 12 signs */}
        <div className="pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/astrology/zodiac-signs"
            className="text-xs font-sans font-semibold uppercase tracking-wider text-[#5A5650] dark:text-[#A09D94] hover:text-[#B88E3E] dark:hover:text-[#E5B869] flex items-center gap-2"
          >
            <span>← Back to all 12 Signs</span>
          </Link>

          <div className="flex items-center gap-2">
            {ZODIAC_SIGNS_DATA.map((item) => (
              <Link
                key={item.id}
                to={`/astrology/zodiac-signs/${item.id}`}
                title={item.name}
                className={`w-7 h-7 rounded-full text-xs font-sans flex items-center justify-center transition-all ${
                  item.id === sign.id
                    ? 'bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold scale-105 shadow-xs'
                    : 'bg-white dark:bg-[#1A1C20] text-[#5A5650] dark:text-[#A09D94] border border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E]'
                }`}
              >
                {item.signNumber}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageLayout>
  );
};
