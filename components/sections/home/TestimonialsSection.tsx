"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getVerifiedTestimonials } from "@/config/testimonials";
import { sectionClass } from "./SectionLayout";

export function TestimonialsSection() {
  const testimonials = getVerifiedTestimonials();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <section className="bg-orange-50 py-20">
      <div className={sectionClass}>
        <div className="mx-auto max-w-3xl">

          {/* Quote mark */}
          <span className="font-serif text-7xl font-extrabold leading-none text-brand-orange select-none" aria-hidden="true">
            "
          </span>

          {/* Quote */}
          <blockquote className="-mt-3">
            <p className="text-xl font-semibold leading-relaxed text-brand-petrol sm:text-2xl">
              {t.quote}
            </p>

            {/* Author */}
            <footer className="mt-8 flex items-center gap-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                <Image
                  src={t.photo}
                  alt={t.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-extrabold text-brand-petrol">{t.author}</p>
                <p className="text-sm text-brand-gray">{t.role} · {t.location}</p>
              </div>
            </footer>
          </blockquote>

          {/* Dots */}
          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ver depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-brand-orange"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
