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
      viewBox="0 0 54 48"
      className="h-9 w-auto flex-shrink-0"
      aria-hidden
    >
      {/*
        C com abertura no canto superior-direito.
        Centro: (22, 26), raio 17.
        Início do arco (canto sup-dir): ≈ (34, 14)
        Fim do arco (canto inf-dir):   ≈ (34, 38)
        Varredura CCW — arco longo cobre ~270°.
      */}
      <path
        d="M 34 14 A 17 17 0 1 0 34 38"
        fill="none"
        stroke="#F97316"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Barra esquerda — petróleo, menor */}
      <rect x="22" y="29" width="5" height="9" fill={petrol} rx="1.5" />

      {/* Barra direita — verde, maior */}
      <rect x="29" y="23" width="5" height="15" fill="#22C55E" rx="1.5" />

      {/*
        Seta diagonal: sai de dentro do C pelo topo da barra verde
        e aponta para o canto superior-direito (nordeste).
        Haste: (29, 23) → (45, 7)
        Cabeça da seta em L no ponto (45, 7):
          − segmento descendo: (45,7)→(45,15)
          − segmento indo à esquerda: (45,7)→(37,7)
      */}
      <line x1="29" y1="23" x2="45" y2="7"  stroke={petrol} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="45" y1="7"  x2="45" y2="15" stroke={petrol} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="45" y1="7"  x2="37" y2="7"  stroke={petrol} strokeWidth="2.5" strokeLinecap="round" />
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
