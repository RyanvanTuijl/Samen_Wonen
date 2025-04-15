 'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation'; // Import notFound
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import ScrollToTop from '../../components/ScrollToTop';
import { blogPostsData } from '../data/blogPostsData';

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string, 10);

  // Find the blog post by ID
  const post = blogPostsData.find((p) => p.id === postId);

  // If post is not found, use Next.js notFound utility
  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Post Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px" // Adjusted sizes
                priority // Load image faster as it's above the fold
              />
            </div>
          </div>

          {/* Post Content - Basic rendering */}
          {/* Consider using react-markdown for richer content formatting */}
          <article className="prose lg:prose-xl max-w-none">
            {/* Split content by double newlines for paragraphs */}
            {post.content.split(/\n\s*\n/).map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </article>

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/#latest-news" className="text-primary hover:underline">
              &larr; Back to Latest News
            </Link>
          </div>
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
