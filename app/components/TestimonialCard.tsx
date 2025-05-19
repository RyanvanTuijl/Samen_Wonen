'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  imageSrc?: string;
  rating?: number;
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
  sizes?: string; // Added sizes prop for Next.js image optimization
}

export default function TestimonialCard({
  quote,
  name,
  role,
  imageSrc,
  rating = 5,
  colorScheme = 'primary',
  className,
  sizes
}: TestimonialCardProps) {
  
  // Color classes
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      light: 'text-primary-400',
      border: 'border-primary-100',
      text: 'text-primary-600'
    },
    secondary: {
      bg: 'bg-secondary-50',
      light: 'text-secondary-400',
      border: 'border-secondary-100',
      text: 'text-secondary-600'
    },
    accent: {
      bg: 'bg-accent-50',
      light: 'text-accent-400',
      border: 'border-accent-100',
      text: 'text-accent-600'
    },
    neutral: {
      bg: 'bg-gray-50',
      light: 'text-gray-400',
      border: 'border-gray-200',
      text: 'text-gray-600'
    }
  };

  const { bg, light, border, text } = colorClasses[colorScheme];

  return (
    <div className={cn(
      "flex flex-col bg-white rounded-xl shadow-md p-6 mb-4 border",
      border,
      className
    )}>
      {/* Quote marks */}
      <div className={cn("mb-4", light)}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Quote text */}
      <p className="text-gray-700 mb-6 flex-grow">
        "{quote}"
      </p>
      
      {/* Author info */}
      <div className="flex items-center">
        {imageSrc && (
          <div className="mr-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={`${name}'s profile`}
                fill={true}
                sizes={sizes || "(max-width: 768px) 100vw, 33vw"}
                className="object-cover"
              />
            </div>
          </div>
        )}
        <div>
          <p className="font-bold text-gray-800">{name}</p>
          {role && <p className="text-sm text-gray-600">{role}</p>}
        </div>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="ml-auto">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className={cn("w-4 h-4", i < rating ? "text-yellow-400" : "text-gray-300")}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}