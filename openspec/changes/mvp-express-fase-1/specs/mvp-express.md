# Spec: MVP Express Fase 1 - Ecosistema Viva Consciente

## Requirements

### R1: Layout Mobile-First y Sistema de Diseño
- **R1.1**: La aplicación DEBE encapsular todo el contenido en un contenedor móvil centrado (`max-w-md mx-auto min-h-screen bg-brand-cream pb-24`) con sombra y bordes redondeados en viewports de escritorio.
- **R1.2**: DEBE incluir un `BottomNav` fijo inferior (`fixed bottom-0 left-0 right-0 z-50 h-16 bg-brand-surface/90 backdrop-blur-md border-t border-slate-200`) con 4 accesos:
  1. *Inicio* (`/app`)
  2. *Productos* (`/app/superalimento`)
  3. *Área PRO* (`/pro`)
  4. *Contacto* (`/app/contacto`)
- **R1.3**: DEBE incluir un `FloatingWhatsApp` posicionado en `bottom-20 right-4 z-40` con mensaje de texto sanitizado mediante `encodeURIComponent`.
- **R1.4**: La paleta corporativa DEBE configurar los tokens `brand-teal`, `brand-green`, `brand-gold`, `brand-cream`, `brand-surface`, `brand-text-main` y `brand-text-muted`.

### R2: Modelo de Datos y Vademécum Digital
- **R2.1**: Las interfaces de datos en `src/types/product.ts` DEBEN incluir `ProductMaster`, `ProductFamily`, `ProductStatus` (`PUBLICADO` | `VALIDAR` | `BLOQUEADO`), `IngredientItem` y `precautions`.
- **R2.2**: Los 6 productos ancla DEBEN contar con su información técnica completa (Golden Lion MCT, Open Mind, Ashwagandha, Longevity Glow, NRF2, Triple Polifenol) en `src/data/products.json`.
- **R2.3**: El listado en `/pro` y `/pro/vademecum` DEBE permitir filtrado instantáneo sin peticiones al servidor por texto libre, familia de producto y área funcional.
- **R2.4**: Las fichas en `/pro/vademecum/[slug]` DEBEN renderizarse con generación estática (`generateStaticParams`) y presentar acordeones colapsables accesibles para Composición, Uso Informativo y Precauciones con caja de advertencia médica visible (`bg-amber-50 border-l-4 border-amber-500 text-amber-900`).

### R3: Recorrido Completo de 15 Pantallas
- **R3.1**: Cada pantalla DEBE utilizar el componente estandarizado `HeroScreenLayout` que incluya badge contextual, título H1, bajada corta (2 a 3 líneas) y botón CTA principal.
- **R3.2**: Las 15 rutas especificadas en `RUTAS_Y_VISTAS.md` DEBEN estar implementadas y accesibles:
  - Portada y Ecosistema: `/app`, `/app/viva-consciente`, `/app/investigacion`
  - Unidades Funcionales: `/app/micronutricion`, `/app/superalimento`, `/app/adaptogenos`
  - Longevidad y Divulgación: `/app/longevidad`, `/app/eje-intestino-cerebro`
  - Área Profesional: `/pro`, `/pro/vademecum`, `/pro/vademecum/[slug]`
  - Comunidad y Actividades: `/app/academia`, `/app/forum`, `/app/eventos`, `/app/comunidad`, `/app/contacto`
- **R3.3**: La vista `/app/contacto` DEBE disponer de una grilla vertical de 4 botones de acción rápida directos (Derivación Profesional, Consultas de Producto, Instagram y Alianzas).

### R4: Seguridad, Regulación y Performance
- **R4.1**: Todo texto de producto o divulgación DEBE carecer de promesas terapéuticas o curativas explícitas y contener el descargo médico regulatorio.
- **R4.2**: Las imágenes DEBEN usar `next/image` con dimensiones explícitas y formatos modernos (WebP/AVIF).
- **R4.3**: `next.config.js` DEBE configurar redirecciones permanentes para `/` hacia `/app` y `/vademecum` hacia `/pro/vademecum`.
