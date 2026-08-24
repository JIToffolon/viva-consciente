# Tasks: MVP Express Fase 1 - Ecosistema Viva Consciente

## 1. Setup del Proyecto y Design System Base
- [x] 1.1 Configurar estructura de directorios (`src/app`, `src/components`, `src/data`, `src/types`, `src/styles`) y dependencias base.
- [x] 1.2 Configurar tokens de diseño en `tailwind.config.ts` (`brand-teal`, `brand-green`, `brand-gold`, `brand-cream`, `brand-surface`, `brand-text-main`, `brand-text-muted`) y `globals.css`.
- [x] 1.3 Implementar shell global en `src/app/layout.tsx` con contenedor móvil centrado (`max-w-md mx-auto min-h-screen pb-24`).
- [x] 1.4 Crear componente `BottomNav` fijo de 4 botones (Inicio, Productos, Área PRO, Contacto) con feedback activo.
- [x] 1.5 Crear componente `FloatingWhatsApp` posicionado en `bottom-20 right-4` con sanitización de mensaje.

## 2. Modelado de Datos y Vademécum Core
- [x] 2.1 Definir interfaces y tipos TypeScript en `src/types/product.ts` (`ProductMaster`, `ProductFamily`, `ProductStatus`, `IngredientItem`).
- [x] 2.2 Consolidar base de datos `src/data/products.json` con los 6 productos ancla completos y catálogo complementario con estados asignados.
- [x] 2.3 Crear componentes de presentación de Vademécum (`ProductCard`, `ProductSummaryCard`, `StatusBadge`).
- [x] 2.4 Implementar componente interactivo `ProductAccordion` con secciones colapsables (Composición, Uso Informativo, Precauciones con caja de advertencia médica).
- [x] 2.5 Implementar componente `SearchAndFilterBar` con filtrado client-side reactivo en memoria por texto, familia y áreas funcionales.

## 3. Hub Profesional y Vistas del Vademécum
- [x] 3.1 Construir vista Hub Profesional `/pro` con disclaimer de acceso para profesionales de la salud y accesos directos.
- [x] 3.2 Construir vista Listado Maestro `/pro/vademecum` con sección destacada de productos ancla y catálogo general filtrable.
- [x] 3.3 Construir vista de Detalle de Producto `/pro/vademecum/[slug]` con SSG (`generateStaticParams`), ficha completa V2 y CTA directo de consulta.

## 4. Recorrido de Pantallas Institucionales y de Divulgación
- [x] 4.1 Crear componente reutilizable `HeroScreenLayout` con badge, título H1, bajada corta y botón CTA.
- [x] 4.2 Construir pantallas institucionales: Portada (`/app`), Viva Consciente (`/app/viva-consciente`) y Centro de Investigaciones (`/app/investigacion`).
- [x] 4.3 Construir pantallas de unidades funcionales: Micronutrición (`/app/micronutricion`), Superalimento (`/app/superalimento`) y Adaptógenos (`/app/adaptogenos`).
- [x] 4.4 Construir pantallas de longevidad y bienestar: Longevidad (`/app/longevidad`) y Eje Intestino-Cerebro (`/app/eje-intestino-cerebro`).
- [x] 4.5 Construir pantallas de comunidad y actividades: Academia (`/app/academia`), Forum (`/app/forum`), Eventos (`/app/eventos`) y Comunidad (`/app/comunidad`).
- [x] 4.6 Construir pantalla de Contacto Centralizado (`/app/contacto`) con grilla vertical de 4 canales directos.

## 5. Infraestructura, Configuración y Verificación
- [x] 5.1 Configurar redirección de raíz `/` a `/app` y `/vademecum` a `/pro/vademecum` en `next.config.js` y `src/app/page.tsx`.
- [x] 5.2 Centralizar configuración de navegación y enlaces en `src/data/navigation.ts`.
- [x] 5.3 Validar compilación de TypeScript (`tsc --noEmit`) y ejecución de build estático.
