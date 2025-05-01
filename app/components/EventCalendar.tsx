'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';

// Tijdelijke data structuur voor evenementen
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

// Voorbeeld evenementen data (later te vervangen door echte data)
const eventsData: Event[] = [
  {
    id: 1,
    title: 'Open Huis Dag',
    date: '2024-02-15',
    time: '14:00 - 17:00',
    location: 'Amsterdam Centrum',
    description: 'Kom kennismaken met beschikbare woningen in het centrum van Amsterdam.'
  },
  {
    id: 2,
    title: 'Student Housing Fair',
    date: '2024-02-20',
    time: '10:00 - 16:00',
    location: 'Rotterdam Ahoy',
    description: 'Grote huisvestingsbeurs voor studenten met verschillende aanbieders.'
  },
  // Meer evenementen kunnen hier worden toegevoegd
];

export default function EventCalendar() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Filter evenementen voor de geselecteerde maand
  const filteredEvents = eventsData.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth.getMonth();
  });

  const changeMonth = (increment: number) => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() + increment);
    setSelectedMonth(newDate);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center group mb-12">{t('events_calendar_title')}</h2>
        
        {/* Maand Navigatie */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => changeMonth(-1)}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            &larr; {t('previous_month')}
          </button>
          <h3 className="text-xl font-semibold">
            {selectedMonth.toLocaleString(locale, { month: 'long', year: 'numeric' })}
          </h3>
          <button
            onClick={() => changeMonth(1)}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            {t('next_month')} &rarr;
          </button>
        </div>

        {/* Evenementen Lijst */}
        <div className="grid gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-medium">{new Date(event.date).toLocaleDateString(locale)}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{event.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">{t('no_events_this_month')}</p>
          )}
        </div>
      </div>
    </section>
  );
}