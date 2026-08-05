import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Check, ExternalLink, LayoutDashboard, Settings } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { products } from "@/config/products";

const gestao = products[0];
const howItWorks = [
  {
    title: "Configure",
    description: "Configure sua solução de forma simples e comece a registrar as informações importantes do negócio.",
    icon: Settings,
  },
  {
    title: "Centralize",
    description: "Centralize vendas, estoque, clientes e processos em um só lugar.",
    icon: LayoutDashboard,
  },
  {
    title: "Acompanhe",
    description: "Acompanhe os resultados e tome decisões com mais segurança.",
    icon: BarChart3,
  },
] as const;
export const metadata: Metadata = { title: "Começa Bem Gestão", description: gestao.description, alternates: { canonical: "/gestao" }, openGraph: { title: "Começa Bem Gestão", description: gestao.description, url: "/gestao", images: [{ url: "/logo.png", width: 1536, height: 1024, alt: "Começa Bem Gestão" }] }, twitter: { card: "summary_large_image", title: "Começa Bem Gestão", description: gestao.description, images: [{ url: "/logo.png", alt: "Começa Bem Gestão" }] } };

export default function GestaoPage() {
  const software = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: gestao.name, applicationCategory: "BusinessApplication", operatingSystem: "Web", url: gestao.href, description: gestao.description, offers: { "@type": "Offer", price: "49.00", priceCurrency: "BRL" } };
  return <><Header/><main><section className="bg-brand-cream py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6"><p className="text-sm font-bold uppercase tracking-wider text-brand-orange">Começa Bem Gestão</p><h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-brand-petrol sm:text-6xl">Organize vendas, estoque, caixa e clientes sem complicação.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-brand-gray">Uma solução para pequenos comércios, profissionais autônomos e prestadores de serviços, com acesso pelo celular e computador.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={gestao.signupHref!} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-orange px-6 font-bold text-white">Testar grátis <ExternalLink className="size-4"/></Link><Link href={gestao.href!} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-xl border-2 border-brand-petrol px-6 font-bold text-brand-petrol">Entrar no Gestão</Link></div></div></section><section className="bg-white py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6"><h2 className="text-3xl font-extrabold text-brand-petrol">O essencial para a rotina do negócio</h2><ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gestao.features.map(feature => <li key={feature} className="flex items-center gap-3 rounded-2xl border bg-brand-cream p-5 font-semibold text-brand-petrol"><Check className="size-5 text-brand-green"/>{feature}</li>)}</ul></div></section><section aria-labelledby="como-funciona-title" className="bg-brand-petrol py-20 text-white"><div className="mx-auto max-w-5xl px-4 sm:px-6"><p className="text-sm font-bold uppercase tracking-wider text-orange-300">Como funciona</p><h2 id="como-funciona-title" className="mt-3 text-3xl font-extrabold">Da configuração ao acompanhamento</h2><ol className="mt-10 grid gap-5 md:grid-cols-3">{howItWorks.map((step,index) => <li key={step.title} className="rounded-2xl bg-white/10 p-6"><span className="text-sm font-bold text-orange-300">0{index + 1}</span><step.icon aria-hidden="true" className="mt-5 size-7 text-orange-300"/><h3 className="mt-4 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-white/75">{step.description}</p></li>)}</ol></div></section><section className="bg-brand-beige py-20"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><p className="text-sm font-bold uppercase tracking-wider text-brand-orange">Plano mensal</p><p className="mt-3 text-5xl font-extrabold text-brand-petrol"><span className="text-xl">R$</span> 49 <span className="text-base font-semibold text-brand-gray">/mês</span></p><p className="mt-4 text-brand-gray">Comece pelo período de teste gratuito e conheça o sistema antes de assinar.</p><Link href={gestao.signupHref!} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-orange px-7 font-bold text-white">Começar teste grátis</Link></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software).replace(/</g, "\\u003c") }}/></>;
}
