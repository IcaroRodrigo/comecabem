"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Clock, PackageCheck, TrendingUp } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";

const results = [
  {
    icon: Clock,
    stat: "5 minutos",
    title: "para começar a usar",
    description: "Sem instalação, sem treinamento. Abre no celular e já funciona.",
    highlight: "bg-orange-50 text-brand-orange",
  },
  {
    icon: PackageCheck,
    stat: "100% dos produtos",
    title: "organizados automaticamente",
    description: "Estoque, validade e categorias sempre atualizados em tempo real.",
    highlight: "bg-green-50 text-green-700",
  },
  {
    icon: TrendingUp,
    stat: "1 painel só",
    title: "para ver tudo do negócio",
    description: "Vendas, caixa, estoque e clientes num lugar. Sem planilha, sem caderno.",
    highlight: "bg-brand-petrol-light text-brand-petrol",
  },
];

export function ManifestoSection() {
  return (
    <>
      {/* Manifesto */}
      <SectionWrapper
        id="manifesto"
        className="py-24 bg-white"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80"
                alt="Empreendedora organizando seu negócio com a Começa Bem"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* overlay sutil para harmonizar com a paleta */}
              <div className="absolute inset-0 bg-brand-petrol/10" />
              {/* tag flutuante */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-xs font-semibold text-brand-petrol">
                    Organize hoje. Cresça sempre.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-semibold text-brand-orange bg-orange-50 px-3 py-1.5 rounded-full mb-6">
              Nossa proposta
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-petrol leading-tight mb-6">
              Empreender já é difícil.{" "}
              <span className="text-brand-orange">Organizar o negócio não precisa ser.</span>
            </h2>
            <div className="space-y-4 text-brand-gray leading-relaxed">
              <p>
                A Começa Bem nasceu para transformar tecnologia em algo simples, acessível e
                útil para quem está construindo seu próprio caminho.
              </p>
              <p>
                Sem palavras difíceis, sistemas confusos ou funcionalidades que você nunca vai
                usar. Só o essencial, funcionando direitinho, no celular que você já tem.
              </p>
              <p className="font-semibold text-brand-petrol">
                Todo grande negócio um dia esteve começando. A gente está aqui para esse dia.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Valores */}
      <SectionWrapper className="py-16 bg-brand-beige">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-petrol">
            Resultados reais para o seu negócio
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-border"
            >
              <span className={`inline-flex p-3 rounded-2xl mb-4 ${r.highlight}`}>
                <r.icon className="h-6 w-6" />
              </span>
              <p className="text-2xl font-extrabold text-brand-graphite leading-tight">
                {r.stat}
              </p>
              <p className="text-sm font-semibold text-brand-petrol mb-2">{r.title}</p>
              <p className="text-sm text-brand-gray leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
