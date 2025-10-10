<!--
 * Footer.vue
 * 
 * Footer corporativo — LABANDA Industrie Services
 * Bilingüe (FR/EN) con enlaces legales (Cookies, Privacy, Aviso Legal).
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 * Layout responsive con diseño limpio, coherente con Header.
 * @since v1.0.0
 * @author Nelson Valero
-->

<script setup lang="ts">
// Component name: AppFooter
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { MapPin, Phone, Mail } from 'lucide-vue-next'

const { t, locale } = useI18n()
</script>

<template>
  <footer class="bg-[#003366] text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      <!-- Columna 1: Logo + descripción -->
      <div>
        <img
          src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759502179/Logo__1_-removebg-preview_a1jzff.png"
          alt="LABANDA Industrie Services"
          class="h-20 w-auto mb-4 brightness-0 invert"
        />
        <p class="text-gray-300 leading-relaxed text-sm md:text-base max-w-xs">
          {{ t('footer.description') }}
        </p>
      </div>

      <!-- Columna 2: Enlaces legales -->
      <div>
        <h3 class="text-lg font-semibold text-[#FF6B35] mb-4">
          {{ t('footer.legal_title') }}
        </h3>
        <ul class="space-y-2 text-gray-300 text-sm md:text-base">
          <li>
            <RouterLink
              to="/legal/legal-notice"
              class="hover:text-[#FF6B35] transition-colors"
            >
              {{ t('footer.legal_notice') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/legal/privacy"
              class="hover:text-[#FF6B35] transition-colors"
            >
              {{ t('footer.privacy_policy') }}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/legal/cookies"
              class="hover:text-[#FF6B35] transition-colors"
            >
              {{ t('footer.cookies_policy') }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Columna 3: Contacto -->
      <div>
        <h3 class="text-lg font-semibold text-[#FF6B35] mb-4">
          {{ t('footer.contact_title') }}
        </h3>
        <ul class="space-y-3 text-gray-300 text-sm md:text-base">
          <li class="flex items-start gap-3">
            <MapPin class="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
            <span>Malabo, Guinée Équatoriale</span>
          </li>
         <li class="flex items-start gap-3">
  <Phone class="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
  <a
    :href="`tel:${t('contact.info.phone').replace(/\\s+/g, '')}`"
    class="hover:text-[#FF6B35] transition-colors"
  >
    {{ t('contact.info.phone') }}
  </a>
</li>

          <li class="flex items-start gap-3">
            <Mail class="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
            <a
              href="mailto:info@labandaguinea.com"
              class="hover:text-[#FF6B35] transition-colors"
            >
              info@labandaguinea.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Línea divisoria -->
    <div class="border-t border-white/20 my-8"></div>

    <!-- Créditos inferiores -->
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p class="mb-4 md:mb-0 text-center md:text-left">
        © {{ new Date().getFullYear() }} LABANDA Industrie Services —
        {{ locale === 'fr'
          ? 'Tous droits réservés.'
          : 'All rights reserved.' }}
      </p>

    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: 'Inter', 'Roboto', sans-serif;
  scroll-margin-top: 100px;
}
</style>
