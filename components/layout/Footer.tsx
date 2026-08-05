import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-8 bg-[#0c1c37] pb-16 pt-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-7 sm:grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Logo variant="white" className="!h-14 max-w-36" />
          <p className="mt-3 max-w-[230px] text-xs leading-relaxed text-[#cad2df]">
            A plataforma que ajuda micro e pequenos empreendedores a organizarem, gerirem e fazerem seus negócios crescerem.
          </p>
        </div>

        {/* Soluções */}
        <div className="flex flex-col gap-2">
          <p className="mb-1 text-xs font-bold text-white/50">Soluções</p>
          <Link href="https://gestao.comecabem.com.br/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#cad2df] hover:text-white">Começa Bem Gestão</Link>
          <Link href="https://emporio.comecabem.com.br/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#cad2df] hover:text-white">Começa Bem Empório</Link>
        </div>

        {/* Fale com a gente */}
        <div className="flex flex-col gap-2">
          <p className="mb-1 text-xs font-bold text-white/50">Fale com a gente</p>
          <Link href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs text-[#cad2df] hover:text-white">WhatsApp</Link>
          <Link href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-[#cad2df] hover:text-white">Instagram</Link>
        </div>
      </div>

      <p className="mt-10 text-center text-[9px] text-[#8793a7]">
        © {new Date().getFullYear()} Começa Bem. Todos os direitos reservados.
      </p>
    </footer>
  );
}
