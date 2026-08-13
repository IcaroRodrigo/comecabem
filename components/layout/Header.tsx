"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { homeHref, navigation } from "@/config/navigation";
import { products } from "@/config/products";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const productMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }
    function closeOnOutsideClick(event: MouseEvent) {
      if (!productMenu.current?.contains(event.target as Node)) setProductsOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Começa Bem — página inicial">
          <Logo priority className="max-w-36 sm:max-w-44" />
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="flex min-h-11 items-center rounded-lg px-3 font-medium text-brand-petrol hover:bg-brand-beige">Início</Link>
          <div
            ref={productMenu}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-controls="products-menu"
              onClick={() => setProductsOpen((open) => !open)}
              className="flex min-h-11 items-center gap-1 rounded-lg px-3 font-medium text-brand-petrol hover:bg-brand-beige focus-visible:outline-2"
            >
              Soluções <ChevronDown aria-hidden="true" className={`size-4 transition ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div id="products-menu" className="absolute left-0 top-full w-80 pt-2">
                <div className="rounded-2xl border bg-white p-2 shadow-xl">
                  {products.map((product) => {
                    const content = <><span className="block font-bold text-brand-petrol">{product.name}</span><span className="mt-1 block text-sm text-brand-gray">{product.description}</span>{product.status === "development" && <span className="mt-2 inline-flex rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">Em desenvolvimento</span>}</>;
                    return product.href ? <Link key={product.slug} href={product.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl p-3 hover:bg-brand-cream" onClick={() => setProductsOpen(false)}>{content}</Link> : <div key={product.slug} className="p-3">{content}</div>;
                  })}
                </div>
              </div>
            )}
          </div>
          {navigation.map((item) => <Link key={item.href} href={homeHref(item.href)} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex min-h-11 items-center rounded-lg px-3 font-medium text-brand-petrol hover:bg-brand-beige">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="https://www.instagram.com/comecabem/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @comecabem" className="flex size-10 items-center justify-center rounded-lg text-brand-petrol hover:bg-brand-beige transition-colors">
            <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </Link>
          <Link href={products[0].href!} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center px-3 font-semibold text-brand-petrol">Entrar</Link>
          <button onClick={() => scrollToSection("solucoes")} className="flex min-h-11 items-center rounded-xl bg-brand-orange px-5 font-semibold text-white hover:bg-orange-600">Começar agora</button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <Link href="https://www.instagram.com/comecabem/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @comecabem" className="flex size-10 items-center justify-center rounded-lg text-brand-petrol hover:bg-brand-beige transition-colors">
            <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="flex size-11 items-center justify-center rounded-xl text-brand-petrol hover:bg-brand-beige" aria-label="Abrir menu"><Menu aria-hidden="true" /></SheetTrigger>
          <SheetContent side="right" className="w-[min(88vw,24rem)] bg-white" aria-describedby="mobile-menu-description">
            <SheetHeader><SheetTitle>Menu</SheetTitle><SheetDescription id="mobile-menu-description">Navegue pelas soluções e seções da Começa Bem.</SheetDescription></SheetHeader>
            <nav aria-label="Navegação móvel" className="overflow-y-auto px-4 pb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-gray">Soluções</p>
              {products.map((product) => product.href ? <SheetClose key={product.slug} render={<Link href={product.href} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between rounded-xl px-3 font-semibold text-brand-petrol hover:bg-brand-cream" />}><span>{product.name}</span><span className="text-xs font-normal text-brand-gray">Abrir</span></SheetClose> : <div key={product.slug} className="flex min-h-12 items-center justify-between px-3 font-semibold text-brand-petrol"><span>{product.name}</span><span className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">Em desenvolvimento</span></div>)}
              <div className="my-3 border-t" />
              {navigation.map((item) => <SheetClose key={item.href} render={<Link href={homeHref(item.href)} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex min-h-12 items-center rounded-xl px-3 font-medium text-brand-petrol hover:bg-brand-cream" />}>{item.label}</SheetClose>)}
              <button onClick={() => { scrollToSection("solucoes"); setMobileOpen(false); }} className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-orange px-5 font-semibold text-white">Começar agora</button>
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
