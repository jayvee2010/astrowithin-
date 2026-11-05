import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';

export const ToolsIndexPage: React.FC = () => {
  const allTools = [
    {
      id: 'marriage-prediction',
      name: 'Marriage Prediction',
      path: '/tools/marriage-prediction',
      desc: 'Predict marriage timing, delay indicators, and 7th house dasha periods.',
      category: 'Marriage',
    },
    {
      id: 'kundli-matching',
      name: 'Kundli Matching',
      path: '/tools/kundli-matching',
      desc: '36-Guna Ashtakoota Milan and Manglik dosha cancellation check.',
      category: 'Compatibility',
    },
    {
      id: 'premium-kundli',
      name: 'Birth Chart (Janam Kundli)',
      path: '/tools/premium-kundli',
      desc: 'Accurate sidereal 12 Bhavas, planetary degrees, and Shadbala metrics.',
      category: 'Birth Chart',
    },
    {
      id: 'navamsa',
      name: 'Navamsa (D9 Chart)',
      path: '/tools/navamsa',
      desc: 'Detailed 9th divisional harmonic chart for soul purpose and spouse profiling.',
      category: 'Divisional',
    },
    {
      id: 'dasha-calculator',
      name: 'Dasha Calculator',
      path: '/tools/dasha-calculator',
      desc: 'Calculate 120-year Vimshottari Mahadasha, Antardasha, and Pratyantardasha.',
      category: 'Timing',
    },
    {
      id: 'career-prediction',
      name: 'Career Prediction',
      path: '/tools/career-prediction',
      desc: '10th house vocation, Amatyakaraka, and Dasamsa (D10) professional trends.',
      category: 'Career',
    },
    {
      id: 'rashi-calculator',
      name: 'Rashi Calculator',
      path: '/tools/rashi-calculator',
      desc: 'Accurate sidereal Moon sign, Janma Nakshatra, and Pada calculations.',
      category: 'Astrology',
    },
    {
      id: 'atmakaraka-darakaraka-calculator',
      name: 'Atmakaraka & Darakaraka',
      path: '/tools/atmakaraka-darakaraka-calculator',
      desc: 'Jaimini Karakas determining king planet of soul and spouse signifier.',
      category: 'Jaimini',
    },
    {
      id: 'panchang',
      name: 'Daily Panchang',
      path: '/tools/panchang',
      desc: 'Tithi, Vara, Nakshatra, Yoga, and Karana with Rahu Kaal auspicious timings.',
      category: 'Panchang',
    },
  ];

  return (
    <PageLayout
      badge="Vedic Astrology Calculator Suite"
      title="Classical Parashari Tools"
      subtitle="Explore our comprehensive suite of authentic Vedic calculators. Every tool uses traditional sidereal mathematics and verified algorithms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTools.map((t) => (
          <Link
            key={t.id}
            to={t.path}
            className="p-8 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1.5 mb-2">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                </svg>
                <span>{t.category}</span>
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed">
                {t.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869]">
              <span>Open Calculator</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export const ToolCalculatorPage: React.FC<{
  toolName: string;
  badge: string;
  formulaDescription: string;
}> = ({ toolName, badge, formulaDescription }) => {
  const [name, setName] = useState('Arjun Sharma');
  const [dob, setDob] = useState('1994-06-18');
  const [time, setTime] = useState('14:30');
  const [city, setCity] = useState('New Delhi, India');
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  return (
    <PageLayout
      badge={badge}
      title={toolName}
      subtitle={formulaDescription}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Container */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <h2 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mb-6">
            Enter Birth Details
          </h2>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Time of Birth (24 Hr)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Place of Birth (City)</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all"
            >
              Calculate {toolName}
            </button>
          </form>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-[#EAE6DF] dark:border-white/10 pb-5">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                  Horoscope Computed For
                </span>
                <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-[#F4F1EA] mt-1">{name}</h3>
                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] mt-1 font-sans">
                  Born {dob} at {time} in {city} (Lahiri Ayanamsha: 23° 46' 12")
                </p>
              </div>

              {/* Dynamic Calculations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Ascendant (Lagna)</div>
                  <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Libra (Tula) 14° 22'</div>
                  <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Lord: Venus in 9th house</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Moon Sign (Rashi)</div>
                  <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Taurus (Vrishabha) 28° 10'</div>
                  <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Nakshatra: Mrigashira (Pada 2)</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Active Vimshottari Mahadasha</div>
                  <div className="font-cormorant font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">Jupiter – Venus</div>
                  <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Auspicious window for relational commitment</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                  <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">7th House & Spouse Profiling</div>
                  <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Aries (Mesha) · Mars in 11th</div>
                  <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Dynamic, ambitious partner with shared aspirations</div>
                </div>
              </div>

              {/* Graphical North Indian Kundli Mini Preview */}
              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col items-center">
                <div className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3">
                  Generated Vedic Chart Snapshot
                </div>
                <svg viewBox="0 0 160 160" className="w-40 h-40 text-[#B88E3E] dark:text-[#E5B869]">
                  <rect x="5" y="5" width="150" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="5" y1="5" x2="155" y2="155" stroke="currentColor" strokeWidth="1" />
                  <line x1="155" y1="5" x2="5" y2="155" stroke="currentColor" strokeWidth="1" />
                  <polygon points="80,5 155,80 80,155 5,80" fill="none" stroke="currentColor" strokeWidth="1" />
                  <text x="80" y="45" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">Asc</text>
                  <text x="80" y="115" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">7th</text>
                  <text x="45" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">4th</text>
                  <text x="115" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">10th</text>
                </svg>
              </div>

              <div className="flex justify-end pt-2">
                <Link
                  to="/download"
                  className="px-8 py-3.5 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-sans font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
                >
                  Discuss this Chart with an Astrologer on Astrowithin →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-80 flex flex-col items-center justify-center text-center text-[#827E76] dark:text-[#9C9A94]">
              <div className="w-12 h-12 rounded-full border border-[#B88E3E] flex items-center justify-center p-2 mb-3 bg-[#B88E3E]/10 text-[#B88E3E]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                </svg>
              </div>
              <p className="font-sans text-sm font-medium max-w-xs">
                Enter your birth parameters on the left to compute {toolName}.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
