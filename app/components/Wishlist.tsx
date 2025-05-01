'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../i18n/client';
import Image from 'next/image';

interface WishlistItem {
  id: number;
  title: string;
  address: string;
  price: number;
  image: string;
  squareMeters: number;
  rooms: number;
}

export default function Wishlist() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'nl';
  const { t } = useTranslation(locale, 'common');

  // Wishlist items ophalen uit localStorage
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('wishlist');
    if (storedItems) {
      setWishlistItems(JSON.parse(storedItems));
    }
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center group mb-12">{t('wishlist_title')}</h2>

        {wishlistItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.address}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-bold">€{item.price}/maand</span>
                    <span className="text-gray-500">{item.squareMeters}m² • {item.rooms} {t('rooms')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      {t('remove_from_wishlist')}
                    </button>
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      {t('view_details')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">{t('empty_wishlist')}</p>
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
              {t('explore_properties')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}