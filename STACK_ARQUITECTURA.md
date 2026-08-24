```
### `02_STACK_Y_ARQUITECTURA.md`
```

```
```markdown
```

```
# Stack Tecnológico y Arquitectura Frontend - Ecosistema Viva Consciente
```

```
## 1. Stack Tecnológico Principal (Fase 1: MVP Express)
```

```
- **Framework:** Next.js 14+ (App Router) con React 18+.
- **Lenguaje:** TypeScript (Strict Mode habilitado).
```

```
- **Estilos:** Tailwind CSS con configuración de tokens de marca corporativos.
- **Iconografía:** `lucide-react` (iconos ligeros y vectoriales).
```

```
- **Componentes Interactivos:** Headless UI / Radix Primitives (acordeones
accesibles, modales, pestañas).
```

```
- **Búsqueda & Filtro Client-side:** Búsqueda nativa optimizada en memoria /
`fuse.js` (sin dependencias de backend).
```

```
- **Hosting & Edge Delivery:** Vercel (Edge Network, compresión brotli/gzip y
optimización automática de imágenes).
```

```
---
```

```
## 2. Estructura de Directorios del Proyecto
```

```
```text
├── public/
```

```
│   ├── brand/               # Logos oficiales (SVG/PNG transparente)
│   ├── heroes/              # Imágenes hero por pantalla (WebP/AVIF
optimizadas)
│   └── products/            # Fotos de productos destacados y catálogo
├── src/
```

```
│   ├── app/
│   │   ├── layout.tsx       # Layout global (Mobile Container, Bottom Bar,
WhatsApp CTA)
```

```
│   │   ├── page.tsx         # Redirección a /app o Portada
│   │   ├── app/             # Rutas generales del ecosistema
│   │   │   ├── page.tsx                    # (1) Portada
```

```
│   │   │   ├── viva-consciente/page.tsx    # (2) Viva Consciente Institucional
│   │   │   ├── investigacion/page.tsx      # (3) Centro de Investigaciones
│   │   │   ├── micronutricion/page.tsx     # (4) Micronutrición Funcional
│   │   │   ├── superalimento/page.tsx      # (5) Viva Superalimento®
│   │   │   ├── adaptogenos/page.tsx        # (6) Adaptógenos
│   │   │   ├── longevidad/page.tsx         # (7) Longevidad
│   │   │   ├── eje-intestino-cerebro/page.tsx # (8) Eje Intestino-Cerebro
│   │   │   ├── academia/page.tsx           # (11) Academia
│   │   │   ├── forum/page.tsx              # (12) Forum
│   │   │   ├── eventos/page.tsx            # (13) Eventos y Alianzas
│   │   │   ├── comunidad/page.tsx          # (14) Comunidad
│   │   │   └── contacto/page.tsx           # (15) Contacto y Canales
│   │   └── pro/             # Módulo Área PRO & Vademécum
```

```
│   │       ├── page.tsx                    # (9) Hub Área PRO (Filtros, lectura
rápida 5 min)
│   │       └── vademecum/                  # (10) Vademécum Digital Maestro
│   │           ├── page.tsx                # Listado general + destacados
│   │           └── [slug]/page.tsx         # Ficha técnica individual
│   ├── components/
│   │   ├── common/          # Header, HeroSection, BottomNav, FloatingWhatsApp
│   │   ├── vademecum/       # ProductCard, ProductAccordion, BadgeStatus,
SearchBar
│   │   └── ui/              # Accordion, Button, Modal, Card (Primitivos UI)
│   ├── data/
│   │   ├── products.json    # Base de datos JSON de productos (V2)
│   │   ├── categories.json  # Nodos y unidades del ecosistema
│   │   └── navigation.ts    # Configuración de rutas y menús
│   ├── types/
│   │   ├── product.ts       # Modelos e interfaces TypeScript del Vademécum
```

