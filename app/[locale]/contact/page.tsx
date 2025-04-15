import React from 'react';
import { useTranslation } from '../../i18n'; // Server-side hook

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'contact'); // Use 'contact' namespace

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

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('form_name')}</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('form_email')}</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
             <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{t('form_subject')}</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('form_message')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full btn-primary py-3"
              >
                {t('form_submit')}
              </button>
            </div>
          </form>
           <p className="mt-8 text-center text-gray-600">
            {t('alt_contact_info')}
          </p>
        </div>
      </section>
    </div>
  );
} 