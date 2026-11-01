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
        <div
          className="relative rounded-[3rem] p-8 sm:p-12 border border-[#CFAF83]/40 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(18, 14, 24, 0.95) 100%)',
          }}
        >
          {/* Subtle Ambient Elemental Glow */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-[120px]"
            style={{
              backgroundColor:
                sign.element === 'Fire'
                  ? '#E07A2E'
                  : sign.element === 'Earth'
                  ? '#CFAF83'
                  : sign.element === 'Air'
                  ? '#7A6D7F'
                  : '#475368',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: The Card Artwork with Authentic Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-72 h-96 sm:h-[28rem] rounded-3xl overflow-hidden border-2 border-[#CFAF83]/40 bg-[#0A070D] flex items-center justify-center shadow-[0_0_30px_rgba(207,175,131,0.2)]">
                <img
                  src={sign.image}
                  alt={sign.name}
                  className="w-full h-full object-contain p-4 drop-shadow-[0_0_25px_rgba(224,122,46,0.35)]"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A070D] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Foundational Cosmic Metrics Table */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-[#E07A2E]/20 border border-[#E07A2E]/40 text-[#F4A883]">
                  {sign.element} Element
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-[#CFAF83]/15 border border-[#CFAF83]/30 text-[#CFAF83]">
                  {sign.quality}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-[#120E18] border border-[#7A6D7F]/40 text-[#F6ECDD]">
                  Symbol: {sign.symbol}
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F6ECDD] leading-tight">
                Cosmic Essence of {sign.westernName}
              </h2>

              <p className="text-sm sm:text-base text-[#F6ECDD]/85 font-light leading-relaxed">
                {sign.overview}
              </p>

              {/* Parashari Metric Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#CFAF83]/20 text-xs font-serif">
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Ruling Lord</span>
                  <span className="text-[#F4A883] font-bold text-sm">{sign.lord}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Vedic Gemstone</span>
                  <span className="text-[#CFAF83] font-bold text-sm">{sign.favorableGem.split('/')[0]}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Kalapurusha Part</span>
                  <span className="text-[#F6ECDD] font-bold text-sm">{sign.bodyPart}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Auspicious Color</span>
                  <span className="text-[#F6ECDD] font-bold text-sm">{sign.luckyColor.split(',')[0]}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Lucky Numbers</span>
                  <span className="text-[#F4A883] font-bold text-sm">{sign.favorableNumbers}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20">
                  <span className="text-[#7A6D7F] block uppercase tracking-wider text-[10px]">Sidereal Arc</span>
                  <span className="text-[#CFAF83] font-bold text-sm">{(sign.signNumber - 1) * 30}° – {sign.signNumber * 30}°</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive In-depth Navigation Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#CFAF83]/20 pb-4">
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
                className={`px-5 py-2.5 rounded-full font-serif text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E07A2E] to-[#F4A883] text-[#120E18] font-bold shadow-[0_0_20px_rgba(224,122,46,0.4)] scale-105'
                    : 'bg-[#120E18]/80 text-[#CFAF83] border border-[#CFAF83]/30 hover:border-[#E07A2E] hover:text-[#F6ECDD]'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#120E18]/85 border border-[#CFAF83]/30 shadow-2xl relative">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest">
                Parashari Foundations
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F6ECDD]">
                The Architectural Role of {sign.name} in the Zodiac
              </h3>
              <p className="text-base text-[#F6ECDD]/85 leading-relaxed font-light">
                {sign.overview}
              </p>
              <div className="p-6 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/25 mt-6">
                <h4 className="font-serif font-bold text-base text-[#F4A883] mb-2">
                  The Kalapurusha Anatomy: {sign.bodyPart}
                </h4>
                <p className="text-xs sm:text-sm text-[#F6ECDD]/80 leading-relaxed font-light">
                  In classical Vedic texts, each sign corresponds to a sacred limb of the Kalapurusha. For {sign.name}, it governs the {sign.bodyPart.toLowerCase()}. Planetary afflictions in this sign frequently manifest as sensitivities in these physiological sectors, requiring conscious lifestyle and Ayurvedic grounding.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PERSONALITY */}
          {activeTab === 'personality' && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest mb-1">
                  Psychological & Karmic Blueprint
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F6ECDD]">
                  Core Nature of {sign.name}
                </h3>
                <p className="text-sm sm:text-base text-[#F6ECDD]/85 leading-relaxed font-light mt-3">
                  {sign.personality.core}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#CFAF83]/20">
                {/* Strengths */}
                <div className="p-6 rounded-3xl bg-[#1E293B]/40 border border-emerald-500/30">
                  <h4 className="font-serif font-bold text-base text-emerald-300 mb-4 flex items-center gap-2">
                    <span>✦</span>
                    <span>Noble Strengths (Punya Gunas)</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6ECDD]/85 font-light">
                    {sign.personality.strengths.map((str, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shadow Traits */}
                <div className="p-6 rounded-3xl bg-[#1E293B]/40 border border-[#E07A2E]/30">
                  <h4 className="font-serif font-bold text-base text-[#F4A883] mb-4 flex items-center gap-2">
                    <span>◈</span>
                    <span>Shadow Aspects & Karmic Lessons</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6ECDD]/85 font-light">
                    {sign.personality.shadowTraits.map((sh, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E07A2E] font-bold">!</span>
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
                <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest mb-1">
                  7th Bhava & Kalatra Synastry
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F6ECDD]">
                  Relationship Dynamic & Compatibility
                </h3>
                <p className="text-sm sm:text-base text-[#F6ECDD]/85 leading-relaxed font-light mt-3">
                  {sign.loveAndMarriage.overview}
                </p>
              </div>

              {/* Interactive Match Checker */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#F4A883]">
                      Interactive Synastry Match Explorer
                    </h4>
                    <p className="text-xs text-[#CFAF83]">Select a partner's Moon sign to evaluate classical harmony</p>
                  </div>
                  <select
                    value={partnerSignId}
                    onChange={(e) => setPartnerSignId(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-[#120E18] border border-[#CFAF83]/50 text-[#F6ECDD] text-xs font-serif focus:outline-none focus:border-[#E07A2E]"
                  >
                    {ZODIAC_SIGNS_DATA.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({item.element})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-[#120E18]/80 border border-[#CFAF83]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-serif text-[#F6ECDD]">
                    <span className="text-[#CFAF83]">Pairing: </span>
                    <span className="font-bold text-[#E07A2E]">{sign.westernName}</span> +{' '}
                    <span className="font-bold text-[#F4A883]">
                      {ZODIAC_SIGNS_DATA.find((x) => x.id === partnerSignId)?.westernName}
                    </span>
                  </div>
                  <div className="text-xs text-[#CFAF83] font-serif">
                    {sign.loveAndMarriage.idealMatches.some((m) =>
                      m.toLowerCase().includes(partnerSignId)
                    ) ? (
                      <span className="text-emerald-400 font-bold">★ Auspicious Harmony (High Synastry)</span>
                    ) : sign.loveAndMarriage.challengingMatches.some((m) =>
                        m.toLowerCase().includes(partnerSignId)
                      ) ? (
                      <span className="text-[#F4A883] font-bold">▲ Karmic Growth Pairing (Requires Patience)</span>
                    ) : (
                      <span className="text-[#CFAF83] font-bold">● Balanced Neutral Dynamic</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif">
                <div className="p-4 rounded-2xl bg-[#120E18] border border-emerald-500/30">
                  <span className="text-emerald-400 font-bold block mb-1">Most Harmonious Matches</span>
                  <div className="text-[#F6ECDD]">{sign.loveAndMarriage.idealMatches.join(', ')}</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#120E18] border border-[#E07A2E]/30">
                  <span className="text-[#F4A883] font-bold block mb-1">Challenging / Growth Matches</span>
                  <div className="text-[#F6ECDD]">{sign.loveAndMarriage.challengingMatches.join(', ')}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CAREER & WEALTH */}
          {activeTab === 'career' && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest mb-1">
                  10th Bhava (Karma) & 2nd/11th Dhana Bhavas
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F6ECDD]">
                  Vocation, Wealth & Leadership
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-[#1E293B]/40 border border-[#CFAF83]/25">
                  <h4 className="font-serif font-bold text-sm text-[#F4A883] mb-3">Optimal Professional Vocations</h4>
                  <ul className="space-y-2 text-xs text-[#F6ECDD]/85">
                    {sign.careerAndWealth.vocations.map((v, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#E07A2E]">▸</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-3xl bg-[#1E293B]/40 border border-[#CFAF83]/25">
                  <h4 className="font-serif font-bold text-sm text-[#CFAF83] mb-3">Wealth & Fiscal Tendencies</h4>
                  <p className="text-xs text-[#F6ECDD]/85 leading-relaxed font-light">
                    {sign.careerAndWealth.financialApproach}
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#1E293B]/40 border border-[#CFAF83]/25">
                  <h4 className="font-serif font-bold text-sm text-[#F6ECDD] mb-3">Leadership & Authority Style</h4>
                  <p className="text-xs text-[#F6ECDD]/85 leading-relaxed font-light">
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
                <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest mb-1">
                  The Lunar Mansions of {sign.name}
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F6ECDD]">
                  Constituent Nakshatra Quarters (Padas)
                </h3>
                <p className="text-xs sm:text-sm text-[#F6ECDD]/80 font-light mt-1">
                  Every 30° zodiac sign is composed of exactly 2.25 Nakshatras (9 padas of 3°20' each).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sign.nakshatrasInvolved.map((nak, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-[#1E293B]/50 border border-[#CFAF83]/30 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#E07A2E] px-2 py-0.5 rounded-full bg-[#E07A2E]/15">
                        Nakshatra #{i + 1}
                      </span>
                      <h4 className="font-display font-bold text-xl text-[#F6ECDD] mt-3 mb-1">
                        {nak.name}
                      </h4>
                      <div className="text-xs text-[#F4A883] font-serif mb-3">
                        Governing Deity: {nak.deity}
                      </div>
                      <div className="text-xs text-[#CFAF83] font-light">
                        Padas: {nak.pada}
                      </div>
                    </div>

                    <Link
                      to="/astrology/nakshatras"
                      className="mt-6 pt-3 border-t border-[#CFAF83]/15 text-[11px] font-serif text-[#CFAF83] hover:text-[#E07A2E] flex items-center justify-between"
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
                <div className="text-xs font-serif text-[#CFAF83] uppercase tracking-widest mb-1">
                  Classical Jyotish Upayas
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F6ECDD]">
                  Remedies & Auspicious Harmonizers for {sign.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#F6ECDD]/80 font-light mt-1">
                  Classical Parashari remedial measures to pacify malefic transits and enhance the beneficial potency of {sign.lord}.
                </p>
              </div>

              <div className="space-y-4">
                {sign.parashariRemedies.map((rem, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#1E293B]/40 border border-[#CFAF83]/25 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#CFAF83]/50 flex items-center justify-center text-sm font-serif font-bold text-[#E07A2E] bg-[#120E18] flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#F6ECDD]/90 leading-relaxed font-light pt-1">
                      {rem}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Navigation: Switch between all 12 signs */}
        <div className="pt-8 border-t border-[#CFAF83]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/astrology/zodiac-signs"
            className="text-xs font-serif uppercase tracking-widest text-[#CFAF83] hover:text-[#E07A2E] flex items-center gap-2"
          >
            <span>← Back to all 12 Signs</span>
          </Link>

          <div className="flex items-center gap-2">
            {ZODIAC_SIGNS_DATA.map((item) => (
              <Link
                key={item.id}
                to={`/astrology/zodiac-signs/${item.id}`}
                title={item.name}
                className={`w-7 h-7 rounded-full text-xs font-serif flex items-center justify-center transition-all ${
                  item.id === sign.id
                    ? 'bg-[#E07A2E] text-[#120E18] font-bold scale-110 shadow-[0_0_10px_rgba(224,122,46,0.5)]'
                    : 'bg-[#120E18] text-[#CFAF83] border border-[#CFAF83]/30 hover:border-[#E07A2E]'
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
