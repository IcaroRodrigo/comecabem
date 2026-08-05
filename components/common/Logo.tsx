import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
  priority?: boolean;
}

export function Logo({ variant = "default", className, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Começa Bem"
      width={192}
      height={128}
      priority={priority}
      className={cn(
        "block h-32 w-auto object-contain",
        variant === "white" && "brightness-0 invert",
        className
      )}
    />
  );
}
