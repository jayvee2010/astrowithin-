import React from 'react';
import { REVIEWS } from '../data/contentData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Astrowithin Verified Reviews"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Exact Vaya Headline & Subtitle) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-70 mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>Ajna · Third Eye Perception · Verified Seeker Chronicles</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Relationships we <br className="hidden sm:inline" />
              <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
                played a part.
              </span>
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            Reviews drift as celestial reflections across life's chapters. Authentic testimonials on marriage timing, compatibility, and milestones.
          </p>
        </div>

        {/* Open 3-Column Editorial Blockquotes (Zero Boxed Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {REVIEWS.slice(0, 6).map((rev) => (
            <blockquote key={rev.id} className="flex flex-col justify-between pt-6 border-t border-[#E2DDD4] dark:border-white/10">
              <div>
                {/* Topic & Rating (No Emojis) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-cinzel text-[#D4AF37] font-semibold">
                    {rev.topic}
                  </span>
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="currentColor">
                        <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Italic Quote */}
                <p className="font-cormorant text-lg sm:text-xl italic opacity-90 leading-relaxed mb-6">
                  “{rev.text}”
                </p>
              </div>

              {/* Reviewer Details */}
              <footer className="pt-4 border-t border-[#E2DDD4]/40 dark:border-white/5 flex items-center justify-between text-xs font-cinzel uppercase tracking-widest opacity-70">
                <span className="font-semibold text-current">
                  {rev.name}
                </span>
                <span>
                  {rev.city}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
};
