export interface ToolMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ClassicalTool {
  id: string;
  num: string;
  name: string;
  sanskrit: string;
  category: 'Love & Marriage' | 'Natal & Vargas' | 'Dashas & Timing' | 'Jaimini & Yogas';
  tag: string;
  route: string;
  action: string;
  degreeMark: string;
  classicalSource: string;
  summary: string;
  fullDescription: string;
  inputsRequired: string[];
  outputsProvided: string[];
  inspector: {
    title: string;
    statusBadge: string;
    headline: string;
    description: string;
    metrics: ToolMetric[];
    insightNotes: string[];
  };
  faqs: ToolFAQ[];
}

export const CLASSICAL_TOOLS: ClassicalTool[] = [
  {
    id: 'marriage',
    num: '01',
    name: 'Marriage Prediction',
    sanskrit: 'विवाह विचार',
    category: 'Love & Marriage',
    tag: '7th House Lord & Dasha Timing',
    route: '/tools/marriage-prediction',
    action: 'Calculate Marriage Timing →',
    degreeMark: '15° 30\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 20 (Stri Jataka) & Ch. 26',
    summary: 'Calculates matrimonial timing, spouse characteristics, and union longevity using 7th Bhava, Venus, Jupiter, and dual-transit activation.',
    fullDescription: 'In Parashari Jyotish, marriage is not an arbitrary romantic event, but the timed manifestation of the 7th Bhava (*Yuvati Bhava*) and Upapada Lagna. This engine evaluates natal planetary longitudes, the 7th lord position, natural karakas (Venus for men, Jupiter for women), and the simultaneous transit of Jupiter and Saturn over natal matrimonial points.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth (HH:MM)', 'Place of Birth (Latitude & Longitude)', 'Gender'],
    outputsProvided: ['Favorable Marriage Age Windows', '7th House Lord Dignity & Aspects', 'Upapada Lagna (UL) Sign & House', 'Dual Transit (Guru-Shani) Timelines', 'Spouse Disposition & Background'],
    inspector: {
      title: '7th House Lord & Dasha Timing Engine',
      statusBadge: 'Karmic Union Alignment',
      headline: 'Matrimonial Timing & Upapada Lagna Alignment',
      description: 'Calculates the exact temporal window for matrimonial commitment by examining the dual transit of Jupiter and Saturn over your natal 7th house and Upapada Lagna.',
      metrics: [
        { label: '7th Bhava Lord', value: 'Venus in 9th (Bhagya)', detail: 'Auspicious trine placement indicates lasting devotion and fortune' },
        { label: 'Vimshottari Dasha', value: 'Jupiter-Venus Phase', detail: 'Primary 120-year cycle highly favorable for sacred union' },
        { label: 'Transit Aspect', value: 'Jupiter 5th Trine Aspect', detail: 'Benefic protection over natal 7th house cusp' },
      ],
      insightNotes: [
        'Evaluates exact planetary longitudes to distinguish between temporary infatuations and lasting marriage.',
        'Cross-references the Upapada Lagna (UL) in the Navamsa to verify spouse physical and spiritual attributes.',
        'Identifies protective benefic counter-aspects that cancel temporal Kuja (Manglik) tensions.',
      ],
    },
    faqs: [
      {
        question: 'How does Vedic astrology calculate the exact year and window of marriage?',
        answer: 'Marriage timing is computed using the classical "Dual Transit Rule" codified by B.V. Raman and K.N. Rao: Saturn must aspect or transit the 7th house or 7th lord (activating karma), while Jupiter simultaneously blesses the same house or its lord by transit or aspect, coinciding with a favorable Mahadasha or Antardasha connected to the 7th, 2nd, or 11th houses.',
      },
      {
        question: 'What is the role of Upapada Lagna (UL) in marriage prediction?',
        answer: 'Upapada Lagna is the Arudha Pada of the 12th house (the house of marital bed and commitment). While the 7th house represents the legal marriage contract and relationship dynamics, Upapada Lagna describes the actual spouse, their family prestige, moral character, and whether the marriage will sustain through life challenges.',
      },
      {
        question: 'Can the tool identify delays or obstacles in getting married?',
        answer: 'Yes. The engine examines Saturn, Sun, or Rahu affliction on the 7th house or 7th lord, retrogradation of natural significators, and Papakartari Yoga (the 7th house hemmed between natural malefics), highlighting mitigating benefic aspects that provide natural relief.',
      },
    ],
  },
  {
    id: 'compatibility',
    num: '02',
    name: 'Kundli Matching',
    sanskrit: 'गुण मिलान',
    category: 'Love & Marriage',
    tag: '36-Point Ashtakoota Milan',
    route: '/tools/kundli-matching',
    action: 'Calculate Compatibility Milan →',
    degreeMark: '42° 18\'',
    classicalSource: 'Kalaprakasika & Muhurta Chintamani (Ashtakoota Vidhana)',
    summary: 'Evaluates the 8 foundational psychological and biological compatibility layers between prospective partners using sidereal Moon Nakshatra coordinates.',
    fullDescription: 'The classical 36-Guna Ashtakoota Milan is the quintessential Vedic synastry framework. Rather than superficial sun-sign traits, it examines the vibrational compatibility of the sidereal Moon across 8 specific dimensions (Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi) along with rigorous Manglik Dosha cancellation verification.',
    inputsRequired: ['Boy: Date, Time & City of Birth', 'Girl: Date, Time & City of Birth'],
    outputsProvided: ['Total 36 Guna Score', '8-Koota Detailed Point Breakdown', 'Nadi Dosha Check & Genetic Harmony', 'Bhakoot Longevity & Compassion Metric', 'Kuja (Manglik) Dosha & Cancellation Status'],
    inspector: {
      title: 'Ashtakoota 36-Point Milan Engine',
      statusBadge: 'Uttama (High Harmony)',
      headline: 'Comprehensive 8-Koota Synastry Analysis',
      description: 'Evaluates the 8 foundational psychological and physiological compatibility layers between partners using sidereal Moon nakshatra coordinates.',
      metrics: [
        { label: 'Nadi Koota', value: '8 / 8 Points', detail: 'Genetic & physiological harmony (Different Nadis)' },
        { label: 'Bhakoot Koota', value: '7 / 7 Points', detail: 'Mutual emotional compassion and financial longevity' },
        { label: 'Graha Maitri', value: '5 / 5 Points', detail: 'Deep planetary friendship and shared intellectual worldview' },
      ],
      insightNotes: [
        'Scores firmly in the highest tier (28+ points) for enduring marital success and mutual understanding.',
        'Kuja (Manglik) Dosha verified: Neutralized through Jupiter fifth mutual trine aspect.',
        'Yoni score confirms magnetic mutual attraction and physiological equilibrium.',
      ],
    },
    faqs: [
      {
        question: 'What is considered a passing score in 36 Guna Kundli Milan?',
        answer: 'Traditionally, a minimum of 18 points out of 36 is required for acceptance. Scores between 18–24 are rated Madhyama (Average), 25–32 are rated Uttama (Good), and 33–36 are rated Param Uttama (Excellent). However, high scores cannot compensate for an unmitigated Nadi Dosha or severe 7th house affliction.',
      },
      {
        question: 'What happens if Nadi Dosha or Bhakoot Dosha is present?',
        answer: 'Nadi carries 8 points (physiological and genetic compatibility) and Bhakoot carries 7 points (emotional and financial flow). Classical texts outline specific cancellations: if both partners have the same Moon sign with different Nakshatras, or the same Nakshatra with different Padas, or if their Moon lords are natural friends, the dosha is nullified.',
      },
      {
        question: 'Does this calculator evaluate Manglik Dosha (Kuja Dosha)?',
        answer: 'Yes. The calculator evaluates Mars placements in the 1st, 2nd, 4th, 7th, 8th, and 12th houses from both Lagna and Moon, applying all 18 classical exceptions and cancellations (such as Mars in Aries or Capricorn, or Jupiter aspecting Mars).',
      },
    ],
  },
  {
    id: 'birth-chart',
    num: '03',
    name: 'Birth Chart (Janam Kundli)',
    sanskrit: 'जन्म कुण्डली',
    category: 'Natal & Vargas',
    tag: '12-Bhava Natal Horoscope',
    route: '/tools/premium-kundli',
    action: 'Generate Natal Birth Chart →',
    degreeMark: '68° 45\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 3–14',
    summary: 'Casts the fundamental North Indian diamond Janam Kundli blueprint at the exact minute and geographical coordinates of birth using high-precision sidereal ephemerides.',
    fullDescription: 'Your Janam Kundli is the astronomical snapshot of the cosmos calibrated to the exact moment of your first breath. Using high-precision NASA JPL DE440 ephemerides and the Chitra Paksha (Lahiri) Ayanamsa, this engine calculates all 12 Bhavas, planetary longitudes, retrograde motions, combustion limits, and Shadbala potencies.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth (HH:MM:SS)', 'Place of Birth (Latitude, Longitude, Altitude, Timezone)'],
    outputsProvided: ['D1 Rashi Chart (North & South Indian formats)', 'Planetary Degrees & Nakshatra Padas', 'Lagna & Bhava Cusps', 'Combustion & Retrograde Indicators', 'Shadbala Potency Table', 'Vimshottari Dasha Balance'],
    inspector: {
      title: '12-Bhava Natal Horoscope Engine',
      statusBadge: 'Sidereal Lahiri Verified',
      headline: 'Exact Degree Natal Planetary Longitudes',
      description: 'Casts the fundamental North Indian diamond Janam Kundli blueprint at the exact minute and geographical coordinates of birth using high-precision ephemerides.',
      metrics: [
        { label: 'Ayanamsa Method', value: 'Sidereal Lahiri', detail: 'Chitra Paksha Ayanamsa calibrated to 24° 11\' 42"' },
        { label: 'Kendra Dignities', value: 'Sun & Jupiter 10th', detail: 'Digbala directional power across professional Bhavas' },
        { label: 'Primary Yoga', value: 'Gaja Kesari Yoga', detail: 'Mutual Kendra angles between Moon and Jupiter' },
      ],
      insightNotes: [
        'Calculates house cusps using authentic equal-sign Parashari principles.',
        'Tabulates exact Shadbala strengths (Sthana, Dig, Kala, Chesta, Naisargika, Drik).',
        'Forms the master baseline for all subsequent divisional and dasha calculations.',
      ],
    },
    faqs: [
      {
        question: 'Why does my Vedic Janam Kundli differ from my Western astrology chart?',
        answer: 'Western astrology uses the Tropical zodiac, which fixes 0° Aries to the Vernal Equinox. Vedic astrology uses the Sidereal zodiac, which anchors calculations to actual fixed astronomical constellations. Due to the axial precession of the equinoxes (~50.3 arcseconds per year), the two zodiacs currently differ by approximately 24° 11\' (the Lahiri Ayanamsa), which frequently shifts your Sun, Moon, and Ascendant signs backward.',
      },
      {
        question: 'What is the importance of birth time accuracy for Janam Kundli?',
        answer: 'The Ascendant (Lagna) changes signs approximately every 2 hours (1 sign per 120 minutes, or 1 degree every 4 minutes). For divisional charts like the Navamsa (D9), the ascendant changes every 13–15 minutes. Accurate birth time is essential for correct house placements.',
      },
      {
        question: 'What are the 12 Bhavas and what do they govern?',
        answer: 'The 12 houses map out all dimensions of human experience: 1st (Self/Vitality), 2nd (Wealth/Speech), 3rd (Siblings/Courage), 4th (Mother/Home/Peace), 5th (Intelligence/Children), 6th (Health/Obstacles), 7th (Spouse/Partners), 8th (Longevity/Transformation), 9th (Dharma/Father/Fortune), 10th (Karma/Career), 11th (Gains/Aspirations), and 12th (Moksha/Expenditure/Foreign lands).',
      },
    ],
  },
  {
    id: 'navamsa',
    num: '04',
    name: 'Navamsa (D9) Chart',
    sanskrit: 'नवांश चक्र',
    category: 'Natal & Vargas',
    tag: 'Divisional Navamsa Harmonic',
    route: '/tools/navamsa',
    action: 'Inspect Navamsa Harmonic →',
    degreeMark: '95° 12\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 6 (Shodashvarga)',
    summary: 'The 9th harmonic divisional chart decomposing each 30° zodiac sign into 9 micro-divisions of 3° 20\', revealing soul purpose, marriage, and post-maturity fortune.',
    fullDescription: 'In Vedic astrology, the Rashi (D1) chart is the seed, while the Navamsa (D9) is the fruit. An exalted planet in D1 that falls into debilitation in D9 lacks real-world potency, whereas a weak planet in D1 that achieves exaltation or Vargottama status in D9 produces magnificent results after age 28–32. The Navamsa is also the paramount chart for deciphering marriage longevity and spouse personality.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth (HH:MM:SS)', 'Place of Birth'],
    outputsProvided: ['D9 Navamsa Chart', 'Vargottama Planets (Same sign in D1 & D9)', 'D9 Lagna & 7th House Indicators', 'Pushkara Navamsa Degree Verifications', 'Spouse Inner Nature Profile'],
    inspector: {
      title: 'Divisional Navamsa (D9) Engine',
      statusBadge: 'Spouse & Inner Destiny',
      headline: 'The 9th Divisional Harmonic of the Natal Rashi',
      description: 'The Navamsa decomposes each 30° zodiac sign into 9 micro-divisions of 3° 20\', revealing the hidden destiny of the second half of life and matrimonial fortune.',
      metrics: [
        { label: 'D9 Lagna', value: 'Vrishabha (Taurus)', detail: 'Ruled by Venus, denoting steady post-marital prosperity' },
        { label: 'Dara Karaka', value: 'Mercury in 5th D9', detail: 'Intellectual, artistic spouse with high social standing' },
        { label: 'Vargottama Planets', value: 'Moon & Venus', detail: 'Planets occupying identical signs in both D1 and D9' },
      ],
      insightNotes: [
        'Crucial chart for assessing true marriage compatibility and spouse personality.',
        'Reveals whether latent natal yogas will produce physical fruit after age 28–32.',
        'Essential for verifying birth time accuracy through divisional sub-period events.',
      ],
    },
    faqs: [
      {
        question: 'Why is the Navamsa chart considered the most important divisional chart?',
        answer: 'Sage Parashara assigns the highest weight to the Navamsa among the Shodashvargas. It represents the 9th harmonic (associated with the 9th house of Dharma and Bhagya). A birth chart cannot be accurately read without verifying whether planets gain or lose dignity in D9.',
      },
      {
        question: 'What is a Vargottama planet?',
        answer: 'A planet that occupies the exact same zodiac sign in both the natal D1 chart and the D9 Navamsa chart is called Vargottama. Such planets function with the strength of an exalted planet, providing unbreakable psychological resilience, clarity, and enduring success.',
      },
      {
        question: 'How does D9 describe the spouse?',
        answer: 'The 7th house of D9, its ruling planet, and any planets positioned in or aspecting it reveal the true temperament, emotional disposition, and spiritual depth of your spouse, beyond the external social status indicated by the D1 7th house.',
      },
    ],
  },
  {
    id: 'dasha',
    num: '05',
    name: 'Vimshottari Dasha',
    sanskrit: 'दशा साधन',
    category: 'Dashas & Timing',
    tag: '120-Year Vimshottari Cycle',
    route: '/tools/dasha-calculator',
    action: 'Explore Vimshottari Dasha →',
    degreeMark: '124° 50\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 46 (Dasha Adhyaya)',
    summary: 'Calculates the 120-year astronomical Vimshottari Dasha sequence from the Moon\'s exact Nakshatra degree at birth down to Mahadasha, Antardasha, and Pratyantardasha.',
    fullDescription: 'The crown jewel of Parashari predictive astrology. Out of dozens of dasha systems, Sage Parashara singled out the 120-year Vimshottari Dasha as universal for the current epoch (Kali Yuga). By measuring the exact elapsed degree of the Moon in its birth Nakshatra, this engine calculates the precise balance of your starting dasha and maps your complete past, present, and future planetary epochs.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth', 'Place of Birth'],
    outputsProvided: ['Birth Dasha Balance (Years, Months, Days)', '120-Year Mahadasha Timeline', 'Current Active Mahadasha & Antardasha', 'Upcoming Pratyantardasha Transitions', 'Planetary Lord Functional Nature'],
    inspector: {
      title: '120-Year Vimshottari Cycle Engine',
      statusBadge: 'Karmic Timeline Active',
      headline: 'Chronological Unfolding of Planetary Periods',
      description: 'Calculates the 120-year astronomical Vimshottari Dasha sequence from the Moon\'s exact nakshatra degree at birth down to Antardasha and Pratyantardasha intervals.',
      metrics: [
        { label: 'Active Mahadasha', value: 'Jupiter (16 Years)', detail: 'Period of intellectual expansion, spiritual growth, and assets' },
        { label: 'Sub-Period (Antar)', value: 'Venus (Nov 2024–Aug 2027)', detail: 'Golden window for matrimony, partnerships, and creative fruition' },
        { label: 'Next Major Shift', value: 'Saturn Phase (2027)', detail: 'Long-term structural consolidation and career leadership' },
      ],
      insightNotes: [
        'Precise chronological dates calculated down to the day and hour.',
        'Identifies the presiding planetary ruler influencing current life decisions.',
        'Distinguishes between favorable growth cycles and quiet consolidation periods.',
      ],
    },
    faqs: [
      {
        question: 'How is the starting dasha determined at birth?',
        answer: 'The starting dasha is governed by your Janma Nakshatra (the Moon\'s asterism at birth). Each of the 27 Nakshatras spans 13° 20\' and is ruled by one of the 9 planets. The exact arc the Moon has already traversed through that Nakshatra determines the balance of years remaining in that ruler\'s cycle.',
      },
      {
        question: 'What are the lengths of each Mahadasha in the 120-year cycle?',
        answer: 'The 9 dasha periods follow a strict order: Sun (6 years), Moon (10 years), Mars (7 years), Rahu (18 years), Jupiter (16 years), Saturn (19 years), Mercury (17 years), Ketu (7 years), and Venus (20 years), totaling exactly 120 solar years.',
      },
      {
        question: 'Can a malefic planet produce good results during its dasha?',
        answer: 'Absolutely. A naturally malefic planet like Saturn or Mars can produce spectacular results if it functions as a Yogakaraka (ruling both a Kendra and a Trikona house, such as Saturn for Taurus and Libra Ascendants), or if it is exalted in Kendra houses.',
      },
    ],
  },
  {
    id: 'career',
    num: '06',
    name: 'Career Prediction (D10)',
    sanskrit: 'कर्म भाव',
    category: 'Natal & Vargas',
    tag: '10th House & Dasamsa (D10)',
    route: '/tools/career-prediction',
    action: 'Examine Career Engine →',
    degreeMark: '152° 08\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 7 & Saravali, Ch. 30',
    summary: 'Analyzes the 10th house of profession (*Karma Bhava*), Amatya Karaka, and the D10 Dasamsa harmonic to pinpoint vocational breakthroughs and public status.',
    fullDescription: 'Vocational destiny is unlocked through the synthesis of three pillars: the 10th house from Lagna, the 10th house from the Moon (representing emotional satisfaction at work), and the Dasamsa (D10) harmonic chart. This tool cross-references Digbala (directional strength) of the Sun and Mars, the Jaimini Amatyakaraka, and Gochara transit influences over your Midheaven.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth', 'Place of Birth'],
    outputsProvided: ['10th Bhava Lord Dignity & Aspects', 'Amatyakaraka (AmK) Career Significator', 'Dasamsa (D10) Chart & Dignities', 'Favorable Industry Affinities', 'Career Promotion Transit Windows'],
    inspector: {
      title: '10th House & Dasamsa (D10) Engine',
      statusBadge: 'Vocational Strength',
      headline: 'Midheaven, 10th Bhava & Professional Trajectory',
      description: 'Analyzes the 10th house of worldly profession, Amatya Karaka, and the D10 Dasamsa harmonic to pinpoint career breakthroughs and vocational calling.',
      metrics: [
        { label: '10th Bhava Lord', value: 'Sun in 10th (Digbala)', detail: 'High executive status, public authority, and autonomy' },
        { label: 'Dasamsa (D10) Lagna', value: 'Simha (Leo Own House)', detail: 'Confirms career in technology, leadership, or advisory' },
        { label: 'Amatya Karaka', value: 'Mercury in Gemini', detail: 'Analytical acumen, mathematical reasoning, and strategy' },
      ],
      insightNotes: [
        'Pinpoints optimal sectors: technology, executive leadership, or advisory.',
        'Maps career promotions to favorable Gochara (transit) cycles.',
        'Decodes the Dasamsa chart to evaluate sustained public reputation and legacy.',
      ],
    },
    faqs: [
      {
        question: 'Which houses determine career success in Vedic astrology?',
        answer: 'The primary career house is the 10th Bhava (Karma, profession, executive authority). Secondary houses include the 2nd Bhava (wealth earned through speech and knowledge), the 6th Bhava (daily service, competitive examinations, obstacles overcome), and the 11th Bhava (profits, honors, network gains).',
      },
      {
        question: 'What is the Amatyakaraka (AmK)?',
        answer: 'In the Jaimini system, the planet with the second highest degree in your chart is the Amatyakaraka (minister to the soul). Its house placement in D1 and D10 reveals your primary professional strengths, cognitive style, and vocational aptitude.',
      },
      {
        question: 'How does the Dasamsa (D10) chart work?',
        answer: 'The Dasamsa divides each sign into 10 parts of 3° each. It specifically highlights your social standing, professional milestones, fame, and government or corporate influence. A weak 10th house in D1 can be dramatically elevated if planets are powerfully placed in D10.',
      },
    ],
  },
  {
    id: 'darakaraka-atmakaraka',
    num: '07',
    name: 'Atmakaraka & Darakaraka',
    sanskrit: 'चरा कारक',
    category: 'Jaimini & Yogas',
    tag: 'Jaimini 7 Chara Karakas',
    route: '/tools/atmakaraka-darakaraka-calculator',
    action: 'Calculate Jaimini Karakas →',
    degreeMark: '165° 30\'',
    classicalSource: 'Jaimini Upadesha Sutras, Ch. 1, Pada 1',
    summary: 'Identifies your soul’s king planet (Atmakaraka) and your primary spouse and relationship significator (Darakaraka) based on exact planetary degrees.',
    fullDescription: 'In Maharishi Jaimini’s classical Upadesha Sutras, planets take on dynamic roles based entirely on their advanced longitudes within their respective signs. The planet with the highest longitude (excluding Rahu/Ketu) becomes the Atmakaraka (AK), representing your deepest karmic soul mission. The planet with the lowest longitude becomes the Darakaraka (DK), representing your spouse and relationship desires.',
    inputsRequired: ['Date of Birth', 'Exact Time of Birth', 'Place of Birth'],
    outputsProvided: ['Atmakaraka (AK) Planet & Soul Mission', 'Darakaraka (DK) Planet & Spouse Profiling', 'Full 7 Chara Karaka Table (AK, AmK, BK, MK, PK, GK, DK)', 'Karakamsa Lagna (AK in Navamsa)', 'Spiritual & Matrimonial Recommendations'],
    inspector: {
      title: 'Jaimini Chara Karaka Calculator',
      statusBadge: 'Soul & Spouse Karakas',
      headline: 'The Dynamic Seven Karakas of Maharishi Jaimini',
      description: 'Calculates the exact planetary longitudes to identify your Atmakaraka (king of the soul) and Darakaraka (significator of the spouse).',
      metrics: [
        { label: 'Atmakaraka (AK)', value: 'Sun at 28° 42\'', detail: 'Soul mission centered on leadership, truth, and overcoming ego' },
        { label: 'Darakaraka (DK)', value: 'Venus at 02° 14\'', detail: 'Spouse embodies elegance, artistic sensibility, and empathy' },
        { label: 'Karakamsa Sign', value: 'Sagittarius (Dhanu D9)', detail: 'Spiritual liberation through higher philosophy and teaching' },
      ],
      insightNotes: [
        'Atmakaraka indicates the recurring lessons your soul chose to master in this incarnation.',
        'Darakaraka describes your spouse\'s physical appearance, career nature, and spiritual temperament.',
        'Connection between AK and DK in Navamsa signifies a profound karmic bond between partners.',
      ],
    },
    faqs: [
      {
        question: 'What is the difference between Sthira Karakas and Chara Karakas?',
        answer: 'Sthira (fixed) Karakas are Parashari (e.g., Sun is always father, Moon is mother, Venus is wife). Chara (variable) Karakas are Jaimini: planets change roles in every individual chart depending strictly on their exact degree longitude from 0° to 30°.',
      },
      {
        question: 'What does the Darakaraka reveal about my partner?',
        answer: 'Your Darakaraka planet acts as a physical mirror for your spouse. For example, if Mercury is DK, your spouse will be witty, youthful, and intellectually engaged. If Saturn is DK, your partner will be grounded, mature, deeply responsible, and patient.',
      },
      {
        question: 'What is Karakamsa Lagna?',
        answer: 'The sign occupied by your Atmakaraka planet in the D9 Navamsa chart is termed Karakamsa. It is the primary reference point for deciphering your higher spiritual purpose, Moksha potential, and intellectual gifts.',
      },
    ],
  },
  {
    id: 'upapada-lagna',
    num: '08',
    name: 'Upapada Lagna (UL)',
    sanskrit: 'उपपद लग्न',
    category: 'Love & Marriage',
    tag: 'Arudha of the 12th Bhava',
    route: '/tools/upapada-lagna',
    action: 'Inspect Upapada Lagna →',
    degreeMark: '192° 15\'',
    classicalSource: 'Jaimini Upadesha Sutras, Ch. 1, Pada 4',
    summary: 'Calculates the Arudha Pada of the 12th house, determining how your marriage manifests tangibly in society, spouse background, and marital longevity.',
    fullDescription: 'While the 7th house represents the legal contract and desires of marriage, Upapada Lagna (UL) represents the physical institution of the marriage itself. Evaluated according to Jaimini principles, the sign, lord, and planets in the 2nd house from UL govern the sustenance and durability of the marital union.',
    inputsRequired: ['Date of Birth', 'Time of Birth', 'Place of Birth'],
    outputsProvided: ['Upapada Lagna (UL) Rashi & House', '2nd from Upapada (Sustenance of Marriage)', 'Spouse Family Background Metrics', 'Marital Harmony & Remedial Gemstones'],
    inspector: {
      title: 'Upapada Lagna & Marital Sustenance Engine',
      statusBadge: 'Matrimonial Durability',
      headline: 'Tangible Manifestation of the Sacred Union',
      description: 'Calculates the 12th house Arudha to evaluate spouse lineage, societal status of the marriage, and remedies for enduring partnership.',
      metrics: [
        { label: 'Upapada Lagna Sign', value: 'Pisces (Meena UL)', detail: 'Spouse is compassionate, spiritually inclined, and adaptable' },
        { label: '2nd from UL', value: 'Aries with Jupiter Aspect', detail: 'Strong financial sustenance and long-lasting marital stability' },
        { label: 'Benefic Guard', value: 'Venus 1st from UL', detail: 'Enduring affection and deep mutual understanding' },
      ],
      insightNotes: [
        'The 2nd house from UL is crucial: benefic planets here protect the marriage against separation.',
        'Fasting on the day ruled by the lord of Upapada Lagna is the premier classical remedy for marital delays.',
        'A strong Upapada Lagna counterbalances minor afflictions in the natal 7th house.',
      ],
    },
    faqs: [
      {
        question: 'How is Upapada Lagna calculated?',
        answer: 'Find the 12th house and its lord. Count how many houses the 12th lord is situated from the 12th house. Count that exact number of houses forward from the 12th lord. That resulting sign is the Upapada Lagna (UL). Special Jaimini exception rules apply if the lord falls in the 12th or 6th house.',
      },
      {
        question: 'Why is the 2nd house from Upapada so important?',
        answer: 'In Jyotish, the 2nd house from any point represents its sustenance (nutrition/food). The 2nd house from UL determines the longevity and sustenance of the marriage. Benefics (Jupiter, Venus, Mercury) here preserve the union, while malefics without relief can cause strain.',
      },
      {
        question: 'What is the classical Upapada fasting remedy?',
        answer: 'Tradition dictates fasting from sunrise to sunset on the day of the week ruled by the lord of Upapada Lagna (e.g., fasting on Thursdays if UL is ruled by Jupiter). This aligns the native with the archetypal energy needed to attract and sustain their rightful partner.',
      },
    ],
  },
  {
    id: 'sade-sati',
    num: '09',
    name: 'Sade Sati Calculator',
    sanskrit: 'साढ़े साती',
    category: 'Dashas & Timing',
    tag: '7.5-Year Saturn Transit Cycle',
    route: '/tools/sade-sati',
    action: 'Analyze Sade Sati Phase →',
    degreeMark: '215° 05\'',
    classicalSource: 'Phaladeepika, Ch. 26 (Gochara Adhyaya)',
    summary: 'Tracks Saturn\'s 7.5-year transit through the 12th, 1st, and 2nd houses from your natal Moon, decoding your karmic growth and maturation phases.',
    fullDescription: 'Saturn (Shani) takes approximately 2.5 years to transit through a single zodiac sign. When Saturn transits through the sign prior to your natal Moon, your Moon sign itself, and the sign subsequent to your Moon, the native undergoes Sade Sati (seven and a half years). Far from a curse, it is an essential karmic recalibration that strips away illusions, builds discipline, and crowns authentic resilience.',
    inputsRequired: ['Date of Birth', 'Time of Birth', 'Place of Birth'],
    outputsProvided: ['Current Sade Sati Status (Active / Inactive)', 'Exact Cycle Phase (Rising, Peak, Setting)', 'Historical & Future 30-Year Sade Sati Dates', 'Ashtakavarga Moon Bindu Strength', 'Classical Remedials & Shani Upayas'],
    inspector: {
      title: '7.5-Year Saturn Transit Engine',
      statusBadge: 'Karmic Recalibration',
      headline: 'Saturn Transit Over the Natal Moon Spectrum',
      description: 'Tracks Saturn\'s movement across the 45-degree arc centered on your natal Moon to diagnose psychological maturity and career transformation.',
      metrics: [
        { label: 'Current Phase', value: 'Phase 2: Peak Janma Shani', detail: 'Saturn transiting the exact natal Moon sign (High discipline required)' },
        { label: 'Moon Ashtakavarga', value: '32 Bindus (High)', detail: 'High structural support cushions against financial and emotional dips' },
        { label: 'Cycle Completion', value: 'March 2027', detail: 'Transition into Phase 3 (Setting) yielding consolidated authority' },
      ],
      insightNotes: [
        'First cycle (youth) builds character and humility; second cycle (adulthood) tests career and legacy; third cycle brings wisdom.',
        'Ashtakavarga points in the Moon sign determine whether the transit brings hardships or major career promotions.',
        'Saturn rewards patience, integrity, disciplined labor, and service to those in need.',
      ],
    },
    faqs: [
      {
        question: 'Is Sade Sati always harmful or difficult?',
        answer: 'No. This is a common misconception. For individuals with Taurus, Libra, Capricorn, or Aquarius Ascendants (where Saturn is an auspicious friend or Yogakaraka), Sade Sati frequently delivers major career breakthroughs, home purchases, and public recognition, provided one works with diligence.',
      },
      {
        question: 'What are the three phases of Sade Sati?',
        answer: 'Phase 1 (Rising): Saturn transits the 12th house from Moon, affecting sleep, travel, expenses, and mental peace. Phase 2 (Peak): Saturn transits directly over the Moon, testing personal identity and emotional resilience. Phase 3 (Setting): Saturn transits the 2nd house from Moon, recalibrating finances, family responsibilities, and speech.',
      },
      {
        question: 'How does Ashtakavarga modify Sade Sati results?',
        answer: 'If the sign through which Saturn is transiting has 28 or more benefic dots (Bindus) in the Sarvashtakavarga table, Saturn acts as a protector rather than an adversary, minimizing disruptions and maximizing tangible rewards.',
      },
    ],
  },
  {
    id: 'hora-lagna',
    num: '10',
    name: 'Hora Lagna (Wealth)',
    sanskrit: 'होरा लग्न',
    category: 'Jaimini & Yogas',
    tag: 'Special Wealth & Asset Ascendant',
    route: '/tools/hora-lagna',
    action: 'Inspect Hora Lagna →',
    degreeMark: '238° 40\'',
    classicalSource: 'Brihat Parashara Hora Shastra, Ch. 4 (Vishesh Lagnas)',
    summary: 'Calculates the primary special ascendant for financial prosperity, assets, liquidity, and investment timing according to classical Parashari formulas.',
    fullDescription: 'Hora Lagna (HL) is one of the premier Special Lagnas (*Vishesh Lagnas*) formulated by Sage Parashara to evaluate monetary gains and prosperity. While the 2nd and 11th houses show general income, the placement of benefic planets in Kendra or Trikona from Hora Lagna indicates effortless wealth accumulation and financial security.',
    inputsRequired: ['Date of Birth', 'Time of Birth', 'Place of Birth'],
    outputsProvided: ['Hora Lagna Sign & Exact Degree', 'Planets Aspecting Hora Lagna', 'Dhana Yoga Formations with HL', 'Optimal Asset Accumulation Sectors'],
    inspector: {
      title: 'Hora Lagna & Dhana Yoga Engine',
      statusBadge: 'Financial Prosperity',
      headline: 'The Specialized Ascendant of Monetary Inflows',
      description: 'Calculates the rate of sunrise to birth to pinpoint the Hora Lagna, unlocking your chart\'s hidden wealth potential.',
      metrics: [
        { label: 'Hora Lagna Sign', value: 'Cancer (Karka HL)', detail: 'Ruled by Moon, favoring wealth through real estate and advisory' },
        { label: 'Dhana Aspect', value: 'Jupiter Trine to HL', detail: 'Confers lasting asset appreciation and generous inheritance' },
        { label: 'Yogada Planet', value: 'Venus (Aspects Lagna & HL)', detail: 'High financial authority and luxury lifestyle indicators' },
      ],
      insightNotes: [
        'A planet that aspects both the normal Lagna and Hora Lagna becomes a Yogada planet, capable of conferring extraordinary prosperity.',
        'Planets situated in the 11th from Hora Lagna indicate the primary sources of commercial windfall.',
        'Cross-referenced with the D2 Hora chart for fine-grained wealth forecasting.',
      ],
    },
    faqs: [
      {
        question: 'What is a Special Lagna in Vedic astrology?',
        answer: 'Special Lagnas (Vishesh Lagnas) are mathematical points calculated from sunrise to birth time using specific hourly motion rates. Key special lagnas include Hora Lagna (wealth), Ghati Lagna (power/authority), and Pranapada Lagna (vitality and birth time verification).',
      },
      {
        question: 'What makes a planet a "Yogada"?',
        answer: 'According to Maharishi Jaimini, a planet that aspects (by sign aspect) both the Janma Lagna and the Hora Lagna is called a Yogada. If it also aspects the Ghati Lagna, it becomes a Maha Yogada, conferring national renown, political power, and extreme wealth.',
      },
      {
        question: 'How does Hora Lagna correlate with the D2 Hora chart?',
        answer: 'While the D2 chart divides signs into two 15° halves (ruled by Sun and Moon) to assess financial nature, Hora Lagna acts as an absolute degree point. Transits of benefic planets over the Hora Lagna degree trigger liquidity events and major asset purchases.',
      },
    ],
  },
  {
    id: 'panchang',
    num: '11',
    name: 'Daily Vedic Panchang',
    sanskrit: 'दैनिक पञ्चाङ्ग',
    category: 'Dashas & Timing',
    tag: 'Five Limbs of Time & Muhurta',
    route: '/tools/panchang',
    action: 'View Daily Panchang →',
    degreeMark: '262° 18\'',
    classicalSource: 'Surya Siddhanta & Muhurta Chintamani',
    summary: 'Calculates the five sacred astronomical limbs of time: Tithi, Vara, Nakshatra, Yoga, and Karana, along with auspicious Abhijit Muhurta and Rahu Kaal.',
    fullDescription: 'The Panchang (Pancha = five, Anga = limbs) is the fundamental astronomical calendar of Vedic sciences. It calculates the dynamic relationship between the Sun and Moon to determine the energetic quality of every moment. Essential for choosing auspicious timings (*Muhurtas*) for marriage, contracts, travel, and major investments.',
    inputsRequired: ['Target Date', 'Target City (Latitude & Longitude)', 'Timezone'],
    outputsProvided: ['Tithi (Lunar Phase) & Exact End Time', 'Janma / Current Nakshatra & Deity', 'Yoga (Angular Soli-Lunar Sum)', 'Karana (Half-Tithi Action Factor)', 'Abhijit Muhurta (Supreme Auspicious Window)', 'Rahu Kaal & Gulika Kaal (Inauspicious Windows)'],
    inspector: {
      title: 'Five Limbs of Time & Muhurta Engine',
      statusBadge: 'Temporal Auspiciousness',
      headline: 'Soli-Lunar Coordinates for Auspicious Action',
      description: 'Calculates the real-time degree separation between Sun and Moon to deliver today\'s exact Panchang and Muhurta windows for your city.',
      metrics: [
        { label: 'Tithi (Lunar Day)', value: 'Shukla Navami', detail: 'Ruled by Goddess Durga, auspicious for undertakings and courage' },
        { label: 'Active Nakshatra', value: 'Rohini (Pada 4)', detail: 'Devata: Prajapati, ideal for creative and commercial initiations' },
        { label: 'Abhijit Muhurta', value: '11:48 AM – 12:36 PM', detail: 'Midday window that dispels negative temporal flaws' },
      ],
      insightNotes: [
        'Tithi governs water/mind; Vara governs fire/vitality; Nakshatra governs air/mental focus; Yoga governs ether/health; Karana governs earth/action.',
        'Avoid commencing life-critical contracts during Rahu Kaal (approx 90-minute daily window ruled by Rahu).',
        'Abhijit Muhurta is blessed by Lord Vishnu and neutralizes ordinary panchang doshas.',
      ],
    },
    faqs: [
      {
        question: 'What are the five limbs of the Panchang?',
        answer: 'The five limbs are: 1. Tithi (12° separation between Sun and Moon), 2. Vara (day of the week and planetary ruler), 3. Nakshatra (Moon’s current 13° 20\' constellation), 4. Yoga (sum of Sun and Moon longitudes in 13° 20\' segments), and 5. Karana (half of a tithi, 6° separation).',
      },
      {
        question: 'What is Abhijit Muhurta?',
        answer: 'Abhijit Muhurta is the 8th Muhurta of the daytime (out of 15), occurring around local solar noon. It lasts approximately 48 minutes and is considered universally auspicious for inaugurations, travel, and agreements, as it overcomes almost all minor calendar blemishes.',
      },
      {
        question: 'Why does Panchang timing vary between cities?',
        answer: 'The Panchang is calibrated to the local sunrise time and geographical latitude/longitude of your specific city. A Tithi or Nakshatra change occurring at 2:00 PM in New Delhi will occur at a different local clock time in London or New York.',
      },
    ],
  },
  {
    id: 'rashi',
    num: '12',
    name: 'Moon Sign (Rashi)',
    sanskrit: 'चन्द्र राशि',
    category: 'Natal & Vargas',
    tag: 'Sidereal Moon & Janma Nakshatra',
    route: '/tools/rashi-calculator',
    action: 'Calculate Moon Rashi →',
    degreeMark: '288° 30\'',
    classicalSource: 'Brihat Jataka of Varahamihira, Ch. 16',
    summary: 'Calculates your true sidereal Moon sign (Rashi) and birth constellation (Janma Nakshatra), unlocking your emotional temperament and subconscious drive.',
    fullDescription: 'In Jyotish, the Moon (*Chandra*) represents the mind (*Manas*), emotional memory, and receptivity. Unlike Western astrology where the Sun sign dominates, Vedic astrology places the Moon sign at the apex of psychological analysis and daily transit forecasts. Your Janma Nakshatra defines your fundamental life orientation and instincts.',
    inputsRequired: ['Date of Birth', 'Time of Birth', 'Place of Birth'],
    outputsProvided: ['Sidereal Moon Rashi & Element', 'Janma Nakshatra & Ruling Planet', 'Nakshatra Pada (Quarter)', 'Varna & Gana Temperament', 'Daily Transit Sensitivity Index'],
    inspector: {
      title: 'Sidereal Moon & Janma Nakshatra Engine',
      statusBadge: 'Subconscious Identity',
      headline: 'True Lunar Sign, Nakshatra Pada & Daily Rhythms',
      description: 'Calculates your true sidereal Moon sign (Rashi) and birth star (Janma Nakshatra), unlocking your emotional temperament, instinctual habits, and daily transit rhythms.',
      metrics: [
        { label: 'Sidereal Moon', value: 'Taurus 14° 22\'', detail: 'Moon placed in exaltation, conferring calm mental fortitude' },
        { label: 'Janma Nakshatra', value: 'Rohini (4th Pada)', detail: 'Ruled by Prajapati, fostering creative and aesthetic refinement' },
        { label: 'Lunar Day (Tithi)', value: 'Shukla Paksha Navami', detail: 'Active phase of emotional expansion and clarity' },
      ],
      insightNotes: [
        'Calculates true sidereal coordinates, adjusting for the 24° precession of equinoxes.',
        'Reveals subconscious emotional needs that drive relationship decisions.',
        'Forms the calculation foundation for daily personal muhurtas and transit forecasts.',
      ],
    },
    faqs: [
      {
        question: 'Why does Vedic astrology prioritize the Moon sign over the Sun sign?',
        answer: 'The Sun stays in each sign for an entire month, meaning roughly 1/12th of the global population shares your Sun sign. The Moon changes signs every 2.25 days and changes Nakshatra padas every 6 hours, making it far more individualized, subtle, and representative of your everyday mental and emotional consciousness.',
      },
      {
        question: 'What is a Nakshatra Pada?',
        answer: 'Each of the 27 Nakshatras is divided into 4 equal quarters (Padas) of 3° 20\' each. Each Pada corresponds directly to a Navamsa sign and is mapped to one of the four Purusharthas: Dharma, Artha, Kama, or Moksha.',
      },
      {
        question: 'Can my Moon sign change if I was born on the cusp?',
        answer: 'Yes. Because the Moon moves rapidly (approximately 13 degrees per 24 hours), even a few minutes difference in recorded birth time can shift your Moon into a different Nakshatra pada or even a different zodiac sign.',
      },
    ],
  },
];

