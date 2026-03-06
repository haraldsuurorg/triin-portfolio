import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/',
                    destination: '/et',
                },
                {
                    source: '/:path((?!api|_next|_vercel|et|en|.*\\..*).*)',
                    destination: '/et/:path',
                },
            ],
        };
    },
};

export default withNextIntl(nextConfig);
