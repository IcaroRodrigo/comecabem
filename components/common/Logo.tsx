import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Começa Bem"
      width={120}
      height={120}
      className={cn(
        "h-10 w-auto object-contain",
        variant === "white" && "brightness-0 invert",
        className
      )}
      priority
    />
  );
}
