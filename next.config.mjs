/** @type {import('next').NextConfig} */

// Import the i18n config
import { i18n } from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true,
  // Add the i18n config to Next.js config
  i18n,
};

export default nextConfig; 