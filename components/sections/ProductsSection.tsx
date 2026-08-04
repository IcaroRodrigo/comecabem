"use client";

import { ShoppingCart, Wheat, Sprout } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { URLS } from "@/lib/constants";

const products = [
  {
    name: "Começa Bem Gestão",
    tagline: "Organização para quem vende ou presta serviços",
    description:
      "Controle suas vendas, estoque, caixa e clientes em um só lugar. Simples de usar, funciona no celular e no computador.",
    audience: "Comércios · Autônomos · Prestadores de serviço",
    features: [
      "Registro de vendas rápido",
      "Controle de estoque",
      "Caixa diário",
      "Cadastro de clientes",
      "Relatórios simples",
      "Funciona no celular",
    ],
    icon: ShoppingCart,
    accentColor: "orange" as const,
    badge: "Disponível agora",
    primaryCta: { label: "Conhecer o Gestão", href: URLS.gestao },
    secondaryCta: { label: "Testar grátis", href: URLS.gestaoSignup },
  },
  {
    name: "Começa Bem Empório",
    tagline: "Gestão especializada para empórios e lojas naturais",
    description:
      "Feito para quem trabalha com produtos a granel, naturais e orgânicos. Controle completo de lotes, validade, peso e etiquetas.",
    audience: "Empórios · Lojas naturais · Produtos a granel",
    features: [
      "Venda por peso ou unidade",
      "Controle de lotes e validade",
      "Etiquetas personalizadas",
      "Gestão de fornecedores",
      "Estoque por categoria",
      "Alertas de estoque baixo",
    ],
    icon: Wheat,
    accentColor: "green" as const,
    badge: "Disponível agora",
    primaryCta: { label: "Conhecer o Empório", href: URLS.emporio },
  },
  {
    name: "Começa Bem Agro",
    tagline: "Gestão para o campo e produtor rural",
    description:
      "Controle de safras, insumos, colheitas e vendas para pequenos produtores rurais e agricultores familiares.",
    audience: "Produtores rurais · Agricultores · Cooperativas",
    features: [
      "Controle de safras e colheitas",
      "Gestão de insumos",
      "Registro de vendas rurais",
      "Alertas climáticos",
      "Relatórios por talhão",
      "Funciona offline",
    ],
    icon: Sprout,
    accentColor: "earth" as const,
    comingSoon: true,
    primaryCta: { label: "Conhecer o Agro", href: "#" },
  },
];

export function ProductsSection() {
  return (
    <SectionWrapper id="produtos" className="py-24 bg-brand-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-4">
          Nossas soluções
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petrol mb-4">
          Uma solução para cada tipo de negócio
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          Escolha a ferramenta que mais combina com a sua realidade. Todas carregam a
          simplicidade da Começa Bem.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.name} {...product} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
