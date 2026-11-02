import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERTS } from '../data/contentData';

export const ExpertsSection: React.FC = () => {
  return (
    <section
      id="experts"
      aria-label="Astrowithin Experts"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
            <span>Classically Trained Lineage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Understand your <span className="italic font-normal text-[#E07A2E]">married life</span>
          </h2>

          <p className="mt-4 text-[#F7F4EE]/75 text-sm sm:text-base font-light leading-relaxed">
            Classically trained astrologers with 10+ years of clinical consultation. Rigorously vetted scholars grounded in Parashari Hora and Jaimini synastry.
          </p>
        </div>

        {/* Experts Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTS.slice(0, 6).map((expert) => (
            <div
              key={expert.id}
              className="group rounded-3xl bg-[#1A1714] border border-[#CFAF83]/20 hover:border-[#E07A2E]/60 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#CFAF83]/30 flex-shrink-0 bg-[#25211D]">
                    <img
                      src={expert.avatar}
                      alt={expert.name}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif font-semibold text-lg text-[#F7F4EE] group-hover:text-[#E07A2E] transition-colors truncate">
                      {expert.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#25211D] border border-[#CFAF83]/20 text-[#CFAF83] font-serif">
                        {expert.experience}
                      </span>
                      <span className="text-[11px] text-[#A69E94] truncate">
                        {expert.city.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lineage Token */}
                <div className="text-[11px] font-serif text-[#CFAF83] font-medium tracking-wide mb-2 line-clamp-1">
                  {expert.lineage}
                </div>

                {/* Specialty */}
                <div className="text-xs font-semibold text-[#F7F4EE]/90 mb-3 line-clamp-1">
                  {expert.specialty}
                </div>

                {/* Bio Excerpt */}
                <p className="text-xs text-[#F7F4EE]/65 font-light leading-relaxed line-clamp-3 mb-6">
                  {expert.bio}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#CFAF83]/15 flex items-center justify-between">
                <span className="text-[11px] font-serif uppercase tracking-wider text-[#A69E94]">
                  Vedic Consult
                </span>
                <Link
                  to={`/experts/${expert.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-[#E07A2E] group-hover:translate-x-1 transition-transform"
                >
                  <span>Consult</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer View All Experts Link */}
        <div className="mt-12 text-center">
          <Link
            to="/experts"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#CFAF83]/30 hover:border-[#CFAF83]/80 text-[#F7F4EE] text-xs font-serif uppercase tracking-widest transition-all"
          >
            <span>View all certified astrologers</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
