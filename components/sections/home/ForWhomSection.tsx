import { Package, Sprout, Store, UserRound, Wheat, Wrench } from "lucide-react";
import { SectionTitle, sectionClass } from "./SectionLayout";

const audiences = [[Store,"Pequeno comércio","Gestão"],[UserRound,"Profissional autônomo","Gestão"],[Wrench,"Prestador de serviços","Gestão"],[Wheat,"Empório","Empório"],[Package,"Loja de produtos naturais","Empório"],[Sprout,"Negócio rural","Agro"]] as const;
export function ForWhomSection() { return <section id="para-quem" className="scroll-mt-24 bg-white py-24"><div className={sectionClass}><SectionTitle eyebrow="Para quem é" title="Qual é o seu tipo de negócio?" description="Veja qual solução foi pensada para a sua realidade." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{audiences.map(([Icon,label,product]) => <article key={label} className="flex items-center gap-4 rounded-2xl border bg-brand-cream p-5"><span className="rounded-xl bg-white p-3 text-brand-petrol"><Icon /></span><div><h3 className="font-bold text-brand-petrol">{label}</h3><p className="text-sm text-brand-gray">Começa Bem {product}</p></div></article>)}</div></div></section>; }

