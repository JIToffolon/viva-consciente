import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import productsData from "@/data/products.json";
import { ProductMaster } from "@/types/product";
import { StatusBadge } from "@/components/vademecum/StatusBadge";
import { ProductAccordion } from "@/components/vademecum/ProductAccordion";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const products = productsData as ProductMaster[];
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const products = productsData as ProductMaster[];
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado — Vademécum Viva Consciente",
    };
  }

  return {
    title: `${product.name} — Vademécum Profesional Viva Consciente`,
    description: product.functionalDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const products = productsData as ProductMaster[];
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hola Viva Consciente, deseo realizar una consulta profesional sobre la ficha técnica del producto ${product.name}.`;
  const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
        <Link
          href="/pro/vademecum"
          className="inline-flex items-center gap-1.5 text-sm text-brand-text-muted dark:text-dark-text-muted hover:text-brand-teal dark:hover:text-teal-400 font-semibold transition-colors font-outfit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Vademécum</span>
        </Link>
        <span className="text-xs text-brand-text-muted dark:text-dark-text-muted font-medium">
          Actualizado: {product.updatedAt}
        </span>
      </div>

      {/* Main Header Card */}
      <div className="bg-brand-surface dark:bg-dark-surface rounded-xl border border-brand-border dark:border-dark-border p-6 md:p-7 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal dark:text-teal-300 bg-brand-sage dark:bg-dark-surface-tint px-2.5 py-0.5 rounded-md border border-brand-border dark:border-dark-border font-outfit">
              {product.family.replace(/_/g, " ")}
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-xs font-semibold text-brand-text-main dark:text-dark-text-main bg-brand-surface-tint dark:bg-dark-surface-tint px-3 py-1 rounded-md border border-brand-border dark:border-dark-border">
            {product.presentation}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-text-main dark:text-dark-text-main leading-tight font-outfit">
          {product.name}
        </h1>

        <p className="text-sm md:text-base text-brand-text-muted dark:text-dark-text-muted leading-relaxed">
          {product.functionalDescription}
        </p>

        {/* Functional Area Badges */}
        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.functionalAreas.map((area, i) => (
              <span
                key={i}
                className="text-xs bg-brand-surface-tint dark:bg-dark-surface-tint text-brand-text-main dark:text-dark-text-main font-medium px-2.5 py-1 rounded-md border border-brand-border dark:border-dark-border"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Accordion Sections (Composición, Uso, Precauciones Médicas) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1 text-xs font-bold text-brand-text-muted dark:text-dark-text-muted uppercase tracking-wider font-outfit">
          <FileText className="w-4 h-4 text-brand-teal dark:text-teal-400" />
          <span>Información Técnica & Regulatoria</span>
        </div>
        <ProductAccordion product={product} />
      </div>

      {/* Direct Contact CTA for Professionals */}
      <div className="bg-brand-forest dark:bg-[#051B16] text-white rounded-xl p-6 md:p-7 border border-emerald-900/50 dark:border-dark-border space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-300" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
            Consultas Profesionales & Dossier Clínico
          </h2>
        </div>
        <p className="text-sm text-emerald-50/90 leading-relaxed max-w-xl">
          ¿Desea solicitar el protocolo de dosificación clínica, estudios de estabilidad o resolver dudas técnicas sobre este producto?
        </p>
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded-lg transition-colors font-outfit"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>{product.ctaProText || "Consultar ficha técnica vía WhatsApp"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
