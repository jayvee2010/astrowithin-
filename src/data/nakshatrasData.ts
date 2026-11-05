// 27 Nakshatras Complete Dataset for Astrowithin
// Calibrated to Sidereal Lahiri Zodiac and Classical Parashari Jyotish

export interface PadaDetail {
  pada: number;
  span: string;
  navamsa: string;
  nature: string;
}

export interface NakshatraItem {
  id: string;
  number: number;
  name: string;
  sanskrit: string;
  ruler: string;
  span: string;
  zodiacSign: string;
  symbol: string;
  deity: string;
  gana: 'Deva' | 'Manushya' | 'Rakshasa';
  guna: string;
  element: 'Dharma' | 'Artha' | 'Kama' | 'Moksha';
  animal: string;
  image: string;
  desc: string;
  padas: PadaDetail[];
  syllables: string[];
  traits: string[];
  career: string;
  marriage: string;
}

export const ALL_NAKSHATRAS: NakshatraItem[] = [
  {
    "id": "ashwini",
    "number": 1,
    "name": "Ashwini",
    "sanskrit": "\u0905\u0936\u094d\u0935\u093f\u0928\u0940",
    "ruler": "Ketu",
    "span": "0\u00b0 \u2013 13\u00b020\u2032 Aries",
    "zodiacSign": "Aries",
    "symbol": "Horse Head",
    "deity": "Ashwini Kumaras, the twin celestial physicians",
    "gana": "Deva",
    "guna": "Rajas / Rajas / Rajas",
    "element": "Dharma",
    "animal": "Male Horse",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/hva9j2bnwqqllqk4vblc7uj0/public",
    "desc": "Quick-moving and instinctive, Ashwini is tied to healing, action, and fresh starts. See what this nakshatra reveals about drive, attraction, and recovery.",
    "padas": [
      {
        "pada": 1,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Aries",
        "navamsa": "Aries (Mars)",
        "nature": "Courageous, pioneering initiative and energetic drive"
      },
      {
        "pada": 2,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Aries",
        "navamsa": "Taurus (Venus)",
        "nature": "Resourceful, aesthetic discernment and grounded stamina"
      },
      {
        "pada": 3,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Aries",
        "navamsa": "Gemini (Mercury)",
        "nature": "Quick intellectual wit, curiosity, and rapid adaptability"
      },
      {
        "pada": 4,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Aries",
        "navamsa": "Cancer (Moon)",
        "nature": "Empathetic healing instincts and profound caregiving"
      }
    ],
    "syllables": [
      "Chu",
      "Che",
      "Cho",
      "La"
    ],
    "traits": [
      "Rapid Vitality",
      "Healing Gift",
      "Spontaneous Courage",
      "Restless Independence"
    ],
    "career": "Emergency medicine, surgery, sports athletics, equestrian training, aviation, technological ventures, and crisis intervention.",
    "marriage": "Thrives with dynamic, self-assured partners who cherish freedom and avoid possessive stagnation."
  },
  {
    "id": "bharani",
    "number": 2,
    "name": "Bharani",
    "sanskrit": "\u092d\u0930\u0923\u0940",
    "ruler": "Venus",
    "span": "13\u00b020\u2032 \u2013 26\u00b040\u2032 Aries",
    "zodiacSign": "Aries",
    "symbol": "Yoni (Vessel of Sacred Birth)",
    "deity": "Yama, Lord of Dharma and Cosmic Transition",
    "gana": "Manushya",
    "guna": "Rajas / Rajas / Tamas",
    "element": "Artha",
    "animal": "Male Elephant",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/rhd6m2nlu9fy6f8fpvry3d0t/public",
    "desc": "Bharani carries intensity, desire, endurance, and creative force. See what this nakshatra says about personality, love, limits, and inner strength.",
    "padas": [
      {
        "pada": 1,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Aries",
        "navamsa": "Leo (Sun)",
        "nature": "Magnificent self-expression and unyielding authority"
      },
      {
        "pada": 2,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Aries",
        "navamsa": "Virgo (Mercury)",
        "nature": "Methodical craft, endurance, and analytical discipline"
      },
      {
        "pada": 3,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Aries",
        "navamsa": "Libra (Venus)",
        "nature": "Harmonious sensuality, artistic beauty, and refined romance"
      },
      {
        "pada": 4,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Aries",
        "navamsa": "Scorpio (Mars)",
        "nature": "Deep psychological magnetism and transformative willpower"
      }
    ],
    "syllables": [
      "Lee",
      "Lu",
      "Le",
      "Lo"
    ],
    "traits": [
      "Unyielding Endurance",
      "Creative Passion",
      "Moral Conviction",
      "Transformative Depth"
    ],
    "career": "Obstetrics, judiciary law, film direction, haute couture, crisis management, occult research, and monumental architecture.",
    "marriage": "Intensely loyal and uncompromising; seeks complete psychological transparency and passionate devotion."
  },
  {
    "id": "krittika",
    "number": 3,
    "name": "Krittika",
    "sanskrit": "\u0915\u0943\u0924\u094d\u0924\u093f\u0915\u093e",
    "ruler": "Sun",
    "span": "26\u00b040\u2032 Aries \u2013 10\u00b000\u2032 Taurus",
    "zodiacSign": "Aries / Taurus",
    "symbol": "Knife, Razor, or Sacred Flame",
    "deity": "Agni, the Sacred Purifying Flame",
    "gana": "Rakshasa",
    "guna": "Rajas / Rajas / Sattva",
    "element": "Kama",
    "animal": "Female Sheep",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/lt0t6gpd3lo8fqc7rlh7ah3o/public",
    "desc": "Krittika is cutting, clear, and hard to ignore. Learn how this nakshatra shapes willpower, honesty, ambition, and the need to refine what is around you.",
    "padas": [
      {
        "pada": 1,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Aries",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Righteous dharma, exploration, and heroic courage"
      },
      {
        "pada": 2,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Taurus",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Pragmatic material mastery, stamina, and steadfast patience"
      },
      {
        "pada": 3,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Taurus",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Humanitarian ethics, visionary innovation, and collective benefit"
      },
      {
        "pada": 4,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Taurus",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Spiritual devotion, maternal protectiveness, and empathy"
      }
    ],
    "syllables": [
      "A",
      "Ee",
      "U",
      "Ea"
    ],
    "traits": [
      "Incisive Honesty",
      "Purifying Will",
      "Maternal Protectiveness",
      "Direct Leadership"
    ],
    "career": "Gastronomy, investigative journalism, surgical medicine, military strategy, metalcraft, and spiritual reformation.",
    "marriage": "Direct and protective in love; values unquestioned honor, fidelity, and transparent emotional commitment."
  },
  {
    "id": "rohini",
    "number": 4,
    "name": "Rohini",
    "sanskrit": "\u0930\u094b\u0939\u093f\u0923\u0940",
    "ruler": "Moon",
    "span": "10\u00b000\u2032 \u2013 23\u00b020\u2032 Taurus",
    "zodiacSign": "Taurus",
    "symbol": "Ox Cart or Chariot",
    "deity": "Brahma / Prajapati, the Cosmic Creator",
    "gana": "Manushya",
    "guna": "Rajas / Tamas / Rajas",
    "element": "Moksha",
    "animal": "Male Cobra",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/hdwpsuaq4c56xooidh3hc95c/public",
    "desc": "Radiant and magnetic, Rohini is the favorite lunar mansion of the Moon, known for artistic charm, fertility, emotional depth, and devotion to beauty and sensory fulfillment.",
    "padas": [
      {
        "pada": 1,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Taurus",
        "navamsa": "Aries (Mars)",
        "nature": "Passionate creative impulse and sensory magnetism"
      },
      {
        "pada": 2,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Taurus",
        "navamsa": "Taurus (Venus)",
        "nature": "Vargottama: supreme artistic refinement, luxury, and serenity"
      },
      {
        "pada": 3,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Taurus",
        "navamsa": "Gemini (Mercury)",
        "nature": "Eloquent expression, intellectual wit, and artisanal skill"
      },
      {
        "pada": 4,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Taurus",
        "navamsa": "Cancer (Moon)",
        "nature": "Deep emotional devotion, maternal affection, and intuitive empathy"
      }
    ],
    "syllables": [
      "O",
      "Va",
      "Vi",
      "Vu"
    ],
    "traits": [
      "Sensory Magnetism",
      "Artistic Refinement",
      "Fertile Creation",
      "Loyal Devotion"
    ],
    "career": "Fine arts, luxury hospitality, music composition, fashion, agriculture, real estate, and maternal healthcare.",
    "marriage": "Seeks lifelong warmth, gentle appreciation, and aesthetic harmony. Deeply affectionate and loyal."
  },
  {
    "id": "mrigashira",
    "number": 5,
    "name": "Mrigashira",
    "sanskrit": "\u092e\u0943\u0917\u0936\u093f\u0930\u093e",
    "ruler": "Mars",
    "span": "23\u00b020\u2032 Taurus \u2013 6\u00b040\u2032 Gemini",
    "zodiacSign": "Taurus / Gemini",
    "symbol": "Deer\u2019s Head",
    "deity": "Soma, Lord of the Nectar of Immortality",
    "gana": "Deva",
    "guna": "Rajas / Tamas / Tamas",
    "element": "Moksha",
    "animal": "Female Serpent",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/y6yxuikeqbmkh23uvlrprgx2/public",
    "desc": "Curious, gentle, and searching, Mrigashira is the perpetual seeker of truth and experience. It carries an insatiable quest for beauty, knowledge, and spiritual nectar.",
    "padas": [
      {
        "pada": 1,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Taurus",
        "navamsa": "Leo (Sun)",
        "nature": "Expressive confidence and unwavering aesthetic search"
      },
      {
        "pada": 2,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Taurus",
        "navamsa": "Virgo (Mercury)",
        "nature": "Methodical investigation, discernment, and craft"
      },
      {
        "pada": 3,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Gemini",
        "navamsa": "Libra (Venus)",
        "nature": "Sociable charm, poetic wit, and relationship curiosity"
      },
      {
        "pada": 4,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Gemini",
        "navamsa": "Scorpio (Mars)",
        "nature": "Psychological depth, perceptive mystery, and resolve"
      }
    ],
    "syllables": [
      "Ve",
      "Vo",
      "Ka",
      "Kee"
    ],
    "traits": [
      "Perpetual Curiosity",
      "Gentle Charm",
      "Agile Mind",
      "Restless Exploration"
    ],
    "career": "Travel journalism, research sciences, philosophy, cartography, perfumery, investigative reporting, and music.",
    "marriage": "Requires a partner who engages both their intellect and heart. Values playful banter and shared intellectual curiosity."
  },
  {
    "id": "ardra",
    "number": 6,
    "name": "Ardra",
    "sanskrit": "\u0906\u0930\u094d\u0926\u094d\u0930\u093e",
    "ruler": "Rahu",
    "span": "6\u00b040\u2032 \u2013 20\u00b000\u2032 Gemini",
    "zodiacSign": "Gemini",
    "symbol": "Teardrop or Diamond",
    "deity": "Rudra, the Storm God of Dissolution",
    "gana": "Manushya",
    "guna": "Rajas / Tamas / Sattva",
    "element": "Kama",
    "animal": "Female Dog",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/x5lr2pgqgpemsn3i69orkugc/public",
    "desc": "Electrifying, intense, and transformative. Ardra represents the stormy clearing of the atmosphere, washing away outdated structures to reveal brilliant crystalline wisdom.",
    "padas": [
      {
        "pada": 1,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Gemini",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Philosophical optimism emerging through intellectual struggle"
      },
      {
        "pada": 2,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Gemini",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Steadfast perseverance and pragmatic mastery of sorrow"
      },
      {
        "pada": 3,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Gemini",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Scientific insight, psychological breakthrough, and collective empathy"
      },
      {
        "pada": 4,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Gemini",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Spiritual rebirth, unconditional compassion, and release"
      }
    ],
    "syllables": [
      "Ku",
      "Gha",
      "Ng",
      "Chha"
    ],
    "traits": [
      "Transformative Insight",
      "Stormy Passion",
      "Intellectual Brilliance",
      "Profound Empathy"
    ],
    "career": "High-tech software, software architecture, weather forecasting, psychotherapy, particle physics, and breakthrough creative writing.",
    "marriage": "Endures emotional tempests before arriving at mature devotion. Deeply compassionate toward partner\u2019s vulnerabilities."
  },
  {
    "id": "punarvasu",
    "number": 7,
    "name": "Punarvasu",
    "sanskrit": "\u092a\u0941\u0928\u0930\u094d\u0935\u0938\u0941",
    "ruler": "Jupiter",
    "span": "20\u00b000\u2032 Gemini \u2013 3\u00b020\u2032 Cancer",
    "zodiacSign": "Gemini / Cancer",
    "symbol": "Quiver of Arrows",
    "deity": "Aditi, Mother of the Gods and Infinite Cosmic Space",
    "gana": "Deva",
    "guna": "Rajas / Sattva / Rajas",
    "element": "Artha",
    "animal": "Female Cat",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/gng7t7os77ua520ce0o03s9f/public",
    "desc": "Punarvasu embodies the return of light, renewal, and endless benevolence. Like an arrow returning to its quiver after striking its mark, it brings recovery and spiritual homecoming.",
    "padas": [
      {
        "pada": 1,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Gemini",
        "navamsa": "Aries (Mars)",
        "nature": "Courageous moral leadership and proactive generosity"
      },
      {
        "pada": 2,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Gemini",
        "navamsa": "Taurus (Venus)",
        "nature": "Artisanal grace, material stability, and home sanctuary"
      },
      {
        "pada": 3,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Gemini",
        "navamsa": "Gemini (Mercury)",
        "nature": "Vargottama: brilliant eloquence, scholarship, and pedagogy"
      },
      {
        "pada": 4,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Cancer",
        "navamsa": "Cancer (Moon)",
        "nature": "Pushkara Navamsa: profound maternal tenderness and spiritual grace"
      }
    ],
    "syllables": [
      "Ke",
      "Ko",
      "Ha",
      "Hee"
    ],
    "traits": [
      "Bountiful Optimism",
      "Resilient Recovery",
      "Nurturing Wisdom",
      "Innate Nobility"
    ],
    "career": "Teaching, counseling, architecture, restorative medicine, philanthropy, international diplomacy, and publishing.",
    "marriage": "Generous, forgiving, and family-oriented. Creates an emotionally secure haven for the household."
  },
  {
    "id": "pushya",
    "number": 8,
    "name": "Pushya",
    "sanskrit": "\u092a\u0941\u0937\u094d\u092f",
    "ruler": "Saturn",
    "span": "3\u00b020\u2032 \u2013 16\u00b040\u2032 Cancer",
    "zodiacSign": "Cancer",
    "symbol": "Flower, Lotus, or Cow\u2019s Udder",
    "deity": "Brihaspati, the Spiritual Teacher of the Gods",
    "gana": "Deva",
    "guna": "Rajas / Sattva / Tamas",
    "element": "Dharma",
    "animal": "Male Sheep",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/h45fo8ilkq86wa0flq5tydpp/public",
    "desc": "Revered as the most auspicious of all 27 lunar mansions, Pushya represents nourishment, divine patronage, moral steadfastness, and spiritual sovereignty.",
    "padas": [
      {
        "pada": 1,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Cancer",
        "navamsa": "Leo (Sun)",
        "nature": "Dignified leadership, ancestral pride, and sovereign authority"
      },
      {
        "pada": 2,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Cancer",
        "navamsa": "Virgo (Mercury)",
        "nature": "Methodical caretaking, ethical diligence, and service"
      },
      {
        "pada": 3,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Cancer",
        "navamsa": "Libra (Venus)",
        "nature": "Gracious hospitality, social harmony, and artistic philanthropy"
      },
      {
        "pada": 4,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Cancer",
        "navamsa": "Scorpio (Mars)",
        "nature": "Occult guardianship, esoteric discipline, and steadfast loyalty"
      }
    ],
    "syllables": [
      "Hu",
      "He",
      "Ho",
      "Da"
    ],
    "traits": [
      "Selfless Nurturing",
      "Spiritual Integrity",
      "Paternal Guidance",
      "Unwavering Duty"
    ],
    "career": "Spiritual philosophy, judiciary administration, politics, dairy & food sciences, education, and public foundations.",
    "marriage": "The bedrock of any union; brings absolute fidelity, nurturing warmth, and deep protective care."
  },
  {
    "id": "ashlesha",
    "number": 9,
    "name": "Ashlesha",
    "sanskrit": "\u0906\u0936\u094d\u0932\u0947\u0937\u093e",
    "ruler": "Mercury",
    "span": "16\u00b040\u2032 \u2013 30\u00b000\u2032 Cancer",
    "zodiacSign": "Cancer",
    "symbol": "Coiled Serpent",
    "deity": "The Nagas, Sacred Serpents of Wisdom and the Underworld",
    "gana": "Rakshasa",
    "guna": "Rajas / Sattva / Sattva",
    "element": "Dharma",
    "animal": "Male Cat",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/fa612hzy95xkpyg00zuwyr6c/public",
    "desc": "Penetrating, hypnotic, and psychologically astute. Ashlesha embodies the awakening of Kundalini energy, guarding deep instinctual knowledge and protective cunning.",
    "padas": [
      {
        "pada": 1,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Cancer",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Strategic insight, philosophical cunning, and higher knowledge"
      },
      {
        "pada": 2,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Cancer",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Patient secrecy, tactical ambition, and shrewd discernment"
      },
      {
        "pada": 3,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Cancer",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Occult understanding, unconventional alliances, and scientific depth"
      },
      {
        "pada": 4,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Cancer",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Gandanta zone: profound spiritual dissolution and mystical awakening"
      }
    ],
    "syllables": [
      "Dee",
      "Du",
      "De",
      "Do"
    ],
    "traits": [
      "Perceptive Intuition",
      "Strategic Protection",
      "Psychic Magnetism",
      "Mystical Wisdom"
    ],
    "career": "Psychiatry, toxicology, pharmacology, investigative espionage, diplomatic negotiation, astrology, and yoga philosophy.",
    "marriage": "Protective and intensely devoted once trust is forged, but requires time to lower emotional defenses."
  },
  {
    "id": "magha",
    "number": 10,
    "name": "Magha",
    "sanskrit": "\u092e\u0918\u093e",
    "ruler": "Ketu",
    "span": "0\u00b000\u2032 \u2013 13\u00b020\u2032 Leo",
    "zodiacSign": "Leo",
    "symbol": "Royal Throne or Palanquin",
    "deity": "The Pitris, Ancestral Guardians of the Lineage",
    "gana": "Rakshasa",
    "guna": "Tamas / Rajas / Rajas",
    "element": "Artha",
    "animal": "Male Rat",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/xdub4m3gufk31dlttfsqrlcs/public",
    "desc": "Regal, noble, and anchored in heritage. Magha connects mortals with the legacy of their ancestors, carrying sovereign dignity, ancestral blessings, and natural leadership.",
    "padas": [
      {
        "pada": 1,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Leo",
        "navamsa": "Aries (Mars)",
        "nature": "Warrior heritage, dynastic pride, and unyielding will"
      },
      {
        "pada": 2,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Leo",
        "navamsa": "Taurus (Venus)",
        "nature": "Noble patronage, royal opulence, and traditional craftsmanship"
      },
      {
        "pada": 3,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Leo",
        "navamsa": "Gemini (Mercury)",
        "nature": "Archival scholarship, genealogical research, and historical literacy"
      },
      {
        "pada": 4,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Leo",
        "navamsa": "Cancer (Moon)",
        "nature": "Devotion to ancestral rites, family honor, and sovereign stewardship"
      }
    ],
    "syllables": [
      "Ma",
      "Mee",
      "Mu",
      "Me"
    ],
    "traits": [
      "Ancestral Sovereignty",
      "Regal Dignity",
      "Traditional Honor",
      "Authoritative Presence"
    ],
    "career": "Governance, cultural preservation, monumental heritage, executive management, archaeology, and family estates.",
    "marriage": "Commands respect in romantic life. Values lineage, gracious hospitality, and reciprocal honor."
  },
  {
    "id": "purva-phalguni",
    "number": 11,
    "name": "Purva Phalguni",
    "sanskrit": "\u092a\u0942\u0930\u094d\u0935\u093e\u092b\u093e\u0932\u094d\u0917\u0941\u0928\u0940",
    "ruler": "Venus",
    "span": "13\u00b020\u2032 \u2013 26\u00b040\u2032 Leo",
    "zodiacSign": "Leo",
    "symbol": "Front Legs of a Bed or Hammock",
    "deity": "Bhaga, God of Good Fortune and Conjugal Union",
    "gana": "Manushya",
    "guna": "Tamas / Rajas / Tamas",
    "element": "Kama",
    "animal": "Female Rat",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/bv3tean62xodvkp9mj0bxsza/public",
    "desc": "The star of delight, leisure, and romantic celebration. Purva Phalguni celebrates the joys of union, artistic creation, relaxed fulfillment, and generous affection.",
    "padas": [
      {
        "pada": 1,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Leo",
        "navamsa": "Leo (Sun)",
        "nature": "Vargottama: radiant charisma, sovereign theatricality, and romance"
      },
      {
        "pada": 2,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Leo",
        "navamsa": "Virgo (Mercury)",
        "nature": "Pragmatic refinement, graceful craftsmanship, and taste"
      },
      {
        "pada": 3,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Leo",
        "navamsa": "Libra (Venus)",
        "nature": "Sensual harmony, marital bliss, and artistic social circles"
      },
      {
        "pada": 4,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Leo",
        "navamsa": "Scorpio (Mars)",
        "nature": "Passionate emotional intensity, magnetism, and occult romance"
      }
    ],
    "syllables": [
      "Mo",
      "Ta",
      "Tee",
      "Tu"
    ],
    "traits": [
      "Sensual Warmth",
      "Celebratory Joy",
      "Generous Romance",
      "Artistic Magnetism"
    ],
    "career": "Performing arts, fashion styling, wedding planning, diplomacy, recreation & hospitality, and fine cuisine.",
    "marriage": "Born for loving partnership. Infuses daily life with romance, shared laughter, and generous affection."
  },
  {
    "id": "uttara-phalguni",
    "number": 12,
    "name": "Uttara Phalguni",
    "sanskrit": "\u0909\u0924\u094d\u0924\u0930\u093e\u092b\u093e\u0932\u094d\u0917\u0941\u0928\u0940",
    "ruler": "Sun",
    "span": "26\u00b040\u2032 Leo \u2013 10\u00b000\u2032 Virgo",
    "zodiacSign": "Leo / Virgo",
    "symbol": "Back Legs of a Bed or Cow",
    "deity": "Aryaman, the Patron of Sacred Contracts and Friendship",
    "gana": "Manushya",
    "guna": "Tamas / Rajas / Sattva",
    "element": "Moksha",
    "animal": "Male Bull",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/ha1suigzlogvh1bmynzuyj0c/public",
    "desc": "The patron of lasting vows and matrimonial sanctification. Uttara Phalguni upholds social agreements, enduring alliances, and compassionate patronage toward dependents.",
    "padas": [
      {
        "pada": 1,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Leo",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Righteous honor, noble contracts, and ethical leadership"
      },
      {
        "pada": 2,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Virgo",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Methodical diligence, practical duty, and quiet stamina"
      },
      {
        "pada": 3,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Virgo",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Humanitarian service, collective welfare, and organization"
      },
      {
        "pada": 4,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Virgo",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Benevolent caregiving, spiritual devotion, and selflessness"
      }
    ],
    "syllables": [
      "Te",
      "To",
      "Pa",
      "Pee"
    ],
    "traits": [
      "Steadfast Loyalty",
      "Honored Vows",
      "Generous Patronage",
      "Gracious Nobility"
    ],
    "career": "Contract law, philanthropy, institutional leadership, social welfare, diplomacy, and marriage consulting.",
    "marriage": "The supreme marital nakshatra; treats sacred vows as inviolable, offering enduring devotion and rock-solid stability."
  },
  {
    "id": "hasta",
    "number": 13,
    "name": "Hasta",
    "sanskrit": "\u0939\u0938\u094d\u0924",
    "ruler": "Moon",
    "span": "10\u00b000\u2032 \u2013 23\u00b020\u2032 Virgo",
    "zodiacSign": "Virgo",
    "symbol": "Open Palm of Hand or Clenched Fist",
    "deity": "Savitr, the Solar Deity of Dawn and Creative Awakening",
    "gana": "Deva",
    "guna": "Tamas / Tamas / Rajas",
    "element": "Moksha",
    "animal": "Female Buffalo",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/pqvq8pftfr9lsrxf9212vl6c/public",
    "desc": "Dexterous, witty, and resourceful. Hasta governs the power of the hands\u2014crafting, healing, bargaining, and manifesting ideas into tangible physical reality.",
    "padas": [
      {
        "pada": 1,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Virgo",
        "navamsa": "Aries (Mars)",
        "nature": "Energetic manual craft, surgical skill, and technical speed"
      },
      {
        "pada": 2,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Virgo",
        "navamsa": "Taurus (Venus)",
        "nature": "Refined artisanal beauty, fine jewelry, and commercial flair"
      },
      {
        "pada": 3,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Virgo",
        "navamsa": "Gemini (Mercury)",
        "nature": "Clever bargaining, mercantile wit, mathematics, and writing"
      },
      {
        "pada": 4,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Virgo",
        "navamsa": "Cancer (Moon)",
        "nature": "Healing touch, holistic wellness, and intuitive caregiving"
      }
    ],
    "syllables": [
      "Pu",
      "Sha",
      "Na",
      "Tha"
    ],
    "traits": [
      "Masterful Dexterity",
      "Quick Cleverness",
      "Healing Hands",
      "Playful Resourcefulness"
    ],
    "career": "Surgery, fine jewelry, software programming, physiotherapy, commerce & negotiation, and comedy.",
    "marriage": "Practical, attentive, and deeply supportive; expresses affection through helpful acts and thoughtful gestures."
  },
  {
    "id": "chitra",
    "number": 14,
    "name": "Chitra",
    "sanskrit": "\u091a\u093f\u0924\u094d\u0930\u093e",
    "ruler": "Mars",
    "span": "23\u00b020\u2032 Virgo \u2013 6\u00b040\u2032 Libra",
    "zodiacSign": "Virgo / Libra",
    "symbol": "Bright Jewel or Pearl",
    "deity": "Vishwakarma, the Celestial Architect of the Universe",
    "gana": "Rakshasa",
    "guna": "Tamas / Tamas / Tamas",
    "element": "Kama",
    "animal": "Female Tiger",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/fa1toeq6co41wan8i94iy01z/public",
    "desc": "Brilliant, aesthetic, and architectural. Known as the star of wonder, Chitra constructs magnificent visual forms, designing striking beauty from raw materials.",
    "padas": [
      {
        "pada": 1,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Virgo",
        "navamsa": "Leo (Sun)",
        "nature": "Monumental design, sovereign vision, and bold artistic pride"
      },
      {
        "pada": 2,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Virgo",
        "navamsa": "Virgo (Mercury)",
        "nature": "Vargottama: supreme geometric precision and surgical detail"
      },
      {
        "pada": 3,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Libra",
        "navamsa": "Libra (Venus)",
        "nature": "Vargottama: sublime aesthetic balance, elegance, and fashion"
      },
      {
        "pada": 4,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Libra",
        "navamsa": "Scorpio (Mars)",
        "nature": "Structural depth, hidden mechanics, and intense passion"
      }
    ],
    "syllables": [
      "Pe",
      "Po",
      "Ra",
      "Ree"
    ],
    "traits": [
      "Aesthetic Genius",
      "Architectural Vision",
      "Striking Elegance",
      "Passionate Craft"
    ],
    "career": "Urban architecture, industrial design, photography, sculpture, graphic arts, film editing, and surgery.",
    "marriage": "Attracted to refined, visually elegant partners. Requires mutual inspiration and creative respect."
  },
  {
    "id": "swati",
    "number": 15,
    "name": "Swati",
    "sanskrit": "\u0938\u094d\u0935\u093e\u0924\u0940",
    "ruler": "Rahu",
    "span": "6\u00b040\u2032 \u2013 20\u00b000\u2032 Libra",
    "zodiacSign": "Libra",
    "symbol": "Shoot of Plant or Coral Bending in the Wind",
    "deity": "Vayu, the Celestial Wind Deity of Prana",
    "gana": "Deva",
    "guna": "Tamas / Tamas / Sattva",
    "element": "Artha",
    "animal": "Male Buffalo",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/f40oowyqrxd3wgmvvut5y4b1/public",
    "desc": "Independent, adaptable, and free-spirited. Swati bends gracefully with the cosmic winds without breaking, embodying trade, diplomacy, and spiritual breath.",
    "padas": [
      {
        "pada": 1,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Libra",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Philosophical commerce, international trade, and visionary ideas"
      },
      {
        "pada": 2,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Libra",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Pragmatic negotiation, commercial stamina, and business ethics"
      },
      {
        "pada": 3,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Libra",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Humanitarian networks, scientific ideas, and open-mindedness"
      },
      {
        "pada": 4,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Libra",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Spiritual devotion, musical talent, and intuitive balance"
      }
    ],
    "syllables": [
      "Ru",
      "Re",
      "Ro",
      "Ta"
    ],
    "traits": [
      "Adaptable Flexibility",
      "Commercial Acumen",
      "Independent Freedom",
      "Diplomatic Grace"
    ],
    "career": "International commerce, aviation, public relations, music, alternative energy, travel enterprises, and yoga.",
    "marriage": "Needs personal autonomy and mutual equality. Thrives with open-minded, gentle communicators."
  },
  {
    "id": "vishakha",
    "number": 16,
    "name": "Vishakha",
    "sanskrit": "\u0935\u093f\u0936\u093e\u0916\u093e",
    "ruler": "Jupiter",
    "span": "20\u00b000\u2032 Libra \u2013 3\u00b020\u2032 Scorpio",
    "zodiacSign": "Libra / Scorpio",
    "symbol": "Triumphal Decorated Archway or Potter\u2019s Wheel",
    "deity": "Indragni, the Twin Forces of Fire and Divine Lightning",
    "gana": "Rakshasa",
    "guna": "Tamas / Sattva / Rajas",
    "element": "Dharma",
    "animal": "Male Tiger",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/mjivbyujjlwrbs2lmecknqcs/public",
    "desc": "Single-minded, focused, and triumphant. Vishakha pursues goals with laser precision, channeling intense resolve until total victory is attained.",
    "padas": [
      {
        "pada": 1,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Libra",
        "navamsa": "Aries (Mars)",
        "nature": "Pioneering ambition, warrior focus, and bold initiative"
      },
      {
        "pada": 2,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Libra",
        "navamsa": "Taurus (Venus)",
        "nature": "Material perseverance, steadfast effort, and aesthetic ambition"
      },
      {
        "pada": 3,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Libra",
        "navamsa": "Gemini (Mercury)",
        "nature": "Strategic communication, debate, and intellectual mastery"
      },
      {
        "pada": 4,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Scorpio",
        "navamsa": "Cancer (Moon)",
        "nature": "Deep emotional conviction, transformative will, and devotion"
      }
    ],
    "syllables": [
      "Tee",
      "Tue",
      "Tey",
      "To"
    ],
    "traits": [
      "Laser Focus",
      "Unstoppable Drive",
      "Triumphant Resolve",
      "Intense Ambition"
    ],
    "career": "Corporate leadership, trial law, political campaigns, research science, elite athletics, and trade unionism.",
    "marriage": "Passionate and loyal, but needs shared purpose and ambition to feel deeply bonded."
  },
  {
    "id": "anuradha",
    "number": 17,
    "name": "Anuradha",
    "sanskrit": "\u0905\u0928\u0941\u0930\u093e\u0927\u093e",
    "ruler": "Saturn",
    "span": "3\u00b020\u2032 \u2013 16\u00b040\u2032 Scorpio",
    "zodiacSign": "Scorpio",
    "symbol": "Lotus Flower Blooming in Mud or Staff",
    "deity": "Mitra, the Solar Deity of Friendship and Sacred Harmony",
    "gana": "Deva",
    "guna": "Tamas / Sattva / Tamas",
    "element": "Artha",
    "animal": "Female Deer",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/u8a2yestsnx3sxnsnrvd2aie/public",
    "desc": "Resilient, devotional, and cooperative. Like a pure lotus blossoming amidst dark waters, Anuradha transforms hardship into beautiful friendship and spiritual communion.",
    "padas": [
      {
        "pada": 1,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Scorpio",
        "navamsa": "Leo (Sun)",
        "nature": "Commanding loyalty, royal benevolence, and dignified brotherhood"
      },
      {
        "pada": 2,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Scorpio",
        "navamsa": "Virgo (Mercury)",
        "nature": "Methodical friendship, technical research, and quiet service"
      },
      {
        "pada": 3,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Scorpio",
        "navamsa": "Libra (Venus)",
        "nature": "Musical sensitivity, diplomatic mediation, and artistic warmth"
      },
      {
        "pada": 4,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Scorpio",
        "navamsa": "Scorpio (Mars)",
        "nature": "Occult devotion, deep mystical bonding, and emotional resilience"
      }
    ],
    "syllables": [
      "Na",
      "Nee",
      "Nu",
      "Ne"
    ],
    "traits": [
      "Deep Loyalty",
      "Spiritual Devotion",
      "Lotus Resilience",
      "Universal Friendship"
    ],
    "career": "Organizational mediation, international relations, hydrology, petroleum engineering, music therapy, and mystical studies.",
    "marriage": "Deeply devoted and emotionally enduring; builds a sanctuary of unconditional trust and soulful partnership."
  },
  {
    "id": "jyeshta",
    "number": 18,
    "name": "Jyeshta",
    "sanskrit": "\u091c\u094d\u092f\u0947\u0937\u094d\u0920\u093e",
    "ruler": "Mercury",
    "span": "16\u00b040\u2032 \u2013 30\u00b000\u2032 Scorpio",
    "zodiacSign": "Scorpio",
    "symbol": "Circular Amulet, Protective Umbrella, or Earring",
    "deity": "Indra, Sovereign King of the Gods",
    "gana": "Rakshasa",
    "guna": "Tamas / Sattva / Sattva",
    "element": "Artha",
    "animal": "Male Deer",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/mtpvctz97m0j592vjvhrzu9w/public",
    "desc": "Senior, authoritative, and fiercely protective. Jyeshta carries sovereign responsibility, guarding dependents while enduring the lonely burdens of leadership.",
    "padas": [
      {
        "pada": 1,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Scorpio",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Righteous authority, philosophical defense, and regal wisdom"
      },
      {
        "pada": 2,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Scorpio",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Pragmatic responsibility, discipline, and executive command"
      },
      {
        "pada": 3,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Scorpio",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Scientific acumen, unconventional courage, and defense of the weak"
      },
      {
        "pada": 4,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Scorpio",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Gandanta threshold: spiritual surrender, heroic sacrifice, and release"
      }
    ],
    "syllables": [
      "No",
      "Ya",
      "Yee",
      "Yu"
    ],
    "traits": [
      "Protective Seniority",
      "Sovereign Authority",
      "Unflinching Courage",
      "Perceptive Defense"
    ],
    "career": "Defense command, executive security, union leadership, administrative journalism, neurosurgery, and management.",
    "marriage": "Intensely protective of spouse and family; seeks deep respect, reciprocal loyalty, and emotional stability."
  },
  {
    "id": "mula",
    "number": 19,
    "name": "Mula",
    "sanskrit": "\u092e\u0942\u0932",
    "ruler": "Ketu",
    "span": "0\u00b000\u2032 \u2013 13\u00b020\u2032 Sagittarius",
    "zodiacSign": "Sagittarius",
    "symbol": "Bunch of Tied Roots or Elephant Goad",
    "deity": "Nirriti, Goddess of Dissolution and Root Truth",
    "gana": "Rakshasa",
    "guna": "Sattva / Rajas / Rajas",
    "element": "Kama",
    "animal": "Male Dog",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/hdpdlffrf3ek4l8960vhbckn/public",
    "desc": "Radical, probing, and unsparing. Mula dives directly to the root cause of phenomena, dismantling superficial illusions to uncover unvarnished core truth.",
    "padas": [
      {
        "pada": 1,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Sagittarius",
        "navamsa": "Aries (Mars)",
        "nature": "Courageous investigation, warrior zeal, and unyielding will"
      },
      {
        "pada": 2,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Sagittarius",
        "navamsa": "Taurus (Venus)",
        "nature": "Material grounding, herbal botany, and steady research"
      },
      {
        "pada": 3,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Sagittarius",
        "navamsa": "Gemini (Mercury)",
        "nature": "Deep intellectual inquiry, philosophy, and analytical debate"
      },
      {
        "pada": 4,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Sagittarius",
        "navamsa": "Cancer (Moon)",
        "nature": "Emotional catharsis, psychological depth, and spiritual rebirth"
      }
    ],
    "syllables": [
      "Ye",
      "Yo",
      "Bha",
      "Bhee"
    ],
    "traits": [
      "Root Investigation",
      "Radical Honesty",
      "Spiritual Catharsis",
      "Fearless Breakthrough"
    ],
    "career": "Microbiology, botanical medicine, forensic investigation, root-cause philosophy, geology, and spiritual enlightenment.",
    "marriage": "Seeks profound existential authenticity. Shuns pretense and forms deep, transformative spiritual bonds."
  },
  {
    "id": "purva-ashadha",
    "number": 20,
    "name": "Purva Ashadha",
    "sanskrit": "\u092a\u0942\u0930\u094d\u0935\u093e\u0937\u093e\u0922\u093e",
    "ruler": "Venus",
    "span": "13\u00b020\u2032 \u2013 26\u00b040\u2032 Sagittarius",
    "zodiacSign": "Sagittarius",
    "symbol": "Winnowing Fan or Elephant Tusk",
    "deity": "Apas, the Cosmic Water Deities of Purification",
    "gana": "Manushya",
    "guna": "Sattva / Rajas / Tamas",
    "element": "Moksha",
    "animal": "Male Monkey",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/asb6u1jjqlsy2u8d8isr0sfx/public",
    "desc": "Invincible, persuasive, and purifying. Known as the undefeated star, Purva Ashadha carries supreme confidence, flowing charisma, and the power to inspire victory.",
    "padas": [
      {
        "pada": 1,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Sagittarius",
        "navamsa": "Leo (Sun)",
        "nature": "Regal self-belief, inspirational leadership, and oratory"
      },
      {
        "pada": 2,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Sagittarius",
        "navamsa": "Virgo (Mercury)",
        "nature": "Strategic discrimination, tactical organization, and clarity"
      },
      {
        "pada": 3,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Sagittarius",
        "navamsa": "Libra (Venus)",
        "nature": "Social charm, artistic brilliance, and diplomatic persuasion"
      },
      {
        "pada": 4,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Sagittarius",
        "navamsa": "Scorpio (Mars)",
        "nature": "Deep psychological conviction, perseverance, and triumph"
      }
    ],
    "syllables": [
      "Bhu",
      "Dha",
      "Pha",
      "Dhad"
    ],
    "traits": [
      "Invincible Optimism",
      "Purifying Flow",
      "Inspiring Oratory",
      "Undefeated Resolve"
    ],
    "career": "Public advocacy, maritime navigation, hydro-engineering, film entertainment, motivational speaking, and philosophy.",
    "marriage": "Vibrant and affectionate; brings enthusiasm, laughter, and uplifting spiritual loyalty to partnership."
  },
  {
    "id": "uttara-ashadha",
    "number": 21,
    "name": "Uttara Ashadha",
    "sanskrit": "\u0909\u0924\u094d\u0924\u0930\u093e\u0937\u093e\u0922\u093e",
    "ruler": "Sun",
    "span": "26\u00b040\u2032 Sagittarius \u2013 10\u00b000\u2032 Capricorn",
    "zodiacSign": "Sagittarius / Capricorn",
    "symbol": "Small Bed, Planks, or Elephant Tusk",
    "deity": "The Vishwadevas, Universal Cosmic Virtues and Principles",
    "gana": "Manushya",
    "guna": "Sattva / Rajas / Sattva",
    "element": "Dharma",
    "animal": "Male Mongoose",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/qnp7wlsy7np4j8shyvzkrxrs/public",
    "desc": "Righteous, structured, and victorious. Uttara Ashadha represents final permanent victory achieved through ethical virtue, unshakeable integrity, and patient duty.",
    "padas": [
      {
        "pada": 1,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Sagittarius",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Vargottama: supreme righteous principles, statesmanship, and law"
      },
      {
        "pada": 2,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Capricorn",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Vargottama: monumental institutional endurance and discipline"
      },
      {
        "pada": 3,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Capricorn",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Collective governance, public welfare, and visionary order"
      },
      {
        "pada": 4,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Capricorn",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Benevolent spiritual stewardship and humanitarian sacrifice"
      }
    ],
    "syllables": [
      "Bhe",
      "Bho",
      "Ja",
      "Jee"
    ],
    "traits": [
      "Permanent Victory",
      "Ethical Sovereignty",
      "Patient Duty",
      "Universal Brotherhood"
    ],
    "career": "Constitutional law, judicial service, high civil administration, monumental infrastructure, and ethical philosophy.",
    "marriage": "A pillar of strength; offers profound reliability, quiet devotion, and unconditional marital responsibility."
  },
  {
    "id": "shravana",
    "number": 22,
    "name": "Shravana",
    "sanskrit": "\u0936\u094d\u0930\u0935\u0923",
    "ruler": "Moon",
    "span": "10\u00b000\u2032 \u2013 23\u00b020\u2032 Capricorn",
    "zodiacSign": "Capricorn",
    "symbol": "An Ear or Three Sacred Footprints",
    "deity": "Lord Vishnu, the Preserver of the Cosmic Universe",
    "gana": "Deva",
    "guna": "Sattva / Tamas / Rajas",
    "element": "Artha",
    "animal": "Female Monkey",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/yg3wlxzlhk5c4cmi3l5np2yh/public",
    "desc": "Receptive, scholarly, and attuned to cosmic sound. Shravana embodies the sacred art of listening (*Shruti*), retaining divine wisdom and walking with patient steps.",
    "padas": [
      {
        "pada": 1,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Capricorn",
        "navamsa": "Aries (Mars)",
        "nature": "Energetic scholarship, quick perception, and active study"
      },
      {
        "pada": 2,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Capricorn",
        "navamsa": "Taurus (Venus)",
        "nature": "Diplomatic listening, artistic appreciation, and quiet charm"
      },
      {
        "pada": 3,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Capricorn",
        "navamsa": "Gemini (Mercury)",
        "nature": "Linguistic fluency, audio recording, media, and writing"
      },
      {
        "pada": 4,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Capricorn",
        "navamsa": "Cancer (Moon)",
        "nature": "Profound empathy, oral tradition, and protective care"
      }
    ],
    "syllables": [
      "Khi",
      "Khu",
      "Khe",
      "Kho"
    ],
    "traits": [
      "Sacred Listening",
      "Scholarly Memory",
      "Quiet Discernment",
      "Universal Preservation"
    ],
    "career": "Acoustic audio engineering, linguistics, oral storytelling, classical pedagogy, psychoanalysis, and musicology.",
    "marriage": "The most attentive listener in the zodiac. Fosters harmonious, respectful, and peaceful home atmospheres."
  },
  {
    "id": "dhanishta",
    "number": 23,
    "name": "Dhanishta",
    "sanskrit": "\u0927\u0928\u093f\u0937\u094d\u0920\u093e",
    "ruler": "Mars",
    "span": "23\u00b020\u2032 Capricorn \u2013 6\u00b040\u2032 Aquarius",
    "zodiacSign": "Capricorn / Aquarius",
    "symbol": "Musical Drum (Mridanga) or Flute",
    "deity": "The Ashta Vasus, Eight Solar Deities of Material Splendor",
    "gana": "Rakshasa",
    "guna": "Sattva / Tamas / Tamas",
    "element": "Dharma",
    "animal": "Female Lion",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/alnigcxg0xli6lurgc9tnro9/public",
    "desc": "Rhythmic, radiant, and wealthy. Dhanishta marches to cosmic timing, blessed with musical sensitivity, martial courage, and the capacity to manifest abundant prosperity.",
    "padas": [
      {
        "pada": 1,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Capricorn",
        "navamsa": "Leo (Sun)",
        "nature": "Commanding charisma, martial leadership, and rhythmic stamina"
      },
      {
        "pada": 2,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Capricorn",
        "navamsa": "Virgo (Mercury)",
        "nature": "Analytical precision, organizational coordination, and timing"
      },
      {
        "pada": 3,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Aquarius",
        "navamsa": "Libra (Venus)",
        "nature": "Musical composition, performing arts, and social generosity"
      },
      {
        "pada": 4,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Aquarius",
        "navamsa": "Scorpio (Mars)",
        "nature": "Strategic power, resilience, and esoteric timing"
      }
    ],
    "syllables": [
      "Ga",
      "Gee",
      "Gu",
      "Ge"
    ],
    "traits": [
      "Cosmic Rhythm",
      "Material Abundance",
      "Musical Genius",
      "Unflinching Courage"
    ],
    "career": "Music production, orchestral composition, real estate development, surgery, athletic management, and choreography.",
    "marriage": "High standards in partnership; needs self-sufficient, passionate companions who appreciate rhythm and space."
  },
  {
    "id": "shatabhisha",
    "number": 24,
    "name": "Shatabhisha",
    "sanskrit": "\u0936\u0924\u092d\u093f\u0937\u093e",
    "ruler": "Rahu",
    "span": "6\u00b040\u2032 \u2013 20\u00b000\u2032 Aquarius",
    "zodiacSign": "Aquarius",
    "symbol": "Empty Circle or 100 Healing Physicians",
    "deity": "Varuna, Lord of Cosmic Oceans and Celestial Law",
    "gana": "Rakshasa",
    "guna": "Sattva / Tamas / Sattva",
    "element": "Dharma",
    "animal": "Female Horse",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/y9gf7o6rtidkduetlyf9npjo/public",
    "desc": "Mysterious, visionary, and healing. Shatabhisha penetrates deep veil of cosmic illusions, carrying the cure for 100 ailments through solitary meditation and stellar truth.",
    "padas": [
      {
        "pada": 1,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Aquarius",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Philosophical optimism, esoteric studies, and broad vision"
      },
      {
        "pada": 2,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Aquarius",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Methodical research, scientific pharmacology, and discipline"
      },
      {
        "pada": 3,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Aquarius",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Vargottama: visionary science, quantum physics, and healing"
      },
      {
        "pada": 4,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Aquarius",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Spiritual dissolution, holistic healing, and universal compassion"
      }
    ],
    "syllables": [
      "Go",
      "Sa",
      "See",
      "Su"
    ],
    "traits": [
      "100 Healers",
      "Mystical Secrecy",
      "Scientific Vision",
      "Transcendent Independence"
    ],
    "career": "Pharmacology, nuclear physics, astronomical telemetry, holistic healing, radar technology, and meditation therapy.",
    "marriage": "Values solitude and deep emotional respect. Needs a partner who honors independence and contemplative quiet."
  },
  {
    "id": "purva-bhadrapada",
    "number": 25,
    "name": "Purva Bhadrapada",
    "sanskrit": "\u092a\u0942\u0930\u094d\u0935\u092d\u093e\u0926\u094d\u0930\u092a\u0926\u093e",
    "ruler": "Jupiter",
    "span": "20\u00b000\u2032 Aquarius \u2013 3\u00b020\u2032 Pisces",
    "zodiacSign": "Aquarius / Pisces",
    "symbol": "Front Half of a Funeral Bed or Two-Faced Man",
    "deity": "Aja Ekapada, the One-Footed Cosmic Fire Serpent",
    "gana": "Manushya",
    "guna": "Sattva / Sattva / Rajas",
    "element": "Artha",
    "animal": "Male Lion",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/ivypupisnbcts2cpx3q7dj9a/public",
    "desc": "Transformative, ascetic, and intense. Purva Bhadrapada burns away worldly attachments through spiritual fire (*Tapas*), bridging social revolution with transcendental liberation.",
    "padas": [
      {
        "pada": 1,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Aquarius",
        "navamsa": "Aries (Mars)",
        "nature": "Fierce revolutionary zeal, courage, and intense spiritual fire"
      },
      {
        "pada": 2,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Aquarius",
        "navamsa": "Taurus (Venus)",
        "nature": "Grounded discipline, artistic intensity, and steady focus"
      },
      {
        "pada": 3,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Aquarius",
        "navamsa": "Gemini (Mercury)",
        "nature": "Esoteric communication, radical philosophy, and debate"
      },
      {
        "pada": 4,
        "span": "0\u00b000\u2032 \u2013 3\u00b020\u2032 Pisces",
        "navamsa": "Cancer (Moon)",
        "nature": "Deep mystical empathy, oceanic compassion, and surrender"
      }
    ],
    "syllables": [
      "Se",
      "So",
      "Da",
      "Dee"
    ],
    "traits": [
      "Spiritual Fire",
      "Radical Reform",
      "Transformative Asceticism",
      "Occult Power"
    ],
    "career": "Radical sociology, psychiatric reform, metaphysical philosophy, advanced research, and spiritual leadership.",
    "marriage": "Intense and deeply committed once bonds are established. Requires absolute emotional honesty and philosophical alignment."
  },
  {
    "id": "uttara-bhadrapada",
    "number": 26,
    "name": "Uttara Bhadrapada",
    "sanskrit": "\u0909\u0924\u094d\u0924\u0930\u092d\u093e\u0926\u094d\u0930\u092a\u0926\u093e",
    "ruler": "Saturn",
    "span": "3\u00b020\u2032 \u2013 16\u00b040\u2032 Pisces",
    "zodiacSign": "Pisces",
    "symbol": "Back Legs of a Funeral Bed or Coiled Sea Serpent",
    "deity": "Ahir Budhnya, the Serpent of the Cosmic Ocean Depths",
    "gana": "Manushya",
    "guna": "Sattva / Sattva / Tamas",
    "element": "Kama",
    "animal": "Female Cow",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/u4shekpryp3x0pxmifybhzyy/public",
    "desc": "Serene, profound, and steady. Like the quiet ocean abyss, Uttara Bhadrapada controls inner kundalini currents, dispensing compassionate wisdom and spiritual endurance.",
    "padas": [
      {
        "pada": 1,
        "span": "3\u00b020\u2032 \u2013 6\u00b040\u2032 Pisces",
        "navamsa": "Leo (Sun)",
        "nature": "Regal spiritual leadership, noble detachment, and dignity"
      },
      {
        "pada": 2,
        "span": "6\u00b040\u2032 \u2013 10\u00b000\u2032 Pisces",
        "navamsa": "Virgo (Mercury)",
        "nature": "Methodical meditation, yogic research, and thoughtful service"
      },
      {
        "pada": 3,
        "span": "10\u00b000\u2032 \u2013 13\u00b020\u2032 Pisces",
        "navamsa": "Libra (Venus)",
        "nature": "Harmonious kindness, poetic mysticism, and graceful empathy"
      },
      {
        "pada": 4,
        "span": "13\u00b020\u2032 \u2013 16\u00b040\u2032 Pisces",
        "navamsa": "Scorpio (Mars)",
        "nature": "Deep esoteric contemplation, occult endurance, and quiet power"
      }
    ],
    "syllables": [
      "Du",
      "Tha",
      "Jna",
      "Da"
    ],
    "traits": [
      "Serene Depth",
      "Yogic Endurance",
      "Universal Compassion",
      "Beneficent Wisdom"
    ],
    "career": "Meditation guidance, marine sciences, psychiatric care, non-profit foundations, writing, and counseling.",
    "marriage": "Peaceful, deeply forgiving, and steadfast. Creates a sanctuary of calm emotional refuge for partner."
  },
  {
    "id": "revati",
    "number": 27,
    "name": "Revati",
    "sanskrit": "\u0930\u0947\u0935\u0924\u0940",
    "ruler": "Mercury",
    "span": "16\u00b040\u2032 \u2013 30\u00b000\u2032 Pisces",
    "zodiacSign": "Pisces",
    "symbol": "Pair of Swimming Fish or Drum",
    "deity": "Pushan, the Divine Shepherd and Guide of Souls",
    "gana": "Deva",
    "guna": "Sattva / Sattva / Sattva",
    "element": "Moksha",
    "animal": "Female Elephant",
    "image": "https://imagedelivery.net/AaBy37vT0kTPiPTAxl8ocQ/wypxweidem69j6x69x8zvouu/public",
    "desc": "Nourishing, sweet, and transcendent. As the final lunar mansion, Revati guides souls safely through transitions, blessing journeys, animal welfare, and spiritual liberation (*Moksha*).",
    "padas": [
      {
        "pada": 1,
        "span": "16\u00b040\u2032 \u2013 20\u00b000\u2032 Pisces",
        "navamsa": "Sagittarius (Jupiter)",
        "nature": "Philosophical journeying, optimism, and spiritual guidance"
      },
      {
        "pada": 2,
        "span": "20\u00b000\u2032 \u2013 23\u00b020\u2032 Pisces",
        "navamsa": "Capricorn (Saturn)",
        "nature": "Pragmatic benevolence, steady service, and duty to all creatures"
      },
      {
        "pada": 3,
        "span": "23\u00b020\u2032 \u2013 26\u00b040\u2032 Pisces",
        "navamsa": "Aquarius (Saturn)",
        "nature": "Humanitarian empathy, collective harmony, and open charity"
      },
      {
        "pada": 4,
        "span": "26\u00b040\u2032 \u2013 30\u00b000\u2032 Pisces",
        "navamsa": "Pisces (Jupiter)",
        "nature": "Vargottama & Gandanta: supreme unconditional love and final liberation"
      }
    ],
    "syllables": [
      "De",
      "Do",
      "Cha",
      "Chee"
    ],
    "traits": [
      "Soulful Empathy",
      "Divine Guide",
      "Compassionate Love",
      "Sweet Nourishment"
    ],
    "career": "Veterinary sciences, animal sanctuaries, travel planning, hospices, musical composition, and spiritual counseling.",
    "marriage": "Gentle, romantic, and unconditionally supportive; showers partner with kindness, intuition, and heartfelt devotion."
  }
];
