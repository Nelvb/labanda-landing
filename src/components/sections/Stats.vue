<script setup lang="ts">
/**
 * Stats.vue — Sección de estadísticas con animación count-up
 * Contexto: Muestra años de experiencia, proyectos y países
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

const stats = ref<StatItem[]>([
  { value: 0, target: 30, label: t('stats.experience'), suffix: '+' },
  { value: 0, target: 50, label: t('stats.projects'), suffix: '+' },
  { value: 0, target: 5, label: t('stats.countries'), suffix: '' }
])

const isVisible = ref(false)
const statsSection = ref<HTMLElement | null>(null)

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
    class="py-20 bg-gradient-to-br from-[#003366] via-[#0072CE] to-[#003366] text-white"
  >
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Stat 1: Años -->
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

        <!-- Stat 2: Proyectos -->
        <div v-if="stats.length >= 2" class="text-center">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div class="text-6xl font-bold mb-2">
            {{ Math.ceil(stats[1]?.value || 0) }}{{ stats[1]?.suffix || '' }}
          </div>
          <div class="text-xl font-medium text-gray-200">
            {{ stats[1]?.label || '' }}
          </div>
        </div>

        <!-- Stat 3: Países -->
        <div v-if="stats.length >= 3" class="text-center">
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
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
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