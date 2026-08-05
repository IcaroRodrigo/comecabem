export type VerifiedTestimonial = {
  quote: string;
  author: string;
  role: string;
  location: string;
  product: string;
  photo: string;
  verified: true;
};

export const testimonials: readonly VerifiedTestimonial[] = [
  {
    quote: "Antes era tudo no caderno e eu vivia perdida. Com a Começa Bem, eu entendo meu negócio, tenho tempo e confiança para crescer.",
    author: "Juliana Mendes",
    role: "Empório Florepor",
    location: "São Paulo/SP",
    product: "Empório",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    verified: true,
  },
  {
    quote: "Antes tudo ficava no caderno. Hoje sei exatamente o que tenho em estoque, quanto vendi e o que precisa repor. É simples do jeito que eu precisava.",
    author: "Carlos Machado",
    role: "Revendedor autônomo",
    location: "Curitiba/PR",
    product: "Gestão",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    verified: true,
  },
  {
    quote: "Achei que ia ser difícil de usar, mas em 5 minutos já estava registrando vendas. Uso direto do celular e resolveu o meu problema.",
    author: "Carla Souza",
    role: "Loja de roupas",
    location: "Belo Horizonte/MG",
    product: "Gestão",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    verified: true,
  },
];

export function getVerifiedTestimonials() {
  return testimonials.filter((t) => t.verified === true);
}
