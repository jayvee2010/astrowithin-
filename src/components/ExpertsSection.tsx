import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const jewelAccents = ['#D9822B', '#1E3A5F', '#1E4334', '#9E2A2B', '#48284A', '#D4AF37'];

  return (
    <section
      id="consultants"
      aria-label="Astrowithin Scholars"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Exact Vaya Headline & Pacing (NO CARDS) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-70 mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>Svadhisthana · Sacral Resonance · Lineage Astrologers</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Understand your <br className="hidden sm:inline" />
              <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
                married life.
              </span>
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            Vetted scholars with decades of lineage-based practice in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* Open 3-Column Roster: Zero Container Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {EXPERTS.map((expert, idx) => {
            const accentColor = jewelAccents[idx % jewelAccents.length];
            return (
              <article key={expert.id} className="flex flex-col group">
                {/* Duotone Archival Portrait sitting directly on canvas */}
                <div 
                  className="aspect-[4/5] bg-neutral-200 dark:bg-neutral-800 overflow-hidden mb-6 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 border-b-2"
                  style={{ borderColor: accentColor }}
                >
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Lineage & Experience Tag (No Pill Box) */}
                <div className="flex items-center justify-between mb-1">
                  <span 
                    className="text-[10px] uppercase tracking-[0.2em] font-cinzel font-semibold"
                    style={{ color: accentColor }}
                  >
                    {expert.experience} Experience
                  </span>
                  <span className="text-[10px] opacity-60 font-cinzel">
                    {expert.city}
                  </span>
                </div>

                {/* Scholar Name */}
                <h3 className="font-cormorant text-2xl font-bold tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {expert.name}
                </h3>

                {/* Specialty */}
                <span className="text-xs italic font-cormorant text-[#D9822B] dark:text-[#E5B869] block mb-1">
                  {expert.specialty}
                </span>

                {/* Lineage Accreditation */}
                <span className="text-[11px] font-cinzel opacity-60 block mb-3 border-b border-[#E2DDD4]/50 dark:border-white/10 pb-2">
                  Lineage: {expert.lineage}
                </span>

                {/* Bio */}
                <p className="text-xs opacity-75 font-light leading-relaxed mb-6 flex-1">
                  {expert.bio}
                </p>

                {/* Action Link (Clean Typographic Text Link) */}
                <Link
                  to={`/experts/${expert.id}`}
                  className="text-xs uppercase tracking-[0.2em] font-cinzel font-semibold opacity-90 hover:opacity-100 transition-opacity flex items-center justify-between mt-auto pt-4 border-t border-[#E2DDD4]/50 dark:border-white/10"
                  style={{ color: accentColor }}
                >
                  <span>View Consultation Profile</span>
                  <span>→</span>
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All Practitioners Link */}
        <div className="mt-16 text-center pt-8 border-t border-[#E2DDD4] dark:border-white/10">
          <Link
            to="/experts"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-cinzel font-semibold hover:text-[#D4AF37] transition-colors opacity-80 hover:opacity-100"
          >
            <span>View All Lineage Astrologers ({EXPERTS.length})</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
