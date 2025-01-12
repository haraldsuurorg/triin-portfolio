import Image from "next/image";
import { ReactNode } from "react";

interface USPProps {
    icon: string;
    title: string;
    description: ReactNode;
    className?: string;
}

export default function USP({ icon, title, description, className }: USPProps) {
    return (
        <div className={`flex flex-col justify-start items-center gap-4 p-10 transition ${className}`}>
            <Image
                src={icon}
                alt={title}
                width={60}
                height={60}
                className="bg-white p-3"
            />
            <h3 className="text-center">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    )
}