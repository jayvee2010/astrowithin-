import React from 'react';
import { ACCREDITATIONS } from '../data/contentData';

export const TrustSection: React.FC = () => {
  const specialisations = [
    {
      id: 'love',
      name: 'Love & Marriage',
      sanskrit: 'प्रेम विवाह',
      details: '7th Bhava, Navamsa (D9), Ashtakoota compatibility, Kuja dosha resolution.',
    },
    {
      id: 'career',
      name: 'Career & Purpose',
      sanskrit: 'कर्म धर्म',
      details: '10th House, Dasamsa (D10), Amatyakaraka, Saturn transits and promotions.',
    },
    {
      id: 'family',
      name: 'Family & Harmony',
      sanskrit: 'कुटुम्ब सुख',
      details: '2nd & 4th Bhava, Moon peace, ancestral karma, and Saptamsha lineage.',
    },
    {
      id: 'money',
      name: 'Money & Wealth',
      sanskrit: 'धन समृद्धि',
      details: 'Dhana Yogas, 11th House of gains, 2nd house treasury, and Jupiter blessings.',
    },
  ];

  return (
    <section
      id="trust"
      aria-label="Astrowithin Trust & Accreditations"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
            <span>Rigorous Lineage & Standards</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Built on classical authority, <span className="italic font-normal text-[#E07A2E]">rigorous scholarship</span>, and verified lineage.
          </h2>

          <p className="mt-4 text-[#F7F4EE]/75 text-sm sm:text-base font-light">
            Every consultation adheres strictly to Brihat Parashara Hora Shastra, Jaimini Sutras, and authenticated ephemeris data.
          </p>
        </div>

        {/* 1. Diverse Specialisation */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.2em] font-serif text-[#CFAF83] text-center mb-8">
            Diverse Specialisation
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specialisations.map((spec) => (
              <div
                key={spec.id}
                className="p-6 rounded-2xl bg-[#1A1714] border border-[#CFAF83]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-serif text-[#A69E94] uppercase tracking-wider mb-1">
                    {spec.sanskrit}
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-[#F7F4EE] mb-2">
                    {spec.name}
                  </h3>
                  <p className="text-xs text-[#F7F4EE]/70 font-light leading-relaxed">
                    {spec.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Accredited Astrologers: 4 Institutional Logos */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.2em] font-serif text-[#CFAF83] text-center mb-8">
            Accredited Astrologers · Premier Jyotish Councils
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc.id}
                className="p-6 rounded-2xl bg-[#1A1714] border border-[#CFAF83]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#25211D] border border-[#CFAF83]/30 flex items-center justify-center font-serif font-bold text-xs text-[#CFAF83]">
                      {acc.abbreviation.split(' ')[0]}
                    </span>
                    <span className="text-[10px] font-serif text-[#A69E94]">
                      Est. {acc.founded}
                    </span>
                  </div>

                  <h4 className="font-serif font-semibold text-base text-[#F7F4EE] mb-2">
                    {acc.name}
                  </h4>

                  <p className="text-xs text-[#F7F4EE]/65 font-light leading-relaxed mb-4">
                    {acc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#CFAF83]/15 text-[11px] font-serif text-[#E07A2E] font-medium">
                  {acc.badgeText}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Years of Experience */}
        <div className="pt-12 border-t border-[#CFAF83]/15 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-4">
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#F7F4EE] mb-2">
              10+ Years
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Minimum Experience Vetting
            </div>
            <p className="text-xs text-[#F7F4EE]/70 mt-2 font-light">
              No amateur practitioners. Every astrologer undergoes rigorous chart audits.
            </p>
          </div>

          <div className="p-4 md:border-x border-[#CFAF83]/15">
            <div className="font-serif text-2xl font-bold text-[#F7F4EE] mb-2">
              Authors and Journal Editors
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Published Scholars
            </div>
            <p className="text-xs text-[#F7F4EE]/70 mt-2 font-light">
              Contributors to leading Jyotish journals and authors of authoritative texts.
            </p>
          </div>

          <div className="p-4">
            <div className="font-serif text-2xl font-bold text-[#F7F4EE] mb-2">
              Lecturers at Prestigious Institutes
            </div>
            <div className="font-serif text-xs uppercase tracking-wider text-[#CFAF83]">
              Academic Faculty
            </div>
            <p className="text-xs text-[#F7F4EE]/70 mt-2 font-light">
              Active teachers instructing post-graduate students at ICAS and Bharatiya Vidya Bhavan.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
