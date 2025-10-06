<!--
 * App.vue — Shell global con Header condicional.
 * Oculta la navbar en páginas legales (cookies, privacy, legal-notice).
 * @since v1.0.2
-->

<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CookieBanner from '@/components/legal/CookieBanner.vue'
import CookieModal from '@/components/legal/CookieModal.vue'
import CookieToggle from '@/components/legal/CookieToggle.vue'

const route = useRoute()

// Rutas donde NO queremos mostrar el Header
const hideHeaderRoutes = ['/legal/cookies', '/legal/privacy', '/legal/legal-notice']
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white text-gray-800">
    <!-- Header solo si no es página legal -->
    <AppHeader v-if="!hideHeaderRoutes.includes(route.path)" />

    <!-- Contenido dinámico -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- Footer global -->
    <AppFooter />

    <!-- Banner y Modal de Cookies (siempre presentes) -->
    <CookieBanner />
    <CookieModal />
    <CookieToggle />
  </div>
</template>
