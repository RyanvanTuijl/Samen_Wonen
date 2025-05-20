import React from 'react';
import { useTranslation } from '../../i18n';
import Link from 'next/link';
import Image from 'next/image';
import ServerPageHeader from '../../components/ServerPageHeader';
import FeatureCard from '../../components/FeatureCard';
import TestimonialCard from '../../components/TestimonialCard';
import CallToAction from '../../components/CallToAction';
import AnimatedSection from '../../components/AnimatedSection';
import ButtonLink from '../../components/ButtonLink';
import ImageWithAnimation from '../../components/ImageWithAnimation';

export default async function ForStudentsPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'for-students');
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        backgroundImage="/images/headers/students-header.png"
      />
      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
              <div className="inline-block py-1 px-3 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-5">
                {t('for_students_label') || 'For Students'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('section1_title')}</h2>
              <p className="text-lg text-gray-700 mb-4">{t('section1_p1')}</p>
              <p className="text-lg text-gray-700 mb-6">{t('section1_p2')}</p>
              <ButtonLink 
                href={`/${locale}/how-it-works`}
                variant="ghost"
                className="text-primary-600 hover:text-primary-700 inline-flex items-center"
              >
                {t('learn_more') || 'Learn how it works'} 
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </ButtonLink>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200} className="order-1 lg:order-2 relative">
              <ImageWithAnimation 
                src="/images/students/student-housing.png" 
                alt={t('student_image_alt') || 'Student in home sharing program'} 
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                animation="float"
                decorationPosition="bottom-right"
                decorationColor="primary"
                containerClassName="h-80 md:h-96 rounded-xl overflow-hidden shadow-xl relative"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('section2_title') || 'Benefits for You'}</h2>
            <p className="text-xl text-gray-600">{t('benefits_subtitle') || 'Join our program and enjoy these advantages'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              title={t('benefit1_title') || 'Affordable Housing'}
              description={t('benefit1') || 'Live affordably in exchange for volunteer work with residents in care facilities.'}
              iconColor="text-primary-500"
            >
              <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </FeatureCard>

            <FeatureCard 
              title={t('benefit2_title') || 'Cultural Exchange'}
              description={t('benefit2') || 'Gain valuable life experience and social skills through intergenerational connections.'}
              iconColor="text-secondary-500"
            >
              <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5M8 3.935V5.5A2.5 2.5 0 016 8a2.5 2.5 0 01-2.5 2.5H3m19.5 0H15" />
              </svg>
            </FeatureCard>

            <FeatureCard 
              title={t('benefit3_title') || 'Practical Support'}
              description={t('benefit3') || 'Access to mentorship, local knowledge, and a supportive home environment.'}
              iconColor="text-accent-500"
            >
              <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </FeatureCard>

            <FeatureCard 
              title={t('benefit4_title') || 'Community Connection'}
              description={t('benefit4') || 'Be part of an innovative community that creates meaningful relationships.'}
              iconColor="text-green-500"
            >
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </FeatureCard>
          </div>
        </div>
      </section>      
      
      {/* Featured Opportunities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('featured_title') || 'Featured Opportunities'}</h2>
            <p className="text-xl text-gray-600">{t('featured_subtitle') || 'Current home sharing options available for students'}</p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Opportunity Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="block text-sm font-semibold mb-2 uppercase tracking-wider">Amsterdam</span>
                    <h3 className="text-2xl font-bold mb-1">{t('featured1_title') || 'De Zonnehoek Care Home'}</h3>
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">{t('featured1_commitment') || '10 hours weekly'}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{t('featured1_location') || 'Jordaan District'}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{t('featured1_desc') || 'Modern care facility with 45 residents. Private room with bathroom and access to shared kitchen. Located near public transportation and university.'}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-800">{t('featured_expectations') || 'Volunteer Activities'}</span>
                  <ul className="mt-2 text-sm text-gray-700">
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured1_exp1') || 'Social activities with residents'}
                    </li>
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured1_exp2') || 'Technology assistance program'}
                    </li>
                  </ul>
                </div>
                
                <ButtonLink 
                  href={`/${locale}/contact?opportunity=amsterdam-jordaan`}
                  variant="primary"
                  className="w-full"
                >
                  {t('featured_apply') || 'Apply Now'}
                </ButtonLink>
              </div>
            </div>
              {/* Opportunity Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="block text-sm font-semibold mb-2 uppercase tracking-wider">Utrecht</span>
                    <h3 className="text-2xl font-bold mb-1">{t('featured2_title') || 'Vredeburg Elderly Home'}</h3>
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">{t('featured2_commitment') || '8 hours weekly'}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{t('featured2_location') || 'Wittevrouwen District'}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{t('featured2_desc') || 'Smaller facility housing 30 residents with beautiful garden grounds. Furnished room provided with shared common areas. 15 minutes to the university by bicycle.'}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-800">{t('featured_expectations') || 'Volunteer Activities'}</span>
                  <ul className="mt-2 text-sm text-gray-700">
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured2_exp1') || 'Garden maintenance assistance'}
                    </li>
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured2_exp2') || 'Lead weekly reading groups'}
                    </li>
                  </ul>
                </div>
                
                <ButtonLink 
                  href={`/${locale}/contact?opportunity=utrecht-wittevrouwen`}
                  variant="secondary"
                  className="w-full"
                >
                  {t('featured_apply') || 'Apply Now'}
                </ButtonLink>
              </div>
            </div>
              {/* Opportunity Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="block text-sm font-semibold mb-2 uppercase tracking-wider">Rotterdam</span>
                    <h3 className="text-2xl font-bold mb-1">{t('featured3_title') || 'Riverside Care Center'}</h3>
                    <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">{t('featured3_commitment') || '12 hours weekly'}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">{t('featured3_location') || 'Kralingen District'}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{t('featured3_desc') || 'Modern care center with 60 residents, featuring newly renovated student accommodation. Located in a lively area with cafes, shops, and excellent public transportation nearby.'}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-800">{t('featured_expectations') || 'Volunteer Activities'}</span>
                  <ul className="mt-2 text-sm text-gray-700">
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured3_exp1') || 'Creative arts workshops'}
                    </li>
                    <li className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {t('featured3_exp2') || 'Mealtime assistance program'}
                    </li>
                  </ul>
                </div>
                
                <ButtonLink 
                  href={`/${locale}/contact?opportunity=rotterdam-kralingen`}
                  variant="accent"
                  className="w-full"
                >
                  {t('featured_apply') || 'Apply Now'}
                </ButtonLink>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <ButtonLink 
              href={`/${locale}/opportunities`}
              variant="ghost"
              className="text-gray-700 hover:text-gray-900"
            >
              {t('featured_view_all') || 'View All Available Opportunities'} 
              <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </ButtonLink>
          </div>
        </div>
      </section>      
      
      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('stats_title') || 'Our Impact By Numbers'}</h2>
            <p className="text-xl text-gray-600">{t('stats_subtitle') || 'See how our program is making a difference'}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{t('stats_value1') || '150+'}</div>
              <p className="text-gray-700 font-medium">{t('stats_label1') || 'Student Matches'}</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-2">{t('stats_value2') || '65%'}</div>
              <p className="text-gray-700 font-medium">{t('stats_label2') || 'Average Rent Savings'}</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">{t('stats_value3') || '25+'}</div>
              <p className="text-gray-700 font-medium">{t('stats_label3') || 'Partner Universities'}</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t('stats_value4') || '95%'}</div>
              <p className="text-gray-700 font-medium">{t('stats_label4') || 'Student Satisfaction'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('testimonials_title') || 'Student Experiences'}</h2>
            <p className="text-xl text-gray-600">{t('testimonials_subtitle') || 'Hear from students who found their perfect match'}</p>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard 
              name="Lisa"
              role={t('student_role') || 'Student'}
              quote={t('testimonial1_quote') || 'Finding this home sharing program changed my university experience completely. Not only did I find affordable housing, but I gained a mentor and friend.'}
              imageSrc="/images/contact/testimonials/testimonial1.jpg"
              className="border-primary-100"
            />

            <TestimonialCard 
              name="Thomas"
              role={t('student_role') || 'Student'}
              quote={t('testimonial2_quote') || 'As an international student, I was worried about finding accommodation. Thanks to this program, I found a welcoming home where I could practice the language and learn about local culture.'}
              imageSrc="/images/contact/testimonials/testimonial2.jpg"
              className="border-secondary-100"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('how_it_works_title') || 'How It Works For Students'}</h2>
              <p className="text-xl text-gray-600">{t('how_it_works_subtitle') || 'Getting started is easy with our simple process'}</p>
            </div>
            
            <ol className="relative border-l border-primary-200">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full -left-5 ring-4 ring-white text-primary-600 font-bold">1</span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-800">{t('step1_title') || 'Create Your Profile'}</h3>
                <p className="mb-4 text-lg text-gray-600">{t('step1_desc') || 'Sign up and complete your profile with your preferences, lifestyle, and needs.'}</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full -left-5 ring-4 ring-white text-primary-600 font-bold">2</span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-800">{t('step2_title') || 'Get Matched'}</h3>
                <p className="mb-4 text-lg text-gray-600">{t('step2_desc') || 'Our team will match you with compatible seniors based on your mutual preferences.'}</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full -left-5 ring-4 ring-white text-primary-600 font-bold">3</span>                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-800">{t('step3_title') || 'Meet & Connect'}</h3>
                <p className="mb-4 text-lg text-gray-600">{t('step3_desc') || 'Meet potential housemates in a safe environment to determine if it is a good match.'}</p>
              </li>              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full -left-5 ring-4 ring-white text-primary-600 font-bold">4</span>
                <h3 className="flex items-center mb-2 text-xl font-bold text-gray-800">{t('step4_title') || 'Move In & Thrive'}</h3>
                <p className="mb-4 text-lg text-gray-600">{t('step4_desc') || 'Finalize agreements with our support, move in, and begin your home sharing journey.'}</p>
              </li>
            </ol>
          </div>
        </div>
      </section>          
      
      {/* Student Resources Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('resources_title') || 'Student Resources'}</h2>
              <p className="text-xl text-gray-600">{t('resources_subtitle') || 'Helpful information to make the most of your experience'}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Resource Card 1 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{t('resource1_title') || 'Student Handbook'}</h3>
                </div>
                <p className="text-gray-700 mb-4">{t('resource1_desc') || 'Our comprehensive guide to intergenerational home sharing programs, expectations, and best practices.'}</p>
                <ButtonLink 
                  href={`/${locale}/resources/student-handbook`}
                  variant="ghost"
                  className="text-primary-600 hover:text-primary-700"
                >
                  {t('resource_download') || 'Download PDF'} 
                  <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </ButtonLink>
              </div>
              
              {/* Resource Card 2 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{t('resource2_title') || 'Events Calendar'}</h3>
                </div>
                <p className="text-gray-700 mb-4">{t('resource2_desc') || 'Stay up-to-date with orientation sessions, community gatherings, and program-wide events.'}</p>
                <ButtonLink 
                  href={`/${locale}/events`}
                  variant="ghost"
                  className="text-secondary-600 hover:text-secondary-700"
                >
                  {t('resource_view_calendar') || 'View Calendar'} 
                  <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ButtonLink>
              </div>
              
              {/* Resource Card 3 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-100 text-accent-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{t('resource3_title') || 'Application Checklist'}</h3>
                </div>
                <p className="text-gray-700 mb-4">{t('resource3_desc') || 'Everything you need to prepare for a successful application to our home sharing program.'}</p>
                <ButtonLink 
                  href={`/${locale}/resources/application-checklist`}
                  variant="ghost"
                  className="text-accent-600 hover:text-accent-700"
                >
                  {t('resource_view_checklist') || 'View Checklist'} 
                  <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </ButtonLink>
              </div>
              
              {/* Resource Card 4 */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{t('resource4_title') || 'Financial Aid Options'}</h3>
                </div>
                <p className="text-gray-700 mb-4">{t('resource4_desc') || 'Information on scholarships, grants and other financial resources available to program participants.'}</p>
                <ButtonLink 
                  href={`/${locale}/resources/financial-aid`}
                  variant="ghost"
                  className="text-green-600 hover:text-green-700"
                >
                  {t('resource_explore_options') || 'Explore Options'} 
                  <svg className="w-5 h-5 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('faq_title') || 'Frequently Asked Questions'}</h2>
            <p className="text-xl text-gray-600">{t('faq_subtitle') || 'Find answers to common questions about our student program'}</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{t('faq1_question') || 'What are the requirements to join?'}</h3>
                  <span className="bg-primary-50 text-primary-600 rounded-full p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4 text-gray-700">
                  <p>{t('faq1_answer') || 'To join our program, you need to be enrolled in a recognized educational institution, pass our screening process, and be willing to commit at least 4-5 hours per week to engage with your senior housemate.'}</p>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{t('faq2_question') || 'How much money can I save on rent?'}</h3>
                  <span className="bg-primary-50 text-primary-600 rounded-full p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4 text-gray-700">
                  <p>{t('faq2_answer') || 'Students in our program typically save 50-70% compared to market-rate housing in the same area. Some arrangements may even offer rent-free accommodations in exchange for more involvement.'}</p>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{t('faq3_question') || 'What kind of support will I receive?'}</h3>
                  <span className="bg-primary-50 text-primary-600 rounded-full p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4 text-gray-700">
                  <p>{t('faq3_answer') || 'Our team provides ongoing support including orientation, regular check-ins, conflict resolution, and community events. We\'re always available to help ensure a positive experience for both you and your senior housemate.'}</p>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 md:p-6 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{t('faq4_question') || 'How long does the matching process take?'}</h3>
                  <span className="bg-primary-50 text-primary-600 rounded-full p-1.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4 text-gray-700">
                  <p>{t('faq4_answer') || 'The matching process typically takes 2-4 weeks from application to move-in. This includes screening, interviews, match suggestions, in-person meetings, and finalizing agreements. We take time to ensure quality matches that work for everyone involved.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - Custom with white button */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16 overflow-hidden relative my-12 rounded-xl">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              {t('cta_title') || 'Ready to Find Your Perfect Match?'}
            </h2>
            
            <p className="text-xl mb-8 text-white/90 animate-fade-in-up">
              {t('cta_subtitle') || 'Join our program today and discover affordable housing with a personal connection.'}
            </p>
            
            <div className="animate-bounce-subtle">
              <ButtonLink 
                href={`/${locale}/contact`}
                variant="outline"
                size="lg"
                className="shadow-lg hover:shadow-xl bg-white text-primary-600 border-white"
              >
                {t('cta_button') || 'Apply Now'}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
