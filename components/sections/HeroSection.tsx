"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Check, TrendingUp, Package } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { URLS, WHATSAPP_MESSAGE } from "@/lib/constants";
import { events } from "@/lib/analytics";

const floatingCards = [
  {
    icon: Check,
    text: "Venda concluída",
    value: "+ R$ 89,90",
    color: "text-brand-green",
    bg: "bg-green-50",
  },
  {
    icon: Package,
    text: "Estoque atualizado",
    value: "47 itens",
    color: "text-brand-orange",
    bg: "bg-orange-50",
  },
  {
    icon: TrendingUp,
    text: "Crescimento",
    value: "↑ 23% este mês",
    color: "text-brand-petrol",
    bg: "bg-brand-petrol-light",
  },
];

const MockScreen = () => (
  <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative z-10"
    >
      <div className="bg-brand-graphite rounded-2xl p-3 shadow-2xl">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="bg-white rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-brand-petrol">Começa Bem Gestão</span>
            <span className="text-[10px] text-brand-gray bg-brand-cream px-2 py-0.5 rounded-full">
              Hoje
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Vendas", value: "R$ 1.240" },
              { label: "Pedidos", value: "18" },
              { label: "Clientes", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-cream rounded-lg p-2 text-center">
                <p className="text-[10px] text-brand-gray">{stat.label}</p>
                <p className="text-xs font-bold text-brand-graphite">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-14 px-1">
            {[30, 55, 40, 70, 45, 80, 65].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? "#F97316" : "#E8F4F7",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-orange inline-block" />
            Vendas da semana
          </div>
        </div>
      </div>
    </motion.div>

    {floatingCards.map((card, i) => (
      <motion.div
        key={card.text}
        initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
        className={`absolute z-20 bg-white rounded-xl shadow-lg border border-border px-3 py-2 flex items-center gap-2 ${
          i === 0
            ? "-top-4 -right-4 lg:-right-8"
            : i === 1
            ? "bottom-8 -left-4 lg:-left-8"
            : "-bottom-4 right-4 lg:right-0"
        }`}
      >
        <span className={`p-1.5 rounded-lg ${card.bg}`}>
          <card.icon className={`h-3.5 w-3.5 ${card.color}`} />
        </span>
        <span>
          <p className="text-[10px] text-brand-gray leading-none">{card.text}</p>
          <p className="text-xs font-semibold text-brand-graphite">{card.value}</p>
        </span>
      </motion.div>
    ))}
  </div>
);

export function HeroSection() {
  return (
    <SectionWrapper
      className="py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFDF8 0%, #FFF4E6 60%, #E8F4F7 100%)",
      }}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Feito para pequenos negócios brasileiros
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-petrol leading-tight mb-6">
            Tecnologia para quem quer{" "}
            <span className="text-brand-orange">começar bem</span> e crescer melhor.
          </h1>

          <p className="text-lg text-brand-gray leading-relaxed mb-8 max-w-lg">
            Soluções simples para organizar vendas, estoque, clientes e processos do
            seu negócio — sem complicação, sem palavras difíceis.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              render={
                <Link href="#produtos" onClick={() => events.clickKnowSolutions()} />
              }
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl px-7 shadow-lg shadow-orange-200"
            >
              Conheça nossas soluções
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              render={
                <Link
                  href={`${URLS.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => events.clickWhatsapp()}
                />
              }
              size="lg"
              variant="outline"
              className="border-brand-petrol text-brand-petrol hover:bg-brand-petrol-light font-semibold rounded-xl px-7"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Fale pelo WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray">
            {["Sem cartão de crédito", "Grátis para testar", "Suporte em português"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-brand-green" />
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end py-10 px-6">
          <MockScreen />
        </div>
      </div>
    </SectionWrapper>
  );
}
