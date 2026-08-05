import Link from "next/link";
import Image from "next/image";
import { SectionTitle, sectionClass } from "./SectionLayout";

const posts = [
  {
    image: "/images/gestao.jpg",
    alt: "Empreendedora organizando as finanças do negócio",
    category: "Gestão",
    title: "5 passos para organizar as finanças do seu negócio",
    excerpt: "Aprenda o essencial para ter controle do caixa, separar contas e planejar o crescimento.",
  },
  {
    image: "/images/clientes.jpg",
    alt: "Loja com clientes sendo atendidos",
    category: "Vendas",
    title: "Como atrair mais clientes e fidelizar de verdade",
    excerpt: "Dicas simples para conquistar, encantar e manter clientes que voltam sempre.",
  },
  {
    image: "/images/precificacao.jpg",
    alt: "Produtos naturais em loja a granel",
    category: "Produtos",
    title: "Precificação: como cobrar o justo e ter lucro",
    excerpt: "Descubra como calcular preços que cobrem custos e geram resultados.",
  },
] as const;

export function ContentSection() {
  return (
    <section id="conteudos" className="scroll-mt-24 py-16">
      <div className={sectionClass}>
        <SectionTitle
          eyebrow="Conteúdo para empreendedores"
          title="Comece por aqui"
          description="Dicas práticas para empreender com mais segurança."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-[15px] border border-[#eee6de] bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,33,63,.08)]"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-brand-orange">
                  {post.category}
                </span>
                <h3 className="mt-2 text-lg font-extrabold leading-tight text-brand-petrol">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{post.excerpt}</p>
                <Link
                  href="#contato"
                  className="mt-3 inline-block text-xs font-extrabold text-brand-orange hover:underline"
                >
                  Ler conteúdo →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#contato"
            className="inline-flex min-h-11 items-center rounded-xl border border-brand-orange px-6 text-sm font-bold text-brand-orange hover:bg-orange-50 transition-colors"
          >
            Ver todos os conteúdos
          </Link>
        </div>
      </div>
    </section>
  );
}
