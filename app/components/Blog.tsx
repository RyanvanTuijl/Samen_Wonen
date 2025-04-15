'use client'; // Make this a client component to use pathname

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { blogPostsData } from '../[locale]/data/blogPostsData';
import { useTranslation } from '../i18n/client'; // Import client hook

export default function Blog() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl'; // Extract locale
  const { t } = useTranslation(locale, 'common'); // Use common namespace for now

  return (
    <section id="latest-news" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center group mb-12">{t('blog_section_title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article key={post.id} className="card group">
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/${locale}/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  {t('blog_read_more')}
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 