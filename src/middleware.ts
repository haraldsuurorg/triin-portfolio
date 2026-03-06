import {NextRequest, NextResponse} from 'next/server';

const locales = ['et', 'en'];
const defaultLocale = 'et';

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const hasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!hasLocale) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
