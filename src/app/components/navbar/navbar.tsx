import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="container w-full flex justify-between items-center py-8">
            <div>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                />
            </div>

            <nav className="flex gap-8">
                <Link href="/">Avaleht</Link>
                <Link href="/minust">Minust</Link>
                <Link href="/kontakt">Kontakt</Link>
            </nav>
        </header>
    )
}