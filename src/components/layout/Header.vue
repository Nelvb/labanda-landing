<script setup lang="ts">
/**
 * Header.vue — Navbar sticky con transición transparente → blanca
 * Contexto: Componente de navegación principal con i18n y scroll behavior
 * Notas: Cambia de transparente a blanco al hacer scroll > 100px
 * @author Nelson Valero
 * @since v1.0.0
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo (ajustado responsive) -->
        <div class="flex items-center space-x-3">
          <img
            src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759502179/Logo__1_-removebg-preview_a1jzff.png"
            alt="LABANDA Industrie Services"
            class="h-16 sm:h-20 lg:h-22 w-auto transition-all duration-300"
            :class="isScrolled ? '' : 'brightness-0 invert'"
          />
        </div>

        <!-- Desktop Navigation (links más grandes) -->
        <div class="hidden lg:flex items-center space-x-8">
          <button
            @click="scrollToSection('accueil')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.home') }}
          </button>
          <button
            @click="scrollToSection('apropos')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.about') }}
          </button>
          <button
            @click="scrollToSection('services')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.services') }}
          </button>
          <button
            @click="scrollToSection('projets')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.projects') }}
          </button>
          <button
            @click="scrollToSection('references')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.references') }}
          </button>
          <button
            @click="scrollToSection('contact')"
            :class="[
              'font-semibold text-lg hover:text-[#FF6B35] transition',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.contact') }}
          </button>
        </div>

        <!-- Language Switcher -->
        <div
          :class="[
            'hidden lg:flex items-center space-x-2 rounded-lg p-1 transition-all',
            isScrolled ? 'border border-gray-300' : 'border border-white/40'
          ]"
        >
          <button
            @click="toggleLanguage"
            :class="[
              'px-4 py-2 rounded font-semibold text-base transition',
              locale === 'fr'
                ? 'bg-[#FF6B35] text-white'
                : isScrolled
                  ? 'text-[#003366] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
            ]"
          >
            FR
          </button>
          <button
            @click="toggleLanguage"
            :class="[
              'px-4 py-2 rounded font-semibold text-base transition',
              locale === 'en'
                ? 'bg-[#FF6B35] text-white'
                : isScrolled
                  ? 'text-[#003366] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
            ]"
          >
            EN
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2"
          :class="isScrolled ? 'text-[#003366]' : 'text-white'"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu (mejorado) -->
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden mt-4 pb-4 border-t"
        :class="isScrolled ? 'border-gray-200' : 'border-white/20'"
      >
        <div class="flex flex-col space-y-4 mt-4">
          <button
            @click="scrollToSection('accueil')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.home') }}
          </button>
          <button
            @click="scrollToSection('apropos')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.about') }}
          </button>
          <button
            @click="scrollToSection('services')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.services') }}
          </button>
          <button
            @click="scrollToSection('projets')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.projects') }}
          </button>
          <button
            @click="scrollToSection('references')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.references') }}
          </button>
          <button
            @click="scrollToSection('contact')"
            :class="[
              'font-semibold text-lg text-left',
              isScrolled ? 'text-[#003366]' : 'text-white'
            ]"
          >
            {{ t('nav.contact') }}
          </button>

          <!-- Language switcher mobile -->
          <div class="flex space-x-2 pt-2">
            <button
              @click="toggleLanguage"
              :class="[
                'flex-1 py-3 rounded font-semibold text-base transition',
                locale === 'fr' ? 'bg-[#FF6B35] text-white' : 'bg-gray-100 text-[#003366]'
              ]"
            >
              FR
            </button>
            <button
              @click="toggleLanguage"
              :class="[
                'flex-1 py-3 rounded font-semibold text-base transition',
                locale === 'en' ? 'bg-[#FF6B35] text-white' : 'bg-gray-100 text-[#003366]'
              ]"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>