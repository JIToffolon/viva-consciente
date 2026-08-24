# Definición de Rutas, Vistas y Contenidos - Ecosistema Viva Consciente

Este documento define la arquitectura exacta de las 15 pantallas de navegación móvil y el sistema de fichas del Vademécum Digital para la Fase 1 (MVP Express).

---

## 1. Tabla Maestra de Navegación (15 Pantallas)

| # | Vista / Módulo | Ruta Next.js | Título Principal (H1) | Bajada Editorial | CTA Principal | Destino CTA |
| :- | :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | Portada | `/app` | Viva Consciente Organización | Ciencia, naturaleza e innovación para una nueva salud. | Explorar el ecosistema | `/app/viva-consciente` |
| **02** | Viva Consciente | `/app/viva-consciente` | Una organización, múltiples áreas conectadas | Integramos investigación, desarrollo, educación y unidades especializadas dentro de una misma visión de salud. | Conocer nuestras áreas | `/app/investigacion` |
| **03** | Investigaciones | `/app/investigacion` | Centro de Investigaciones | Herbolaria, medicinas biológicas y desarrollo científico aplicado al bienestar celular. | Ver investigación | `/app/micronutricion` |
| **04** | Micronutrición | `/app/micronutricion` | Micronutrición Funcional | Intervención inteligente sobre funciones celulares, metabólicas y sistémicas. | Conocer el enfoque | `/app/superalimento` |
| **05** | Superalimento | `/app/superalimento` | Viva Superalimento® | Unidad de alimentos y micronutrición funcional: calidad, pureza y ciencia biológica. | Ver productos | `/app/adaptogenos` |
| **06** | Adaptógenos | `/app/adaptogenos` | Adaptógenos y Hongos Funcionales | Hongos, botánicos y fórmulas para complementar rutinas de energía, enfoque y resiliencia. | Explorar adaptógenos | `/app/longevidad` |
| **07** | Longevidad | `/app/longevidad` | Longevidad & Vitalidad Celular | Fórmulas y compuestos orientados a hábitos de bienestar y envejecimiento celular saludable. | Explorar longevidad | `/app/eje-intestino-cerebro` |
| **08** | Eje Intestino | `/app/eje-intestino-cerebro`| Eje Intestino-Cerebro | Divulgación científica: microbiota, sistema nervioso e inteligencia biológica integrada. | Saber más | `/pro` |
| **09** | Profesionales PRO | `/pro` | Área Profesionales de la Salud | Acceso rápido a información técnica, portfolio profesional, vademécum y recursos de consulta. | Entrar al área PRO | `/pro/vademecum` |
| **10** | Vademécum Hub | `/pro/vademecum` | Vademécum Profesional Digital | Portfolio organizado producto por producto para consulta rápida, estructurada y actualizable. | Consultar vademécum | `/app/contacto` |
| **11** | Academia | `/app/academia` | Academia Viva Consciente | Formación, contenidos, conferencias y recursos formativos para la comunidad y profesionales. | Ver formación | `/app/forum` |
| **12** | Forum | `/app/forum` | Forum Nutrición Celular & Longevidad | Encuentro de formación, intercambio profesional e innovación alrededor de la salud biológica. | Conocer el Forum | `/app/eventos` |
| **13** | Eventos | `/app/eventos` | Eventos y Alianzas | Participaciones institucionales, agenda de conferencias, congresos y vinculación estratégica. | Ver agenda | `/app/comunidad` |
| **14** | Comunidad | `/app/comunidad` | Comunidad Viva Consciente | Novedades, divulgación, redes sociales y acceso al ecosistema social de la organización. | Sumarme a la comunidad | `https://instagram.com/vivaconsciente` |
| **15** | Contacto | `/app/contacto` | Conectar con Viva Consciente | Canales directos de derivación profesional, comercial, institucional y de soporte. | Contactar | `https://wa.me/<NUMERO>?text=Hola...` |

---

## 2. Detalle y Layout de Pantallas Generales (01 a 08 y 11 a 15)

