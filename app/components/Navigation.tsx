'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../i18n/client';

interface NavigationProps {
  isHome?: boolean;
}

export default function Navigation({ isHome = false }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
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
  
  const handleChangeRole = () => {
    // Clear the userRole cookie and reload the homepage to show role selection
    Cookies.remove('userRole');
    router.push(createLocalePath('/'));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${isHome ? 'text-neutral-700' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href={createLocalePath('/')} className="text-2xl font-bold text-primary-600">
            {t('appName')}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href={createLocalePath('/how-it-works')} 
              className="nav-link"
            >
              {t('nav_how_it_works')}
            </Link>
            <Link 
              href={createLocalePath('/for-students')} 
              className="nav-link"
            >
              {t('nav_for_students')}
            </Link>
            <Link 
              href={createLocalePath('/for-seniors')} 
              className="nav-link"
            >
              {t('nav_for_seniors')}
            </Link>
            <Link 
              href={createLocalePath('/for-homes')} 
              className="nav-link"
            >
              {t('nav_for_homes')}
            </Link>
            <Link 
              href={createLocalePath('/for-municipalities')} 
              className="nav-link"
            >
              {t('nav_for_municipalities')}
            </Link>
            <Link 
              href={createLocalePath('/contact')} 
              className="nav-link"
            >
              {t('nav_contact')}
            </Link>
            <button
              onClick={handleChangeRole}
              className="text-secondary-600 hover:text-secondary-700 flex items-center space-x-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{t('change_role')}</span>
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 hover:text-primary-500 transition-colors"
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
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            <Link
              href={createLocalePath('/how-it-works')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_how_it_works')}
            </Link>
            <Link
              href={createLocalePath('/for-students')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_students')}
            </Link>
            <Link
              href={createLocalePath('/for-seniors')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_seniors')}
            </Link>
            <Link
              href={createLocalePath('/for-homes')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_homes')}
            </Link>
            <Link
              href={createLocalePath('/for-municipalities')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_for_municipalities')}
            </Link>
            <Link
              href={createLocalePath('/contact')}
              className="block nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav_contact')}
            </Link>
            <button
              onClick={handleChangeRole}
              className="flex items-center space-x-1 w-full text-left nav-link"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{t('change_role')}</span>
            </button>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}