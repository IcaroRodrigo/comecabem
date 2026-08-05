import { CloudSun, Package, Rocket } from "lucide-react";
import { SectionTitle, sectionClass } from "./SectionLayout";

const steps = [[Rocket,"Comece","Configure sua solução de forma simples e comece a registrar as informações importantes do negócio."],[Package,"Organize","Centralize vendas, estoque, clientes e processos em um só lugar."],[CloudSun,"Cresça","Acompanhe os resultados e tome decisões com mais segurança."]] as const;
export function HowWeHelpSection() { return <section id="como-ajudamos" className="scroll-mt-24 bg-brand-beige py-24"><div className={sectionClass}><SectionTitle eyebrow="Como ajudamos" title="Comece, organize e cresça" /><ol className="mt-12 grid gap-6 md:grid-cols-3">{steps.map(([Icon,title,text],index) => <li key={title} className="rounded-3xl bg-white p-7"><span className="text-sm font-extrabold text-brand-orange">0{index+1}</span><Icon className="mt-5 size-8 text-brand-petrol" /><h3 className="mt-4 text-2xl font-extrabold text-brand-petrol">{title}</h3><p className="mt-3 leading-7 text-brand-gray">{text}</p></li>)}</ol></div></section>; }

