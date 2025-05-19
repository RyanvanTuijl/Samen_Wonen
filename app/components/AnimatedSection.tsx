'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  delay?: number; // delay in ms
  threshold?: number; // 0 to 1, how much of the element should be visible
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  animation,
  delay = 0,
  threshold = 0.2,
  className = '',
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -100px 0px' // Triggers slightly before element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [once, threshold]);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'fade-in-up': 'opacity-0 translate-y-8 transition-all duration-1000',
    'fade-in-left': 'opacity-0 -translate-x-8 transition-all duration-1000',
    'fade-in-right': 'opacity-0 translate-x-8 transition-all duration-1000',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-700',
  };

  const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';

  return (
    <div
      ref={sectionRef}
      className={cn(
        animationClasses[animation],
        isVisible ? visibleClasses : '',
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
