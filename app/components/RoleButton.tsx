'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  const buttonRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentRole = Cookies.get('userRole') || 'none';
  
  const roles = [
    {
      id: 'student',
      title: t('role_student_title'),
      icon: '/icons/student.svg',
      color: 'bg-accent-600',
      textColor: 'text-white'
    },
    {
      id: 'senior',
      title: t('role_senior_title'),
      icon: '/icons/senior.svg',
      color: 'bg-primary-500',
      textColor: 'text-white'
    },
    {
      id: 'homeowner',
      title: t('role_homeowner_title'),
      icon: '/icons/home.svg',
      color: 'bg-secondary-500',
      textColor: 'text-white'
    }
  ];

  const getCurrentRoleInfo = () => {
    const role = roles.find(r => r.id === currentRole);
    return role || { 
      id: 'none', 
      title: t('select_your_role'), 
      icon: '/icons/register.svg',
      color: 'bg-neutral-600',
      textColor: 'text-white'
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
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
          dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Adjust dropdown position if near the bottom of viewport
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  
  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - buttonRect.bottom;
      
      // If less than 200px below, position dropdown above
      if (spaceBelow < 200) {
        setDropdownPosition('top');
      } else {
        setDropdownPosition('bottom');
      }
    }
  }, [isOpen]);

  const currentRoleInfo = getCurrentRoleInfo();
  
  return (
    <div className="relative" ref={buttonRef} style={{ zIndex: 9999 }}>
      {/* Current role button */}
      <button 
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-8 h-8 rounded-full ${currentRoleInfo.color} flex items-center justify-center ${currentRoleInfo.textColor}`}>
          <Image 
            src={currentRoleInfo.icon}
            alt={currentRoleInfo.title}
            width={20}
            height={20}
            className="brightness-[10] contrast-100"
          />
        </div>
        <span className="font-medium text-neutral-800">{currentRoleInfo.title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 text-neutral-500 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>      {/* Role selection dropdown */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className={`absolute ${dropdownPosition === 'bottom' ? 'top-full' : 'bottom-full'} left-0 ${dropdownPosition === 'bottom' ? 'mt-2' : 'mb-2'} bg-white rounded-lg shadow-xl border border-neutral-200 min-w-56`}
          style={{ 
            zIndex: 9999,
            maxHeight: '300px',
            overflow: 'visible'
          }}
        >
          <div className="py-2">
            {roles.map(role => (
              <button
                key={role.id}
                onClick={() => handleSelectRole(role.id)}
                className="w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-neutral-50 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full ${role.color} flex items-center justify-center ${role.textColor}`}>
                  <Image 
                    src={role.icon}
                    alt={role.title}
                    width={20}
                    height={20}
                    className="brightness-[10] contrast-100"
                  />
                </div>
                <span className="text-neutral-800">{role.title}</span>
                {currentRole === role.id && (
                  <svg className="w-5 h-5 ml-auto text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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