Todas las pantallas generales del ecosistema deben implementar el componente `HeroScreenLayout`:
- **Cabecera Visual:** Imagen panorámica o abstracta botánica (`/heroes/<id>.webp`) con gradiente oscuro inferior para garantizar contraste.
- **Bloque Textual Central:** H1 jerárquico + Párrafo de 2 a 3 líneas (máximo 45 palabras) con interlineado holgado.
- **Grilla de Contenido / Nodos:** 3 a 4 tarjetas informativas con micro-iconos de Lucide.
- **Botón CTA Primario:** Botón destacado en color `brand-teal`, ancho completo en smartphone.
- **Navegación Persistente:** Enlace secundario para retornar o avanzar en el recorrido guiado.

---

## 3. Especificación del Módulo PRO & Vademécum (09 y 10)

### 3.1. Hub Área PRO (`/pro`)
- **Aviso de Cabecera:** Card destacada con fondo `brand-cream` y borde dorado suave: *"Material informativo y científico destinado a profesionales de la salud e investigadores."*
- **Filtros Rápidos en Cascada:**
  - Selector de Categorías: `Todos`, `Adaptógenos`, `Longevidad`, `Micronutrición`, `Originales`, `Extractos`.
  - Input de Búsqueda Instantánea: Búsqueda reactiva por nombre de producto o principio activo.
- **Sección de Acceso Inmediato:** Botón a descarga directa de catálogo en PDF (si está disponible) y enlace directo a WhatsApp de Consultas Técnicas.

### 3.2. Fichas de los 6 Productos Ancla Destacados (`/pro/vademecum/[slug]`)
Cada uno de estos 6 productos debe renderizarse con interactividad completa mediante acordeones:

#### 1. Golden Lion MCT
- **Categoría / Familia:** ADAPTÓGENOS / HONGOS FUNCIONALES
- **Presentación:** 100 g / 300 g polvo
- **Descripción Funcional:** Combinación funcional diseñada para acompañar rutinas de enfoque cognitivo y aporte energético celular mediante ácidos grasos de rápida disponibilidad.
- **Composición Validada:** Melena de León (*Hericium erinaceus*, extracto estandarizado / cuerpo fructífero) + Polvo de MCT (Triglicéridos de Cadena Media con base de coco).
- **Modo de Uso:** 1 medida dosificadora diaria disuelta en infusiones, café o batidos matutinos.
- **Precauciones:** Introducir gradualmente para verificar tolerancia digestiva al MCT. Consultar al médico tratante en embarazo, lactancia o cuadros de litiasis vesicular.
- **Estado:** `PUBLICADO`

#### 2. Open Mind
- **Categoría / Familia:** ADAPTÓGENOS / ENERGÍA & COGNICIÓN
- **Presentación:** 100 g polvo
- **Descripción Funcional:** Fórmula multicomponente orientada a complementar hábitos de concentración, claridad mental y rendimiento en jornadas exigentes.
- **Composición Base:** Melena de León (200 g/kg), Ginkgo biloba (24 g/kg), Semillas de Cáñamo / Hemp (250 g/kg), Cordyceps (200 g/kg), MCT (200 g/kg), Guaraná (150 g/kg).
- **Modo de Uso:** Incorporar por la mañana en líquidos fríos o tibios. No consumir en horarios nocturnos.
- **Precauciones:** Contiene ingredientes estimulantes (guaraná/cafeína natural). Precaución en personas con sensibilidad a estimulantes. Ginkgo biloba requiere supervisión médica en pacientes bajo medicación anticoagulante o antiagregante.
- **Estado:** `VALIDAR` *(Nota: ajuste de sumatoria por kg en curso)*

#### 3. Ashwagandha
- **Categoría / Familia:** ADAPTÓGENOS / EQUILIBRIO
- **Presentación:** 100 g polvo / extracto
- **Descripción Funcional:** Raíz botánica adaptógena tradicionalmente utilizada para favorecer la respuesta biológica frente al estrés cotidiano y el descanso reparador.
- **Composición Validada:** Extracto estandarizado de raíz de Ashwagandha (*Withania somnifera*).
- **Modo de Uso:** 1 porción diaria preferentemente hacia la tarde/noche en bebidas tibias.
- **Precauciones:** No administrar en embarazo ni lactancia. Consultar al profesional médico en patologías tiroideas o uso concurrente de sedantes e inmunosupresores.
- **Estado:** `PUBLICADO`

