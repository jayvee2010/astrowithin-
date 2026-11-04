import React from 'react';
import { REVIEWS } from '../data/contentData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Astrowithin Verified Reviews"
      className="px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Exact Vaya Headline & Subtitle - Option 1) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE6DF] dark:border-white/10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>05 · Verified Seeker Experiences</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Relationships we <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                played a part.
              </span>
            </h2>
          </div>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm mt-4 md:mt-0 leading-relaxed">
            Reviews drift as celestial reflections across life's chapters. Authentic testimonials on marriage timing, compatibility, and milestones.
          </p>
        </div>

        {/* Clean 3-Column Review Cards (Option 1 Vaya Consumer Tech Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.slice(0, 6).map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white dark:bg-[#1A1C20] rounded-3xl p-8 sm:p-9 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Topic & Rating (No Emojis) */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-wider font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    {rev.topic}
                  </span>
                  <div className="flex items-center gap-1 text-[#B88E3E] dark:text-[#E5B869]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-current">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Italic Quote */}
                <p className="font-cormorant text-xl sm:text-2xl italic leading-relaxed text-[#181716] dark:text-[#F4F1EA] mb-6">
                  “{rev.text}”
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-5 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#827E76] font-semibold">
                <span className="text-[#181716] dark:text-[#F4F1EA] font-bold">
                  {rev.name}
                </span>
                <span>
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
