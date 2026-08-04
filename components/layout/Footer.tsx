import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { URLS } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  empresa: [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Nossa proposta", href: "#manifesto" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Contato", href: URLS.whatsapp },
  ],
  produtos: [
    { label: "Começa Bem Gestão", href: URLS.gestao, external: true },
    { label: "Começa Bem Empório", href: URLS.emporio, external: true },
    { label: "Próximas soluções", href: "#" },
  ],
  legal: [
    { label: "Política de privacidade", href: "/privacidade" },
    { label: "Termos de uso", href: "/termos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-petrol text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Tecnologia simples para ajudar pequenos negócios a começar, organizar e crescer.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href={URLS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
              <Link
                href={URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Produtos
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Começa Bem. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40 italic">Organize hoje. Cresça sempre.</p>
        </div>
      </div>
    </footer>
  );
}
