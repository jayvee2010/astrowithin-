import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CelestialCanvas } from '../components/CelestialCanvas';
import { CustomCursor } from '../components/CustomCursor';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  badge,
  children,
}) => {
  return (
    <div className="relative min-h-screen custom-cursor-none flex flex-col justify-between">
      <CelestialCanvas />
      <CustomCursor />
      <Header />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex-grow">
        {/* Breadcrumb / Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vedic-gold/15 border border-vedic-gold/30 text-amber-300 text-xs font-serif uppercase tracking-widest mb-4">
            <span>◈</span>
            <span>{badge}</span>
          </div>
        )}

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg font-light mb-10 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-8">{children}</div>
      </main>

      <Footer />
    </div>
  );
};
