import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  maxWidth?: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  badge,
  maxWidth = 'max-w-5xl',
  headerRight,
  children,
}) => {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-[#181716] dark:text-[#F4F1EA] font-sans selection:bg-[#B88E3E]/20 selection:text-[#181716] dark:selection:text-[#F4F1EA] transition-colors duration-300 flex flex-col justify-between">
      <CustomCursor />
      <Header />

      <main className={`relative z-10 pt-28 pb-24 px-4 sm:px-8 lg:px-12 ${maxWidth} mx-auto w-full flex-grow`}>
        {/* Unboxed Kicker on Top of Header (Consistent with Landing Page Pattern) */}
        {badge && (
          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-4 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
            </svg>
            <span>{badge}</span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#EAE6DF] dark:border-white/10">
          <div className="max-w-4xl">
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#181716] dark:text-[#F4F1EA] tracking-tight mb-4 leading-[1.05]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-[#5A5650] dark:text-[#A09D94] text-base sm:text-lg lg:text-xl font-normal max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {headerRight && (
            <div className="flex-shrink-0">
              {headerRight}
            </div>
          )}
        </div>

        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
};
