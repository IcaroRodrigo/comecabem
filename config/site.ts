export const siteConfig = {
  name: "Começa Bem",
  url: "https://www.comecabem.com.br",
  description:
    "Tecnologia simples para ajudar pequenos negócios brasileiros a começar, organizar e crescer.",
  whatsapp: "https://wa.me/5541988838697",
  whatsappMessage: encodeURIComponent(
    "Olá! Gostaria de conhecer as soluções da Começa Bem.",
  ),
  instagram: "https://instagram.com/comecabem",
} as const;

export const contactUrl = `${siteConfig.whatsapp}?text=${siteConfig.whatsappMessage}`;
