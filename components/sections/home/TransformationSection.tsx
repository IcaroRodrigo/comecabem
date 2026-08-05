import { Check } from "lucide-react";
import { SectionTitle, sectionClass } from "./SectionLayout";

const before = ["Informações no caderno","Planilhas espalhadas","Pedidos no WhatsApp","Dificuldade para fechar o caixa","Estoque desatualizado"];
const after = ["Vendas registradas","Estoque atualizado","Clientes organizados","Caixa centralizado","Informações em um só lugar"];
export function TransformationSection() { return <section className="bg-white py-24"><div className={sectionClass}><SectionTitle eyebrow="Transformação" title="Seu negócio pode continuar simples, sem continuar desorganizado." /><div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2"><Compare title="Antes" items={before} tone="muted"/><Compare title="Depois" items={after} tone="positive"/></div></div></section>; }
function Compare({title,items,tone}:{title:string;items:string[];tone:"muted"|"positive"}) { return <article className={`rounded-3xl p-7 ${tone === "positive" ? "bg-brand-petrol text-white" : "bg-slate-100 text-brand-petrol"}`}><h3 className="text-xl font-extrabold">{title}</h3><ul className="mt-5 space-y-3">{items.map(item => <li key={item} className="flex gap-3"><Check className={`size-5 shrink-0 ${tone === "positive" ? "text-green-300" : "text-brand-gray"}`} />{item}</li>)}</ul></article> }

