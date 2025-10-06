<!--
 * Header.vue
 * 
 * Navbar sticky profesional con transiciones, i18n (es/fr/en),
 * menú lateral móvil y estructura modular.
 * Se apoya en NavbarLinks.vue y MobileMenu.vue.
 * @since v1.2.0
 * @updated Octubre 2025 - Logo con scroll al inicio.
 * @autor Nelson Valero
-->

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavbarLinks from './NavbarLinks.vue'
import MobileMenu from './MobileMenu.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

defineOptions({ name: 'AppHeader' })

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const scrollToSection = (sectionId: string) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  else window.scrollTo({ top: 0, behavior: 'smooth' }) // fallback si no existe la sección
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
      <!-- LOGO (clickable) -->
      <img
        src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759502179/Logo__1_-removebg-preview_a1jzff.png"
        alt="LABANDA Industrie Services"
        class="h-16 sm:h-20 lg:h-22 w-auto transition-all duration-300 cursor-pointer"
        :class="isScrolled ? '' : 'brightness-0 invert'"
        @click="scrollToSection('accueil')"
      />

      <!-- NAV LINKS (escritorio) -->
      <NavbarLinks :isScrolled="isScrolled" :scrollToSection="scrollToSection" />

      <!-- SWITCHER DE IDIOMA -->
      <div class="hidden lg:flex">
        <LanguageSwitcher :isScrolled="isScrolled" />
      </div>

      <!-- BOTÓN HAMBURGUESA -->
      <button
        @click="isMenuOpen = true"
        class="lg:hidden p-2"
        :class="isScrolled ? 'text-[#003366]' : 'text-white'"
      >
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <MobileMenu :isOpen="isMenuOpen" :onClose="() => (isMenuOpen = false)" />
  </header>
</template>
