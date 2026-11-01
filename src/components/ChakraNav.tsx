import React from 'react';
import { useTheme } from '../utils/ThemeContext';

export const CHAKRAS = [
  { id: 'hero', name: 'Root', sanskrit: 'मूलाधार', color: '#E07A2E', label: 'Hero' },
  { id: 'experts', name: 'Sacral', sanskrit: 'स्वाधिष्ठान', color: '#F4A883', label: 'Experts' },
  { id: 'features', name: 'Solar Plexus', sanskrit: 'मणिपूर', color: '#CFAF83', label: 'Features' },
  { id: 'tools', name: 'Heart', sanskrit: 'अनाहत', color: '#9D886B', label: 'Tools' },
  { id: 'trust', name: 'Throat', sanskrit: 'विशुद्ध', color: '#475368', label: 'Trust' },
  { id: 'reviews', name: 'Third Eye', sanskrit: 'आज्ञा', color: '#7A6D7F', label: 'Reviews' },
  { id: 'final-cta', name: 'Crown', sanskrit: 'सहस्रार', color: '#3B2A3F', label: 'Marriage' },
];

export const ChakraNav: React.FC = () => {
  const { activeChakra, setActiveChakra } = useTheme();

  const scrollToChakra = (index: number) => {
    setActiveChakra(index);
    const targetId = CHAKRAS[index].id;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Chakra Navigation Rail"
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 p-3 rounded-full bg-[#120E18]/70 dark:bg-[#120E18]/80 backdrop-blur-md border border-[#CFAF83]/30 shadow-2xl"
    >
      <div className="text-[9px] uppercase tracking-widest text-[#CFAF83] font-serif writing-vertical py-1 select-none">
        CHAKRAS
      </div>

      <div className="w-[1px] h-4 bg-gradient-to-b from-transparent to-[#CFAF83]/40" />

      {CHAKRAS.map((chakra, idx) => {
        const isActive = activeChakra === idx;
        return (
          <button
            key={chakra.id}
            onClick={() => scrollToChakra(idx)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            aria-label={`Jump to ${chakra.name} chakra (${chakra.label})`}
          >
            <div className="absolute right-9 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 ease-out whitespace-nowrap bg-[#120E18]/95 border border-[#CFAF83]/40 px-2.5 py-1 rounded-xl text-xs text-[#F6ECDD] shadow-lg flex items-center gap-1.5">
              <span className="font-serif font-semibold text-[#E07A2E]">{chakra.sanskrit}</span>
              <span className="text-[#CFAF83]">· {chakra.name}</span>
            </div>

            <div
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                isActive
                  ? 'scale-125 ring-2 ring-[#CFAF83] shadow-[0_0_12px_var(--glow)]'
                  : 'opacity-40 hover:opacity-90 scale-90'
              }`}
              style={
                {
                  backgroundColor: chakra.color,
                  '--glow': chakra.color,
                } as React.CSSProperties
              }
            >
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-[#F6ECDD] animate-ping" />
              )}
            </div>
          </button>
        );
      })}

      <div className="w-[1px] h-4 bg-gradient-to-t from-transparent to-[#CFAF83]/40" />
    </aside>
  );
};
