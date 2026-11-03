import React from 'react';

interface ChakraData {
  num: number;
  name: string;
  sanskrit: string;
  ruler: string;
  element: string;
  theme: string;
  color: string;
  mantra: string;
}

const CHAKRAS: ChakraData[] = [
  {
    num: 1,
    name: 'Muladhara',
    sanskrit: 'मूलाधार',
    ruler: 'Root · Mars',
    element: 'Prithvi (Earth)',
    theme: 'Grounding & Physical Vitality',
    color: '#9E2A2B',
    mantra: 'लँ',
  },
  {
    num: 2,
    name: 'Svadhisthana',
    sanskrit: 'स्वाधिष्ठान',
    ruler: 'Sacral · Venus',
    element: 'Jala (Water)',
    theme: 'Subconscious & Desire',
    color: '#D9822B',
    mantra: 'वँ',
  },
  {
    num: 3,
    name: 'Manipura',
    sanskrit: 'मणिपूर',
    ruler: 'Solar Plexus · Sun',
    element: 'Agni (Fire)',
    theme: 'Willpower & Dharma',
    color: '#E59E2B',
    mantra: 'रँ',
  },
  {
    num: 4,
    name: 'Anahata',
    sanskrit: 'अनाहत',
    ruler: 'Heart · Jupiter',
    element: 'Vayu (Air)',
    theme: 'Sacred Union & Compassion',
    color: '#1E4334',
    mantra: 'यँ',
  },
  {
    num: 5,
    name: 'Vishuddha',
    sanskrit: 'विशुद्ध',
    ruler: 'Throat · Moon',
    element: 'Akasha (Ether)',
    theme: 'Truth & Discernment',
    color: '#1E3A5F',
    mantra: 'हँ',
  },
  {
    num: 6,
    name: 'Ajna',
    sanskrit: 'आज्ञा',
    ruler: 'Third Eye · Saturn',
    element: 'Mahat (Intuition)',
    theme: 'Vision & Higher Intellect',
    color: '#2D3154',
    mantra: 'ॐ',
  },
  {
    num: 7,
    name: 'Sahasrara',
    sanskrit: 'सहस्रार',
    ruler: 'Crown · Moksha',
    element: 'Brahman (Cosmos)',
    theme: 'Cosmic Consciousness',
    color: '#48284A',
    mantra: '꣠',
  },
];

interface RashiData {
  sanskrit: string;
  western: string;
  ruler: string;
  element: string;
  svgPath: React.ReactNode;
}

