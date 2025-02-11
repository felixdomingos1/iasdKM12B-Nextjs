import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  BookOpen, 
  Cross, 
  Heart, 
  Menu,
  Users 
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Ministry {
  title: string;
  description: string;
  image: string;
  leader?: string;
  meetingTime: string;
  activities: string[];
  contactLink?: string;
  involveLink?: string;
  category: 'community' | 'youth' | 'education' | 'worship';
}

const MinistriesSection: React.FC = () => {
  const t = useTranslations('ministries');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const CATEGORY_ICONS = {
    'community': Heart,
    'youth': Users,
    'education': BookOpen,
    'worship': Cross
  };

  const ministries: Ministry[] = [
    {
      title: t('ministryDetails.sabbathSchool.title'),
      description: t('ministryDetails.sabbathSchool.description'),
      image: '/api/placeholder/400/300',
      leader: t('ministryDetails.sabbathSchool.leader'),
      meetingTime: t('ministryDetails.sabbathSchool.meetingTime'),
      activities: [
        t('ministryDetails.sabbathSchool.activities.1'),
        t('ministryDetails.sabbathSchool.activities.2'),
        t('ministryDetails.sabbathSchool.activities.3')
      ],
      contactLink: '#contact',
      involveLink: '#involve',
      category: 'education'
    },
    {
      title: t('ministryDetails.youth.title'),
      description: t('ministryDetails.youth.description'),
      image: '/api/placeholder/400/300',
      leader: t('ministryDetails.youth.leader'),
      meetingTime: t('ministryDetails.youth.meetingTime'),
      activities: [
        t('ministryDetails.youth.activities.1'),
        t('ministryDetails.youth.activities.2'),
        t('ministryDetails.youth.activities.3')
      ],
      contactLink: '#contact',
      involveLink: '#involve',
      category: 'youth'
    },
    {
      title: t('ministryDetails.communityAction.title'),
      description: t('ministryDetails.communityAction.description'),
      image: '/api/placeholder/400/300',
      leader: t('ministryDetails.communityAction.leader'),
      meetingTime: t('ministryDetails.communityAction.meetingTime'),
      activities: [
        t('ministryDetails.communityAction.activities.1'),
        t('ministryDetails.communityAction.activities.2'),
        t('ministryDetails.communityAction.activities.3')
      ],
      contactLink: '#contact',
      involveLink: '#involve',
      category: 'community'
    }
  ];

  const filteredMinistries = selectedCategory === 'all' 
    ? ministries 
    : ministries.filter(ministry => ministry.category === selectedCategory);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </div>

        {/* Category filters - Desktop */}
        <div className="hidden md:flex justify-center mb-8 space-x-4">
          {Object.entries(t.raw('categories')).map(([key, label]) => {
            const CategoryIcon = CATEGORY_ICONS[key as keyof typeof CATEGORY_ICONS];
            return (
              <Badge 
                key={key}
                variant={selectedCategory === key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(key)}
                className="cursor-pointer flex items-center space-x-2 px-4 py-2"
              >
                {CategoryIcon && <CategoryIcon size={16} className="mr-2" />}
                {label as React.ReactNode}
              </Badge>
            );
          })}
        </div>

        {/* Category filters - Mobile */}
        <div className="md:hidden flex justify-center mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full max-w-xs">
                <Menu className="mr-2 h-4 w-4" />
                {t('selectCategory')}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full max-w-xs">
              {Object.entries(t.raw('categories')).map(([key, label]) => {
                const CategoryIcon = CATEGORY_ICONS[key as keyof typeof CATEGORY_ICONS];
                return (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className="flex items-center"
                  >
                    {CategoryIcon && <CategoryIcon size={16} className="mr-2" />}
                    {label as React.ReactNode}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredMinistries.map((ministry, index) => {
            const CategoryIcon = CATEGORY_ICONS[ministry.category as keyof typeof CATEGORY_ICONS];
            return (
              <Card 
                key={index} 
                className="shadow-md hover:shadow-lg transition-shadow dark:bg-gray-800"
              >
                <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    {CategoryIcon && <CategoryIcon size={20} className="mr-2 flex-shrink-0" />}
                    <span className="truncate">{ministry.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="relative w-full aspect-video mb-4">
                    <Image 
                      src={ministry.image} 
                      alt={ministry.title} 
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">
                    {ministry.description}
                  </p>
                  
                  <div className="mb-4 space-y-2">
                    <div>
                      <strong className="text-sm sm:text-base">{t('details.leader')}:</strong>
                      <p className="text-sm sm:text-base">{ministry.leader}</p>
                    </div>
                    
                    <div>
                      <strong className="text-sm sm:text-base">{t('details.meetingTime')}:</strong>
                      <p className="text-sm sm:text-base">{ministry.meetingTime}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <strong className="text-sm sm:text-base">{t('details.activities')}:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ministry.activities.map((activity, actIndex) => (
                        <Badge 
                          key={actIndex} 
                          variant="secondary"
                          className="text-xs sm:text-sm"
                        >
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {ministry.contactLink && (
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full text-sm sm:text-base"
                      >
                        <a href={ministry.contactLink}>
                          {t('details.contact')}
                        </a>
                      </Button>
                    )}
                    {ministry.involveLink && (
                      <Button 
                        asChild 
                        className="w-full text-sm sm:text-base"
                      >
                        <a href={ministry.involveLink}>
                          {t('details.involve')}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredMinistries.length === 0 && (
          <p className="text-center text-gray-500 mt-8">{t('viewAll')}</p>
        )}
      </div>
    </section>
  );
};

export default MinistriesSection;