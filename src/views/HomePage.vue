<!--
 * HomePage.vue — Página principal corporativa LABANDA Industrie Services
 * Estructura completa con secciones modulares e i18n
 * Se incluye FAQ.vue (accordion trilingüe) antes del bloque de contacto
 * @author Nelson Valero
 * @since v1.0.0
 -->

<script setup lang="ts">
import Hero from '@/components/sections/Hero.vue'
import Stats from '@/components/sections/Stats.vue'
import About from '@/components/sections/About.vue'
import Services from '@/components/sections/Services.vue'
import Projects from '@/components/sections/Projects.vue'
import { FAQ } from '@/components/sections/faq'
import Contact from '@/components/sections/Contact.vue'
</script>

<template>
  <main>
    <!-- Hero principal -->
    <Hero />

    <!-- Estadísticas corporativas -->
    <Stats />

    <!-- Acerca de la empresa -->
    <About />

    <!-- Servicios principales -->
    <Services />

    <!-- Proyectos destacados -->
    <Projects />

    <!-- Preguntas frecuentes -->
    <FAQ />

    <!-- Contacto -->
    <Contact />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
}
</style>
