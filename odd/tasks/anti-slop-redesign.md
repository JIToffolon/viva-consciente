# Anti-Slop Visual Redesign — Viva Consciente

## Objetivo
Aplicar un rediseño visual anti-slop orientado a la legibilidad clínica y editorial ("Ciencia + Naturaleza") para el vademécum y ecosistema Viva Consciente, guiado por `UI_DESIGN_SYSTEM.md` y los principios de `tasks/anti-slop-redesign.md`, sin alterar rutas, lógica ni contenidos funcionales.

## Contexto y Alcance
- **Proyecto**: Viva Consciente (Next.js 14 + Tailwind CSS)
- **TDD Mode**: off (verificación mediante `npm run typecheck` y `npm run build`)
- **Engram mirror**: pending (sin herramientas Engram MCP disponibles en esta sesión)
- **Scope autorizado**: Rediseño visual en `tailwind.config.ts`, `src/styles/globals.css`, `src/components/**` y `src/app/**`.

## Tareas

- [x] **TASK-01**: Tokens, paleta y tipografía clínica/editorial (`tailwind.config.ts`, `src/styles/globals.css`)
- [x] **TASK-02**: Limpiar navegación, layout global y `HeroScreenLayout` (`Header.tsx`, `SidebarNav.tsx`, `BottomNav.tsx`, `ThemeToggle.tsx`, `HeroScreenLayout.tsx`)
- [x] **TASK-03**: Rediseño de legibilidad y anti-slop en el Vademécum (`ProductCard.tsx`, `ProductSummaryCard.tsx`, `ProductAccordion.tsx`, `SearchAndFilterBar.tsx`, `StatusBadge.tsx`, `pro/page.tsx`, `pro/vademecum/page.tsx`, `pro/vademecum/[slug]/page.tsx`)
- [x] **TASK-04**: Romper monotonía de tarjetas y unificar estética editorial en vistas `/app/*`
- [x] **TASK-05**: Verificación final (`npm run typecheck` ok, `npm run build` 59/59 páginas estáticas compiladas; `npm run lint` omitido porque el proyecto no tiene ESLint configurado y dispara prompt interactivo)
