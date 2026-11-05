import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Birth Chart Guides', 'Love & Synastry', 'Planets & Dashas', 'Houses & Bhavas'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  // Featured Hero Article (First featured post or first item)
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  // Next 3 items for the grid
  const gridPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug).slice(0, 3);

  return (
    <section
      id="blog"
      aria-label="Astrowithin Vedic Astrology Journal"
      className="px-6 sm:px-12 py-20 sm:py-24 border-b border-[#EAE6DF] dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: Authentic Vaya Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EAE6DF] dark:border-white/10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-2.5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#B88E3E] dark:text-[#E5B869]" fill="currentColor">
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/>
              </svg>
              <span>05 · Vedic Astrology Journal</span>
            </div>
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Insights for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                clarity, timing & self-inquiry.
              </span>
            </h2>
          </div>

          <p className="text-base text-[#5A5650] dark:text-[#A09D94] font-normal max-w-sm leading-relaxed">
            In-depth guides on Parashari Jyotish, Kundli interpretation, and synastry authored by accredited faculty.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-10 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#181716] dark:bg-white text-white dark:text-[#181716] shadow-xs'
                    : 'bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-[#827E76] hover:text-[#181716] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FEATURED CORNERSTONE GUIDE BANNER */}
        {selectedCategory === 'All' && (
          <div className="mb-12">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3 text-xs font-sans">
                      <span className="px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] font-bold uppercase tracking-widest text-[10px]">
                        Cornerstone Guide
                      </span>
                      <span className="text-[#827E76] font-mono">{featuredPost.readTime}</span>
                      <span className="text-[#827E76]">·</span>
                      <span className="text-[#827E76]">{featuredPost.publishedAt}</span>
                    </div>

                    <div className="text-xs font-sans uppercase tracking-wider font-semibold text-[#B88E3E] dark:text-[#E5B869] mb-1.5">
                      {featuredPost.sanskritTitle}
                    </div>

                    <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Author Bio & Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#EAE6DF] dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover filter grayscale contrast-105"
                      />
                      <div>
                        <span className="text-xs font-bold block">{featuredPost.author.name}</span>
                        <span className="text-[11px] text-[#827E76] block">{featuredPost.author.credentials}</span>
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>

                {/* Right Visual Accent / Tag Matrix */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.02] border border-[#EAE6DF] dark:border-white/10 flex flex-col justify-between">
                  <div className="text-xs uppercase font-bold tracking-widest text-[#827E76] mb-3">
                    Key Jyotish Topics
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-xs font-sans text-[#5A5650] dark:text-[#A09D94]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10">
                    <div className="text-[10px] text-[#827E76] uppercase font-semibold">Related Calculation Engine</div>
                    <div className="text-xs font-bold text-[#181716] dark:text-white mt-0.5">{featuredPost.relatedTool.name}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 3-COLUMN EDITORIAL ARTICLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gridPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group p-7 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869]">
                    {post.category}
                  </span>
                  <span className="font-mono text-[#827E76] text-[11px]">{post.readTime}</span>
                </div>

                <div className="text-[11px] text-[#827E76] font-sans mb-1">
                  {post.sanskritTitle}
                </div>

                <h3 className="font-cormorant text-2xl font-bold leading-snug mb-3 group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover filter grayscale contrast-105"
                  />
                  <div className="truncate">
                    <span className="text-xs font-bold block truncate">{post.author.name}</span>
                    <span className="text-[10px] text-[#827E76] block truncate">{post.publishedAt}</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#B88E3E] dark:text-[#E5B869] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Articles Action */}
        <div className="text-center pt-8 border-t border-[#EAE6DF] dark:border-white/10 flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>View All Editorial Articles ({BLOG_POSTS.length})</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
