/**
 * Loader.vue — Pantalla de carga profesional con spinner corporativo
 *
 * Contexto:
 *  - Se muestra mientras la aplicación y las imágenes clave terminan de cargarse.
 *  - Bloquea el scroll para evitar movimiento durante la carga.
 *
 * Diseño:
 *  - Fondo azul corporativo (#003366)
 *  - Spinner circular naranja (#FF6B35)
 *  - Sin texto ni logo (enfoque minimalista institucional)
 *
 * Experiencia:
 *  - Transición fade-out suave y más larga (1,3 s total).
 *  - Compatible con Vite, Tailwind y despliegue en Vercel.
 *
 * @author Nelson Valero
 * @since v1.3.0
 */

<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center bg-[#003366] z-[9999] transition-opacity duration-700"
    >
      <!-- SPINNER CORPORATIVO -->
      <div
        class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 sm:border-[6px] border-[#FF6B35] border-t-transparent rounded-full animate-spin drop-shadow-lg"
      ></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'AppLoader' })

const visible = ref(true)

const disableScroll = () => (document.body.style.overflow = 'hidden')
const enableScroll = () => (document.body.style.overflow = '')

/**
 * Espera a que todas las imágenes de la página estén cargadas.
 */
const waitForImages = async () => {
  const images = Array.from(document.images)
  if (images.length === 0) return
  await Promise.allSettled(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) return resolve()
          img.addEventListener('load', () => resolve(), { once: true })
          img.addEventListener('error', () => resolve(), { once: true })
        })
    )
  )
}

onMounted(async () => {
  disableScroll()
  await waitForImages()
  // Aumentamos el tiempo de visibilidad para una transición más fluida
  setTimeout(() => {
    visible.value = false
    enableScroll()
  }, 1300)
})

onUnmounted(enableScroll)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
