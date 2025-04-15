'use client'; // Needs to be client for useParams, but data fetching is tricky

import React from 'react';
import { useParams, notFound } from 'next/navigation'; 
import Image from 'next/image';
import Link from 'next/link';
// Assuming Navigation is outside [locale]
import Navigation from '../../../components/Navigation'; 
import ScrollToTop from '../../../components/ScrollToTop';
// Assuming blog data is outside [locale]
import { blogPostsData } from '../../../data/blogPostsData'; 
import ReactMarkdown from 'react-markdown'; // Import react-markdown

// Note: It's generally better practice to fetch data in Server Components.
// Making this a client component for useParams makes data fetching less ideal.
// A more robust solution might involve passing data from a server component parent
// or using server actions/API routes for fetching based on ID.

export default function BlogPostPage() {
  const params = useParams();
  const locale = params.locale as string; // Get locale from params
  const postId = parseInt(params.id as string, 10);

  // Find the blog post by ID (simple client-side find)
  const post = blogPostsData.find((p) => p.id === postId);

  // If post is not found, use Next.js notFound utility
  if (!post) {
    notFound();
  }

  // TODO: Add translations for this page if needed (e.g., "By", "Back to Latest News")
  // const { t } = useTranslation(locale, 'blog'); // Example

  return (
    <>
      {/* Render navigation - it handles its own locale now */}
      <Navigation /> 
      <main className="min-h-screen pt-20 bg-white"> {/* Added pt-20 assuming fixed nav */}
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
          {/* Post Header */}
          <div className="mb-10 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              {/* TODO: Translate "By" */}
              <span>By {post.author}</span> 
            </div>
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px" 
                priority 
              />
            </div>
          </div>

          {/* Post Content using ReactMarkdown */} 
          {/* Apply prose styles for typography from @tailwindcss/typography */}
          <article className="prose lg:prose-lg max-w-none text-gray-700">
            <ReactMarkdown>
              {post.content} 
            </ReactMarkdown>
          </article>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
             {/* Link back to the homepage section */}
            <Link href={`/${locale}/#latest-news`} className="text-primary hover:underline">
              {/* TODO: Translate */}
              &larr; Back to Latest News 
            </Link>
          </div>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
} 