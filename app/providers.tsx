'use client'; // This component MUST be a Client Component

import React from 'react';
import { CookiesProvider } from 'react-cookie';

// You can add other client-side providers here if needed in the future
export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  );
} 