<!--
 * ScrollIndicator.vue — Flecha animada fija (scroll-down)
 * Contexto: Indicador global en toda la landing.
 * Desaparece al llegar al final de la página.
 * @author Nelson Valero
 * @since v1.0.0
-->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  const nearBottom = scrollTop + windowHeight >= docHeight - 100
  isVisible.value = !nearBottom
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-x-0 bottom-6 flex justify-center z-40 animate-bounce"
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
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
