# Design: MVP Express Fase 1 - Ecosistema Viva Consciente

## Architecture Overview

```
src/
├── app/
│   ├── layout.tsx                # Shell global con contenedor móvil, BottomNav y FloatingWhatsApp
│   ├── page.tsx                  # Redirección estática a /app
│   ├── app/                      # Rutas generales de divulgación y comunidad
│   │   ├── page.tsx              # (1) Portada
│   │   ├── viva-consciente/page.tsx # (2) Institucional
│   │   ├── investigacion/page.tsx   # (3) Centro de Investigaciones
│   │   ├── micronutricion/page.tsx  # (4) Micronutrición Funcional
│   │   ├── superalimento/page.tsx   # (5) Viva Superalimento®
│   │   ├── adaptogenos/page.tsx     # (6) Adaptógenos y Hongos
│   │   ├── longevidad/page.tsx      # (7) Longevidad & Vitalidad
│   │   ├── eje-intestino-cerebro/page.tsx # (8) Eje Intestino-Cerebro
│   │   ├── academia/page.tsx        # (11) Academia
│   │   ├── forum/page.tsx           # (12) Forum
│   │   ├── eventos/page.tsx         # (13) Eventos y Alianzas
│   │   ├── comunidad/page.tsx       # (14) Comunidad
│   │   └── contacto/page.tsx        # (15) Contacto Centralizado
│   └── pro/                      # Módulo profesional y Vademécum
│       ├── page.tsx              # (9) Hub Área PRO con filtros reactivos
│       └── vademecum/            # (10) Vademécum Digital Maestro
│           ├── page.tsx          # Listado interactivo y tarjetas de catálogo
│           └── [slug]/page.tsx   # Ficha técnica individual V2 (SSG)
├── components/
│   ├── common/
│   │   ├── BottomNav.tsx         # Barra inferior fija de 4 items
│   │   ├── FloatingWhatsApp.tsx  # Botón flotante WhatsApp
│   │   ├── HeroScreenLayout.tsx  # Layout reutilizable para las 15 pantallas
│   │   └── Header.tsx            # Header minimalista con logo
│   ├── vademecum/
│   │   ├── ProductCard.tsx       # Tarjeta de producto ancla
│   │   ├── ProductSummaryCard.tsx# Tarjeta compacta de catálogo general
│   │   ├── ProductAccordion.tsx  # Acordeón de Composición, Uso y Precauciones
│   │   ├── SearchAndFilterBar.tsx# Buscador y badges de filtrado client-side
│   │   └── StatusBadge.tsx       # Badge PUBLICADO / VALIDAR / BLOQUEADO
│   └── ui/
│       ├── Accordion.tsx         # Primitivo de acordeón accesible
│       └── Button.tsx            # Botón reutilizable con variantes brand
├── data/
│   ├── products.json             # Catálogo V2 con los 6 anclas + suplementos
│   └── navigation.ts             # Definición centralizada de rutas y pantallas
├── types/
│   ├── product.ts                # Interfaces de datos y tipos de producto
│   └── navigation.ts             # Tipos de navegación y rutas
└── styles/
    └── globals.css               # Tokens y estilos base
```

## Technical Decisions

1. **Client-Side Filtering & Zero-Latency Search:**
   - La búsqueda y los filtros por familia/área funcional se ejecutan en memoria usando `useMemo` sobre el conjunto tipado de `products.json`.
   - Se asegura un Interaction to Next Paint (INP) inferior a 50ms al evitar consultas a APIs externas.

2. **Mobile-First Container Strategy:**
   - La web-app opera con un contenedor centralizado `max-w-md mx-auto` con fondo `brand-cream` (`#F8FAF9`) y sombras suaves en pantallas de escritorio, emulando la experiencia de una aplicación nativa.
   - En mobile ocupa el 100% del viewport sin scroll horizontal ni desbordamientos.

3. **Seguridad y Tono Editorial:**
   - Las fichas de producto emplean lenguaje neutral/científico conforme a las directrices de `05_SEGURIDAD_Y_REGULACION.md`.
   - Los productos con dosificación o ingredientes en proceso de confirmación se señalan con el estado `VALIDAR`.

4. **SEO y Generación Estática (SSG):**
   - Todas las rutas estáticas y las fichas de producto `/pro/vademecum/[slug]` implementan `generateStaticParams` y metadatos individuales para garantizar indexación óptima y carga ultrarrápida.
