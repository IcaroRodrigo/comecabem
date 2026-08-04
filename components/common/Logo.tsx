import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  const isWhite = variant === "white";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      className={cn("h-10 w-auto", className)}
      aria-label="Começa Bem"
    >
      {/* C icon */}
      <g transform="translate(4, 4)">
        <path
          d="M26 4 A22 22 0 1 0 26 48 L26 40 A14 14 0 1 1 26 12 Z"
          fill="#F97316"
        />
        <polyline
          points="30,8 38,2 38,16"
          fill="none"
          stroke={isWhite ? "#ffffff" : "#0F4C5C"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* chart bars */}
        <rect x="18" y="28" width="5" height="10" fill={isWhite ? "#ffffff" : "#0F4C5C"} rx="1" />
        <rect x="25" y="22" width="5" height="16" fill="#22C55E" rx="1" />
      </g>
      {/* "começa" text */}
      <text
        x="62"
        y="28"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="18"
        fill={isWhite ? "#ffffff" : "#0F4C5C"}
      >
        começa
      </text>
      {/* "bem" text */}
      <text
        x="62"
        y="48"
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#F97316"
      >
        bem
      </text>
    </svg>
  );
}
