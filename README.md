# LABANDA Industrie Services — Landing Corporativa

## Introducción

Landing corporativa trilingüe (FR/EN/ES) para LABANDA Industrie Services, empresa especializada en arquitectura, urbanismo y construcción en África Central. El proyecto está diseñado para presentar servicios profesionales a gobiernos, instituciones y fondos de inversión, con un enfoque en credibilidad internacional y escalabilidad.

## Objetivo

Desarrollar una presencia digital profesional que refleje la experiencia de 30 años de LABANDA en el sector, facilitando la captación de clientes institucionales y la presentación de proyectos emblemáticos. La plataforma debe ser responsive, segura y optimizada para conversión.

## Stack Tecnológico

- **Frontend:** Vue 3 + TypeScript + Vite
- **Styling:** Tailwind CSS + PostCSS
- **Internacionalización:** vue-i18n (FR/EN/ES)
- **Carousel:** Swiper.js
- **Iconografía:** Lucide Vue Next
- **Deployment:** Vercel
- **Formularios:** Formspree
- **Node.js:** ^20.19.0 || >=22.12.0

## Arquitectura y Estructura del Proyecto

```
lavanda-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── base.css
│   │   ├── images/
│   │   ├── logo/
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components/
│   │   ├── icons/
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   └── IconTooling.vue
│   │   ├── layout/
│   │   │   ├── AppFooter.vue
│   │   │   ├── AppHeader.vue
│   │   │   ├── LanguageSwitcher.vue
│   │   │   ├── MobileMenu.vue
│   │   │   └── NavbarLinks.vue
│   │   ├── legal/
│   │   │   ├── CookieBanner.vue
│   │   │   ├── CookieModal.vue
│   │   │   ├── CookieToggle.vue
│   │   │   └── PrivacyCheckbox.vue
│   │   ├── sections/
│   │   │   ├── About.vue
│   │   │   ├── carousel/
│   │   │   │   └── ProjectCarousel.vue
│   │   │   ├── Contact.vue
│   │   │   ├── Hero.vue
│   │   │   ├── Projects.vue
│   │   │   ├── Services.vue
│   │   │   └── Stats.vue
│   │   ├── ui/
│   │   │   └── Button.vue
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   └── WelcomeItem.vue
│   ├── composables/
│   ├── data/
│   │   └── projects.json
│   ├── hooks/
│   │   └── useCookieConsent.ts
│   ├── locales/
│   │   ├── en.json
│   │   ├── es.json
│   │   └── fr.json
│   ├── plugins/
│   │   └── i18n.ts
│   ├── router/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   ├── views/
│   │   ├── HomePage.vue
│   │   └── legal/
│   │       ├── CookiesPage.vue
│   │       ├── LegalNotice.vue
│   │       └── PrivacyPage.vue
│   ├── App.vue
│   ├── env.d.ts
│   └── main.ts
├── env.d.ts
├── eslint.config.ts
├── index.html
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.js
├── PROJECT_RULES.md
├── TECH_DOC.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Características Principales

### 🌐 Internacionalización
- **3 idiomas:** Francés (default), Inglés, Español
- **Sistema completo:** Navegación, contenido, formularios
- **Selector de idioma:** Componente integrado en header

### 🎨 Diseño y UX
- **Responsive completo:** Desktop, tablet, móvil
- **Paleta corporativa:** Azul institucional (#003366) + Naranja (#FF6B35)
- **Tipografía:** Jerarquía clara y legible
- **Accesibilidad:** ARIA roles, navegación por teclado

### 🏗️ Arquitectura Técnica
- **Vue 3 Composition API:** Código moderno y reactivo
- **TypeScript estricto:** Tipado completo sin `any`
- **Componentes modulares:** Reutilizables y mantenibles
- **Routing:** Vue Router con lazy loading
- **Estado global:** Pinia para gestión de estado

### 📱 Funcionalidades
- **Carousel de proyectos:** Swiper.js con navegación táctil
- **Formulario de contacto:** Integración con Formspree
- **Cookies y privacidad:** Banner y gestión GDPR
- **SEO optimizado:** Meta tags y estructura semántica

## Guía de Desarrollo

### Prerrequisitos
- Node.js ^20.19.0 || >=22.12.0
- npm o pnpm

### Instalación
```bash
npm install
```

### Comandos Disponibles
```bash
# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Formateo de código
npm run format
```

## Configuración PostCSS

El proyecto utiliza PostCSS con los siguientes plugins:
- **postcss-nesting:** Para CSS anidado
- **tailwindcss:** Framework CSS utility-first
- **autoprefixer:** Prefijos de navegadores

**Nota:** Los errores de CSS nesting de Swiper.js son conocidos pero no afectan la funcionalidad en producción.

## Estándares y Reglas Clave

### Arquitectura
- **Separación clara:** componentes UI, composables, data, utils, types
- **Componentes reutilizables:** Modulares y mantenibles
- **Lógica delegada:** Composables para lógica compleja
- **Estructura escalable:** Preparada para crecimiento

### Código
- **TypeScript estricto:** Sin `any` salvo justificación explícita
- **Nombres descriptivos:** Funciones pequeñas y claras
- **Gestión de errores:** Estados vacíos y fallbacks
- **Accesibilidad:** Roles ARIA y navegación por teclado
- **Headers obligatorios:** Documentación en todos los archivos

### Internacionalización
- **3 idiomas:** Francés (default), Inglés, Español
- **Archivos de traducción:** `src/locales/`
- **Datos estáticos:** `src/data/*.json`
- **Consistencia:** Mismas claves en todos los idiomas

## Páginas y Secciones

### Páginas Principales
- **HomePage:** Landing principal con todas las secciones
- **CookiesPage:** Política de cookies
- **PrivacyPage:** Política de privacidad
- **LegalNotice:** Aviso legal

### Secciones del Home
- **Hero:** Presentación principal con CTA
- **About:** Información corporativa
- **Services:** Catálogo de servicios
- **Projects:** Carousel de proyectos emblemáticos
- **Stats:** Estadísticas y logros
- **Contact:** Formulario de contacto

## Deployment

### Vercel
- **Configuración automática:** Desde repositorio Git
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Variables de entorno:** Formspree y configuración

### Optimizaciones
- **HTTPS automático:** Seguridad SSL
- **Headers de seguridad:** CSP y protección
- **Lazy-loading:** Imágenes y componentes
- **Code-splitting:** Carga optimizada
- **Performance:** >90 Lighthouse score

## Solución de Problemas

### CSS Nesting Errors
Los errores de CSS nesting de Swiper.js son conocidos y no afectan la funcionalidad:
- **Causa:** CSS anidado en archivos de Swiper.js
- **Impacto:** Solo warnings en desarrollo
- **Solución:** No requiere acción, funciona en producción

### Formulario de Contacto
- **Integración:** Formspree para envío de emails
- **Validación:** Cliente y servidor
- **Aviso de privacidad:** Incluido debajo del botón de envío

## Contacto

**Desarrollador:** Nelson Valero  
**Cliente:** LABANDA Industrie Services  
**Stack:** Vue 3, TypeScript, Tailwind CSS, Swiper.js  
**Deployment:** Vercel  
**Fecha:** Diciembre 2024

---

*Documentación técnica completa disponible en `TECH_DOC.md` y reglas de desarrollo en `PROJECT_RULES.md`.*