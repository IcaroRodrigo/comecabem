"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { URLS, WHATSAPP_MESSAGE } from "@/lib/constants";
import { events } from "@/lib/analytics";

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-beige to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-4xl mb-6 block">🚀</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-petrol leading-tight mb-6">
            Todo grande negócio{" "}
            <span className="text-brand-orange">um dia esteve começando.</span>
          </h2>
          <p className="text-lg text-brand-gray max-w-xl mx-auto mb-10">
            Encontre a solução ideal para organizar sua empresa desde o primeiro dia.
            Simples, rápido e feito para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={
                <Link href="#produtos" onClick={() => events.clickKnowSolutions()} />
              }
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl px-8 shadow-xl shadow-orange-200"
            >
              Conhecer os produtos
              <ArrowRight className="ml-2 h-5 w-5" />
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
              className="border-2 border-brand-petrol text-brand-petrol hover:bg-brand-petrol hover:text-white font-semibold rounded-xl px-8 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar pelo WhatsApp
            </Button>
          </div>

          <p className="mt-8 text-sm text-brand-gray">
            Grátis para começar · Sem cartão de crédito · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
}
