import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="container w-full flex justify-between items-center py-8">
            <div>
                <a href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={175}
                        height={100}
                    />
                </a>
            </div>

            <nav className="flex gap-8 text-heading">
                <Link href="/">Avaleht</Link>
                <Link href="/minust">Minust</Link>
                <Link href="/kontakt">Kontakt</Link>
            </nav>
        </header>
    )
}