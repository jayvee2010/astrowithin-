import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Birth Chart Guides',
    'Love & Synastry',
    'Planets & Dashas',
    'Houses & Bhavas',
    'Yogas & Remedials',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-[#181716] dark:text-[#F4F1EA] font-sans selection:bg-[#B88E3E]/20 transition-colors">
      <Header />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
        
        {/* Page Breadcrumbs & Header */}
        <div className="mb-12 pb-8 border-b border-[#EAE6DF] dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#827E76] mb-4">
            <Link to="/" className="hover:text-[#B88E3E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181716] dark:text-white font-bold">Blog</span>
          </div>

          <div className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-[#B88E3E] dark:text-[#E5B869] mb-3 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z"/></svg>
            <span>Astrowithin Research Publications & Editorial</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Classical Jyotish <br />
                <span className="italic font-normal text-[#B88E3E] dark:text-[#E5B869]">
                  Journal & Editorial Guides.
                </span>
              </h1>
            </div>

            <p className="text-base text-[#5A5650] dark:text-[#A09D94] max-w-md leading-relaxed">
              Exhaustive research papers, natal chart methodologies, and synastry analyses written by our accredited faculty.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#EAE6DF] dark:border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-sans font-bold uppercase tracking-wider whitespace-nowrap">
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

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, yogas, tags..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 text-xs text-[#181716] dark:text-white placeholder-[#827E76] focus:outline-none focus:border-[#B88E3E] transition-all"
            />
            <svg
              className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#827E76]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* ARTICLES GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-[#B88E3E] dark:hover:border-[#E5B869] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[#827E76] text-[11px]">{post.readTime}</span>
                  </div>

                  <div className="text-[11px] text-[#827E76] font-sans mb-1.5">
                    {post.sanskritTitle}
                  </div>

                  <h2 className="font-cormorant text-2xl sm:text-3xl font-bold leading-tight mb-3 group-hover:text-[#B88E3E] dark:group-hover:text-[#E5B869] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5A5650] dark:text-[#A09D94] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-neutral-100 dark:bg-white/5 text-[#827E76]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#EAE6DF] dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover filter grayscale contrast-105"
                    />
                    <div>
                      <span className="text-xs font-bold block">{post.author.name}</span>
                      <span className="text-[10px] text-[#827E76] block">{post.publishedAt}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] dark:text-[#E5B869] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="font-cormorant text-3xl font-bold mb-2">No publications found</h3>
            <p className="text-xs text-[#827E76] mb-6">Try searching for other terms like "Navamsa", "Dasha", or "Marriage".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-full border border-[#B88E3E] text-[#B88E3E] text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};
