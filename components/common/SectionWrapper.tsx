import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  style?: CSSProperties;
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  style,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("w-full", className)} style={style}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
