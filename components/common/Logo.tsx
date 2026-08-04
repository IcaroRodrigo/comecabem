import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  const isWhite = variant === "white";
  const textColor = isWhite ? "#ffffff" : "#0F4C5C";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 195 64"
      className={cn("h-10 w-auto overflow-visible", className)}
      aria-label="Começa Bem"
    >
      {/* ── Ícone "C" com gráfico de barras ── */}
      <g transform="translate(6, 6)">
        {/* Arco externo do C */}
        <path
          d="M24 2 A22 22 0 1 0 24 46 L24 38 A14 14 0 1 1 24 10 Z"
          fill="#F97316"
        />
        {/* Seta de crescimento */}
        <polyline
          points="28,6 36,0 36,14"
          fill="none"
          stroke={textColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Barra menor (esquerda) */}
        <rect x="16" y="28" width="5" height="10" fill={textColor} rx="1" />
        {/* Barra maior (direita) */}
        <rect x="23" y="22" width="5" height="16" fill="#22C55E" rx="1" />
      </g>

      {/* ── Texto "começa" ── */}
      <text
        x="60"
        y="27"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill={textColor}
      >
        começa
      </text>

      {/* ── Texto "bem" ── */}
      <text
        x="60"
        y="50"
        fontFamily="Manrope, system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#F97316"
      >
        bem
      </text>
    </svg>
  );
}
