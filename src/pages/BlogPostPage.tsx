import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BLOG_POSTS } from '../data/blogData';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related 2 articles
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121316] text-[#181716] dark:text-[#F4F1EA] font-sans selection:bg-[#B88E3E]/20 transition-colors">
      <Header />

      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#827E76] mb-8">
          <Link to="/" className="hover:text-[#B88E3E] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#B88E3E] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#181716] dark:text-white font-bold truncate max-w-xs sm:max-w-md">{post.title}</span>
        </div>

        {/* Article Header */}
        <article className="border-b border-[#EAE6DF] dark:border-white/10 pb-12 mb-12">
          
          <div className="flex items-center gap-3 text-xs font-sans mb-4">
            <span className="px-3 py-1 rounded-full bg-[#B88E3E]/10 text-[#B88E3E] dark:text-[#E5B869] font-bold uppercase tracking-widest text-[10px]">
              {post.category}
            </span>
            <span className="text-[#827E76] font-mono">{post.readTime}</span>
            <span className="text-[#827E76]">·</span>
            <span className="text-[#827E76]">{post.publishedAt}</span>
          </div>

          <div className="text-sm font-sans uppercase tracking-widest font-semibold text-[#B88E3E] dark:text-[#E5B869] mb-2">
            {post.sanskritTitle}
          </div>

          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs mb-10">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover filter grayscale contrast-105 border border-[#B88E3E]/30"
              />
              <div>
                <span className="text-sm font-bold block">{post.author.name}</span>
                <span className="text-xs text-[#B88E3E] dark:text-[#E5B869] block font-medium">{post.author.role}</span>
                <span className="text-[11px] text-[#827E76] block">{post.author.credentials}</span>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end text-xs font-mono text-[#827E76]">
              <span>Sidereal Lahiri</span>
              <span className="text-[#B88E3E]">Peer-Reviewed</span>
            </div>
          </div>

          {/* Lead Excerpt Paragraph */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50/70 dark:bg-white/[0.03] border-l-4 border-[#B88E3E] mb-10">
            <p className="font-cormorant text-xl sm:text-2xl italic leading-relaxed text-[#181716] dark:text-[#F4F1EA]">
              "{post.excerpt}"
            </p>
          </div>

          {/* Long-Form Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-base sm:text-lg leading-relaxed text-[#5A5650] dark:text-[#A09D94]">
            
            <h2 className="font-cormorant text-3xl font-bold text-[#181716] dark:text-white pt-4">
              {post.content.heading}
            </h2>

            {post.content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {post.content.subheadings && post.content.subheadings.map((sub, sIdx) => (
              <div key={sIdx} className="pt-6 space-y-3">
                <h3 className="font-cormorant text-2xl font-bold text-[#181716] dark:text-white">
                  {sub.title}
                </h3>
                <p>{sub.body}</p>
              </div>
            ))}

          </div>

          {/* Embedded Related Tool Launch Card */}
          <div className="my-12 p-8 rounded-3xl bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E3E] dark:text-[#E5B869] block mb-1">
                Practical Application
              </span>
              <h4 className="font-cormorant text-2xl font-bold">
                Apply this methodology to your birth chart
              </h4>
              <p className="text-xs text-[#827E76] mt-1 max-w-md">
                Launch our computational engine to calculate your exact planetary degrees, dignities, and houses.
              </p>
            </div>

            <Link
              to={post.relatedTool.route}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-[#1A1C20] border-2 border-[#B88E3E] dark:border-[#E5B869] text-[#B88E3E] dark:text-[#E5B869] text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#B88E3E] hover:text-white dark:hover:text-[#181716] transition-all shadow-xs hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>{post.relatedTool.action}</span>
            </Link>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-[#EAE6DF] dark:border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#827E76] mr-2">Filed under:</span>
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-white/5 border border-[#EAE6DF] dark:border-white/10 text-[#5A5650] dark:text-[#A09D94]">
                #{t}
              </span>
            ))}
          </div>

        </article>

        {/* Next / Related Guides */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-cormorant text-3xl font-bold">
              Related Research Articles
            </h3>
            <Link to="/blog" className="text-xs font-bold uppercase tracking-wider text-[#B88E3E] hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group p-6 rounded-2xl bg-white dark:bg-[#1A1C20] border border-[#EAE6DF] dark:border-white/10 shadow-xs hover:border-[#B88E3E] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B88E3E] block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="font-cormorant text-xl font-bold group-hover:text-[#B88E3E] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#827E76] line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="text-xs font-bold text-[#B88E3E] flex items-center gap-1">
                  <span>Read Guide</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};
