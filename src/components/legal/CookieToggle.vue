<!--
 * CookieToggle.vue
 * 
 * Botón flotante para reabrir el panel de configuración de cookies (RGPD).
 * Visible siempre tras aceptar o cerrar el banner inicial.
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 * Requiere el hook `useCookieConsent.ts`.
 -->

<script setup lang="ts">
import { Cookie } from 'lucide-vue-next'
import { useCookieConsent } from '@/hooks/useCookieConsent'

const { openModal, isVisible } = useCookieConsent()
</script>

<template>
  <!-- Botón visible solo cuando el banner NO está activo -->
  <transition name="fade">
    <button
      v-if="!isVisible"
      @click="openModal"
      class="fixed bottom-5 right-5 z-[9999] bg-[#003366] hover:bg-[#FF6B35] text-white p-3 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 flex items-center gap-2"
      :aria-label="$t('cookies.actions.configure')"
    >
      <Cookie class="w-5 h-5 flex-shrink-0" />
      <!-- Mostrar texto solo en pantallas grandes -->
      <span class="hidden lg:inline text-sm font-medium whitespace-nowrap">
        {{ $t('cookies.actions.configure') }}
      </span>
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
