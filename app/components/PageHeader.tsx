'use client';

import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  tagline,
  backgroundImage = '/images/contact/contact-header.png',
  backgroundGradient = 'from-primary-600 to-primary-800',
}) => {
  return (
    <section className="relative text-white py-32 md:py-48 overflow-hidden">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${backgroundGradient} opacity-90`}></div>
      
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src={backgroundImage} 
          alt={title} 
          fill 
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative text-center z-10">
        {tagline && (
          <div className="inline-block p-2 px-5 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium">{tagline}</span>
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up opacity-90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
