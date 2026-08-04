"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Wheat, ChevronDown } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { URLS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Começa Bem Gestão",
    description: "Vendas, estoque, caixa e clientes.",
    href: URLS.gestao,
    icon: ShoppingCart,
    color: "text-brand-orange",
  },
  {
    name: "Começa Bem Empório",
    description: "Gestão especializada para empórios.",
    href: URLS.emporio,
    icon: Wheat,
    color: "text-brand-green",
  },
];

const navLinks = [
  { label: "Para quem é", href: "#produtos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#manifesto" },
];

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-graphite hover:text-brand-orange transition-colors rounded-lg hover:bg-brand-beige"
                onClick={() => setProductsOpen((v) => !v)}
              >
                Produtos
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-lg border border-border p-3 space-y-1">
                    {products.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-cream transition-colors group"
                        onClick={() => setProductsOpen(false)}
                      >
                        <span
                          className={cn(
                            "mt-0.5 p-1.5 rounded-lg bg-brand-cream group-hover:bg-white transition-colors",
                            p.color
                          )}
                        >
                          <p.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-brand-graphite">
                            {p.name}
                          </span>
                          <span className="block text-xs text-brand-gray">{p.description}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-brand-graphite hover:text-brand-orange transition-colors rounded-lg hover:bg-brand-beige"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              render={<Link href="#produtos" />}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl px-5 h-9"
            >
              Conhecer as soluções
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="lg:hidden p-2 rounded-lg hover:bg-brand-beige transition-colors"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-brand-graphite" />
              ) : (
                <Menu className="h-5 w-5 text-brand-graphite" />
              )}
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-brand-cream pt-8">
              <div className="mb-8 px-4">
                <Logo />
              </div>
              <nav className="px-4 space-y-1">
                <p className="px-3 text-xs font-semibold text-brand-gray uppercase tracking-wider mb-2">
                  Produtos
                </p>
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-beige transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <p.icon className={cn("h-4 w-4", p.color)} />
                    <span className="text-sm font-medium text-brand-graphite">{p.name}</span>
                  </Link>
                ))}
                <div className="border-t border-border my-3" />
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-brand-graphite hover:text-brand-orange hover:bg-brand-beige rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 px-4 space-y-3">
                <Button
                  render={<Link href="#produtos" onClick={() => setMobileOpen(false)} />}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl h-11"
                >
                  Conhecer as soluções
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
