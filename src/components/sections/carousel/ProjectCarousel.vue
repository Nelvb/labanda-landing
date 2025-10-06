<script setup lang="ts">
/**
 * ProjectCarousel.vue — Carousel profesional de proyectos LABANDA
 * Usa Swiper.js para navegación táctil fluida
 * Muestra imagen full-height (60%) + info proyecto (40%)
 * Responsive: stack vertical en mobile sin scroll
 * @author Nelson Valero
 * @since v1.0.0
 */

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import projects data and composable
import projectsData from '@/data/projects.json'
import { useProjectTranslations } from '@/composables/useProjectTranslations'

// Usar el composable para manejo robusto de traducciones
const {
  getProjectTitle,
  getProjectCategory,
  getProjectLocation,
  getProjectDescription,
  getStatLabel
} = useProjectTranslations()

const modules = [Navigation, Pagination, Autoplay, EffectFade]

// Swiper configuration
const swiperOptions = {
  modules,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    dynamicBullets: false,
  },
  navigation: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // CRÍTICO: Habilitar gestos táctiles
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  allowTouchMove: true,
  grabCursor: true,
}
</script>

<template>
  <div class="project-carousel w-full">
    <Swiper v-bind="swiperOptions" class="w-full h-[820px] md:h-[600px] lg:h-[700px] pb-16">
      <SwiperSlide v-for="project in projectsData" :key="project.id" class="relative">
        <div class="flex flex-col lg:flex-row h-full">
          <!-- PROJECT IMAGE -->
          <div class="relative w-full lg:w-[60%] h-1/2 lg:h-full">
            <img
              :src="project.image"
              :alt="getProjectTitle(project)"
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/40 via-black/20 to-transparent lg:to-black/60"
            />
          </div>

          <!-- PROJECT INFO -->
          <div class="relative w-full lg:w-[40%] h-1/2 lg:h-full bg-white overflow-hidden">
            <div class="flex items-start lg:items-center justify-center p-4 lg:p-12 h-full">
              <div class="max-w-lg w-full">
                <!-- Category Badge -->
                <div class="text-center lg:text-left mb-2 lg:mb-4">
                  <span
                    class="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-xs lg:text-sm font-semibold rounded-full uppercase tracking-wide"
                  >
                    {{ getProjectCategory(project) }}
                  </span>
                </div>

                <!-- Title -->
                <h3
                  class="text-xl lg:text-3xl xl:text-4xl font-bold text-[#003366] mb-1 lg:mb-3 text-center lg:text-left"
                >
                  {{ getProjectTitle(project) }}
                </h3>

                <!-- Location & Year -->
                <div
                  class="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4 text-gray-600 mb-2 lg:mb-6"
                >
                  <div class="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 lg:w-5 lg:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="text-xs lg:text-sm">{{
                      getProjectLocation(project)
                    }}</span>
                  </div>

                  <div class="flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 lg:w-5 lg:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="text-xs lg:text-sm">{{ project.year }}</span>
                  </div>
                </div>

                <!-- Description -->
                <p
                  class="text-xs lg:text-base text-gray-700 leading-tight lg:leading-relaxed mb-3 lg:mb-8 line-clamp-3 lg:line-clamp-none text-center lg:text-left"
                >
                  {{ getProjectDescription(project) }}
                </p>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-2 lg:gap-4">
                  <div v-for="(stat, index) in project.stats" :key="index" class="text-center">
                    <div class="text-base lg:text-2xl font-bold text-[#FF6B35] mb-0.5 lg:mb-1">
                      {{ stat.value }}
                    </div>
                    <div
                      class="text-[9px] lg:text-xs text-gray-500 uppercase tracking-wide leading-tight"
                    >
                      {{ getStatLabel(stat) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
/* ========================================
   NAVIGATION BUTTONS (Flechas)
   ======================================== */

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  color: transparent !important;
  font-size: 0 !important;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  content: '' !important;
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

:deep(.swiper-button-next)::before,
:deep(.swiper-button-prev)::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-top: 3px solid #ff6b35;
  border-right: 3px solid #ff6b35;
  z-index: 10;
}

:deep(.swiper-button-next)::before {
  transform: translate(-50%, -50%) rotate(45deg);
  margin-left: -2px;
}

:deep(.swiper-button-prev)::before {
  transform: translate(-50%, -50%) rotate(-135deg);
  margin-left: 2px;
}

/* ========================================
   PAGINATION (Puntos de guía)
   ======================================== */

:deep(.swiper-pagination) {
  bottom: 0 !important;
  position: absolute !important;
  padding-bottom: 12px;
}

:deep(.swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background: rgba(0, 51, 102, 0.3);
  opacity: 1;
  margin: 0 6px !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet):hover {
  background: rgba(0, 51, 102, 0.5);
  transform: scale(1.15);
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff6b35;
  transform: scale(1.3);
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
}

/* ========================================
   RESPONSIVE
   ======================================== */

@media (max-width: 1023px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}
</style>
