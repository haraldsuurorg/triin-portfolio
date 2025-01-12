import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'data-sitekey'?: string;
  'data-callback'?: string;
  'data-size'?: string;
}

export default function Button({ children, href, className, type, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link
        className={`flex flex-nowrap w-fit px-6 py-3 bg-primary border border-primary hover:bg-transparent hover:text-heading ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
  } else {
    return (
      <button
        className={`flex flex-nowrap w-fit px-6 py-3 bg-primary border border-primary hover:bg-transparent hover:text-heading ${className}`}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
}
