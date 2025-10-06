<!--
 * CookiesPage.vue
 *
 * Página base multilenguaje para Política de Cookies.
 * Carga dinámicamente el contenido según el idioma actual.
 * Cumple RGPD y Directiva ePrivacy.
 * Paleta corporativa: azul oscuro (#003366) y naranja (#FF6B35).
 * 
 * @author Nelson Valero
 * @since v1.0.0
-->

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CookiesContentEs from './CookiesContent.es.vue'
import CookiesContentEn from './CookiesContent.en.vue'
import CookiesContentFr from './CookiesContent.fr.vue'

const { locale } = useI18n()

// Mapa de idiomas disponibles
const contents = {
  es: CookiesContentEs,
  en: CookiesContentEn,
  fr: CookiesContentFr,
}

// Fallback a español si el idioma no está definido
const CurrentContent = computed(() => contents[locale.value as keyof typeof contents] || CookiesContentEs)
</script>

<template>
  <main class="min-h-screen bg-white text-gray-800">
    <!-- Encabezado internacionalizado -->
    <section class="bg-[#003366] text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-2">{{ $t('legal.titles.cookies') }}</h1>
      <p class="text-blue-100 text-lg">{{ $t('legal.subtitles.cookies') }}</p>
    </section>

    <!-- Contenido legal dinámico -->
    <section class="max-w-4xl mx-auto py-16 px-6">
      <component :is="CurrentContent" />
    </section>

    <!-- Botón de regreso -->
    <section class="max-w-4xl mx-auto pb-16 px-6 text-center">
      <RouterLink 
        to="/" 
        class="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E55A2B] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ $t('legal.buttons.back_home') }}
      </RouterLink>
    </section>
  </main>
</template>
