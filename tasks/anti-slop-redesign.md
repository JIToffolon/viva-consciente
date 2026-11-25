# Anti-Slop Visual Redesign

## Objetivo
Eliminar patrones visuales genéricos generados por IA (AI-slop/vibecoding) identificados por la auditoría visual, elevando la estética a un diseño editorial, limpio y profesional para Transporte Lucero, sin alterar contenidos, rutas ni SEO.

## Contexto y Alcance
- **Proyecto**: Transporte Lucero (Astro + Tailwind CSS)
- **TDD Mode**: off (sin suite de tests unitarios configurada; verificación mediante build estático de Astro)
- **Engram mirror**: pending (entorno local sin servicio Engram conectado)

## Tareas

- [x] **TASK-01**: Eliminar fondos de grilla o puntitos artificiales (`radial-gradient` de 24px, 32px, etc.) [Completado: eliminados fondos de puntos en index.astro, ReviewCarousel.astro, sobre-nosotros/index.astro y servicios/*.astro]
- [x] **TASK-02**: Reducir y limpiar el glassmorphism excesivo (13 elementos con `backdrop-filter`) [Completado: tarjetas BentoCard, servicios, badges y CTAs convertidos a superficies sólidas limpias; preservado solo el header sticky y modales]
- [x] **TASK-03**: Reemplazar tipografía genérica por fuentes con carácter (títulos con peso editorial) [Completado: integrada Syne (700/800) para headings corporativos y reservada Inter solo para lectura técnica en body]
- [x] **TASK-04**: Eliminar manchas de color difuminadas (blobs desenfocados decorativos) [Completado: eliminados círculos borrosos `blur-3xl` en index.astro y sobre-nosotros/index.astro]
- [x] **TASK-05**: Normalizar sombras y glow de color (reemplazar box-shadows saturadas por neutras y contraste) [Completado: eliminados resplandores verdes `#25d366` y cian/azul saturados en botones y cards; reemplazados por sombras neutras `shadow-md`/`shadow-lg`]
- [x] **TASK-06**: Racionalizar esquinas redondeadas (definir jerarquía en lugar de `rounded-2xl` uniforme) [Completado: reducidos radios de cards a `rounded-lg`, inputs a `rounded-lg`, contenedores a `rounded-xl` y eliminados radios grotescos de 30-40px]
- [x] **TASK-07**: Personalizar tokens visuales base (desacoplar paleta/radios default) [Completado: redefinida la paleta corporativa fuera de los presets de Tailwind/shadcn (`#0c274c` navy, `#0ea5e9` ice, `#f4f7fb` frost, `#141d2b` asphalt) y fijados tokens de borderRadius explícitos]
- [x] **TASK-08**: Remover punto titilante ficticio (`animate-pulse`/`ping` en badges informativos estáticos) [Completado: eliminada animación infinita en badges de trayectoria, compromiso y excelencia; puntos ahora estáticos y profesionales]
- [x] **TASK-09**: Reestructurar carrusel infinito de reseñas (evitar cinta en loop automática) [Completado: reemplazada la cinta animada en loop continuo por una cuadrícula estática, editorial y legible de 6 testimonios verificados de Google]
- [x] **TASK-10**: Romper monotonía en grillas de tarjetas iguales (variar ritmo y pesos visuales) [Completado: los 3 pilares pasaron a una barra de especificación técnica con divisores sutiles; los 6 servicios se jerarquizaron entre 3 tarjetas insignia y una lista abierta de capacidades operativas]
- [x] **TASK-11**: Purgar animaciones gratuitas de reveal y transiciones innecesarias [Completado: eliminados `opacity-0 translate-y-8` del estado inicial de TimelineItem.astro y su IntersectionObserver; removido `animate-fade-in-up` del badge hero y del logo en hero mobile; limpiado CSS muerto de `@keyframes marquee` / `.animate-marquee`]
