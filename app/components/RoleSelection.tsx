'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTranslation } from '../i18n/client';

export default function RoleSelection() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  
  const roles = [
    {
      id: 'student',
      title: t('role_student_title'),
      description: t('role_student_desc'),
      icon: '/icons/student.svg',
      color: 'from-accent-500 to-accent-600'
    },
    {
      id: 'senior',
      title: t('role_senior_title'),
      description: t('role_senior_desc'),
      icon: '/icons/senior.svg',
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'homeowner',
      title: t('role_homeowner_title'),
      description: t('role_homeowner_desc'),
      icon: '/icons/home.svg',
      color: 'from-secondary-500 to-secondary-600'
    }
  ];

  const selectRole = (roleId: string) => {
    // Store user role preference in a cookie that lasts 30 days
    Cookies.set('userRole', roleId, { expires: 30 });
    
    // Add console log to debug
    console.log(`Redirecting to /${locale} after selecting role: ${roleId}`);
    
    // Try both redirection methods
    try {
      // Primary method using Next.js router
      router.push(`/${locale}`);
      
      // Fallback method using window.location
      // Add a small delay to ensure the cookie is set before redirecting
      setTimeout(() => {
        window.location.href = `/${locale}`;
      }, 100);
    } catch (error) {
      console.error('Redirection error:', error);
      // Fallback if any error occurs
      window.location.href = `/${locale}`;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 animate-fade-in">
            {t('role_selection_title')}
          </h1>
          <p className="text-xl text-neutral-600 animate-fade-in-up">
            {t('role_selection_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map(role => (
            <div 
              key={role.id}
              onClick={() => selectRole(role.id)}
              className={`cursor-pointer transform transition-all duration-300 hover:-translate-y-2
                         bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl`}
            >
              <div className={`h-3 bg-gradient-to-r ${role.color}`}></div>
              <div className="p-8">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                    <Image 
                      src={role.icon} 
                      alt={role.title}
                      width={40}
                      height={40}
                      className="text-white invert brightness-[10]"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-800">{role.title}</h3>
                <p className="text-neutral-600 mb-6">{role.description}</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent double triggering with parent div
                    selectRole(role.id);
                  }}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${role.color} 
                             text-white font-medium transform transition hover:scale-105`}
                >
                  {t('role_select_button')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}