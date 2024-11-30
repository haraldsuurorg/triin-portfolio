interface FooterProps {
    className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
        <footer className={`flex items-center justify-center py-6 ${className}`}>
            <p>Triin Suurorg {new Date().getFullYear()}. Kõik õigused on kaitstud.</p>
        </footer>
    )
}
