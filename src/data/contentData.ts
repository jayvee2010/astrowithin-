export interface Expert {
  id: string;
  name: string;
  experience: string;
  city: string;
  specialty: string;
  lineage: string;
  bio: string;
  avatar: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  text: string;
  originalRaw: string;
  rating: number;
  topic: string;
}

export interface Accreditation {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  founded: string;
  badgeText: string;
}

export const EXPERTS: Expert[] = [
  {
    id: "sanjai-maharaj",
    name: "Sanjai Maharaj",
    experience: "21+ years",
    city: "New Delhi",
    specialty: "Parashari Marriage Timing & Ashtakoota Milan",
    lineage: "Bharatiya Vidya Bhavan Certified, Parampara Lineage",
    bio: "Specialises in Navamsa (D9) chart rectification, marriage timing through Vimshottari Dasha, and resolution of 7th house afflictions.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "vikram-rao",
    name: "Vikram Rao",
    experience: "18+ years",
    city: "Varanasi, Uttar Pradesh",
    specialty: "Jaimini Astrology & Darakaraka Life Partner Profiling",
    lineage: "Banaras Hindu University, ICAS Jyotish Visharad",
    bio: "Deeply versed in Jaimini Chara Dasha and Darakaraka placements to define spouse personality, meeting timing, and post-marital harmony.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "vikas-mishra",
    name: "Vikas Mishra",
    experience: "18+ years",
    city: "Mumbai, Maharashtra",
    specialty: "Career, Wealth Yogas & Muhurta Timing",
    lineage: "Astronomical Society of India Member, D10 Specialist",
    bio: "Combines transit analysis with Dashamsha (D10) examination to identify career promotions, business ventures, and auspicious marriage muhurtas.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "pooja-kapoor",
    name: "Pooja Kapoor",
    experience: "16+ years",
    city: "Noida, Uttar Pradesh",
    specialty: "Relationship Synastry & Manglik Dosha Nuances",
    lineage: "ICAS Jyotish Praveena & Jyotish Visharad",
    bio: "Practical, compassionate consultation addressing marital delays, Kuja dosha cancellations, and emotional reconciliation via Moon-Venus connections.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "sunita-pandey",
    name: "Sunita Pandey",
    experience: "15+ years",
    city: "Lucknow, Uttar Pradesh",
    specialty: "Brihat Parashara Hora Shastra & Remedial Gemstones",
    lineage: "Sanskrit Vidyapeeth Scholar, Certified Vedic Astrologer",
    bio: "Master of classical Parashari principles, advising on planetary remedies, mantra japas, and balancing family dharms with modern relationship goals.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "nidhi-raichand",
    name: "Nidhi Raichand",
    experience: "12+ years",
    city: "Mumbai, Maharashtra",
    specialty: "Family Karma, Progeny & Emotional Synchronicity",
    lineage: "All India Federation of Astrologers Societies (AIFAS)",
    bio: "Guidance on relationship transitions, family dynamics, Saptamsha (D7) evaluations, and navigating difficult Saturn/Rahu Sade Sati cycles.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "neeraj-sinha",
    name: "Neeraj Sinha",
    experience: "11+ years",
    city: "Bangalore, Karnataka",
    specialty: "Tech Career Crossroads & Modern Matchmaking",
    lineage: "ICAS Bengaluru Chapter, B.Tech + Jyotish Acharya",
    bio: "Bridges analytical logic with authentic Vedic timing to help professionals navigate dual-career relationships and overseas relocation.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Ananya Sharma",
    city: "Bengaluru",
    text: "Sometimes the advice in other apps feels generic, but on Astrowithin the predictions were pinpoint accurate. Sanjai Maharaj walked me through my 7th house dasha timing and predicted the exact month my marriage alliance would be confirmed.",
    originalRaw: "Smtimes the advice in other apps feels generic, but on Astrowithin the predictooms were pinpoint accurate. Sanjai Maharaj walked me through my 7th house dasha timing and predicted the exact month my marriage alliance would be confirmed.",
    rating: 5,
    topic: "Marriage Timing"
  },
  {
    id: "rev-2",
    name: "Rohan Deshmukh",
    city: "Pune",
    text: "Best platform for authentic Parashari astrology without any superstition. Pooja Kapoor explained the real nuances of Manglik dosha in my chart and put all my family's anxiety to rest.",
    originalRaw: "Best plateform for authentic Parashari astrology without any superstition. Pooja Kapoor explained the real nuances of Manglik dosha in my chart and put all my family's anxiety to rest.",
    rating: 5,
    topic: "Manglik Dosha & Compatibility"
  },
  {
    id: "rev-3",
    name: "Kavita Iyer",
    city: "Chennai",
    text: "We were unsure about matching charts for our daughter. Vikram Rao explained the Ashtakoota score with such clarity and maturity. Abhi dekhte hain aage kya hota hai, but the consultation gave us immense peace of mind.",
    originalRaw: "We were unsure about matching charts for our daughter. Vikram Rao explained the Ashtakoota score with such clarity and maturity. Abhi dekhte hain aage kya hita hai, but the consultation gave us immense peace of mind.",
    rating: 5,
    topic: "Kundli Matching"
  },
  {
    id: "rev-4",
    name: "Aditya Verma",
    city: "Delhi NCR",
    text: "I was facing a severe career dilemma and whether to relocate abroad after marriage. Vikas Mishra analysed my D10 and 9th house transits with unmatched precision. A truly classical approach.",
    originalRaw: "I was facing a severe career dilemma and whether to relocate abroad after marriage. Vikas Mishra analysed my D10 and 9th house transits with unmatched precision. A truly classical approach.",
    rating: 5,
    topic: "Career & Relocation"
  },
  {
    id: "rev-5",
    name: "Meera Patel",
    city: "Ahmedabad",
    text: "The free Kundli and Dasha breakdown on the app is so high quality. When I spoke to Sunita Pandey, she connected past milestone events with my previous Rahu Mahadasha perfectly.",
    originalRaw: "The free Kundli and Dasha breakdown on the app is so high quality. When I spoke to Sunita Pandey, she connected past milestone events with my previous Rahu Mahadasha perfectly.",
    rating: 5,
    topic: "Dasha & Life Milestones"
  },
  {
    id: "rev-6",
    name: "Siddharth Menon",
    city: "Kochi",
    text: "No fear-mongering, no forced costly gemstones. Just pure, deep Vedic scholarship from classical texts. The only astrology app worth having on your phone.",
    originalRaw: "No fear-mongering, no forced costly gemstones. Just pure, deep Vedic scholarship from classical texts. The only astrology app worth having on your phone.",
    rating: 5,
    topic: "Authentic Vedic Philosophy"
  }
];

