import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface HeroScreenLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  heroIcon?: ReactNode;
  children?: ReactNode;
}

export function HeroScreenLayout({
  badge,
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  heroIcon,
  children,
}: HeroScreenLayoutProps) {
  const isExternalCta = ctaHref?.startsWith("http");

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Hero Visual Block */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 p-6 text-white shadow-md">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-200">
              {badge}
            </span>
            {heroIcon && <div className="text-white/80">{heroIcon}</div>}
          </div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white">
            {title}
          </h1>
          <p className="text-sm text-slate-200/90 leading-relaxed max-w-sm">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Main CTA if present */}
      {ctaText && ctaHref && (
        <div>
          {isExternalCta ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full min-h-[48px] px-6 py-3 bg-brand-teal text-white font-semibold text-sm rounded-xl shadow-sm hover:bg-teal-700 active:scale-[0.98] transition-all"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="flex items-center justify-center gap-2 w-full min-h-[48px] px-6 py-3 bg-brand-teal text-white font-semibold text-sm rounded-xl shadow-sm hover:bg-teal-700 active:scale-[0.98] transition-all"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {/* Embedded Nodes or Content Slot */}
      {children && <div className="space-y-4">{children}</div>}

      {/* Secondary CTA link if present */}
      {secondaryCtaText && secondaryCtaHref && (
        <div className="pt-2">
          <Link
            href={secondaryCtaHref}
            className="flex items-center justify-center gap-1.5 text-xs text-brand-text-muted hover:text-brand-teal font-medium transition-colors"
          >
            <span>{secondaryCtaText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
