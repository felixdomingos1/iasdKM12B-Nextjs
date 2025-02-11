import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('contact.title')}
            </h4>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-2" />
                +244 926 195 572
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-2" />
                iasdkm12b@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                KM 12B, Viana, Angola
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('quickLinks.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ministerios" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  {t('quickLinks.ministries')}
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  {t('quickLinks.events')}
                </Link>
              </li>
              <li>
                <Link href="/sermoes" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  {t('quickLinks.sermons')}
                </Link>
              </li>
              <li>
                <Link href="/contribuicoes" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                  {t('quickLinks.contributions')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('schedule.title')}
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>{t('schedule.sabbathSchool')}</p>
              <p>{t('schedule.worship')}</p>
              <p>{t('schedule.evening')}</p>
              <p>{t('schedule.sundaysMeetings')}</p>
              <p>{t('schedule.tuesdaysMeetings')}</p>
              <p>{t('schedule.wednesdaysMeetings')}</p>
              <p>{t('schedule.fridaysMeetings')}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://facebook.com/iasdkm12b" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} IASD KM 12B. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};