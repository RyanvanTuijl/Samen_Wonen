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

export default async function ForMunicipalitiesPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'for-municipalities');

  return (
    <div className="bg-white min-h-screen">      {/* Page Header */}
      <ServerPageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        backgroundImage="/images/headers/municipalities-header.png"
      />      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <AnimatedSection animation="fade-in-right">
              <div className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-5">
                {t('for_municipalities_label') || 'For Municipalities'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('section1_title')}</h2>
              <p className="text-lg text-gray-700 mb-4">{t('section1_p1')}</p>
              <p className="text-lg text-gray-700 mb-6">{t('section1_p2')}</p>
              <ButtonLink 
                href={`/${locale}/how-it-works`}
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                {t('learn_more') || 'Learn how it works'} 
              </ButtonLink>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-50 rounded-full z-0"></div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 mix-blend-overlay z-10"></div>                <ImageWithAnimation
                  src="/images/municipalities/city-planning.png" 
                  alt={t('municipality_image_alt') || 'Municipality housing program'} 
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  animation="float" 
                  className="object-cover"
                  decorationPosition="bottom-right"
                  decorationColor="primary"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,170.7C384,149,480,75,576,69.3C672,64,768,128,864,154.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <AnimatedSection animation="fade-in-up" delay={100} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">30%</div>
              <p className="text-white/80">{t('stat1_label') || 'Housing Cost Reduction'}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={200} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">85%</div>
              <p className="text-white/80">{t('stat2_label') || 'Participant Satisfaction'}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={300} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <p className="text-white/80">{t('stat3_label') || 'Successful Matches'}</p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={400} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-white/80">{t('stat4_label') || 'Partner Municipalities'}</p>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-6 transform rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,170.7C384,149,480,75,576,69.3C672,64,768,128,864,154.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </section>      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('section2_title')}</h2>
            <p className="text-xl text-gray-600">{t('benefits_subtitle') || 'How our program supports your community goals'}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-right" delay={100}>
              <div className="flex gap-5 group hover:bg-white hover:shadow-lg p-6 rounded-lg transition-all duration-300">
                <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit1_title') || 'Housing Solutions'}</h3>
                  <p className="text-gray-600">{t('benefit1')}</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200}>
              <div className="flex gap-5 group hover:bg-white hover:shadow-lg p-6 rounded-lg transition-all duration-300">
                <div className="w-14 h-14 shrink-0 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit2_title') || 'Cost Efficiency'}</h3>
                  <p className="text-gray-600">{t('benefit2')}</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="flex gap-5 group hover:bg-white hover:shadow-lg p-6 rounded-lg transition-all duration-300">
                <div className="w-14 h-14 shrink-0 bg-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit3_title') || 'Community Building'}</h3>
                  <p className="text-gray-600">{t('benefit3')}</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={400}>
              <div className="flex gap-5 group hover:bg-white hover:shadow-lg p-6 rounded-lg transition-all duration-300">
                <div className="w-14 h-14 shrink-0 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{t('benefit4_title') || 'Social Support Networks'}</h3>
                  <p className="text-gray-600">{t('benefit4')}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">            <AnimatedSection animation="fade-in-right" className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('partnership_title') || 'Partnership Model'}</h2>
              <p className="text-lg text-gray-700 mb-6">{t('partnership_desc') || 'Our flexible partnership model allows municipalities to implement home sharing programs tailored to their specific community needs and resources.'}</p>
              
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('case_study_title') || 'Success Story'}</h3>
                <p className="text-gray-700 mb-4">{t('case_study_desc') || 'The municipality of Tilburg partnered with us in 2023 and has since matched over 75 seniors with students, resulting in a 20% decrease in senior isolation reports and providing affordable housing for students.'}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center group">
                  {t('read_more') || 'Read case study'}
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
              <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedSection animation="fade-in-up" delay={100}>
                  <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow group hover:scale-105 transform duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:-translate-y-1 transform transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service1_title') || 'Program Design'}</h3>
                    <p className="text-gray-600 text-sm">{t('service1_desc') || 'We work with your team to design a home sharing program that addresses specific municipal challenges.'}</p>
                  </div>
                </AnimatedSection>
                  <AnimatedSection animation="fade-in-up" delay={200}>
                  <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow group hover:scale-105 transform duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:-translate-y-1 transform transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service2_title') || 'Matching Service'}</h3>
                    <p className="text-gray-600 text-sm">{t('service2_desc') || 'Our proprietary matching algorithm and personal approach ensures compatible and successful housing arrangements.'}</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-in-up" delay={300}>
                  <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow group hover:scale-105 transform duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:-translate-y-1 transform transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service3_title') || 'Ongoing Support'}</h3>
                    <p className="text-gray-600 text-sm">{t('service3_desc') || 'We provide continuous support to both participants and municipality partners throughout the program.'}</p>
                  </div>
                </AnimatedSection>
                
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service4_title') || 'Data & Analytics'}</h3>
                  <p className="text-gray-600 text-sm">{t('service4_desc') || 'Regular reports and insights to measure program success and community impact.'}</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service5_title') || 'Marketing Support'}</h3>
                  <p className="text-gray-600 text-sm">{t('service5_desc') || 'Materials and strategies to promote the program to your community members.'}</p>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{t('service6_title') || 'Policy Guidance'}</h3>
                  <p className="text-gray-600 text-sm">{t('service6_desc') || 'Expert guidance on housing policy and regulations to facilitate home sharing programs.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}      <CallToAction
        title={t('cta_title') || 'Ready to Transform Your Community?'}
        subtitle={t('cta_subtitle') || 'Contact us today to discuss how our home sharing program can address your municipality\'s housing and social care needs.'}
        buttonText={t('cta_button')}
        buttonLink={`/${locale}/contact`}
        variant="gradient"
        withAnimation={true}
        shape="wave"
      />
    </div>
  );
} 