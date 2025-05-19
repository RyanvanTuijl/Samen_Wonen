import React from 'react';
import Image from 'next/image';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  iconPath?: string;
  title: string;
  description: string;
  iconColor?: string;
  children?: React.ReactNode; // For custom icon if needed
  variant?: 'default' | 'filled' | 'outline' | 'minimal';
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconPath,
  title,
  description,
  iconColor,
  variant = 'default',
  colorScheme = 'primary',
  children
}) => {
  // Generate color classes based on variant and colorScheme
  const getColorClasses = () => {
    const colors = {
      primary: {
        bg: 'bg-primary-50',
        text: 'text-primary-500',
        hoverBg: 'group-hover:bg-primary-100',
        border: 'border-primary-100',
        filledBg: 'bg-primary-500',
        hoverShadow: 'hover:shadow-primary-100/50',
      },
      secondary: {
        bg: 'bg-secondary-50',
        text: 'text-secondary-500',
        hoverBg: 'group-hover:bg-secondary-100',
        border: 'border-secondary-100',
        filledBg: 'bg-secondary-500',
        hoverShadow: 'hover:shadow-secondary-100/50',
      },
      accent: {
        bg: 'bg-accent-50',
        text: 'text-accent-500',
        hoverBg: 'group-hover:bg-accent-100',
        border: 'border-accent-100',
        filledBg: 'bg-accent-500',
        hoverShadow: 'hover:shadow-accent-100/50',
      },
      neutral: {
        bg: 'bg-gray-50',
        text: 'text-gray-600',
        hoverBg: 'group-hover:bg-gray-100',
        border: 'border-gray-100',
        filledBg: 'bg-gray-700',
        hoverShadow: 'hover:shadow-gray-100/50',
      },
    };

    // Default icon color if not provided
    const derivedIconColor = iconColor || colors[colorScheme].text;

    return {
      iconColor: derivedIconColor,
      bgColor: colors[colorScheme].bg,
      hoverBgColor: colors[colorScheme].hoverBg,
      borderColor: colors[colorScheme].border,
      hoverShadow: colors[colorScheme].hoverShadow,
      filledBg: colors[colorScheme].filledBg,
    };
  };

  const { iconColor: derivedIconColor, bgColor, hoverBgColor, borderColor, hoverShadow, filledBg } = getColorClasses();

  // Variant styles
  const variantStyles = {
    default: `bg-white rounded-xl shadow-md p-6 border ${borderColor} ${hoverShadow} transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`,
    filled: `${filledBg} text-white rounded-xl shadow-md p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`,
    outline: `bg-white border-2 ${borderColor} hover:border-opacity-100 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1`,
    minimal: `bg-transparent hover:bg-white/50 p-6 transition-all duration-300 rounded-xl hover:shadow-md`,
  };

  return (
    <div className={cn(variantStyles[variant], "group")}>
      <div className="mb-6">
        {iconPath ? (
          <div className={`w-16 h-16 rounded-full ${bgColor} ${hoverBgColor} flex items-center justify-center mx-auto transition-all duration-300`}>
            <Image
              src={iconPath}
              width={32}
              height={32}
              alt={title}
              className={`${derivedIconColor} group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}
            />
          </div>
        ) : children ? (
          <div className={`w-16 h-16 rounded-full ${bgColor} ${hoverBgColor} flex items-center justify-center mx-auto transition-all duration-300`}>
            {children}
          </div>
        ) : null}
      </div>
      
      <h3 className={cn(
        "text-xl font-bold text-center mb-3",
        variant === "filled" ? "text-white" : "text-gray-800",
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-center",
        variant === "filled" ? "text-white/90" : "text-gray-600"
      )}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
