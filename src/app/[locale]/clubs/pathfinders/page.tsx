'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Award,
  Calendar,
  Heart,
  Map,
  ScrollText,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ModalPageLayout from '@/presentation/components/layout/modalPages';

const PathfindersPage = () => {
  const t = useTranslations();

  const activities = [
    {
      date: '2025-03-15',
      title: t('pathfinders.activities.camping'),
      type: t('pathfinders.activities.outdoor'),
      status: t('pathfinders.status.upcoming')
    },
    {
      date: '2025-04-10',
      title: t('pathfinders.activities.speciality'),
      type: t('pathfinders.activities.learning'),
      status: t('pathfinders.status.upcoming')
    }
  ];

  const specialties = [
    { name: t('pathfinders.specialties.firstAid'), level: 'advanced' },
    { name: t('pathfinders.specialties.camping'), level: 'intermediate' },
    { name: t('pathfinders.specialties.astronomy'), level: 'basic' }
  ];

  return (
    <ModalPageLayout title={t('clubs.pathfinders')}>
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src="/api/placeholder/1200/400"
            alt="Aventureiros Club"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                {t('pathfinders.clubName')} KM12B
              </h1>
              <p className="text-lg opacity-90">
                {t('pathfinders.motto')}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Users className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">232</p>
              <p className="text-sm text-muted-foreground">
                {t('pathfinders.stats.members')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Trophy className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">
                {t('pathfinders.stats.specialties')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Map className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">
                {t('pathfinders.stats.campings')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Star className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">10</p>
              <p className="text-sm text-muted-foreground">
                {t('pathfinders.stats.classes')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            <TabsTrigger value="about">{t('pathfinders.tabs.about')}</TabsTrigger>
            <TabsTrigger value="activities">{t('pathfinders.tabs.activities')}</TabsTrigger>
            <TabsTrigger value="specialties">{t('pathfinders.tabs.specialties')}</TabsTrigger>
            <TabsTrigger value="gallery">{t('pathfinders.tabs.gallery')}</TabsTrigger>
            <TabsTrigger value="join" className="hidden lg:block">{t('pathfinders.tabs.join')}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('pathfinders.about.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t('pathfinders.about.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>{t('pathfinders.about.values')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{t('pathfinders.about.achievements')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('pathfinders.activities.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                      <Badge>{activity.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specialties" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('pathfinders.specialties.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <ScrollText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{specialty.name}</p>
                        <Badge variant="secondary">{specialty.level}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('pathfinders.gallery.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="aspect-square relative rounded-lg overflow-hidden"
                    >
                     <Image
                        src="/api/placeholder/1200/400"
                        alt="Aventureiros Club"
                        width={1200}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="join" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('pathfinders.join.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t('pathfinders.join.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        {t('pathfinders.join.requirements')}
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>{t('pathfinders.join.age')}</li>
                        <li>{t('pathfinders.join.commitment')}</li>
                        <li>{t('pathfinders.join.parental')}</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        {t('pathfinders.join.contact')}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('pathfinders.join.contactInfo')}
                      </p>
                      <div className="space-y-2">
                        <p>📞 (11) 1234-5678</p>
                        <p>✉️ dbv.heroisdafe@gmail.com</p>
                        <a>https://heroisdafe.netlify.app/</a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ModalPageLayout>
  );
};

export default PathfindersPage;