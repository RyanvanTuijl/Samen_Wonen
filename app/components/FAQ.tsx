'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/client';
import { usePathname } from 'next/navigation';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs_nl: FAQItem[] = [
  {
    question: "Hoe werkt het matchingproces?",
    answer: "Wij matchen studenten en verzorgingstehuizen op basis van verschillende criteria, waaronder persoonlijkheid, interesses en beschikbaarheid. We organiseren kennismakingsgesprekken en zorgen voor een soepele overgang.",
    category: "algemeen"
  },
  {
    question: "Wat zijn de kosten voor studenten?",
    answer: "Studenten betalen een gereduceerd tarief voor hun kamer, wat aanzienlijk lager is dan de gemiddelde huurprijs in de stad. De exacte kosten variëren per locatie en voorzieningen.",
    category: "studenten"
  },
  {
    question: "Wat zijn de voordelen voor verzorgingstehuizen?",
    answer: "Verzorgingstehuizen profiteren van extra sociale interactie, hulp bij activiteiten, en een levendigere sfeer. Studenten dragen bij aan het dagelijks leven en kunnen helpen met kleine taken.",
    category: "verzorgingstehuizen"
  },
  {
    question: "Hoe lang duurt een verblijf?",
    answer: "De minimale verblijfsduur is één semester, maar de meeste studenten blijven langer. We streven naar langdurige matches die voor beide partijen waardevol zijn.",
    category: "algemeen"
  },
  {
    question: "Wat zijn de verplichtingen van studenten?",
    answer: "Studenten zijn verplicht om deel te nemen aan sociale activiteiten en minimaal 4 uur per week te besteden aan het helpen van bewoners. Dit kan variëren van gezelschap tot hulp bij activiteiten.",
    category: "studenten"
  },
  {
    question: "Hoe wordt de veiligheid gewaarborgd?",
    answer: "Alle studenten ondergaan een screening en referentiecheck. Daarnaast hebben verzorgingstehuizen hun eigen veiligheidsprotocollen en is er altijd professioneel personeel aanwezig.",
    category: "verzorgingstehuizen"
  },
  {
    question: "Welke ondersteuning bieden jullie aan studenten?",
    answer: "We bieden oriëntatie, regelmatige check-ins, training en toegang tot ons gemeenschapsnetwerk. Onze coördinatoren zijn altijd beschikbaar voor vragen en ondersteuning tijdens je verblijf.",
    category: "studenten"
  },
  {
    question: "Welke ondersteuning bieden jullie aan ouderen?",
    answer: "We bieden begeleiding bij het hele proces, van het kiezen van een geschikte student tot het opstellen van huisregels en het bevorderen van een goede relatie. We blijven beschikbaar voor advies en ondersteuning.",
    category: "ouderen"
  }
];

const faqs_en: FAQItem[] = [
  {
    question: "How does the matching process work?",
    answer: "We match students and care homes based on various criteria, including personality, interests, and availability. We organize meet and greet sessions and ensure a smooth transition.",
    category: "general"
  },
  {
    question: "What are the costs for students?",
    answer: "Students pay a reduced rate for their room, which is significantly lower than the average rent in the city. The exact costs vary by location and amenities.",
    category: "students"
  },
  {
    question: "What are the benefits for care homes?",
    answer: "Care homes benefit from extra social interaction, help with activities, and a livelier atmosphere. Students contribute to daily life and can help with small tasks.",
    category: "carehomes"
  },
  {
    question: "How long does a stay last?",
    answer: "The minimum stay duration is one semester, but most students stay longer. We strive for long-term matches that are valuable for both parties.",
    category: "general"
  },
  {
    question: "What are the obligations of students?",
    answer: "Students are obligated to participate in social activities and spend at least 4 hours per week helping residents. This can vary from companionship to help with activities.",
    category: "students"
  },
  {
    question: "How is safety ensured?",
    answer: "All students undergo a screening and reference check. In addition, care homes have their own safety protocols and there is always professional staff present.",
    category: "carehomes"
  },
  {
    question: "What support do you offer to students?",
    answer: "We provide orientation, regular check-ins, training, and access to our community network. Our coordinators are always available for questions and support during your stay.",
    category: "students"
  },
  {
    question: "What support do you offer to seniors?",
    answer: "We provide guidance throughout the entire process, from selecting a suitable student to establishing house rules and fostering a good relationship. We remain available for advice and support.",
    category: "seniors"
  }
];

export default function FAQ() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>([]);

  // Choose the correct FAQ list based on locale
  const faqs = locale === 'en' ? faqs_en : faqs_nl;
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(
        faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (faq.category && faq.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredFaqs(filtered);
    }
  }, [searchTerm, faqs]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-center mb-6">{t('faq_title')}</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{t('faq_subtitle')}</p>
        
        {/* Search box */}
        <div className="mb-8 relative max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={locale === 'en' ? "Search in FAQs..." : "Zoeken in veelgestelde vragen..."}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setSearchTerm('')}
            >
              <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
          {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            className={`px-4 py-2 rounded-full ${searchTerm === '' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSearchTerm('')}
          >
            {locale === 'en' ? "All" : "Alle"}
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${searchTerm === (locale === 'en' ? 'students' : 'studenten') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSearchTerm(locale === 'en' ? 'students' : 'studenten')}
          >
            {locale === 'en' ? "For Students" : "Voor Studenten"}
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${searchTerm === (locale === 'en' ? 'seniors' : 'ouderen') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSearchTerm(locale === 'en' ? 'seniors' : 'ouderen')}
          >
            {locale === 'en' ? "For Seniors" : "Voor Ouderen"}
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${searchTerm === (locale === 'en' ? 'carehomes' : 'verzorgingstehuizen') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSearchTerm(locale === 'en' ? 'carehomes' : 'verzorgingstehuizen')}
          >
            {locale === 'en' ? "For Care Homes" : "Voor Verzorgingstehuizen"}
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${searchTerm === (locale === 'en' ? 'general' : 'algemeen') ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}
            onClick={() => setSearchTerm(locale === 'en' ? 'general' : 'algemeen')}
          >
            {locale === 'en' ? "General" : "Algemeen"}
          </button>
        </div>
        
        {/* FAQs list */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-4 md:p-6 text-left transition-colors
                             ${openIndex === index ? 'bg-primary-50' : 'bg-white hover:bg-neutral-50'}`}
                >
                  <span className="text-lg font-semibold text-neutral-800">{faq.question}</span>
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                                   ${openIndex === index ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-neutral-100 text-neutral-600'}`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                 >
                  <div className={`p-4 md:p-6 bg-white border-t border-neutral-100 ${openIndex === index ? 'border-primary-100' : ''}`}>
                    <p className="text-neutral-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">
                {locale === 'en' 
                  ? `No results found for "${searchTerm}". Please try another search term.` 
                  : `Geen resultaten gevonden voor "${searchTerm}". Probeer een andere zoekterm.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}