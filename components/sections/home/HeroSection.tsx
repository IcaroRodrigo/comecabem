import Link from "next/link";
import Image from "next/image";
import { sectionClass } from "./SectionLayout";

const heroPoints = [
  { icon: "◎", bold: "Fácil de usar", small: "Do seu jeito" },
  { icon: "✓", bold: "Seguro e confiável", small: "Seus dados protegidos" },
  { icon: "↗", bold: "Feito para crescer", small: "Acompanha seu negócio" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-cream py-14 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(34,197,94,.06),transparent_28%)]" />
      <div className={`${sectionClass} relative grid items-center gap-10 lg:grid-cols-[44%_56%]`}>

        {/* Copy */}
        <div>
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-brand-orange">
            Tecnologia simples para pequenos negócios
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-petrol sm:text-5xl lg:text-[54px]">
            Seu negócio começa.<br />
            A gente ajuda a{" "}
            <em className="not-italic text-brand-orange">começar bem.</em>
          </h1>
          <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-brand-gray">
            Organização simples para quem está construindo algo grande. Controle vendas, estoque e clientes sem complicação.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#solucoes"
              className="flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 font-bold text-white shadow-[0_10px_24px_rgba(249,115,22,.25)] hover:bg-orange-600 transition-all hover:-translate-y-0.5"
            >
              Conheça nossas soluções
            </Link>
            <Link
              href="#conteudos"
              className="flex min-h-[50px] items-center justify-center rounded-xl border border-brand-orange px-6 font-bold text-brand-orange hover:bg-orange-50 transition-colors"
            >
              Comece por aqui
            </Link>
          </div>
          <div className="mt-8 hidden flex-wrap gap-6 sm:flex">
            {heroPoints.map(({ icon, bold, small }) => (
              <div key={bold} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-lg font-bold text-brand-orange" aria-hidden="true">
                  {icon}
                </span>
                <div className="leading-none">
                  <p className="text-xs font-bold text-brand-petrol">{bold}</p>
                  <p className="mt-0.5 text-[10px] text-brand-gray">{small}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden min-h-[460px] items-center justify-center lg:flex" aria-hidden="true">
          <div className="absolute size-[380px] rounded-full border border-orange-200 opacity-60" />
          <div className="absolute size-[290px] translate-x-10 -translate-y-6 rounded-full border border-orange-200 opacity-60" />
          <Image
            src="/images/hero-computador-transparente.png"
            alt="Painel de gestão da Começa Bem exibido em um computador"
            width={580}
            height={400}
            className="relative z-10 w-[108%] max-h-[450px] object-contain"
            priority
          />
          <div className="absolute right-0 top-10 z-20 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-xl">
            <span className="flex size-8 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-600">↗</span>
            <div className="leading-none">
              <p className="text-xs font-bold text-brand-petrol">Visão do negócio</p>
              <p className="mt-0.5 text-[10px] text-brand-gray">Dados para decidir melhor</p>
            </div>
          </div>
          <div className="absolute bottom-12 right-5 z-20 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-xl">
            <span className="flex size-8 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-600">✓</span>
            <div className="leading-none">
              <p className="text-xs font-bold text-brand-petrol">Tudo em dia!</p>
              <p className="mt-0.5 text-[10px] text-brand-gray">Mais clareza na rotina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
