# viva-consciente Specification

## Purpose
Especificación funcional del ecosistema web mobile-first Viva Consciente (MVP Express Fase 1).

## Requirements

### Requirement: Layout Mobile-First y Sistema de Diseño
La aplicación DEBE implementar un contenedor móvil centrado (`max-w-md mx-auto min-h-screen bg-brand-cream pb-24`) con barra de navegación inferior fija (`BottomNav`) de 4 accesos y botón flotante de WhatsApp (`FloatingWhatsApp`).

#### Scenario: Visualización en Mobile y Desktop
- **GIVEN** un usuario que accede desde cualquier dispositivo
- **WHEN** se carga la aplicación
- **THEN** el viewport presenta un contenedor centrado con fondo `brand-cream`, targets táctiles ergonómicos ($\ge 44\text{ px}$) y navegación inferior visible en todo momento.

### Requirement: Vademécum Digital y Fichas Técnicas
El Vademécum DEBE permitir la consulta interactiva de los 6 productos ancla con acordeones detallados (Composición, Uso Informativo, Precauciones con caja de advertencia médica) y catálogo complementario con filtros client-side instantáneos.

#### Scenario: Búsqueda y filtrado reactivo
- **GIVEN** un profesional en el Hub `/pro` o `/pro/vademecum`
- **WHEN** escribe un término de búsqueda o selecciona una familia/área funcional
- **THEN** la lista de productos se actualiza inmediatamente en memoria sin latencia de red.

### Requirement: Recorrido de 15 Pantallas
La plataforma DEBE proveer las 15 rutas especificadas para divulgación institucional, científica, módulos profesionales y canales directos de contacto.

#### Scenario: Navegación entre vistas
- **GIVEN** un usuario navegando por el ecosistema
- **WHEN** hace clic en cualquier CTA o enlace de navegación
- **THEN** la vista correspondiente carga con su `HeroScreenLayout`, bajada institucional concisa y CTAs hacia WhatsApp o Área PRO.
