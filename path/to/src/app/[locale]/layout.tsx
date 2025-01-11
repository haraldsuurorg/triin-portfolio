import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "../globals.css";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    setRequestLocale(locale);

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale)) {
        notFound();
    }

    // Since `getMessages` is asynchronous, handle it accordingly
    // You might need to fetch messages outside of this component or use suspense
    // Here's an example using React's Suspense (if applicable)

    const messages = getMessages(); // Assuming getMessages returns a Promise

    return (
        <html lang={locale}>
            <body>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </React.Suspense>
            </body>
        </html>
    );
} 