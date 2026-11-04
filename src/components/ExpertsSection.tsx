import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  const jewelAccents = ['#D9822B', '#1E3A5F', '#1E4334', '#9E2A2B', '#48284A', '#D4AF37'];

  return (
    <section
      id="experts"
      aria-label="Astrowithin Scholars"
      className="px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Exact Vaya Headline & Pacing (Option 1 Clean Consumer Tech) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE6DF] dark:border-white/10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>01 · Lineage Astrologers</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Understand your <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                married life.
              </span>
            </h2>
          </div>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm mt-4 md:mt-0 leading-relaxed">
            Vetted scholars with decades of lineage-based practice in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* Clean 3-Column Card Grid (Option 1 Vaya Consumer Tech Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTS.map((expert) => {
            return (
              <article 
                key={expert.id} 
                className="bg-white dark:bg-[#1A1C20] rounded-3xl border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Duotone Archival Portrait */}
                <div className="w-full h-72 bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[10px] font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] border border-[#EAE6DF] dark:border-white/10 shadow-xs">
                    {expert.experience} Experience
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="text-[11px] text-[#827E76] font-sans uppercase tracking-wider font-semibold mb-1">
                    {expert.city}
                  </div>

                  {/* Scholar Name */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold tracking-tight mb-1 group-hover:text-[#B88E3E] transition-colors">
                    {expert.name}
                  </h3>

                  {/* Specialty */}
                  <span className="text-sm italic font-cormorant text-[#B88E3E] dark:text-[#E5B869] block mb-2">
                    {expert.specialty}
                  </span>

                  {/* Lineage Accreditation */}
                  <span className="text-xs text-[#827E76] font-medium block mb-4 border-b border-[#EAE6DF] dark:border-white/10 pb-3">
                    Lineage: {expert.lineage}
                  </span>

                  {/* Bio */}
                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6 flex-1">
                    {expert.bio}
                  </p>

                  {/* Action Link (Clean Typographic Text Link) */}
                  <Link
                    to={`/experts/${expert.id}`}
                    className="text-xs uppercase tracking-[0.16em] font-sans font-bold text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] transition-colors flex items-center justify-between pt-4 border-t border-[#EAE6DF] dark:border-white/10 mt-auto"
                  >
                    <span>View Consultation Profile</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Practitioners Link */}
        <div className="mt-16 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10">
          <Link
            to="/experts"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold hover:text-[#B88E3E] transition-colors opacity-80 hover:opacity-100"
          >
            <span>View All Lineage Astrologers ({EXPERTS.length})</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
