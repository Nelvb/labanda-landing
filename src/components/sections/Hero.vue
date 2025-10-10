<script setup lang="ts">
/**
 * Hero.vue — Sección Hero con parallax y gradiente overlay
 * Contexto: Landing principal con imagen Plan Urbanístico Evinayong.
 * Notas: Parallax effect con gradiente navy → transparente.
 * Botones en fila en tablet/desktop, columna solo en móvil.
 * @author Nelson Valero
 * @since v1.2.0
 */

defineOptions({
  name: 'HomeHero',
})

import { useI18n } from 'vue-i18n'
import Button from '@/components/ui/Button.vue'

const { t } = useI18n()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="accueil"
    class="relative min-h-screen flex items-center bg-cover bg-center bg-fixed"
    style="
      background-image: url('https://res.cloudinary.com/dy1pkrd52/image/upload/v1759531027/plan_urbanistico_evinayong_vxwnkj.webp');
    "
  >
    <!-- Overlay con gradiente -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#003366]/90 via-[#003366]/60 to-[#003366]/20"
    ></div>

    <!-- Contenido -->
    <div
      class="container mx-auto px-6 relative z-10 text-white flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left"
    >
      <div class="max-w-3xl">
        <!-- Título principal -->
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          {{ t('hero.title') }}
        </h1>

        <!-- Subtítulo -->
        <p
          class="text-lg sm:text-xl lg:text-2xl mb-8 text-white font-semibold leading-relaxed drop-shadow-lg"
        >
          {{ t('hero.subtitle') }}
        </p>

        <!-- CTAs con componente Button -->
        <div
          class="flex flex-col gap-4 justify-center items-center sm:flex-row sm:justify-center md:justify-center lg:justify-start"
        >
          <Button variant="primary" @click="scrollToSection('projects')" class="w-full sm:w-auto">
            {{ t('hero.cta_primary') }}
          </Button>

          <Button variant="outline" @click="scrollToSection('contact')" class="w-full sm:w-auto">
            {{ t('hero.cta_secondary') }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Indicador scroll (centrado y con color corporativo) -->
<div
  class="absolute inset-x-0 bottom-6 flex justify-center animate-bounce"
>
  <svg
    class="w-7 h-7 text-[#FF6B35]"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19 14l-7 7-7-7M12 21V3"
    />
  </svg>
</div>

  </section>
</template>
<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
