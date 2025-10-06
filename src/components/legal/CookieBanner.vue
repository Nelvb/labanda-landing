<!--
 * CookieBanner.vue
 * 
 * Banner principal de consentimiento de cookies para LABANDA Industrie Services.
 * Diseño elegante y sobrio en tonos azul corporativo (#003366) y naranja (#FF6B35).
 * Cumple con RGPD: opciones "Aceptar todo", "Solo necesarias" y "Configurar".
 * Requiere el hook `useCookieConsent.ts` para la lógica.
 -->

<script setup lang="ts">
import { Cookie, Settings } from 'lucide-vue-next'
import { useCookieConsent } from '@/hooks/useCookieConsent'
import Button from '@/components/ui/Button.vue'

const { isVisible, acceptAll, acceptNecessary, openModal } = useCookieConsent()
</script>

<template>
  <transition name="slide-up">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-50 bg-[#003366] text-white shadow-2xl border-t-4 border-[#FF6B35]"
    >
      <div
        class="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <!-- Texto e icono -->
        <div class="flex items-start md:items-center gap-3">
          <div class="bg-white/10 p-2 rounded-full flex-shrink-0">
            <Cookie class="w-5 h-5 text-[#FF6B35]" />
          </div>
          <div>
            <p class="font-semibold text-sm md:text-base">Configuración de Cookies</p>
            <p class="text-sm text-gray-200 leading-snug">
              Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio.
              <a href="/legal/cookies" class="text-[#FF6B35] hover:underline ml-1">
                Más información </a
              >.
            </p>
          </div>
        </div>

        <!-- Botones -->
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            class="border-white/30 text-white hover:bg-white hover:text-[#003366] transition-all"
            @click="openModal"
          >
            <Settings class="w-4 h-4 mr-2" /> Configurar
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            class="text-gray-200 hover:text-white hover:bg-white/10"
            @click="acceptNecessary"
          >
            Solo necesarias
          </Button>

          <Button
            type="button"
            variant="primary"
            size="sm"
            class="bg-[#FF6B35] hover:bg-white hover:text-[#003366] transition-all"
            @click="acceptAll"
          >
            Aceptar todo
          </Button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-up-enter-active {
  animation: slideUp 0.4s ease-out;
}
.slide-up-leave-active {
  animation: slideDown 0.3s ease-in forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
