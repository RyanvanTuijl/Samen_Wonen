export interface Location {
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

export const locations: Location[] = [
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
    amenities: ["Bibliotheek", "Fitnessruimte", "Tuin"]
  },
  {
    id: 5,
    name: "Vredehof Senioren Residentie",
    city: "Groningen",
    type: "active",
    coordinates: { lat: 53.2194, lng: 6.5665 },
    description: "Moderne seniorenresidentie met alle nodige voorzieningen.",
    rooms: 14,
    amenities: ["Wellness centrum", "Restaurant", "Binnentuin"]
  },
  {
    id: 6,
    name: "Zorgtehuis Zonnebloemhof",
    city: "Eindhoven",
    type: "coming_soon",
    coordinates: { lat: 51.4416, lng: 5.4697 },
    description: "Innovatief zorgcomplex met focus op technologie-ondersteunde zorg.",
    rooms: 20,
    amenities: ["Smart home technologie", "Fitnessruimte", "Bioscoop"]
  },
  {
    id: 7,
    name: "Residentie De Eikenhof",
    city: "Amsterdam",
    type: "active",
    coordinates: { lat: 52.3702, lng: 4.8952 },
    description: "Charmant wooncomplex in een rustige buurt van Amsterdam.",
    rooms: 9,
    amenities: ["Gemeenschappelijke tuin", "Recreatieruimte", "Leeshoek"]
  },
  {
    id: 8,
    name: "Zorgflat Meerweide",
    city: "Rotterdam",
    type: "coming_soon",
    coordinates: { lat: 51.9280, lng: 4.4200 },
    description: "Mooie zorgflat aan het water, met uitzicht over de Maas.",
    rooms: 11,
    amenities: ["Riverterras", "Fitness", "Bibliotheek"]
  },
  {
    id: 9,
    name: "Residentie Boschoord",
    city: "Breda",
    type: "active",
    coordinates: { lat: 51.5719, lng: 4.7683 },
    description: "Gelegen aan de rand van een bos, perfect voor natuurliefhebbers.",
    rooms: 7,
    amenities: ["Wandelpaden", "Tuinen", "Recreatieruimte"]
  },
  {
    id: 10,
    name: "Zorgcentrum Zonneweide",
    city: "Maastricht",
    type: "active",
    coordinates: { lat: 50.8514, lng: 5.6910 },
    description: "Een zonnig complex met ruime appartementen en mooie tuinen.",
    rooms: 15,
    amenities: ["Zonneterras", "Restaurant", "Activiteitenruimte"]
  },
  {
    id: 11,
    name: "Woonzorgcomplex De Haven",
    city: "Den Haag",
    type: "coming_soon",
    coordinates: { lat: 52.0767, lng: 4.3139 },
    description: "Modern complex aan de kust met zeezicht.",
    rooms: 18,
    amenities: ["Strandtoegang", "Spa", "Restaurant"]
  },
  {
    id: 12,
    name: "Seniorenresidentie Lindenhof",
    city: "Nijmegen",
    type: "active",
    coordinates: { lat: 51.8426, lng: 5.8546 },
    description: "Rustige residentie in een groene omgeving.",
    rooms: 10,
    amenities: ["Tuinen", "Recreatieruimte", "Bibliotheek"]
  },
  {
    id: 13,
    name: "Zorghuis Rivierzicht",
    city: "Arnhem",
    type: "coming_soon",
    coordinates: { lat: 51.9851, lng: 5.8987 },
    description: "Een modern zorghuis met uitzicht op de Rijn.",
    rooms: 12,
    amenities: ["Rivierterras", "Fitnessruimte", "Cinema"]
  }
];

export const getLocalizedText = (key: string, locale: string, fallback: string) => {
  // This is a simplified version. In a real implementation,
  // you would look up the key in a translation file based on the locale.
  return fallback;
};