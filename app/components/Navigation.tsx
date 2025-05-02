'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from '../i18n/client';

interface NavigationProps {
  isHome?: boolean;
}

export default function Navigation({ isHome = false }: NavigationProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createLocalePath = (path: string) => `/${locale}${path === '/' ? '' : path}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${isHome ? 'text-gray-700 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href={createLocalePath('/')} className="text-2xl font-bold">
            {t('appName')}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href={createLocalePath('/how-it-works')} 
              className={`nav-link ${isHome ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white' : ''}`}
            >
              {t('nav_how_it_works')}
            </Link>
            <Link 
              href={createLocalePath('/for-students')} 
              className={`nav-link ${isHome ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white' : ''}`}
            >
              {t('nav_for_students')}
            </Link>
            <Link 
              href={createLocalePath('/for-homes')} 
              className={`nav-link ${isHome ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white' : ''}`}
            >
              {t('nav_for_homes')}
            </Link>
            <Link 
              href={createLocalePath('/for-municipalities')} 
              className={`nav-link ${isHome ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white' : ''}`}
            >
              {t('nav_for_municipalities')}
            </Link>
            <Link 
              href={createLocalePath('/contact')} 
              className={`nav-link ${isHome ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white' : ''}`}
            >
              {t('nav_contact')}
            </Link>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden dark:bg-gray-800`}
        >
          <div className="py-4 space-y-4">
            <Link
              href={createLocalePath('/how-it-works')}
              className="block nav-link dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_how_it_works')}
            </Link>
            <Link
              href={createLocalePath('/for-students')}
              className="block nav-link dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_students')}
            </Link>
            <Link
              href={createLocalePath('/for-homes')}
              className="block nav-link dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_homes')}
            </Link>
            <Link
              href={createLocalePath('/for-municipalities')}
              className="block nav-link dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_municipalities')}
            </Link>
            <Link
              href={createLocalePath('/contact')}
              className="block nav-link dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_contact')}
            </Link>
            <div className="flex items-center space-x-4 py-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}