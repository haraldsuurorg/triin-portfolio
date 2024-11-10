import Link from "next/link";

export default function Button({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
  return (
    <Link
      className={`flex flex-nowrap w-fit px-6 py-3 bg-primary border border-primary hover:bg-transparent hover:text-black ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}