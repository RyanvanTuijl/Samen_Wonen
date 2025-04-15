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
  { ssr: false }
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

interface Location {
  id: number;
  name: string;
  city: string;
  type: 'active' | 'coming_soon';
  coordinates: {
    lat: number;
    lng: number;
  };
  description?: string;
  rooms?: number;
  amenities?: string[];
}

const locations: Location[] = [
  {
    id: 1,
    name: "Zorgcentrum De Linden",
    city: "Amsterdam",
    type: "active",
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description: "Modern zorgcentrum in het hart van Amsterdam met een levendige gemeenschap.",
    rooms: 12,
    amenities: ["Fitness ruimte", "Gemeenschappelijke tuin", "Bibliotheek"]
  },
  {
    id: 2,
    name: "Huize Beatrix",
    city: "Rotterdam",
    type: "active",
    coordinates: { lat: 51.9225, lng: 4.4792 },
    description: "Gezellig wooncomplex met focus op intergenerationeel wonen.",
    rooms: 8,
    amenities: ["Daktuin", "Activiteitenruimte", "Restaurant"]
  },
  {
    id: 3,
    name: "Residence Parkzicht",
    city: "Utrecht",
    type: "coming_soon",
    coordinates: { lat: 52.0907, lng: 5.1214 },
    description: "Nieuw complex met uitzicht op het stadspark.",
    rooms: 15,
    amenities: ["Zwembad", "Theater", "Café"]
  },
  {
    id: 4,
    name: "Zorghuis Oranjepark",
    city: "Den Haag",
    type: "active",
    coordinates: { lat: 52.0705, lng: 4.3007 },
    description: "Rustig gelegen zorgcomplex nabij het Oranjepark.",
    rooms: 10,
    amenities: ["Binnentuin", "Hobbyruimte", "Bibliotheek"]
  },
  {
    id: 5,
    name: "De Zonnehoek",
    city: "Eindhoven",
    type: "active",
    coordinates: { lat: 51.4416, lng: 5.4697 },
    description: "Modern complex met innovatieve zorgtechnologie.",
    rooms: 14,
    amenities: ["Smart home systemen", "Fitnessruimte", "Café"]
  },
  {
    id: 6,
    name: "Huize Welkom",
    city: "Groningen",
    type: "coming_soon",
    coordinates: { lat: 53.2194, lng: 6.5665 },
    description: "Studentvriendelijk wooncomplex in het centrum.",
    rooms: 18,
    amenities: ["Studieruimtes", "Game room", "Dakterras"]
  },
  {
    id: 7,
    name: "Residentie Zeezicht",
    city: "Den Helder",
    type: "active",
    coordinates: { lat: 52.9597, lng: 4.7597 },
    description: "Prachtig complex met uitzicht op zee.",
    rooms: 9,
    amenities: ["Strand toegang", "Wellness centrum", "Restaurant"]
  },
  {
    id: 8,
    name: "Het Kasteel",
    city: "Maastricht",
    type: "active",
    coordinates: { lat: 50.8514, lng: 5.6910 },
    description: "Historisch pand met moderne faciliteiten.",
    rooms: 11,
    amenities: ["Historische tuin", "Muziekkamer", "Bibliotheek"]
  },
  {
    id: 9,
    name: "Zorghaven",
    city: "Almere",
    type: "coming_soon",
    coordinates: { lat: 52.3508, lng: 5.2647 },
    description: "Nieuw complex aan het water.",
    rooms: 16,
    amenities: ["Jachthaven", "Sportfaciliteiten", "Restaurant"]
  },
  {
    id: 10,
    name: "Villa Flora",
    city: "Arnhem",
    type: "active",
    coordinates: { lat: 51.9851, lng: 5.8987 },
    description: "Groen complex met grote tuinen.",
    rooms: 13,
    amenities: ["Moestuin", "Kas", "Theehuis"]
  },
  {
    id: 11,
    name: "De Stadstuin",
    city: "Zwolle",
    type: "active",
    coordinates: { lat: 52.5163, lng: 6.0831 },
    description: "Centraal gelegen met focus op groen leven.",
    rooms: 12,
    amenities: ["Stadstuinen", "Workshop ruimte", "Café"]
  },
  {
    id: 12,
    name: "Zonneweide",
    city: "Enschede",
    type: "coming_soon",
    coordinates: { lat: 52.2215, lng: 6.8937 },
    description: "Duurzaam complex met zonnepanelen.",
    rooms: 15,
    amenities: ["Zonne-energie", "Groen dak", "Fitness"]
  },
  {
    id: 13,
    name: "Het Anker",
    city: "Leeuwarden",
    type: "active",
    coordinates: { lat: 53.2014, lng: 5.7999 },
    description: "Traditioneel complex met moderne touch.",
    rooms: 10,
    amenities: ["Binnentuin", "Koffiecorner", "Bibliotheek"]
  }
];

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
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

  useEffect(() => {
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
  }, []);

  if (typeof window === 'undefined') {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">{t('map_title_fallback')}</h2>
          <p className="text-gray-600">{t('map_loading_message')}</p>
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
            whenReady={() => setMapLoaded(true)}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapLoaded && locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.coordinates.lat, location.coordinates.lng]}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-bold">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.city}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs ${
                      location.type === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {t(location.type === 'active' ? 'map_status_active' : 'map_status_soon')}
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
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