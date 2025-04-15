'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../next-i18next.config.js';

type Language = 'nl' | 'en';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  {
    code: 'nl',
    name: 'Nederlands',
    flag: '/flags/nl.svg'
  },
  {
    code: 'en',
    name: 'English',
    flag: '/flags/gb.svg'
  }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language as Language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: Language) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.i18n.defaultLocale &&
      !i18nConfig.i18n.locales.includes(currentPathname.split('/')[1])
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Image
          src={currentLanguage?.flag || '/flags/nl.svg'}
          alt={currentLanguage?.name || 'Nederlands'}
          width={20}
          height={15}
          className="rounded-sm"
        />
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-gray-100 transition-colors ${
                currentLocale === lang.code ? 'bg-gray-50' : ''
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className="rounded-sm"
              />
              <span className="text-sm">{lang.name}</span>
              {currentLocale === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 