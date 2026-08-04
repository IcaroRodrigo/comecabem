"use client";

import Link from "next/link";
import { LucideIcon, ArrowRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import { ButtonLink } from "@/components/common/ButtonLink";
import { cn } from "@/lib/utils";
import { events } from "@/lib/analytics";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  audience: string;
  features: string[];
  icon: LucideIcon;
  accentColor: "orange" | "green" | "earth";
  badge?: string;
  comingSoon?: boolean;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  index?: number;
}

const colorMap = {
  orange: {
    icon: "bg-orange-100 text-brand-orange",
    badge: "bg-orange-100 text-brand-orange border-orange-200",
    badgeSoon: "bg-amber-100 text-amber-700 border-amber-200",
    border: "border-brand-orange/20 hover:border-brand-orange/40",
    dot: "bg-brand-orange",
    btnClass: "bg-brand-orange hover:bg-brand-orange/90 text-white shadow-lg shadow-orange-200 flex items-center justify-center gap-2",
    audience: "bg-orange-50 text-brand-orange",
  },
  green: {
    icon: "bg-green-100 text-brand-green",
    badge: "bg-green-100 text-green-700 border-green-200",
    badgeSoon: "bg-amber-100 text-amber-700 border-amber-200",
    border: "border-brand-green/20 hover:border-brand-green/40",
    dot: "bg-brand-green",
    btnClass: "bg-brand-petrol hover:bg-brand-petrol/90 text-white flex items-center justify-center gap-2",
    audience: "bg-green-50 text-green-700",
  },
  earth: {
    icon: "bg-amber-100 text-amber-700",
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    badgeSoon: "bg-amber-100 text-amber-700 border-amber-200",
    border: "border-amber-300/30 hover:border-amber-300/50",
    dot: "bg-amber-600",
    btnClass: "bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center gap-2",
    audience: "bg-amber-50 text-amber-700",
  },
};

export function ProductCard({
  name,
  tagline,
  description,
  audience,
  features,
  icon: Icon,
  accentColor,
  badge,
  comingSoon = false,
  primaryCta,
  secondaryCta,
  index = 0,
}: ProductCardProps) {
  const c = colorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={cn(
        "relative bg-white rounded-3xl border-2 p-8 flex flex-col transition-all duration-300",
        c.border,
        comingSoon ? "opacity-80" : "hover:shadow-xl"
      )}
    >
      {(badge || comingSoon) && (
        <span className={cn("absolute top-6 right-6 text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1", comingSoon ? c.badgeSoon : c.badge)}>
          {comingSoon && <Clock className="h-3 w-3" />}
          {comingSoon ? "Em breve" : badge}
        </span>
      )}

      <div className="flex items-center gap-4 mb-4">
        <span className={cn("p-3 rounded-2xl", c.icon)}>
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-brand-graphite">{name}</h3>
          <p className="text-sm text-brand-gray">{tagline}</p>
        </div>
      </div>

      <p className="text-brand-gray text-sm leading-relaxed mb-5">{description}</p>

      <span className={cn("inline-block text-xs font-semibold px-3 py-1.5 rounded-lg mb-5", c.audience)}>
        {audience}
      </span>

      <ul className="space-y-2.5 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-brand-graphite">
            <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", c.dot)} />
            {f}
          </li>
        ))}
      </ul>

      <div className="space-y-3 mt-auto">
        {comingSoon ? (
          <div className="w-full h-11 rounded-xl bg-brand-cream border-2 border-dashed border-border flex items-center justify-center gap-2 text-sm font-semibold text-brand-gray">
            <Clock className="h-4 w-4" />
            Em desenvolvimento
          </div>
        ) : (
          <>
            <ButtonLink
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("w-full h-11 rounded-xl font-semibold", c.btnClass)}
              onClick={() => events.clickProductCard(name)}
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => events.clickTryFree(name)}
                className="flex items-center justify-center w-full h-11 rounded-xl border-2 border-border text-brand-graphite text-sm font-semibold hover:bg-brand-cream transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
