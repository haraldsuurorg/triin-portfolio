import Image from "next/image";
import Link from "next/link";

interface IconBoxProps {
    iconSrc: string,
    alt: string,
    text: string,
    link: string
}

export default function IconBox({iconSrc, alt, text, link}: IconBoxProps) {
    return (
        <a href={link} className="flex items-center gap-2 text-text">
            <Image
                src={iconSrc}
                alt={alt}
                height={25}
                width={25}
            />
            {text}
        </a>
    )
}
