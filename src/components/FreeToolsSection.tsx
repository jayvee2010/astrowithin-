import React from 'react';
import { Link } from 'react-router-dom';

export const FreeToolsSection: React.FC = () => {
  const tools = [
    {
      id: 'marriage',
      name: 'Marriage',
      route: '/tools/marriage-prediction',
      sanskrit: 'विवाह विचार',
      tag: '7th House & Vivaha Timing',
      description: 'Analyze 7th house lord, Venus, and dasha timing for auspicious marriage union.',
      accent: '#E07A2E',
    },
    {
      id: 'compatibility',
      name: 'Compatibility',
      route: '/tools/kundli-matching',
      sanskrit: 'गुण मिलान',
      tag: 'Ashtakoota 36-Point Milan',
      description: '36-point Ashtakoota compatibility analysis between prospective partners.',
      accent: '#CFAF83',
    },
    {
      id: 'birth-chart',
      name: 'Birth chart',
      route: '/tools/premium-kundli',
      sanskrit: 'जन्म कुण्डली',
      tag: 'Full 12-Bhava Horoscope',
      description: 'Full 12-house Vedic natal horoscope with planetary longitudes.',
      accent: '#F4A883',
    },
    {
      id: 'd9-chart',
      name: 'D9 chart',
      route: '/tools/navamsa',
      sanskrit: 'नवांश चक्र',
      tag: 'Divisional Inner Destiny',
      description: 'Divisional Navamsa chart defining inner destiny and marital life.',
      accent: '#E07A2E',
    },
    {
      id: 'dasha',
      name: 'Dasha',
      route: '/tools/dasha-calculator',
      sanskrit: 'दशा साधन',
      tag: '120-Year Vimshottari',
      description: 'Calculate 120-year Vimshottari Mahadasha and Antardasha periods.',
      accent: '#CFAF83',
    },
    {
      id: 'career',
      name: 'Career',
      route: '/tools/career-prediction',
      sanskrit: 'कर्म भाव',
      tag: '10th House & D10 Dasamsa',
      description: '10th house, Sun, Saturn, and Dasamsa (D10) vocational indicators.',
      accent: '#F4A883',
    },
    {
      id: 'rashi',
      name: 'Rashi',
      route: '/tools/rashi-calculator',
      sanskrit: 'चन्द्र राशि',
      tag: 'Sidereal Moon & Nakshatra',
      description: 'Accurate sidereal Moon sign, Janma Nakshatra, and Pada calculation.',
      accent: '#E07A2E',
    },
  ];

  return (
    <section
      id="tools"
      aria-label="Astrowithin Free Tools"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#CFAF83]/15"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F1C18] border border-[#CFAF83]/30 text-[#CFAF83] text-xs font-serif uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2E]" />
            <span>Free Tools</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F4EE] tracking-tight">
            Tools for <span className="italic font-normal text-[#E07A2E]">love, marriage & match</span>
          </h2>

          <p className="mt-4 text-[#F7F4EE]/75 text-sm sm:text-base font-light">
            Authentic client-side Vedic calculations for relationship clarity, planetary timelines, and karmic charts.
          </p>
        </div>

        {/* Clean Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, idx) => {
            const isFeatured = idx === 0 || idx === 1;
            return (
              <Link
                key={tool.id}
                to={tool.route}
                className={`group rounded-3xl bg-[#1A1714] border border-[#CFAF83]/20 hover:border-[#E07A2E]/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured && idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-serif uppercase tracking-wider text-[#A69E94]">
                      {tool.sanskrit}
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#25211D] border border-[#CFAF83]/20 text-[#CFAF83] font-serif">
                      {tool.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#F7F4EE] group-hover:text-[#E07A2E] transition-colors mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F7F4EE]/70 font-light leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#CFAF83]/15 flex items-center justify-between text-xs font-serif text-[#CFAF83] group-hover:text-[#E07A2E] transition-colors">
                  <span>Calculate instantly</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* "Explore all tools" Link */}
        <div className="mt-14 text-center">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E07A2E] hover:bg-[#E07A2E]/90 text-[#141210] font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <span>Explore all tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
