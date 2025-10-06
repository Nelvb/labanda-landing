<!--
 * PrivacyPage.vue
 * 
 * Página base que carga la versión correcta de la Política de Privacidad según el idioma.
 * Arquitectura profesional: cada idioma tiene su propio componente (es, en, fr).
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 * Usa RouterLink para navegación interna (SPA).
 * @author Nelson Valero
 * @since v1.0.0
 -->

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PrivacyContentEs from './PrivacyContent.es.vue'
import PrivacyContentEn from './PrivacyContent.en.vue'
import PrivacyContentFr from './PrivacyContent.fr.vue'

const { locale } = useI18n()

const components = {
  es: PrivacyContentEs,
  en: PrivacyContentEn,
  fr: PrivacyContentFr,
}

const CurrentPrivacyContent = components[locale.value as keyof typeof components] || PrivacyContentEs
</script>

<template>
  <main class="min-h-screen bg-white text-gray-800">
    <!-- Header -->
    <section class="bg-[#003366] text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-2">{{ $t('legal.titles.privacy') }}</h1>
      <p class="text-blue-100 text-lg">{{ $t('legal.subtitles.privacy') }}</p>
    </section>

    <!-- Contenido dinámico -->
    <section class="max-w-4xl mx-auto py-16 px-6 space-y-10 leading-relaxed">
      <component :is="CurrentPrivacyContent" />
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
