<!--
 * LanguageSwitcher.vue
 *
 * Selector de idioma — LABANDA Industrie Services
 * Compatible con vue-i18n (ES / FR / EN)
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35)
 * Reutilizable en Header y MobileMenu
 *
 * @since v1.1.0
 * @author Nelson Valero
-->

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

/**
 * Cambia el idioma actual y lo guarda en localStorage
 * Compatible con la configuración persistente de i18n.ts
 */
const switchLanguage = (lang: 'es' | 'fr' | 'en') => {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<template>
  <div
    class="flex items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white/10 p-1"
  >
    <button
      v-for="lang in ['es', 'fr', 'en']"
      :key="lang"
      @click="switchLanguage(lang as 'es' | 'fr' | 'en')"
      :class="[
        'px-3 py-1.5 rounded font-semibold text-sm md:text-base transition-all duration-200',
        locale === lang
          ? 'bg-[#FF6B35] text-white shadow-sm'
          : 'text-[#003366] hover:bg-gray-100 hover:text-[#FF6B35]',
      ]"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
button {
  min-width: 48px;
}
</style>
