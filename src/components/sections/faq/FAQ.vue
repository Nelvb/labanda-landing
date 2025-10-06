<!--
 * FAQ.vue — Sección de Preguntas Frecuentes (accordion)
 * Diseño elegante, corporativo y responsive
 * Colores: azul #003366 y naranja #FF6B35
 * Carga dinámica según idioma actual (vue-i18n)
 * Autor: Nelson Valero
 * @since v1.0.0
-->

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import faqDataEs from './faqData.es'
import faqDataEn from './faqData.en'
import faqDataFr from './faqData.fr'

const { locale } = useI18n()

const allFaqs = {
  es: faqDataEs,
  en: faqDataEn,
  fr: faqDataFr,
}

const faqs = allFaqs[locale.value as keyof typeof allFaqs] || faqDataEs
const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="bg-gray-50 py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
          {{ $t('faq.title') }}
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ $t('faq.subtitle') }}
        </p>
      </div>

      <!-- Acordeón -->
      <div class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <button
            class="w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none"
            @click="toggle(index)"
          >
            <h3
              class="text-lg md:text-xl font-semibold text-[#003366] pr-4 transition-colors"
              :class="activeIndex === index ? 'text-[#FF6B35]' : ''"
            >
              {{ item.question }}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300"
              :class="{
                'rotate-180 text-[#FF6B35]': activeIndex === index,
                'text-gray-500': activeIndex !== index,
              }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition name="accordion">
            <div
              v-if="activeIndex === index"
              class="px-6 pb-6 text-gray-700 text-base md:text-lg leading-relaxed border-t border-gray-100 bg-[#FF6B35]/5"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
section {
  scroll-margin-top: 80px;
}
</style>