const RASHIS: RashiData[] = [
  {
    sanskrit: 'Mesha',
    western: 'Aries',
    ruler: 'Mars',
    element: 'Fire',
    svgPath: (
      <>
        <path d="M 20,32 L 20,16 Q 14,8 8,14 Q 4,20 10,24" />
        <path d="M 20,32 L 20,16 Q 26,8 32,14 Q 36,20 30,24" />
        <circle cx="20" cy="16" r="2" fill="#D4AF37" />
      </>
    ),
  },
  {
    sanskrit: 'Vrishabha',
    western: 'Taurus',
    ruler: 'Venus',
    element: 'Earth',
    svgPath: (
      <>
        <circle cx="20" cy="24" r="8" />
        <path d="M 10,10 Q 20,18 30,10" />
        <circle cx="20" cy="24" r="2.5" fill="#D4AF37" />
      </>
    ),
  },
  {
    sanskrit: 'Mithuna',
    western: 'Gemini',
    ruler: 'Mercury',
    element: 'Air',
    svgPath: (
      <>
        <path d="M 8,10 Q 20,16 32,10" />
        <path d="M 8,30 Q 20,24 32,30" />
        <line x1="15" y1="13" x2="15" y2="27" />
        <line x1="25" y1="13" x2="25" y2="27" />
      </>
    ),
  },
  {
    sanskrit: 'Karka',
    western: 'Cancer',
    ruler: 'Moon',
    element: 'Water',
    svgPath: (
      <>
        <circle cx="15" cy="18" r="4" />
        <circle cx="25" cy="22" r="4" />
        <path d="M 19,18 Q 30,12 32,20" />
        <path d="M 21,22 Q 10,28 8,20" />
      </>
    ),
  },
  {
    sanskrit: 'Simha',
    western: 'Leo',
    ruler: 'Sun',
    element: 'Fire',
    svgPath: (
      <>
        <circle cx="14" cy="24" r="4" />
        <path d="M 16,21 Q 20,8 26,14 Q 30,18 28,26 Q 26,32 32,32" />
      </>
    ),
  },
  {
    sanskrit: 'Kanya',
    western: 'Virgo',
    ruler: 'Mercury',
    element: 'Earth',
    svgPath: (
      <>
        <path d="M 8,12 L 8,28 Q 12,24 16,28 L 16,12 Q 20,8 24,14 L 24,28 Q 28,32 32,24" />
        <line x1="28" y1="20" x2="33" y2="30" />
      </>
    ),
  },
  {
    sanskrit: 'Tula',
    western: 'Libra',
    ruler: 'Venus',
    element: 'Air',
    svgPath: (
      <>
        <line x1="8" y1="28" x2="32" y2="28" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="24" y1="20" x2="32" y2="20" />
        <path d="M 16,20 A 4,4 0 0,1 24,20" />
      </>
    ),
  },
  {
    sanskrit: 'Vrishchika',
    western: 'Scorpio',
    ruler: 'Mars',
    element: 'Water',
    svgPath: (
      <>
        <path d="M 8,14 L 8,28 Q 12,24 16,28 L 16,14 Q 20,8 24,14 L 24,28 Q 28,30 32,26" />
        <path d="M 28,26 L 33,26 L 33,21" />
      </>
    ),
  },
  {
    sanskrit: 'Dhanu',
    western: 'Sagittarius',
    ruler: 'Jupiter',
    element: 'Fire',
    svgPath: (
      <>
        <line x1="10" y1="30" x2="30" y2="10" />
        <path d="M 20,10 L 30,10 L 30,20" />
        <line x1="15" y1="20" x2="25" y2="30" />
      </>
    ),
  },
  {
    sanskrit: 'Makara',
    western: 'Capricorn',
    ruler: 'Saturn',
    element: 'Earth',
    svgPath: (
      <>
        <path d="M 8,14 L 14,28 L 20,14 Q 24,10 26,20 Q 28,30 22,32 Q 18,30 20,24 Q 24,18 32,24" />
      </>
    ),
  },
  {
    sanskrit: 'Kumbha',
    western: 'Aquarius',
    ruler: 'Saturn',
    element: 'Air',
    svgPath: (
      <>
        <path d="M 8,16 L 14,12 L 20,16 L 26,12 L 32,16" />
        <path d="M 8,24 L 14,20 L 20,24 L 26,20 L 32,24" />
      </>
    ),
  },
  {
    sanskrit: 'Meena',
    western: 'Pisces',
    ruler: 'Jupiter',
    element: 'Water',
    svgPath: (
      <>
        <path d="M 12,8 Q 18,20 12,32" />
        <path d="M 28,8 Q 22,20 28,32" />
        <line x1="10" y1="20" x2="30" y2="20" />
      </>
    ),
  },
];

