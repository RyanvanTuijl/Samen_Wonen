import i18nConfig from '../../next-i18next.config.js';

export const fallbackLng = i18nConfig.i18n.defaultLocale;
export const locales = i18nConfig.i18n.locales;
export const defaultNS = 'common'; // Default namespace

export function getOptions (lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true, // Enable debug logging
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
} 