export const TECHNICAL_PILLARS = [
  {
    title: 'NASA JPL DE440 & Sidereal Lahiri Ayanamsa',
    sanskrit: 'चित्रा पक्ष अयनांश साधन',
    description: 'Every calculation uses high-precision NASA Jet Propulsion Laboratory ephemerides calibrated to the official Chitra Paksha (Lahiri) Ayanamsa (24° 11\' 42"), adjusting for precession, nutation, and aberration.',
  },
  {
    title: 'Shodashvarga Harmonic Multiplication',
    sanskrit: 'षोडशवर्ग गणितीय चक्र',
    description: 'We do not stop at the surface D1 chart. Our engines automatically generate all 16 divisional vargas (D1 to D60), validating planetary dignities, Vargottama states, and Pushkara Navamsa degrees.',
  },
  {
    title: 'Vimshottari Dasha Nakshatra Balance',
    sanskrit: 'विंशोत्तरी दशा शेष साधन',
    description: 'Measures the exact arc minute and second traversed by the Moon in the Janma Nakshatra at the moment of birth, generating an unbroken 120-year chronological timeline down to the hour.',
  },
  {
    title: 'Ashtakavarga & Shadbala Strength Metrics',
    sanskrit: 'अष्टकवर्ग एवं षड्बल निर्णय',
    description: 'Planetary strength is mathematically quantified using Parashara’s 6-fold Shadbala vector system (Sthana, Dig, Kala, Chesta, Naisargika, Drik) and 337-Bindu Sarvashtakavarga tables.',
  },
];

