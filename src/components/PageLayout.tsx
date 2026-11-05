import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';

interface PageLayoutProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  maxWidth?: string;
  breadcrumbs?: { label: string; href?: string }[];
  rightElement?: React.ReactNode;
  headerBorder?: boolean;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  badge,
  maxWidth = 'max-w-5xl',
  breadcrumbs,
  rightElement,
  headerBorder = false,
  children,
}) => {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-[#181716] dark:text-[#F4F1EA] font-sans selection:bg-[#B88E3E]/20 selection:text-[#181716] dark:selection:text-[#F4F1EA] transition-colors duration-300 flex flex-col justify-between">
      <CustomCursor />
      <Header />

      <main className={`relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8 ${maxWidth} mx-auto w-full flex-grow`}>
        {/* Breadcrumb Navigation */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol role="list" className="flex min-w-0 items-center gap-2 text-sm font-medium">
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <li className="text-[#827E76] dark:text-[#827E76]">/</li>}
                  <li>
                    {crumb.href ? (
                      <a href={crumb.href} className="text-[#827E76] hover:text-[#181716] dark:hover:text-white transition-colors">
                        {crumb.label}
                      </a>
                    ) : (
                      <span className="text-[#181716] dark:text-white font-semibold" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        {/* Header Section */}
        {(title || rightElement) && (
          <header className={`mb-12 ${headerBorder ? 'border-b border-[#EAE6DF] dark:border-white/10 pb-8 md:pb-10' : ''}`}>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                {badge && (
                  <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-4 flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                      <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
                    </svg>
                    <span>{badge}</span>
                  </div>
                )}
                {title && (
                  <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181716] dark:text-[#F4F1EA] tracking-tight mb-4">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="text-[#5A5650] dark:text-[#A09D94] text-base sm:text-lg font-normal max-w-3xl leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>
              {rightElement && (
                <div className="hidden lg:flex items-center">
                  {rightElement}
                </div>
              )}
            </div>
          </header>
        )}

        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
};
