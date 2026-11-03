import React from 'react';
import { ACCREDITATIONS } from '../data/contentData';

export const TrustSection: React.FC = () => {
  const specialisations = [
    {
      id: 'love',
      num: '01',
      name: 'Love & Marriage Timing',
      sanskrit: 'विवाह विचार',
      details: '7th Bhava, Navamsa (D9), Ashtakoota 36-point compatibility, and Kuja dosha reconciliation.',
      accent: '#D9822B',
    },
    {
      id: 'career',
      num: '02',
      name: 'Career & Life Purpose',
      sanskrit: 'कर्म धर्म',
      details: '10th House, Dasamsa (D10), Amatyakaraka, Saturn transits, and auspicious timing for enterprises.',
      accent: '#1E3A5F',
    },
    {
      id: 'family',
      num: '03',
      name: 'Family & Inner Harmony',
      sanskrit: 'कुटुम्ब सुख',
      details: '2nd & 4th Bhava, Moon peace, ancestral karma, and Saptamsha lineage examination.',
      accent: '#1E4334',
    },
    {
      id: 'money',
      num: '04',
      name: 'Wealth & Prosperity',
      sanskrit: 'धन समृद्धि',
      details: 'Dhana Yogas, 11th House of gains, 2nd house treasury, and Jupiter transit blessings.',
      accent: '#9E2A2B',
    },
  ];

  return (
    <section
      id="heritage"
      aria-label="Astrowithin Trust & Accreditations"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-60 block mb-2">
              04 · Institutional Certification & Standards
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Built on classical authority, <br />
              <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
                rigorous scholarship, and verified lineage.
              </span>
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            Every consultation adheres strictly to Brihat Parashara Hora Shastra, Jaimini Sutras, and authenticated ephemeris data.
          </p>
        </div>

        {/* Institutional Accreditation Stamps (Open Layout) */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel opacity-60 block mb-6 text-center">
            Certified Gurukula Institutions & Academic Bodies
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-[#E2DDD4] dark:border-white/10 py-10">
            <div>
              <span className="font-cormorant text-3xl sm:text-4xl font-bold block text-[#1E3A5F] dark:text-[#60A5FA]">ICAS</span>
              <span className="text-[10px] font-cinzel uppercase tracking-widest opacity-60 block mt-1">Indian Council of Astrological Sciences</span>
              <span className="text-[9px] font-mono opacity-50 block mt-0.5">Estd. 1984 · Dr. B.V. Raman</span>
            </div>
            <div>
              <span className="font-cormorant text-3xl sm:text-4xl font-bold block text-[#D9822B] dark:text-[#FBBF24]">BVB</span>
              <span className="text-[10px] font-cinzel uppercase tracking-widest opacity-60 block mt-1">Bharatiya Vidya Bhavan</span>
              <span className="text-[9px] font-mono opacity-50 block mt-0.5">Estd. 1938 · K.N. Rao Lineage</span>
            </div>
            <div>
              <span className="font-cormorant text-3xl sm:text-4xl font-bold block text-[#1E4334] dark:text-[#34D399]">ASI</span>
              <span className="text-[10px] font-cinzel uppercase tracking-widest opacity-60 block mt-1">Astronomical Society of India</span>
              <span className="text-[9px] font-mono opacity-50 block mt-0.5">Celestial Mechanics & Ephemerides</span>
            </div>
            <div>
              <span className="font-cormorant text-3xl sm:text-4xl font-bold block text-[#9E2A2B] dark:text-[#F87171]">AIFAS</span>
              <span className="text-[10px] font-cinzel uppercase tracking-widest opacity-60 block mt-1">All India Federation of Astrologers</span>
              <span className="text-[9px] font-mono opacity-50 block mt-0.5">Parampara Research Academy</span>
            </div>
          </div>
        </div>

        {/* 4 Core Specialisation Columns (Open Broadsheet Columns) */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel opacity-60 block mb-6 text-center">
            Four Core Arenas of Jyotish Inquiry
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialisations.map((spec) => (
              <div key={spec.id} className="pt-6 border-t-2" style={{ borderColor: spec.accent }}>
                <span className="text-xs font-mono font-bold block mb-1" style={{ color: spec.accent }}>
                  {spec.num}
                </span>
                <h3 className="font-cormorant text-2xl font-bold mb-1">
                  {spec.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest font-cinzel opacity-60 block mb-3">
                  {spec.sanskrit}
                </span>
                <p className="text-xs opacity-75 font-light leading-relaxed">
                  {spec.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
