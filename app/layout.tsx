import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Começa Bem — Tecnologia simples para pequenos negócios", template: "%s | Começa Bem" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Começa Bem — Tecnologia simples para pequenos negócios", description: siteConfig.description, url: "/", siteName: siteConfig.name, locale: "pt_BR", type: "website", images: [{ url: "/logo.png", width: 1536, height: 1024, alt: "Começa Bem" }] },
  twitter: { card: "summary_large_image", title: "Começa Bem — Tecnologia simples para pequenos negócios", description: siteConfig.description, images: [{ url: "/logo.png", alt: "Começa Bem" }] },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR" className={`${manrope.variable} antialiased`}><body>{children}</body></html>; }
