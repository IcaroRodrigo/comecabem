import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
