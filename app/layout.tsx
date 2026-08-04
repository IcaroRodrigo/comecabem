import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Começa Bem — Tecnologia simples para pequenos negócios",
  description:
    "Soluções simples para organizar vendas, estoque, clientes e processos do seu negócio. Feito para pequenos empreendedores brasileiros.",
  metadataBase: new URL("https://comecabem.com.br"),
  openGraph: {
    title: "Começa Bem — Tecnologia simples para pequenos negócios",
    description:
      "Soluções simples para organizar vendas, estoque, clientes e processos do seu negócio.",
    url: "https://comecabem.com.br",
    siteName: "Começa Bem",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Começa Bem — Tecnologia simples para pequenos negócios",
    description: "Soluções simples para organizar pequenos negócios brasileiros.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </html>
  );
}
