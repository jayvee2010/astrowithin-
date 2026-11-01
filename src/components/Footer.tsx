import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-t from-vedic-darkVoid via-vedic-deepSky to-vedic-darkVoid/90 border-t border-vedic-gold/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-300">
      
      {/* Returning to Earth: Warm Horizon Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-vedic-gold/60 to-transparent shadow-[0_0_15px_#D4AF37]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-vedic-gold/15">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full border border-vedic-gold/40 flex items-center justify-center bg-vedic-crimson/20">
              <span className="text-vedic-gold text-lg">◈</span>
            </div>
            <span className="font-display text-2xl tracking-wider text-slate-100 font-bold">
              ASTROWITHIN
            </span>
          </Link>
          <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
            The authentic Parashari Vedic astrology platform. Traditional wisdom, verified lineage, zero superstition.
          </p>
          <div className="flex items-center gap-3 text-xs text-vedic-gold font-serif">
            <span>iOS App</span> · <span>Android App</span> · <span>Web Suite</span>
          </div>
        </div>

        {/* Column 1: Astrology (Blog, Houses, Planets, Transits, Nakshatras, Signs, Yogas, Wiki) */}
        <div>
          <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-vedic-gold mb-4">
            Astrology
          </h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link to="/blog" className="hover:text-vedic-gold transition-colors">Blog</Link></li>
            <li><Link to="/astrology/houses" className="hover:text-vedic-gold transition-colors">Houses (Bhavas)</Link></li>
            <li><Link to="/astrology/planets" className="hover:text-vedic-gold transition-colors">Planets (Navagrahas)</Link></li>
            <li><Link to="/astrology/transits" className="hover:text-vedic-gold transition-colors">Transits (Gochara)</Link></li>
            <li><Link to="/astrology/nakshatras" className="hover:text-vedic-gold transition-colors">Nakshatras (27 Stars)</Link></li>
            <li><Link to="/astrology/zodiac-signs" className="hover:text-vedic-gold transition-colors">Signs (12 Rashis)</Link></li>
            <li><Link to="/astrology/yogas" className="hover:text-vedic-gold transition-colors">Yogas (Auspicious Combinations)</Link></li>
            <li><Link to="/wiki" className="hover:text-vedic-gold transition-colors">Wiki & Knowledgebase</Link></li>
          </ul>
        </div>

        {/* Column 2: Popular tools (Marriage Prediction, Kundli Matching, Birth Chart, Dasha Calculator, Navamsa, Darakaraka, Panchang) */}
        <div>
          <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-vedic-gold mb-4">
            Popular Tools
          </h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link to="/tools/marriage-prediction" className="hover:text-vedic-gold transition-colors">Marriage Prediction</Link></li>
            <li><Link to="/tools/kundli-matching" className="hover:text-vedic-gold transition-colors">Kundli Matching</Link></li>
            <li><Link to="/tools/premium-kundli" className="hover:text-vedic-gold transition-colors">Birth Chart</Link></li>
            <li><Link to="/tools/dasha-calculator" className="hover:text-vedic-gold transition-colors">Dasha Calculator</Link></li>
            <li><Link to="/tools/navamsa" className="hover:text-vedic-gold transition-colors">Navamsa (D9)</Link></li>
            <li><Link to="/tools/atmakaraka-darakaraka-calculator" className="hover:text-vedic-gold transition-colors">Darakaraka</Link></li>
            <li><Link to="/tools/panchang" className="hover:text-vedic-gold transition-colors">Panchang</Link></li>
          </ul>
        </div>

        {/* Column 3: Company (Experts, Contact, Press, Hiring, Terms, Privacy, Refund Policy) */}
        <div>
          <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-vedic-gold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-xs font-light">
            <li><Link to="/experts" className="hover:text-vedic-gold transition-colors">Experts</Link></li>
            <li><Link to="/contact" className="hover:text-vedic-gold transition-colors">Contact</Link></li>
            <li><Link to="/press" className="hover:text-vedic-gold transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-vedic-gold transition-colors">Hiring</Link></li>
            <li><Link to="/terms" className="hover:text-vedic-gold transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-vedic-gold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-vedic-gold transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Copyright & Bottom Social / App Links */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <div>
          © {new Date().getFullYear()} Astrowithin. All rights reserved. Classically grounded in Parashara Hora.
        </div>
        <div className="flex items-center gap-6 text-vedic-gold">
          <Link to="/download" className="hover:underline">App Store</Link>
          <Link to="/download" className="hover:underline">Google Play</Link>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>

    </footer>
  );
};
