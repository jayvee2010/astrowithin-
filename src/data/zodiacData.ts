export interface ZodiacSignDetail {
  id: string;
  name: string;
  sanskrit: string;
  westernName: string;
  signNumber: number;
  dates: string;
  lord: string;
  element: string;
  quality: string;
  symbol: string;
  bodyPart: string;
  favorableGem: string;
  luckyColor: string;
  favorableNumbers: string;
  image: string;
  shortDesc: string;
  overview: string;
  personality: {
    core: string;
    strengths: string[];
    shadowTraits: string[];
  };
  loveAndMarriage: {
    overview: string;
    idealMatches: string[];
    challengingMatches: string[];
    relationshipStyle: string;
  };
  careerAndWealth: {
    vocations: string[];
    financialApproach: string;
    leadershipStyle: string;
  };
  nakshatrasInvolved: {
    name: string;
    pada: string;
    deity: string;
  }[];
  parashariRemedies: string[];
}

export const ZODIAC_SIGNS_DATA: ZodiacSignDetail[] = [
  {
    id: 'aries',
    name: 'Mesha (Aries)',
    sanskrit: 'मेष',
    westernName: 'Aries',
    signNumber: 1,
    dates: 'Apr 14 – May 14 (Sidereal)',
    lord: 'Mars (Mangal)',
    element: 'Fire',
    quality: 'Chara (Movable / Cardinal)',
    symbol: 'The Ram (Meda)',
    bodyPart: 'Head, Brain, Forehead',
    favorableGem: 'Red Coral (Moonga)',
    luckyColor: 'Scarlet, Crimson, Flame Red',
    favorableNumbers: '9, 1, 18',
    image: '/zodiac/cropped/aries.png',
    shortDesc: 'Initiative, physical vigor, forthright determination, and spontaneous dharmic leadership.',
    overview:
      'Mesha marks the primal cosmic spark in Parashari Jyotish. As the natural 1st house of the Kalapurusha (cosmic being), Aries represents birth, vitality, unyielding courage, and the initial impulse of manifestation. Ruled by fiery Mars (Mangal), natives embody warrior resolve, direct communication, and a pioneering spirit that thrives when breaking unchartered terrain.',
    personality: {
      core:
        'Mesha individuals possess radiant physical vigor and an innate desire to initiate. They live in the present moment, driven by quick instincts rather than prolonged deliberation. Their honesty is absolute; they despise duplicity and speak with disarming candor.',
      strengths: [
        'Fearless initiative and natural crisis leadership',
        'Transparent, chivalrous, and fiercely loyal demeanor',
        'Unyielding resilience in the face of sudden adversity',
        'Boundless energy and passion for dharmic goals',
      ],
      shadowTraits: [
        'Impatience and quick temper when things move slowly',
        'Tendency to start ventures enthusiastically without finishing',
        'Reluctance to heed caution or diplomatic nuance',
      ],
    },
    loveAndMarriage: {
      overview:
        'In love, Aries seeks intense passion, transparent devotion, and mutual respect. In Vedic synastry, the 7th house from Aries is Libra (ruled by Venus), creating a magnetic dance between Martian fire and Venusian harmony. They thrive with partners who can match their directness while offering aesthetic serenity and grounding patience.',
      idealMatches: ['Leo (Simha)', 'Sagittarius (Dhanu)', 'Gemini (Mithuna)', 'Libra (Tula)'],
      challengingMatches: ['Cancer (Karka)', 'Capricorn (Makara)'],
      relationshipStyle:
        'Direct, fiercely protective, romantic, and uninhibited. They express affection through bold gestures and constant loyalty.',
    },
    careerAndWealth: {
      vocations: ['Surgery & Medicine', 'Military & Defense', 'Entrepreneurship', 'Civil Engineering', 'Sports & Physical Athletics'],
      financialApproach:
        'Aries earns with swift courage and risk tolerance. While they attract sudden wealth through innovative ventures, their expenditure is equally spontaneous, requiring structured discipline.',
      leadershipStyle: 'Frontline, decisive, motivating by personal example rather than bureaucratic delegation.',
    },
    nakshatrasInvolved: [
      { name: 'Ashwini', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Ashvini Kumaras (Divine Healers)' },
      { name: 'Bharani', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Yama (God of Dharmic Order)' },
      { name: 'Krittika', pada: 'Pada 1 (0° to 3°20\')', deity: 'Agni (Cosmic Fire)' },
    ],
    parashariRemedies: [
      'Chant the Mangal Gayatri or Om Kram Kreem Kroum Sah Bhaumaya Namah on Tuesdays',
      'Wear a Jyotish-quality untreated Italian Red Coral set in copper or gold after chart consultation',
      'Practice charitable donations of jaggery, red lentils (masoor dal), or copper vessels to temples',
    ],
  },
  {
    id: 'taurus',
    name: 'Vrishabha (Taurus)',
    sanskrit: 'वृषभ',
    westernName: 'Taurus',
    signNumber: 2,
    dates: 'May 15 – Jun 14 (Sidereal)',
    lord: 'Venus (Shukra)',
    element: 'Earth',
    quality: 'Sthira (Fixed)',
    symbol: 'The Bull (Vrisha)',
    bodyPart: 'Face, Neck, Throat, Vocal Cords',
    favorableGem: 'Diamond (Heera) / White Sapphire',
    luckyColor: 'Cream, Opal White, Pastel Rose',
    favorableNumbers: '6, 2, 15',
    image: '/zodiac/cropped/taurus.png',
    shortDesc: 'Enduring stability, aesthetic refinement, sensual luxury, and grounded financial prudence.',
    overview:
      'Vrishabha represents the grounded sanctuary of cosmic sustenance in Vedic astrology. Presiding over the 2nd house of the Kalapurusha (wealth, family, food, and speech), Taurus translates raw desire into enduring security. Ruled by benefic Venus (Shukra), natives cultivate physical beauty, melodious speech, loyalty, and deep appreciation for the classical arts and culinary pleasures.',
    personality: {
      core:
        'Taurus natives are the bedrock of the zodiac. Methodical, calm, and unshakable, they approach existence with patience and pragmatic wisdom. They cannot be rushed or coerced, yet possess an immense capacity for loyalty, physical endurance, and domestic harmony.',
      strengths: [
        'Exceptional patience and unwavering determination',
        'Refined artistic appreciation and culinary grace',
        'Unmatched reliability and protective family guardianship',
        'Mastery over financial accumulation and wealth retention',
      ],
      shadowTraits: [
        'Resistance to necessary change and stubborn stances',
        'Material possessiveness or attachment to routine',
        'Slow to initiate action when comfortable',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Vrishabha views union as a sacred, permanent sanctuary. Looking across to Scorpio (the 8th sign), Taurus craves emotional depth alongside physical touch, shared comfort, and lifelong loyalty. They build opulent, peaceful homes where family and partner are honored with lavish care.',
      idealMatches: ['Virgo (Kanya)', 'Capricorn (Makara)', 'Cancer (Karka)', 'Pisces (Meena)'],
      challengingMatches: ['Leo (Simha)', 'Aquarius (Kumbha)'],
      relationshipStyle:
        'Sensual, dependable, romantic, and deeply loyal. They show love through tangible provisions, fidelity, and peaceful companionship.',
    },
    careerAndWealth: {
      vocations: ['Banking & Wealth Management', 'Architecture & Real Estate', 'Classical Music & Fine Arts', 'Luxury Hospitality', 'Agriculture & Gemology'],
      financialApproach:
        'Conservative and accumulative. They favor tangible assets—gold, land, fine art, and fixed investments—over volatile speculation.',
      leadershipStyle: 'Steadfast, supportive, methodical, and prioritizing long-term organizational stability.',
    },
    nakshatrasInvolved: [
      { name: 'Krittika', pada: 'Padas 2, 3, 4 (3°20\' to 10°00\')', deity: 'Agni (Sacred Fire)' },
      { name: 'Rohini', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Brahma / Prajapati (Cosmic Creator)' },
      { name: 'Mrigashira', pada: 'Padas 1, 2 (0° to 6°40\')', deity: 'Soma (Nectar of Immortality)' },
    ],
    parashariRemedies: [
      'Chant the Shukra Beej Mantra: Om Dram Dreem Droum Sah Shukraya Namah on Fridays',
      'Offer fragrant white flowers, camphor, or cow milk at Mahalakshmi sanctuaries',
      'Respect the cow (Go Seva) and offer green grass or sweets to nourish Venusian blessings',
    ],
  },
  {
    id: 'gemini',
    name: 'Mithuna (Gemini)',
    sanskrit: 'मिथुन',
    westernName: 'Gemini',
    signNumber: 3,
    dates: 'Jun 15 – Jul 15 (Sidereal)',
    lord: 'Mercury (Budha)',
    element: 'Air',
    quality: 'Dvisvabhava (Dual / Mutable)',
    symbol: 'The Lovers / Twins with Flute & Mace',
    bodyPart: 'Shoulders, Arms, Hands, Respiratory System',
    favorableGem: 'Emerald (Panna)',
    luckyColor: 'Emerald Green, Mint, Golden Yellow',
    favorableNumbers: '5, 14, 23',
    image: '/zodiac/cropped/gemini.png',
    shortDesc: 'Intellectual agility, versatile commerce, witty eloquence, and curiosity for diverse wisdom.',
    overview:
      'Mithuna governs the 3rd house of the Kalapurusha—representing courage (Parakrama), manual dexterity, siblings, writing, and communication. Governed by quick-witted Mercury (Budha), Gemini represents the sacred interplay of duality: intellect and expression, spirit and matter. Gemini natives are perpetual students of the cosmos, weaving connections across languages, commerce, and philosophies.',
    personality: {
      core:
        'Bright, conversational, and adaptable, Mithuna lives in the realm of ideas. They have an insatiable curiosity, effortlessly mastering multiple subjects. Their humor is subtle, disarming, and spontaneous, making them magnetic companions.',
      strengths: [
        'Brilliant communication and linguistic eloquence',
        'Quick learning capacity and versatility across disciplines',
        'Diplomatic charm and social networking ease',
        'Inventive problem-solving and youthful optimism',
      ],
      shadowTraits: [
        'Scattered mental energy and overthinking',
        'Restlessness when confined to repetitive tasks',
        'Hesitation in making long-term emotional commitments',
      ],
    },
    loveAndMarriage: {
      overview:
        'For Gemini, love must start in the mind. They require mental stimulation, shared laughter, and intellectual sparring. Looking opposite to Sagittarius (ruled by Jupiter), Gemini is complemented by partners who offer philosophical depth and grounding ethical wisdom.',
      idealMatches: ['Libra (Tula)', 'Aquarius (Kumbha)', 'Aries (Mesha)', 'Leo (Simha)'],
      challengingMatches: ['Virgo (Kanya)', 'Pisces (Meena)'],
      relationshipStyle:
        'Playful, communicative, intellectually enriching, and valuing mental freedom alongside friendship.',
    },
    careerAndWealth: {
      vocations: ['Journalism & Publishing', 'Software & Data Architecture', 'Marketing & Public Relations', 'International Trade', 'Astrology & Analytical Research'],
      financialApproach:
        'Diversified income streams. They excel at commerce and speculative trading when guided by disciplined risk boundaries.',
      leadershipStyle: 'Collaborative, communicative, adaptive, and empowering through knowledge sharing.',
    },
    nakshatrasInvolved: [
      { name: 'Mrigashira', pada: 'Padas 3, 4 (6°40\' to 13°20\')', deity: 'Soma (Moon God)' },
      { name: 'Ardra', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Rudra (Storm Lord)' },
      { name: 'Punarvasu', pada: 'Padas 1, 2, 3 (0° to 10°00\')', deity: 'Aditi (Cosmic Mother)' },
    ],
    parashariRemedies: [
      'Chant the Budha Beej Mantra: Om Bram Breem Broum Sah Budhaya Namah on Wednesdays',
      'Wear an untreated Zambian or Colombian Emerald in silver or gold on the pinky finger',
      'Donate green moong dal, books, or writing instruments to students and educational charities',
    ],
  },
  {
    id: 'cancer',
    name: 'Karka (Cancer)',
    sanskrit: 'कर्क',
    westernName: 'Cancer',
    signNumber: 4,
    dates: 'Jul 16 – Aug 16 (Sidereal)',
    lord: 'Moon (Chandra)',
    element: 'Water',
    quality: 'Chara (Movable / Cardinal)',
    symbol: 'The Crab (Karkata)',
    bodyPart: 'Chest, Breasts, Heart, Stomach',
    favorableGem: 'Natural Pearl (Moti) / Moonstone',
    luckyColor: 'Silver, Pearl White, Milk Cream',
    favorableNumbers: '2, 7, 11',
    image: '/zodiac/cropped/cancer.png',
    shortDesc: 'Deep emotional empathy, maternal sanctuary, psychic intuition, and protective devotion.',
    overview:
      'Karka is the heart of the zodiac, governing the 4th house of the Kalapurusha—representing the mother, inner peace (Sukha), ancestral land, and emotional well-being. Ruled by the luminously receptive Moon (Chandra), Cancer natives operate as psychic sponges, absorbing and transmuting feelings. They are fierce protectors of their loved ones, providing an emotional harbor against worldly storms.',
    personality: {
      core:
        'Gentle yet possessing incredible emotional resilience, Cancerians possess an uncanny intuitive antenna. They remember every gesture of kindness and cherish family traditions. Like the crab, they present a protective shell to the world, harboring a vulnerable, deeply generous soul inside.',
      strengths: [
        'Profound intuitive and psychic perception',
        'Unconditional maternal care and nurturing generosity',
        'Exceptional emotional memory and preservation of heritage',
        'Fierce defensive courage when protecting loved ones',
      ],
      shadowTraits: [
        'Mood fluctuations aligned with lunar waxing and waning',
        'Clinging to past grievances or perceived slights',
        'Retreating into defensive silence when hurt',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Karka desires true emotional sanctuary and soul intimacy. The 7th house from Cancer is Capricorn (ruled by Saturn), which indicates that Cancer often pairs best with partners who provide grounding structure, quiet maturity, and unwavering marital stability.',
      idealMatches: ['Scorpio (Vrishchika)', 'Pisces (Meena)', 'Taurus (Vrishabha)', 'Capricorn (Makara)'],
      challengingMatches: ['Aries (Mesha)', 'Libra (Tula)'],
      relationshipStyle:
        'Devoted, deeply sentimental, protective, and creating a warm domestic sanctuary centered around shared emotional bonds.',
    },
    careerAndWealth: {
      vocations: ['Psychology & Counseling', 'Healthcare & Nursing', 'Real Estate & Interior Design', 'Culinary & Hospitality', 'Maritime Commerce'],
      financialApproach:
        'Instinctive and security-driven. They save diligently for family welfare and invest reliably in homes, land, and tangible assets.',
      leadershipStyle: 'Empathetic, paternal/maternal, building morale through emotional connection and team protection.',
    },
    nakshatrasInvolved: [
      { name: 'Punarvasu', pada: 'Pada 4 (10°00\' to 13°20\')', deity: 'Aditi (Cosmic Mother)' },
      { name: 'Pushya', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Brihaspati (Spiritual Guru)' },
      { name: 'Ashlesha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Nagas (Serpent Wisdom)' },
    ],
    parashariRemedies: [
      'Chant the Chandra Gayatri or Om Som Somaya Namah on Monday evenings',
      'Wear an unblemished South Sea Pearl set in silver on the little finger after proper consecration',
      'Offer drinking water to travelers and honor one’s mother with deep filial reverence',
    ],
  },
  {
    id: 'leo',
    name: 'Simha (Leo)',
    sanskrit: 'सिंह',
    westernName: 'Leo',
    signNumber: 5,
    dates: 'Aug 17 – Sep 16 (Sidereal)',
    lord: 'Sun (Surya)',
    element: 'Fire',
    quality: 'Sthira (Fixed)',
    symbol: 'The Lion (Simha)',
    bodyPart: 'Heart, Spine, Upper Back',
    favorableGem: 'Burmese Ruby (Manikya)',
    luckyColor: 'Solar Gold, Saffron, Royal Crimson',
    favorableNumbers: '1, 10, 19',
    image: '/zodiac/cropped/leo.png',
    shortDesc: 'Sovereign dignity, magnanimous leadership, creative radiance, and authoritative nobility.',
    overview:
      'Simha rules the 5th house of the Kalapurusha—governing Purva Punya (past-life merits), creative genius, intelligence, and royal authority. Owned exclusively by the sovereign Sun (Surya), Leo represents pure dharmic radiance. Natives possess an unmissable regal presence, natural authority, and a generous heart that lifts everyone in its gravitational orbit.',
    personality: {
      core:
        'Noble, honorable, and self-respecting, Simha natives cannot abide pettiness. They are natural kings and queens who lead through inspiration and generosity. They demand loyalty and reciprocate with unyielding protection and magnanimous patronage.',
      strengths: [
        'Magnanimous, warm-hearted, and protective presence',
        'Commanding natural leadership and stage presence',
        'Steadfast moral integrity and disdain for gossip',
        'Creative brilliance and passionate self-expression',
      ],
      shadowTraits: [
        'Vulnerability to flattery and bruised pride',
        'Inflexible authority when challenged without respect',
        'Difficulty asking for help due to royal self-reliance',
      ],
    },
    loveAndMarriage: {
      overview:
        'In love, Simha is passionate, devoted, and intensely proud of their partner. Looking across to Aquarius (the 11th sign ruled by Saturn and Rahu), Leo thrives when balanced by an intellectual, egalitarian companion who respects their dignity while keeping them anchored to collective ideals.',
      idealMatches: ['Aries (Mesha)', 'Sagittarius (Dhanu)', 'Gemini (Mithuna)', 'Libra (Tula)'],
      challengingMatches: ['Taurus (Vrishabha)', 'Scorpio (Vrishchika)'],
      relationshipStyle:
        'Romantic, generous, loyal, and grand. They take pride in their partner and celebrate love with chivalrous dedication.',
    },
    careerAndWealth: {
      vocations: ['Government Administration & Civil Service', 'Executive Leadership (CEO/Director)', 'Performing Arts & Theater', 'Diplomacy & International Law', 'Jewelry & High Luxury'],
      financialApproach:
        'Generous and grand. They generate wealth through commanding positions and spend confidently on status, family honor, and philanthropic patronages.',
      leadershipStyle: 'Charismatic, visionary, authoritative, and fiercely championing team members.',
    },
    nakshatrasInvolved: [
      { name: 'Magha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Pitris (Royal Ancestors)' },
      { name: 'Purva Phalguni', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Bhaga (God of Prosperity)' },
      { name: 'Uttara Phalguni', pada: 'Pada 1 (0° to 3°20\')', deity: 'Aryaman (God of Sacred Contracts)' },
    ],
    parashariRemedies: [
      'Offer Arghya (sacred water with red sandalwood and flowers) to Surya Dev at sunrise with the Gayatri Mantra',
      'Wear a natural, unheated Ruby set in gold on the ring finger on a Sunday morning',
      'Recite the Aditya Hridaya Stotra daily to maintain vital solar energy and health',
    ],
  },
  {
    id: 'virgo',
    name: 'Kanya (Virgo)',
    sanskrit: 'कन्या',
    westernName: 'Virgo',
    signNumber: 6,
    dates: 'Sep 17 – Oct 17 (Sidereal)',
    lord: 'Mercury (Budha - also exalted here)',
    element: 'Earth',
    quality: 'Dvisvabhava (Dual / Mutable)',
    symbol: 'The Maiden with Grain and Flame in a Boat',
    bodyPart: 'Abdomen, Digestive System, Intestines',
    favorableGem: 'Emerald (Panna) / Green Tourmaline',
    luckyColor: 'Olive Green, Earth Brown, Pale Khaki',
    favorableNumbers: '5, 14, 23',
    image: '/zodiac/cropped/virgo.png',
    shortDesc: 'Analytical discernment, healing service, meticulous craftsmanship, and practical discrimination.',
    overview:
      'Kanya occupies the 6th house of the Kalapurusha—governing daily discipline, healing, overcoming obstacles (Ripu), and service (Seva). Mercury finds its deep exaltation in Virgo, indicating the highest octave of practical intellect, data analysis, and purification. Kanya natives are the master editors of reality, sorting grain from chaff with discerning grace.',
    personality: {
      core:
        'Meticulous, observant, and quiet, Kanya natives see every nuance others miss. They are driven by a holy duty of perfection and usefulness. Modest and dedicated, their love is expressed through tireless acts of practical care and thoughtful assistance.',
      strengths: [
        'Superb analytical clarity and diagnostic discernment',
        'Exceptional attention to precision and craftsmanship',
        'Selfless dedication to healing, medicine, and service',
        'Humility, punctuality, and financial common sense',
      ],
      shadowTraits: [
        'Over-critical tendencies toward self and others',
        'Anxiety arising from perceived imperfections',
        'Over-analyzing emotions rather than feeling them',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Kanya looks across to Pisces (ruled by Jupiter). While Virgo provides earthly order, hygiene, and daily logistics, they seek a partner with spiritual compassion, poetic surrender, and broad-minded warmth to soften their analytical defenses.',
      idealMatches: ['Taurus (Vrishabha)', 'Capricorn (Makara)', 'Cancer (Karka)', 'Scorpio (Vrishchika)'],
      challengingMatches: ['Gemini (Mithuna)', 'Sagittarius (Dhanu)'],
      relationshipStyle:
        'Quietly devoted, helpful, observant, and demonstrating affection through supportive daily actions and thoughtful loyalty.',
    },
    careerAndWealth: {
      vocations: ['Medicine, Surgery & Pharmacy', 'Data Science & Algorithmic Engineering', 'Auditing, Accounting & Compliance', 'Nutritional Sciences', 'Editing & Classical Scholarship'],
      financialApproach:
        'Cautious and systematic. They budget precisely, eliminate wasteful leaks, and build steady wealth through compounding analysis.',
      leadershipStyle: 'Detail-focused, meritocratic, operational, and setting exemplary standards of precision.',
    },
    nakshatrasInvolved: [
      { name: 'Uttara Phalguni', pada: 'Padas 2, 3, 4 (3°20\' to 10°00\')', deity: 'Aryaman (Guardian of Patronage)' },
      { name: 'Hasta', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Savitr (Solar Awakening)' },
      { name: 'Chitra', pada: 'Padas 1, 2 (0° to 6°40\')', deity: 'Tvashtar / Vishwakarma (Divine Craftsman)' },
    ],
    parashariRemedies: [
      'Chant the Vishnu Sahasranama on Wednesdays to channel analytical energy into divine grace',
      'Feed green fodder, vegetables, or soaked moong to birds and cows',
      'Wear an energized natural Emerald on the little finger to enhance diagnostic acumen',
    ],
  },
  {
    id: 'libra',
    name: 'Tula (Libra)',
    sanskrit: 'तुला',
    westernName: 'Libra',
    signNumber: 7,
    dates: 'Oct 18 – Nov 16 (Sidereal)',
    lord: 'Venus (Shukra)',
    element: 'Air',
    quality: 'Chara (Movable / Cardinal)',
    symbol: 'The Scales of Justice (Tula)',
    bodyPart: 'Lower Back, Kidneys, Pelvis',
    favorableGem: 'Diamond (Heera) / White Zircon',
    luckyColor: 'Pastel Blue, Ivory, Rose Pink',
    favorableNumbers: '6, 15, 24',
    image: '/zodiac/cropped/libra.png',
    shortDesc: 'Relational balance, social diplomacy, artistic harmony, and righteous judicial equilibrium.',
    overview:
      'Tula rules the pivotal 7th house of the Kalapurusha—governing marriage, contracts, diplomacy, and worldly trade. Saturn reaches its highest exaltation in Libra, proving that true balance requires enduring justice and moral discipline. Ruled by Venus, Tula natives are the architects of social harmony, cultural elegance, and equitable partnership.',
    personality: {
      core:
        'Graceful, charming, and fair-minded, Tula natives instinctively weigh both sides of every situation. They detest discord and bring aesthetic grace into every atmosphere. Naturally sociable, their life purpose revolves around finding equilibrium between self and other.',
      strengths: [
        'Unrivaled diplomatic finesse and conflict resolution',
        'Refined aesthetic sensibility and harmonious taste',
        'Impartial commitment to fairness and judicial truth',
        'Magnetic charm and gracious social presence',
      ],
      shadowTraits: [
        'Indecisiveness when seeking absolute equilibrium',
        'Suppression of personal needs to maintain outer peace',
        'Dislike of confrontational yet necessary boundary-setting',
      ],
    },
    loveAndMarriage: {
      overview:
        'For Tula, partnership is sacred. The 7th sign is born for holy union. Looking across to Aries (the 1st sign ruled by Mars), Libra seeks a confident, decisive partner whose passionate courage complements Libra’s diplomatic moderation.',
      idealMatches: ['Gemini (Mithuna)', 'Aquarius (Kumbha)', 'Leo (Simha)', 'Sagittarius (Dhanu)'],
      challengingMatches: ['Cancer (Karka)', 'Capricorn (Makara)'],
      relationshipStyle:
        'Romantic, egalitarian, refined, and deeply invested in mutual respect, shared beauty, and lifetime companionship.',
    },
    careerAndWealth: {
      vocations: ['Judiciary & International Law', 'Diplomatic Corps & Foreign Relations', 'Interior Architecture & High Fashion', 'Luxury Retail & Fine Arts', 'Public Relations & Strategic Partnerships'],
      financialApproach:
        'Balanced and trade-oriented. They earn effectively through partnerships and joint ventures, spending discerningly on quality and beauty.',
      leadershipStyle: 'Diplomatic, consensus-building, equitable, and fostering harmonious team cultures.',
    },
    nakshatrasInvolved: [
      { name: 'Chitra', pada: 'Padas 3, 4 (6°40\' to 13°20\')', deity: 'Vishwakarma (Divine Architect)' },
      { name: 'Swati', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Vayu (Wind Deity)' },
      { name: 'Vishakha', pada: 'Padas 1, 2, 3 (0° to 10°00\')', deity: 'Indragni (Triumphal Fire)' },
    ],
    parashariRemedies: [
      'Worship Goddess Mahalakshmi on Friday with white lotus flowers and pure ghee lamps',
      'Wear natural white diamond or white sapphire in platinum or silver on the middle or little finger',
      'Engage in peaceful conflict resolution and donate white garments, rice, or sugar to the needy',
    ],
  },
  {
    id: 'scorpio',
    name: 'Vrishchika (Scorpio)',
    sanskrit: 'वृश्चिक',
    westernName: 'Scorpio',
    signNumber: 8,
    dates: 'Nov 17 – Dec 15 (Sidereal)',
    lord: 'Mars (Mangal) & Ketu',
    element: 'Water',
    quality: 'Sthira (Fixed)',
    symbol: 'The Scorpion (Vrishchika)',
    bodyPart: 'Reproductive System, Pelvic Cavity',
    favorableGem: 'Red Coral (Moonga) / Cat’s Eye (Lehsunia)',
    luckyColor: 'Deep Maroon, Dark Rust, Obsidian Black',
    favorableNumbers: '9, 18, 27',
    image: '/zodiac/cropped/scorpio.png',
    shortDesc: 'Occult intensity, psychological transformation, profound loyalty, and unyielding emotional depth.',
    overview:
      'Vrishchika rules the mystical 8th house of the Kalapurusha—governing longevity (Ayur), transformation, occult knowledge (Gupta Vidya), and shared assets. Co-ruled by Mars (action) and Ketu (spiritual liberation), Scorpio possesses penetrating insight into the unseen mysteries of existence. Natives undergo profound metamorphosis throughout life, emerging like the phoenix with spiritual gold.',
    personality: {
      core:
        'Magnetic, intense, and perceptive, Vrishchika looks past superficial pleasantries straight into the core of human motivation. They are fiercely private and rarely reveal their cards, yet possess loyalty so deep it defies circumstance.',
      strengths: [
        'Penetrating psychological insight and truth-sensing',
        'Unsurpassed emotional resilience and transformative power',
        'Absolute loyalty and protective devotion to loved ones',
        'Fearless ability to navigate crises, trauma, and shadow work',
      ],
      shadowTraits: [
        'Intense secretiveness and suspicious wariness',
        'Reluctance to forgive betrayals or let go of resentments',
        'Tendency toward emotional all-or-nothing extremes',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Scorpio seeks soul merger. Surface-level dating bores them; they desire total trust and spiritual depth. Opposite sign Taurus (ruled by Venus) provides Scorpio with calm, unmovable emotional security and sensory grounding.',
      idealMatches: ['Cancer (Karka)', 'Pisces (Meena)', 'Capricorn (Makara)', 'Virgo (Kanya)'],
      challengingMatches: ['Leo (Simha)', 'Aquarius (Kumbha)'],
      relationshipStyle:
        'Intense, completely loyal, protective, and demanding total transparency, emotional honesty, and lifetime fidelity.',
    },
    careerAndWealth: {
      vocations: ['Surgery & Critical Care Medicine', 'Investigative Research & Intelligence', 'Occult Science & Jyotish Consultation', 'Mining, Geology & Petroleum', 'Risk Management & Forensic Accounting'],
      financialApproach:
        'Strategic and secretive. They excel at managing other people’s money, inheritances, and deep capital turnaround investments.',
      leadershipStyle: 'Perceptive, commanding behind the scenes, fiercely protective, and thriving in high-stakes crises.',
    },
    nakshatrasInvolved: [
      { name: 'Vishakha', pada: 'Pada 4 (10°00\' to 13°20\')', deity: 'Indragni (Courage & Focus)' },
      { name: 'Anuradha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Mitra (God of Divine Friendship)' },
      { name: 'Jyeshtha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Indra (King of the Gods)' },
    ],
    parashariRemedies: [
      'Chant the Hanuman Chalisa or Kartikeya Stotra daily for strength and emotional purification',
      'Wear a Jyotish-quality Red Coral or Cat’s Eye after consulting for 8th house Mars/Ketu dignity',
      'Practice Pranayama and Kundalini meditation to channel raw emotional intensity into spiritual awakening',
    ],
  },
  {
    id: 'sagittarius',
    name: 'Dhanu (Sagittarius)',
    sanskrit: 'धनु',
    westernName: 'Sagittarius',
    signNumber: 9,
    dates: 'Dec 16 – Jan 14 (Sidereal)',
    lord: 'Jupiter (Brihaspati / Guru)',
    element: 'Fire',
    quality: 'Dvisvabhava (Dual / Mutable)',
    symbol: 'The Centaur Archer (Dhanvi)',
    bodyPart: 'Hips, Thighs, Sacral Nerve',
    favorableGem: 'Yellow Sapphire (Pukhraj)',
    luckyColor: 'Solar Yellow, Saffron Ochre, Warm Amber',
    favorableNumbers: '3, 12, 21',
    image: '/zodiac/cropped/sagittarius.png',
    shortDesc: 'Higher philosophy, dharmic law, noble optimism, spiritual quests, and expansive truth-seeking.',
    overview:
      'Dhanu represents the 9th house of the Kalapurusha—governing Dharma, the Guru, higher philosophy, pilgrimages, and good fortune (Bhagya). Owned by the great benefic Jupiter (Brihaspati), Sagittarius is the archer aiming its arrow at the cosmic zenith. Natives are optimistic philosophers, seekers of truth, and champions of righteousness who view life as a sacred adventure.',
    personality: {
      core:
        'Generous, jovial, and ethically upright, Dhanu natives inspire others through their expansive worldview. They cannot tolerate ideological confinement or pettiness. They are natural teachers, scholars, and wanderers whose optimism is infectious.',
      strengths: [
        'Profound philosophical wisdom and ethical clarity',
        'Contagious optimism and generosity of spirit',
        'Love for higher education, foreign cultures, and truth',
        'Incorruptible honesty and moral courage',
      ],
      shadowTraits: [
        'Blunt speech that can hurt sensitive companions',
        'Over-promising due to excessive optimism',
        'Impatience with daily administrative minutiae',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Dhanu needs a partner who is also an intellectual explorer and spiritual companion. Looking across to Gemini (the 3rd sign ruled by Mercury), Sagittarius thrives when paired with quick-witted, versatile companions who enjoy travel, philosophical dialogue, and freedom.',
      idealMatches: ['Aries (Mesha)', 'Leo (Simha)', 'Libra (Tula)', 'Aquarius (Kumbha)'],
      challengingMatches: ['Virgo (Kanya)', 'Pisces (Meena)'],
      relationshipStyle:
        'Inspiring, honest, jovial, and treating marriage as a shared dharmic pilgrimage of spiritual and worldly growth.',
    },
    careerAndWealth: {
      vocations: ['Higher Education & University Professorship', 'Vedic Scholarship & Philosophy', 'Judicial Bench & Law', 'International Publishing', 'Philanthropic Foundations & Advisory'],
      financialApproach:
        'Expansive and optimistic. Wealth comes through moral enterprises, educational ventures, and Jupiterian blessings.',
      leadershipStyle: 'Visionary, philosophical, encouraging growth, and inspiring ethical greatness.',
    },
    nakshatrasInvolved: [
      { name: 'Mula', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Nirriti (Root Goddess of Truth)' },
      { name: 'Purva Ashadha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Apas (Cosmic Waters)' },
      { name: 'Uttara Ashadha', pada: 'Pada 1 (0° to 3°20\')', deity: 'Vishwadevas (Universal Cosmic Gods)' },
    ],
    parashariRemedies: [
      'Chant the Guru Mantra: Om Gram Greem Groum Sah Gurave Namah on Thursdays',
      'Wear an untreated Ceylon Yellow Sapphire in gold on the index finger on a Thursday morning',
      'Support Vedic priests, spiritual teachers, and educational scholarships for underprivileged scholars',
    ],
  },
  {
    id: 'capricorn',
    name: 'Makara (Capricorn)',
    sanskrit: 'मकर',
    westernName: 'Capricorn',
    signNumber: 10,
    dates: 'Jan 15 – Feb 13 (Sidereal)',
    lord: 'Saturn (Shani)',
    element: 'Earth',
    quality: 'Chara (Movable / Cardinal)',
    symbol: 'The Sea-Monster / Crocodile-Goat (Makara)',
    bodyPart: 'Knees, Joints, Skeletal Bones',
    favorableGem: 'Blue Sapphire (Neelam) / Amethyst',
    luckyColor: 'Charcoal, Navy Blue, Steel Grey',
    favorableNumbers: '8, 17, 26',
    image: '/zodiac/cropped/capricorn.png',
    shortDesc: 'Persevering endurance, societal structures, karmic discipline, and monumental legacy.',
    overview:
      'Makara presides over the pivotal 10th house of the Kalapurusha—governing Karma, professional vocation, status, public authority, and societal responsibility. Mars reaches its highest exaltation in Capricorn, proving that raw energy finds its maximum potency when channeled into disciplined structure. Owned by Saturn (Shani), natives are the patient master builders of enduring civilizations.',
    personality: {
      core:
        'Grounded, ambitious, and emotionally self-contained, Makara climbs the mountain of life through disciplined effort. They understand that true success is forged through time, sacrifice, and duty. Their dry humor, quiet dignity, and dependability make them pillars in any institution.',
      strengths: [
        'Unmatched patience, work ethic, and perseverance',
        'Strategic vision and organizational mastery',
        'Steadfast sense of familial and societal duty',
        'Capacity to triumph over immense prolonged hardships',
      ],
      shadowTraits: [
        'Tendency toward emotional austerity and pessimism',
        'Fear of vulnerability or appearing weak',
        'Over-focus on status, legacy, and material security',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Makara takes commitments with solemn gravity. The 7th house from Capricorn is Cancer (ruled by the Moon), indicating that behind the stern, disciplined exterior lies a heart that craves gentle emotional nurturing, maternal warmth, and peaceful domestic loyalty.',
      idealMatches: ['Taurus (Vrishabha)', 'Virgo (Kanya)', 'Scorpio (Vrishchika)', 'Pisces (Meena)'],
      challengingMatches: ['Aries (Mesha)', 'Libra (Tula)'],
      relationshipStyle:
        'Steadfast, protective, practical, and demonstrating love through lifetime reliability, material provision, and unwavering loyalty.',
    },
    careerAndWealth: {
      vocations: ['Corporate Administration & Governance', 'Heavy Industry & Civil Engineering', 'Judicial Architecture & Politics', 'Real Estate & Infrastructure', 'Mining & Geology'],
      financialApproach:
        'Prudent, conservative, and compounding over time. They accumulate substantial wealth through hard work and disciplined reinvestment.',
      leadershipStyle: 'Commanding, operational, setting rigorous standards, and leading through exemplary discipline.',
    },
    nakshatrasInvolved: [
      { name: 'Uttara Ashadha', pada: 'Padas 2, 3, 4 (3°20\' to 10°00\')', deity: 'Vishwadevas (Universal Principles)' },
      { name: 'Shravana', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Vishnu (Preserver of the Universe)' },
      { name: 'Dhanishta', pada: 'Padas 1, 2 (0° to 6°40\')', deity: 'Ashta Vasus (Eight Gods of Elements)' },
    ],
    parashariRemedies: [
      'Chant the Shani Gayatri or Om Sham Shanaicharaya Namah on Saturdays after sunset',
      'Light a sesame oil lamp beneath a sacred Peepal tree on Saturday evenings',
      'Serve the elderly, laborers, and physically challenged individuals with humility and respect',
    ],
  },
  {
    id: 'aquarius',
    name: 'Kumbha (Aquarius)',
    sanskrit: 'कुम्भ',
    westernName: 'Aquarius',
    signNumber: 11,
    dates: 'Feb 14 – Mar 14 (Sidereal)',
    lord: 'Saturn (Shani) & Rahu',
    element: 'Air',
    quality: 'Sthira (Fixed)',
    symbol: 'The Water Bearer pouring Nectar from a Pot',
    bodyPart: 'Calves, Shins, Ankles, Circulation',
    favorableGem: 'Blue Sapphire (Neelam) / Hessonite (Gomed)',
    luckyColor: 'Electric Blue, Deep Indigo, Smoky Violet',
    favorableNumbers: '8, 4, 17',
    image: '/zodiac/cropped/aquarius.png',
    shortDesc: 'Universal consciousness, philanthropic reform, progressive networks, and visionary humanitarianism.',
    overview:
      'Kumbha governs the 11th house of the Kalapurusha—representing Labha (highest gains), fulfillment of life desires, social networks, and humanity’s collective future. Co-ruled by Saturn (duty) and Rahu (unconventional breakthroughs), the Water Bearer pours out the cosmic nectar of truth for the elevation of all beings. Natives are visionary reformers, independent thinkers, and egalitarian architects.',
    personality: {
      core:
        'Intellectually profound and free of social prejudice, Kumbha natives see humanity as one interconnected family. They are drawn to futuristic ideals, technology, and social reforms. While deeply compassionate toward collective causes, they maintain a detached, dignified personal aura.',
      strengths: [
        'Visionary perspective and unconventional problem-solving',
        'Commitment to humanitarian equality and social justice',
        'Immunity to peer pressure and dogmatic convention',
        'Inventive genius and capacity for scientific synthesis',
      ],
      shadowTraits: [
        'Emotional detachment or appearing aloof in intimate moments',
        'Stubborn allegiance to abstract theories over immediate feelings',
        'Difficulty expressing vulnerable, subjective emotions',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Kumbha seeks an intellectual equal and true soul friend. Looking opposite to Leo (ruled by the Sun), Aquarius thrives when paired with a warm, confident, expressive companion whose personal heart-centered fire balances Aquarius’s universal detachment.',
      idealMatches: ['Gemini (Mithuna)', 'Libra (Tula)', 'Aries (Mesha)', 'Sagittarius (Dhanu)'],
      challengingMatches: ['Taurus (Vrishabha)', 'Scorpio (Vrishchika)'],
      relationshipStyle:
        'Egalitarian, mentally stimulating, supportive of partner autonomy, and rooted in deep shared values and mutual respect.',
    },
    careerAndWealth: {
      vocations: ['Scientific Research & Aerospace', 'Software Innovation & AI Architecture', 'Humanitarian NGOs & Global Policy', 'Astrological Consulting & Research', 'Renewable Energy & Ecology'],
      financialApproach:
        'Innovative and collaborative. They build wealth through large networks, technology ventures, and forward-looking assets.',
      leadershipStyle: 'Egalitarian, visionary, empowering individual autonomy within collective missions.',
    },
    nakshatrasInvolved: [
      { name: 'Dhanishta', pada: 'Padas 3, 4 (6°40\' to 13°20\')', deity: 'Ashta Vasus (Solar Gods of Abundance)' },
      { name: 'Shatabhisha', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Varuna (Lord of Cosmic Law & Waters)' },
      { name: 'Purva Bhadrapada', pada: 'Padas 1, 2, 3 (0° to 10°00\')', deity: 'Aja Ekapada (Cosmic Fire Dragon)' },
    ],
    parashariRemedies: [
      'Chant the Rahu-Shani pacification mantras or Maha Mrityunjaya Mantra on Saturdays',
      'Support social orphanages, disabled care centers, or innovative environmental initiatives',
      'Wear an untreated blue sapphire or hessonite only after strict natal chart evaluation',
    ],
  },
  {
    id: 'pisces',
    name: 'Meena (Pisces)',
    sanskrit: 'मीन',
    westernName: 'Pisces',
    signNumber: 12,
    dates: 'Mar 15 – Apr 13 (Sidereal)',
    lord: 'Jupiter (Brihaspati)',
    element: 'Water',
    quality: 'Dvisvabhava (Dual / Mutable)',
    symbol: 'Two Fish swimming in opposite directions',
    bodyPart: 'Feet, Soles, Lymphatic System',
    favorableGem: 'Yellow Sapphire (Pukhraj) / Yellow Topaz',
    luckyColor: 'Sea Green, Saffron Gold, Aqua Marine',
    favorableNumbers: '3, 7, 12',
    image: '/zodiac/cropped/pisces.png',
    shortDesc: 'Moksha, mystical intuition, spiritual surrender, poetic imagination, and boundless compassion.',
    overview:
      'Meena is the final culminative sign of the zodiac, governing the 12th house of the Kalapurusha—representing Moksha (spiritual liberation), cosmic consciousness, foreign lands, and transcendental dreams. Venus reaches its supreme exaltation in Pisces, revealing that unconditional, selfless love is the ultimate doorway to the divine. Ruled by Jupiter, Pisces bridges the earthly shore with the infinite ocean of spirit.',
    personality: {
      core:
        'Poetic, spiritually attuned, and compassionate, Meena natives feel the heartbeat of the cosmos. Their boundaries are permeable; they experience the suffering and joys of others as their own. They possess an artistic, mystical intuition that transcends rational logic.',
      strengths: [
        'Boundless compassion, empathy, and spiritual depth',
        'Profound artistic, musical, and poetic imagination',
        'Natural intuition and connection to the divine unseen',
        'Selfless generosity and willingness to forgive',
      ],
      shadowTraits: [
        'Vulnerability to emotional exhaustion and boundary diffusion',
        'Tendency toward escapism when world reality feels harsh',
        'Reluctance to enforce practical, cold boundaries',
      ],
    },
    loveAndMarriage: {
      overview:
        'In marriage, Meena seeks divine union. The 7th house from Pisces is Virgo (ruled by Mercury), indicating that Pisces is best stabilized by a grounded, practical, and detail-oriented partner who manages physical reality while honoring Pisces’s sacred spiritual dreams.',
      idealMatches: ['Cancer (Karka)', 'Scorpio (Vrishchika)', 'Taurus (Vrishabha)', 'Capricorn (Makara)'],
      challengingMatches: ['Gemini (Mithuna)', 'Sagittarius (Dhanu)'],
      relationshipStyle:
        'Poetic, romantic, deeply spiritual, nurturing, and dedicated to soul connection beyond worldly concerns.',
    },
    careerAndWealth: {
      vocations: ['Spiritual Teaching & Yoga Philosophy', 'Poetry, Music & Cinematic Arts', 'Psychiatry & Oceanography', 'International Philanthropy', 'Hospitality & Healing Sanctuaries'],
      financialApproach:
        'Intuitive and generous. They view wealth as divine energy to be shared and do best with practical advisors managing earthly assets.',
      leadershipStyle: 'Compassionate, visionary, inspiring through empathy, and guided by spiritual intuition.',
    },
    nakshatrasInvolved: [
      { name: 'Purva Bhadrapada', pada: 'Pada 4 (10°00\' to 13°20\')', deity: 'Aja Ekapada (Fire Serpent)' },
      { name: 'Uttara Bhadrapada', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Ahirbudhnya (Serpent of the Depths)' },
      { name: 'Revati', pada: 'Padas 1, 2, 3, 4 (Full 13°20\')', deity: 'Pushan (Cosmic Shepherd & Nourisher)' },
    ],
    parashariRemedies: [
      'Chant the Brihaspati Mantra or Vishnu Sahasranama on Thursday mornings',
      'Donate yellow fruits, turmeric, or sacred books to spiritual seekers and monasteries',
      'Wear an energized Yellow Sapphire or Yellow Topaz set in gold on the index finger',
    ],
  },
];
