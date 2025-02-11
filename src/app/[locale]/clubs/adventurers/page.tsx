'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Award,
  Calendar,
  Flower2,
  Heart,
  Medal,
  ScrollText,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ModalPageLayout from '@/presentation/components/layout/modalPages';

const AventureirosPage = () => {
  const t = useTranslations();

  const activities = [
    {
      date: '2025-03-20',
      title: t('adventure.activities.natureFun'),
      type: t('adventure.activities.outdoor'),
      status: t('adventure.status.upcoming')
    },
    {
      date: '2025-04-05',
      title: t('adventure.activities.crafts'),
      type: t('adventure.activities.learning'),
      status: t('adventure.status.upcoming')
    }
  ];

  const specialties = [
    { name: t('adventure.specialties.nature'), level: 'básico' },
    { name: t('adventure.specialties.arts'), level: 'intermediário' },
    { name: t('adventure.specialties.bible'), level: 'avançado' }
  ];

  return (
    <ModalPageLayout title={t('clubs.aventureiros')}>
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
                {t('adventure.clubName')} KM12B
              </h1>
              <p className="text-lg opacity-90">
                {t('adventure.motto')}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Users className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">
                {t('adventure.stats.members')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Medal className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">20</p>
              <p className="text-sm text-muted-foreground">
                {t('adventure.stats.specialties')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Flower2 className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">
                {t('adventure.stats.classes')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col items-center">
              <Star className="h-8 w-8 mb-2 text-primary" />
              <p className="text-2xl font-bold">25</p>
              <p className="text-sm text-muted-foreground">
                {t('adventure.stats.activities')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
            <TabsTrigger value="about">{t('adventure.tabs.about')}</TabsTrigger>
            <TabsTrigger value="activities">{t('adventure.tabs.activities')}</TabsTrigger>
            <TabsTrigger value="specialties">{t('adventure.tabs.specialties')}</TabsTrigger>
            <TabsTrigger value="gallery">{t('adventure.tabs.gallery')}</TabsTrigger>
            <TabsTrigger value="join" className="hidden lg:block">{t('adventure.tabs.join')}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('adventure.about.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t('adventure.about.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>{t('adventure.about.values')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>{t('adventure.about.achievements')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('adventure.activities.title')}</CardTitle>
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
                <CardTitle>{t('adventure.specialties.title')}</CardTitle>
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
                <CardTitle>{t('adventure.gallery.title')}</CardTitle>
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
                        alt="adventure Club"
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
                <CardTitle>{t('adventure.join.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t('adventure.join.description')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        {t('adventure.join.requirements')}
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>{t('adventure.join.age')}</li>
                        <li>{t('adventure.join.commitment')}</li>
                        <li>{t('adventure.join.parental')}</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        {t('adventure.join.contact')}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {t('adventure.join.contactInfo')}
                      </p>
                      <div className="space-y-2">
                        <p>📞 (11) 1234-5678</p>
                        <p>✉️ aventureiros.km12b@gmail.com</p>
                        <a>https://aventureiros-km12b.netlify.app/</a>
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

export default AventureirosPage;