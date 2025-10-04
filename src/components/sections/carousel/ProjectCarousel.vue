<script setup lang="ts">
/**
 * ProjectCarousel.vue — Carousel profesional de proyectos LABANDA
 * Usa Swiper.js para navegación táctil fluida
 * Muestra imagen full-height (60%) + info proyecto (40%)
 * Responsive: stack vertical en mobile
 * @author Nelson Valero
 * @since v1.0.0
 */

import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import projects data
import projectsData from '@/data/projects.json'

const { locale } = useI18n()

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
}
</script>

<template>
  <div class="project-carousel w-full">
    <Swiper v-bind="swiperOptions" class="w-full h-[600px] lg:h-[700px] pb-16">
      <SwiperSlide
        v-for="project in projectsData"
        :key="project.id"
        class="relative"
      >
        <!-- Layout: Image (left 60%) + Info (right 40%) on desktop -->
        <div class="flex flex-col lg:flex-row h-full">
          
          <!-- PROJECT IMAGE (Left 60% desktop, full mobile) -->
          <div class="relative w-full lg:w-[60%] h-[300px] lg:h-full">
            <!-- Image -->
            <img
              :src="project.image"
              :alt="locale === 'fr' ? project.title.fr : project.title.en"
              class="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            
            <!-- Gradient overlay for better text contrast -->
            <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent lg:to-black/60" />
          </div>

          <!-- PROJECT INFO (Right 40% desktop, below mobile) -->
          <div class="relative w-full lg:w-[40%] bg-white flex items-center justify-center p-6 lg:p-12">
            <div class="max-w-lg">
              
              <!-- Category Badge -->
              <div class="inline-block mb-4">
                <span class="px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-semibold rounded-full uppercase tracking-wide">
                  {{ locale === 'fr' ? project.category.fr : project.category.en }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-3xl lg:text-4xl font-bold text-[#003366] mb-3">
                {{ locale === 'fr' ? project.title.fr : project.title.en }}
              </h3>

              <!-- Location & Year -->
              <div class="flex items-center gap-4 text-gray-600 mb-6">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-sm">{{ locale === 'fr' ? project.location.fr : project.location.en }}</span>
                </div>
                
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="text-sm">{{ project.year }}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-700 leading-relaxed mb-8">
                {{ locale === 'fr' ? project.description.fr : project.description.en }}
              </p>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-4">
                <div
                  v-for="(stat, index) in project.stats"
                  :key="index"
                  class="text-center"
                >
                  <div class="text-2xl font-bold text-[#FF6B35] mb-1">
                    {{ stat.value }}
                  </div>
                  <div class="text-xs text-gray-500 uppercase tracking-wide">
                    {{ locale === 'fr' ? stat.label.fr : stat.label.en }}
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
  /* Tamaño y forma del botón */
  width: 56px;
  height: 56px;
  border-radius: 50%;
  
  /* Fondo blanco semi-transparente con blur */
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Sombra suave */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Transición suave */
  transition: all 0.3s ease;
  
  /* CRÍTICO: Resetear estilos Swiper por defecto */
  color: transparent !important;
  font-size: 0 !important;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* CRÍTICO: Forzar eliminación de flechas azules predeterminadas */
:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  content: '' !important;
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
}

/* Crear flechas naranjas personalizadas con pseudo-elementos */
:deep(.swiper-button-next)::before,
:deep(.swiper-button-prev)::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-top: 3px solid #FF6B35;
  border-right: 3px solid #FF6B35;
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

/* Mover paginación DEBAJO del contenedor */
:deep(.swiper-pagination) {
  bottom: 0 !important;
  position: absolute !important;
  padding-bottom: 12px;
}

/* Bullets más grandes y con mejor espaciado */
:deep(.swiper-pagination-bullet) {
  width: 14px;
  height: 14px;
  background: rgba(0, 51, 102, 0.3); /* Navy con opacidad */
  opacity: 1;
  margin: 0 6px !important;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.swiper-pagination-bullet):hover {
  background: rgba(0, 51, 102, 0.5);
  transform: scale(1.15);
}

/* Bullet activo: naranja corporativo */
:deep(.swiper-pagination-bullet-active) {
  background: #FF6B35;
  transform: scale(1.3);
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
}

/* ========================================
   RESPONSIVE: Ocultar flechas en mobile
   ======================================== */

@media (max-width: 1023px) {
  :deep(.swiper-button-next) {
    display: none;
  }
  :deep(.swiper-button-prev) {
    display: none;
  }
}
</style>