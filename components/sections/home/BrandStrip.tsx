import { sectionClass } from "./SectionLayout";

const audiences = ["MEI", "Comércio local", "Prestadores", "Confeiteiros", "Revendedores", "Pequenos negócios"];

export function BrandStrip() {
  return (
    <section aria-label="Público da Começa Bem" className="hidden py-6 sm:block">
      <div className={sectionClass}>
        <div className="rounded-2xl border border-[#eee6de] bg-[#fffaf7] px-8 py-5 text-center">
          <p className="font-bold text-brand-petrol">
            Feito para quem vende, atende, cria e faz acontecer todos os dias.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {audiences.map((a) => (
              <span key={a} className="text-sm font-extrabold text-brand-gray">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
