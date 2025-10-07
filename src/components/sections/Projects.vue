<script setup lang="ts">
/**
 * Projects.vue — Sección portfolio de proyectos LABANDA
 * Muestra carousel de proyectos emblemáticos
 * Incluye header con título/subtítulo bilingüe
 * Contexto: Landing corporativa LABANDA Industrie Services
 * @author Nelson Valero
 * @since v1.0.0
 */

defineOptions({
  name: 'CompanyProjects',
})

import { useI18n } from 'vue-i18n'
import ProjectCarousel from './carousel/ProjectCarousel.vue'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="w-full bg-white py-12 md:py-16">
    <!-- Section Header -->
    <div class="max-w-7xl mx-auto px-6 mb-12 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
        {{ t('projects.title') }}
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        {{ t('projects.subtitle') }}
      </p>
    </div>

    <!-- Projects Carousel -->
    <ProjectCarousel />
  </section>
</template>

<style scoped>
/* Smooth scroll behavior */
section {
  scroll-margin-top: 80px;
}
</style>
