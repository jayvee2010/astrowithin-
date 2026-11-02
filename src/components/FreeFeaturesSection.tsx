import React, { useState } from 'react';
import { FEATURE_TABS, REVIEWS } from '../data/contentData';

export const FreeFeaturesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('horoscope');
  const activeTab = FEATURE_TABS.find((t) => t.id === activeTabId) || FEATURE_TABS[0];
  const activeIndex = FEATURE_TABS.findIndex((t) => t.id === activeTabId);

  // Featured testimonial from REVIEWS
  const featuredReview = REVIEWS.find((r) => r.id === 'rev-5') || REVIEWS[0];

  return (
    <section
      id="features"
      aria-label="Astrowithin Free Features"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
            <span>Essential Tools For Everyday Living</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            available for free: <span className="italic font-normal text-[#E07A2E]">Clarity for love, timing, and life</span>
          </h2>
          <p className="mt-4 text-[#F7F4EE]/75 text-sm sm:text-base font-light">
            Everyday Parashari insights cast with mathematical precision—available at no cost.
          </p>
        </div>

        {/* Tab Rail Navigation */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {FEATURE_TABS.map((tab, idx) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#E07A2E] text-[#141210] font-semibold shadow-md'
                    : 'bg-[#1A1714] border border-[#CFAF83]/20 text-[#F7F4EE]/80 hover:text-[#F7F4EE] hover:border-[#CFAF83]/50'
                }`}
              >
                <span>{`0${idx + 1}. `}</span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto bg-[#1A1714] border border-[#CFAF83]/20 rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
          
          {/* Left Column: Verbatim Content from content/tabs.md */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#E07A2E] mb-3">
                <span>Feature 0{activeIndex + 1}</span>
                <span>·</span>
                <span>{activeTab.name}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F4EE] leading-snug mb-5">
                {activeTab.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F7F4EE]/80 font-light leading-relaxed mb-6">
                {activeTab.body}
              </p>
            </div>

            <div className="pt-6 border-t border-[#CFAF83]/15 flex items-center gap-4 text-xs font-serif text-[#CFAF83]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
                Free on iOS & Android
              </span>
              <span>·</span>
              <span>No credit card required</span>
            </div>
          </div>

          {/* Right Column: Product Feature Preview Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-[#141210] border border-[#CFAF83]/25 p-6 shadow-inner">
              
              {/* Feature 1: Horoscope Preview */}
              {activeTab.id === 'horoscope' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CFAF83]/15">
                    <div>
                      <div className="text-[10px] uppercase font-serif text-[#A69E94]">Daily Moon Sign (Rashi)</div>
                      <div className="text-base font-serif font-semibold text-[#F7F4EE]">Taurus (Vrishabha)</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#E07A2E]/20 text-[#E07A2E] text-xs font-serif">
                      Waxing Gibbous ☽
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1F1C18] border border-[#CFAF83]/15">
                    <div className="text-xs font-semibold text-[#F7F4EE] mb-1">Subconscious & Relational Flow</div>
                    <p className="text-xs text-[#F7F4EE]/70 font-light leading-relaxed">
                      Chandra is transiting your 2nd house of speech and resources. Auspicious window between 11:30 AM and 2:15 PM for diplomatic dialogues.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-serif">
                    <div className="p-2 rounded-lg bg-[#1F1C18]">
                      <div className="text-[10px] text-[#A69E94]">Nakshatra</div>
                      <div className="text-[#F7F4EE] font-medium mt-0.5">Rohini</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#1F1C18]">
                      <div className="text-[10px] text-[#A69E94]">Lord</div>
                      <div className="text-[#F7F4EE] font-medium mt-0.5">Venus (Shukra)</div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#1F1C18]">
                      <div className="text-[10px] text-[#A69E94]">Auspicious Color</div>
                      <div className="text-[#E07A2E] font-medium mt-0.5">Ivory Gold</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 2: Kundli Preview */}
              {activeTab.id === 'kundli' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CFAF83]/15">
                    <div>
                      <div className="text-[10px] uppercase font-serif text-[#A69E94]">Janam Kundli</div>
                      <div className="text-base font-serif font-semibold text-[#F7F4EE]">Lagna & Divisional (D9)</div>
                    </div>
                    <span className="text-xs font-serif text-[#CFAF83]">12 Bhavas Cast</span>
                  </div>

                  <div className="w-full aspect-[16/10] rounded-xl border border-[#CFAF83]/25 flex items-center justify-center bg-[#171412] relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#CFAF83]/40 p-2">
                      <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1" />
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.8" />
                      <polygon points="50,0 100,50 50,100 0,50" fill="none" stroke="currentColor" strokeWidth="1" />
                      <text x="50" y="32" fill="#E07A2E" fontSize="7" textAnchor="middle" fontFamily="serif">1 (Asc)</text>
                      <text x="50" y="70" fill="#F4A883" fontSize="7" textAnchor="middle" fontFamily="serif">7 (Ve)</text>
                      <text x="25" y="52" fill="#CFAF83" fontSize="7" textAnchor="middle" fontFamily="serif">4 (Ju)</text>
                      <text x="75" y="52" fill="#CFAF83" fontSize="7" textAnchor="middle" fontFamily="serif">10 (Sa)</text>
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#A69E94] font-serif">
                    <span>Shadbala: <strong className="text-[#F7F4EE]">132% Strong</strong></span>
                    <span>D9 Navamsa: <strong className="text-[#E07A2E]">Pushkara Vargottama</strong></span>
                  </div>
                </div>
              )}

              {/* Feature 3: Partner Preview */}
              {activeTab.id === 'partner' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CFAF83]/15">
                    <div>
                      <div className="text-[10px] uppercase font-serif text-[#A69E94]">Ashtakoota Milan</div>
                      <div className="text-base font-serif font-semibold text-[#F7F4EE]">Compatibility Score</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-serif font-bold text-[#E07A2E]">29 / 36</div>
                      <div className="text-[10px] text-[#CFAF83]">High Compatibility</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#1F1C18]">
                      <span className="text-[#F7F4EE]/80">Nadi Koota (Physiological Harmony)</span>
                      <span className="font-semibold text-[#E07A2E]">8 / 8</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#1F1C18]">
                      <span className="text-[#F7F4EE]/80">Bhakoot Koota (Emotional Depth)</span>
                      <span className="font-semibold text-[#E07A2E]">7 / 7</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#1F1C18]">
                      <span className="text-[#F7F4EE]/80">Gana Koota (Temperament Sync)</span>
                      <span className="font-semibold text-[#CFAF83]">5 / 6</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-[#1F1C18]">
                      <span className="text-[#F7F4EE]/80">Graha Maitri (Mental Harmony)</span>
                      <span className="font-semibold text-[#CFAF83]">5 / 5</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 4: Dasha Preview */}
              {activeTab.id === 'dasha' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CFAF83]/15">
                    <div>
                      <div className="text-[10px] uppercase font-serif text-[#A69E94]">Vimshottari Dasha Cycle</div>
                      <div className="text-base font-serif font-semibold text-[#F7F4EE]">Jupiter — Saturn — Venus</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#E07A2E]/20 text-[#E07A2E] font-serif">
                      Active Cycle
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#1F1C18] border border-[#CFAF83]/15">
                    <div className="text-xs font-semibold text-[#F7F4EE] mb-1">Upcoming Dasha Turning Point</div>
                    <p className="text-xs text-[#F7F4EE]/70 font-light leading-relaxed">
                      Transition from Saturn Antardasha to Mercury Antardasha activates your 5th and 9th trinal lords, favoring education, marital commitments, and financial expansion.
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs font-serif">
                    <div className="flex justify-between text-[11px] text-[#A69E94]">
                      <span>Mahadasha Progress</span>
                      <span>68% completed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#25211D] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#CFAF83] to-[#E07A2E] w-[68%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Feature 5: Past Events Preview */}
              {activeTab.id === 'past-events' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#CFAF83]/15">
                    <div>
                      <div className="text-[10px] uppercase font-serif text-[#A69E94]">Milestone Correlation</div>
                      <div className="text-base font-serif font-semibold text-[#F7F4EE]">Historical Accuracy Audit</div>
                    </div>
                    <span className="text-xs text-[#E07A2E] font-serif">Verified</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-[#1F1C18] border-l-2 border-[#E07A2E] text-xs">
                      <div className="font-semibold text-[#F7F4EE]">2019 · Relocation & Career Shift</div>
                      <div className="text-[11px] text-[#A69E94]">Triggered by Rahu-Venus dasha & Saturn transit in 9th house</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#1F1C18] border-l-2 border-[#CFAF83] text-xs">
                      <div className="font-semibold text-[#F7F4EE]">2022 · Marriage Alliance Finalized</div>
                      <div className="text-[11px] text-[#A69E94]">Dual transit of Jupiter in 7th & Venus dasha activation</div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Featured Testimonial Beneath */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#1A1714] border border-[#CFAF83]/20 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-[#E07A2E]/20 text-[#E07A2E] flex items-center justify-center font-serif text-2xl font-bold flex-shrink-0">
            “
          </div>
          <div>
            <div className="flex justify-center sm:justify-start text-[#E07A2E] text-xs mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm text-[#F7F4EE]/85 font-light italic leading-relaxed">
              "{featuredReview.text}"
            </p>
            <div className="text-xs font-serif text-[#CFAF83] mt-2 font-medium">
              {featuredReview.name} · {featuredReview.city}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
