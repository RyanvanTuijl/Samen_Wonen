import React from "react";
import { notFound } from "next/navigation";
import ServerPageHeader from "../../../components/ServerPageHeader";
import ButtonLink from "../../../components/ButtonLink";
import Image from "next/image";
import { useTranslation } from "../../../i18n";
import Link from "next/link";
import { locations, getLocalizedText } from "../../../data/locationsData";export default async function LocationDetailPage({ 
  params: { locale, id }
}: { 
  params: { locale: string; id: string }
}) {
  const { t } = await useTranslation(locale, 'common');
  
  // Find the location with the matching ID
  const locationId = parseInt(id);
  const location = locations.find(loc => loc.id === locationId);
  
  // If location doesn't exist, return 404
  if (!location) {
    notFound();
  }
  
  // Determine color scheme based on location type
  const colorScheme = location.type === 'active' ? 'primary' : 'secondary';
  
  // Placeholder image URL - in a real app, would come from the location data
  const imagePath = `/images/headers/homes-header.png`;
  
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <ServerPageHeader
        title={location.name}
        subtitle={location.city}
        backgroundImage={imagePath}
      />
      
      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Link 
                href={`/${locale}/opportunities`}
                className="text-primary-600 hover:text-primary-700 flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('browse_locations')}
              </Link>
              
              <span className={`ml-auto inline-block px-3 py-1 rounded-full text-sm ${
                location.type === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {location.type === 'active' ? t('map_status_active') : t('map_status_soon')}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
            <p className="text-xl text-gray-700 mb-8">{getLocalizedText(location.description, locale)}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Left column with details */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">{t('location_details')}</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">{t('filter_city')}</h3>
                    <p className="text-gray-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {location.city}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">{t('available_rooms')}</h3>
                    <p className="text-gray-700 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {location.rooms} {t('map_rooms')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">{t('map_amenities')}</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {location.amenities?.map((amenity, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {getLocalizedText(amenity, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right column with map */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">{t('view_on_map')}</h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-72 mb-6">
                  <div className="w-full h-full relative">
                    {/* This would be an embedded map in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Interactive map would be here</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link href={`/${locale}/#map-section?highlight=${location.id}`} className="text-primary-600 hover:underline">
                    {t('open_map')}
                  </Link>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {location.type === 'active' 
                  ? t('ready_to_apply') 
                  : t('interested_location')}
              </h2>
              <p className="text-gray-700 mb-6">
                {location.type === 'active' 
                  ? t('cta_description')
                  : t('coming_soon_description')}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <ButtonLink
                  href={`/${locale}/contact?opportunity=${location.city.toLowerCase()}-${location.id}`}
                  variant={location.type === 'active' ? "primary" : "secondary"}
                  size="lg"
                >
                  {location.type === 'active' ? t('apply_now') : t('express_interest')}
                </ButtonLink>
                
                <ButtonLink
                  href={`/${locale}/how-it-works`}
                  variant="outline"
                  size="lg"
                >
                  {t('learn_more')}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
