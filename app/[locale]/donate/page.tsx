import React from 'react';
import { useTranslation } from '../../i18n';
import ServerPageHeader from '../../components/ServerPageHeader';
import AnimatedSection from '../../components/AnimatedSection';
import ButtonLink from '../../components/ButtonLink';

export default async function DonatePage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'donate');

  const donationOptions = [
    {
      amount: t('donation_option1_amount'),
      title: t('donation_option1_title'),
      description: t('donation_option1_desc'),
    },
    {
      amount: t('donation_option2_amount'),
      title: t('donation_option2_title'),
      description: t('donation_option2_desc'),
    },
    {
      amount: t('donation_option3_amount'),
      title: t('donation_option3_title'),
      description: t('donation_option3_desc'),
    },
    {
      amount: t('donation_option4_amount'),
      title: t('donation_option4_title'),
      description: t('donation_option4_desc'),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('page_title')}
        subtitle={t('page_subtitle')}
        backgroundImage="/images/headers/donate-header.png"
      />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('section1_title')}</h2>
            <p className="text-lg text-gray-600 mb-4">{t('section1_p1')}</p>
            <p className="text-lg text-gray-600">{t('section1_p2')}</p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Donation Options */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationOptions.map((option, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in-up"
                delay={index * 0.1}
                className="h-full"
              >
                <div className="bg-white rounded-xl border p-6 transition-all duration-200 shadow-sm hover:shadow-md h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary-600">{option.amount}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                  <ButtonLink href="#donate-form" variant="primary" className="w-full mt-auto">
                    {t('donate_button')}
                  </ButtonLink>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={0.4} className="mt-8">
            <div className="bg-white rounded-xl border p-6 transition-all duration-200 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('donation_option_custom')}</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="number"
                  min="1"
                  placeholder="€"
                  className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
                />
                <ButtonLink href="#donate-form" variant="primary">
                  {t('donate_button')}
                </ButtonLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Donation Form */}
      <section id="donate-form" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl border p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">{t('donate_button')}</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount (€)</label>
                  <input type="number" min="1" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all" />
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    {t('donate_button')}
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  This is a demonstration page. In a production environment, this would connect to a secure payment processor.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Thank You Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-600">{t('thankyou_title')}</h2>
            <p className="text-lg text-gray-600">{t('thankyou_message')}</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
