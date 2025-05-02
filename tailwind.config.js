/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New color palette
        primary: {
          DEFAULT: '#1E6F5C', // Rich forest green - main brand color
          50: '#E8F5F2',
          100: '#D1EBE4',
          200: '#A3D7CA',
          300: '#75C4AF',
          400: '#47B095',
          500: '#1E6F5C', // Base primary
          600: '#195C4B',
          700: '#14493C',
          800: '#0F362C',
          900: '#0A231D',
        },
        secondary: {
          DEFAULT: '#FF8C42', // Warm orange - complementary to primary
          50: '#FFF3EB',
          100: '#FFE7D7',
          200: '#FFCFAF',
          300: '#FFB788',
          400: '#FF9F60',
          500: '#FF8C42', // Base secondary
          600: '#FF7319',
          700: '#F05E00',
          800: '#C74D00',
          900: '#9E3D00',
        },
        accent: {
          DEFAULT: '#4D96FF', // Bright blue - accent color for CTAs
          50: '#EDF5FF',
          100: '#DBEAFF',
          200: '#B7D5FF',
          300: '#93C0FF',
          400: '#6FABFF',
          500: '#4D96FF', // Base accent
          600: '#1A7BFF',
          700: '#005DE6',
          800: '#004BB8',
          900: '#00398A',
        },
        neutral: {
          DEFAULT: '#475569', // Slate gray - for text and borders
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569', // Base neutral
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: '#2E933C', // Green for success states
        warning: '#F9AB55', // Amber for warning states
        error: '#D64933',   // Red for error states
        background: '#F9FAFB', // Light gray for backgrounds
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-in-up': 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}