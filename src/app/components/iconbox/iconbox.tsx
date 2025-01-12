import Image from "next/image";
// import Link from "next/link";

interface IconBoxProps {
    iconSrc: string,
    alt: string,
    text: string,
    link?: string,
    className?: string,
    newTab?: boolean,
    Link?: boolean
}

export default function IconBox({iconSrc, alt, text, link, className, newTab, Link = true}: IconBoxProps) {
    return (
        Link ? (
            <a href={link} className={`flex items-center gap-2 text-text ${className}`} target={newTab ? "_blank" : "_self"}>
                <Image
                    src={iconSrc}
                    alt={alt}
                    height={25}
                    width={25}
                />
                {text}
            </a>
        ) : (
            <div className={`flex items-center gap-2 text-text ${className}`}>
                <Image
                    src={iconSrc}
                    alt={alt}
                    height={25}
                    width={25}
                />
                {text}
            </div>
        )
    )
}
