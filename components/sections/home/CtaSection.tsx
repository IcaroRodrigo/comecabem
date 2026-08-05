import Link from "next/link";
import { products } from "@/config/products";
import { sectionClass } from "./SectionLayout";

export function CtaSection() {
  const gestao = products.find((p) => p.slug === "gestao");

  return (
    <section id="contato" className="scroll-mt-24 py-8">
      <div className={sectionClass}>
        <div className="overflow-hidden rounded-[18px] bg-gradient-to-r from-[#f04400] to-[#ff7800] px-7 py-8 text-white">
          {/* Mobile: stack vertical | Desktop: 3 colunas */}
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-6">
            <div className="hidden sm:flex size-[54px] items-center justify-center rounded-[14px] border border-white/40 text-3xl" aria-hidden="true">
              ↗
            </div>
            <div>
              <h2 className="text-xl font-extrabold leading-tight sm:text-[21px]">
                Dê o próximo passo para o crescimento do seu negócio.
              </h2>
              <p className="mt-1 text-sm text-white/90">
                Conheça as soluções e descubra como organizar, gerir e crescer com mais tranquilidade.
              </p>
            </div>
            <Link
              href={gestao?.href ?? "#solucoes"}
              target={gestao?.href ? "_blank" : undefined}
              rel={gestao?.href ? "noopener noreferrer" : undefined}
              className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-orange hover:bg-orange-50 transition-colors sm:w-auto sm:whitespace-nowrap"
            >
              Começar agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
