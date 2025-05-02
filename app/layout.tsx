import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import ClientProviders from './providers'
// No appWithTranslation needed for App Router

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SamenWonen - Intergenerationeel Wonen',
  description: 'Studenten en ouderen samen onder één dak',
}

export default function RootLayout({
  children,
  params, // Add params
}: {
  children: React.ReactNode,
  params: { locale: string }, // Add locale param type
}) {
  return (
    // Use params.locale for the lang attribute
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ClientProviders>
          <Navigation isHome={false} /> 
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}