import React, { useState } from 'react';
import { ACCREDITATIONS } from '../data/contentData';

export const TrustSection: React.FC = () => {
  const [activeConstellation, setActiveConstellation] = useState<string>('love');

  const specialisations = [
    {
      id: 'love',
      num: '01',
      name: 'Love & Marriage',
      sanskrit: 'प्रेम विवाह',
      details: '7th Bhava, Navamsa (D9), Ashtakoota compatibility, Kuja dosha resolution.',
      stars: [
        { x: 30, y: 40 },
        { x: 50, y: 20 },
        { x: 70, y: 45 },
        { x: 50, y: 75 },
      ],
      accent: '#D9822B',
    },
    {
      id: 'career',
      num: '02',
      name: 'Career & Purpose',
      sanskrit: 'कर्म धर्म',
      details: '10th House, Dasamsa (D10), Amatyakaraka, Saturn transits and promotions.',
      stars: [
        { x: 25, y: 70 },
        { x: 40, y: 30 },
        { x: 65, y: 25 },
        { x: 80, y: 60 },
      ],
      accent: '#1E3A5F',
    },
    {
      id: 'family',
      num: '03',
      name: 'Family & Harmony',
      sanskrit: 'कुटुम्ब सुख',
      details: '2nd & 4th Bhava, Moon peace, ancestral karma, and Saptamsha lineage.',
      stars: [
        { x: 30, y: 30 },
        { x: 70, y: 30 },
        { x: 50, y: 60 },
        { x: 50, y: 80 },
      ],
      accent: '#1E4334',
    },
    {
      id: 'money',
      num: '04',
      name: 'Money & Wealth',
      sanskrit: 'धन समृद्धि',
      details: 'Dhana Yogas, 11th House of gains, 2nd house treasury, and Jupiter blessings.',
      stars: [
        { x: 20, y: 50 },
        { x: 45, y: 25 },
        { x: 75, y: 35 },
        { x: 60, y: 70 },
      ],
      accent: '#9E2A2B',
    },
  ];

  return (
    <section
      id="trust"
      aria-label="Astrowithin Trust & Accreditations"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-[#D4AF37] mb-3 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>Vishuddha · Throat Center of Truth & Lineage</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight">
            Built on classical authority, <br />
            <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
              rigorous scholarship, and verified lineage.
            </span>
          </h2>

          <p className="mt-4 opacity-80 text-sm sm:text-base font-light leading-relaxed">
            Every consultation adheres strictly to Brihat Parashara Hora Shastra, Jaimini Sutras, and authenticated ephemeris data.
          </p>
        </div>

        {/* 1. Diverse Specialisation: Interactive Constellations */}
        <div className="mb-20 pb-16 border-b border-[#E2DDD4] dark:border-white/10">
          <div className="text-xs uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] text-center mb-10">
            Diverse Specialisation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialisations.map((spec) => {
              const isActive = activeConstellation === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveConstellation(spec.id)}
                  className={`cursor-pointer p-6 border transition-all duration-300 flex flex-col items-center text-center ${
                    isActive
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15 shadow-lg'
                      : 'border-[#E2DDD4] dark:border-white/10 hover:border-[#D4AF37]/50'
                  }`}
                >
                  {/* Constellation SVG Diagram with Fine-Line Gold Stars */}
                  <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#D4AF37] mb-4">
                    <polyline
                      points={spec.stars.map((s) => `${s.x},${s.y}`).join(' ')}
                      fill="none"
                      stroke={isActive ? '#D4AF37' : 'currentColor'}
                      strokeWidth={isActive ? '1.8' : '1'}
                      strokeDasharray={isActive ? 'none' : '3 3'}
                      opacity={isActive ? 1 : 0.4}
                    />
                    {spec.stars.map((s, i) => (
                      <circle
                        key={i}
                        cx={s.x}
                        cy={s.y}
                        r={isActive ? 3.5 : 2}
                        fill={spec.accent}
                        stroke="#D4AF37"
                        strokeWidth={0.8}
                      />
                    ))}
                  </svg>

                  <div 
                    className="text-[10px] font-cinzel uppercase tracking-widest font-semibold mb-1"
                    style={{ color: spec.accent }}
                  >
                    {spec.sanskrit}
                  </div>
                  <h3 className="font-cormorant font-bold text-xl mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-xs opacity-75 font-light leading-relaxed">
                    {spec.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Accredited Astrologers: 4 Premier Jyotish Councils */}
        <div className="mb-20 pb-16 border-b border-[#E2DDD4] dark:border-white/10">
          <div className="text-xs uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] text-center mb-10">
            Accredited Astrologers · Premier Jyotish Councils
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="p-6 border border-[#E2DDD4] dark:border-white/10 flex flex-col items-center justify-between text-center hover:border-[#D4AF37] transition-all"
              >
                {/* Astrolabe Circular Stamp */}
                <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center p-2 mb-4 bg-[#FAF7F2] dark:bg-[#161720]">
                  <span className="font-cormorant font-bold text-xl text-[#D4AF37]">
                    {acc.abbreviation}
                  </span>
                </div>

                <div className="text-[10px] font-cinzel uppercase tracking-widest font-semibold text-[#D9822B] mb-1">
                  {acc.badgeText}
                </div>

                <h4 className="font-cormorant font-bold text-lg mb-2">
                  {acc.name}
                </h4>

                <p className="text-xs opacity-75 font-light leading-relaxed mb-4 flex-1">
                  {acc.description}
                </p>

                <div className="text-[10px] font-cinzel uppercase tracking-widest opacity-60">
                  Est. {acc.founded}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Years of Experience Statistics (Exact Vaya Triple Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center">
            <div className="font-cormorant text-5xl sm:text-6xl font-bold text-[#D4AF37] mb-2 leading-none">
              10+ Years
            </div>
            <div className="font-cinzel text-xs uppercase tracking-widest font-semibold text-[#1E3A5F] dark:text-[#E5B869] mb-2">
              Minimum Experience Vetting
            </div>
            <p className="text-xs opacity-75 font-light leading-relaxed">
              No amateur practitioners. Every astrologer undergoes rigorous chart audits and live case evaluations before accreditation.
            </p>
          </div>

          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-[#E2DDD4] dark:border-white/10 py-6 md:py-0 md:px-8">
            <div className="font-cormorant text-2xl sm:text-3xl font-bold mb-2 leading-snug">
              Authors and Journal Editors
            </div>
            <div className="font-cinzel text-xs uppercase tracking-widest font-semibold text-[#D9822B] mb-2">
              Published Scholars
            </div>
            <p className="text-xs opacity-75 font-light leading-relaxed">
              Contributors to leading Jyotish journals and authors of authoritative research texts on Vimshottari timing and marriage synastry.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-cormorant text-2xl sm:text-3xl font-bold mb-2 leading-snug">
              Lecturers at Prestigious Institutes
            </div>
            <div className="font-cinzel text-xs uppercase tracking-widest font-semibold text-[#1E4334] dark:text-[#34D399] mb-2">
              Academic Faculty
            </div>
            <p className="text-xs opacity-75 font-light leading-relaxed">
              Active teachers instructing post-graduate students at ICAS and Bharatiya Vidya Bhavan in classical Hora disciplines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
