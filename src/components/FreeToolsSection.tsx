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
      name: 'Marriage Prediction (Vivaha Muhurta & Timing)',
      route: '/tools/marriage-prediction',
      sanskrit: 'विवाह विचार',
      tag: '7th House & Dual Transit',
      description: 'Analyze 7th house lord, Venus, Jupiter, and dasha activations to determine favorable windows for sacred union.',
      action: 'Calculate Timing →',
      accent: '#D9822B',
    },
    {
      id: 'compatibility',
      num: '02',
      name: 'Ashtakoota Guna Milan (36 Gunas)',
      route: '/tools/kundli-matching',
      sanskrit: 'गुण मिलान',
      tag: '36-Point Compatibility',
      description: 'Authentic 8-fold compatibility analysis: Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi with Kuja Dosha cancellation rules.',
      action: 'Calculate Milan →',
      accent: '#1E4334',
    },
    {
      id: 'birth-chart',
      num: '03',
      name: 'Birth Chart (Janam Kundli D1)',
      route: '/tools/premium-kundli',
      sanskrit: 'जन्म कुण्डली',
      tag: '12-Bhava Natal Blueprint',
      description: 'Full 12-house Vedic horoscope calculated with Lahiri Ayanamsa, planetary longitudes, retrograde states, and Shadbala potency scores.',
      action: 'Generate Blueprint →',
      accent: '#D4AF37',
    },
    {
      id: 'd9-chart',
      num: '04',
      name: 'Navamsa (D9) Chart & Soul Destiny',
      route: '/tools/navamsa',
      sanskrit: 'नवांश चक्र',
      tag: 'Divisional Inner Destiny',
      description: 'Microscopic soul chart defining post-marital destiny, spouse attributes, and spiritual alignment across the 9th harmonic.',
      action: 'Inspect Navamsa →',
      accent: '#1E3A5F',
    },
    {
      id: 'dasha',
      num: '05',
      name: 'Vimshottari Dasha Explorer',
      route: '/tools/dasha-calculator',
      sanskrit: 'दशा साधन',
      tag: '120-Year Planetary Cycles',
      description: 'Calculate 120-year Vimshottari Mahadasha, Antardasha, and Pratyantardasha cycles to unveil which celestial forces are active right now.',
      action: 'Explore Dasha →',
      accent: '#48284A',
    },
    {
      id: 'career',
      num: '06',
      name: 'Dashamsha (D10) Career & Authority',
      route: '/tools/career-prediction',
      sanskrit: 'कर्म भाव दशमांश',
      tag: '10th House & Vocational Status',
      description: '10th house, Sun, Saturn, and Dasamsa (D10) vocational indicators for promotions, leadership enterprises, and professional breakthroughs.',
      action: 'Examine Career →',
      accent: '#9E2A2B',
    },
    {
      id: 'rashi',
      num: '07',
      name: 'Moon Sign (Rashi) & Janma Nakshatra',
      route: '/tools/rashi-calculator',
      sanskrit: 'चन्द्र राशि व नक्षत्र',
      tag: 'Sidereal Lunar Placement',
      description: 'Accurate sidereal Moon sign, Janma Nakshatra, Pada, and ruling deity calculation according to astronomical coordinates.',
      action: 'Discover Rashi →',
      accent: '#1E3A5F',
    },
  ];

  return (
    <section
      id="tools"
      aria-label="Astrowithin Classical Tools"
      className="px-6 sm:px-12 py-20 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel opacity-60 block mb-2">
              03 · Calculators & Astrometric Indices
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Classical Parashari tools. <br />
              <span className="italic text-[#1E3A5F] dark:text-[#E5B869] transition-colors">
                Open calculation engines.
              </span>
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            Rigorous mathematical calculation engines grounded in classical Brihat Parashara Hora Shastra. Zero locked paywalls, zero algorithmic fabrications.
          </p>
        </div>

        {/* Broadsheet Directory List: Divided by Clean 1px Hairlines (Zero Bento Boxes) */}
        <div className="divide-y divide-[#E2DDD4] dark:divide-white/10">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.route}
              className="py-7 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer hover:opacity-85 transition-opacity"
            >
              <div className="flex items-baseline gap-6 sm:gap-8">
                {/* Number */}
                <span 
                  className="text-xs font-mono font-bold transition-colors flex-shrink-0"
                  style={{ color: tool.accent }}
                >
                  {tool.num}
                </span>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold group-hover:text-[#D4AF37] transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-cinzel opacity-50">
                      {tool.sanskrit} · {tool.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm opacity-75 font-light max-w-3xl leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <span 
                className="text-xs font-cinzel uppercase tracking-[0.2em] font-semibold whitespace-nowrap md:text-right flex items-center gap-1.5 flex-shrink-0"
                style={{ color: tool.accent }}
              >
                <span>{tool.action}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Explore All Link */}
        <div className="mt-14 text-center pt-8 border-t border-[#E2DDD4] dark:border-white/10">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-cinzel font-semibold hover:text-[#D4AF37] transition-colors opacity-80 hover:opacity-100"
          >
            <span>Explore Complete Astrometric Suite</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