#### 4. Longevity Glow
- **Categoría / Familia:** LONGEVIDAD & SALUD BIOLÓGICA
- **Presentación:** 100 g polvo
- **Descripción Funcional:** Sinergia de botánicos y polisacáridos orientada al soporte de la vitalidad celular, hidratación de tejidos y modulación antioxidante.
- **Composición Validada:** Astrágalo (*Astragalus membranaceus*, extracto de raíz) + Hongo Tremella (*Tremella fuciformis*, extracto estandarizado).
- **Modo de Uso:** 1 dosis diaria integrada en jugos funcionales, caldos o agua templada.
- **Precauciones:** Suspender su uso 2 semanas antes de cirugías programadas. Precaución en patologías autoinmunes activas por posible efecto inmunomodulador.
- **Estado:** `PUBLICADO`

#### 5. NRF2
- **Categoría / Familia:** MICRONUTRICIÓN AVANZADA / ANTIOXIDANTE
- **Presentación:** 100 g polvo
- **Descripción Funcional:** Mezcla botánica concentrada rica en fitonutrientes y polifenoles orientada a acompañar los sistemas endógenos de defensa celular.
- **Composición Base:** Moringa (120 g/kg), Curcumina (160 g/kg), Resveratrol (100 g/kg), Matcha (150 g/kg), Psyllium husk (200 g/kg).
- **Modo de Uso:** Disolver en agua o batidos vegetales junto a las primeras comidas.
- **Precauciones:** La curcumina y el resveratrol pueden interactuar con terapias anticoagulantes. No recomendado en obstrucciones biliares o patologías digestivas obstructivas.
- **Estado:** `VALIDAR` *(Nota: completado de masa portante en revisión)*

#### 6. Triple Polifenol
- **Categoría / Familia:** LONGEVIDAD / FITOQUÍMICOS
- **Presentación:** 100 g polvo
- **Descripción Funcional:** Complejo fitoquímico concentrado diseñado para proveer diversidad antioxidante celular y protección frente al estrés oxidativo.
- **Composición Base:** Complejo concentrado de polifenoles vegetales (extractos botánicos seleccionados de alta pureza).
- **Modo de Uso:** 1 medida diaria incorporada en bebidas o preparaciones funcionales.
- **Precauciones:** Respetar la dosificación sugerida. En caso de patologías hepáticas preexistentes o tratamientos oncológicos, su consumo debe ser supervisado por el equipo médico tratante.
- **Estado:** `PUBLICADO`

---

## 4. Estructura del Catálogo General Resumido

Para los más de 25 productos restantes del vademécum (Línea Original, Tibetan Power, Extractos Líquidos y Hongos Simples), la vista `/pro/vademecum` mostrará tarjetas compactas con:
1. **Nombre del Producto + Badge de Categoría.**
2. **Presentación comercial (ej. Gotero 30 ml / Pote 100 g).**
3. **Descripción conceptual resumida (1 a 2 líneas).**
4. **Badge de Estado de Validación (`Publicado`, `En Validación` o `Borrador`).**
5. **Botón de Acción:** *"Solicitar Ficha Técnica Completa"* -> Dispara WhatsApp con mensaje: `Hola, deseo solicitar la ficha técnica y composición oficial del producto <NOMBRE>`.

---

## 5. Pantalla de Contacto y Canales (`/app/contacto`)

Grilla vertical con 4 botones de acción inmediata optimizados para el uso móvil con una sola mano:
- **Canal 1 - Derivación Profesional (WhatsApp):** Consulta científica, fichas técnicas y vademécum.
- **Canal 2 - Productos y Asesoramiento (WhatsApp):** Disponibilidad, uso general y presentaciones.
- **Canal 3 - Comunidad e Instagram:** Redirección directa al perfil oficial `@vivaconsciente`.
- **Canal 4 - Eventos y Alianzas (Email / Formulario):** Participación institucional, congresos e investigaciones.