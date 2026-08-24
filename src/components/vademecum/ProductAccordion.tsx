"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Beaker, HelpCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { ProductMaster } from "@/types/product";

interface ProductAccordionProps {
  product: ProductMaster;
}

export function ProductAccordion({ product }: ProductAccordionProps) {
  return (
    <Accordion.Root
      type="multiple"
      defaultValue={["composition", "precautions"]}
      className="space-y-3.5"
    >
      {/* Acordeón 1: Composición */}
      <Accordion.Item
        value="composition"
        className="overflow-hidden rounded-2xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface shadow-2xs"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 md:px-5 py-4 text-left text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit transition-all hover:bg-brand-sage/40 dark:hover:bg-dark-surface-tint">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-sage dark:bg-dark-surface-tint text-brand-green dark:text-emerald-400">
                <Beaker className="h-4 w-4" />
              </div>
              <span>Composición & Estandarización Botánica</span>
            </div>
            <ChevronDown className="h-4 w-4 text-brand-green dark:text-emerald-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-brand-border dark:border-dark-border bg-brand-surface-tint dark:bg-dark-surface-tint px-4 md:px-5 py-4 text-xs text-brand-text-main dark:text-dark-text-main data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {product.composition.items && product.composition.items.length > 0 ? (
            <div className="space-y-2.5">
              <ul className="divide-y divide-brand-border/70 dark:divide-dark-border">
                {product.composition.items.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-between py-2 first:pt-0 last:pb-0">
                    <span className="font-semibold text-brand-forest dark:text-emerald-200">{item.name}</span>
                    <div className="text-right">
                      {item.amountPerKg && (
                        <span className="font-mono font-medium text-brand-green dark:text-emerald-400 block">{item.amountPerKg}</span>
                      )}
                      {item.standardization && (
                        <span className="text-[11px] text-brand-text-muted dark:text-dark-text-muted block">
                          {item.standardization}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {product.composition.notes && (
                <div className="mt-2.5 rounded-xl bg-amber-50/90 dark:bg-amber-950/50 p-3 text-[11px] text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  <strong>Nota técnica del formulador:</strong> {product.composition.notes}
                </div>
              )}
            </div>
          ) : (
            <p className="italic text-brand-text-muted dark:text-dark-text-muted">
              {product.composition.rawText || "Composición en proceso de validación final por laboratorio."}
            </p>
          )}
        </Accordion.Content>
      </Accordion.Item>

      {/* Acordeón 2: Uso Informativo */}
      <Accordion.Item
        value="usage"
        className="overflow-hidden rounded-2xl border border-brand-border dark:border-dark-border bg-brand-surface dark:bg-dark-surface shadow-2xs"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 md:px-5 py-4 text-left text-sm font-bold text-brand-text-main dark:text-dark-text-main font-outfit transition-all hover:bg-brand-sage/40 dark:hover:bg-dark-surface-tint">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 dark:bg-dark-surface-tint text-brand-emerald dark:text-emerald-400">
                <HelpCircle className="h-4 w-4" />
              </div>
              <span>Uso Informativo (Rótulo Vigente)</span>
            </div>
            <ChevronDown className="h-4 w-4 text-brand-green dark:text-emerald-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-brand-border dark:border-dark-border bg-brand-surface-tint dark:bg-dark-surface-tint px-4 md:px-5 py-4 text-xs leading-relaxed text-brand-text-main dark:text-dark-text-main data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <p className="text-brand-forest dark:text-emerald-100 font-medium">{product.informativeUsage}</p>
        </Accordion.Content>
      </Accordion.Item>

      {/* Acordeón 3: Precauciones & Seguridad Médica (Alerta visible) */}
      <Accordion.Item
        value="precautions"
        className="overflow-hidden rounded-2xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/50 dark:bg-amber-950/30 shadow-2xs"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 md:px-5 py-4 text-left text-sm font-bold text-amber-950 dark:text-amber-300 font-outfit transition-all hover:bg-amber-100/50 dark:hover:bg-amber-900/30">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <span>Precauciones & Seguridad Clínica</span>
            </div>
            <ChevronDown className="h-4 w-4 text-amber-800 dark:text-amber-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-amber-200/80 dark:border-amber-800/60 bg-amber-50/90 dark:bg-amber-950/60 px-4 md:px-5 py-4 text-xs text-amber-950 dark:text-amber-200 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="space-y-3">
            <div className="border-l-4 border-amber-600 pl-3.5 py-0.5">
              <p className="font-bold text-amber-950 dark:text-amber-300 font-outfit">Advertencia General:</p>
              <p className="text-amber-900 dark:text-amber-200 mt-0.5 leading-relaxed">{product.precautions.general}</p>
            </div>

            {product.precautions.specialPopulations && (
              <div className="border-l-4 border-amber-700 pl-3.5 py-0.5">
                <p className="font-bold text-amber-950 dark:text-amber-300 font-outfit">Poblaciones Especiales & Medicación:</p>
                <p className="text-amber-900 dark:text-amber-200 mt-0.5 leading-relaxed">{product.precautions.specialPopulations}</p>
              </div>
            )}

            {product.precautions.interactions && product.precautions.interactions.length > 0 && (
              <div className="border-l-4 border-amber-700 pl-3.5 py-0.5">
                <p className="font-bold text-amber-950 dark:text-amber-300 font-outfit">Interacciones Conocidas:</p>
                <ul className="list-disc list-inside mt-1 text-amber-900 dark:text-amber-200 space-y-1">
                  {product.precautions.interactions.map((interaction, i) => (
                    <li key={i}>{interaction}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-900 dark:text-amber-300 font-semibold bg-amber-100/70 dark:bg-amber-900/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800">
              <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <span>Consulte siempre con su profesional médico antes de iniciar cualquier suplementación.</span>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
