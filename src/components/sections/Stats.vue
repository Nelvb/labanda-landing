<script setup lang="ts">
/**
 * Stats.vue — Sección de estadísticas con animación count-up individual
 * Contexto: Muestra años de experiencia, países y equipo
 * Notas:
 *  - Cada tarjeta se anima de forma independiente al entrar en viewport
 *  - Incluye fade, slide-up y scale suave
 *  - Animación count-up solo una vez por tarjeta
 * @author Nelson Valero
 * @since v1.2.0
 */

defineOptions({
  name: 'CompanyStats',
})

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { StatItem } from '@/types'

const { t } = useI18n()

// Datos definitivos
const stats = ref<StatItem[]>([
  { value: 0, target: 20, label: t('stats.experience'), suffix: '+' },
  { value: 0, target: 5, label: t('stats.countries'), suffix: '' },
  { value: 0, target: 60, label: t('stats.team'), suffix: '+' },
])

const statsVisible = ref([false, false, false])

// Función de animación progresiva
const animateCounter = (index: number) => {
  const stat = stats.value[index]
  const increment = stat.target / 50
  const interval = setInterval(() => {
    if (stat.value < stat.target) {
      stat.value += increment
    } else {
      stat.value = stat.target
      clearInterval(interval)
    }
  }, 30)
}

// Activar animación por cada tarjeta individualmente
onMounted(() => {
  const statElements = document.querySelectorAll('.stat-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'))
        if (entry.isIntersecting) {
          if (!statsVisible.value[index]) {
            statsVisible.value[index] = true
            animateCounter(index)
            observer.unobserve(entry.target)
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  statElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <section
    class="py-16 bg-gradient-to-br from-[#003366] via-[#0072CE] to-[#003366] text-white overflow-hidden"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Stat 1 -->
        <div
          class="stat-card text-center transition-all duration-1000"
          :class="statsVisible[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'"
          data-index="0"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6 transition-transform duration-1000"
            :class="statsVisible[0] ? 'scale-100' : 'scale-90'"
          >
            <svg
              class="w-10 h-10 text-[#FF6B35]"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-6xl font-bold mb-2">
            {{ Math.ceil(stats[0].value) }}{{ stats[0].suffix }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[0].label }}
          </div>
        </div>

        <!-- Stat 2 -->
        <div
          class="stat-card text-center transition-all duration-1000"
          :class="statsVisible[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'"
          data-index="1"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6 transition-transform duration-1000"
            :class="statsVisible[1] ? 'scale-100' : 'scale-90'"
          >
            <svg
              class="w-10 h-10 text-[#FF6B35]"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M2 12h20" />
              <path d="M12 3a15.3 15.3 0 010 18a15.3 15.3 0 010-18z" />
            </svg>
          </div>
          <div class="text-6xl font-bold mb-2">
            {{ Math.ceil(stats[1].value) }}{{ stats[1].suffix }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[1].label }}
          </div>
        </div>

        <!-- Stat 3 -->
        <div
          class="stat-card text-center transition-all duration-1000"
          :class="statsVisible[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'"
          data-index="2"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6 transition-transform duration-1000"
            :class="statsVisible[2] ? 'scale-100' : 'scale-90'"
          >
            <svg
              class="w-10 h-10 text-[#FF6B35]"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 21a8 8 0 00-16 0" />
              <circle cx="10" cy="8" r="4" />
              <path d="M22 21a6 6 0 00-12 0" />
              <circle cx="16" cy="11" r="3" />
            </svg>
          </div>
          <div class="text-6xl font-bold mb-2">
            {{ Math.ceil(stats[2].value) }}{{ stats[2].suffix }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[2].label }}
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
