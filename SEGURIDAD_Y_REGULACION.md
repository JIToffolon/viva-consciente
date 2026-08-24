# Criterio Editorial, Seguridad y Cumplimiento Regulatorio - Ecosistema Viva Consciente

Este documento establece las directivas regulatorias, los protocolos de no-claims terapéuticos, el tratamiento de advertencias y la gestión de fórmulas en estado de validación para la Fase 1 (MVP Express).

---

## 1. Alcance Editorial y Deslinde de Responsabilidad

- **Límites Técnicos del Frontend:** El equipo de desarrollo frontend es responsable exclusivamente de la maquetación, arquitectura e integración visual[cite: 1]. La veracidad científica, claims nutricionales y encuadre normativo son responsabilidad exclusiva de la marca y de la agencia[cite: 1].
- **Cero Claims Terapéuticos:** En toda la aplicación pública y en el Área PRO queda estrictamente prohibido presentar alimentos, hongos, botánicos o suplementos como curas, tratamientos o sustitutos de diagnóstico o atención médica[cite: 4, 7].
- **Lenguaje Público vs. Área PRO:**
  - **Vistas Públicas (`/app/*`):** Lenguaje accesible enfocado en alimentos funcionales, balance, hábitos saludables y bienestar celular[cite: 4, 5].
  - **Área PRO (`/pro/*`):** Lenguaje técnico, fitoquímico y de soporte biológico dirigido a profesionales de la salud e investigadores[cite: 4, 5].

---

## 2. Protocolo de Visualización de Fórmulas y Estados (Vademécum V2)

Para respetar la regla de integridad de datos, **no se completan composiciones por inferencia o suposición**[cite: 4, 7]. Todo producto en el JSON debe portar uno de los tres estados de publicación[cite: 7]:

### 2.1. Estados Oficiales
1. `PUBLICADO`
   - La composición, presentación y porción están 100% validadas contra rótulo oficial[cite: 4, 7].
   - Despliega acordeones completos y modo de uso sugerido[cite: 4, 7].
2. `VALIDAR` (Publicable con Alerta Técnica)
   - Contiene la estructura básica y descripción funcional, pero mantiene cantidades o especificaciones en proceso de cierre con producción[cite: 4, 7].
   - **Open Mind:** Alerta visible de sumatoria de 1.024 g/kg a corregir antes de declarar porcentajes comerciales[cite: 7].
   - **NRF2:** Alerta de 730 g/kg declarados con 270 g de masa portante en revisión[cite: 7].
   - **Botón CTA:** Reemplaza la dosificación por *"Consultar ficha técnica oficial / Contactar al área profesional"*[cite: 7].
3. `BLOQUEADO` / `BORRADOR`
   - Productos sin composición validada (ej. *Golden Powder, Matcha Powder, extractos líquidos en revisión*)[cite: 4, 7].
   - Se muestran únicamente como tarjetas resumen dentro del catálogo general indicando: *"Composición exacta y especificación técnica pendientes de validación final"*[cite: 4, 7].

---

## 3. Bloque Obligatorio de Advertencias y Precauciones

Toda ficha técnica de producto debe incluir una caja de seguridad visualmente destacada (`bg-amber-50 border-l-4 border-amber-500`) con el texto base estandarizado[cite: 4, 7]:

> **Precauciones Generales:** 
> Uso alimentario / funcional conforme al rótulo vigente. Respetar la porción sugerida y la tolerancia individual. En caso de embarazo, lactancia, menores de edad, cirugía programada, patologías preexistentes o tratamientos farmacológicos activos, derivar la consulta al profesional médico tratante[cite: 4, 7].

### 3.1. Interacciones Críticas a Destacar por Ingrediente
- **Anticoagulantes / Antiagregantes plaquetarios:** Advertencia mandatoria en fichas con *Ginkgo biloba*, *Curcumina/NRF2*, *Resveratrol* y *Nattokinase*[cite: 4, 7].
- **Estimulantes del SNC:** Advertencia sobre cafeína o guaraná (*Open Mind*) en personas con sensibilidad o hipertensión[cite: 4, 7].
- **Inmunomoduladores:** Advertencia en *Ashwagandha* y polisacáridos concentrados en personas bajo tratamiento inmunosupresor[cite: 4, 7].

---

## 4. Normalización de Nomenclatura Oficial

Para evitar confusiones en el catálogo y asegurar coherencia institucional:
- El producto de la línea original debe denominarse de manera consistente como **`Tibetan Power`**[cite: 5, 7].
- La unidad de alimentos funcionales debe registrarse visualmente como **`Viva Superalimento®`**[cite: 1, 7].
- Las combinaciones de productos en el Área PRO deben presentarse como **"Combinaciones Nutricionales de Referencia"** y nunca bajo el término prescriptivo de "Protocolos Médicos"[cite: 5].

---

## 5. Sanitización de Canales de Contacto (WhatsApp & Redes)

- **Sanitización de Parámetros URL:** Los enlaces salientes a WhatsApp deben codificar los caracteres mediante `encodeURIComponent()` para evitar fallos de renderizado en navegadores móviles nativos.
- **Mensaje Predeterminado Seguro:**
  ```typescript
  const generateWhatsAppUrl = (productName?: string) => {
    const baseNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const text = productName 
      ? `Hola, deseo solicitar la ficha técnica y composición oficial de ${productName}`
      : "Hola, deseo contactar con el área técnica de Viva Consciente";
    return `[https://wa.me/$](https://wa.me/$){baseNumber}?text=${encodeURIComponent(text)}`;
  };