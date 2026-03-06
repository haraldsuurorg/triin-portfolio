import {NextRequest, NextResponse} from 'next/server';

const locales = ['et', 'en'];
const defaultLocale = 'et';

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const hasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!hasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/${defaultLocale}${pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
