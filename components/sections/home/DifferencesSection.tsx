import { SectionTitle, sectionClass } from "./SectionLayout";

const benefits = [
  ["◷", "Economize tempo", "Centralize tarefas e foque no que realmente importa: o seu cliente."],
  ["▣", "Tenha controle", "Acompanhe vendas, produtos e dinheiro com informações fáceis de entender."],
  ["↗", "Cresça com clareza", "Use dados do dia a dia para tomar decisões mais seguras."],
  ["⌁", "Acesse de onde estiver", "No computador ou celular, seu negócio acompanha você."],
  ["♡", "Conte com a gente", "Tecnologia simples, suporte próximo e linguagem sem complicação."],
] as const;

export function DifferencesSection() {
  return (
    <section className="py-6">
      <div className={sectionClass}>
        <div className="rounded-[18px] border border-[#eee6de] bg-[#fff8f2] px-6 py-10">
          <SectionTitle
            eyebrow="Por que Começa Bem?"
            title="Tudo o que você precisa para crescer com mais leveza"
          />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {benefits.map(([icon, title, text], i) => (
              <article
                key={title}
                className={`px-4 py-2 text-center lg:px-5 ${i < benefits.length - 1 ? "lg:border-r lg:border-[#eadfd7]" : ""}`}
              >
                <span className="mx-auto flex size-9 items-center justify-center rounded-xl border border-[#ffd8bd] bg-white text-lg font-bold text-brand-orange" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="mt-3 text-sm font-extrabold text-brand-petrol">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-brand-gray">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
