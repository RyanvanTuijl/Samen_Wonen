import React from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';

interface ButtonLinkProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
  secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
  accent: 'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700',
  outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

export default function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: ButtonLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(
        'inline-block font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
