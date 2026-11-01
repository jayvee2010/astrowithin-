import React, { useState } from 'react';
import { REVIEWS, Review } from '../data/contentData';

export const ReviewsSection: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  return (
    <section
      id="reviews"
      aria-label="Third Eye Chakra - Reviews"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7A6D7F]/50 bg-[#120E18]/70 text-[#CFAF83] text-xs font-serif uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-[#7A6D7F]" />
          <span>Ajna · Third Eye Perception · Drifting Sky Lanterns</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6ECDD] mb-4">
          Relationships we <span className="text-gold-leaf italic font-serif">played a part</span>
        </h2>
        <p className="text-[#F6ECDD]/80 max-w-xl mx-auto text-sm sm:text-base font-light mb-16">
          Reviews drift as celestial lanterns across the night sky. Tap any lantern to open and reflect.
        </p>

        {/* Drifting Sky Lanterns: Sacred Octagonal / Diamond Astrological Lanterns */}
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto text-left">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              onClick={() => setSelectedReview(rev)}
              className="group cursor-pointer w-80 p-8 transition-all duration-500 hover:-translate-y-3 relative flex flex-col justify-between"
              style={{
                // Sacred Astrological Lantern Shape (Inked manuscript frame)
                borderRadius: '3rem 1rem 3rem 1rem',
                background: 'linear-gradient(135deg, rgba(59, 42, 63, 0.4) 0%, rgba(18, 14, 24, 0.95) 100%)',
                border: '1px solid rgba(207, 175, 131, 0.35)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(224, 122, 46, 0.1)',
              }}
            >
              {/* Lantern Flame Glow */}
              <div className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#E07A2E] to-[#F4A883] text-[#120E18] text-[10px] font-serif font-bold uppercase tracking-wider shadow-lg">
                {rev.topic}
              </div>

              <div>
                <div className="flex text-[#F4A883] mb-4 mt-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                <p className="text-sm text-[#F6ECDD]/90 font-light leading-relaxed line-clamp-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CFAF83]/20 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#F6ECDD] group-hover:text-[#E07A2E] transition-colors">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-[#CFAF83] font-serif">
                    {rev.city}
                  </div>
                </div>
                <span className="text-xs text-[#CFAF83] group-hover:text-[#F4A883] font-serif">
                  Catch lantern ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Opened Full-Scale Lantern */}
        {selectedReview && (
          <div
            onClick={() => setSelectedReview(null)}
            className="fixed inset-0 z-50 bg-[#120E18]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full p-10 rounded-[3rem] bg-[#120E18] border-2 border-[#CFAF83] shadow-[0_0_60px_rgba(207,175,131,0.3)] relative animate-in fade-in zoom-in-95"
            >
              <div className="text-xs uppercase tracking-widest font-serif text-[#CFAF83] mb-2">
                {selectedReview.topic}
              </div>

              <div className="flex text-[#F4A883] mb-4">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>

              <p className="text-base text-[#F6ECDD] font-light leading-relaxed italic font-serif">
                "{selectedReview.text}"
              </p>

              <div className="mt-8 pt-4 border-t border-[#CFAF83]/30 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-base text-[#E07A2E]">
                    {selectedReview.name}
                  </div>
                  <div className="text-xs text-[#CFAF83] font-serif">
                    {selectedReview.city}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedReview(null)}
                  className="px-5 py-2.5 rounded-full border border-[#CFAF83]/60 text-xs font-serif text-[#CFAF83] hover:bg-[#CFAF83]/15 transition-all"
                >
                  Dismiss Lantern ✕
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
