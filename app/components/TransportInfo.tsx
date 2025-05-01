'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';

interface TransportOption {
  type: string;
  name: string;
  distance: string;
  duration: string;
  frequency?: string;
}

interface Location {
  name: string;
  transportOptions: TransportOption[];
  amenities: string[];
}

// Voorbeeld data voor locaties en transport opties
const locationData: Location[] = [
  {
    name: 'Amsterdam Centrum',
    transportOptions: [
      {
        type: 'train',
        name: 'Amsterdam Centraal',
        distance: '0.5 km',
        duration: '6 min',
        frequency: 'Elke 5-10 min'
      },
      {
        type: 'tram',
        name: 'Lijn 2, 11, 12',
        distance: '0.2 km',
        duration: '3 min',
        frequency: 'Elke 8 min'
      },
      {
        type: 'bus',
        name: 'Stadsbus 32',
        distance: '0.3 km',
        duration: '4 min',
        frequency: 'Elke 15 min'
      }
    ],
    amenities: ['Supermarkt', 'Sportschool', 'Café', 'Restaurant', 'Park']
  },
  // Meer locaties kunnen hier worden toegevoegd
];

export default function TransportInfo() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const [selectedLocation, setSelectedLocation] = useState<string>(locationData[0].name);

  const currentLocation = locationData.find(loc => loc.name === selectedLocation);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center group mb-12">{t('transport_info_title')}</h2>

        <div className="max-w-4xl mx-auto">
          {/* Locatie Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('select_location')}
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full md:w-auto border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              {locationData.map(loc => (
                <option key={loc.name} value={loc.name}>{loc.name}</option>
              ))}
            </select>
          </div>

          {currentLocation && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Transport Opties */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t('transport_options')}</h3>
                <div className="space-y-4">
                  {currentLocation.transportOptions.map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                          {/* Hier kunnen we later iconen toevoegen voor verschillende transporttypes */}
                          <span className="text-primary">{option.type}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{option.name}</h4>
                          <p className="text-sm text-gray-500">{option.frequency}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{option.distance}</p>
                        <p className="text-sm text-gray-500">{option.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Voorzieningen in de buurt */}
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-4">{t('nearby_amenities')}</h3>
                <div className="flex flex-wrap gap-2">
                  {currentLocation.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placeholder voor kaart */}
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <p className="text-gray-500">{t('map_placeholder')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}