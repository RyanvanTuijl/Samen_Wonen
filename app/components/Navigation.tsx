'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../i18n/client';

interface NavigationProps {
  isHome?: boolean;
}

// Define navigation menu structure
interface MenuItem {
  label: string;
  path?: string;
  translationKey?: string;
  children?: MenuItem[];
  icon?: React.ReactNode;
  isActive?: boolean;
}

export default function Navigation({ isHome = false }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Refs for closing dropdowns when clicking outside
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const createLocalePath = (path: string) => `/${locale}${path === '/' ? '' : path}`;
  
  // Helper to check if a path is active
  const isActivePath = (path: string): boolean => {
    if (!path || path === '/') return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname.startsWith(`/${locale}${path}`);
  };
  
  // Helper to check if any child in a dropdown is active
  const hasActiveChild = (children?: MenuItem[]): boolean => {
    if (!children) return false;
    return children.some(child => isActivePath(child.path || ''));
  };
  
  const handleChangeRole = () => {
    // Clear the userRole cookie and reload the homepage to show role selection
    Cookies.remove('userRole');
    router.push(createLocalePath('/'));
  };

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  // Define menu structure
  const menuItems: MenuItem[] = [
    {
      label: t('nav_how_it_works'),
      path: '/how-it-works'
    },
    {
      label: t('nav_for_who'),
      children: [
        { 
          label: t('nav_for_students'),
          path: '/for-students'
        },
        { 
          label: t('nav_for_seniors'),
          path: '/for-seniors'
        },
        { 
          label: t('nav_for_homes'),
          path: '/for-homes'
        },
        { 
          label: t('nav_for_municipalities'),
          path: '/for-municipalities'
        }
      ]
    },
    {
      label: t('nav_resources'),
      children: [
        { 
          label: t('nav_courses'),
          path: '/courses'
        },
        { 
          label: t('faq_title'),
          path: '/faq'
        },
        { 
          label: t('nav_blog'),
          path: '/blog'
        }
      ]
    },
    {
      label: t('nav_contact'),
      path: '/contact'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-2'
    } ${isHome ? 'text-neutral-700' : 'text-neutral-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={createLocalePath('/')} className="text-2xl font-bold text-primary-600 flex items-center">
            {/* You can add a logo image here */}
            <span>{t('appName')}</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative" 
                ref={(el) => { dropdownRefs.current[`menu-${index}`] = el; }}
              >
                {item.path ? (
                  <Link 
                    href={createLocalePath(item.path)} 
                    className={`px-4 py-2 rounded-md font-medium hover:text-primary-600 transition-colors ${
                      isActivePath(item.path || '') ? 'text-primary-600' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(`menu-${index}`)}
                      className={`px-4 py-2 rounded-md font-medium hover:text-primary-600 transition-colors flex items-center ${
                        activeDropdown === `menu-${index}` || hasActiveChild(item.children) ? 'text-primary-600' : ''
                      }`}
                      aria-expanded={activeDropdown === `menu-${index}`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg 
                        className={`ml-1 w-4 h-4 transition-transform ${
                          activeDropdown === `menu-${index}` ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {item.children && (
                      <div 
                        className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                          activeDropdown === `menu-${index}` 
                            ? 'opacity-100 transform translate-y-0 z-10' 
                            : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`menu-button-${index}`}
                      >
                        <div className="py-1" role="none">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={createLocalePath(child.path || '/')}
                              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600 ${
                                isActivePath(child.path || '') ? 'bg-gray-50 text-primary-600 font-medium' : ''
                              }`}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* User Controls */}
            <div className="flex items-center ml-6 space-x-4">
              <button
                onClick={handleChangeRole}
                className="text-secondary-600 hover:text-secondary-700 flex items-center space-x-1.5 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label={t('change_role')}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span>{t('change_role')}</span>
              </button>
              <div className="border-l border-gray-300 h-6"></div>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <LanguageSwitcher />
            <button
              className="ml-4 p-1.5 text-neutral-600 hover:text-primary-500 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                {item.path ? (
                  <Link
                    href={createLocalePath(item.path)}
                    className={`block px-4 py-3 hover:bg-gray-100 transition-colors ${
                      isActivePath(item.path || '') ? 'text-primary-600 font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDropdown(`mobile-menu-${index}`)}
                      className={`flex justify-between items-center w-full px-4 py-3 hover:bg-gray-50 transition-colors ${
                        activeDropdown === `mobile-menu-${index}` || hasActiveChild(item.children) ? 'bg-gray-50' : ''
                      }`}
                      aria-expanded={activeDropdown === `mobile-menu-${index}`}
                    >
                      <span className={
                        activeDropdown === `mobile-menu-${index}` || hasActiveChild(item.children) 
                          ? 'text-primary-600 font-medium' 
                          : ''
                      }>
                        {item.label}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === `mobile-menu-${index}` ? 'rotate-180 text-primary-600' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {item.children && (
                      <div 
                        className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                          activeDropdown === `mobile-menu-${index}` 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={createLocalePath(child.path || '/')}
                            className={`block pl-8 pr-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors ${
                              isActivePath(child.path || '') ? 'text-primary-600 font-medium bg-gray-100' : ''
                            }`}
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            
            {/* User Controls for Mobile */}
            <div className="border-t border-gray-200 mt-2 pt-3">
              <button
                onClick={() => {
                  handleChangeRole();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-secondary-600" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-secondary-600 font-medium">{t('change_role')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}