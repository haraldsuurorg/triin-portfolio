import Image from "next/image";

interface ReviewProps {
  text: string;
  name: string;
  className?: string;
  color?: "primary" | "white";
}

export default function Review({ text, name, className, color = "primary" }: ReviewProps) {
    const bgColor = color === "primary" ? "bg-primary" : "bg-white";
    const iconSrc = color === "primary" ? "/icons/quote-white.svg" : "/icons/quote.svg";

  return (
    <div className={`flex flex-col gap-4 p-10 ${className} ${bgColor}`}>
      <Image
        src={iconSrc}
        alt="quote"
        width={35}
        height={35}
      />
      <p>
        {text}
      </p>
      <p className="font-semibold">
        {name}
      </p>
    </div>
  );
}