'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/client';
import { usePathname } from 'next/navigation';

interface StatItem {
  value: number;
  labelKey: string;
  suffix?: string;
  color?: string;
}

const statsData: StatItem[] = [
  { value: 150, labelKey: 'stat_matches', suffix: '+', color: 'text-primary-600' },
  { value: 25, labelKey: 'stat_homes', color: 'text-accent-600' },
  { value: 95, labelKey: 'stat_satisfaction', suffix: '%', color: 'text-secondary-600' },
  { value: 2500, labelKey: 'stat_hours', suffix: '+', color: 'text-primary-600' }
];

function AnimatedCounter({ value, suffix, color = 'text-primary-600' }: { value: number, suffix?: string, color?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(Math.round(stepValue * currentStep));
        currentStep++;
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div ref={counterRef} className="transform transition-all duration-500 hover:scale-105">
      <div className="inline-flex items-baseline">
        <span className={`text-4xl md:text-5xl font-bold ${color}`}>{count}</span>
        {suffix && (
          <span className={`text-4xl md:text-5xl font-bold ${color}`}>{suffix}</span>
        )}
      </div>
    </div>
  );
}

export default function Statistics() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.labelKey} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
              <p className="mt-2 text-neutral-600 font-medium">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}