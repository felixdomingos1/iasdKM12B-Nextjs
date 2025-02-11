import React from 'react';
import { useTranslations } from 'next-intl';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin,
  Star,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChurchHistory {
  period: string;
  title: string;
  description: string;
  current?: boolean;
  activities: string[];
  achievements: string[];
}

const ChurchHistorySection = () => {
  const t = useTranslations('churchHistory');

  const histories: ChurchHistory[] = [
    {
      period: '2020 - 2024',
      title: t('history.establishment.title'),
      description: 'IASD KM 12B Viana',
      current: true,
      activities: [
        'Cultos regulares aos sábados às 09:30 e 19:00',
        'Escola Sabatina com classes para todas as idades',
        'Ministério Jovem às sextas-feiras',
        'Pequenos grupos durante a semana'
      ],
      achievements: [
        'Construção do novo templo',
        'Crescimento de 40% na membresia',
        'Estabelecimento do Clube de Desbravadores',
        'Programa de assistência comunitária'
      ]
    },
    {
      period: '1992 - 2025',
      title: t('history.foundation.title'),
      description: 'Início da Congregação',
      activities: [
        'Reuniões em residências dos membros',
        'Primeiros batismos realizados',
        'Formação da primeira Escola Sabatina',
        'Início dos trabalhos missionários na região'
      ],
      achievements: [
        'Aquisição do terreno para construção',
        'Formação do primeiro grupo de liderança',
        'Estabelecimento de parcerias com igrejas vizinhas',
        'Início do ministério de música'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nossa jornada de fé e crescimento ao longo dos anos
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

        {histories.map((history, index) => (
          <div key={index} className="mb-16 relative">
            {/* Period indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-background p-2 z-10">
              <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="font-medium">{history.period}</span>
              </div>
            </div>

            {/* Content card */}
            <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} relative mt-8`}>
              {/* Connector line */}
              <div className={`absolute top-8 ${index % 2 === 0 ? '-left-8' : '-right-8'} w-8 h-1 bg-primary/20`} />
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{history.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{history.description}</span>
                    </div>
                  </div>
                  {history.current && (
                    <Badge className="bg-green-500">
                      {t('current')}
                    </Badge>
                  )}
                </div>

                <div className="grid gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-semibold">
                      <Clock className="w-5 h-5 text-primary" />
                      <h4>{t('sections.activities')}</h4>
                    </div>
                    <div className="grid gap-2">
                      {history.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 text-primary/60" />
                          <span className="text-muted-foreground">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-semibold">
                      <Star className="w-5 h-5 text-primary" />
                      <h4>{t('sections.achievements')}</h4>
                    </div>
                    <div className="grid gap-2">
                      {history.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 text-primary/60" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchHistorySection;