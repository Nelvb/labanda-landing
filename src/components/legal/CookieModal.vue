<!--
 * CookieModal.vue
 * 
 * Modal de configuración avanzada de cookies — LABANDA Industrie Services
 * Cumple RGPD. Permite aceptar o rechazar cookies analíticas y funcionales.
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 -->

<script setup lang="ts">
import { useCookieConsent } from '@/hooks/useCookieConsent'

const { showModal, preferences, updatePreference, saveModalPreferences, closeModal, acceptAll } =
  useCookieConsent()

const handleBackdropClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) closeModal()
}
</script>

<template>
  <div
    v-if="showModal"
    class="fixed inset-0 z-[10000] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
    @click="handleBackdropClick"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-[fadeIn_0.3s_ease-out]"
    >
      <!-- Header -->
      <div class="bg-[#003366] text-white p-6 flex items-center justify-between">
        <h2 class="text-lg font-semibold">Configuración de Cookies</h2>
        <button
          @click="closeModal"
          class="text-white/80 hover:text-white text-xl font-bold leading-none"
        >
          ×
        </button>
      </div>

      <!-- Contenido -->
      <div class="p-6 space-y-5 overflow-y-auto max-h-[60vh] text-gray-700">
        <p class="text-sm">
          Usamos cookies para mejorar tu experiencia de navegación y analizar el uso de nuestro
          sitio. Puedes personalizar tus preferencias a continuación.
        </p>

        <!-- Necesarias -->
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 class="font-semibold text-[#003366]">Cookies necesarias</h3>
            <p class="text-xs text-gray-600">
              Son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
            </p>
          </div>
          <div class="px-4 py-3 text-sm text-gray-700">
            Permiten funciones básicas como la navegación y el acceso seguro a las áreas protegidas.
          </div>
        </div>

        <!-- Analíticas -->
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 class="font-semibold text-[#003366]">Cookies analíticas</h3>
            <p class="text-xs text-gray-600">
              Nos ayudan a comprender cómo los visitantes usan nuestro sitio.
            </p>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <p class="text-sm">Google Analytics (uso anónimo)</p>
            <input
              type="checkbox"
              :checked="preferences.analytics"
              @change="updatePreference('analytics', !preferences.analytics)"
              class="h-5 w-5 text-[#FF6B35] border-gray-300 focus:ring-[#FF6B35] rounded cursor-pointer"
            />
          </div>
        </div>

        <!-- Funcionales -->
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h3 class="font-semibold text-[#003366]">Cookies funcionales</h3>
            <p class="text-xs text-gray-600">
              Mejoran la funcionalidad y personalización del sitio.
            </p>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <p class="text-sm">Preferencias de idioma o diseño</p>
            <input
              type="checkbox"
              :checked="preferences.functional"
              @change="updatePreference('functional', !preferences.functional)"
              class="h-5 w-5 text-[#FF6B35] border-gray-300 focus:ring-[#FF6B35] rounded cursor-pointer"
            />
          </div>
        </div>

        <!-- Enlaces -->
        <div class="bg-gray-50 rounded-lg p-4 text-sm">
          <p class="mb-2 text-[#003366] font-medium">Más información:</p>
          <ul class="space-y-1">
            <li>
              <a
                href="/legal/politica-privacidad"
                target="_blank"
                class="text-[#003366] hover:text-[#FF6B35] underline transition-colors"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="/legal/cookies"
                target="_blank"
                class="text-[#003366] hover:text-[#FF6B35] underline transition-colors"
              >
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="border-t border-gray-200 bg-gray-50 p-5 flex flex-col sm:flex-row gap-3 justify-end"
      >
        <button
          @click="closeModal"
          class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Cancelar
        </button>

        <button
          @click="acceptAll"
          class="px-4 py-2 rounded-md bg-[#003366] text-white hover:bg-[#FF6B35] transition-colors"
        >
          Aceptar todas
        </button>

        <button
          @click="saveModalPreferences"
          class="px-4 py-2 rounded-md border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-colors"
        >
          Guardar preferencias
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
