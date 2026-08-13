export type ProductStatus = "available" | "development";

export type Product = {
  slug: "gestao" | "emporio" | "festas" | "agro";
  name: string;
  shortName: string;
  description: string;
  audience: readonly string[];
  features: readonly string[];
  price?: string;
  trialDays?: number;
  status: ProductStatus;
  href?: string;
  signupHref?: string;
};

export const products: readonly Product[] = [
  {
    slug: "gestao",
    name: "Começa Bem Gestão",
    shortName: "Gestão",
    description: "Controle suas vendas, estoque, caixa e clientes em um só lugar. Simples de usar, funciona no celular e no computador.",
    audience: ["Comércios", "Autônomos", "Prestadores de serviços"],
    features: ["Registro de vendas rápido", "Controle de estoque", "Caixa diário", "Cadastro de clientes", "Relatórios simples", "Funciona no celular"],
    price: "R$ 49/mês",
    trialDays: 15,
    status: "available",
    href: "https://gestao.comecabem.com.br/",
    signupHref: "https://gestao.comecabem.com.br/cadastro",
  },
  {
    slug: "emporio",
    name: "Começa Bem Empório",
    shortName: "Empório",
    description: "Feito para quem trabalha com produtos a granel, naturais e orgânicos. Controle completo de lotes, validade, peso e etiquetas.",
    audience: ["Empórios", "Lojas naturais", "Produtos a granel"],
    features: ["Venda por peso ou unidade", "Controle de lotes e validade", "Etiquetas personalizadas", "Gestão de fornecedores", "Estoque por categoria", "Alertas de estoque baixo"],
    price: "R$ 89/mês",
    trialDays: 15,
    status: "available",
    href: "https://emporio.comecabem.com.br/",
    signupHref: "https://emporio.comecabem.com.br/cadastro",
  },
  {
    slug: "festas",
    name: "Começa Bem Festas",
    shortName: "Festas",
    description: "Gestão completa para lojas de artigos para festas. Controle de estoque, vendas e pedidos de forma simples e rápida.",
    audience: ["Lojas de festas", "Decoradores", "Buffets"],
    features: ["Controle de estoque", "Registro de vendas", "Gestão de pedidos", "Cadastro de clientes", "Relatórios simples", "Funciona no celular"],
    status: "available",
    href: "https://festas.comecabem.com.br/",
    signupHref: "https://festas.comecabem.com.br/cadastro",
  },
  {
    slug: "agro",
    name: "Começa Bem Agro",
    shortName: "Agro",
    description: "Alertas e tecnologia para apoiar decisões no campo.",
    audience: ["Negócios rurais"],
    features: [],
    status: "development",
  },
] as const;
