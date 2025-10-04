<script setup lang="ts">
/**
 * App.vue — Componente raíz
 * Contexto: Layout principal con Header + Hero + Stats
 * @author Nelson Valero
 * @since v1.0.0
 */
import Header from './components/layout/Header.vue'
import Hero from './components/sections/Hero.vue'
import Stats from './components/sections/Stats.vue'
import About from './components/sections/About.vue'

</script>

<template>
  <div class="font-sans antialiased">
    <Header />
    <Hero />
    <Stats />
    <About />

    <!-- Placeholder para secciones futuras -->
    <section id="apropos" class="min-h-screen bg-white flex items-center justify-center">
      <h2 class="text-4xl font-bold text-[#003366]">À Propos (próxima sección)</h2>
    </section>
  </div>
</template>