'use client';

import React, { useState } from 'react';
import { useTranslation } from '../i18n/client';
import { usePathname } from 'next/navigation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs_nl: FAQItem[] = [
  {
    question: "Hoe werkt het matchingproces?",
    answer: "Wij matchen studenten en verzorgingstehuizen op basis van verschillende criteria, waaronder persoonlijkheid, interesses en beschikbaarheid. We organiseren kennismakingsgesprekken en zorgen voor een soepele overgang."
  },
  {
    question: "Wat zijn de kosten voor studenten?",
    answer: "Studenten betalen een gereduceerd tarief voor hun kamer, wat aanzienlijk lager is dan de gemiddelde huurprijs in de stad. De exacte kosten variëren per locatie en voorzieningen."
  },
  {
    question: "Wat zijn de voordelen voor verzorgingstehuizen?",
    answer: "Verzorgingstehuizen profiteren van extra sociale interactie, hulp bij activiteiten, en een levendigere sfeer. Studenten dragen bij aan het dagelijks leven en kunnen helpen met kleine taken."
  },
  {
    question: "Hoe lang duurt een verblijf?",
    answer: "De minimale verblijfsduur is één semester, maar de meeste studenten blijven langer. We streven naar langdurige matches die voor beide partijen waardevol zijn."
  },
  {
    question: "Wat zijn de verplichtingen van studenten?",
    answer: "Studenten zijn verplicht om deel te nemen aan sociale activiteiten en minimaal 4 uur per week te besteden aan het helpen van bewoners. Dit kan variëren van gezelschap tot hulp bij activiteiten."
  },
  {
    question: "Hoe wordt de veiligheid gewaarborgd?",
    answer: "Alle studenten ondergaan een screening en referentiecheck. Daarnaast hebben verzorgingstehuizen hun eigen veiligheidsprotocollen en is er altijd professioneel personeel aanwezig."
  }
];

const faqs_en: FAQItem[] = [
  {
    question: "How does the matching process work?",
    answer: "We match students and care homes based on various criteria, including personality, interests, and availability. We organize meet and greet sessions and ensure a smooth transition."
  },
  {
    question: "What are the costs for students?",
    answer: "Students pay a reduced rate for their room, which is significantly lower than the average rent in the city. The exact costs vary by location and amenities."
  },
  {
    question: "What are the benefits for care homes?",
    answer: "Care homes benefit from extra social interaction, help with activities, and a livelier atmosphere. Students contribute to daily life and can help with small tasks."
  },
  {
    question: "How long does a stay last?",
    answer: "The minimum stay duration is one semester, but most students stay longer. We strive for long-term matches that are valuable for both parties."
  },
  {
    question: "What are the obligations of students?",
    answer: "Students are obligated to participate in social activities and spend at least 4 hours per week helping residents. This can vary from companionship to help with activities."
  },
  {
    question: "How is safety ensured?",
    answer: "All students undergo a screening and reference check. In addition, care homes have their own safety protocols and there is always professional staff present."
  }
];

export default function FAQ() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'faq');

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title text-center mb-12">{t('faq_title')}</h2>
        <div className="space-y-4">
          {faqs_nl.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
               >
                <div className="p-4 md:p-6 bg-white border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 