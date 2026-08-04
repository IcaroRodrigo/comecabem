"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/common/SectionWrapper";

const businessTypes = [
  { emoji: "☕", label: "Cafeteria", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
  { emoji: "🛒", label: "Loja", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
  { emoji: "🌿", label: "Empório", product: "Empório", color: "hover:border-brand-green/40 hover:bg-green-50" },
  { emoji: "✂️", label: "Barbearia", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
  { emoji: "🔧", label: "Oficina", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
  { emoji: "🎂", label: "Confeitaria", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
  { emoji: "🌾", label: "Produtor rural", product: "Agro", color: "hover:border-amber-300/50 hover:bg-amber-50" },
  { emoji: "💇", label: "Salão", product: "Gestão", color: "hover:border-brand-orange/40 hover:bg-orange-50" },
];

const productBadge: Record<string, string> = {
  Gestão: "bg-orange-100 text-brand-orange",
  Empório: "bg-green-100 text-green-700",
  Agro: "bg-amber-100 text-amber-700",
};

export function ForWhomSection() {
  return (
    <SectionWrapper id="para-quem-e" className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-4">
          Para quem é
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petrol mb-4">
          Qual é o seu negócio?
        </h2>
        <p className="text-lg text-brand-gray max-w-2xl mx-auto">
          A Começa Bem tem uma solução para cada realidade. Encontre a sua.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {businessTypes.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className={`group bg-brand-cream rounded-2xl border-2 border-border p-5 text-center cursor-default transition-all duration-200 ${b.color}`}
          >
            <span className="text-3xl mb-3 block">{b.emoji}</span>
            <p className="text-sm font-semibold text-brand-graphite mb-2">{b.label}</p>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${productBadge[b.product]}`}>
              {b.product}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
