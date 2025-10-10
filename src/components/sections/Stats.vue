<script setup lang="ts">
/**
 * Stats.vue — Sección de estadísticas con animación count-up
 * Contexto: Muestra años de experiencia, países y equipo
 * Notas: Animación se activa al entrar en viewport con IntersectionObserver
 * @author Nelson Valero
 * @since v1.0.0
 */

defineOptions({
  name: 'CompanyStats'
})

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { StatItem } from '@/types'

const { t } = useI18n()

// Datos actualizados según decisión final
const stats = ref<StatItem[]>([
  { value: 0, target: 20, label: t('stats.experience'), suffix: '+' },
  { value: 0, target: 5, label: t('stats.countries'), suffix: '' },
  { value: 0, target: 60, label: t('stats.team'), suffix: '+' }
])

const isVisible = ref(false)
const statsSection = ref<HTMLElement | null>(null)

// Animación progresiva de los contadores
const animateCounter = (stat: StatItem) => {
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

// Activar animación cuando la sección entra en viewport
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          stats.value.forEach((stat) => animateCounter(stat))
        }
      })
    },
    { threshold: 0.3 }
  )

  if (statsSection.value && stats.value.length >= 3) {
    observer.observe(statsSection.value)
  }
})
</script>

<template>
  <section
    ref="statsSection"
    class="py-12 md:py-16 bg-gradient-to-br from-[#003366] via-[#0072CE] to-[#003366] text-white"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Stat 1: Años de experiencia -->
        <div v-if="stats.length >= 1" class="text-center">
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6"
          >
            <svg
              class="w-10 h-10 text-[#FF6B35]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-6xl font-bold mb-2">
            {{ Math.ceil(stats[0]?.value || 0) }}{{ stats[0]?.suffix || '' }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[0]?.label || '' }}
          </div>
        </div>

        <!-- Stat 2: Países -->
        <div v-if="stats.length >= 2" class="text-center">
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6"
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
            {{ Math.ceil(stats[1]?.value || 0) }}{{ stats[1]?.suffix || '' }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[1]?.label || '' }}
          </div>
        </div>

        <!-- Stat 3: Equipo -->
        <div v-if="stats.length >= 3" class="text-center">
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-6"
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
            {{ Math.ceil(stats[2]?.value || 0) }}{{ stats[2]?.suffix || '' }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[2]?.label || '' }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
