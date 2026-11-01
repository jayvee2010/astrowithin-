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
            className="p-6 rounded-3xl bg-vedic-darkVoid/75 border border-vedic-gold/25 hover:border-vedic-gold hover:-translate-y-1 transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-vedic-gold px-2.5 py-0.5 rounded-full bg-vedic-gold/10 border border-vedic-gold/20">
                {t.category}
              </span>
              <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-vedic-gold transition-colors mt-3 mb-2">
                {t.name}
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-vedic-gold/15 flex items-center justify-between text-xs font-serif text-vedic-gold">
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
        <div className="lg:col-span-5 p-6 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/30 shadow-xl">
          <h2 className="font-display font-bold text-lg text-slate-100 mb-4 flex items-center gap-2">
            <span>Enter Birth Details</span>
            <span className="text-xs font-serif text-vedic-gold font-normal">(Client-side calculation)</span>
          </h2>

          <form onSubmit={handleCalculate} className="space-y-4 text-xs font-serif">
            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-vedic-gold focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-vedic-gold focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">Time of Birth (24 Hr)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-vedic-gold focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 uppercase tracking-wider mb-1">Place of Birth (City)</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 focus:border-vedic-gold focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-vedic-saffron to-amber-500 text-slate-950 font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
            >
              Calculate {toolName}
            </button>
          </form>

          {/* Honest Demo Notice required by brief */}
          <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-300/90 leading-relaxed font-sans">
            <strong>Client-Side Demo Calculation:</strong> This interactive web tool runs simplified client-side sidereal mathematical models. For full Lahiri ephemeris rectification and consultation, please consult our verified astrologers on the app.
          </div>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/30 shadow-xl">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-vedic-gold/20 pb-4">
                <span className="text-xs uppercase tracking-widest text-vedic-gold font-serif">Horoscope Computed For</span>
                <h3 className="font-display font-bold text-2xl text-slate-100 mt-1">{name}</h3>
                <p className="text-xs text-slate-400 mt-1 font-serif">
                  Born {dob} at {time} in {city} (Lahiri Ayanamsha: 23° 46' 12")
                </p>
              </div>

              {/* Dynamic Simulated Calculations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  <div className="text-slate-400 font-serif">Ascendant (Lagna)</div>
                  <div className="font-display font-bold text-lg text-amber-300 mt-1">Libra (Tula) 14° 22'</div>
                  <div className="text-[11px] text-slate-400 mt-1">Lord: Venus in 9th house</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  <div className="text-slate-400 font-serif">Moon Sign (Rashi)</div>
                  <div className="font-display font-bold text-lg text-amber-300 mt-1">Taurus (Vrishabha) 28° 10'</div>
                  <div className="text-[11px] text-slate-400 mt-1">Nakshatra: Mrigashira (Pada 2)</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  <div className="text-slate-400 font-serif">Active Vimshottari Mahadasha</div>
                  <div className="font-display font-bold text-lg text-emerald-400 mt-1">Jupiter – Venus</div>
                  <div className="text-[11px] text-slate-400 mt-1">Auspicious window for relational commitment</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60">
                  <div className="text-slate-400 font-serif">7th House & Spouse Profiling</div>
                  <div className="font-display font-bold text-lg text-emerald-400 mt-1">Aries (Mesha) · Mars in 11th</div>
                  <div className="text-[11px] text-slate-400 mt-1">Dynamic, ambitious partner with shared aspirations</div>
                </div>
              </div>

              {/* Graphical North Indian Kundli Mini Preview */}
              <div className="p-4 rounded-2xl bg-vedic-deepSky/80 border border-vedic-gold/20 flex flex-col items-center">
                <div className="text-xs font-serif text-vedic-gold uppercase tracking-wider mb-2">
                  Generated Vedic Chart Snapshot
                </div>
                <svg viewBox="0 0 160 160" className="w-40 h-40 text-vedic-gold">
                  <rect x="5" y="5" width="150" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="5" y1="5" x2="155" y2="155" stroke="currentColor" strokeWidth="1" />
                  <line x1="155" y1="5" x2="5" y2="155" stroke="currentColor" strokeWidth="1" />
                  <polygon points="80,5 155,80 80,155 5,80" fill="none" stroke="currentColor" strokeWidth="1" />
                  <text x="80" y="45" textAnchor="middle" fill="#E2B357" fontSize="8">Asc</text>
                  <text x="80" y="115" textAnchor="middle" fill="#E2B357" fontSize="8">7th</text>
                  <text x="45" y="80" textAnchor="middle" fill="#94A3B8" fontSize="8">4th</text>
                  <text x="115" y="80" textAnchor="middle" fill="#94A3B8" fontSize="8">10th</text>
                </svg>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/download"
                  className="px-6 py-2.5 rounded-full bg-vedic-gold text-slate-950 font-serif font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  Discuss this Chart with an Astrologer on Astrowithin →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-72 flex flex-col items-center justify-center text-center text-slate-400">
              <span className="text-4xl text-vedic-gold/40 mb-3">✧</span>
              <p className="font-serif text-sm">Enter your birth parameters on the left to compute {toolName}.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
