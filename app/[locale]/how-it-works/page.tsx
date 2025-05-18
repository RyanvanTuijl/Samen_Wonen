import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../i18n'; // Server-side hook
import Link from 'next/link';

// Updated Steps Data with new icon SVGs (inline for now)
const steps = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    titleKey: 'step1_title',
    descKey: 'step1_desc',
    detailsKey: 'step1_details',
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    titleKey: 'step2_title',
    descKey: 'step2_desc',
    detailsKey: 'step2_details',
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    titleKey: 'step3_title',
    descKey: 'step3_desc',
    detailsKey: 'step3_details',
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titleKey: 'step4_title',
    descKey: 'step4_desc',
    detailsKey: 'step4_details',
  },
  {
    id: 5,
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364L3 9m0 0l1.5.545m0 6.205l3 1m-3-1L2.25 9" />
       </svg>
    ),
    titleKey: 'step5_title',
    descKey: 'step5_desc',
    detailsKey: 'step5_details',
  },
];

export default async function HowItWorksPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'how-it-works');

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">      {/* Page Header */}      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pattern"></div>        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 animate-fade-in tracking-tight">
            {t('page_title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in-up opacity-90">
            {t('page_subtitle')}
          </p>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 space-y-20 md:space-y-28">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`group flex flex-col md:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon/Image */}
              <div className="w-full md:w-2/5 flex justify-center animate-fade-in transition-transform duration-500 group-hover:scale-105">
                <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center p-6 shadow-xl border-4 border-white">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative text-primary transition-transform duration-500 group-hover:scale-110">
                      {step.icon} 
                   </div>
                </div>
              </div>              {/* Text Content */}
              <div className="w-full md:w-3/5 text-center md:text-left animate-fade-in-up">
                <span className="text-base font-semibold text-primary uppercase tracking-wider mb-2 inline-block">{t('step_label', { count: step.id })}</span>                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-5">
                  {t(step.titleKey)}
                </h2>
                <p className="text-lg text-gray-700 mb-5 leading-relaxed">{t(step.descKey)}</p>
                <p className="text-gray-500 leading-relaxed">{t(step.detailsKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>      {/* Ongoing Support Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="relative w-64 h-64 bg-white rounded-full flex items-center justify-center p-6 shadow-xl border-4 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-70"></div>
                <div className="relative text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{t('ongoing_support_title')}</h2>
              <p className="text-lg text-gray-700 mb-5 leading-relaxed">{t('ongoing_support_desc')}</p>
              <p className="text-gray-500 leading-relaxed">{t('ongoing_support_details')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">{t('benefits_title')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
             <div className="card bg-white/80 backdrop-blur-md p-8 md:p-10 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
               <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">{t('benefits_students_title')}</h3>
               <ul className="list-none space-y-4">
                 {[1, 2, 3, 4, 5].map(i => (
                   <li key={i} className="flex items-start">
                     <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                     <span className="text-gray-700 text-lg">{t(`benefits_students_item${i}`)}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div className="card bg-white/80 backdrop-blur-md p-8 md:p-10 hover:border-secondary/40 transition-all duration-300 transform hover:-translate-y-1">
               <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">{t('benefits_seniors_title')}</h3>
               <ul className="list-none space-y-4">
                 {[1, 2, 3, 4, 5].map(i => (
                   <li key={i} className="flex items-start">
                     <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                     <span className="text-gray-700 text-lg">{t(`benefits_seniors_item${i}`)}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>
        {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">{t('testimonials_title')}</h2>
          <div className="max-w-2xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl shadow-lg p-8 md:p-10 relative">
              <div className="flex items-center mb-6">
                <div className="relative w-20 h-20 mr-4">
                  <Image
                    src="/Lisa.png"
                    alt="Student"
                    fill
                    className="object-cover rounded-full border-2 border-primary"
                  />
                </div>
                <div className="relative w-20 h-20 -ml-6">
                  <Image
                    src="/Jansen.png"
                    alt="Senior"
                    fill
                    className="object-cover rounded-full border-2 border-secondary"
                  />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{t('testimonial1_name')}</h3>
              </div>
              <div className="grid gap-4">
                <blockquote className="p-4 bg-white/80 rounded-lg border-l-4 border-primary italic">
                  "{t('testimonial1_student')}"
                  <div className="mt-2 text-sm text-gray-500">- Lisa, Student</div>
                </blockquote>
                <blockquote className="p-4 bg-white/80 rounded-lg border-l-4 border-secondary italic">
                  "{t('testimonial1_senior')}"
                  <div className="mt-2 text-sm text-gray-500">- Mrs. Jansen, Senior</div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">{t('faq_title')}</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">{t(`faq${i}_question`)}</h3>
                <p className="text-gray-600">{t(`faq${i}_answer`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('commitment_title')}</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{t('commitment_desc')}</p>
        </div>
      </section>

       {/* Call to Action */}
       <section className="py-24 text-center bg-white">
         <div className="container mx-auto px-6">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('cta_title')}</h2>
           <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto">{t('cta_subtitle')}</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href={`/${locale}/contact`} className="btn-primary px-10 py-4 text-lg">
               {t('cta_button_contact')}
             </Link>
             {/* Ensure FAQ page exists and link works */}
             <Link href={`/${locale}/faq`} className="btn-secondary px-10 py-4 text-lg">
               {t('cta_button_faq')}
             </Link>
           </div>
         </div>
       </section>
    </div>
  );
} 