import React from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';
import ButtonLink from './ButtonLink';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'gradient' | 'light' | 'dark' | 'accent';
  shape?: 'rounded' | 'wave';
  withPattern?: boolean;
  withAnimation?: boolean;
  buttonClassName?: string; // Add new prop for button customization
}

const CallToAction: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = 'gradient',
  shape = 'rounded',
  withPattern = true,
  withAnimation = true,
  buttonClassName = '' // Default to empty string
}) => {
  // Variant styles
  const variantStyles = {
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-700 text-white',
    light: 'bg-gray-50 text-gray-800',
    dark: 'bg-gray-900 text-white',
    accent: 'bg-gradient-to-r from-secondary-500 to-secondary-700 text-white',
  };

  // Button variant based on CTA variant
  const buttonVariant = () => {
    switch(variant) {
      case 'gradient':
        return 'outline';
      case 'light':
        return 'primary';
      case 'dark':
        return 'primary';
      case 'accent':
        return 'outline';
      default:
        return 'primary';
    }
  };

  return (
    <section 
      className={cn(
        'py-16 overflow-hidden relative my-12',
        variantStyles[variant],
        shape === 'rounded' ? 'rounded-xl' : 'rounded-none'
      )}
    >
      {/* Background pattern */}
      {withPattern && (
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      )}
      
      {/* Top wave for wave design */}
      {shape === 'wave' && (
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white" preserveAspectRatio="none">
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className={cn(
          "max-w-3xl mx-auto text-center",
          withAnimation && "animate-fade-in"
        )}>
          <h2 className={cn(
            "text-3xl font-bold mb-4", 
            withAnimation && "animate-fade-in"
          )}>
            {title}
          </h2>
          
          <p className={cn(
            "text-xl mb-8",
            (variant === 'gradient' || variant === 'accent' || variant === 'dark') ? "text-white/90" : "text-gray-600",
            withAnimation && "animate-fade-in-up"
          )}>
            {subtitle}
          </p>
          
          {withAnimation ? (
            <div className="animate-bounce-subtle">
              <ButtonLink 
                href={buttonLink}
                variant={buttonVariant()}
                size="lg"
                className={cn(
                  "shadow-lg hover:shadow-xl",
                  variant === 'gradient' ? "text-primary-600" : "",
                  variant === 'accent' ? "text-secondary-600" : "",
                  buttonClassName // Add the custom button class name
                )}
              >
                {buttonText}
              </ButtonLink>
            </div>
          ) : (
            <ButtonLink 
              href={buttonLink}
              variant={buttonVariant()}
              size="lg"
              className={cn(
                "shadow-lg hover:shadow-xl",
                variant === 'gradient' ? "text-primary-600" : "",
                variant === 'accent' ? "text-secondary-600" : "",
                buttonClassName // Add the custom button class name
              )}
            >
              {buttonText}
            </ButtonLink>
          )}
        </div>
      </div>
      
      {/* Bottom wave for wave design */}
      {shape === 'wave' && (
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-white" preserveAspectRatio="none">
            <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default CallToAction;
