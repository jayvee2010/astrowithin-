import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { ZODIAC_SIGNS_DATA } from '../data/zodiacData';

// 1. Zodiac Signs (12 Rashis)
export const SignsPage: React.FC = () => {
  return (
    <PageLayout
      badge="Vedic Astronomy & Sidereal Coordinates"
      title="The 12 Rashis (Zodiac Signs)"
      subtitle="In Parashari Jyotish, signs are calculated using the sidereal Nirayana zodiac, anchoring planetary placements to fixed star constellations rather than seasonal solstices."
    >
      {/* 2 Cards in a Row Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {ZODIAC_SIGNS_DATA.map((s) => (
          <div
            key={s.id}
            className="group relative flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B88E3E]"
          >
            {/* Upper Section: Inked Placecard Artwork */}
            <Link
              to={`/astrology/zodiac-signs/${s.id}`}
              className="relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden bg-[#FAF8F5] dark:bg-[#15161A] border-b border-[#EAE6DF] dark:border-white/10 cursor-pointer"
            >
              {/* Inked Zodiac Card Image with subtle zoom on hover */}
              <img
                src={s.image}
                alt={`${s.westernName} - ${s.name}`}
                className="h-[88%] w-auto max-w-[85%] object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-all duration-500 z-10"
              />

              {/* Rashi & Sign Number Badges */}
              <div className="absolute top-4 left-5 z-30 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest bg-white/90 dark:bg-[#121316]/90 border border-[#EAE6DF] dark:border-white/10 text-[#181716] dark:text-[#F4F1EA] shadow-xs backdrop-blur-sm">
                  Sign {s.signNumber} · {s.sanskrit}
                </span>
              </div>

              <div className="absolute top-4 right-5 z-30">
                <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest bg-[#B88E3E]/15 border border-[#B88E3E]/30 text-[#B88E3E] dark:text-[#E5B869] shadow-xs backdrop-blur-sm">
                  {s.element}
                </span>
              </div>
            </Link>

            {/* Lower Section: Extensive Astrological Write-up beneath the artwork */}
            <div className="relative p-6 sm:p-8 flex flex-col flex-grow justify-between z-30 bg-white dark:bg-[#1A1C20]">
              
              <div>
                {/* Title & Western Nomenclature */}
                <div className="flex items-baseline justify-between mb-2">
                  <Link
                    to={`/astrology/zodiac-signs/${s.id}`}
                    className="font-cormorant font-bold text-2xl sm:text-3xl text-[#181716] dark:text-[#F4F1EA] hover:text-[#B88E3E] dark:hover:text-[#E5B869] transition-colors"
                  >
                    {s.name}
                  </Link>
                  <span className="text-xs font-sans text-[#827E76] dark:text-[#9C9A94] tracking-wider">
                    {s.quality.split(' ')[0]}
                  </span>
                </div>

                {/* Dates & Governing Lord */}
                <div className="text-xs text-[#B88E3E] dark:text-[#E5B869] font-sans font-semibold mb-3">
                  {s.dates} · Ruled by {s.lord}
                </div>

                {/* Rich Specs Bar */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-sans border-y border-[#EAE6DF] dark:border-white/10 py-3 my-3 text-center">
                  <div>
                    <span className="text-[#827E76] dark:text-[#9C9A94] block text-[9px] uppercase font-semibold">Body Limb</span>
                    <span className="font-semibold text-[#181716] dark:text-[#F4F1EA]">{s.bodyPart.split(',')[0]}</span>
                  </div>
                  <div className="border-x border-[#EAE6DF] dark:border-white/10">
                    <span className="text-[#827E76] dark:text-[#9C9A94] block text-[9px] uppercase font-semibold">Vedic Gem</span>
                    <span className="font-semibold text-[#B88E3E] dark:text-[#E5B869]">{s.favorableGem.split('/')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[#827E76] dark:text-[#9C9A94] block text-[9px] uppercase font-semibold">Symbol</span>
                    <span className="font-semibold text-[#181716] dark:text-[#F4F1EA]">{s.symbol.split('(')[0]}</span>
                  </div>
                </div>

                {/* In-depth Parashari Sign Description & Core Nature */}
                <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-4">
                  {s.overview}
                </p>

                {/* Key Guna Strengths & Ideal Synastry Preview */}
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 mb-4 space-y-1.5 text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold">Best Love Matches:</span>
                    <span className="text-[#181716] dark:text-[#F4F1EA]">{s.loveAndMarriage.idealMatches.slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B88E3E] dark:text-[#E5B869] font-bold">Key Vocations:</span>
                    <span className="text-[#5A5650] dark:text-[#A09D94]">{s.careerAndWealth.vocations.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Accent: Opens the Dedicated Sign Page */}
              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between text-xs font-sans">
                <span className="text-[11px] text-[#827E76] dark:text-[#9C9A94]">Sidereal 30° Division</span>
                <Link
                  to={`/astrology/zodiac-signs/${s.id}`}
                  className="font-bold text-[#181716] dark:text-[#F4F1EA] hover:text-[#B88E3E] dark:hover:text-[#E5B869] flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                >
                  <span>Read Full Horoscope & Secrets</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 2. Nakshatras (27 Lunar Mansions)
export const NakshatrasPage: React.FC = () => {
  const nakshatras = [
    { name: 'Ashwini', lord: 'Ketu', symbol: "Horse's head", deity: 'Ashvini Kumaras', quality: 'Swift healing & initiative' },
    { name: 'Bharani', lord: 'Venus', symbol: 'Yoni', deity: 'Yama', quality: 'Restraint & transformative rebirth' },
    { name: 'Krittika', lord: 'Sun', symbol: 'Razor/Flame', deity: 'Agni', quality: 'Purifying fire & discrimination' },
    { name: 'Rohini', lord: 'Moon', symbol: 'Chariot/Temple', deity: 'Brahma', quality: 'Fertility, artistic beauty, growth' },
    { name: 'Mrigashira', lord: 'Mars', symbol: "Deer's head", deity: 'Soma', quality: 'The eternal seeker, restless intellect' },
    { name: 'Ardra', lord: 'Rahu', symbol: 'Teardrop', deity: 'Rudra', quality: 'Storms of transformation, intense emotional purge' },
    { name: 'Punarvasu', lord: 'Jupiter', symbol: 'Bow and Quiver', deity: 'Aditi', quality: 'Return of the light, renewal, abundance' },
    { name: 'Pushya', lord: 'Saturn', symbol: "Cow's Udder / Lotus", deity: 'Brihaspati', quality: 'Most auspicious nakshatra, nourishment' },
    { name: 'Ashlesha', lord: 'Mercury', symbol: 'Coiled Serpent', deity: 'Nagas', quality: 'Kundalini energy, psychological depth' },
    { name: 'Magha', lord: 'Ketu', symbol: 'Royal Throne', deity: 'Pitris (Ancestors)', quality: 'Lineage blessings, authority, heritage' },
    { name: 'Purva Phalguni', lord: 'Venus', symbol: 'Front Legs of Bed', deity: 'Bhaga', quality: 'Sensual love, leisure, romantic delight' },
    { name: 'Uttara Phalguni', lord: 'Sun', symbol: 'Back Legs of Bed', deity: 'Aryaman', quality: 'Marital patron, sacred contracts' },
    { name: 'Hasta', lord: 'Moon', symbol: 'Open Hand', deity: 'Savitr', quality: 'Artisanal craft, healing touch, dexterity' },
    { name: 'Chitra', lord: 'Mars', symbol: 'Bright Pearl/Jewel', deity: 'Vishwakarma', quality: 'Divine architect, brilliant aesthetics' },
    { name: 'Swati', lord: 'Rahu', symbol: 'Shoot of Plant', deity: 'Vayu', quality: 'Independence, balance, wind element' },
    { name: 'Vishakha', lord: 'Jupiter', symbol: 'Triumphal Arch', deity: 'Indra-Agni', quality: 'Focused ambition, triumph through effort' },
    { name: 'Anuradha', lord: 'Saturn', symbol: 'Lotus / Staff', deity: 'Mitra', quality: 'Devotion, friendship, resilience in hardship' },
    { name: 'Jyeshtha', lord: 'Mercury', symbol: 'Circular Amulet', deity: 'Indra', quality: 'Elder seniority, protective wisdom' },
    { name: 'Mula', lord: 'Ketu', symbol: 'Tied Roots', deity: 'Nirriti', quality: 'Uprooting illusions, core essence' },
    { name: 'Purva Ashadha', lord: 'Venus', symbol: "Elephant's Tusk", deity: 'Apas (Water)', quality: 'Invincible confidence, deep purification' },
    { name: 'Uttara Ashadha', lord: 'Sun', symbol: 'Small Bed/Planks', deity: 'Vishwadevas', quality: 'Final permanent victory, leadership' },
    { name: 'Shravana', lord: 'Moon', symbol: 'Ear / Three Footprints', deity: 'Vishnu', quality: 'Sacred oral listening, knowledge retention' },
    { name: 'Dhanishta', lord: 'Mars', symbol: 'Drum (Mridanga)', deity: 'Ashta Vasus', quality: 'Cosmic rhythm, wealth, musical aptitude' },
    { name: 'Shatabhisha', lord: 'Rahu', symbol: 'Empty Circle / 100 Physicians', deity: 'Varuna', quality: 'Veiled mysteries, profound healing' },
    { name: 'Purva Bhadrapada', lord: 'Jupiter', symbol: 'Front of Funeral Bed', deity: 'Aja Ekapada', quality: 'Ascetic tapas, spiritual fire' },
    { name: 'Uttara Bhadrapada', lord: 'Saturn', symbol: 'Back of Funeral Bed', deity: 'Ahirbudhnya', quality: 'Deep cosmic kundalini, stillness' },
    { name: 'Revati', lord: 'Mercury', symbol: 'Pair of Fish', deity: 'Pushan', quality: 'Safe voyages, final liberation, nourishment' },
  ];

  return (
    <PageLayout
      badge="The 27 Lunar Mansions of the Zodiac"
      title="The 27 Nakshatras"
      subtitle="The Nakshatras form the heartbeat of Parashari Jyotish. Each span is precisely 13° 20' of the ecliptic, governing deep karmic predispositions, Moon signs, and Vimshottari dasha rulers."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nakshatras.map((n, i) => (
          <div key={i} className="p-6 rounded-3xl bg-vedic-darkVoid/75 border border-vedic-gold/25 hover:border-vedic-gold transition-colors">
            <div className="text-xs font-serif text-vedic-gold uppercase tracking-wider mb-1">Nakshatra {i + 1}</div>
            <h3 className="font-display font-bold text-xl text-slate-100 mb-2">{n.name}</h3>
            <div className="space-y-1 text-xs text-slate-400 font-serif border-b border-vedic-gold/15 pb-3 mb-3">
              <div>Planetary Lord: <span className="text-amber-300">{n.lord}</span></div>
              <div>Deity & Symbol: <span className="text-slate-200">{n.deity} ({n.symbol})</span></div>
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">{n.quality}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 3. Houses (12 Bhavas)
export const HousesPage: React.FC = () => {
  const houses = [
    { num: 1, name: 'Tanu Bhava (1st House)', category: 'Dharma', signification: 'Self, vitality, physical appearance, personality, life orientation.' },
    { num: 2, name: 'Dhana Bhava (2nd House)', category: 'Artha', signification: 'Accumulated wealth, family lineage, speech, nutrition, early childhood.' },
    { num: 3, name: 'Sahaja Bhava (3rd House)', category: 'Kama', signification: 'Siblings, courage, manual skills, short travels, personal effort (Parakrama).' },
    { num: 4, name: 'Bandhu/Sukha Bhava (4th House)', category: 'Moksha', signification: 'Mother, ancestral home, inner emotional contentment, vehicles, land.' },
    { num: 5, name: 'Putra Bhava (5th House)', category: 'Dharma', signification: 'Past-life merits (Purva Punya), intelligence, children, creative romance.' },
    { num: 6, name: 'Ari/Ripu Bhava (6th House)', category: 'Artha', signification: 'Debts, daily service, obstacles, physical ailments, victory over litigation.' },
    { num: 7, name: 'Kalatra Bhava (7th House)', category: 'Kama', signification: 'Sacred spouse, business partnerships, marital contracts, foreign affairs.' },
    { num: 8, name: 'Ayur/Randhra Bhava (8th House)', category: 'Moksha', signification: 'Longevity, transformations, hidden secrets, joint resources, occult wisdom.' },
    { num: 9, name: 'Bhagya Bhava (9th House)', category: 'Dharma', signification: 'Good fortune, higher philosophical wisdom, father, guru, pilgrimage.' },
    { num: 10, name: 'Karma Bhava (10th House)', category: 'Artha', signification: 'Career, public status, societal deeds, authority, professional legacy.' },
    { num: 11, name: 'Labha Bhava (11th House)', category: 'Kama', signification: 'Material gains, fulfillment of desires, elder siblings, social circles.' },
    { num: 12, name: 'Vyaya Bhava (12th House)', category: 'Moksha', signification: 'Expenditures, foreign settlements, bedroom pleasures, spiritual liberation (Moksha).' },
  ];

  return (
    <PageLayout
      badge="12 Dimensions of Incarnate Life"
      title="The 12 Bhavas (Houses)"
      subtitle="In Vedic astrology, each of the 12 houses governs specific karmic theaters of human existence categorized under Dharma, Artha, Kama, and Moksha."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses.map((h) => (
          <div key={h.num} className="p-6 rounded-3xl bg-vedic-darkVoid/75 border border-vedic-gold/25 hover:border-vedic-gold transition-colors">
            <div className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1.5 mb-2">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>{h.category} Bhava</span>
            </div>
            <h3 className="font-cormorant font-bold text-xl text-[#181716] dark:text-[#F4F1EA] mb-2">{h.name}</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">{h.signification}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 4. Planets (Navagrahas)
export const PlanetsPage: React.FC = () => {
  const planets = [
    { name: 'Surya (Sun)', role: 'Atmakaraka / Soul King', color: 'Copper / Gold', gem: 'Ruby (Manikya)', desc: 'Ego, father, vital life-force, divine illumination, sovereign authority.' },
    { name: 'Chandra (Moon)', role: 'Manaskaraka / Mind & Emotion', color: 'Milk White / Silver', gem: 'Pearl (Moti)', desc: 'Mind, subconscious memories, mother, receptivity, psychological balance.' },
    { name: 'Mangal (Mars)', role: 'Bhratrikaraka / Courage & Fire', color: 'Blood Red', gem: 'Red Coral (Moonga)', desc: 'Willpower, siblings, property, technical aptitude, physical defense.' },
    { name: 'Budha (Mercury)', role: 'Vidya / Intellect & Commerce', color: 'Emerald Green', gem: 'Emerald (Panna)', desc: 'Speech, logic, mathematics, analytical writing, diplomatic humor.' },
    { name: 'Brihaspati (Jupiter)', role: 'Devaguru / Wisdom & Expansion', color: 'Solar Yellow', gem: 'Yellow Sapphire (Pukhraj)', desc: 'Higher philosophy, children, dharma, wealth, teacher of the gods.' },
    { name: 'Shukra (Venus)', role: 'Daityaguru / Harmony & Love', color: 'Variegated / Diamond White', gem: 'Diamond (Heera)', desc: 'Spouse, artistic elegance, vehicles, sensual delights, diplomatic medicine.' },
    { name: 'Shani (Saturn)', role: 'Karmaphala Data / Cosmic Judge', color: 'Midnight Blue / Black', gem: 'Blue Sapphire (Neelam)', desc: 'Discipline, time (Kala), sorrow, humility, long-term legacy.' },
    { name: 'Rahu (North Node)', role: 'Maya / Worldly Obsession', color: 'Smoky Grey', gem: 'Hessonite (Gomed)', desc: 'Material illusions, unconventional breakthroughs, foreign lands, ambition.' },
    { name: 'Ketu (South Node)', role: 'Moksha / Spiritual Detachment', color: 'Reddish Smoke', gem: "Cat's Eye (Lehsunia)", desc: 'Enlightenment, past karma mastery, psychic intuition, transcendence.' },
  ];

  return (
    <PageLayout
      badge="The Nine Cosmic Influencers"
      title="The Navagrahas (Nine Planets)"
      subtitle="In Vedic astrology, the nine grahas are not mere physical rocks, but cosmic focal lenses through which individual and collective prarabdha karma precipitates."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planets.map((p, i) => (
          <div key={i} className="p-6 rounded-3xl bg-vedic-darkVoid/75 border border-vedic-gold/25 hover:border-vedic-gold transition-colors">
            <div className="text-xs font-serif text-vedic-gold uppercase tracking-wider mb-1">Graha {i + 1}</div>
            <h3 className="font-display font-bold text-xl text-slate-100 mb-1">{p.name}</h3>
            <div className="text-xs text-amber-300 font-serif mb-3">{p.role}</div>
            <div className="space-y-1 text-xs text-slate-400 font-serif border-b border-vedic-gold/15 pb-3 mb-3">
              <div>Vedic Gemstone: <span className="text-slate-200">{p.gem}</span></div>
              <div>Sacred Hue: <span className="text-slate-200">{p.color}</span></div>
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

// 5. Transits (Gochara)
export const TransitsPage: React.FC = () => {
  return (
    <PageLayout
      badge="Planetary Movements Against Natal Charts"
      title="Transits (Gochara)"
      subtitle="While Dashas establish the life chapters, Gochara transits act as celestial trigger mechanisms determining the exact days and months when events materialize."
    >
      <div className="space-y-6 text-sm text-slate-300 font-light leading-relaxed max-w-3xl">
        <div className="p-6 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/30">
          <h3 className="font-display font-bold text-xl text-vedic-gold mb-2">The Dual Transit Law of Marriage</h3>
          <p>
            In authentic Parashari astrology, marriage cannot manifest without the simultaneous blessings of both <strong>Jupiter (Brihaspati)</strong> and <strong>Saturn (Shani)</strong> aspecting or transiting the 7th house, 7th lord, or natal Lagna. This ensures both divine benevolence and karmic readiness.
          </p>
        </div>
        <div className="p-6 rounded-3xl bg-vedic-darkVoid/80 border border-vedic-gold/30">
          <h3 className="font-display font-bold text-xl text-vedic-gold mb-2">Sade Sati & Dhayya</h3>
          <p>
            Saturn's 7.5-year transit through the 12th, 1st, and 2nd houses from the natal Moon is known as Sade Sati. Far from being uniformly destructive, it strips away illusions and establishes genuine inner resilience and emotional sovereignty.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

// 6. Yogas (Auspicious Combinations)
export const YogasPage: React.FC = () => {
  const yogas = [
    { name: 'Raja Yoga', desc: 'Association between Kendra lords (1, 4, 7, 10 - Vishnu Sthanas) and Trikona lords (1, 5, 9 - Lakshmi Sthanas), producing power and high status.' },
    { name: 'Dhana Yoga', desc: 'Combinations between lords of the 1st, 2nd, 5th, 9th, and 11th houses generating immense financial prosperity and treasury.' },
    { name: 'Gaja Kesari Yoga', desc: 'Jupiter in a Kendra from the Moon, conferring long-lasting reputation, noble virtue, and scholarly intellect.' },
    { name: 'Pancha Mahapurusha Yogas', desc: 'Non-luminary planets (Mars, Mercury, Jupiter, Venus, Saturn) placed in own sign or exaltation in a Kendra, creating archetypal greatness.' },
    { name: 'Budhaditya Yoga', desc: 'Sun and Mercury conjunct in an auspicious house, conferring intellectual sharpness, oratory skill, and administrative acumen.' },
    { name: 'Viparita Raja Yoga', desc: 'Dusthana lords (6, 8, 12) placed in dusthanas without beneficial affliction, turning apparent crises into sudden unexpected elevation.' },
  ];

  return (
    <PageLayout
      badge="Special Planetary Alignments"
      title="Parashari Yogas"
      subtitle="Yogas are specific geometric alignments of grahas and bhavas that dramatically modify the baseline strength and karmic destiny of a horoscope."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {yogas.map((y, i) => (
          <div key={i} className="p-6 rounded-3xl bg-vedic-darkVoid/75 border border-vedic-gold/25 hover:border-vedic-gold transition-colors">
            <h3 className="font-display font-bold text-xl text-slate-100 mb-2">{y.name}</h3>
            <p className="text-xs text-slate-300 font-light leading-relaxed">{y.desc}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
