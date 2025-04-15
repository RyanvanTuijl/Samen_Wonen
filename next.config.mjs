/** @type {import('next').NextConfig} */

// Import the i18n config
import { i18n } from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    localeDetection: true
  }
};

export default nextConfig; 