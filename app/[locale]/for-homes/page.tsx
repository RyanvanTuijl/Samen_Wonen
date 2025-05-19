import React from 'react';
import { useTranslation } from '../../i18n';
import Link from 'next/link';
import Image from 'next/image';
import ServerPageHeader from '../../components/ServerPageHeader';
import FeatureCard from '../../components/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard';
import CallToAction from '../../components/CallToAction';
import AnimatedSection from '../../components/AnimatedSection';
import ImageWithAnimation from '../../components/ImageWithAnimation';
import ButtonLink from '../../components/ButtonLink';

export default async function ForHomesPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'for-homes');

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        backgroundImage="/images/headers/homes-header.png"
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <AnimatedSection animation="fade-in-right" className="order-2 lg:order-1">
              <div className="inline-block py-1 px-3 rounded-full bg-accent-50 text-accent-600 font-medium text-sm mb-5">
                {t('for_homes_label') || 'For Care Homes'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('section1_title')}</h2>
              <p className="text-lg text-gray-700 mb-4">{t('section1_p1')}</p>
              <p className="text-lg text-gray-700 mb-6">{t('section1_p2')}</p>
              <div className="flex flex-wrap gap-4">                <ButtonLink 
                  href={`/${locale}/how-it-works`}
                  variant="outline"
                  className="text-accent-600 border-accent-600 hover:bg-accent-50"
                >
                  {t('learn_more') || 'Learn how it works'} 
                </ButtonLink>
                <ButtonLink 
                  href={`/${locale}/contact`}
                  variant="ghost"
                  className="text-primary-600"
                >
                  {t('request_info') || 'Request information'} 
                </ButtonLink>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" className="order-1 lg:order-2 relative">              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-50 rounded-full z-0"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-50 rounded-full z-0"></div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-20 mix-blend-overlay z-10"></div>                <ImageWithAnimation 
                  src="/images/seniors/seniors-companion.png" 
                  alt={t('care_home_image_alt') || 'Care home residents enjoying company'} 
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  animation="float"
                  className="object-cover"
                  decorationPosition="bottom-right"
                  decorationColor="accent"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('section2_title')}</h2>
            <p className="text-xl text-gray-600">{t('benefits_subtitle') || 'Partner with us to enhance the quality of life in your community'}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-accent-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit1_title') || 'Enhanced Social Interaction'}</h3>
                    <p className="text-gray-600">{t('benefit1')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit2_title') || 'Innovative Care Solutions'}</h3>
                    <p className="text-gray-600">{t('benefit2')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit3_title') || 'Improved Well-being'}</h3>
                    <p className="text-gray-600">{t('benefit3')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit4_title') || 'Community Integration'}</h3>
                    <p className="text-gray-600">{t('benefit4')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('process_title') || 'Implementation Process'}</h2>
            <p className="text-xl text-gray-600">{t('process_subtitle') || 'How we work with care homes to implement our program'}</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <AnimatedSection animation="fade-in-up" delay={100} className="relative">
              <div className="absolute top-0 right-6 h-0.5 w-full bg-accent-100 hidden md:block"></div>              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl absolute -top-6 left-6 z-10">
                1
              </div><div className="p-6 bg-white rounded-xl shadow border border-gray-100 pt-10 transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('process_step1_title') || 'Initial Consultation'}</h3>
                <p className="text-gray-600">{t('process_step1_desc') || 'We meet with your team to understand your facility\'s needs and discuss how our program can be tailored to your residents.'}</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={300} className="relative">
              <div className="absolute top-0 right-6 h-0.5 w-full bg-accent-100 hidden md:block"></div>              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl absolute -top-6 left-6 z-10">
                2
              </div>
              <div className="p-6 bg-white rounded-xl shadow border border-gray-100 pt-10 transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('process_step2_title') || 'Customized Planning'}</h3>
                <p className="text-gray-600">{t('process_step2_desc') || 'We develop a customized implementation plan, including selecting suitable residents and determining appropriate student participation.'}</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={500} className="relative">              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center font-bold text-accent-600 text-xl absolute -top-6 left-6 z-10">
                3
              </div>
              <div className="p-6 bg-white rounded-xl shadow border border-gray-100 pt-10 transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t('process_step3_title') || 'Ongoing Support'}</h3>
                <p className="text-gray-600">{t('process_step3_desc') || 'We provide continuous support, regular check-ins, and evaluations to ensure the program remains beneficial for all parties.'}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title={t('cta_title') || 'Partner With Us Today'}
        subtitle={t('cta_subtitle') || 'Enhance the quality of life in your care home with our intergenerational living program.'}
        buttonText={t('cta_button')}
        buttonLink={`/${locale}/contact`}
        variant="accent" 
        withAnimation={true}
        shape="wave"
      />
    </div>
  );
}