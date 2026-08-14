import Link from "next/link";
import Image from "next/image";
import { products } from "@/config/products";
import { SectionTitle, sectionClass } from "./SectionLayout";

export function ProductsSection() {
  const gestao = products.find((p) => p.slug === "gestao");
  const emporio = products.find((p) => p.slug === "emporio");
  const festas = products.find((p) => p.slug === "festas");

  return (
    <section id="solucoes" className="scroll-mt-24 py-16">
      <div className={sectionClass}>
        <SectionTitle
          eyebrow="Soluções"
          title="Uma ajuda para cada fase do seu negócio"
          description="Comece com o que precisa hoje. Evolua no seu ritmo."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
          {/* Gestão card */}
          {gestao && (
            <article className="relative overflow-hidden rounded-[18px] border border-[#eee6de] bg-white min-h-[420px] grid grid-cols-1 lg:grid-cols-[58%_42%]">
              <div className="absolute bottom-[-110px] right-[-100px] size-[260px] rounded-full bg-[#fff2e9]" aria-hidden="true" />
              <div className="relative z-10 flex flex-col p-7 sm:p-8">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-brand-orange">Organização completa</p>
                <h3 className="mt-1 text-2xl font-extrabold text-brand-petrol">{gestao.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{gestao.description}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-1">
                  {gestao.features.map((f) => (
                    <li key={f} className="text-sm text-brand-petrol before:mr-2 before:font-bold before:text-green-600 before:content-['✓']">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={gestao.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start text-sm font-extrabold text-brand-orange hover:underline lg:mt-auto lg:pt-6"
                >
                  Conhecer a solução →
                </Link>
              </div>

              {/* Screenshot — só no desktop */}
              <div className="relative z-10 hidden overflow-hidden pt-[3.5rem] lg:block">
                <Image
                  src="/images/sistema-gestao.png"
                  alt="Interface do sistema Começa Bem Gestão"
                  width={860}
                  height={600}
                  sizes="300px"
                  className="w-full rounded-tl-xl border border-gray-200 object-cover object-left-top shadow-sm"
                />
              </div>
            </article>
          )}

          {/* Empório card */}
          {emporio && (
            <article className="relative overflow-hidden rounded-[18px] border border-[#eee6de] bg-white min-h-[420px] grid grid-cols-1 lg:grid-cols-[58%_42%]">
              <div className="absolute bottom-[-110px] right-[-100px] size-[260px] rounded-full bg-[#eff7ea]" aria-hidden="true" />
              <div className="relative z-10 flex flex-col p-7 sm:p-8">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-green-700">Feito para o seu segmento</p>
                <h3 className="mt-1 text-2xl font-extrabold text-brand-petrol">{emporio.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{emporio.description}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:block sm:space-y-1">
                  {emporio.features.map((f) => (
                    <li key={f} className="text-sm text-brand-petrol before:mr-2 before:font-bold before:text-green-600 before:content-['✓']">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={emporio.href ?? "#contato"}
                  target={emporio.href ? "_blank" : undefined}
                  rel={emporio.href ? "noopener noreferrer" : undefined}
                  className="mt-6 self-start text-sm font-extrabold text-green-700 hover:underline lg:mt-auto lg:pt-6"
                >
                  Conhecer a solução →
                </Link>
              </div>

              {/* Screenshot — só no desktop */}
              <div className="relative z-10 hidden overflow-hidden pt-[3.5rem] lg:block">
                <Image
                  src="/images/sistema-emporio.png"
                  alt="Interface do sistema Começa Bem Empório"
                  width={860}
                  height={600}
                  sizes="300px"
                  className="w-full rounded-tl-xl object-cover object-left-top shadow-sm"
                />
              </div>
            </article>
          )}
          {/* Festas card */}
          {festas && (
            <article className="relative overflow-hidden rounded-[18px] border border-[#eee6de] bg-white lg:col-span-2">
              <div className="absolute bottom-[-110px] right-[-100px] size-[260px] rounded-full bg-[#f3eeff]" aria-hidden="true" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px]">
                <div className="flex flex-col p-7 sm:p-8">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-purple-600">Para quem organiza festas e eventos</p>
                  <h3 className="mt-1 text-2xl font-extrabold text-brand-petrol">{festas.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-gray">{festas.description}</p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {festas.featureGroups?.map((group) => (
                      <div key={group.group}>
                        <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-purple-600">{group.group}</p>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item} className="text-sm text-brand-petrol before:mr-2 before:font-bold before:text-green-600 before:content-['✓']">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={festas.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 self-start text-sm font-extrabold text-purple-600 hover:underline"
                  >
                    Conhecer a solução →
                  </Link>
                </div>

                {/* Screenshot — só no desktop */}
                <div className="relative hidden overflow-hidden pt-[3.5rem] lg:block">
                  <Image
                    src="/images/sistema-festas.png"
                    alt="Interface do sistema Começa Bem Festas"
                    width={860}
                    height={600}
                    sizes="420px"
                    className="w-full rounded-tl-xl border border-gray-200 object-cover object-left-top shadow-sm"
                  />
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
