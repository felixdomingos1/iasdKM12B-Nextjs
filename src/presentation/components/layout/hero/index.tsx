'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { 
  Book,
  Calendar,
  Clock,
  Cross,
  HandHeart,
  MapPin
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '../../ui/button';

const MINISTRY_ICONS = {
  'sabbathSchool': Book,
  'community': HandHeart,
  'worship': Cross,
  'events': Calendar
};

export const HeroSection: React.FC = () => {
  const t = useTranslations();
  
  const churchDetails = {
    ministries: ['sabbathSchool', 'community', 'worship', 'events']
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t('home.name')}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-4">
                {t('home.title')}
              </h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {t('home.description')}
            </p>
            
            {/* Service Times and Location */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="text-primary-500 w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('worship.serviceTime')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('worship.sabbath')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary-500 w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      {t('location.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('location.address')}
                    </p>
                </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto group"
              >
                <Book className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                {t('home.joinUs')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto group"
              >
                <HandHeart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('home.contactUs')}
              </Button>
            </div>
          </div>

          {/* Church Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
              <Image
                src="/api/placeholder/400/400"
                alt={t('home.churchImageAlt')}
                width={400}
                height={400}
                className="rounded-xl object-cover border-4 border-primary-500 shadow-2xl"
              />
            </div>
          </div>

          {/* Ministries Section */}
          <div className="col-span-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center md:text-left">
              {t('ministries.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {churchDetails.ministries.map((ministry) => {
                const MinistryIcon = MINISTRY_ICONS[ministry as keyof typeof MINISTRY_ICONS];
                return (
                  <div 
                    key={ministry} 
                    className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <MinistryIcon 
                      className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform" 
                    />
                    <span className="text-xs text-gray-600 dark:text-gray-300 text-center">
                      {t(`ministries.${ministry}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;