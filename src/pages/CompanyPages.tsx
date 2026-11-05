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
            className="p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#B88E3E] shadow-sm"
                />
                <div>
                  <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] transition-colors">
                    {expert.name}
                  </h3>
                  <div className="text-xs text-[#B88E3E] dark:text-[#E5B869] font-sans font-semibold">{expert.experience} Experience</div>
                  <div className="text-xs text-[#827E76] dark:text-[#9C9A94] font-sans">{expert.city}</div>
                </div>
              </div>

              <div className="text-xs font-sans uppercase tracking-wider font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2">{expert.specialty}</div>
              <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-4">{expert.bio}</p>
            </div>

            <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans">
              <span className="text-[11px] text-[#827E76] dark:text-[#9C9A94] font-semibold">{expert.lineage}</span>
              <Link
                to={`/experts/${expert.id}`}
                className="text-[#181716] dark:text-[#F4F1EA] hover:text-[#B88E3E] font-bold flex items-center gap-1"
              >
                <span>View Profile</span>
                <span>→</span>
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
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 flex flex-col items-center text-center">
          <img
            src={expert.avatar}
            alt={expert.name}
            className="w-44 h-44 rounded-3xl object-cover border-2 border-[#B88E3E] shadow-md mb-4"
          />
          <div className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] mt-2">
            {expert.experience} Experience
          </div>
          <div className="text-xs text-[#827E76] dark:text-[#9C9A94] font-sans mt-1">{expert.city}</div>
          <div className="text-xs text-[#181716] dark:text-[#F4F1EA] font-sans mt-1 font-semibold">{expert.lineage}</div>
        </div>

        <div className="md:col-span-8 flex flex-col items-start space-y-4">
          <div className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#B88E3E] dark:text-[#E5B869]">
            Specialisation Core
          </div>
          <h2 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-[#F4F1EA]">
            {expert.specialty}
          </h2>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
            {expert.bio}
          </p>

          <div className="w-full pt-6 border-t border-[#EAE6DF] dark:border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/download"
              className="px-8 py-3.5 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Consult {expert.name} on Astrowithin App
            </Link>
            <Link
              to="/experts"
              className="text-xs font-sans font-semibold text-[#827E76] dark:text-[#9C9A94] hover:text-[#B88E3E] transition-colors"
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
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] text-[#181716] dark:text-[#F4F1EA]">
        <div className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-4">
          {category}
        </div>
        <p className="text-base sm:text-lg text-[#5A5650] dark:text-[#A09D94] leading-relaxed font-normal mb-8">
          {body}
        </p>
        <div className="pt-6 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
          <Link
            to="/download"
            className="px-8 py-3 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-sans font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-sm"
          >
            Download Astrowithin App →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
