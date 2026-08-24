# Roadmap de Features y Guía de Implementación Paso a Paso (Fase 1: MVP Express)

Este documento desglosa la construcción del ecosistema en micro-pasos ordenados por dependencias lógicas. El agente debe marcar y verificar cada ítem antes de avanzar al siguiente.

---

## Épica 1: Setup del Entorno y Sistema Base (Paso 1 al 4)

- [ ] **Paso 1.1: Inicialización del Proyecto**
  - Configurar Next.js 14+ con App Router y TypeScript estricto[cite: 1, 4].
  - Instalar dependencias esenciales: `lucide-react`, `clsx`, `tailwind-merge` y `@radix-ui/react-accordion`[cite: 1].
- [ ] **Paso 1.2: Configuración de Tailwind Tokens**
  - Declarar la paleta en `tailwind.config.ts`: `brand-teal`, `brand-green`, `brand-gold`, `brand-cream`, `brand-surface`, `brand-text-main`, `brand-text-muted`[cite: 1, 2].
  - Configurar contenedor móvil centrado (`max-w-md mx-auto`)[cite: 2].
- [ ] **Paso 1.3: Componentes de Navegación Global**
  - Maquetar la barra inferior fija (`BottomNav`) con los 4 enlaces: *Inicio (`/app`)*, *Productos (`/app/superalimento`)*, *PRO (`/pro`)* y *Contacto (`/app/contacto`)*[cite: 1, 3].
  - Añadir targets táctiles ergonómicos ($\ge 44\text{ px}$) con feedback visual activo[cite: 1].
- [ ] **Paso 1.4: Botón Flotante de WhatsApp Global**
  - Crear `FloatingWhatsApp` posicionado a `bottom-20 right-4`[cite: 1, 2].
  - Implementar sanitización con `encodeURIComponent` y mensaje predeterminado institucional[cite: 2, 4].

---

## Épica 2: Modelado de Datos y Vademécum Core (Paso 5 al 8)

- [ ] **Paso 2.1: Definición de Tipos TypeScript**
  - Crear `src/types/product.ts` con interfaces para familias, estados (`PUBLICADO`, `VALIDAR`, `BLOQUEADO`) e ingredientes[cite: 1, 7].
- [ ] **Paso 2.2: Construcción de `products.json`**
  - Cargar las fichas completas de los 6 productos ancla: *Golden Lion MCT*, *Open Mind*, *Ashwagandha*, *Longevity Glow*, *NRF2* y *Triple Polifenol*[cite: 1, 3].
  - Cargar el catálogo complementario en formato resumen clasificando su estado[cite: 1, 7].
- [ ] **Paso 2.3: Componente Ficha Técnica Interactiva**
  - Maquetar `ProductAccordion` con secciones colapsables: Composición, Uso informativo y Precauciones obligatorias[cite: 1, 7].
  - Integrar caja de advertencia médica visible (`bg-amber-50 border-l-4 border-amber-500`)[cite: 7].
- [ ] **Paso 2.4: Componente Tarjeta de Catálogo General**
  - Maquetar `ProductSummaryCard` con badge de estado, presentación y CTA de consulta a WhatsApp[cite: 1, 7].

---

## Épica 3: Maquetación del Recorrido de Pantallas 01 a 08 (Paso 9 al 12)

- [ ] **Paso 3.1: Componente Base de Pantalla (`HeroScreenLayout`)**
  - Crear layout reutilizable: imagen hero con fallback, badge temático, título H1, bajada corta y botón CTA[cite: 1, 2].
- [ ] **Paso 3.2: Pantallas 01 a 03 (Ecosistema Institucional)**
  - `/app` (Portada: *Viva Consciente Organización*)[cite: 1, 3].
  - `/app/viva-consciente` (Institucional: *Una organización, múltiples áreas*)[cite: 1, 2].
  - `/app/investigacion` (Centro de Investigaciones: *Herbolaria y desarrollo científico*)[cite: 1, 2].
