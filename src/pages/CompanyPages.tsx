import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { EXPERTS } from '../data/contentData';

// Experts Directory Page (/experts)
export const ExpertsDirectoryPage: React.FC = () => {
  return (
    <PageLayout
      badge="Verified Faculty & Practitioners"
      title="Our Astrological Faculty"
      subtitle="Every astrologer on Astrowithin holds a minimum of 10+ years of active consultation experience, credentials from recognized councils (ICAS, BVB, AIFAS), and adherence to classical Parashari principles."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERTS.map((expert) => (
          <div
            key={expert.id}
            className="p-6 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/25 hover:border-vedic-gold transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-vedic-gold/40 group-hover:border-vedic-gold transition-colors"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-vedic-gold transition-colors">
                    {expert.name}
                  </h3>
                  <div className="text-xs text-amber-300 font-serif">{expert.experience} Experience</div>
                  <div className="text-[11px] text-slate-400 font-serif">{expert.city}</div>
                </div>
              </div>

              <div className="text-xs text-vedic-gold font-serif mb-2">{expert.specialty}</div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">{expert.bio}</p>
            </div>

            <div className="pt-4 border-t border-vedic-gold/15 flex items-center justify-between text-xs font-serif">
              <span className="text-[10px] text-slate-400">{expert.lineage}</span>
              <Link
                to={`/experts/${expert.id}`}
                className="text-vedic-gold hover:text-amber-300 font-bold underline underline-offset-4"
              >
                View Profile →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// Single Expert Profile (/experts/:id)
export const ExpertDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const expert = EXPERTS.find((e) => e.id === id) || EXPERTS[0];

  return (
    <PageLayout
      badge="Faculty Profile"
      title={expert.name}
      subtitle={`${expert.experience} Consultation Experience · ${expert.city}`}
    >
      <div className="p-8 rounded-3xl bg-vedic-darkVoid/85 border border-vedic-gold/30 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <img
            src={expert.avatar}
            alt={expert.name}
            className="w-44 h-44 rounded-full object-cover border-4 border-vedic-gold/60 shadow-[0_0_30px_rgba(212,175,55,0.3)] mb-4"
          />
          <span className="px-3 py-1 rounded-full text-xs font-serif bg-vedic-saffron/20 border border-vedic-saffron/40 text-amber-300">
            {expert.experience} Experience
          </span>
          <div className="text-xs text-slate-400 font-serif mt-2">{expert.city}</div>
          <div className="text-xs text-vedic-gold font-serif mt-1 font-semibold">{expert.lineage}</div>
        </div>

        <div className="md:col-span-8 flex flex-col items-start space-y-4">
          <div className="text-xs font-serif text-vedic-gold uppercase tracking-widest">
            Specialisation Core
          </div>
          <h2 className="font-display font-bold text-2xl text-slate-100">
            {expert.specialty}
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            {expert.bio}
          </p>

          <div className="w-full pt-6 border-t border-vedic-gold/20 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/download"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-vedic-saffron to-amber-500 text-slate-950 font-serif font-bold text-sm tracking-wider uppercase shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Consult {expert.name} on Astrowithin App
            </Link>
            <Link
              to="/experts"
              className="text-xs font-serif text-vedic-gold hover:underline"
            >
              ← Back to all astrologers
            </Link>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

// Generic Static Pages: Blog, Wiki, Press, Contact, Terms, Privacy, Refund, Download
export const StaticContentPage: React.FC<{
  title: string;
  badge: string;
  category: string;
  body: string;
}> = ({ title, badge, category, body }) => {
  return (
    <PageLayout badge={badge} title={title}>
      <div className="p-8 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/25 shadow-xl prose prose-invert max-w-none text-slate-300 font-light leading-relaxed">
        <div className="text-xs uppercase tracking-widest font-serif text-vedic-gold mb-4">
          {category}
        </div>
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          {body}
        </p>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
          Note: This page contains clearly marked placeholder information for {title} as requested in the creative brief. Official editorial updates and documentation are managed through the central content repository.
        </div>
      </div>
    </PageLayout>
  );
};
