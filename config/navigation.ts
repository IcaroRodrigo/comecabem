export type NavigationItem = { label: string; href: `#${string}` };

export const navigation: NavigationItem[] = [
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Saiba mais", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function homeHref(anchor: `#${string}`) {
  return `/${anchor}` as const;
}
