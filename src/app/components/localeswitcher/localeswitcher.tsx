
'use client';

import { usePathname, useParams } from 'next/navigation';
import { routing, Link } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as string) || routing.defaultLocale;

  // Remove locale prefix from pathname if it exists
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';

  return (
    <div className="flex gap-4">
      {routing.locales.map((locale) => {
        const isActive = currentLocale === locale;

        return (
          <Link
            key={locale}
            href={pathnameWithoutLocale}
            locale={locale}
            className={`uppercase
              ${isActive
                ? 'text-primary hover:text-heading'
                : 'text-heading hover:text-primary'
              }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}