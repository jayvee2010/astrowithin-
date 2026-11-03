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

        {/* Column 1: Astrology (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Astrology
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link></li>
            <li><Link to="/astrology/houses" className="hover:text-[#D4AF37] transition-colors">Houses (Bhavas)</Link></li>
            <li><Link to="/astrology/planets" className="hover:text-[#D4AF37] transition-colors">Planets (Navagrahas)</Link></li>
            <li><Link to="/astrology/transits" className="hover:text-[#D4AF37] transition-colors">Transits (Gochara)</Link></li>
            <li><Link to="/astrology/nakshatras" className="hover:text-[#D4AF37] transition-colors">Nakshatras (27 Stars)</Link></li>
            <li><Link to="/astrology/zodiac-signs" className="hover:text-[#D4AF37] transition-colors">Signs (12 Rashis)</Link></li>
            <li><Link to="/astrology/yogas" className="hover:text-[#D4AF37] transition-colors">Yogas (Auspicious Combinations)</Link></li>
            <li><Link to="/wiki" className="hover:text-[#D4AF37] transition-colors">Wiki & Knowledgebase</Link></li>
          </ul>
        </div>

        {/* Column 2: Popular Tools (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Popular Tools
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/tools/marriage-prediction" className="hover:text-[#D4AF37] transition-colors">Marriage Prediction</Link></li>
            <li><Link to="/tools/kundli-matching" className="hover:text-[#D4AF37] transition-colors">Kundli Matching</Link></li>
            <li><Link to="/tools/premium-kundli" className="hover:text-[#D4AF37] transition-colors">Birth Chart</Link></li>
            <li><Link to="/tools/dasha-calculator" className="hover:text-[#D4AF37] transition-colors">Dasha Calculator</Link></li>
            <li><Link to="/tools/navamsa" className="hover:text-[#D4AF37] transition-colors">Navamsa (D9)</Link></li>
            <li><Link to="/tools/atmakaraka-darakaraka-calculator" className="hover:text-[#D4AF37] transition-colors">Darakaraka</Link></li>
            <li><Link to="/tools/panchang" className="hover:text-[#D4AF37] transition-colors">Panchang</Link></li>
          </ul>
        </div>

        {/* Column 3: Company (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-cinzel font-semibold text-xs uppercase tracking-widest text-[#D4AF37] mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs opacity-75 font-light">
            <li><Link to="/experts" className="hover:text-[#D4AF37] transition-colors">Experts</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link></li>
            <li><Link to="/press" className="hover:text-[#D4AF37] transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Hiring</Link></li>
            <li><Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#D4AF37] transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & App Store Links (Exact Vaya Footer Elements) */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-cinzel opacity-70">
        <div>
          © 2026 Astrowithin. All rights reserved. Classically grounded in Parashara Hora.
        </div>
        <div className="flex items-center gap-6 text-[#D4AF37]">
          <Link to="/download" className="hover:underline">App Store</Link>
          <Link to="/download" className="hover:underline">Google Play</Link>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
