import React, { useState } from 'react';
import { FEATURE_TABS } from '../data/contentData';

export const FreeFeaturesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('horoscope');
  const activeTab = FEATURE_TABS.find((t) => t.id === activeTabId) || FEATURE_TABS[0];
  const activeIndex = FEATURE_TABS.findIndex((t) => t.id === activeTabId);

  // 5 Planets corresponding to the 5 tabs
  const planets = [
    { id: 'horoscope', symbol: '☽', name: 'Moon (Chandra)', rashi: 'Vrishabha', color: '#F4A883' },
    { id: 'kundli', symbol: '☉', name: 'Sun (Surya)', rashi: 'Simha', color: '#E07A2E' },
    { id: 'partner', symbol: '♀', name: 'Venus (Shukra)', rashi: 'Tula', color: '#CFAF83' },
    { id: 'dasha', symbol: '♃', name: 'Jupiter (Guru)', rashi: 'Dhanu', color: '#FFD54F' },
    { id: 'past-events', symbol: '♄', name: 'Saturn (Shani)', rashi: 'Makara', color: '#7A6D7F' },
  ];

  return (
    <section
      id="features"
      aria-label="Solar Plexus Chakra - Free Features"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        
        {/* Sanskrit Mandala Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CFAF83]/40 bg-[#120E18]/70 text-[#CFAF83] text-xs font-serif uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(207,175,131,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#E07A2E] animate-ping" />
            <span>Manipura · Solar Plexus · 5 Cosmic Windows</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6ECDD] dark:text-[#F6ECDD] light:text-[#1E293B] max-w-4xl mx-auto leading-tight">
            available for free: <span className="text-gold-leaf italic font-serif">Clarity for love, timing, and life</span>
          </h2>
        </div>

        {/* 3D Celestial Astrolabe Ring: 5 Planets rotating around the golden center */}
        <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 my-6">
          
          {/* Circular Celestial Dial with 5 Planetary Nodes */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center select-none flex-shrink-0">
            
            {/* Outer Rotating Astrolabe Brass Rings */}
            <div
              className="absolute inset-0 rounded-full border border-[#CFAF83]/40 transition-transform duration-1000 ease-out"
              style={{ transform: `rotate(${activeIndex * 72}deg)` }}
            />
            <div className="absolute inset-6 rounded-full border border-dashed border-[#E07A2E]/30 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-[#CFAF83]/20 pointer-events-none" />

            {/* Central Sun/Astrolabe Hub */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E07A2E] via-[#F4A883] to-[#CFAF83] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(224,122,46,0.6)] border-2 border-[#F6ECDD]/50 z-10">
              <span className="text-xl font-serif text-[#120E18] font-bold">☉</span>
              <span className="text-[10px] uppercase tracking-widest text-[#120E18] font-serif font-bold">
                {activeTab.name}
              </span>
            </div>

            {/* 5 Planetary Tab Nodes arranged around the circle */}
            {FEATURE_TABS.map((tab, idx) => {
              const planetInfo = planets[idx];
              const angle = (idx / FEATURE_TABS.length) * (2 * Math.PI) - Math.PI / 2;
              const radius = 135;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center focus:outline-none z-20 ${
                    isActive
                      ? 'scale-125 ring-4 ring-[#E07A2E] bg-[#120E18] text-[#F6ECDD] shadow-[0_0_35px_rgba(224,122,46,0.9)]'
                      : 'scale-100 bg-[#120E18]/80 text-[#CFAF83] border border-[#CFAF83]/40 hover:scale-110 hover:border-[#E07A2E]'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  aria-label={`Select tab ${tab.name}`}
                >
                  <span className="text-lg sm:text-xl font-serif">{planetInfo.symbol}</span>
                  <span className="text-[9px] uppercase tracking-wider font-serif font-semibold mt-0.5">
                    {tab.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-1.5 w-2 h-2 rounded-full bg-[#E07A2E] animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Authentic Astrological Screen Rendered as an Illuminated Manuscript / Kundli Yantra */}
          <div className="relative w-full max-w-xl p-8 sm:p-10 rounded-[3rem] border border-[#CFAF83]/40 bg-[#120E18]/85 backdrop-blur-md shadow-[0_0_50px_rgba(207,175,131,0.12)]">
            
            {/* Calligraphic Corner Filigree */}
            <div className="absolute top-4 left-4 text-[#CFAF83] text-sm select-none font-serif">☸</div>
            <div className="absolute top-4 right-4 text-[#CFAF83] text-sm select-none font-serif">☸</div>
            <div className="absolute bottom-4 left-4 text-[#CFAF83] text-sm select-none font-serif">☸</div>
            <div className="absolute bottom-4 right-4 text-[#CFAF83] text-sm select-none font-serif">☸</div>

            <div className="flex flex-col items-start">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-serif bg-[#E07A2E]/20 border border-[#E07A2E]/40 text-[#F4A883]">
                  Tab {activeIndex + 1} of 5 · Classical Module
                </span>
                <span className="text-xs text-[#CFAF83] font-serif">
                  Governing Graha: {planets[activeIndex].name}
                </span>
              </div>

              {/* Exact Tab Name */}
              <h3 className="font-display text-3xl font-bold text-[#F6ECDD] mb-4">
                {activeTab.name}
              </h3>

              {/* Verbatim Content from /content/tabs.md */}
              <p className="text-sm sm:text-base text-[#F6ECDD]/85 leading-relaxed font-light mb-8">
                {activeTab.body}
              </p>

              {/* Interactive Module Simulation based on the selected Tab */}
              <div className="w-full pt-6 border-t border-[#CFAF83]/20">
                {activeTabId === 'horoscope' && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#CFAF83]/40 flex items-center justify-center text-xl text-[#F4A883] bg-[#120E18]">
                        ☽
                      </div>
                      <div>
                        <div className="text-xs text-[#CFAF83] font-serif uppercase tracking-wider">Chandra Rashi Gochara</div>
                        <div className="text-sm font-bold text-[#F6ECDD]">Rohini Nakshatra · Taurus</div>
                      </div>
                    </div>
                    <span className="text-xs text-[#E07A2E] font-serif font-bold">Peaceful Transit</span>
                  </div>
                )}

                {activeTabId === 'kundli' && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#CFAF83]/40 flex items-center justify-center text-xl text-[#E07A2E] bg-[#120E18]">
                        ◈
                      </div>
                      <div>
                        <div className="text-xs text-[#CFAF83] font-serif uppercase tracking-wider">12 Bhavas Mapped</div>
                        <div className="text-sm font-bold text-[#F6ECDD]">Lagna: Tula · 7th: Mesha (Spouse)</div>
                      </div>
                    </div>
                    <span className="text-xs text-[#CFAF83] font-serif">Sidereal Lahiri</span>
                  </div>
                )}

                {activeTabId === 'partner' && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#CFAF83]/40 flex items-center justify-center text-xl text-[#F4A883] bg-[#120E18]">
                        ⚭
                      </div>
                      <div>
                        <div className="text-xs text-[#CFAF83] font-serif uppercase tracking-wider">Ashtakoota Milan</div>
                        <div className="text-sm font-bold text-[#F6ECDD]">Nadi 8/8 · Bhakoot 7/7</div>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-serif font-bold">31/36 Gunas</span>
                  </div>
                )}

                {activeTabId === 'dasha' && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#CFAF83]/40 flex items-center justify-center text-xl text-[#FFD54F] bg-[#120E18]">
                        ⏳
                      </div>
                      <div>
                        <div className="text-xs text-[#CFAF83] font-serif uppercase tracking-wider">Vimshottari Cycle</div>
                        <div className="text-sm font-bold text-[#F6ECDD]">Jupiter Mahadasha · Venus Antar</div>
                      </div>
                    </div>
                    <span className="text-xs text-[#F4A883] font-serif font-bold">Active 2024–27</span>
                  </div>
                )}

                {activeTabId === 'past-events' && (
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#1E293B]/60 border border-[#CFAF83]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#CFAF83]/40 flex items-center justify-center text-xl text-[#7A6D7F] bg-[#120E18]">
                        ✧
                      </div>
                      <div>
                        <div className="text-xs text-[#CFAF83] font-serif uppercase tracking-wider">Milestone Verification</div>
                        <div className="text-sm font-bold text-[#F6ECDD]">Career Shift aligned to Rahu Gochara</div>
                      </div>
                    </div>
                    <span className="text-xs text-[#CFAF83] font-serif">Verified 100%</span>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Featured Testimonial Beneath */}
        <div className="mt-14 p-6 sm:p-8 rounded-full border border-[#CFAF83]/30 bg-gradient-to-r from-[#120E18]/90 via-[#3B2A3F]/40 to-[#120E18]/90 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="text-sm sm:text-base text-[#F6ECDD] italic font-serif leading-relaxed">
            “The free Kundli and Dasha breakdown on the app is so high quality. When I spoke to Sunita Pandey, she connected past milestone events with my previous Rahu Mahadasha perfectly.”
          </p>
          <div className="mt-3 text-xs uppercase tracking-widest text-[#E07A2E] font-serif">
            — Meera Patel, Ahmedabad
          </div>
        </div>

      </div>
    </section>
  );
};
