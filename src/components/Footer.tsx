import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0F0D0C] border-t border-[#CFAF83]/15 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#A69E94]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#CFAF83]/15">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full border border-[#CFAF83]/40 flex items-center justify-center bg-[#1F1C18]">
              <span className="text-[#CFAF83] text-sm font-serif">◈</span>
            </div>
            <span className="font-serif text-xl tracking-[0.2em] text-[#F7F4EE] font-semibold">
              ASTROWITHIN
            </span>
          </Link>
          <p className="text-xs text-[#A69E94] font-light leading-relaxed mb-6 max-w-xs">
            The authentic Parashari Vedic astrology platform. Traditional wisdom, verified lineage, zero superstition.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#CFAF83] font-serif">
            <span>iOS App</span> · <span>Android App</span> · <span>Web Suite</span>
          </div>
        </div>

        {/* Column 1: Astrology */}
        <div>
          <h4 className="font-serif font-semibold text-xs uppercase tracking-wider text-[#F7F4EE] mb-4">
            Astrology
          </h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li><Link to="/blog" className="hover:text-[#E07A2E] transition-colors">Blog</Link></li>
            <li><Link to="/astrology/houses" className="hover:text-[#E07A2E] transition-colors">Houses (Bhavas)</Link></li>
            <li><Link to="/astrology/planets" className="hover:text-[#E07A2E] transition-colors">Planets (Navagrahas)</Link></li>
            <li><Link to="/astrology/transits" className="hover:text-[#E07A2E] transition-colors">Transits (Gochara)</Link></li>
            <li><Link to="/astrology/nakshatras" className="hover:text-[#E07A2E] transition-colors">Nakshatras (27 Stars)</Link></li>
            <li><Link to="/astrology/zodiac-signs" className="hover:text-[#E07A2E] transition-colors">Signs (12 Rashis)</Link></li>
            <li><Link to="/astrology/yogas" className="hover:text-[#E07A2E] transition-colors">Yogas (Auspicious Combinations)</Link></li>
            <li><Link to="/wiki" className="hover:text-[#E07A2E] transition-colors">Wiki & Knowledgebase</Link></li>
          </ul>
        </div>

        {/* Column 2: Popular Tools */}
        <div>
          <h4 className="font-serif font-semibold text-xs uppercase tracking-wider text-[#F7F4EE] mb-4">
            Popular Tools
          </h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li><Link to="/tools/marriage-prediction" className="hover:text-[#E07A2E] transition-colors">Marriage Prediction</Link></li>
            <li><Link to="/tools/kundli-matching" className="hover:text-[#E07A2E] transition-colors">Kundli Matching</Link></li>
            <li><Link to="/tools/premium-kundli" className="hover:text-[#E07A2E] transition-colors">Birth Chart</Link></li>
            <li><Link to="/tools/dasha-calculator" className="hover:text-[#E07A2E] transition-colors">Dasha Calculator</Link></li>
            <li><Link to="/tools/navamsa" className="hover:text-[#E07A2E] transition-colors">Navamsa (D9)</Link></li>
            <li><Link to="/tools/atmakaraka-darakaraka-calculator" className="hover:text-[#E07A2E] transition-colors">Darakaraka</Link></li>
            <li><Link to="/tools/panchang" className="hover:text-[#E07A2E] transition-colors">Panchang</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-serif font-semibold text-xs uppercase tracking-wider text-[#F7F4EE] mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs font-light">
            <li><Link to="/experts" className="hover:text-[#E07A2E] transition-colors">Experts</Link></li>
            <li><Link to="/contact" className="hover:text-[#E07A2E] transition-colors">Contact</Link></li>
            <li><Link to="/press" className="hover:text-[#E07A2E] transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-[#E07A2E] transition-colors">Hiring</Link></li>
            <li><Link to="/terms" className="hover:text-[#E07A2E] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#E07A2E] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#E07A2E] transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright & Bottom Links */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A69E94] gap-4">
        <div>
          © {new Date().getFullYear()} Astrowithin. All rights reserved. Classically grounded in Parashara Hora.
        </div>
        <div className="flex items-center gap-6 text-[#CFAF83]">
          <Link to="/download" className="hover:text-[#E07A2E] transition-colors">App Store</Link>
          <Link to="/download" className="hover:text-[#E07A2E] transition-colors">Google Play</Link>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#E07A2E] transition-colors">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E07A2E] transition-colors">Instagram</a>
        </div>
      </div>

    </footer>
  );
};