export const ACCREDITATIONS: Accreditation[] = [
  {
    id: "icas",
    name: "Indian Council of Astrological Sciences",
    abbreviation: "ICAS",
    description: "Founded by Dr. B.V. Raman, upholding rigorous examination standards and classical Jyotish scholarship across India.",
    founded: "1984",
    badgeText: "ICAS Certified"
  },
  {
    id: "bvb",
    name: "Bharatiya Vidya Bhavan",
    abbreviation: "BVB Jyotish",
    description: "Institute of Astrology, guided by classical Parashari research, systematic empirical testing, and Vedic lineage.",
    founded: "1938",
    badgeText: "BVB Research Lineage"
  },
  {
    id: "aifas",
    name: "All India Federation of Astrologers Societies",
    abbreviation: "AIFAS",
    description: "Premier national apex council fostering traditional Vedic astrological education and ethical consultation charters.",
    founded: "2001",
    badgeText: "AIFAS Accredited"
  },
  {
    id: "asi",
    name: "Astronomical Society of India",
    abbreviation: "ASI",
    description: "Professional body of astronomical researchers advancing ephemeris calculations and celestial coordinate accuracy.",
    founded: "1972",
    badgeText: "Ephemeris Verified"
  }
];

export const FEATURE_TABS = [
  {
    id: "horoscope",
    name: "Horoscope",
    title: "Daily emotional currents through your Moon sign",
    body: "Track your day-to-day emotional currents through your Moon sign (Rashi), not generic sun sign predictions. The Moon governs the subconscious, inner serenity, and daily relational rhythms. Discover how current lunar transits trigger specific houses in your natal chart, revealing auspicious windows for conversation, reflection, and decision-making."
  },
  {
    id: "kundli",
    name: "Kundli",
    title: "Cosmic birth blueprint cast at exact coordinates",
    body: "Your Janam Kundli is your cosmic birth blueprint cast at the exact minute and coordinates of your arrival on earth. Explore the 12 Bhavas (houses), planetary dignities, Shadbala strengths, and key divisional charts including the Navamsa (D9) and Dasamsa (D10). Understand the foundational yogas and karmic patterns shaping your life trajectory."
  },
  {
    id: "partner",
    name: "Partner",
    title: "Sacred partnership, Venus & Navamsa (D9) analysis",
    body: "Examine the 7th house of sacred partnership, Venus, Jupiter, and the intricate dynamics of the Navamsa (D9) chart. Through authentic Ashtakoota Guna Milan and planetary compatibility analysis, decode emotional harmony, physical attraction, shared values, and potential karmic challenges between two souls before marital commitment."
  },
  {
    id: "dasha",
    name: "Dasha",
    title: "Vimshottari Dasha system: 120-year planetary cycles",
    body: "Time is cyclical in Parashari Jyotish. Journey through the Vimshottari Dasha system—the 120-year planetary cycle of Mahadashas, Antardashas, and Pratyantardashas. Unveil which celestial forces are active right now, when major turning points in career and marriage unfold, and when quiet periods of preparation are warranted."
  },
  {
    id: "past-events",
    name: "Past events",
    title: "Cross-reference milestones against historical transits",
    body: "Validate the precision of classical Parashari astrology through your personal history. Cross-reference major life milestones—graduations, relocations, career breakthroughs, and past relationships—against the planetary periods and Gochara (transits) that presided over them, building trust in your upcoming forecast."
  }
];
