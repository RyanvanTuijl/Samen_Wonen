'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import Statistics from '../components/Statistics';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import InteractiveMap from '../components/Map';
import RoleSelection from '../components/RoleSelection';
import Image from 'next/image';
import { useTranslation as useClientTranslation } from '../i18n/client';

export default function Home() {
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useClientTranslation(locale, 'common');
  const [showRoleSelection, setShowRoleSelection] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user has already selected a role
    const userRole = Cookies.get('userRole');
    setShowRoleSelection(!userRole);
    setIsLoading(false);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }
  
  if (showRoleSelection) {
    return <RoleSelection />;
  }

  return (
    <>
      <Navigation isHome={true} />
      <main className="min-h-screen">
        {/* Hero Section with gradient background */}
        <section className="relative hero-gradient text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
                {t('hero_title')}
              </h1>
              <p className="text-2xl md:text-3xl mb-12 leading-relaxed animate-fade-in-up">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
                <Link href={`/${locale}/how-it-works`} className="btn-primary">
                  {t('hero_cta1')}
                </Link>
                <Link href={`/${locale}/contact`} className="btn-secondary">
                  {t('hero_cta2')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <Statistics />

        {/* How it Works Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">{t('how_it_works_title')}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="card group">
                <div className="number-circle mb-8 group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="section-subtitle">{t('how_it_works_step1_title')}</h3>
                <p className="text-gray-600">
                  {t('how_it_works_step1_desc')}
                </p>
              </div>
              <div className="card group">
                <div className="number-circle mb-8 group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="section-subtitle">{t('how_it_works_step2_title')}</h3>
                <p className="text-gray-600">
                  {t('how_it_works_step2_desc')}
                </p>
              </div>
              <div className="card group">
                <div className="number-circle mb-8 group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="section-subtitle">{t('how_it_works_step3_title')}</h3>
                <p className="text-gray-600">
                  {t('how_it_works_step3_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <InteractiveMap />

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center">{t('testimonials_title')}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="testimonial-card group">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-full mr-6 overflow-hidden">
                    <Image 
                      src="/Lisa.png" 
                      alt="Lisa" 
                      width={160} 
                      height={160} 
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Lisa</h3>
                    <p className="text-gray-600">Student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">
                  {t('testimonial1_quote')}
                </p>
              </div>
              <div className="testimonial-card group">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-full mr-6 overflow-hidden">
                    <Image 
                      src="/Jansen.png" 
                      alt="Mevrouw Jansen" 
                      width={160} 
                      height={160} 
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Mevrouw Jansen</h3>
                    <p className="text-gray-600">Bewoner</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg">
                  {t('testimonial2_quote')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <Blog />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-24 hero-gradient text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="section-title text-white">{t('cta_title')}</h2>
            <p className="text-2xl mb-12 max-w-2xl mx-auto">
              {t('cta_subtitle')}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('cta_button')}
            </Link>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  );
}