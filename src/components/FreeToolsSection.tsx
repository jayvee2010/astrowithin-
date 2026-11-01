import React from 'react';
import { Link } from 'react-router-dom';

export const FreeToolsSection: React.FC = () => {
  const tools = [
    {
      id: 'marriage',
      name: 'Marriage',
      route: '/tools/marriage-prediction',
      sanskrit: 'विवाह विचार',
      description: 'Analyze 7th house lord, Venus, and dasha timing for marriage union.',
      glyph: '⚭',
    },
    {
      id: 'compatibility',
      name: 'Compatibility',
      route: '/tools/kundli-matching',
      sanskrit: 'गुण मिलान',
      description: '36-point Ashtakoota compatibility analysis between prospective partners.',
      glyph: '☯',
    },
    {
      id: 'birth-chart',
      name: 'Birth chart',
      route: '/tools/premium-kundli',
      sanskrit: 'जन्म कुण्डली',
      description: 'Full 12-house Vedic natal horoscope with planetary longitudes.',
      glyph: '✧',
    },
    {
      id: 'd9-chart',
      name: 'D9 chart',
      route: '/tools/navamsa',
      sanskrit: 'नवांश चक्र',
      description: 'Divisional Navamsa chart defining inner destiny and marital life.',
      glyph: '◈',
    },
    {
      id: 'dasha',
      name: 'Dasha',
      route: '/tools/dasha-calculator',
      sanskrit: 'दशा साधन',
      description: 'Calculate 120-year Vimshottari Mahadasha and Antardasha periods.',
      glyph: '⏳',
    },
    {
      id: 'career',
      name: 'Career',
      route: '/tools/career-prediction',
      sanskrit: 'कर्म भाव',
      description: '10th house, Sun, Saturn, and Dasamsa (D10) vocational indicators.',
      glyph: '⚒',
    },
    {
      id: 'rashi',
      name: 'Rashi',
      route: '/tools/rashi-calculator',
      sanskrit: 'चन्द्र राशि',
      description: 'Accurate sidereal Moon sign, Janma Nakshatra, and Pada calculation.',
      glyph: '☽',
    },
  ];

  return (
    <section
      id="tools"
      aria-label="Heart Chakra - Free Tools"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        
        {/* Sanskrit Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9D886B]/40 bg-[#120E18]/70 text-[#CFAF83] text-xs font-serif uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-[#9D886B] animate-pulse" />
          <span>Free tools · Anahata Heart Mandala · 7 Petals of Wisdom</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F6ECDD] mb-4">
          Tools for <span className="text-gold-leaf italic font-serif">love, marriage & match</span>
        </h2>
        <p className="text-[#F6ECDD]/80 max-w-xl mx-auto text-sm sm:text-base font-light mb-16">
          Authentic client-side Vedic calculations for relationship clarity, planetary timelines, and karmic charts.
        </p>

        {/* 7 Tools as Glowing Lotus Petals & Zodiac Arc (NOT rectangular cards) */}
        <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <Link
              key={tool.id}
              to={tool.route}
              className="group relative w-64 p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3"
              style={{
                // Sacred Lotus Petal Shape with Calligraphic Border
                borderRadius: idx % 2 === 0 ? '50% 50% 50% 10%' : '50% 50% 10% 50%',
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(18, 14, 24, 0.95) 100%)',
                border: '1px solid rgba(207, 175, 131, 0.35)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(207, 175, 131, 0.08)',
              }}
            >
              {/* Petal Inner Glow on Hover */}
              <div className="w-16 h-16 rounded-full border border-[#CFAF83]/50 flex items-center justify-center bg-gradient-to-tr from-[#E07A2E]/20 to-[#CFAF83]/30 group-hover:scale-125 group-hover:border-[#E07A2E] transition-all duration-300 mb-4 shadow-[0_0_20px_rgba(207,175,131,0.2)]">
                <span className="text-3xl text-[#CFAF83] group-hover:text-[#F4A883] font-serif transition-colors">
                  {tool.glyph}
                </span>
              </div>

              <div className="text-[10px] font-serif text-[#F4A883] uppercase tracking-widest mb-1">
                {tool.sanskrit}
              </div>

              {/* Exact Tool Name */}
              <h3 className="font-display text-xl font-bold text-[#F6ECDD] group-hover:text-[#E07A2E] transition-colors mb-2">
                {tool.name}
              </h3>

              <p className="text-xs text-[#F6ECDD]/75 font-light leading-relaxed mb-4">
                {tool.description}
              </p>

              <div className="mt-auto pt-3 border-t border-[#CFAF83]/20 w-full flex items-center justify-center gap-1 text-[11px] font-serif text-[#CFAF83] group-hover:text-[#F4A883]">
                <span>Calculate</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Link: "Explore all tools" */}
        <div className="mt-16">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-[#CFAF83]/60 bg-[#120E18]/80 text-[#CFAF83] hover:bg-[#CFAF83]/15 font-serif text-sm tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(207,175,131,0.25)] hover:scale-105"
          >
            <span>Explore all tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
