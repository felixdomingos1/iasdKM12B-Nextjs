import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { notFound } from 'next/navigation';

export const locales = ['en', 'pt'];
export type Locale = typeof locales[number];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export default getRequestConfig(async () => {
  try {
    return {
      messages: (await import('../messages/en.json')).default
    };
  } catch (error) {
    console.log(error);
    notFound();
  }
});