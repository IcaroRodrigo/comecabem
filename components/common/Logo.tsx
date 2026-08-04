import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

function IconMark({ isWhite }: { isWhite: boolean }) {
  const petrol = isWhite ? "#ffffff" : "#0F4C5C";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="h-9 w-9 flex-shrink-0"
      aria-hidden
    >
      {/* C shape — arco com stroke espesso, abertura à direita */}
      <path
        d="M38 14 A18 18 0 1 0 38 34"
        fill="none"
        stroke="#F97316"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Seta apontando para cima-direita */}
      <line x1="38" y1="14" x2="44" y2="8"  stroke={petrol} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="38" y1="14" x2="44" y2="20" stroke={petrol} strokeWidth="2.5" strokeLinecap="round" />
      {/* Barras do gráfico */}
      <rect x="17" y="29" width="5" height="9"  fill={petrol}    rx="1.5" />
      <rect x="24" y="23" width="5" height="15" fill="#22C55E"   rx="1.5" />
    </svg>
  );
}

export function Logo({ variant = "default", className }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <div className={cn("flex items-center gap-2.5", className)} aria-label="Começa Bem">
      <IconMark isWhite={isWhite} />
      <div className="flex flex-col leading-none gap-0.5">
        <span
          className="text-[15px] font-bold tracking-tight"
          style={{ color: isWhite ? "#ffffff" : "#0F4C5C" }}
        >
          começa
        </span>
        <span className="text-[20px] font-extrabold tracking-tight text-brand-orange leading-none">
          bem
        </span>
      </div>
    </div>
  );
}
