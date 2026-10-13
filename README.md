# 🏋️‍♂️ IRONFORGE GYM — Landing Page Comercial e Interactiva

Una landing page premium, moderna y de alto rendimiento para **IRONFORGE GYM**, desarrollada con arquitectura frontend pura basada en **HTML5, CSS3, JavaScript modular y Bootstrap 5**.

![Estilo Visual](https://img.shields.io/badge/Diseño-Dark%20%26%20Electric%20Lime-brightgreen)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap-v5.3.3-purple)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Modular%20ES6-yellow)

---

## 🎨 Identidad Visual y Paleta de Colores

- **Principal:** `#101010` (Negro carbón profundo)
- **Superficies:** `#181818` / `#1E1E1E` (Gris oscuro texturizado)
- **Acento (Brand):** `#B6FF3B` (Electric Lime / Verde neón atlético)
- **Texto Primario:** `#FFFFFF` (Blanco nítido)
- **Texto Secundario:** `#929292` (Gris suave neutro)
- **Tipografías:**
  - Títulos: `Oswald` (Google Fonts, contundente y agresivo)
  - Textos de lectura: `Plus Jakarta Sans` (Google Fonts, moderno y limpio)

---

## 🚀 Estructura del Proyecto

```text
IRONFORGE GYM/
│
├── index.html                   # Documento principal con estructura semántica y SEO
│
├── assets/
│   ├── css/
│   │   ├── styles.css           # Sistema de diseño, variables, componentes y efectos
│   │   └── responsive.css       # Adaptaciones y breakpoints responsive
│   │
│   ├── js/
│   │   ├── data.js              # Fuente central de datos (clases, coaches, horarios, planes)
│   │   ├── classes.js           # Renderizado dinámico y filtros por categoría de clases
│   │   ├── schedule.js          # Calendario semanal interactivo (Lunes a Sábado) y filtros
│   │   ├── pricing.js           # Selector mensual/anual con cálculo y enlace a formulario
│   │   ├── registration.js      # Validaciones, LocalStorage y despacho a WhatsApp
│   │   └── main.js              # Navbar scroll, contadores animados, testimonios, FAQ, etc.
│   │
│   └── images/                  # Directorio para recursos multimedia locales o personalizados
│
└── README.md                    # Documentación del proyecto
```

---

## ✨ Características y Funcionalidades Interactivas

1. **Hero Principal con Alto Impacto:**
   - Imagen de fondo atlética de alta calidad con gradiente atmosférico.
   - Tipografía deportiva a gran escala con insignias con pulsación de luz neón.
   - Acceso directo a inscripción y membresías.

2. **Estadísticas Dinámicas Animadas:**
   - Contadores numéricos que se activan automáticamente mediante `IntersectionObserver` (+1200 socios, +15 coaches, etc.).

3. **Sección Nosotros y Beneficios:**
   - 4 tarjetas de valor diferencial (Equipamiento olímpico, coaches certificados, horarios amplios, comunidad).
   - Zona VIP Recovery y acreditación de mediciones corporales.

4. **Clases y Servicios con Filtrado en Tiempo Real:**
   - Filtrado dinámico sin recargar la página por: Todas, Fuerza & Musculación, Funcional / WOD, Cardio, HIIT.
   - Tarjetas con métricas de duración, intensidad, calorías y quema metabólica.

5. **Calendario de Horarios Semanal Interactivo:**
   - Pestañas de Lunes a Sábado con horarios, coach asignado, sala y disciplina.
   - Selector reactivo para filtrar por tipo de entrenamiento.

6. **Planes de Membresía con Switch Mensual / Anual:**
   - Cálculo dinámico de precio con ahorro del 20% en modalidad anual.
   - Botón *"Elegir Plan"* que autocompleta el formulario de inscripción, enfoca el campo con animación y desplaza la vista suavemente.

7. **Testimonios en Carrusel:**
   - Carrusel automático de testimonios reales de socios con calificaciones de 5 estrellas.

8. **Preguntas Frecuentes (FAQ):**
   - Acordeón interactivo para resolver dudas comunes (matrícula, congelar plan, primeros días, métodos de pago).

9. **Formulario de Inscripción y Demostración Frontend:**
   - Validación completa en tiempo real de campos (nombre, correo, teléfono y plan).
   - Registro de pruebas en `localStorage` (`ironforge_registrations`).
   - Modal de confirmación estilizado con resumen de datos.
   - Enlace automático con mensaje prellenado directo a **WhatsApp** con los datos del usuario.

10. **Elementos Flotantes & Usabilidad:**
    - Botón flotante directo de WhatsApp con animación hover.
    - Botón *"Volver arriba"* que aparece tras desplazar la página hacia abajo.
    - Navbar con efecto de vidrio (*backdrop-filter: blur*), contracción al hacer scroll y subrayado activo de la sección visible.

---

## 💻 Cómo Ejecutar el Proyecto Localmente

1. Puedes abrir `index.html` directamente con cualquier navegador moderno (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).
2. O ejecutar un servidor de desarrollo estático local:
   ```bash
   # Con Python 3
   python -m http.server 3000

   # O con Node.js / npx (Live Server)
   npx serve .
   ```
3. Visita `http://localhost:3000` en tu navegador.

---

## 📱 Compatibilidad Móvil y Responsive

Diseñado bajo la filosofía *Mobile First*, 100% responsivo en smartphones (320px+), tablets (iPad, Galaxy Tab) y monitores de alta resolución (Full HD, 2K, 4K).
