import React from 'react';
import { useTranslation } from '../../i18n';
import Link from 'next/link';

export default async function ForStudentsPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'for-students');

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="relative hero-gradient text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {t('page_title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up">
            {t('page_subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">{t('section1_title')}</h2>
          <p className="text-lg text-gray-700 mb-4">{t('section1_p1')}</p>
          <p className="text-lg text-gray-700 mb-8">{t('section1_p2')}</p>
          
          <h2 className="text-3xl font-bold mb-6">{t('section2_title')}</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8">
            <li>{t('benefit1')}</li>
            <li>{t('benefit2')}</li>
            <li>{t('benefit3')}</li>
             <li>{t('benefit4')}</li>
          </ul>

          <div className="text-center mt-12">
             <Link href={`/${locale}/contact`} className="btn-primary">
               {t('cta_button')}
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 