'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useTranslation } from '../i18n/client';
import Image from 'next/image';

export default function RoleButton() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentRole = Cookies.get('userRole') || 'none';
  
  const roles = [
    {
      id: 'student',
      title: t('role_student_title'),
      icon: '/icons/student.svg',
      color: 'bg-blue-500'
    },
    {
      id: 'senior',
      title: t('role_senior_title'),
      icon: '/icons/senior.svg',
      color: 'bg-green-500'
    },
    {
      id: 'homeowner',
      title: t('role_homeowner_title'),
      icon: '/icons/home.svg',
      color: 'bg-purple-500'
    }
  ];

  const getCurrentRoleInfo = () => {
    const role = roles.find(r => r.id === currentRole);
    return role || { 
      id: 'none', 
      title: t('select_your_role'), 
      icon: '/icons/register.svg',
      color: 'bg-gray-500'
    };
  };

  const handleSelectRole = (roleId: string) => {
    // Store user role preference in a cookie that lasts 30 days
    Cookies.set('userRole', roleId, { expires: 30 });
    
    // Navigate to the appropriate page based on role
    switch(roleId) {
      case 'student':
        router.push(`/${locale}/for-students`);
        break;
      case 'senior':
        router.push(`/${locale}/for-seniors`);
        break;
      case 'homeowner':
        router.push(`/${locale}/for-homes`);
        break;
      default:
        router.push(`/${locale}`);
    }
    
    setIsOpen(false);
  };

  const currentRoleInfo = getCurrentRoleInfo();

  return (
    <div className="relative z-20">
      {/* Current role button */}
      <button 
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-8 h-8 rounded-full ${currentRoleInfo.color} flex items-center justify-center`}>
          <Image 
            src={currentRoleInfo.icon}
            alt={currentRoleInfo.title}
            width={16}
            height={16}
            className="invert"
          />
        </div>
        <span className="font-medium">{currentRoleInfo.title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Role selection dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden min-w-56">
          <div className="py-2">
            {roles.map(role => (
              <button
                key={role.id}
                onClick={() => handleSelectRole(role.id)}
                className="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full ${role.color} flex items-center justify-center`}>
                  <Image 
                    src={role.icon}
                    alt={role.title}
                    width={16}
                    height={16}
                    className="invert"
                  />
                </div>
                <span>{role.title}</span>
                {currentRole === role.id && (
                  <svg className="w-5 h-5 ml-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}