```
│   │   └── navigation.ts    # Tipos para menús y pantallas
│   └── styles/
│       └── globals.css      # Estilos base y utilidades Tailwind
```
```

```
---
```

```
## 3. Modelo de Datos & Tipado TypeScript (Especificación V2)
```

```
Para garantizar integridad y respetar la regla editorial de Vademécum V2, los
productos deben usar el siguiente contrato de tipos en `src/types/product.ts`:
```

```
```typescript
export type ProductFamily =
  | 'ORIGINALES'
  | 'ADAPTOGENOS'
  | 'LONGEVIDAD'
  | 'HONGOS_FUNCIONALES'
  | 'EXTRACTOS_LIQUIDOS'
  | 'MICRONUTRICION_AVANZADA';
export type ProductStatus = 'PUBLICADO' | 'VALIDAR' | 'BLOQUEADO';
export interface IngredientItem {
  name: string;
  amountPerKg?: string;
  standardization?: string;
  isPendingValidation?: boolean;
}
export interface ProductMaster {
  id: string;
  slug: string;
  name: string;
  family: ProductFamily;
  isAnchorFeatured: boolean; // true para los 6 productos destacados
  status: ProductStatus;
  presentation: string;      // ej: "100 g", "300 g", "30 ml"
  functionalDescription: string; // 2-3 líneas sin promesas terapéuticas
  composition: {
    rawText?: string;
    items?: IngredientItem[];
    notes?: string;
  };
  informativeUsage: string;   // Conforme a rótulo vigente
  precautions: {
    general: string;
    interactions?: string[];
    specialPopulations?: string; // Embarazo, lactancia, anticoagulantes
  };
  functionalAreas: string[];  // ['Cognición', 'Energía', 'Microbiota',
'Antioxidantes']
  updatedAt: string;          // Formato: "Agosto 2026"
  ctaProText?: string;        // Default: "Consultar ficha técnica / Contactar
al área profesional"
  pdfUrl?: string;            // Opcional para descarga
}
```
---
```

```
## 4. Estructura del Almacén de Datos (`src/data/products.json`)
```

```
Los 6 productos ancla prioritarios deben cargarse con datos completos, mientras
que el resto del catálogo se incluye con su respectivo estado (`PUBLICADO`,
`VALIDAR` o `BLOQUEADO`):
```

```
```json
[
  {
    "id": "golden-lion-mct",
    "slug": "golden-lion-mct",
    "name": "Golden Lion MCT",
    "family": "ADAPTOGENOS",
    "isAnchorFeatured": true,
    "status": "PUBLICADO",
    "presentation": "100 g / 300 g",
    "functionalDescription": "Combinación funcional orientada al soporte del eje
intestino-cerebro y metabolismo energético.",
    "composition": {
      "items": [
        { "name": "Melena de León", "standardization": "Cuerpo fructífero /
extracto estandarizado" },
        { "name": "MCT (Triglicéridos de Cadena Media)", "standardization":
"Polvo con base de coco" }
      ]
    },
    "informativeUsage": "1 cucharada dosificadora incorporada en infusiones
matutinas o bebidas funcionales.",
    "precautions": {
      "general": "Evaluar tolerancia digestiva individual al MCT.",
      "specialPopulations": "Consultar con el médico tratante en embarazo,
lactancia o cuadros gastrointestinales agudos."
    },
    "functionalAreas": ["Eje Intestino-Cerebro", "Energía", "Cognición"],
    "updatedAt": "Agosto 2026"
  },
  {
    "id": "open-mind",
    "slug": "open-mind",
    "name": "Open Mind",
    "family": "ADAPTOGENOS",
    "isAnchorFeatured": true,
    "status": "VALIDAR",
    "presentation": "100 g",
    "functionalDescription": "Fórmula multicomponente orientada a acompañar
rutinas de enfoque, energía y desempeño cognitivo.",
    "composition": {
      "items": [
        { "name": "Melena de León", "amountPerKg": "200 g" },
        { "name": "Ginkgo biloba", "amountPerKg": "24 g" },
        { "name": "Semillas de cáñamo (Hemp)", "amountPerKg": "250 g" },
        { "name": "Cordyceps", "amountPerKg": "200 g" },
        { "name": "MCT", "amountPerKg": "200 g" },
        { "name": "Guaraná", "amountPerKg": "150 g" }
      ],
      "notes": "Confirmar cantidades finales y rotulado vigente antes de versión
final."
    },
    "informativeUsage": "Incorporar en agua, batidos o café durante la mañana o
antes de jornadas de alta demanda mental.",
    "precautions": {
      "general": "Contiene ingredientes estimulantes (guaraná/cafeína).",
      "specialPopulations": "Revisar interacciones de Ginkgo biloba con
anticoagulantes. No recomendado en personas sensibles a estimulantes."
    },
```

```
    "functionalAreas": ["Cognición", "Atención", "Rendimiento Mental"],
    "updatedAt": "Agosto 2026"
  }
]
```

```
```
```

```
---
```

```
## 5. Patrones de Estado & Lógica de Búsqueda Client-Side
```

```
* **Sin dependencias pesadas:** El listado de productos se filtra en el cliente
mediante un hook React simple (`useMemo`) para garantizar respuesta en 0ms:
```

```
* Filtro por texto libre (`name`, `functionalAreas`, `composition.items.name`).
```

```
* Filtro por familia (`ProductFamily`).
```

```
* Filtro por área funcional (Badges clicables).
```

```
* **Acceso Abierto Fase 1:** El módulo `/pro` no implementa middlewares de
bloqueo ni AuthProviders; muestra un banner informativo superior ("Material
exclusivo de divulgación científica para profesionales de la salud") y habilita
el catálogo de forma inmediata.
```

```
```
```

```
---
```

```
```
```