- [ ] **Paso 3.3: Pantallas 04 a 06 (Unidades Funcionales)**
  - `/app/micronutricion` (Micronutrición Funcional)[cite: 1, 2].
  - `/app/superalimento` (Viva Superalimento®)[cite: 1, 2].
  - `/app/adaptogenos` (Adaptógenos y Hongos Funcionales)[cite: 1, 2].
- [ ] **Paso 3.4: Pantallas 07 y 08 (Longevidad & Divulgación)**
  - `/app/longevidad` (Longevidad & Vitalidad Celular)[cite: 1, 2].
  - `/app/eje-intestino-cerebro` (Eje Intestino-Cerebro)[cite: 1, 2].

---

## Épica 4: Hub Área PRO y Vademécum Dinámico 09 y 10 (Paso 13 al 15)

- [ ] **Paso 4.1: Vista Hub Profesional (`/pro`)**
  - Crear aviso de acceso exclusivo para profesionales de la salud[cite: 2, 4].
  - Añadir filtros rápidos por categoría funcional y buscador client-side reactivo en memoria[cite: 1, 4].
- [ ] **Paso 4.2: Vista Listado Maestro (`/pro/vademecum`)**
  - Renderizar sección destacada con los 6 productos ancla y sección secundaria con tarjetas del catálogo general[cite: 1, 4].
- [ ] **Paso 4.3: Vista Detalle de Producto (`/pro/vademecum/[slug]`)**
  - Configurar generación estática (`generateStaticParams`) para carga instantánea[cite: 1].
  - Renderizar ficha completa V2 con fecha de actualización visible y botón de consulta directa[cite: 4, 7].

---

## Épica 5: Pantallas de Cierre 11 a 15 y Canales de Conversión (Paso 16 al 18)

- [ ] **Paso 5.1: Pantallas 11 a 14 (Comunidad y Actividades)**
  - `/app/academia` (Academia Viva Consciente)[cite: 1, 3].
  - `/app/forum` (Forum Nutrición Celular & Longevidad)[cite: 1, 2].
  - `/app/eventos` (Eventos y Alianzas)[cite: 1, 2].
  - `/app/comunidad` (Comunidad con enlace a Instagram oficial)[cite: 1, 2].
- [ ] **Paso 5.2: Pantalla 15 de Contacto Centralizado (`/app/contacto`)**
  - Maquetar grilla vertical con los 4 botones de acción rápida (Derivación Profesional, Consultas de Producto, Instagram, Alianzas)[cite: 1, 2].
- [ ] **Paso 5.3: Validación de Parámetros de Conversión**
  - Verificar que todos los números de teléfono, textos de WhatsApp y enlaces externos estén tipados y parametrizados en variables de entorno[cite: 1, 4].

---

## Épica 6: Optimización, Despliegue y QR Maestro (Paso 19 al 22)

- [ ] **Paso 6.1: Optimización de Assets e Imágenes**
  - Reemplazar tags `<img>` por `next/image` con tamaños y prioridades de carga (LCP)[cite: 1].
  - Convertir y comprimir assets a formatos modernos (WebP/AVIF)[cite: 1].
- [ ] **Paso 6.2: Configuración de Infraestructura y Redirecciones**
  - Implementar redirects permanentes en `next.config.js` (`/` $\rightarrow$ `/app`, `/vademecum` $\rightarrow$ `/pro/vademecum`)[cite: 1].
- [ ] **Paso 6.3: Auditoría de Compilación (CI/CD)**
  - Ejecutar `npm run lint` y `tsc --noEmit` garantizando 0 errores de tipado o sintaxis.
  - Ejecutar `npm run build` verificando la generación limpia de rutas estáticas SSG.
- [ ] **Paso 6.4: Entrega y Verificación del QR Maestro**
  - Generar el archivo SVG y PNG de alta resolución del QR Maestro apuntando a la URL definitiva del evento (`/app` o `/pro`)[cite: 1, 4].
  - Testear escaneo físico desde dispositivos iOS y Android en condiciones de baja luminosidad[cite: 4, 6].