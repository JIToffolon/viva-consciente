import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
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
      {/* Hero Visual Block with Deep Botanical Green Theme */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-forest via-brand-emerald to-[#0A3F32] dark:from-[#031410] dark:via-[#082920] dark:to-[#041F18] p-6 md:p-8 text-white shadow-lg border border-emerald-800/40 dark:border-emerald-700/30">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-40 h-40 rounded-full bg-brand-green/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/15 dark:bg-white/10 backdrop-blur-md border border-white/25 dark:border-white/15 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-200">
              <Sparkles className="w-3 h-3 text-emerald-300" />
              <span>{badge}</span>
            </span>
            {heroIcon && <div className="text-white/90">{heroIcon}</div>}
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight tracking-tight text-white font-outfit">
            {title}
          </h1>

          <p className="text-sm md:text-base text-emerald-50/90 leading-relaxed max-w-xl font-normal">
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
              className="flex items-center justify-center gap-2 w-full md:w-auto min-h-[50px] px-7 py-3.5 bg-gradient-to-r from-brand-emerald to-brand-green hover:from-brand-green hover:to-emerald-600 text-white font-bold text-sm rounded-2xl shadow-md shadow-brand-emerald/25 active:scale-[0.99] transition-all font-outfit"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="flex items-center justify-center gap-2 w-full md:w-auto min-h-[50px] px-7 py-3.5 bg-gradient-to-r from-brand-emerald to-brand-green hover:from-brand-green hover:to-emerald-600 text-white font-bold text-sm rounded-2xl shadow-md shadow-brand-emerald/25 active:scale-[0.99] transition-all font-outfit"
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
        <div className="pt-2">
          <Link
            href={secondaryCtaHref}
            className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-brand-green dark:text-emerald-400 hover:text-brand-forest dark:hover:text-emerald-300 font-semibold transition-colors font-outfit"
          >
            <span>{secondaryCtaText}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
