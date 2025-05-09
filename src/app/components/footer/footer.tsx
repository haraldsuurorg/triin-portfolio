import { useTranslations } from "next-intl";

interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    const t = useTranslations("footer");

    return (
        <footer className={`flex items-center justify-center py-6 ${className}`}>
            <p>Triin Suurorg {new Date().getFullYear()}. {t("copyright")}</p>
        </footer>
    )
}
