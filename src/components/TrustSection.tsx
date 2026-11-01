import React, { useState } from 'react';
import { ACCREDITATIONS } from '../data/contentData';

export const TrustSection: React.FC = () => {
  const [activeConstellation, setActiveConstellation] = useState<string>('love');

  const specialisations = [
    {
      id: 'love',
      name: 'Love & Marriage',
      sanskrit: 'प्रेम विवाह',
      details: '7th Bhava, Navamsa (D9), Ashtakoota compatibility, Kuja dosha resolution.',
      stars: [
        { x: 30, y: 40 },
        { x: 50, y: 20 },
        { x: 70, y: 45 },
        { x: 50, y: 75 },
      ],
    },
    {
      id: 'career',
      name: 'Career & Purpose',
      sanskrit: 'कर्म धर्म',
      details: '10th House, Dasamsa (D10), Amatyakaraka, Saturn transits and promotions.',
      stars: [
        { x: 25, y: 70 },
        { x: 40, y: 30 },
        { x: 65, y: 25 },
        { x: 80, y: 60 },
      ],
    },
    {
      id: 'family',
      name: 'Family & Harmony',
      sanskrit: 'कुटुम्ब सुख',
      details: '2nd & 4th Bhava, Moon peace, ancestral karma, and Saptamsha lineage.',
      stars: [
        { x: 30, y: 30 },
        { x: 70, y: 30 },
        { x: 50, y: 60 },
        { x: 50, y: 80 },
      ],
    },
    {
      id: 'money',
      name: 'Money & Wealth',
      sanskrit: 'धन समृद्धि',
      details: 'Dhana Yogas, 11th House of gains, 2nd house treasury, and Jupiter blessings.',
      stars: [
        { x: 20, y: 50 },
        { x: 45, y: 25 },
        { x: 75, y: 35 },
        { x: 60, y: 70 },
      ],
    },
  ];

  return (
    <section
      id="trust"
      aria-label="Throat Chakra - Trust & Accreditations"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#475368]/50 bg-[#120E18]/70 text-[#CFAF83] text-xs font-serif uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-[#475368]" />
          <span>Vishuddha · Throat Center of Truth & Lineage</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6ECDD] mb-4 max-w-4xl mx-auto leading-tight">
          Built on classical authority, rigorous scholarship, and verified lineage.
        </h2>
        <p className="text-[#F6ECDD]/80 max-w-2xl mx-auto text-sm sm:text-base font-light mb-16">
          Every consultation adheres strictly to Brihat Parashara Hora Shastra, Jaimini Sutras, and authenticated ephemeris data.
        </p>

        {/* 1. Diverse Specialisation: Interactive Constellations */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest font-serif text-[#CFAF83] mb-8">
            Diverse Specialisation
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialisations.map((spec) => {
              const isActive = activeConstellation === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveConstellation(spec.id)}
                  className={`cursor-pointer p-8 rounded-full border transition-all duration-500 flex flex-col items-center ${
                    isActive
                      ? 'bg-[#3B2A3F]/70 border-[#E07A2E] shadow-[0_0_35px_rgba(224,122,46,0.5)] scale-105 ring-2 ring-[#CFAF83]'
                      : 'bg-[#120E18]/80 border-[#CFAF83]/30 hover:border-[#CFAF83] hover:scale-102'
                  }`}
                >
                  <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#CFAF83] mb-4">
                    <polyline
                      points={spec.stars.map((s) => `${s.x},${s.y}`).join(' ')}
                      fill="none"
                      stroke={isActive ? '#E07A2E' : 'rgba(207,175,131,0.4)'}
                      strokeWidth={isActive ? '2' : '1'}
                      strokeDasharray={isActive ? 'none' : '3 3'}
                    />
                    {spec.stars.map((s, i) => (
                      <circle
                        key={i}
                        cx={s.x}
                        cy={s.y}
                        r={isActive ? 4 : 2.5}
                        fill={isActive ? '#F4A883' : '#CFAF83'}
                        className={isActive ? 'animate-pulse' : ''}
                      />
                    ))}
                  </svg>

                  <div className="text-[10px] font-serif text-[#F4A883] uppercase tracking-widest mb-1">
                    {spec.sanskrit}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#F6ECDD] mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-[#F6ECDD]/70 font-light text-center leading-relaxed">
                    {spec.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Accredited Astrologers: 4 Logos as Planetarium Seals */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest font-serif text-[#CFAF83] mb-10">
            Accredited Astrologers · Premier Jyotish Councils
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="p-8 rounded-[2.5rem] bg-gradient-to-b from-[#1E293B]/70 to-[#120E18]/90 border border-[#CFAF83]/30 flex flex-col items-center text-center shadow-xl hover:border-[#E07A2E] transition-all duration-300 hover:-translate-y-2"
              >
                {/* Planetarium Astrolabe Ring Seal */}
                <div className="w-20 h-20 rounded-full border-2 border-[#CFAF83]/60 flex items-center justify-center bg-[#120E18] mb-5 shadow-[0_0_25px_rgba(207,175,131,0.25)]">
                  <span className="font-serif font-bold text-[#CFAF83] text-base tracking-wider">
                    {acc.abbreviation}
                  </span>
                </div>

                <div className="text-xs font-serif font-semibold text-[#F4A883] mb-1">
                  {acc.badgeText}
                </div>

                <h4 className="font-display font-bold text-base text-[#F6ECDD] mb-2">
                  {acc.name}
                </h4>

                <p className="text-[11px] text-[#F6ECDD]/70 font-light leading-relaxed">
                  {acc.description}
                </p>

                <div className="mt-4 text-[10px] text-[#CFAF83]/80 font-serif">
                  Est. {acc.founded}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Years of Experience */}
        <div className="border-t border-[#CFAF83]/30 pt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          
          <div className="p-4 flex flex-col items-center">
            <div className="font-serif text-5xl font-bold text-gold-leaf mb-2">
              10+ Years
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Minimum Experience Vetting
            </div>
            <p className="text-xs text-[#F6ECDD]/70 mt-2 font-light">
              No amateur practitioners. Every astrologer undergoes rigorous chart audits.
            </p>
          </div>

          <div className="p-4 flex flex-col items-center border-y md:border-y-0 md:border-x border-[#CFAF83]/20">
            <div className="font-serif text-2xl font-bold text-[#F6ECDD] mb-2">
              Authors and Journal Editors
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Published Scholars
            </div>
            <p className="text-xs text-[#F6ECDD]/70 mt-2 font-light">
              Contributors to leading Jyotish journals and authors of authoritative texts.
            </p>
          </div>

          <div className="p-4 flex flex-col items-center">
            <div className="font-serif text-2xl font-bold text-[#F6ECDD] mb-2">
              Lecturers at Prestigious Institutes
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Academic Faculty
            </div>
            <p className="text-xs text-[#F6ECDD]/70 mt-2 font-light">
              Active teachers instructing post-graduate students at ICAS and Bharatiya Vidya Bhavan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
