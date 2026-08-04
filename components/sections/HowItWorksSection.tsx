"use client";

import { motion } from "motion/react";
import { Rocket, LayoutDashboard, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";

const steps = [
  {
    number: "01",
    icon: Rocket,
    title: "Comece",
    description:
      "Configure sua solução em poucos minutos. Sem instalação, sem complicação — só acesse e comece.",
    color: "text-brand-orange",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Organize",
    description:
      "Tenha vendas, estoque e informações importantes em um só lugar. Acesse do celular onde estiver.",
    color: "text-brand-petrol",
    bg: "bg-brand-petrol-light",
    border: "border-brand-petrol/20",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Cresça",
    description:
      "Acompanhe os resultados e tome decisões melhores. Veja o que vende mais, o que está no estoque e para onde o dinheiro vai.",
    color: "text-brand-green",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper id="como-funciona" className="py-24 bg-brand-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-4">
          Como funciona
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petrol mb-4">
          Simples assim
        </h2>
        <p className="text-lg text-brand-gray max-w-xl mx-auto">
          Três passos para transformar a organização do seu negócio.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connector line (desktop) */}
        <div className="hidden lg:block absolute top-14 left-1/4 right-1/4 h-px bg-gradient-to-r from-brand-orange via-brand-petrol to-brand-green" />

        <div className="grid sm:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className={`relative w-20 h-20 rounded-2xl border-2 ${step.bg} ${step.border} flex items-center justify-center shadow-sm`}
                >
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                  <span
                    className={`absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 ${step.border} text-xs font-bold ${step.color} flex items-center justify-center`}
                  >
                    {i + 1}
                  </span>
                </div>
              </div>

              <h3 className={`text-2xl font-extrabold mb-3 ${step.color}`}>{step.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
