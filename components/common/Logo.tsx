import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

function IconMark({ isWhite }: { isWhite: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      className="h-9 w-9 flex-shrink-0"
      aria-hidden
    >
      {/* Arco externo do C */}
      <path
        d="M26 2 A24 24 0 1 0 26 50 L26 41 A15 15 0 1 1 26 11 Z"
        fill="#F97316"
      />
      {/* Seta de crescimento */}
      <polyline
        points="30,7 40,1 40,16"
        fill="none"
        stroke={isWhite ? "#ffffff" : "#0F4C5C"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Barra esquerda */}
      <rect x="17" y="30" width="6" height="12" fill={isWhite ? "#ffffff" : "#0F4C5C"} rx="1.5" />
      {/* Barra direita */}
      <rect x="25" y="24" width="6" height="18" fill="#22C55E" rx="1.5" />
    </svg>
  );
}

export function Logo({ variant = "default", className }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Começa Bem">
      <IconMark isWhite={isWhite} />
      <div className="flex flex-col leading-none gap-0.5">
        <span
          className="text-[15px] font-bold tracking-tight"
          style={{ color: isWhite ? "#ffffff" : "#0F4C5C" }}
        >
          começa
        </span>
        <span className="text-[19px] font-extrabold tracking-tight text-brand-orange">
          bem
        </span>
      </div>
    </div>
  );
}
