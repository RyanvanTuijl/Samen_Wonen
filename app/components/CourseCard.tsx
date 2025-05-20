'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';
import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { cn } from '../lib/utils';

interface CourseCardProps {
  titleKey: string;
  descriptionKey: string;
  durationKey: string;
  icon: string;
  learnMoreHref?: string;
  colorScheme?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function CourseCard({
  titleKey,
  descriptionKey,
  durationKey,
  icon,
  learnMoreHref = '#',
  colorScheme = 'primary',
  className,
}: CourseCardProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'courses');

  const colorClasses = {
    primary: 'border-primary-100 hover:border-primary-200 bg-gradient-to-br from-white to-primary-50',
    secondary: 'border-secondary-100 hover:border-secondary-200 bg-gradient-to-br from-white to-secondary-50',
    accent: 'border-accent-100 hover:border-accent-200 bg-gradient-to-br from-white to-accent-50',
  };

  const iconColors = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    accent: 'text-accent-600',
  };

  return (
    <div className={cn(
      'flex flex-col rounded-xl border p-6 transition-all duration-200 shadow-sm hover:shadow-md',
      colorClasses[colorScheme],
      className
    )}>
      <div className="flex items-center mb-4">
        <div className={cn(
          "w-12 h-12 flex items-center justify-center rounded-full bg-opacity-20 mr-3",
          colorScheme === 'primary' ? 'bg-primary-100' : colorScheme === 'secondary' ? 'bg-secondary-100' : 'bg-accent-100'
        )}>
          <Image 
            src={icon}
            width={24}
            height={24}
            alt=""
            className={iconColors[colorScheme]}
          />
        </div>
        <h3 className="text-lg font-semibold">{t(titleKey)}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{t(descriptionKey)}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
              {t(durationKey)}
            </div>
            <div className="ml-2 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              {t('free_course')}
            </div>
          </div>
          <div className="text-xs text-gray-500">{t('certificate')}</div>
        </div>
        
        <ButtonLink
          href={learnMoreHref}
          variant={colorScheme}
          size="sm"
          className="w-full"
        >
          {t('enroll')}
        </ButtonLink>
      </div>
    </div>
  );
}