export const SacredAxisSection: React.FC = () => {
  return (
    <section 
      id="chakras" 
      aria-label="Sacred Chakras and Vedic Rashis"
      className="px-6 sm:px-12 py-16 border-b border-[#E2DDD4] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2DDD4] dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-cinzel text-[#D4AF37] block mb-2 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#D4AF37]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>Sacred Microcosm · The Body as Kundli</span>
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-normal tracking-tight">
              The 7 Chakras & 12 Sidereal Rashis.
            </h2>
          </div>
          <p className="text-xs max-w-sm opacity-75 font-light mt-4 md:mt-0 leading-relaxed">
            In Brihat Parashara Hora Shastra, every planetary transit vibrates through the 7 energy vortexes and 12 sidereal signs, mapped through sacred Bija yantras.
          </p>
        </div>

        {/* 7 CHAKRA ARCHITECTURAL YANTRAS (Gold Filigree + Mineral Centers + Sanskrit Mantras) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-center mb-16">
          {CHAKRAS.map((chakra) => (
            <div key={chakra.num} className="chakra-hover flex flex-col items-center group">
              <div 
                className="w-16 h-16 border border-[#D4AF37] flex items-center justify-center p-2 mb-3 shadow-xs relative transition-transform"
                style={{ backgroundColor: `${chakra.color}15` }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]" fill="none" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeDasharray="2 2" opacity="0.6" />
                  
                  {chakra.num === 1 && (
                    <>
                      <rect x="25" y="25" width="50" height="50" stroke="#D4AF37" fill={chakra.color} fillOpacity="0.2" />
                      <polygon points="50,30 65,65 35,65" stroke="#D4AF37" strokeWidth="2" />
                    </>
                  )}
                  {chakra.num === 2 && (
                    <>
                      <circle cx="50" cy="50" r="32" stroke="#D4AF37" />
                      <path d="M 32,28 A 26,26 0 0,0 32,72 A 20,20 0 0,1 32,28" stroke="#D4AF37" strokeWidth="2" fill={chakra.color} fillOpacity="0.25" />
                    </>
                  )}
                  {chakra.num === 3 && (
                    <polygon points="50,78 18,22 82,22" stroke="#D4AF37" fill={chakra.color} fillOpacity="0.2" />
                  )}
                  {chakra.num === 4 && (
                    <>
                      <polygon points="50,15 82,75 18,75" stroke="#D4AF37" strokeWidth="2" />
                      <polygon points="50,85 82,25 18,25" stroke="#D4AF37" strokeWidth="2" fill={chakra.color} fillOpacity="0.2" />
                    </>
                  )}
                  {chakra.num === 5 && (
                    <>
                      <circle cx="50" cy="50" r="32" stroke="#D4AF37" fill={chakra.color} fillOpacity="0.2" />
                      <circle cx="50" cy="50" r="18" stroke="#D4AF37" strokeDasharray="2 2" strokeWidth="1.5" />
                    </>
                  )}
                  {chakra.num === 6 && (
                    <>
                      <circle cx="50" cy="50" r="28" stroke="#D4AF37" fill={chakra.color} fillOpacity="0.2" />
                      <path d="M 12,50 Q 30,30 50,50 Q 70,70 88,50" stroke="#D4AF37" strokeWidth="2" />
                    </>
                  )}
                  {chakra.num === 7 && (
                    <>
                      <circle cx="50" cy="50" r="34" stroke="#D4AF37" strokeWidth="1.8" />
                      <circle cx="50" cy="50" r="22" stroke="#D4AF37" strokeWidth="1.4" />
                      <circle cx="50" cy="50" r="10" stroke="#D4AF37" strokeWidth="1" fill={chakra.color} fillOpacity="0.3" />
                    </>
                  )}

                  {/* Sanskrit Bija Mantra in Center */}
                  <text 
                    x="50" 
                    y="55" 
                    fontFamily="'Cormorant Garamond', serif" 
                    fontSize="20" 
                    fontWeight="700" 
                    fill={chakra.color} 
                    textAnchor="middle"
                  >
                    {chakra.mantra}
                  </text>
                </svg>
              </div>
              <span className="text-xs font-cormorant font-bold block">{chakra.num}. {chakra.name}</span>
              <span 
                className="text-[9px] uppercase tracking-widest font-cinzel font-semibold mt-0.5 block"
                style={{ color: chakra.color }}
              >
                {chakra.ruler}
              </span>
              <span className="text-[10px] opacity-60 font-light mt-1 block">{chakra.theme}</span>
            </div>
          ))}
        </div>

        {/* 12 HANDCRAFTED GOLD ZODIAC SYMBOLS (NO EMOJIS) */}
        <div className="border-t border-[#E2DDD4] dark:border-white/10 pt-8">
          <span className="text-[10px] uppercase tracking-[0.25em] font-cinzel text-[#D4AF37] block mb-6 text-center flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>12 Sidereal Zodiac Rashis · Handcrafted Gold Medallions</span>
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-[#D4AF37]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 gap-4 text-center">
            {RASHIS.map((rashi) => (
              <div 
                key={rashi.sanskrit} 
                className="flex flex-col items-center py-2 border-b lg:border-b-0 lg:border-r border-[#E2DDD4] dark:border-white/10 last:border-0 hover:opacity-85 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-1.5 p-1 bg-[#D4AF37]/5">
                  <svg viewBox="0 0 40 40" className="w-full h-full text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2">
                    {rashi.svgPath}
                  </svg>
                </div>
                <span className="font-cormorant font-bold text-sm block">{rashi.sanskrit}</span>
                <span className="text-[9px] font-cinzel opacity-60 uppercase block">{rashi.western} · {rashi.ruler}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
