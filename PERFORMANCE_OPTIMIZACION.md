---

### `06_PERFORMANCE_Y_OPTIMIZACION.md`

```markdown
# Performance, Optimización Móvil y Core Web Vitals - Ecosistema Viva Consciente

Este documento define las directivas técnicas de optimización y rendimiento para garantizar una carga instantánea de la web-app tras el escaneo del QR en smartphones con redes 4G saturadas en eventos[cite: 1, 4].

---

## 1. Métricas Objetivo (Core Web Vitals para Redes Móviles)

- **LCP (Largest Contentful Paint):** $\le 1.8\text{ s}$ en conexión 4G estándar.
- **FID / INP (Interaction to Next Paint):** $\le 100\text{ ms}$ (respuesta táctil instantánea en menú inferior y acordeones)[cite: 1].
- **CLS (Cumulative Layout Shift):** $\le 0.05$ (evitar saltos visuales al cargar imágenes o fuentes).
- **Peso Total de la Página Inicial:** $\le 350\text{ KB}$ (HTML + CSS + JS + Imagen Hero inicial comprimida).

---

## 2. Estrategia de Optimización de Assets e Imágenes

### 2.1. Reglas para el Componente `next/image`
Todas las imágenes de cabecera (`Hero`) y productos deben servirse mediante el componente nativo de Next.js con dimensiones explícitas:

```tsx
import Image from 'next/image';

export const HeroImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-2xl bg-slate-100">
    <Image // /app Balance KB LCP Solo acelerar alt="{alt}" className="object-cover" en entre fidelidad fill inicial la para peso priority quality="{80}" sizes="(max-width: 768px) 100vw, 480px" src="{src}" vista visual y óptimo/>
  </div>
);

```

### 2.2. Pipeline de Conversión de Formatos

* **Formatos Permitidos:** AVIF preferente, con fallback automático a WebP.


* **Resolución Máxima de Entrada:** Las fotos de héroe no deben superar los 1200 px de ancho antes de procesarse.
* **Logos y Pictogramas:** Uso estricto de SVG vectoriales limpios o iconos del paquete ligero `lucide-react`.



---

## 3. Optimización del Bundle JavaScript & CSS

* **Tree-Shaking de Iconos:** Importar únicamente los glifos utilizados desde `lucide-react` (evitar `import * as Icons`):
```typescript
import { Home, Leaf, UserCheck, MessageCircle, ChevronDown } from 'lucide-react';

```


* **Purga de CSS con Tailwind:** En producción, purgar todas las clases no utilizadas en `src/**/*.{js,ts,jsx,tsx}` manteniendo un archivo CSS global inferior a 25 KB gzipped.


* **Carga de Datos en Memoria:** El archivo `src/data/products.json` se importa directamente en el bundle del cliente; al pesar menos de 60 KB, elimina la latencia de peticiones AJAX o llamadas a API externas.



---

## 4. Estrategia de Renderizado & Hidratación (SSG)

* **Static Site Generation (SSG):** Todas las 15 rutas del ecosistema y las fichas dinámicas `/pro/vademecum/[slug]` deben generarse estáticamente en el build (`generateStaticParams`).


* **Cero Hydration Mismatch:** No utilizar lógica dependiente del objeto `window` o de la hora del cliente durante el renderizado inicial del layout para evitar saltos o bloqueos de hilo principal.

---

## 5. Accesibilidad & Ergonomía Táctil (Mobile Touch Targets)

* **Áreas Táctiles Mínimas:** Todos los botones de acción, acordeones y enlaces de la barra inferior deben respetar un target mínimo de $44 \times 44\text{ px}$.
* **Touch-Action Feedback:** Implementar `active:scale-95` o `active:bg-slate-100` en Tailwind para dar respuesta visual inmediata al toque en pantallas táctiles.
* **Smooth Scroll Controlado:** Navegación interna fluida entre secciones mediante `scroll-smooth` sin alterar la posición fija de la barra inferior y del botón de WhatsApp.

```
---
```