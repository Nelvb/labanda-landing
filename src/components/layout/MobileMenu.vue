<!--
 * MobileMenu.vue
 *
 * Menú lateral profesional para LABANDA Industrie Services.
 * Incluye LanguageSwitcher.vue (ES/FR/EN) centrado arriba + enlace FAQ visible.
 * El logo es clicable y lleva al inicio (scroll + cierre del menú).
 * 
 * @since v1.4.1
 * @updated Octubre 2025 - Logo interactivo + coherencia total con Header.
 * @autor Nelson Valero
-->

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { X, Home, Building2, Briefcase, Phone, Info, MessageSquare } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()

const { t } = useI18n()
const menuVisible = ref(false)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') props.onClose()
}

onMounted(() => {
  menuVisible.value = props.isOpen
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  props.onClose()
}
</script>

<template>
  <!-- Overlay -->
  <transition name="fade">
    <div
      v-if="props.isOpen"
      class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      @click="props.onClose"
    />
  </transition>

  <!-- Panel lateral -->
  <transition name="slide">
    <aside
      v-if="props.isOpen"
      class="fixed top-0 right-0 w-full sm:w-[400px] h-full z-50 bg-gradient-to-br from-[#003366] via-[#004C99] to-[#001F3F] text-white shadow-2xl flex flex-col"
    >
      <!-- Header blanco -->
      <div
        class="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 shadow-sm"
      >
        <img
          src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759502179/Logo__1_-removebg-preview_a1jzff.png"
          alt="LABANDA Industrie Services"
          class="h-14 w-auto cursor-pointer transition-transform hover:scale-105"
          @click="scrollToSection('accueil')"
        />
        <button
          @click="props.onClose"
          class="p-2 text-[#003366] hover:text-[#FF6B35] transition-colors"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Selector de idioma (centrado arriba) -->
      <div class="py-6 flex justify-center border-b border-white/10">
        <LanguageSwitcher />
      </div>

      <!-- Enlaces -->
      <nav class="flex-1 overflow-y-auto py-8 px-6 space-y-6">
        <ul class="space-y-4 text-center">
          <li>
            <button
              @click="scrollToSection('accueil')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <Home class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.home') }}
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('apropos')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <Info class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.about') }}
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('services')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <Briefcase class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.services') }}
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('projects')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <Building2 class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.projects') }}
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('faq')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <MessageSquare class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.faq') }}
            </button>
          </li>
          <li>
            <button
              @click="scrollToSection('contact')"
              class="flex items-center justify-center gap-3 text-lg hover:text-[#FF6B35] transition"
            >
              <Phone class="w-5 h-5 text-[#FF6B35]" />
              {{ t('nav.contact') }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Footer -->
      <div class="py-4 border-t border-white/10 text-center text-white/70 text-sm">
        © {{ new Date().getFullYear() }} LABANDA Industrie Services
      </div>
    </aside>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
