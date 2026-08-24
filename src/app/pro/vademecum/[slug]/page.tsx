import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Sparkles, Clock, Share2 } from "lucide-react";
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
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pt-1">
        <Link
          href="/pro/vademecum"
          className="inline-flex items-center gap-1.5 text-xs text-brand-text-muted hover:text-brand-teal font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Vademécum</span>
        </Link>
        <span className="text-[11px] text-brand-text-muted">
          Actualizado: {product.updatedAt}
        </span>
      </div>

      {/* Main Header Card */}
      <div className="bg-brand-surface rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
              {product.family.replace(/_/g, " ")}
            </span>
            <StatusBadge status={product.status} />
          </div>
          <span className="text-xs font-semibold text-brand-text-muted bg-slate-100 px-2.5 py-0.5 rounded-md">
            {product.presentation}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-brand-text-main leading-tight">
          {product.name}
        </h1>

        <p className="text-xs text-brand-text-muted leading-relaxed">
          {product.functionalDescription}
        </p>

        {/* Functional Area Badges */}
        {product.functionalAreas && product.functionalAreas.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.functionalAreas.map((area, i) => (
              <span
                key={i}
                className="text-[10px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md"
              >
                {area}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Accordion Sections (Composición, Uso, Precauciones Médicas) */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 px-1 text-xs font-bold text-brand-text-main uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
          <span>Información Técnica & Regulatoria</span>
        </div>
        <ProductAccordion product={product} />
      </div>

      {/* Direct Contact CTA for Professionals */}
      <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-2xl p-4 shadow-md space-y-2.5">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">
            Consultas Profesionales & Dossier
          </h2>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed">
          ¿Desea solicitar el protocolo de dosificación clínica, estudios de estabilidad o resolver dudas técnicas sobre este producto?
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs rounded-xl shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{product.ctaProText || "Consultar ficha técnica vía WhatsApp"}</span>
        </a>
      </div>
    </div>
  );
}
