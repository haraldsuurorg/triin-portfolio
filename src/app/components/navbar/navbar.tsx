"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "../localeswitcher/localeswitcher";

export default function Navbar() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string

  const getLinkClass = (href: string) => {
    // For homepage, check both "/" and "/en"
    if (href === "/") {
      return pathname === "/" || pathname === `/${locale}` 
        ? "text-primary hover:text-heading" 
        : "";
    }
    
    // For other pages
    const fullPath = locale === 'et' ? href : `/${locale}${href}`;
    return pathname === fullPath ? "text-primary hover:text-heading" : "";
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed w-full bg-background ${!isHeaderScrolled ? "" : "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"}`}>
      <header className="container w-full flex justify-between items-center py-8">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={175} height={100} />
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 text-heading">
          <Link href="/" className={getLinkClass("/")}>{t("home")}</Link>
          <Link href="/minust" className={getLinkClass("/minust")}>{t("about")}</Link>
          <Link href="/kontakt" className={getLinkClass("/kontakt")}>{t("contact")}</Link>
          <LocaleSwitcher />
        </nav>

        <div className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image
            src="/icons/menu.svg"
            alt="Menu icon"
            width={40}
            height={40}
            className={`${isMenuOpen ? "hidden" : "block"}`}
          />

          <Image
            src="/icons/close.svg"
            alt="Close icon"
            width={40}
            height={40}
            className={`h-[25px] ${isMenuOpen ? "block" : "hidden"}`}
          />
        </div>
      </header>

      <div className={`mobile-menu h-[35vh] w-full top-[104px] left-0 z-2 bg-background flex items-center justify-center  ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col gap-6">
          <Link href="/" className={getLinkClass("/")}>{t("home")}</Link>
          <Link href="/minust" className={getLinkClass("/minust")}>{t("about")}</Link>
          <Link href="/kontakt" className={getLinkClass("/kontakt")}>{t("contact")}</Link>
        </nav>
      </div>
    </div>
  );
}
