import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, Clock, Share2, ShieldCheck } from "lucide-react";
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
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pt-1">
        <Link
          href="/pro/vademecum"
          className="inline-flex items-center gap-1.5 text-xs text-brand-text-muted dark:text-dark-text-muted hover:text-brand-green dark:hover:text-emerald-400 font-semibold transition-colors font-outfit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Vademécum</span>
        </Link>
        <span className="text-[11px] text-brand-text-muted dark:text-dark-text-muted font-medium">
          Actualizado: {product.updatedAt}
        </span>
      </div>

      {/* Main Header Card */}
      <div className="bg-brand-surface dark:bg-dark-surface rounded-3xl border border-brand-border dark:border-dark-border p-6 md:p-8 shadow-sm space-y-4 transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-emerald dark:text-emerald-300 bg-brand-sage dark:bg-dark-surface-tint px-3 py-1 rounded-full border border-brand-border dark:border-dark-border font-outfit">
              {product.family.replace(/_/g, " ")}
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-xs font-semibold text-brand-forest dark:text-emerald-200 bg-brand-sage dark:bg-dark-surface-tint px-3 py-1 rounded-xl border border-brand-border dark:border-dark-border">
            {product.presentation}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-text-main dark:text-dark-text-main leading-tight font-outfit">
          {product.name}
        </h1>

        <p className="text-xs md:text-sm text-brand-text-muted dark:text-dark-text-muted leading-relaxed">
          {product.functionalDescription}
        </p>

        {/* Functional Area Badges */}
        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.functionalAreas.map((area, i) => (
              <span
                key={i}
                className="text-[10px] bg-brand-sage/70 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-300 font-semibold px-2.5 py-1 rounded-lg border border-brand-border/60 dark:border-dark-border"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Accordion Sections (Composición, Uso, Precauciones Médicas) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 px-1 text-xs font-bold text-brand-forest dark:text-emerald-200 uppercase tracking-wider font-outfit">
          <Sparkles className="w-4 h-4 text-brand-green dark:text-emerald-400" />
          <span>Información Técnica & Regulatoria</span>
        </div>
        <ProductAccordion product={product} />
      </div>

      {/* Direct Contact CTA for Professionals */}
      <div className="bg-gradient-to-br from-brand-forest via-[#0A3D2F] to-[#041F19] dark:from-[#031410] dark:via-[#082920] dark:to-[#041F18] text-white rounded-3xl p-6 md:p-8 shadow-lg border border-emerald-800/40 dark:border-emerald-700/30 space-y-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xs font-bold text-white uppercase tracking-wider font-outfit">
            Consultas Profesionales & Dossier Clínico
          </h2>
        </div>
        <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
          ¿Desea solicitar el protocolo de dosificación clínica, estudios de estabilidad o resolver dudas técnicas sobre este producto?
        </p>
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full md:w-auto min-h-[48px] py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-2xl shadow-md transition-all font-outfit group"
          >
            <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{product.ctaProText || "Consultar ficha técnica vía WhatsApp"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
