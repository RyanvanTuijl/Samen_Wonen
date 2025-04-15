'use client'

import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, locales } from './settings'

const runsOnServerSide = typeof window === 'undefined'

// Initialize i18next
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => import(`../../public/locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // Let detector handle initial language
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'navigator'],
      caches: ['cookie'] // Cache detected language in cookie
    },
    preload: runsOnServerSide ? locales : []
  })

export function useTranslation(lng: string, ns?: string | string[], options?: { keyPrefix?: string }) {
  const [cookies, setCookie] = useCookies(['i18next']) // Use react-cookie hook
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret
  
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  }

  // Client-side language change effect
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])

  // Update cookie on language change
  useEffect(() => {
    if (!lng) return
    if (cookies.i18next !== lng) {
      setCookie('i18next', lng, { path: '/' })
    }
  }, [lng, cookies.i18next, setCookie])

  return ret
} 