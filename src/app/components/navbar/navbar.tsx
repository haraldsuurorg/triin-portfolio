"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    pathname === href ? "text-primary hover:text-text" : "";

  return (
    <header className="container w-full flex justify-between items-center py-8">
      <div>
        <a href="/">
          <Image src="/logo.svg" alt="logo" width={175} height={100} />
        </a>
      </div>

      <nav className="flex gap-8 text-heading">
        <Link href="/" className={getLinkClass("/")}>
          Avaleht
        </Link>
        <Link href="/minust" className={getLinkClass("/minust")}>
          Minust
        </Link>
        <Link href="/kontakt" className={getLinkClass("/kontakt")}>
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
