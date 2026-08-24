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
      className="space-y-3"
    >
      {/* Acordeón 1: Composición */}
      <Accordion.Item
        value="composition"
        className="overflow-hidden rounded-xl border border-slate-200 bg-brand-surface shadow-sm"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-brand-text-main transition-all hover:bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-brand-teal">
                <Beaker className="h-4 w-4" />
              </div>
              <span>Composición & Estandarización</span>
            </div>
            <ChevronDown className="h-4 w-4 text-brand-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-slate-100 bg-slate-50/50 px-4 py-3.5 text-xs text-brand-text-main data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          {product.composition.items && product.composition.items.length > 0 ? (
            <div className="space-y-2">
              <ul className="divide-y divide-slate-200/70">
                {product.composition.items.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-between py-1.5 first:pt-0 last:pb-0">
                    <span className="font-medium text-slate-800">{item.name}</span>
                    <div className="text-right">
                      {item.amountPerKg && (
                        <span className="font-mono text-slate-600 block">{item.amountPerKg}</span>
                      )}
                      {item.standardization && (
                        <span className="text-[11px] text-brand-text-muted block">
                          {item.standardization}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {product.composition.notes && (
                <div className="mt-2 rounded-lg bg-amber-50 p-2.5 text-[11px] text-amber-800 border border-amber-200/80">
                  <strong>Nota técnica:</strong> {product.composition.notes}
                </div>
              )}
            </div>
          ) : (
            <p className="italic text-brand-text-muted">
              {product.composition.rawText || "Composición en proceso de validación final por laboratorio."}
            </p>
          )}
        </Accordion.Content>
      </Accordion.Item>

      {/* Acordeón 2: Uso Informativo */}
      <Accordion.Item
        value="usage"
        className="overflow-hidden rounded-xl border border-slate-200 bg-brand-surface shadow-sm"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-brand-text-main transition-all hover:bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-brand-green">
                <HelpCircle className="h-4 w-4" />
              </div>
              <span>Uso Informativo (Rótulo Vigente)</span>
            </div>
            <ChevronDown className="h-4 w-4 text-brand-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-slate-100 bg-slate-50/50 px-4 py-3.5 text-xs leading-relaxed text-brand-text-main data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <p>{product.informativeUsage}</p>
        </Accordion.Content>
      </Accordion.Item>

      {/* Acordeón 3: Precauciones & Seguridad Médica (Alerta visible) */}
      <Accordion.Item
        value="precautions"
        className="overflow-hidden rounded-xl border border-amber-200 bg-amber-50/40 shadow-sm"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="group flex flex-1 items-center justify-between px-4 py-3.5 text-left text-sm font-semibold text-amber-950 transition-all hover:bg-amber-100/50">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <span>Precauciones & Seguridad</span>
            </div>
            <ChevronDown className="h-4 w-4 text-amber-700 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="border-t border-amber-200/60 bg-amber-50/80 px-4 py-3.5 text-xs text-amber-950 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="space-y-2.5">
            <div className="border-l-4 border-amber-500 pl-3 py-0.5">
              <p className="font-semibold text-amber-900">Advertencia General:</p>
              <p className="text-amber-900/90 mt-0.5">{product.precautions.general}</p>
            </div>

            {product.precautions.specialPopulations && (
              <div className="border-l-4 border-amber-600 pl-3 py-0.5">
                <p className="font-semibold text-amber-900">Poblaciones Especiales & Medicación:</p>
                <p className="text-amber-900/90 mt-0.5">{product.precautions.specialPopulations}</p>
              </div>
            )}

            {product.precautions.interactions && product.precautions.interactions.length > 0 && (
              <div className="border-l-4 border-amber-600 pl-3 py-0.5">
                <p className="font-semibold text-amber-900">Interacciones Conocidas:</p>
                <ul className="list-disc list-inside mt-0.5 text-amber-900/90 space-y-0.5">
                  {product.precautions.interactions.map((interaction, i) => (
                    <li key={i}>{interaction}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-1.5 pt-1 text-[11px] text-amber-800 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Consulte siempre con su profesional médico antes de iniciar cualquier suplementación.</span>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
