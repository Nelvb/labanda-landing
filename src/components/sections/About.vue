<script setup lang="ts">
/**
 * About.vue — Sección À Propos con animaciones e iconos
 * Contexto: Historia, Misión, Visión y Presencia Regional
 * Notas:
 *  - Cada card (Historia, Misión, Visión) se anima individualmente (fade + slide-up)
 *  - El bloque inferior (mapa + países) se anima al entrar en viewport
 * @author Nelson Valero
 * @since v1.2.0
 */

defineOptions({
  name: 'CompanyAbout',
})

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Clock, Target, Lightbulb } from 'lucide-vue-next'

const { t } = useI18n()

const cardsVisible = ref([false, false, false])
const isMapVisible = ref(false)

onMounted(() => {
  // Animación individual por card
  const cardElements = document.querySelectorAll('.about-card')
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'))
        if (entry.isIntersecting) {
          cardsVisible.value[index] = true
          cardObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  cardElements.forEach((card) => cardObserver.observe(card))

  // Animación del bloque inferior (mapa + países)
  const mapSection = document.querySelector('.map-section')
  if (mapSection) {
    const mapObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isMapVisible.value = true
            mapObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    mapObserver.observe(mapSection)
  }
})
</script>

<template>
  <section id="apropos" class="py-12 md:py-16 bg-white">
    <div class="container mx-auto px-6">
      <!-- Título principal -->
      <h2 class="text-4xl lg:text-5xl font-bold text-center text-[#003366] mb-6">
        {{ t('about.title') }}
      </h2>

      <!-- Intro corporativa -->
      <p
        class="text-xl lg:text-2xl text-center text-gray-700 px-4 md:px-12 lg:px-24 mb-16 leading-relaxed"
      >
        {{ t('about.intro') }}
      </p>

      <!-- Grid Historia | Misión | Visión -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Historia -->
        <div
          class="about-card bg-[#F8FBFD] p-8 rounded-xl border border-[#FF6B35]/40 transition-all duration-1000 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(255,107,53,0.4)]"
          :class="cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
          data-index="0"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
              <Clock class="w-8 h-8 text-[#FF6B35]" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-[#003366] mb-4 text-center">
            {{ t('about.history_title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-center">
            {{ t('about.history_text') }}
          </p>
        </div>

        <!-- Misión -->
        <div
          class="about-card bg-[#F8FBFD] p-8 rounded-xl border border-[#FF6B35]/40 transition-all duration-1000 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(255,107,53,0.4)]"
          :class="cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
          data-index="1"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
              <Target class="w-8 h-8 text-[#FF6B35]" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-[#003366] mb-4 text-center">
            {{ t('about.mission_title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-center">
            {{ t('about.mission_text') }}
          </p>
        </div>

        <!-- Visión -->
        <div
          class="about-card bg-[#F8FBFD] p-8 rounded-xl border border-[#FF6B35]/40 transition-all duration-1000 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(255,107,53,0.4)]"
          :class="cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'"
          data-index="2"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
              <Lightbulb class="w-8 h-8 text-[#FF6B35]" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-[#003366] mb-4 text-center">
            {{ t('about.vision_title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-center">
            {{ t('about.vision_text') }}
          </p>
        </div>
      </div>

      <!-- Presencia Regional con animación restaurada -->
      <div
        class="map-section relative max-w-4xl mx-auto py-16 overflow-hidden transition-all duration-1000"
        :class="isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <div
          class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none"
        >
          <img
            src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759589683/simplified-political-map-africa-vector-4234592_w2s69w.webp"
            alt="Mapa África LABANDA"
            class="w-full max-w-md object-contain"
            style="filter: sepia(100%) saturate(500%) hue-rotate(330deg) brightness(1.2)"
          />
        </div>

        <div class="relative z-10 text-center">
          <h3 class="text-3xl font-bold text-[#003366] mb-8">
            {{ t('about.presence_title') }}
          </h3>

          <div class="flex flex-wrap justify-center gap-4">
            <span
              :class="[ 
                'px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-700 bg-[#FF6B35] text-white',
                isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              ]"
              style="transition-delay: 0.3s"
            >
              {{ t('about.countries.guinea') }} <span class="text-sm opacity-90">(Sede)</span>
            </span>

            <span
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] transition-all duration-700 hover:bg-[#003366] hover:text-white',
                isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              ]"
              style="transition-delay: 0.4s"
            >
              {{ t('about.countries.cameroon') }}
            </span>

            <span
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] transition-all duration-700 hover:bg-[#003366] hover:text-white',
                isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              ]"
              style="transition-delay: 0.5s"
            >
              {{ t('about.countries.saotome') }}
            </span>

            <span
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] transition-all duration-700 hover:bg-[#003366] hover:text-white',
                isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              ]"
              style="transition-delay: 0.6s"
            >
              {{ t('about.countries.angola') }}
            </span>

            <span
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] transition-all duration-700 hover:bg-[#003366] hover:text-white',
                isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              ]"
              style="transition-delay: 0.7s"
            >
              {{ t('about.countries.dakar') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
  will-change: transform, opacity;
}
</style>
