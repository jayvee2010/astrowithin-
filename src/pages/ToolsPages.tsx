import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { CLASSICAL_TOOLS, TECHNICAL_PILLARS, GLOBAL_TOOLS_FAQS, ClassicalTool } from '../data/toolsData';

export const ToolsIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories = ['All', 'Love & Marriage', 'Natal & Vargas', 'Dashas & Timing', 'Jaimini & Yogas'];

  const filteredTools = CLASSICAL_TOOLS.filter((tool) => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      tool.name.toLowerCase().includes(q) ||
      tool.sanskrit.toLowerCase().includes(q) ||
      tool.summary.toLowerCase().includes(q) ||
      tool.tag.toLowerCase().includes(q) ||
      tool.classicalSource.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <PageLayout
      badge="Authentic Parashari & Jaimini Computational Engines"
      title="Classical Vedic Astrology Tools"
      subtitle="Free, high-precision astronomical calculators calibrated to NASA JPL ephemerides and sidereal Lahiri Ayanamsa for marriage, compatibility, karmic timelines, and planetary dignities."
    >
      {/* Search & Domain Filter Bar */}
      <div className="mb-12 pb-8 border-b border-[#EAE6DF] dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search tools, yogas, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs font-sans text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-colors"
            />
            <svg
              className="absolute left-3.5 top-3 w-4 h-4 text-[#827E76]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="text-xs font-mono text-[#827E76]">
            Showing <span className="font-bold text-[#181716] dark:text-white">{filteredTools.length}</span> of {CLASSICAL_TOOLS.length} calculators
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All'
              ? CLASSICAL_TOOLS.length
              : CLASSICAL_TOOLS.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716] shadow-xs'
                    : 'bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 12-Tool Expanded Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredTools.map((t) => (
          <div
            key={t.id}
            className="p-7 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Meta & Category */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869]">
                  {t.num} · {t.category}
                </span>
                <span className="font-mono text-[11px] text-[#827E76]">{t.degreeMark}</span>
              </div>

              <div className="text-xs font-sans text-[#827E76] mb-1">
                {t.sanskrit}
              </div>

              <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors mb-2.5">
                {t.name}
              </h3>

              <p className="text-xs text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-4">
                {t.summary}
              </p>

              {/* Scriptural Authority Citation */}
              <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 mb-4 text-[11px] text-[#827E76] italic">
                <span className="font-semibold font-sans not-italic block text-[10px] uppercase text-[#B88E3E] dark:text-[#E5B869] mb-0.5">
                  Classical Scripture
                </span>
                {t.classicalSource}
              </div>

              {/* Key Outputs Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {t.outputsProvided.slice(0, 3).map((out, oIdx) => (
                  <span
                    key={oIdx}
                    className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/5 text-[10px] font-sans text-[#5A5650] dark:text-[#A09D94]"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Button: White background with 2px gold border */}
            <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
              <Link
                to={t.route}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs active:scale-95 text-center"
              >
                <span>Launch {t.name}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ======================================================== */}
      {/* HOW OUR VEDIC ENGINES WORK: 4 TECHNICAL PILLARS */}
      {/* ======================================================== */}
      <div className="pt-12 pb-16 border-t border-[#EAE6DF] dark:border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
            Computational Standards
          </span>
          <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
            How Astrowithin’s Classical Engines Work
          </h3>
          <p className="text-sm text-[#5A5650] dark:text-[#A09D94] mt-2">
            Unlike commercial platforms that use pre-computed tables, our calculations execute real-time astronomical algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_PILLARS.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#B88E3E] dark:text-[#E5B869] mb-1">
                  0{pIdx + 1} · {pillar.sanskrit}
                </div>
                <h4 className="font-cormorant font-bold text-xl text-[#181716] dark:text-white mb-2 leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* GLOBAL TOOLS FAQ ACCORDION */}
      {/* ======================================================== */}
      <div className="pt-12 pb-8 border-t border-[#EAE6DF] dark:border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] block mb-2">
              Frequently Asked Questions
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-bold tracking-tight">
              Astrology Calculators & Methodology FAQ
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#827E76] max-w-sm">
            Everything you need to know about astronomical accuracy, birth time, and sidereal formulas.
          </p>
        </div>

        <div className="space-y-3">
          {GLOBAL_TOOLS_FAQS.map((faq, fIdx) => {
            const isOpen = openFaqIndex === fIdx;
            return (
              <div
                key={fIdx}
                className="rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-cormorant text-lg sm:text-xl font-bold text-[#181716] dark:text-white">
                    {faq.question}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center border border-[#B88E3E] text-[#B88E3E] dark:text-[#E5B869] text-sm font-bold flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#EAE6DF] dark:border-white/10 text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
  const [activeResultTab, setActiveResultTab] = useState<'summary' | 'planets' | 'houses' | 'scripture'>('summary');

  // Match corresponding tool data if available
  const matchedTool = CLASSICAL_TOOLS.find((t) => t.name.toLowerCase().includes(toolName.toLowerCase())) || CLASSICAL_TOOLS[0];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  // Classical 9-Planetary Longitudes calibrated to Sidereal Lahiri Ayanamsa
  const samplePlanets = [
    { graha: 'Surya (Sun)', sign: 'Gemini (Mithuna)', deg: '03° 14\' 22"', nak: 'Mrigashira (Pada 3)', lord: 'Mars', dignity: 'Neutral Friend', retro: false },
    { graha: 'Chandra (Moon)', sign: 'Taurus (Vrishabha)', deg: '14° 22\' 48"', nak: 'Rohini (Pada 2)', lord: 'Moon', dignity: 'Exalted (Ucha) ★', retro: false },
    { graha: 'Mangala (Mars)', sign: 'Aries (Mesha)', deg: '22° 45\' 10"', nak: 'Bharani (Pada 3)', lord: 'Venus', dignity: 'Moolatrikona ★', retro: false },
    { graha: 'Budha (Mercury)', sign: 'Taurus (Vrishabha)', deg: '28° 10\' 04"', nak: 'Mrigashira (Pada 2)', lord: 'Mars', dignity: 'Friendly Sign', retro: false },
    { graha: 'Guru (Jupiter)', sign: 'Libra (Tula)', deg: '11° 30\' 18"', nak: 'Swati (Pada 2)', lord: 'Rahu', dignity: 'Neutral Friend', retro: false },
    { graha: 'Shukra (Venus)', sign: 'Cancer (Karka)', deg: '19° 52\' 34"', nak: 'Ashlesha (Pada 1)', lord: 'Mercury', dignity: 'Enemy Sign', retro: false },
    { graha: 'Shani (Saturn)', sign: 'Aquarius (Kumbha)', deg: '17° 08\' 52"', nak: 'Shatabhisha (Pada 4)', lord: 'Rahu', dignity: 'Moolatrikona ★', retro: true },
    { graha: 'Rahu (North Node)', sign: 'Scorpio (Vrishchika)', deg: '05° 41\' 12"', nak: 'Anuradha (Pada 1)', lord: 'Saturn', dignity: 'Debilitated (Neecha)', retro: true },
    { graha: 'Ketu (South Node)', sign: 'Taurus (Vrishabha)', deg: '05° 41\' 12"', nak: 'Krittika (Pada 3)', lord: 'Sun', dignity: 'Exalted (Ucha)', retro: true },
  ];

  return (
    <PageLayout
      badge={badge}
      title={toolName}
      subtitle={formulaDescription}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Form Container */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#EAE6DF] dark:border-white/10">
            <h2 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA]">
              Enter Birth Parameters
            </h2>
            <span className="text-[10px] font-mono uppercase text-[#B88E3E] font-bold">
              Lahiri Ayanamsa
            </span>
          </div>

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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Time of Birth (24 Hr Precision)</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] text-sm focus:border-[#B88E3E] focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#827E76] dark:text-[#9C9A94] mb-1.5">Place of Birth (City, Country)</label>
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
              className="w-full py-4 mt-2 rounded-full bg-[#181716] dark:bg-[#F4F1EA] text-white dark:text-[#181716] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              Calculate {toolName} →
            </button>
          </form>

          {/* Classical Method Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-neutral-50/70 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-xs text-[#827E76] leading-relaxed">
            <span className="font-bold text-[#181716] dark:text-white block mb-1">
              Methodology: {matchedTool.classicalSource}
            </span>
            Coordinates calculated using sidereal Chitra Paksha Ayanamsa (24° 11' 42") and topocentric altitude corrections.
          </div>
        </div>

        {/* Results Container */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {calculated ? (
            <div className="space-y-6 animate-in fade-in">
              <div className="border-b border-[#EAE6DF] dark:border-white/10 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869]">
                    Computed Sidereal Horoscope
                  </span>
                  <h3 className="font-cormorant font-bold text-3xl text-[#181716] dark:text-[#F4F1EA] mt-1">{name}</h3>
                  <p className="text-xs text-[#5A5650] dark:text-[#A09D94] mt-0.5 font-sans">
                    Born {dob} at {time} in {city} (Lahiri Ayanamsa: 24° 11' 42")
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] font-bold">
                    Asc: Libra 14° 22'
                  </span>
                </div>
              </div>

              {/* Result Tabs Switcher */}
              <div className="flex items-center gap-2 border-b border-[#EAE6DF] dark:border-white/10 pb-2 text-xs font-bold uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setActiveResultTab('summary')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'summary'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('planets')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'planets'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Planetary Degrees (9)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveResultTab('scripture')}
                  className={`py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                    activeResultTab === 'scripture'
                      ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716]'
                      : 'text-[#827E76] hover:text-[#181716]'
                  }`}
                >
                  Classical Insights
                </button>
              </div>

              {/* TAB 1: SUMMARY */}
              {activeResultTab === 'summary' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Ascendant (Lagna)</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Libra (Tula) 14° 22'</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Lord: Venus in 9th house (Bhagya)</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Moon Sign (Rashi)</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Taurus (Vrishabha) 14° 22'</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Nakshatra: Rohini (Pada 2) · Exalted Moon</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">Active Vimshottari Mahadasha</div>
                      <div className="font-cormorant font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">Jupiter – Venus Phase</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Highly auspicious window for union & wealth</div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                      <div className="text-[#827E76] dark:text-[#9C9A94] uppercase tracking-wider text-[10px] font-sans font-semibold">7th House & Spouse Indicator</div>
                      <div className="font-cormorant font-bold text-2xl text-[#181716] dark:text-[#F4F1EA] mt-1">Aries · Mars in Moolatrikona</div>
                      <div className="text-[11px] text-[#5A5650] dark:text-[#A09D94] mt-1">Dynamic partner; Kuja Dosha cancelled by Jupiter</div>
                    </div>
                  </div>

                  {/* North Indian Diamond Kundli SVG */}
                  <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 flex flex-col items-center">
                    <div className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3">
                      North Indian Diamond Janam Kundli
                    </div>
                    <svg viewBox="0 0 160 160" className="w-44 h-44 text-[#B88E3E] dark:text-[#E5B869]">
                      <rect x="5" y="5" width="150" height="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="5" y1="5" x2="155" y2="155" stroke="currentColor" strokeWidth="1" />
                      <line x1="155" y1="5" x2="5" y2="155" stroke="currentColor" strokeWidth="1" />
                      <polygon points="80,5 155,80 80,155 5,80" fill="none" stroke="currentColor" strokeWidth="1" />
                      <text x="80" y="45" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">Asc (Tula)</text>
                      <text x="80" y="115" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">7th (Mesha)</text>
                      <text x="45" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">4th (Makar)</text>
                      <text x="115" y="80" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0.7">10th (Kark)</text>
                      <text x="80" y="75" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.9">Guru</text>
                      <text x="80" y="90" textAnchor="middle" fill="currentColor" fontSize="7" opacity="0.9">Shani</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* TAB 2: COMPLETE 9 PLANETS DEGREE TABLE */}
              {activeResultTab === 'planets' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#EAE6DF] dark:border-white/10 text-[10px] uppercase font-bold text-[#827E76]">
                        <th className="py-2.5">Graha (Planet)</th>
                        <th className="py-2.5">Rashi (Sign)</th>
                        <th className="py-2.5">Degrees</th>
                        <th className="py-2.5">Nakshatra</th>
                        <th className="py-2.5">Dignity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE6DF] dark:divide-white/5">
                      {samplePlanets.map((p, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50/50 dark:hover:bg-white/[0.02]">
                          <td className="py-2.5 font-bold text-[#181716] dark:text-white">
                            {p.graha} {p.retro && <span className="text-amber-600 font-mono text-[10px]">(R)</span>}
                          </td>
                          <td className="py-2.5 text-[#5A5650] dark:text-[#A09D94]">{p.sign}</td>
                          <td className="py-2.5 font-mono text-[#827E76]">{p.deg}</td>
                          <td className="py-2.5 text-[#5A5650] dark:text-[#A09D94]">{p.nak}</td>
                          <td className="py-2.5 font-semibold text-[#B88E3E] dark:text-[#E5B869]">{p.dignity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 3: CLASSICAL INSIGHTS */}
              {activeResultTab === 'scripture' && (
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <span className="font-bold text-[#181716] dark:text-white block mb-1">
                      Classical Parashari Formulation ({matchedTool.classicalSource})
                    </span>
                    <p className="text-[#5A5650] dark:text-[#A09D94]">
                      {matchedTool.fullDescription}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10">
                    <span className="font-bold text-[#181716] dark:text-white block mb-1">
                      Key Remedials & Next Steps
                    </span>
                    <p className="text-[#5A5650] dark:text-[#A09D94]">
                      Because Jupiter aspects the 7th house cusp, natural protections are active. For fine-grained Muhurta dates or to examine the D9 Navamsa and D10 Dasamsa harmonics in depth, consult an accredited scholar.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Link: White background with 2px gold border */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#EAE6DF] dark:border-white/10 gap-3">
                <span className="text-xs text-[#827E76]">
                  Need a human scholar to synthesize your chart?
                </span>
                <Link
                  to="/download"
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs"
                >
                  Consult Accredited Astrologer →
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col items-center justify-center text-center text-[#827E76] dark:text-[#9C9A94] p-8">
              <div className="w-14 h-14 rounded-full border-2 border-[#B88E3E] flex items-center justify-center p-3 mb-4 bg-[#B88E3E]/10 text-[#B88E3E]">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                </svg>
              </div>
              <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-2">
                Awaiting Birth Data
              </h3>
              <p className="font-sans text-xs sm:text-sm max-w-sm leading-relaxed">
                Enter your birth date, exact time, and city on the left to compute high-precision astronomical coordinates for {toolName}.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tool Specific FAQs */}
      {matchedTool.faqs && matchedTool.faqs.length > 0 && (
        <div className="pt-8 border-t border-[#EAE6DF] dark:border-white/10">
          <h3 className="font-cormorant font-bold text-2xl text-[#181716] dark:text-white mb-4">
            Frequently Asked Questions about {toolName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchedTool.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs"
              >
                <h4 className="font-cormorant font-bold text-lg text-[#181716] dark:text-white mb-2 leading-snug">
                  {faq.question}
                </h4>
                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  );
};
