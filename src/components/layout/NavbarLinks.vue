<!--
 * NavbarLinks.vue
 * 
 * Componente modular para los enlaces principales del header (versión escritorio).
 * Traducción automática según idioma activo (es/fr/en).
 * Diseño coherente con la identidad visual de LABANDA.
 * @since v1.0.0
 * @autor Nelson Valero
-->

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}>()
</script>

<template>
  <div class="hidden lg:flex items-center space-x-8">
    <button
      @click="props.scrollToSection('accueil')"
      :class="[
        'font-semibold text-lg hover:text-[#FF6B35] transition',
        props.isScrolled ? 'text-[#003366]' : 'text-white'
      ]"
    >
      {{ t('nav.home') }}
    </button>

    <button
      @click="props.scrollToSection('apropos')"
      :class="[
        'font-semibold text-lg hover:text-[#FF6B35] transition',
        props.isScrolled ? 'text-[#003366]' : 'text-white'
      ]"
    >
      {{ t('nav.about') }}
    </button>

    <button
      @click="props.scrollToSection('services')"
      :class="[
        'font-semibold text-lg hover:text-[#FF6B35] transition',
        props.isScrolled ? 'text-[#003366]' : 'text-white'
      ]"
    >
      {{ t('nav.services') }}
    </button>

    <button
      @click="props.scrollToSection('projects')"
      :class="[
        'font-semibold text-lg hover:text-[#FF6B35] transition',
        props.isScrolled ? 'text-[#003366]' : 'text-white'
      ]"
    >
      {{ t('nav.projects') }}
    </button>

    <button
      @click="props.scrollToSection('contact')"
      :class="[
        'font-semibold text-lg hover:text-[#FF6B35] transition',
        props.isScrolled ? 'text-[#003366]' : 'text-white'
      ]"
    >
      {{ t('nav.contact') }}
    </button>
  </div>
</template>
