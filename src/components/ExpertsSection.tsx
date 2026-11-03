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
        
        {/* Section Header: Open Editorial Pacing (NO CARDS) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-60 block mb-2">
              01 · Parampara Lineage & Scholarship
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Classically trained scholars. <br />
              <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
                Understand your married life & timing.
              </span>
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            Classically trained astrologers with 15+ years of clinical consultation. Rigorously vetted scholars grounded in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* Open 3-Column Roster: Zero Container Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {EXPERTS.slice(0, 6).map((expert, idx) => {
            const accentColor = jewelAccents[idx % jewelAccents.length];
            return (
              <article key={expert.id} className="flex flex-col group">
                {/* Duotone Archival Portrait sitting on canvas */}
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
                <span 
                  className="text-[10px] uppercase tracking-[0.2em] font-cinzel font-semibold mb-1 block"
                  style={{ color: accentColor }}
                >
                  {expert.experience} · {expert.city}
                </span>

                {/* Scholar Name */}
                <h3 className="font-cormorant text-2xl font-bold tracking-tight mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {expert.name}
                </h3>

                {/* Institutional Lineage */}
                <span className="text-[11px] font-cinzel opacity-60 block mb-3">
                  {expert.lineage}
                </span>

                {/* Bio / Specialty */}
                <p className="text-xs opacity-75 font-light leading-relaxed mb-6 flex-1">
                  {expert.bio}
                </p>

                {/* Action Link (Clean Typographic Text Link) */}
                <Link
                  to={`/experts/${expert.id}`}
                  className="text-xs uppercase tracking-[0.2em] font-cinzel font-semibold opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1.5 mt-auto pt-4 border-t border-[#E2DDD4]/50 dark:border-white/10"
                  style={{ color: accentColor }}
                >
                  <span>Consult Scholar</span>
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
