'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import './../styles/map.css';
import { useTranslation } from '../i18n/client';
import { usePathname } from 'next/navigation';

// Dynamically import the map components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div> }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
// Define the MarkerClusterGroup props interface
interface MarkerClusterGroupProps {
  children: React.ReactNode;
  chunkedLoading?: boolean;
  maxClusterRadius?: number;
  spiderfyOnMaxZoom?: boolean;
  showCoverageOnHover?: boolean;
  zoomToBoundsOnClick?: boolean;
}

const MarkerClusterGroup = dynamic<MarkerClusterGroupProps>(
  () => import('@changey/react-leaflet-markercluster').then((mod) => mod.default),
  { ssr: false }
);
// Import the Leaflet types for TypeScript support
import type { Icon as LeafletIcon } from 'leaflet';
import type { Location } from '../data/locationsData';
import { locations } from '../data/locationsData';

// Define a type for the Leaflet module
interface LeafletModule {
  Icon: new (options: any) => LeafletIcon;
}

interface LocationModalProps {
  location: Location | null;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ location, onClose }) => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');

  if (!location) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative z-[1001]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-4">{location.city}</p>
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm ${
              location.type === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {location.type === 'active' ? t('map_status_active') : t('map_status_soon')}
          </span>
        </div>
        <p className="text-gray-700 mb-4">{location.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">{t('map_available_rooms')}</h4>
          <p className="text-gray-700">{location.rooms} {t('map_rooms')}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">{t('map_amenities')}</h4>
          <ul className="grid grid-cols-2 gap-2">
            {location.amenities?.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMapInitialized, setIsMapInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingMarkers, setIsLoadingMarkers] = useState(true);
  
  // Custom marker icons
  const [activeIcon, setActiveIcon] = useState<LeafletIcon | null>(null);
  const [comingSoonIcon, setComingSoonIcon] = useState<LeafletIcon | null>(null);

  useEffect(() => {
    // Initialize map and set flag when map is ready
    if (typeof window !== 'undefined' && !isMapInitialized) {
      // Load Leaflet CSS dynamically to ensure it's available
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
      
      // Initialize custom marker icons
      import('leaflet').then((L: LeafletModule) => {
        setActiveIcon(new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        }));
        
        setComingSoonIcon(new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        }));
      });
      
      // Set initialization flag
      setIsMapInitialized(true);
    }
    
    // Cleanup function for map
    return () => {
      if (typeof window !== 'undefined') {
        // Clean up any map instances
        const mapContainer = document.querySelector('.leaflet-container');
        if (mapContainer) {
          // @ts-ignore
          if (mapContainer._leaflet_id) {
            // @ts-ignore
            mapContainer._leaflet = null;
          }
        }
      }
    };
  }, [isMapInitialized]);

  if (typeof window === 'undefined' || !isMapInitialized) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">{t('map_title_fallback')}</h2>
          <p className="text-gray-600 mb-6">{t('map_loading_message')}</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">{t('map_title')}</h2>
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[52.1326, 5.2913]}
            zoom={7}
            className="w-full h-full"
            whenReady={() => {
              setMapLoaded(true);
              // Force a re-render of markers after map is loaded
              setTimeout(() => {
                const event = new Event('resize');
                window.dispatchEvent(event);
              }, 100);
            }}
            preferCanvas={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              eventHandlers={{
                load: () => {
                  console.log('Tile layer loaded');
                }
              }}
            />
            {mapLoaded && activeIcon && comingSoonIcon && (
              <MarkerClusterGroup
                chunkedLoading
                maxClusterRadius={50}
                spiderfyOnMaxZoom
                showCoverageOnHover={false}
                zoomToBoundsOnClick
              >
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={[location.coordinates.lat, location.coordinates.lng]}
                    icon={location.type === 'active' ? activeIcon : comingSoonIcon}
                    eventHandlers={{
                      click: () => setSelectedLocation(location),
                    }}
                  >
                    <Popup className="map-popup">
                      <div className="p-2">
                        <h3 className="font-bold">{location.name}</h3>
                        <p className="text-sm text-gray-600">{location.city}</p>
                        <span className={`inline-block px-2 py-1 rounded text-xs ${location.type === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {t(location.type === 'active' ? 'map_status_active' : 'map_status_soon')}
                        </span>
                      </div>
                </Popup>
              </Marker>
            ))}
              </MarkerClusterGroup>
            )}
          </MapContainer>
        </div>
      </div>
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </section>
  );
}