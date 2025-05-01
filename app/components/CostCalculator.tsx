'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';

interface CostInputs {
  squareMeters: number;
  roomCount: number;
  location: string;
  duration: number;
}

export default function CostCalculator() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');

  const [inputs, setInputs] = useState<CostInputs>({
    squareMeters: 0,
    roomCount: 1,
    location: '',
    duration: 12,
  });

  const [totalCost, setTotalCost] = useState<number | null>(null);

  // Basis kosten per vierkante meter per regio
  const baseCostPerM2: Record<string, number> = {
    'amsterdam': 25,
    'rotterdam': 20,
    'den-haag': 22,
    'utrecht': 23,
    'eindhoven': 19
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'location' ? value : Number(value)
    }));
  };

  const calculateCost = () => {
    if (!inputs.location || inputs.squareMeters <= 0) return;

    const baseCost = baseCostPerM2[inputs.location] * inputs.squareMeters;
    const roomMultiplier = 1 + (inputs.roomCount - 1) * 0.1; // 10% extra per kamer
    const monthlyTotal = baseCost * roomMultiplier;
    
    setTotalCost(Math.round(monthlyTotal));
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="section-title text-center group mb-12">{t('cost_calculator_title')}</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Locatie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('location')}
              </label>
              <select
                name="location"
                value={inputs.location}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="">{t('select_location')}</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="rotterdam">Rotterdam</option>
                <option value="den-haag">Den Haag</option>
                <option value="utrecht">Utrecht</option>
                <option value="eindhoven">Eindhoven</option>
              </select>
            </div>

            {/* Oppervlakte */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('square_meters')}
              </label>
              <input
                type="number"
                name="squareMeters"
                value={inputs.squareMeters}
                onChange={handleInputChange}
                min="0"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Aantal kamers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('room_count')}
              </label>
              <input
                type="number"
                name="roomCount"
                value={inputs.roomCount}
                onChange={handleInputChange}
                min="1"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Huurperiode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('rental_duration')}
              </label>
              <input
                type="number"
                name="duration"
                value={inputs.duration}
                onChange={handleInputChange}
                min="1"
                max="36"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              onClick={calculateCost}
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
            >
              {t('calculate_cost')}
            </button>

            {totalCost !== null && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('estimated_cost')}</h3>
                <p className="text-2xl font-bold text-primary">
                  €{totalCost} <span className="text-sm text-gray-500">{t('per_month')}</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">{t('cost_disclaimer')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}