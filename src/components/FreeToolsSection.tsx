import React from 'react';
import { Link } from 'react-router-dom';

interface ToolItem {
  id: string;
  num: string;
  name: string;
  route: string;
  sanskrit: string;
  tag: string;
  description: string;
  action: string;
  accent: string;
}

export const FreeToolsSection: React.FC = () => {
  const tools: ToolItem[] = [
    {
      id: 'marriage',
      num: '01',
      name: 'Marriage',
      route: '/tools/marriage-prediction',
      sanskrit: 'विवाह विचार',
      tag: '7th House Lord & Dasha Timing',
      description: 'Analyze 7th house lord, Venus, and dasha timing for marriage union.',
      action: 'Calculate Timing →',
      accent: '#D9822B',
    },
    {
      id: 'compatibility',
      num: '02',
      name: 'Compatibility',
      route: '/tools/kundli-matching',
      sanskrit: 'गुण मिलान',
      tag: '36-Point Ashtakoota Milan',
      description: '36-point Ashtakoota compatibility analysis between prospective partners.',
      action: 'Calculate Milan →',
      accent: '#1E4334',
    },
    {
      id: 'birth-chart',
      num: '03',
      name: 'Birth chart',
      route: '/tools/premium-kundli',
      sanskrit: 'जन्म कुण्डली',
      tag: '12-Bhava Natal Horoscope',
      description: 'Full 12-house Vedic natal horoscope with planetary longitudes.',
      action: 'Generate Chart →',
      accent: '#D4AF37',
    },
    {
      id: 'd9-chart',
      num: '04',
      name: 'D9 chart',
      route: '/tools/navamsa',
      sanskrit: 'नवांश चक्र',
      tag: 'Divisional Navamsa Harmonic',
      description: 'Divisional Navamsa chart defining inner destiny and marital life.',
      action: 'Inspect Navamsa →',
      accent: '#1E3A5F',
    },
    {
      id: 'dasha',
      num: '05',
      name: 'Dasha',
      route: '/tools/dasha-calculator',
      sanskrit: 'दशा साधन',
      tag: '120-Year Vimshottari Cycle',
      description: 'Calculate 120-year Vimshottari Mahadasha and Antardasha periods.',
      action: 'Explore Dasha →',
      accent: '#48284A',
    },
    {
      id: 'career',
      num: '06',
      name: 'Career',
      route: '/tools/career-prediction',
      sanskrit: 'कर्म भाव',
      tag: '10th House & Dasamsa (D10)',
      description: '10th house, Sun, Saturn, and Dasamsa (D10) vocational indicators.',
      action: 'Examine Career →',
      accent: '#9E2A2B',
    },
    {
      id: 'rashi',
      num: '07',
      name: 'Rashi',
      route: '/tools/rashi-calculator',
      sanskrit: 'चन्द्र राशि',
      tag: 'Sidereal Moon & Janma Nakshatra',
      description: 'Accurate sidereal Moon sign, Janma Nakshatra, and Pada calculation.',
      action: 'Calculate Rashi →',
      accent: '#1E3A5F',
    },
  ];

  return (
    <section
      id="tools"
      aria-label="Astrowithin Classical Tools"
      className="px-6 sm:px-12 py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Exact Vaya Headline & Subtitle) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#EAE6DF] dark:border-white/10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>03 · Authentic Client-Side Engines</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Tools for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                love, marriage & match.
              </span>
            </h2>
          </div>
          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm mt-4 md:mt-0 leading-relaxed">
            Authentic client-side Vedic calculations for relationship clarity, planetary timelines, and karmic charts.
          </p>
        </div>

        {/* Clean Bento Card Grid (Option 1 Vaya Consumer Tech Bento Suite) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const isWide = idx === 6; // 7th card spans 2 columns on lg
            return (
              <Link
                key={tool.id}
                to={tool.route}
                className={`bg-white dark:bg-[#1A1C20] rounded-2xl p-8 border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between group hover:border-[#B88E3E] hover:-translate-y-1 transition-all duration-300 ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#B88E3E] dark:text-[#E5B869]">
                      {tool.num} / TOOL
                    </span>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#827E76] font-semibold">
                      {tool.tag}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-2xl sm:text-3xl font-bold group-hover:text-[#B88E3E] transition-colors mb-1">
                    {tool.name}
                  </h3>

                  <div className="text-xs font-sans text-[#827E76] mb-3">
                    {tool.sanskrit}
                  </div>

                  <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] transition-colors mt-auto">
                  <span>{tool.action}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Explore All Tools Link (Exact Vaya Text) */}
        <div className="mt-14 text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-bold hover:text-[#B88E3E] transition-colors opacity-80 hover:opacity-100"
          >
            <span>Explore all tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
