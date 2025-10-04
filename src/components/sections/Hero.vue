<script setup lang="ts">
/**
 * Hero.vue — Sección Hero con parallax y gradiente overlay
 * Contexto: Landing principal con imagen Plan Urbanístico Evinayong
 * Notas: Parallax effect en background-attachment, gradiente navy → transparente
 * @author Nelson Valero
 * @since v1.0.0
 */
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
    style="background-image: url('https://res.cloudinary.com/dy1pkrd52/image/upload/v1759531027/plan_urbanistico_evinayong_vxwnkj.webp')"
  >
    <!-- Overlay con gradiente -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#003366]/90 via-[#003366]/60 to-[#003366]/20"
    ></div>

    <!-- Contenido -->
    <div class="container mx-auto px-6 relative z-10 text-white">
      <div class="max-w-3xl">
        <!-- Título principal -->
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          {{ t('hero.title') }}
        </h1>

        <!-- Subtítulo -->
        <p class="text-xl lg:text-2xl mb-8 text-white font-semibold leading-relaxed drop-shadow-lg">
          {{ t('hero.subtitle') }}
        </p>

        <!-- CTAs con componente Button -->
        <div class="flex flex-wrap gap-4">
          <Button variant="primary" @click="scrollToSection('projets')">
            {{ t('hero.cta_primary') }}
          </Button>
          <Button variant="outline" @click="scrollToSection('contact')">
            {{ t('hero.cta_secondary') }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>