export const GLOBAL_TOOLS_FAQS: ToolFAQ[] = [
  {
    question: 'How do Astrowithin’s calculation engines differ from other astrology websites?',
    answer: 'Most commercial astrology sites use generalized, pre-compiled lookup tables or simplified tropical algorithms. Astrowithin uses authentic real-time mathematical formulas adhering strictly to Maharishi Parashara’s Brihat Parashara Hora Shastra and Maharishi Jaimini’s Upadesha Sutras, powered by NASA JPL high-precision ephemerides and true sidereal Lahiri coordinates.',
  },
  {
    question: 'Can an automated tool replace a consultation with an accredited Parashari astrologer?',
    answer: 'Automated calculators provide flawless astronomical math: exact degrees, dasha dates, varga matrices, and guna counts. However, Vedic astrology is a synthetic art (*Drik-Ganita Aikya*). An accredited human scholar synthesizes competing yogas, family context, and desha-kala-patra (place, time, circumstances) to provide tailored life guidance that no algorithm can replicate.',
  },
  {
    question: 'What is the significance of the 24-degree difference between Western and Vedic charts?',
    answer: 'The Earth experiences axial precession, causing the Vernal Equinox to drift backward along the ecliptic by approximately 1 degree every 72 years. While Western astrology ignores this drift and anchors 0° Aries to the equinox, Vedic astrology anchors to the real physical stars (Sidereal). The current difference is approximately 24° 11\', which means your Vedic chart reflects where the planets were actually located in the sky at your birth.',
  },
  {
    question: 'What should I do if my birth time is uncertain by a few minutes?',
    answer: 'If your birth time is uncertain within a 15–30 minute window, the core D1 Rashi chart will usually remain stable, but divisional charts like Navamsa (D9) and Dasamsa (D10) may shift. In such cases, our accredited scholars perform Birth Time Rectification (*Nadi Prasna* and life-event verification) before offering detailed predictions.',
  },
  {
    question: 'Are the computational tools on Astrowithin completely free to use?',
    answer: 'Yes. All 12+ foundational calculation engines—including Janam Kundli, 36-Point Kundli Matching, Navamsa D9, Vimshottari Dasha, Sade Sati, and Panchang—are 100% free to compute and explore without paywalls.',
  },
];
