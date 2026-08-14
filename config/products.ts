export type ProductStatus = "available" | "development";

export type FeatureGroup = { group: string; items: readonly string[] };

export type Product = {
  slug: "gestao" | "emporio" | "festas" | "agro";
  name: string;
  shortName: string;
  description: string;
  audience: readonly string[];
  features: readonly string[];
  featureGroups?: readonly FeatureGroup[];
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
    features: [],
    featureGroups: [
      {
        group: "Gestão de Clientes",
        items: [
          "Cadastro completo com nome, telefone, WhatsApp, endereço e observações",
          "Histórico de festas por cliente",
        ],
      },
      {
        group: "Reservas e Agenda",
        items: [
          "Agendamento de festas com data, horário e endereço",
          "Visualização em calendário (diário, semanal, mensal)",
          "Controle de montagem e desmontagem",
          "Modalidade Pegue e Monte (retirada e devolução pelo cliente)",
          "Alertas de conflito de agenda",
        ],
      },
      {
        group: "Temas e Itens",
        items: [
          "Cadastro de temas decorativos com composição padrão",
          "Controle de estoque de itens (painéis, cilindros, mesas, personagens etc.)",
          "Itens compartilhados entre temas — o sistema calcula disponibilidade real",
          "Motor de disponibilidade: impede reservas conflitantes automaticamente",
        ],
      },
      {
        group: "Financeiro",
        items: [
          "Controle de pagamentos por reserva (sinal, parcelas, saldo)",
          "Registro de despesas por festa e despesas gerais",
          "Relatório de faturamento e receitas",
          "Alertas de festas com pagamento pendente",
        ],
      },
      {
        group: "Documentos",
        items: [
          "Geração de orçamento em PDF",
          "Geração de contrato em PDF",
          "Geração de recibo em PDF",
          "Envio facilitado pelo WhatsApp",
        ],
      },
      {
        group: "Equipe",
        items: [
          "Perfil de administrador da decoradora",
          "Perfil de montador (acesso operacional limitado)",
          "Convite de usuários",
        ],
      },
      {
        group: "Configurações da Decoradora",
        items: [
          "Logo e identidade visual própria",
          "Dados comerciais (CNPJ, endereço, PIX)",
          "Personalização de textos de documentos",
        ],
      },
    ],
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
