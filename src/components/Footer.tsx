import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#EAE6DF] dark:border-white/10 pt-20 pb-16 px-4 sm:px-8 lg:px-12 bg-white/50 dark:bg-[#121316] transition-colors">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#EAE6DF] dark:border-white/10">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-5 group">
            <div className="w-10 h-10 border border-[#B88E3E] rounded-xl flex items-center justify-center p-2 bg-white dark:bg-[#1A1C20] shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#B88E3E]" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="50" cy="50" r="45" strokeDasharray="2 2" opacity="0.8" />
                <polygon points="50,10 90,80 10,80" stroke="#B88E3E" strokeWidth="2.5" />
                <polygon points="50,90 90,20 10,20" stroke="#B88E3E" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="5" fill="#B88E3E" />
              </svg>
            </div>
            <div>
              <span className="font-cormorant text-2xl font-bold tracking-[0.12em] block leading-none">
                ASTROWITHIN
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60 block mt-1 font-medium">
                Parashari Vedic Astrology
              </span>
            </div>
          </Link>
          <p className="text-sm text-[#5A5650] dark:text-[#A09D94] font-normal leading-relaxed mb-6 max-w-xs">
            The authentic Parashari Vedic astrology platform. Traditional wisdom, verified lineage, zero superstition.
          </p>
          <div className="flex items-center gap-3 text-xs font-sans font-semibold tracking-wider text-[#B88E3E] dark:text-[#E5B869]">
            <span>iOS App</span> · <span>Android App</span> · <span>Web Suite</span>
          </div>
        </div>

        {/* Column 1: Astrology (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-5">
            Astrology
          </h4>
          <ul className="space-y-3 text-sm text-[#5A5650] dark:text-[#A09D94] font-normal">
            <li><Link to="/blog" className="hover:text-[#181716] dark:hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/astrology/houses" className="hover:text-[#181716] dark:hover:text-white transition-colors">Houses (Bhavas)</Link></li>
            <li><Link to="/astrology/planets" className="hover:text-[#181716] dark:hover:text-white transition-colors">Planets (Navagrahas)</Link></li>
            <li><Link to="/astrology/transits" className="hover:text-[#181716] dark:hover:text-white transition-colors">Transits (Gochara)</Link></li>
            <li><Link to="/astrology/nakshatras" className="hover:text-[#181716] dark:hover:text-white transition-colors">Nakshatras (27 Stars)</Link></li>
            <li><Link to="/astrology/zodiac-signs" className="hover:text-[#181716] dark:hover:text-white transition-colors">Signs (12 Rashis)</Link></li>
            <li><Link to="/astrology/yogas" className="hover:text-[#181716] dark:hover:text-white transition-colors">Yogas (Auspicious Combinations)</Link></li>
            <li><Link to="/wiki" className="hover:text-[#181716] dark:hover:text-white transition-colors">Wiki & Knowledgebase</Link></li>
          </ul>
        </div>

        {/* Column 2: Popular Tools (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-5">
            Popular Tools
          </h4>
          <ul className="space-y-3 text-sm text-[#5A5650] dark:text-[#A09D94] font-normal">
            <li><Link to="/tools/marriage-prediction" className="hover:text-[#181716] dark:hover:text-white transition-colors">Marriage Prediction</Link></li>
            <li><Link to="/tools/kundli-matching" className="hover:text-[#181716] dark:hover:text-white transition-colors">Kundli Matching</Link></li>
            <li><Link to="/tools/premium-kundli" className="hover:text-[#181716] dark:hover:text-white transition-colors">Birth Chart</Link></li>
            <li><Link to="/tools/dasha-calculator" className="hover:text-[#181716] dark:hover:text-white transition-colors">Dasha Calculator</Link></li>
            <li><Link to="/tools/navamsa" className="hover:text-[#181716] dark:hover:text-white transition-colors">Navamsa (D9)</Link></li>
            <li><Link to="/tools/atmakaraka-darakaraka-calculator" className="hover:text-[#181716] dark:hover:text-white transition-colors">Darakaraka</Link></li>
            <li><Link to="/tools/panchang" className="hover:text-[#181716] dark:hover:text-white transition-colors">Panchang</Link></li>
          </ul>
        </div>

        {/* Column 3: Company (Exact Vaya Directory Links) */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#B88E3E] dark:text-[#E5B869] mb-5">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-[#5A5650] dark:text-[#A09D94] font-normal">
            <li><Link to="/experts" className="hover:text-[#181716] dark:hover:text-white transition-colors">Experts</Link></li>
            <li><Link to="/contact" className="hover:text-[#181716] dark:hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/press" className="hover:text-[#181716] dark:hover:text-white transition-colors">Press</Link></li>
            <li><Link to="/contact" className="hover:text-[#181716] dark:hover:text-white transition-colors">Hiring</Link></li>
            <li><Link to="/terms" className="hover:text-[#181716] dark:hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#181716] dark:hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#181716] dark:hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright & App Store Links (Exact Vaya Footer Elements) */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#827E76] font-medium">
        <div>
          © 2026 Astrowithin. All rights reserved. Classically grounded in Parashara Hora.
        </div>
        <div className="flex items-center gap-6 text-[#181716] dark:text-[#F4F1EA] font-semibold">
          <Link to="/download" className="hover:text-[#B88E3E] transition-colors">App Store</Link>
          <Link to="/download" className="hover:text-[#B88E3E] transition-colors">Google Play</Link>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#B88E3E] transition-colors">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#B88E3E] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
