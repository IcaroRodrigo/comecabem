"use client";

import { motion } from "motion/react";
import { Quote, ShoppingCart, Wheat } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";

const testimonials = [
  {
    quote:
      "Agora consigo fechar o caixa sem procurar anotações no caderno. Ficou muito mais simples controlar tudo.",
    name: "Amanda S.",
    role: "Manicure e cabeleireira",
    product: "Começa Bem Gestão",
    productIcon: ShoppingCart,
    productColor: "text-brand-orange bg-orange-50",
    avatar: "AS",
    avatarBg: "bg-orange-100 text-brand-orange",
  },
  {
    quote:
      "Tenho muito mais controle sobre os produtos vendidos a granel. Sei exatamente o que tem no estoque e o que está perto da validade.",
    name: "Maria L.",
    role: "Proprietária de empório",
    product: "Começa Bem Empório",
    productIcon: Wheat,
    productColor: "text-green-700 bg-green-50",
    avatar: "ML",
    avatarBg: "bg-green-100 text-green-700",
  },
  {
    quote:
      "Antes eu tinha medo de não saber usar. Mas foi fácil demais. Em menos de um dia já estava registrando todas as vendas.",
    name: "Carlos M.",
    role: "Comerciante",
    product: "Começa Bem Gestão",
    productIcon: ShoppingCart,
    productColor: "text-brand-orange bg-orange-50",
    avatar: "CM",
    avatarBg: "bg-orange-100 text-brand-orange",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-4">
          Depoimentos
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petrol mb-4">
          Quem já usa, aprova
        </h2>
        <p className="text-brand-gray max-w-lg mx-auto">
          Histórias reais de quem organizou o negócio com a Começa Bem.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-brand-cream rounded-2xl p-7 border border-border flex flex-col"
          >
            <Quote className="h-8 w-8 text-brand-orange/30 mb-4" />
            <p className="text-brand-graphite leading-relaxed mb-6 flex-1 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.avatarBg}`}
              >
                {t.avatar}
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-graphite">{t.name}</p>
                <p className="text-xs text-brand-gray">{t.role}</p>
              </div>
            </div>
            <div className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${t.productColor}`}>
              <t.productIcon className="h-3 w-3" />
              {t.product}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
