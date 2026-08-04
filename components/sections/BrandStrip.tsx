"use client";

import { motion } from "motion/react";

export function BrandStrip() {
  return (
    <section className="bg-brand-petrol py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xl sm:text-2xl font-semibold text-white leading-relaxed"
        >
          Menos caderno.{" "}
          <span className="text-white/70">Menos planilhas espalhadas.</span>{" "}
          <span className="text-brand-orange font-bold">Mais controle para crescer.</span>
        </motion.p>
      </div>
    </section>
  );
}
