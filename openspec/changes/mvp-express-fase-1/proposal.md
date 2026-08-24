# Proposal: MVP Express Fase 1 - Ecosistema Viva Consciente

## Why
El ecosistema Viva Consciente requiere una web-app mobile-first ultraliviana para ser consumida de inmediato tras escanear códigos QR en eventos y presentaciones. Debe permitir a profesionales de la salud y usuarios explorar las 15 pantallas institucionales y funcionales, consultar el Vademécum interactivo (con 6 productos ancla en formato V2 y catálogo complementario) en menos de 5 minutos de lectura ágil, y conectar con los canales oficiales de contacto y WhatsApp sin fricciones ni dependencias de backend pesadas.

## What Changes
1. **Infraestructura y Base Frontend:**
   - Proyecto Next.js 14+ (App Router) con TypeScript estricto y Tailwind CSS.
   - Design System con tokens de marca (`brand-teal`, `brand-green`, `brand-gold`, `brand-cream`, `brand-surface`, `brand-text-main`, `brand-text-muted`).
   - Contenedor móvil centrado (`max-w-md mx-auto min-h-screen pb-24`) y `BottomNav` fijo de 4 ítems (Inicio, Productos, Área PRO, Contacto).
   - Botón flotante global de WhatsApp con mensaje parametrizado (`FloatingWhatsApp`).

2. **Modelado de Datos y Vademécum:**
   - Tipado TypeScript estricto (`ProductMaster`, `ProductFamily`, `ProductStatus`, `IngredientItem`).
   - Base de datos en memoria (`src/data/products.json`) con los 6 productos ancla y catálogo clasificado por estado (`PUBLICADO`, `VALIDAR`, `BLOQUEADO`).
   - Componentes `ProductAccordion` (con alertas de seguridad médica) y `ProductSummaryCard`.
   - Hub Profesional `/pro` y Vademécum `/pro/vademecum` con buscador y filtros client-side instantáneos (`useMemo`).
   - Páginas de detalle estáticas SSG en `/pro/vademecum/[slug]`.

3. **Recorrido de 15 Pantallas Mobile-First:**
   - Pantalla 01 a 03: Institucional (`/app`, `/app/viva-consciente`, `/app/investigacion`).
   - Pantalla 04 a 08: Unidades Funcionales y Divulgación (`/app/micronutricion`, `/app/superalimento`, `/app/adaptogenos`, `/app/longevidad`, `/app/eje-intestino-cerebro`).
   - Pantalla 09 a 10: Área PRO y Vademécum (`/pro`, `/pro/vademecum`, `/pro/vademecum/[slug]`).
   - Pantalla 11 a 15: Comunidad, Actividades y Contacto (`/app/academia`, `/app/forum`, `/app/eventos`, `/app/comunidad`, `/app/contacto`).

4. **Cumplimiento Regulatorio, Performance y Despliegue:**
   - Cero promesas terapéuticas en textos, avisos médicos explícitos para embarazo/lactancia/medicación.
   - Redirecciones en `next.config.js` (`/` -> `/app`, `/vademecum` -> `/pro/vademecum`).
   - Optimización de imágenes (`next/image`), tipografías e iconografía ligera (`lucide-react`).

## Capabilities
- `ui-design-system`: Layout mobile container, BottomNav, FloatingWhatsApp, tokens Tailwind.
- `vademecum-core`: Modelado de productos, estados regulatorios, buscador y filtros en memoria, fichas técnicas interactivas.
- `ecosystem-navigation`: Rutas de las 15 pantallas con hero estándar, bajada, metadata y CTAs hacia WhatsApp/PRO.
- `safety-and-compliance`: Cajas de alerta médica, disclaimer regulatorio y separación estricta de estados editoriales.
