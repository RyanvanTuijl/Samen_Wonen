'use client';

import React, { useState } from 'react';
import { useTranslation } from '../../i18n/client';
import { usePathname } from 'next/navigation';
import type { Location } from '../../data/locationsData';

interface LocationFiltersProps {
  locations: Location[];
}

export default function LocationFilters({ locations }: LocationFiltersProps) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  
  // Filter states
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [roomsFilter, setRoomsFilter] = useState<number | ''>('');
  
  // Get unique list of cities for filter dropdown
  const cities = Array.from(new Set(locations.map(location => location.city))).sort();
  
  // Apply filters to locations
  const filteredLocations = locations.filter(location => {
    // Status filter
    if (statusFilter !== 'all' && location.type !== statusFilter) {
      return false;
    }
    
    // City filter
    if (cityFilter && location.city !== cityFilter) {
      return false;
    }
    
    // Rooms filter
    if (roomsFilter && location.rooms) {
      if (location.rooms < roomsFilter) {
        return false;
      }
    }
    
    return true;
  });
  
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <div className="flex space-x-2">              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-2 rounded-md ${
                  statusFilter === 'all' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-4 py-2 rounded-md ${
                  statusFilter === 'active' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setStatusFilter('coming_soon')}
                className={`px-4 py-2 rounded-md ${
                  statusFilter === 'coming_soon' 
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
            >            <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rooms</label>
            <select
              value={roomsFilter}
              onChange={(e) => setRoomsFilter(e.target.value === '' ? '' : Number(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
            >
              <option value="">Any</option>
              <option value="5">5+</option>
              <option value="10">10+</option>
              <option value="15">15+</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center">          <h3 className="text-xl font-semibold">
            {filteredLocations.length} locations found
          </h3>
          
          <div className="text-sm text-gray-500">
            {statusFilter !== 'all' && (
              <span className="mr-2">
                {statusFilter === 'active' ? 'Active' : 'Coming Soon'}
              </span>
            )}
            
            {cityFilter && (
              <span className="mr-2">
                {cityFilter}
              </span>
            )}
            
            {(statusFilter !== 'all' || cityFilter) && (
              <button 
                onClick={() => {
                  setStatusFilter('all');
                  setCityFilter('');
                  setRoomsFilter('');
                }}
                className="text-primary-600 hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <LocationCard 
              key={location.id} 
              location={location} 
              locale={locale}
            />
          ))
        ) : (
          <div className="col-span-3 py-16 text-center">            <p className="text-xl text-gray-500">No locations found matching your filters</p>
            <button
              onClick={() => {
                setStatusFilter('all');
                setCityFilter('');
                setRoomsFilter('');
              }}
              className="mt-4 text-primary-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// Location Card component for displaying each location
const LocationCard = ({ location, locale }: { location: Location, locale: string }) => {
  const { t } = useTranslation(locale, 'common');
  
  // Determine color scheme based on location type
  const colorScheme = location.type === 'active' 
    ? 'primary' 
    : 'secondary';
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="relative h-48">
        <div className={`absolute inset-0 bg-gradient-to-r ${location.type === 'active' ? 'from-primary-500 to-primary-600' : 'from-secondary-500 to-secondary-600'} opacity-90`}></div>
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
          <span className="text-gray-600">{location.city}</span>          <span className={`ml-auto inline-block px-3 py-1 rounded-full text-xs ${
            location.type === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {location.type === 'active' ? 'Active' : 'Coming Soon'}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{location.description}</p>
        
        <div className="mb-4">          <span className="text-sm font-medium text-gray-800">Available Rooms</span>
          <p className="mt-1 text-gray-700">{location.rooms} rooms</p>
        </div>
        
        <div className="mb-6">          <span className="text-sm font-medium text-gray-800">Amenities</span>
          <ul className="mt-1 grid grid-cols-1 gap-1">
            {location.amenities?.slice(0, 3).map((amenity, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {amenity}
              </li>
            ))}
            {(location.amenities?.length || 0) > 3 && (
              <li className="text-sm text-gray-500 mt-1">
                +{(location.amenities?.length || 0) - 3} more
              </li>
            )}
          </ul>
        </div>
        
        <a 
          href={`/${locale}/contact?opportunity=${location.city.toLowerCase()}-${location.id}`}
          className={`inline-block w-full text-center font-medium rounded-lg px-6 py-3 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md ${
            location.type === 'active' 
              ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800' 
              : 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700'
          }`}
        >
          {location.type === 'active' ? 'Apply Now' : 'Express Interest'}
        </a>
      </div>
    </div>
  );
};
