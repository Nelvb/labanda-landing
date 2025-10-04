# LABANDA Industrie Services — Landing Corporativa

## Introducción

Landing corporativa bilingüe (FR/EN) para LABANDA Industrie Services, empresa especializada en arquitectura, urbanismo y construcción en África Central. El proyecto está diseñado para presentar servicios profesionales a gobiernos, instituciones y fondos de inversión, con un enfoque en credibilidad internacional y escalabilidad.

## Objetivo

Desarrollar una presencia digital profesional que refleje la experiencia de 30 años de LABANDA en el sector, facilitando la captación de clientes institucionales y la presentación de proyectos emblemáticos. La plataforma debe ser responsive, segura y optimizada para conversión.

## Stack Tecnológico

- **Frontend:** Vue 3 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Internacionalización:** vue-i18n
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
│   │   ├── sections/
│   │   ├── ui/
│   │   ├── HelloWorld.vue
│   │   ├── TheWelcome.vue
│   │   └── WelcomeItem.vue
│   ├── composables/
│   ├── data/
│   ├── locales/
│   │   ├── en.json
│   │   └── fr.json
│   ├── plugins/
│   │   └── i18n.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   ├── App.vue
│   ├── env.d.ts
│   └── main.ts
├── env.d.ts
├── eslint.config.ts
├── index.html
├── package.json
├── postcss.config.js
├── PROJECT_RULES.md
├── TECH_DOC.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

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

## Estándares y Reglas Clave

### Arquitectura
- Separación clara: componentes UI, composables (lógica), data (JSON), utils, types
- Componentes reutilizables y modulares
- Lógica compleja delegada a composables
- Estructura preparada para escalar

### Código
- TypeScript estricto (no `any` salvo justificación explícita)
- Nombres claros, funciones pequeñas, side-effects controlados
- Gestión de errores y estados vacíos
- Accesibilidad (roles ARIA, tab order)
- Headers obligatorios en todos los archivos

### Internacionalización
- Francés (default) + Inglés (obligatorios)
- Archivos de traducción en `src/locales/`
- Datos estáticos en `src/data/*.json`

### Responsive y UI
- Responsive profesional en desktop, tablet, móvil
- Tailwind CSS con paleta corporativa LABANDA
- Consistencia visual

## Roadmap de Desarrollo

1. **Setup inicial** - Vue, Vite, Tailwind, i18n, Vercel
2. **Componentes base** - Header, Footer, UI
3. **Hero y About** - Secciones principales
4. **Services y Projects** - Catálogo de servicios y proyectos
5. **Credentials, FAQ, Blog** - Contenido institucional
6. **Contact** - Formulario con Formspree
7. **Responsive polish** - Optimización móvil
8. **i18n completo** - Traducciones FR/EN
9. **SEO y metadatos** - Optimización para buscadores
10. **Testing y QA** - Validación funcional
11. **Deployment final** - Producción en Vercel
12. **Documentación** - Manual de usuario y guía técnica

## Deployment

### Vercel
- Configuración automática desde repositorio Git
- Build command: `npm run build`
- Output directory: `dist`
- Variables de entorno para Formspree

### Optimizaciones
- HTTPS automático
- Headers de seguridad
- Lazy-loading de imágenes
- Code-splitting automático
- Performance > 90 Lighthouse

## Contacto

**Desarrollador:** Nelson Valero  
**Cliente:** LABANDA Industrie Services  
**Stack:** Vue 3, TypeScript, Tailwind CSS  
**Deployment:** Vercel  
**Fecha:** Octubre 2025

---

*Documentación técnica completa disponible en `TECH_DOC.md` y reglas de desarrollo en `PROJECT_RULES.md`.*