'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface ImageWithAnimationProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  animation?: 'float' | 'pulse' | 'bounce' | 'zoom' | 'rotate' | 'none';
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  decorationPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
  decorationColor?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

export default function ImageWithAnimation({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  animation = 'none',
  className = '',
  containerClassName = '',
  priority = false,
  decorationPosition = 'none',
  decorationColor = 'primary'
}: ImageWithAnimationProps) {
  
  // Animation classes
  const animationClasses = {
    float: 'animate-bounce-subtle',
    pulse: 'animate-pulse-subtle',
    bounce: 'hover:animate-[bounce_1s_ease-in-out]',
    zoom: 'transform transition-transform duration-500 hover:scale-105',
    rotate: 'transform transition-transform duration-500 hover:rotate-2',
    none: '',
  };

  // Decoration color classes
  const decorationColorClasses = {
    primary: 'bg-primary-50',
    secondary: 'bg-secondary-50',
    accent: 'bg-accent-50',
    neutral: 'bg-gray-100',
  };

  // Decoration position classes
  const getDecorationStyles = () => {
    switch (decorationPosition) {
      case 'top-left':
        return 'absolute -top-6 -left-6 w-40 h-40 rounded-full z-0';
      case 'top-right':
        return 'absolute -top-6 -right-6 w-40 h-40 rounded-full z-0';
      case 'bottom-left':
        return 'absolute -bottom-6 -left-6 w-40 h-40 rounded-full z-0';
      case 'bottom-right':
        return 'absolute -bottom-6 -right-6 w-40 h-40 rounded-full z-0';
      default:
        return '';
    }
  };

  return (
    <div className={cn('relative', containerClassName)}>
      {/* Decoration element */}
      {decorationPosition !== 'none' && (
        <div className={cn(getDecorationStyles(), decorationColorClasses[decorationColor])}></div>
      )}
      
      {/* Image with animation */}
      <div className={cn('relative z-10', animationClasses[animation])}>
        {fill ? (
          <div className="relative w-full h-full">            <Image 
              src={src} 
              alt={alt} 
              fill={true}
              sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
              className={cn('object-cover', className)}
              priority={priority}
            />
          </div>
        ) : (          <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
            sizes={sizes}
            className={className}
            priority={priority}
          />
        )}
      </div>
    </div>
  );
}
