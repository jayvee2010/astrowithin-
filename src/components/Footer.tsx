import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2DDD4] dark:border-white/10 pt-16 pb-12 px-6 sm:px-12 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-[#E2DDD4] dark:border-white/10">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center p-1 bg-[#FAF7F2] dark:bg-[#161720]">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="50" cy="50" r="45" strokeDasharray="2 2" opacity="0.8" />
                <polygon points="50,10 90,80 10,80" stroke="#D4AF37" strokeWidth="2.5" />
                <polygon points="50,90 90,20 10,20" stroke="#D4AF37" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="font-cormorant text-2xl font-bold tracking-[0.16em]">
              ASTROWITHIN
            </span>
          </Link>
          <p className="text-xs opacity-75 font-light leading-relaxed mb-6 max-w-xs">
            The authentic Parashari Vedic astrology platform. Traditional wisdom, verified lineage, zero superstition.
          </p>
          <div className="flex items-center gap-3 text-xs font-cinzel text-[#D4AF37]">
            <span>iOS App</span> · <span>Android App</span> · <span>Web Suite</span>
          </div>
        </div>

        {/* Column 1: Astrology */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Astrology Disciplines
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Journal & Blog</Link></li>
            <li><Link to="/astrology/houses" className="hover:text-[#D4AF37] transition-colors">Houses (12 Bhavas)</Link></li>
            <li><Link to="/astrology/planets" className="hover:text-[#D4AF37] transition-colors">Planets (Navagrahas)</Link></li>
            <li><Link to="/astrology/transits" className="hover:text-[#D4AF37] transition-colors">Transits (Gochara)</Link></li>
            <li><Link to="/astrology/nakshatras" className="hover:text-[#D4AF37] transition-colors">Nakshatras (27 Lunar Mansions)</Link></li>
            <li><Link to="/astrology/zodiac-signs" className="hover:text-[#D4AF37] transition-colors">Signs (12 Rashis)</Link></li>
            <li><Link to="/astrology/yogas" className="hover:text-[#D4AF37] transition-colors">Yogas (Planetary Combinations)</Link></li>
          </ul>
        </div>

        {/* Column 2: Popular Calculators */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Classical Tools
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/tools/marriage-prediction" className="hover:text-[#D4AF37] transition-colors">Marriage Prediction</Link></li>
            <li><Link to="/tools/kundli-matching" className="hover:text-[#D4AF37] transition-colors">Ashtakoota Kundli Matching</Link></li>
            <li><Link to="/tools/premium-kundli" className="hover:text-[#D4AF37] transition-colors">Birth Chart (Janam Kundli)</Link></li>
            <li><Link to="/tools/dasha-calculator" className="hover:text-[#D4AF37] transition-colors">Vimshottari Dasha</Link></li>
            <li><Link to="/tools/navamsa" className="hover:text-[#D4AF37] transition-colors">Navamsa (D9)</Link></li>
            <li><Link to="/tools/career-prediction" className="hover:text-[#D4AF37] transition-colors">Dashamsha (D10) Career</Link></li>
            <li><Link to="/tools/rashi-calculator" className="hover:text-[#D4AF37] transition-colors">Moon Sign & Nakshatra</Link></li>
          </ul>
        </div>

        {/* Column 3: Company & Ethics */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Parampara & Trust
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Astrowithin</Link></li>
            <li><Link to="/experts" className="hover:text-[#D4AF37] transition-colors">Verified Astrologers</Link></li>
            <li><Link to="/ethics" className="hover:text-[#D4AF37] transition-colors">Consultation Ethics</Link></li>
            <li><Link to="/careers" className="hover:text-[#D4AF37] transition-colors">Join as Scholar</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link></li>
            <li><Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-cinzel uppercase tracking-[0.2em] opacity-60">
        <div>
          © 2026 ASTROWITHIN · Classical Parashari Jyotish Parampara
        </div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:opacity-100">Privacy</a>
          <a href="#terms" className="hover:opacity-100">Terms</a>
          <a href="#ethics" className="hover:opacity-100">Academic Ethics</a>
        </div>
      </div>
    </footer>
  );
};
