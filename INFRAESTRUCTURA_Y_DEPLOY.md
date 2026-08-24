---

### `04_INFRAESTRUCTURA_Y_DEPLOY.md`

```markdown
# Infraestructura, Despliegue y QR Maestro - Ecosistema Viva Consciente

Este documento define la infraestructura de hosting, optimización en Edge, gestión de dominios y la generación del código QR Maestro para la Fase 1 (MVP Express).

---

## 1. Infraestructura de Hosting & Edge Delivery

- **Proveedor Cloud:** Vercel (Edge Network Global con nodos Anycast)[cite: 1].
- **Entorno de Ejecución:** Node.js 18.x / Edge Runtime.
- **Protocolo & Seguridad:** HTTPS/SSL nativo forzado (TLS 1.3), certificados automáticos Let's Encrypt / Vercel Managed[cite: 1].
- **Compresión de Red:** Brotli y Gzip habilitados a nivel CDN para minimizar el peso del bundle en smartphones bajo redes móviles saturadas de eventos[cite: 1, 4].
- **Optimización de Imágenes:** Vercel Image Optimization (`next/image`) para servir formatos AVIF/WebP con dimensiones exactas según el viewport del dispositivo[cite: 1, 4].

---

## 2. Configuración de Dominio y URL Maestra

### 2.1. Puerta de Entrada
- **URL Maestra:** A confirmar por la agencia/cliente (ej. `vivaconsciente.org/app` o `vivaconsciente.org/pro`)[cite: 1, 4].
- **Fallback Provisional:** Si hay demoras con los DNS del cliente, se utiliza el dominio de despliegue directo `vivaconsciente.vercel.app` para no frenar la salida en el evento[cite: 1, 4].

### 2.2. Reglas de Redirección (`next.config.js`)
Para evitar enlaces rotos si el usuario ingresa a la raíz o rutas directas:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
      },
      {
        source: '/vademecum',
        destination: '/pro/vademecum',
        permanent: true,
      },
      {
        source: '/profesionales',
        destination: '/pro',
        permanent: true,
      }
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

```

---

## 3. Especificación Técnica del Código QR Maestro (Fase 1)

En esta primera fase se genera y entrega **1 único Código QR Maestro**.

### 3.1. Regla Operativa Fundamental

* **Destino Web Fijo:** El QR Maestro debe apuntar estrictamente a la URL elegida por el cliente (`/app` o `/pro`) y **nunca directamente a un archivo PDF**.


* **Ventaja:** Permite actualizar textos, fichas técnicas o diseño en la web sin tener que reimprimir material físico ni credenciales.


### 3.2. Parámetros de Generación Gráfica

* **URL Destino:** Confirmada por la agencia (`NEXT_PUBLIC_SITE_URL` + `/app` o `/pro`).


* **Formatos de Entrega:** Vectorial SVG (para imprenta/banners) + PNG de alta resolución (mínimo 4000x4000 px).


* **Nivel de Corrección de Error:** Nivel H (High - 30%) o M (Medium - 15%) para asegurar lectura rápida con cámaras de teléfonos de gama media y baja en entornos con poca luz.


* **Margen de Seguridad (Quiet Zone):** 4 módulos limpios alrededor del código.

---

## 4. Pipeline de Despliegue Continuo (CI/CD)

* **Repositorio:** GitHub vinculado a Vercel con despliegues automáticos en la rama `main`.


* **Variables de Entorno (`.env.production`):**
```bash
NEXT_PUBLIC_SITE_URL=[https://vivaconsciente.org](https://vivaconsciente.org)
NEXT_PUBLIC_WHATSAPP_NUMBER=549XXXXXXXXX
NEXT_PUBLIC_INSTAGRAM_URL=[https://instagram.com/vivaconsciente](https://instagram.com/vivaconsciente)
NEXT_PUBLIC_ENVIRONMENT=production
```
* **Checks de Build:**
* `npm run lint` (validación de sintaxis).
* `tsc --noEmit` (validación estricta de TypeScript).
* `npm run build` (compilación SSG estática).



---

## 5. Contingencia para el Día del Evento

* **Conectividad 4G Saturada:** Al utilizar arquitectura modular con datos en JSON estático (~50 KB gzipped), el vademécum y las pantallas se cargan instantáneamente en el primer render, sin depender de llamadas continuas a bases de datos externas.

```
---
```