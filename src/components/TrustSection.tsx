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
      className="px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Option 1 Vaya Clean Tech Header) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>Vishuddha · Throat Center of Truth & Lineage</span>
          </div>

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Built on classical authority, <br />
            <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
              rigorous scholarship, and verified lineage.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
            Every consultation adheres strictly to Brihat Parashara Hora Shastra, Jaimini Sutras, and authenticated ephemeris data.
          </p>
        </div>

        {/* 1. Diverse Specialisation: Interactive Constellations in Clean White Cards */}
        <div className="mb-20 pb-16 border-b border-[#EAE6DF] dark:border-white/10">
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] text-center mb-10">
            Diverse Specialisation
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialisations.map((spec) => {
              const isActive = activeConstellation === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setActiveConstellation(spec.id)}
                  onMouseEnter={() => setActiveConstellation(spec.id)}
                  className={`group cursor-pointer p-7 rounded-2xl bg-white dark:bg-[#1A1C20] border transition-all duration-300 flex flex-col items-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 ${
                    isActive
                      ? 'border-[#B88E3E] dark:border-[#E5B869] ring-2 ring-[#B88E3E]/20 dark:ring-[#E5B869]/20 shadow-[0_8px_30px_rgba(184,142,62,0.12)]'
                      : 'border-[#EAE6DF] dark:border-white/10 hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:ring-2 hover:ring-[#B88E3E]/20'
                  }`}
                >
                  {/* Constellation SVG Diagram with Fine-Line Stars */}
                  <svg viewBox="0 0 100 100" className="w-24 h-24 mb-4 transition-transform duration-300 group-hover:scale-105">
                    <polyline
                      points={spec.stars.map((s) => `${s.x},${s.y}`).join(' ')}
                      fill="none"
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'stroke-[#B88E3E] dark:stroke-[#E5B869] opacity-100 stroke-[1.8] [stroke-dasharray:none]'
                          : 'stroke-[#827E76] opacity-40 stroke-[1.2] [stroke-dasharray:3_3] group-hover:stroke-[#B88E3E] dark:group-hover:stroke-[#E5B869] group-hover:opacity-100 group-hover:stroke-[1.8] group-hover:[stroke-dasharray:none]'
                      }`}
                    />
                    {spec.stars.map((s, i) => (
                      <circle
                        key={i}
                        cx={s.x}
                        cy={s.y}
                        r={isActive ? 3.5 : 2.5}
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'fill-[#B88E3E] dark:fill-[#E5B869]'
                            : 'fill-[#827E76] group-hover:fill-[#B88E3E] dark:group-hover:fill-[#E5B869]'
                        }`}
                      />
                    ))}
                  </svg>

                  <div className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#B88E3E] dark:text-[#E5B869] mb-1">
                    {spec.sanskrit}
                  </div>
                  <h3 className="font-cormorant font-bold text-2xl mb-2 transition-colors group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869]">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                    {spec.details}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Accredited Astrologers: 4 Premier Jyotish Councils in Clean White Cards */}
        <div className="mb-20 pb-16 border-b border-[#EAE6DF] dark:border-white/10">
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] text-center mb-10">
            Accredited Astrologers · Premier Jyotish Councils
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="p-7 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col items-center justify-between text-center hover:border-[#B88E3E] hover:-translate-y-1 transition-all"
              >
                {/* Astrolabe Circular Stamp */}
                <div className="w-16 h-16 rounded-full border border-[#B88E3E] flex items-center justify-center p-2 mb-4 bg-neutral-50 dark:bg-white/5">
                  <span className="font-cormorant font-bold text-xl text-[#B88E3E] dark:text-[#E5B869]">
                    {acc.abbreviation}
                  </span>
                </div>

                <div className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#B88E3E] dark:text-[#E5B869] mb-1">
                  {acc.badgeText}
                </div>

                <h4 className="font-cormorant font-bold text-xl mb-2">
                  {acc.name}
                </h4>

                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-4 flex-1">
                  {acc.description}
                </p>

                <div className="text-[11px] font-sans uppercase tracking-widest text-[#827E76] font-semibold">
                  Est. {acc.founded}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Years of Experience Statistics (Option 1 Vaya Triple Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center">
            <div className="font-cormorant text-5xl sm:text-6xl font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2 leading-none">
              10+ Years
            </div>
            <div className="font-sans text-xs uppercase tracking-widest font-bold mb-2">
              Minimum Experience Vetting
            </div>
            <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
              No amateur practitioners. Every astrologer undergoes rigorous chart audits and live case evaluations before accreditation.
            </p>
          </div>

          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-[#EAE6DF] dark:border-white/10 py-6 md:py-0 md:px-8">
            <div className="font-cormorant text-2xl sm:text-3xl font-bold mb-2 leading-snug">
              Authors and Journal Editors
            </div>
            <div className="font-sans text-xs uppercase tracking-widest font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2">
              Published Scholars
            </div>
            <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
              Contributors to leading Jyotish journals and authors of authoritative research texts on Vimshottari timing and marriage synastry.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="font-cormorant text-2xl sm:text-3xl font-bold mb-2 leading-snug">
              Lecturers at Prestigious Institutes
            </div>
            <div className="font-sans text-xs uppercase tracking-widest font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2">
              Academic Faculty
            </div>
            <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
              Active teachers instructing post-graduate students at ICAS and Bharatiya Vidya Bhavan in classical Hora disciplines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
