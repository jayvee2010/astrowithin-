export interface BlogPost {
  slug: string;
  title: string;
  sanskritTitle: string;
  excerpt: string;
  category: 'Birth Chart Guides' | 'Planets & Dashas' | 'Love & Synastry' | 'Houses & Bhavas' | 'Yogas & Remedials';
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    credentials: string;
  };
  tags: string[];
  featured?: boolean;
  relatedTool: {
    name: string;
    route: string;
    action: string;
  };
  content: {
    heading: string;
    paragraphs: string[];
    subheadings?: {
      title: string;
      body: string;
    }[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-a-vedic-birth-chart-janam-kundli-guide',
    title: 'What Is a Vedic Birth Chart? A Complete Guide to Reading Your Janam Kundli',
    sanskritTitle: 'जन्म कुण्डली दिग्दर्शन',
    excerpt: 'A complete mathematical guide to the 12 Bhavas, Ascendant calculations, and planetary longitudes according to classical Parashara Hora Shastra.',
    category: 'Birth Chart Guides',
    readTime: '8 min read',
    publishedAt: 'October 24, 2024',
    featured: true,
    author: {
      name: 'Sanjai Maharaj',
      role: 'Senior Parashari Astrologer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '21+ Yrs · Bharatiya Vidya Bhavan Faculty',
    },
    tags: ['Janam Kundli', '12 Bhavas', 'Lagna', 'Sidereal Lahiri'],
    relatedTool: {
      name: 'Birth Chart Generator',
      route: '/tools/premium-kundli',
      action: 'Generate Natal Chart →',
    },
    content: {
      heading: 'The Cosmic Blueprint Cast at Your Exact First Breath',
      paragraphs: [
        'In classical Vedic astrology (Jyotish), your Janam Kundli is not an abstract personality test; it is an astronomical snapshot of the celestial sphere projected onto the 12 houses (Bhavas) at the exact latitude, longitude, and minute of your birth.',
        'Unlike Western astrology, which utilizes the tropical zodiac based on seasons, Vedic Jyotish relies on the sidereal zodiac (Nirayana) calibrated with the Lahiri Ayanamsa (currently ~24° 11\'). This accounts for the physical 25,800-year precession of the equinoxes, measuring planetary positions against the actual observable constellations.',
      ],
      subheadings: [
        {
          title: 'The Ascendant (Lagna) as the Anchor of Destiny',
          body: 'The 1st house (Lagna) represents the zodiac constellation rising on the eastern horizon at birth. It defines the physical body, vitality, innate temperament, and sets the baseline numbering for all 12 houses. When the Lagna lord is well-placed in a Kendra (1st, 4th, 7th, 10th) or Trikona (1st, 5th, 9th), the individual enjoys natural fortitude and resilience.',
        },
        {
          title: 'The Four Pillars of Existence: Dharma, Artha, Kama, Moksha',
          body: 'The 12 houses are categorized into four sacred life pursuits. Houses 1, 5, and 9 represent Dharma (righteous action and spiritual calling). Houses 2, 6, and 10 represent Artha (wealth, career, and material stewardship). Houses 3, 7, and 11 represent Kama (relationship, desires, and communal alliances). Houses 4, 8, and 12 represent Moksha (introspection, emotional peace, and spiritual liberation).',
        },
        {
          title: 'Planetary Dignities and Shadbala Strengths',
          body: 'A planet in your chart is never simply good or bad; its strength depends on dignity. A planet can be exalted (Uccha), in its own sign (Swakshetra), in a friendly sign, debilitated (Neecha), or combuster (Asta). Furthermore, the classical Shadbala mathematical algorithm tabulates six distinct sources of planetary strength: positional, directional, temporal, motion, natural, and aspectual power.',
        },
      ],
    },
  },
  {
    slug: 'vimshottari-dasha-planetary-periods-life-timing',
    title: 'Vimshottari Dasha: How 120-Year Planetary Cycles Define Your Life Path',
    sanskritTitle: 'विंशोत्तरी दशा साधन रहस्य',
    excerpt: 'How the 120-year astronomical Vimshottari sequence unfolds from your Moon nakshatra, revealing turning points in career, relocation, and matrimony.',
    category: 'Planets & Dashas',
    readTime: '11 min read',
    publishedAt: 'November 2, 2024',
    featured: true,
    author: {
      name: 'Neeraj Sinha',
      role: 'Practicing Vedic Astrologer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '18+ Yrs · Published Author & Researcher',
    },
    tags: ['Vimshottari Dasha', 'Mahadasha', 'Timing', 'Gochara Transits'],
    relatedTool: {
      name: 'Vimshottari Calculator',
      route: '/tools/dasha-calculator',
      action: 'Calculate Active Dasha →',
    },
    content: {
      heading: 'Time Is Cyclical: The Unfolding of Karmic Sequences',
      paragraphs: [
        'One of the greatest gifts of Sage Parashara in Brihat Parashara Hora Shastra is the Vimshottari Dasha system. While a birth chart shows the static potential of what you can experience, the Dasha system reveals the exact chronological timeline of WHEN events must unfold.',
        'The sequence is anchored to the exact degree of the Moon at your birth. Each of the 27 Nakshatras is ruled by one of the nine Grahas (Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury, Ketu, Venus). The Moon\'s entry point dictates which planetary period you enter at birth, and the cycle proceeds in a fixed 120-year astronomical sequence.',
      ],
      subheadings: [
        {
          title: 'The Hierarchy: Mahadasha down to Pratyantardasha',
          body: 'The Mahadasha (major period) establishes the macro weather of your life for years. For instance, Jupiter Mahadasha lasts 16 years, conferring wisdom and expansion; Saturn lasts 19 years, demanding structural discipline. Within each Mahadasha, the Antardasha (sub-period) and Pratyantardasha (sub-sub-period) narrow down the timing of specific promotions, marriages, and milestones.',
        },
        {
          title: 'The Dual Transit (Gochara) Concurrence Rule',
          body: 'In Parashari Jyotish, an event only materializes when the active Dasha period and the current sky transits (Gochara) align simultaneously. For major milestones like marriage, Jupiter and Saturn must simultaneously aspect the 7th house from Lagna or the Moon while an auspicious Venus or Jupiter Antardasha is operational.',
        },
      ],
    },
  },
  {
    slug: '7th-house-and-upapada-lagna-marriage-blueprint',
    title: 'The 7th House & Upapada Lagna: The Mathematical Blueprint of Sacred Marriage',
    sanskritTitle: 'सप्तम भाव एवं उपपद लग्न विचार',
    excerpt: 'Decode the difference between fleeting romantic attraction and lifelong marital commitment through the 7th Bhava lord and Jaimini Upapada Lagna.',
    category: 'Love & Synastry',
    readTime: '9 min read',
    publishedAt: 'November 12, 2024',
    featured: true,
    author: {
      name: 'Pooja Kapoor',
      role: 'Sidereal Synastry Specialist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '15+ Yrs · Sidereal Synastry Specialist',
    },
    tags: ['Marriage Timing', '7th House', 'Upapada Lagna', 'Kuja Dosha'],
    relatedTool: {
      name: 'Marriage Prediction Engine',
      route: '/tools/marriage-prediction',
      action: 'Examine Marriage Timing →',
    },
    content: {
      heading: 'Distinguishing Romantic Chemistry from Marital Longevity',
      paragraphs: [
        'Modern dating culture often confounds the 5th house of romantic courtship with the 7th house of solemn partnership and the Upapada Lagna (UL) of lawful matrimony. In classical Jyotish, they are ruled by entirely different planetary mechanisms.',
        'While 5th house connections bring emotional excitement, only the 7th house and its divisional reflection in the Navamsa (D9) determine whether two individuals possess the karmic stamina to weather financial, familial, and physical changes over decades.',
      ],
      subheadings: [
        {
          title: 'The Upapada Lagna (UL) in Jaimini Astrology',
          body: 'Calculated by finding the sign placement of the 12th house lord and projecting it forward by an equal number of signs, the Upapada Lagna specifically governs marriage as a social institution. Auspicious planets (Jupiter, Venus, Mercury) in or aspecting the 2nd house from Upapada ensure long-term harmony and marital stability.',
        },
        {
          title: 'The Truth About Manglik (Kuja) Dosha',
          body: 'Mars in houses 1, 4, 7, 8, or 12 creates Kuja Dosha, which can bring fiery impatience to domestic affairs. However, Parashara provides dozens of mathematical cancellations (Bhanga)—such as Mars placed in its own sign of Aries/Scorpio, aspected by Jupiter, or when both partners possess equivalent Kuja configurations.',
        },
      ],
    },
  },
  {
    slug: 'moon-sign-vs-sun-sign-sidereal-astrology-truth',
    title: 'Moon Sign vs. Sun Sign: Why Sidereal Jyotish Centers the Subconscious Mind',
    sanskritTitle: 'चन्द्र राशि बनाम सूर्य राशि',
    excerpt: 'While Western astrology emphasizes the outer ego (Sun), Vedic astrology prioritizes the Moon (Chandra) as the ruler of subconscious memory and emotional serenity.',
    category: 'Houses & Bhavas',
    readTime: '7 min read',
    publishedAt: 'November 18, 2024',
    author: {
      name: 'Sunita Pandey',
      role: 'Classical Jyotish Scholar',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '19+ Yrs · Master of Classical Parashari',
    },
    tags: ['Moon Sign', 'Chandra Rashi', 'Nakshatra', 'Sun Sign'],
    relatedTool: {
      name: 'Rashi Calculator',
      route: '/tools/rashi-calculator',
      action: 'Calculate True Moon Sign →',
    },
    content: {
      heading: 'The Sun Is Who You Strive to Be; The Moon Is Who You Are',
      paragraphs: [
        'If you have only known your Western horoscope, discovering that your Vedic sign is different can be surprising. Due to the 24° sidereal offset, approximately 85% of people find their Sun sign shifts back by one entire constellation in Vedic astrology.',
        'More fundamentally, Vedic astrology considers your Moon Sign (Chandra Rashi) far more consequential than your Sun sign. The Sun changes signs only once a month; the Moon changes signs every 2.25 days and shifts through 27 distinct Nakshatras (lunar mansions).',
      ],
      subheadings: [
        {
          title: 'Manas: The Seat of Subconscious Conditioning',
          body: 'In Vedic psychology, the Moon governs Manas—the sensory mind, memory patterns (Samskaras), and instinctual reflexes. While the Sun rules outward ambition and social ego, the Moon governs how you react in solitude, how you process grief, and what kind of partner makes you feel emotionally safe.',
        },
        {
          title: 'Why Daily Horoscopes Must Use the Moon Sign',
          body: 'All classical Gochara (transit) forecasts in Vedic astrology are cast from the Moon (Chandra Lagna). Because transits affect your emotional states and immediate relational rhythms, calculating transits from the Sun yields generic, inaccurate timing.',
        },
      ],
    },
  },
  {
    slug: 'ashtakoota-milan-36-guna-compatibility-explained',
    title: 'Ashtakoota Milan Explained: The 36 Guna Compatibility Scoring System',
    sanskritTitle: 'अष्टकूट मिलान ३६ गुण रहस्य',
    excerpt: 'A granular breakdown of the 8 Kootas: Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi—and how true compatibility transcends superficial scores.',
    category: 'Love & Synastry',
    readTime: '10 min read',
    publishedAt: 'November 28, 2024',
    author: {
      name: 'Baishnabi Borthakur',
      role: 'Lead Astrology Researcher',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: 'Lead Research Analyst · Synastry Specialist',
    },
    tags: ['Ashtakoota Milan', '36 Gunas', 'Guna Milan', 'Nadi Dosha'],
    relatedTool: {
      name: 'Kundli Matching Engine',
      route: '/tools/kundli-matching',
      action: 'Calculate 36-Point Milan →',
    },
    content: {
      heading: 'The 8 Mathematical Dimensions of Marital Compatibility',
      paragraphs: [
        'Ashtakoota Milan is the classical 36-point algorithm developed by Vedic rishis to evaluate the energetic, psychological, and biological compatibility between prospective partners.',
        'The system is divided into eight hierarchical tests (Kootas), with points increasing from 1 to 8: Varna (1), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7), and Nadi (8). Together, they total 36 points (Gunas).',
      ],
      subheadings: [
        {
          title: 'The Critical High-Scoring Kootas: Nadi and Bhakoot',
          body: 'Nadi carries the highest weight (8 points) and tests physiological, genetic, and energetic harmony. Partners should belong to different Nadis (Adi, Madhya, Antya). Bhakoot (7 points) tests mutual emotional compassion and financial longevity based on the relative sign distance (e.g., 2-12, 6-8, 5-9 positions).',
        },
        {
          title: 'Why 18 Points Is Only the Minimum Baseline',
          body: 'While a score of 18/36 is traditionally considered the bare threshold for acceptance, experienced astrologers look beyond the raw total. A chart with 24 points but suffering from an uncanceled Nadi Dosha requires remedies, while a chart with 20 points and stellar Graha Maitri and Navamsa alignment can flourish beautifully.',
        },
      ],
    },
  },
  {
    slug: '8th-house-ayur-bhava-transformation-longevity',
    title: 'The 8th House (Ayur Bhava): Transformation, Inheritance, and Karmic Evolution',
    sanskritTitle: 'अष्टम भाव गूढ़ विचार',
    excerpt: 'Demystifying the most misunderstood house in the Kundli. Understand longevity, unearned wealth, sudden spiritual awakenings, and psychological resilience.',
    category: 'Houses & Bhavas',
    readTime: '12 min read',
    publishedAt: 'December 4, 2024',
    author: {
      name: 'Vikram Rao',
      role: 'Jaimini Chara Dasha Specialist',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '16+ Yrs · Deeply versed in Jaimini Sutras',
    },
    tags: ['8th House', 'Ayur Bhava', 'Transformation', 'Vipreet Raj Yoga'],
    relatedTool: {
      name: 'Birth Chart Analyzer',
      route: '/tools/premium-kundli',
      action: 'Inspect 8th Bhava →',
    },
    content: {
      heading: 'The Gateway to the Unseen and the Subconscious Crucible',
      paragraphs: [
        'Of all the 12 Bhavas, none evokes as much unwarranted fear as the 8th house (Randhra or Ayur Bhava). While pop astrology labels it merely the house of death and obstacles, classical Jyotish recognizes it as the profound house of longevity, sudden inheritances, and deep spiritual alchemy.',
        'The 8th house represents psychological metamorphosis: the ability to endure crisis, shed outdated versions of the self, and emerge with unbreakable mental resilience.',
      ],
      subheadings: [
        {
          title: 'Unearned Wealth and Partner\'s Finances',
          body: 'Because the 8th house sits 2nd from the 7th house (representing your partner\'s assets and treasury), a strong 8th house indicates generous financial benefits through marriage, legal settlements, joint ventures, or ancestral estates.',
        },
        {
          title: 'Vipreet Raj Yoga: Power Arising Through Crisis',
          body: 'When the ruler of the 8th house occupies another dusthana (6th or 12th house), it creates the renowned Harsha or Sarala Vipreet Raj Yoga. This confers an extraordinary superpower: the individual thrives where others crumble, turning organizational distress or unexpected shocks into definitive career breakthroughs.',
        },
      ],
    },
  },
  {
    slug: 'navamsa-d9-chart-hidden-destiny-second-half-of-life',
    title: 'Understanding Navamsa (D9): The Hidden Destiny of Your Second Half of Life',
    sanskritTitle: 'नवांश चक्र गूढ़ार्थ',
    excerpt: 'Why senior astrologers never interpret the birth chart without the D9. Discover your true post-marriage prosperity and soul purpose.',
    category: 'Birth Chart Guides',
    readTime: '10 min read',
    publishedAt: 'December 15, 2024',
    author: {
      name: 'Sanjai Maharaj',
      role: 'Senior Parashari Astrologer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '21+ Yrs · Bharatiya Vidya Bhavan Faculty',
    },
    tags: ['Navamsa', 'D9 Chart', 'Vargottama', 'Spouse Indicator'],
    relatedTool: {
      name: 'Navamsa D9 Inspector',
      route: '/tools/navamsa',
      action: 'Inspect Navamsa Chart →',
    },
    content: {
      heading: 'The Root and the Fruit: D1 vs. D9 Harmonics',
      paragraphs: [
        'In classical Sanskrit commentaries, the Rashi chart (D1) is compared to a tree, while the Navamsa chart (D9) is the fruit that the tree bears. A tree may appear lush and grand, but if its fruit is barren, its promise remains unfulfilled. Conversely, a modest tree that yields golden fruit produces a life of quiet fulfillment.',
        'The Navamsa is constructed by dividing each 30° zodiac sign into 9 equal harmonic sectors of 3° 20\'. It reveals the inner spiritual fortitude of planets and becomes the dominant chart influencing reality after marriage and past the age of 28 to 32.',
      ],
      subheadings: [
        {
          title: 'The Sovereign Power of Vargottama Planets',
          body: 'When a planet occupies the exact same zodiac sign in both the natal D1 chart and the divisional D9 chart, it achieves Vargottama status. Even if a planet appears ordinary in D1, Vargottama fortitude guarantees that its promises will materialize with exceptional strength and endurance.',
        },
        {
          title: 'The Dara Karaka and the Navamsa Lagna',
          body: 'The Navamsa ascendant reveals your spouse\'s character and how you evolve as a partner. Examining the Dara Karaka (the planet with the lowest degree in your natal chart) within the Navamsa provides precise insights into your partner\'s profession, moral character, and spiritual orientation.',
        },
      ],
    },
  },
  {
    slug: 'dhana-yogas-wealth-financial-astrology-indicators',
    title: 'Dhana Yogas & Wealth Indicators: How to Read Financial Prosperity in Your Chart',
    sanskritTitle: 'धन योग एवं लक्ष्मी स्थान',
    excerpt: 'The mathematical combinations between the 2nd house of treasury, 11th house of gains, and the 5th and 9th houses of past merit (Purva Punya).',
    category: 'Yogas & Remedials',
    readTime: '8 min read',
    publishedAt: 'January 5, 2025',
    author: {
      name: 'Neeraj Sinha',
      role: 'Practicing Vedic Astrologer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80&crop=faces',
      credentials: '18+ Yrs · Published Author & Researcher',
    },
    tags: ['Dhana Yoga', 'Wealth Astrology', '11th House', 'Indu Lagna'],
    relatedTool: {
      name: 'Career & Wealth Engine',
      route: '/tools/career-prediction',
      action: 'Examine Wealth Yogas →',
    },
    content: {
      heading: 'The Exact Planetary Conjunctions of Prosperity',
      paragraphs: [
        'Vedic astrology does not treat wealth as random luck; it is understood as Dhana Yoga—the harmonious interplay between accumulated treasury (2nd Bhava), speculative fortune and intelligence (5th Bhava), divine grace and past merits (9th Bhava), and recurring income streams (11th Bhava).',
        'When the lords of these four wealth houses form mutual kendra, trine, or conjunction relationships, classical Dhana Yogas are formed, ensuring that wealth flows smoothly during the corresponding planetary dasha periods.',
      ],
      subheadings: [
        {
          title: 'Indu Lagna: The Special Moon-Derived Wealth Horizon',
          body: 'Beyond the basic houses, Sage Parashara created the Indu Lagna calculation, assigning specific numerical rays (Kalas) to planets from the Moon. The sign resulting from this sum reveals your capacity for building sustained, multi-generational wealth.',
        },
        {
          title: 'Gajakesari and Lakshmi Yogas',
          body: 'When Jupiter occupies an angle from the Moon, it forms Gajakesari Yoga, indicating wealth earned through ethical authority and intellectual reputation. When the 9th lord is exalted in a Kendra while Venus is strongly placed, Lakshmi Yoga confers grace, material abundance, and philanthropy.',
        },
      ],
    },
  },
];
