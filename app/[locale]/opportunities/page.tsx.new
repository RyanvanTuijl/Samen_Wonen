import React from 'react';
import ServerPageHeader from '../../components/ServerPageHeader';
import ButtonLink from '../../components/ButtonLink';
import Image from 'next/image';
import { useTranslation } from '../../i18n';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { locations } from '../../data/locationsData';
import type { Location } from '../../data/locationsData';

// Location Card component for displaying each location
const LocationCard = ({ location, locale }: { location: Location, locale: string }) => {
  // Determine color scheme based on location type
  const colorScheme = location.type === 'active' 
    ? 'primary' 
    : 'secondary';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="relative h-48">
        <div className={`absolute inset-0 bg-gradient-to-r ${
          location.type === 'active' ? 'from-primary-500 to-primary-600' : 'from-secondary-500 to-secondary-600'
        } opacity-90`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="font-bold text-2xl">{location.name}</h3>
            <p className="text-white/90">{location.city}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <svg className={`w-5 h-5 ${location.type === 'active' ? 'text-primary-500' : 'text-secondary-500'} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600">{location.city}</span>
          <span className={`ml-auto inline-block px-3 py-1 rounded-full text-sm ${
            location.type === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {location.type === 'active' ? 'Active' : 'Coming Soon'}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{location.description}</p>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-800">Available Rooms</span>
          <p className="mt-1 text-gray-700">{location.rooms} rooms</p>
        </div>
        
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-800">Amenities</span>
          <ul className="mt-1 grid grid-cols-1 gap-1">
            {location.amenities?.slice(0, 3).map((amenity, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        <ButtonLink 
          href={`/${locale}/contact?opportunity=${location.city.toLowerCase()}-${location.id}`}
          variant={location.type === 'active' ? "primary" : "secondary"}
          className="w-full"
        >
          {location.type === 'active' ? 'Apply Now' : 'Express Interest'}
        </ButtonLink>
      </div>
    </div>
  );
};

// Filter component to filter by status, city, etc
const LocationFilters = ({ 
  activeFilter, 
  setActiveFilter,
  cityFilter,
  setCityFilter,
  cities
}: { 
  activeFilter: string; 
  setActiveFilter: (filter: string) => void;
  cityFilter: string;
  setCityFilter: (city: string) => void;
  cities: string[];
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'all' 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('active')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'active' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter('coming_soon')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'coming_soon' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default async function OpportunitiesPage({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await useTranslation(locale, 'common');
  
  // Get unique list of cities for filter
  const cities = Array.from(new Set(locations.map(location => location.city))).sort();

  // Dynamically import the client component
  const LocationFiltersComponent = dynamic(() => import('./LocationFilters'), {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={t('opportunities_title')}
        subtitle={t('opportunities_subtitle')}
        backgroundImage="/images/headers/homes-header.png"
      />
      
      {/* Intro section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('opportunities_intro_title')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('opportunities_intro_text')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-primary-600">{locations.length}</div>
                <p className="text-sm text-gray-600">{t('total_locations')}</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-primary-600">
                  {locations.filter(loc => loc.type === 'active').length}
                </div>
                <p className="text-sm text-gray-600">{t('active_locations')}</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-primary-600">
                  {locations.filter(loc => loc.type === 'coming_soon').length}
                </div>
                <p className="text-sm text-gray-600">{t('coming_soon')}</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="text-3xl font-bold text-primary-600">
                  {cities.length}
                </div>
                <p className="text-sm text-gray-600">{t('cities')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main content section with filters and location cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('browse_locations')}</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Client-side filters component */}
            <LocationFiltersComponent locations={locations} />
          </div>
        </div>
      </section>
      
      {/* Map Section - Link to map view */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('view_on_map')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('map_description')}
            </p>
            
            <ButtonLink
              href={`/${locale}/#map-section`}
              variant="primary"
              size="lg"
              className="mx-auto"
            >
              Open Interactive Map 
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Take the first step towards affordable and community-oriented housing. Apply now or contact us to learn more about our home sharing program.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <ButtonLink
                href={`/${locale}/contact`}
                variant="primary"
                size="lg"
              >
                Apply Now 
              </ButtonLink>
              
              <ButtonLink
                href={`/${locale}/how-it-works`}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn How It Works 
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
