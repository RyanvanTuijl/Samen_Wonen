/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['nl', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'nl',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com"
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'nl-NL',
    //   },
    // ],
  },
  /** 
   * Workaround for https://github.com/i18next/next-i18next/issues/1668
   * Find more information here: https://github.com/i18next/next-i18next/pull/2307#issuecomment-1851393411
   */
  localePath: path.resolve('./public/locales'),

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}; 