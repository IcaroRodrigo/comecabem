import Image from "next/image";
import { sectionClass } from "./SectionLayout";

const values = [
  { bold: "Simples", small: "Sem termos complicados" },
  { bold: "Próxima", small: "Feita para a vida real" },
  { bold: "Útil", small: "Resolve o que importa" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24 py-16">
      <div className={sectionClass}>
        <div className="grid items-center gap-14 overflow-hidden rounded-[20px] bg-[#fff8f2] p-7 lg:grid-cols-[36%_64%]">
          <div className="relative h-[340px] overflow-hidden rounded-[15px_80px_15px_15px]">
            <Image
              src="/images/gestao.jpg"
              alt="Empreendedora em sua loja"
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Por que existimos</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-petrol sm:text-[31px]">
              Empreender já exige coragem. Organizar o negócio não precisa ser difícil.
            </h2>
            <p className="mt-4 leading-7 text-brand-gray">
              A Começa Bem nasceu para aproximar tecnologia e pequenos empreendedores. Criamos soluções claras, úteis e acessíveis, além de compartilhar conhecimento para você tomar decisões melhores.
            </p>
            <div className="mt-6 flex gap-9">
              {values.map(({ bold, small }) => (
                <div key={bold} className="flex flex-col">
                  <strong className="font-extrabold text-brand-orange">{bold}</strong>
                  <small className="mt-1 text-xs text-brand-gray">{small}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
