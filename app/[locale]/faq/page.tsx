'use client';

import React from 'react';
import { useTranslation } from '../../i18n/client';
import { usePathname } from 'next/navigation';
import PageHeader from '../../components/PageHeader';
import FAQ from '../../components/FAQ';
import Link from 'next/link';

export default function FAQPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  
  // JSON-LD structured data for FAQ page (for SEO)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": locale === 'en' ? "How does the matching process work?" : "Hoe werkt het matchingproces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === 'en' 
            ? "We match students and care homes based on various criteria, including personality, interests, and availability."
            : "Wij matchen studenten en verzorgingstehuizen op basis van verschillende criteria, waaronder persoonlijkheid, interesses en beschikbaarheid."
        }
      },
      {
        "@type": "Question",
        "name": locale === 'en' ? "What are the costs for students?" : "Wat zijn de kosten voor studenten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === 'en'
            ? "Students pay a reduced rate for their room, which is significantly lower than the average rent in the city."
            : "Studenten betalen een gereduceerd tarief voor hun kamer, wat aanzienlijk lager is dan de gemiddelde huurprijs in de stad."
        }
      }
    ]
  };

  return (
    <main>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <PageHeader
        title={t('faq_title')} 
        subtitle={t('faq_subtitle') || t('faq_title')}
        backgroundImage="/images/headers/contact-header.png"
      />
      
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-primary transition-colors">
              {locale === 'en' ? 'Home' : 'Home'}
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-800 font-medium">{t('faq_title')}</span>
          </div>
        </div>
      </div>
      
      <FAQ />
      
      {/* Still Have Questions Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{locale === 'en' ? 'Still Have Questions?' : 'Nog Vragen?'}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'en' 
              ? 'If you couldn\'t find the answer to your question, feel free to contact us directly.' 
              : 'Als je het antwoord op je vraag niet kon vinden, neem dan gerust rechtstreeks contact met ons op.'}
          </p>
          <Link 
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors"
          >
            {locale === 'en' ? 'Contact Us' : 'Neem Contact Op'}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
