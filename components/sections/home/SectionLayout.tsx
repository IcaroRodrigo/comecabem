export const sectionClass = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-wider text-brand-orange">{eyebrow}</p><h2 className="mt-4 text-3xl font-extrabold leading-tight text-brand-petrol sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-lg leading-8 text-brand-gray">{description}</p>}</div>;
}
