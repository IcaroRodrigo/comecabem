"use client";

type GtagEvent = {
  event: string;
  params?: Record<string, string | number | boolean>;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent({ event, params }: GtagEvent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
}

export const events = {
  clickProductCard: (product: string) =>
    trackEvent({ event: "click_product_card", params: { product } }),
  clickWhatsapp: () => trackEvent({ event: "click_whatsapp" }),
  clickTryFree: (product: string) =>
    trackEvent({ event: "click_try_free", params: { product } }),
  clickKnowSolutions: () => trackEvent({ event: "click_know_solutions" }),
};
