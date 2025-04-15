'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/client';
import { usePathname } from 'next/navigation';

interface StatItem {
  value: number;
  labelKey: string;
  suffix?: string;
}

const statsData: StatItem[] = [
  { value: 150, labelKey: 'stat_matches', suffix: '+' },
  { value: 25, labelKey: 'stat_homes' },
  { value: 95, labelKey: 'stat_satisfaction', suffix: '%' },
  { value: 2500, labelKey: 'stat_hours', suffix: '+' }
];

function AnimatedCounter({ value }: { value: number }) {
  return <span className="text-4xl md:text-5xl font-bold text-primary">{value}</span>;
}

export default function Statistics() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.labelKey} className="p-4">
              <span className="text-4xl md:text-5xl font-bold text-primary">
                {stat.value}{stat.suffix}
              </span>
              <p className="mt-2 text-gray-600 font-medium">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 