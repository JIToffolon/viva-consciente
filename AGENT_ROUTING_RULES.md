# Protocolo de Enrutamiento y Reglas de Ejecución del Agente

Este archivo es el **Router Operativo Maestro** para el agente de desarrollo en el proyecto Viva Consciente (MVP Express Fase 1).

---

## 1. Regla de Oro de Ejecución
Antes de generar, modificar o refactorizar cualquier archivo de código (`.tsx`, `.ts`, `.json`, `.css`), el agente **DEBE LEER OBLIGATORIAMENTE** el archivo `.md` especializado correspondiente a su tarea actual.

Queda estrictamente prohibido:
- Inferir composiciones nutricionales o inventar ingredientes que no estén explícitos en los documentos de referencia.
- Romper el enfoque de lectura ágil (5 minutos) en mobile.
- Agregar dependencias pesadas de backend o autenticación en esta Fase 1.

---

## 2. Matriz de Enrutamiento por Tarea

| Tarea o Contexto que vas a realizar | Archivo `.md` que DEBES leer antes | Conceptos clave a validar |
| :--- | :--- | :--- |
| **Maquetar componentes visuales, menús o layouts** | `01_UI_DESIGN_SYSTEM.md` | Paleta de colores oficial, tipografías, menú inferior fijo de 4 botones, botón flotante de WhatsApp, targets táctiles mínimos (44px). |
| **Crear rutas, estructura de carpetas o interfaces TypeScript** | `02_STACK_Y_ARQUITECTURA.md` | Estructura en `src/app`, interfaces estrictas en `src/types/product.ts`, modelo de datos de `products.json` y filtros client-side. |
| **Construir pantallas específicas o fichas de Vademécum** | `03_RUTAS_Y_VISTAS.md` | Títulos exactos (H1), bajadas de 2 a 3 líneas, destinos de CTA de las 15 pantallas y contenido interactivo de los 6 productos ancla. |
| **Configurar dominio, variables de entorno, redirects o QR** | `04_INFRAESTRUCTURA_Y_DEPLOY.md` | Configuración de `next.config.js`, redirecciones canónicas, parámetros del QR Maestro y despliegue en Vercel. |
| **Redactar textos médicos, claims, advertencias o estados** | `05_SEGURIDAD_Y_REGULACION.md` | Cero promesas terapéuticas, avisos de embarazo/medicación, advertencias en Ginkgo/NRF2 y estados `PUBLICADO` / `VALIDAR` / `BLOQUEADO`. |
| **Optimizar imágenes, fuentes, bundle o tiempos de carga** | `06_PERFORMANCE_Y_OPTIMIZACION.md` | Uso mandatorio de `next/image` con tamaños declarados, formatos AVIF/WebP, tree-shaking de Lucide Icons y renderizado SSG. |

---

## 3. Disparadores de Decisión Rápida (Triggers)

- **Si vas a crear/editar un componente de UI (`components/`):**
  $\rightarrow$ Consulta `01_UI_DESIGN_SYSTEM.md` para aplicar los tokens exactos (`brand-teal`, `brand-green`, `brand-gold`, `brand-cream`, `brand-surface`).
  
- **Si vas a modificar el archivo de datos `products.json`:**
  $\rightarrow$ Consulta `02_STACK_Y_ARQUITECTURA.md` (tipado estricto) y `05_SEGURIDAD_Y_REGULACION.md` (respetar la regla de no inventar proporciones y marcar con `VALIDAR` lo pendiente).

- **Si vas a maquetar una de las 15 pantallas en `src/app/`:**
  $\rightarrow$ Consulta `03_RUTAS_Y_VISTAS.md` para copiar el texto exacto del título, bajada y destino de acción.

- **Si vas a agregar interactividad o acordeones:**
  $\rightarrow$ Consulta `01_UI_DESIGN_SYSTEM.md` (patrón de acordeones) y `06_PERFORMANCE_Y_OPTIMIZACION.md` (respuesta táctil instantánea `INP` < 100ms).

- **Si vas a exportar o enlazar el código QR:**
  $\rightarrow$ Consulta `04_INFRAESTRUCTURA_Y_DEPLOY.md` para garantizar que apunte a la URL web maestra y nunca a un archivo PDF estático.

---

## 4. Orden de Ejecución para el MVP Express (Checklist del Agente)

1. `[ ]` **Paso 1:** Configurar layout base, Tailwind tokens y menú inferior fijo (`01_UI` + `02_STACK`).
2. `[ ]` **Paso 2:** Crear la base de datos `src/data/products.json` con los 6 productos ancla destacados y el catálogo resumido (`02_STACK` + `05_SEGURIDAD`).
3. `[ ]` **Paso 3:** Maquetar las 15 pantallas mobile-first con sus títulos, bajadas y CTAs (`03_RUTAS`).
4. `[ ]` **Paso 4:** Montar el módulo `/pro` y el Vademécum interactivo con acordeones (`01_UI` + `03_RUTAS` + `05_SEGURIDAD`).
5. `[ ]` **Paso 5:** Conectar canales de contacto directo (WhatsApp codificado e Instagram) (`03_RUTAS` + `05_SEGURIDAD`).
6. `[ ]` **Paso 6:** Auditar performance y optimización de imágenes (`06_PERFORMANCE`).
7. `[ ]` **Paso 7:** Configurar redirects, variables de entorno y QR Maestro para Vercel (`04_INFRAESTRUCTURA`).