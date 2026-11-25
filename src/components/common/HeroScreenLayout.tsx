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
    <div className="space-y-6">
      {/* Hero Editorial Block */}
      <div className="rounded-xl bg-brand-forest dark:bg-[#051B16] p-6 md:p-8 text-white border border-emerald-900/50 dark:border-dark-border">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2.5 py-1 bg-white/10 border border-white/20 rounded-md text-xs font-semibold uppercase tracking-wider text-emerald-100">
              {badge}
            </span>
            {heroIcon && <div className="text-emerald-200">{heroIcon}</div>}
          </div>

          <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-white font-outfit">
            {title}
          </h1>

          <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed max-w-2xl font-normal">
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
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3 bg-brand-teal hover:bg-[#0B5E75] text-white font-semibold text-sm rounded-lg shadow-sm transition-colors font-outfit"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] px-6 py-3 bg-brand-teal hover:bg-[#0B5E75] text-white font-semibold text-sm rounded-lg shadow-sm transition-colors font-outfit"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {/* Embedded Content Slot */}
      {children && <div className="space-y-4">{children}</div>}

      {/* Secondary CTA link if present */}
      {secondaryCtaText && secondaryCtaHref && (
        <div className="pt-1">
          <Link
            href={secondaryCtaHref}
            className="inline-flex items-center gap-1.5 text-sm text-brand-teal dark:text-teal-400 hover:underline font-semibold transition-colors font-outfit"
          >
            <span>{secondaryCtaText}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
