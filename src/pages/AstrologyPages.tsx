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
            className="group relative flex flex-col rounded-[2.5rem] overflow-hidden border border-[#CFAF83]/35 transition-all duration-500 hover:-translate-y-2 hover:border-[#E07A2E] shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            style={{
              background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.45) 0%, rgba(18, 14, 24, 0.95) 100%)',
            }}
          >
            {/* Upper Section: Seamless Inked Tarot Placecard Artwork with Atmospheric Blending */}
            <Link
              to={`/astrology/zodiac-signs/${s.id}`}
              className="relative w-full h-80 sm:h-96 flex items-center justify-center overflow-hidden bg-[#0A070D] cursor-pointer"
            >
              {/* Radial backdrop glow matching the sign's elemental temperature */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                style={{
                  background:
                    s.element === 'Fire'
                      ? 'radial-gradient(circle at center, rgba(224, 122, 46, 0.35) 0%, transparent 70%)'
                      : s.element === 'Water'
                      ? 'radial-gradient(circle at center, rgba(71, 83, 104, 0.4) 0%, transparent 70%)'
                      : s.element === 'Air'
                      ? 'radial-gradient(circle at center, rgba(122, 109, 127, 0.35) 0%, transparent 70%)'
                      : 'radial-gradient(circle at center, rgba(157, 136, 107, 0.35) 0%, transparent 70%)',
                }}
              />

              {/* Inked Zodiac Card Image with subtle zoom on hover */}
              <img
                src={s.image}
                alt={`${s.westernName} - ${s.name}`}
                className="h-[88%] w-auto max-w-[85%] object-contain rounded-2xl filter drop-shadow-[0_0_20px_rgba(207,175,131,0.25)] group-hover:drop-shadow-[0_0_30px_rgba(224,122,46,0.45)] group-hover:scale-105 transition-all duration-500 z-10"
              />

              {/* Top & Bottom Seamless Vignette Blends */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#120E18] to-transparent pointer-events-none z-20" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120E18] via-[#120E18]/80 to-transparent pointer-events-none z-20" />

              {/* Rashi & Sign Number Badges */}
              <div className="absolute top-4 left-5 z-30 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest bg-[#120E18]/85 border border-[#CFAF83]/40 text-[#CFAF83] shadow-md backdrop-blur-sm">
                  Sign {s.signNumber} · {s.sanskrit}
                </span>
              </div>

              <div className="absolute top-4 right-5 z-30">
                <span className="px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest bg-[#E07A2E]/20 border border-[#E07A2E]/40 text-[#F4A883] shadow-md backdrop-blur-sm">
                  {s.element}
                </span>
              </div>
            </Link>

            {/* Lower Section: Extensive Astrological Write-up beneath the artwork */}
            <div className="relative p-6 sm:p-8 flex flex-col flex-grow justify-between z-30 bg-[#120E18]/95 border-t border-[#CFAF83]/20">
              
              <div>
                {/* Title & Western Nomenclature */}
                <div className="flex items-baseline justify-between mb-2">
                  <Link
                    to={`/astrology/zodiac-signs/${s.id}`}
                    className="font-display font-bold text-2xl text-[#F6ECDD] hover:text-[#E07A2E] transition-colors"
                  >
                    {s.name}
                  </Link>
                  <span className="text-xs font-serif text-[#CFAF83]/80 tracking-wider">
                    {s.quality.split(' ')[0]}
                  </span>
                </div>

                {/* Dates & Governing Lord */}
                <div className="text-xs text-[#E07A2E] font-serif mb-3">
                  {s.dates} · Ruled by {s.lord}
                </div>

                {/* Rich Specs Bar */}
                <div className="grid grid-cols-3 gap-2 text-[11px] font-serif border-y border-[#CFAF83]/15 py-3 my-3 text-center">
                  <div className="text-[#CFAF83]">
                    <span className="text-[#7A6D7F] block text-[9px] uppercase">Body Limb</span>
                    <span className="font-semibold text-[#F6ECDD]">{s.bodyPart.split(',')[0]}</span>
                  </div>
                  <div className="text-[#CFAF83] border-x border-[#CFAF83]/15">
                    <span className="text-[#7A6D7F] block text-[9px] uppercase">Vedic Gem</span>
                    <span className="font-semibold text-[#F4A883]">{s.favorableGem.split('/')[0]}</span>
                  </div>
                  <div className="text-[#CFAF83]">
                    <span className="text-[#7A6D7F] block text-[9px] uppercase">Symbol</span>
                    <span className="font-semibold text-[#F6ECDD]">{s.symbol.split('(')[0]}</span>
                  </div>
                </div>

                {/* In-depth Parashari Sign Description & Core Nature */}
                <p className="text-xs sm:text-sm text-[#F6ECDD]/85 font-light leading-relaxed mb-3">
                  {s.overview}
                </p>

                {/* Key Guna Strengths & Ideal Synastry Preview */}
                <div className="p-3.5 rounded-2xl bg-[#1E293B]/40 border border-[#CFAF83]/20 mb-4 space-y-1.5 text-xs font-serif">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E07A2E] font-bold">Best Love Matches:</span>
                    <span className="text-[#F6ECDD]">{s.loveAndMarriage.idealMatches.slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#CFAF83] font-bold">Key Vocations:</span>
                    <span className="text-[#F6ECDD]/80">{s.careerAndWealth.vocations.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Accent: Opens the Dedicated Sign Page */}
              <div className="pt-4 border-t border-[#CFAF83]/15 flex items-center justify-between text-xs font-serif text-[#CFAF83]">
                <span className="text-[11px] text-[#7A6D7F]">Sidereal 30° Division</span>
                <Link
                  to={`/astrology/zodiac-signs/${s.id}`}
                  className="font-bold text-[#E07A2E] hover:text-[#F4A883] flex items-center gap-1.5 transition-all group-hover:translate-x-1"
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
            <span className="text-[10px] font-serif uppercase tracking-widest text-vedic-gold px-2.5 py-0.5 rounded-full bg-vedic-gold/10 border border-vedic-gold/20">
              {h.category} Bhava
            </span>
            <h3 className="font-display font-bold text-xl text-slate-100 mt-3 mb-2">{h.name}</h3>
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
