"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    pathname === href ? "text-primary hover:text-text" : "";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-background shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <header className="container w-full flex justify-between items-center py-8">
        <div>
          <a href="/">
            <Image src="/logo.svg" alt="logo" width={175} height={100} />
          </a>
        </div>

        <nav className="hidden md:flex gap-8 text-heading">
          <Link href="/" className={getLinkClass("/")}>Avaleht</Link>
          <Link href="/minust" className={getLinkClass("/minust")}>Minust</Link>
          <Link href="/kontakt" className={getLinkClass("/kontakt")}>Kontakt</Link>
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
          <Link href="/" className={getLinkClass("/")}>Avaleht</Link>
          <Link href="/minust" className={getLinkClass("/minust")}>Minust</Link>
          <Link href="/kontakt" className={getLinkClass("/kontakt")}>Kontakt</Link>
        </nav>
      </div>
    </div>
  );
}
