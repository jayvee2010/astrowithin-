import React from 'react';
import { REVIEWS } from '../data/contentData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Astrowithin Reviews"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
            <span>Real Consultations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Relationships we <span className="italic font-normal text-[#E07A2E]">played a part</span>
          </h2>

          <p className="mt-4 text-[#F7F4EE]/75 text-sm sm:text-base font-light">
            Verified experiences from users navigating marriage timing, partnership compatibility, and career transitions.
          </p>
        </div>

        {/* Editorial Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-[#1A1714] border border-[#CFAF83]/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#E07A2E]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#25211D] text-[#E07A2E] font-serif uppercase tracking-wider">
                    {rev.topic}
                  </span>
                  <div className="flex text-[#E07A2E] text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F7F4EE]/85 font-light leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#CFAF83]/15 flex items-center justify-between text-xs">
                <span className="font-serif font-medium text-[#F7F4EE]">
                  {rev.name}
                </span>
                <span className="text-[#A69E94]">
                  {rev.city}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
