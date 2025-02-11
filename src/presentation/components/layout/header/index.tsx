'use client';

import React, { useState } from 'react';
import { 
  BookOpen,
  CalendarDays,
  DollarSign,
  Globe2,
  Menu, 
  Moon, 
  Sun,
  Users,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/presentation/contexts/ThemeProvider';

interface HeaderProps {
  toggleSidebar: () => void;
}

const useLanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const getLanguageName = (locale: string) => {
    const names: Record<string, string> = {
      pt: 'Português',
      en: 'English'
    };
    return names[locale] || locale;
  };

  return {
    currentLocale,
    switchLanguage,
    getLanguageName
  };
};




export const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  const { currentLocale, switchLanguage, getLanguageName } = useLanguageSwitch();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNavigationItems = [
    { href: '/', label: t('navigation.home') },
    { href: '#about', label: t('navigation.about') },
    { href: '#contact', label: t('navigation.contact') }
  ];

  const navigateToPage = (path: string) => {
    router.push(`/${currentLocale}/clubs/${path}`);
    setMobileMenuOpen(false);
  };

  const renderChurchMinistries = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
        >
          <Users size={16} className="mr-2" />
          {t('navigation.departments')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Users size={16} className="mr-2" />
            {t('navigation.departments')}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>{t('departments.sabbathSchool')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.music')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.sound')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.imageCommunication')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.homeFamily')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.asa')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.religiousLiberty')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.interested')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.health')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.education')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.prophecyPublications')}</DropdownMenuItem>
            <DropdownMenuItem>{t('departments.stewardship')}</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <BookOpen size={16} className="mr-2" />
            {t('navigation.clubs')}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => navigateToPage('adventurers')}>{t('clubs.adventurers')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigateToPage('pathfinders')}>{t('clubs.pathfinders')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigateToPage('embaiss')}>{t('clubs.embaiss')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigateToPage('universities')}>{t('clubs.universities')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigateToPage('youths')}>{t('clubs.youths')}</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <BookOpen size={16} className="mr-2" />
            {t('ministerial.title')}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>{t('ministerial.personalMinistry')}</DropdownMenuItem>
            <DropdownMenuItem>{t('ministerial.mensMinistry')}</DropdownMenuItem>
            <DropdownMenuItem>{t('ministerial.womensMinistry')}</DropdownMenuItem>
            <DropdownMenuItem>{t('ministerial.childrensMinistry')}</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>{t('departments.missions')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderChurchActivities = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
        >
          <CalendarDays size={16} className="mr-2" />
          {t('navigation.events')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{t('events.worship')}</DropdownMenuItem>
        <DropdownMenuItem>{t('events.specialPrograms')}</DropdownMenuItem>
        <DropdownMenuItem>{t('events.communityEvents')}</DropdownMenuItem>
        <DropdownMenuItem>{t('events.smallGroups')}</DropdownMenuItem>
        <DropdownMenuItem>{t('navigation.sermons')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderChurchFinances = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
        >
          <DollarSign size={16} className="mr-2" />
          {t('navigation.contributions')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{t('contributions.howToContribute')}</DropdownMenuItem>
        <DropdownMenuItem>{t('contributions.bankDetails')}</DropdownMenuItem>
        <DropdownMenuItem>{t('contributions.financialReporting')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderLanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="p-2"
          aria-label={t('header.languageSwitcher')}
        >
        <Globe2 size={16} className="mr-2" />
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {['pt', 'en'].map((locale) => (
          <DropdownMenuItem 
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`${currentLocale === locale ? 'bg-muted' : ''} cursor-pointer`}
          >
            <span className={currentLocale === locale ? 'font-bold' : ''}>
              {getLanguageName(locale)}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderMobileMenu = () => (
    <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-40">
      <div className="px-4 py-2">
        {mainNavigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="py-2">
          {renderChurchMinistries()}
        </div>
        <div className="py-2">
          {renderChurchActivities()}
        </div>
        <div className="py-2">
          {renderChurchFinances()}
        </div>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('header.toggleMenu')}
            >
              <Menu size={24} />
            </button>
            
            <a href="#home" className="flex items-center space-x-2 ml-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback>IASD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:block text-lg font-bold text-gray-900 dark:text-white">
                {t('home.name')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {renderChurchMinistries()}
            {renderChurchActivities()}
            {renderChurchFinances()}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {renderLanguageSwitcher()}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
              aria-label={t('header.toggleTheme')}
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-500" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && renderMobileMenu()}
      </div>
    </header>
  );
};