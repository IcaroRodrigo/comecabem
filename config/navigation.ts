export type NavigationItem = { label: string; href: string; external?: boolean };

export const navigation: NavigationItem[] = [
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Saiba mais", href: "#sobre" },
  { label: "Contato", href: "https://wa.me/5541988838697", external: true },
];

export function homeHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}
