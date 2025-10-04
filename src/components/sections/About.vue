<script setup lang="ts">
/**
 * About.vue — Sección À Propos con animaciones e iconos
 * Contexto: Historia, Misión, Visión y Presencia Regional
 * Notas: Cards con stagger animation, iconos Lucide, mapa África de fondo
 * @author Nelson Valero
 * @since v1.0.0
 */
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Clock, Target, Lightbulb } from 'lucide-vue-next'

const { t } = useI18n()
const isVisible = ref(false)
const aboutSection = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.2 }
  )

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})
</script>

<template>
  <section id="apropos" ref="aboutSection" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      
      <!-- Título principal -->
      <h2 class="text-4xl lg:text-5xl font-bold text-center text-[#003366] mb-6">
        {{ t('about.title') }}
      </h2>

      <!-- Intro corporativa -->
      <p class="text-xl lg:text-2xl text-center text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
        {{ t('about.intro') }}
      </p>

      <!-- Grid Histoire | Mission | Vision -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        <!-- Histoire -->
        <div
          :class="[
            'bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          style="transition-delay: 0s"
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

        <!-- Mission -->
        <div
          :class="[
            'bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          style="transition-delay: 0.2s"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-[#0072CE]/10 flex items-center justify-center">
              <Target class="w-8 h-8 text-[#0072CE]" />
            </div>
          </div>
          <h3 class="text-2xl font-bold text-[#003366] mb-4 text-center">
            {{ t('about.mission_title') }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-center">
            {{ t('about.mission_text') }}
          </p>
        </div>

        <!-- Vision -->
        <div
          :class="[
            'bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
          style="transition-delay: 0.4s"
        >
          <div class="flex justify-center mb-6">
            <div class="w-16 h-16 rounded-full bg-[#4AB3F4]/10 flex items-center justify-center">
              <Lightbulb class="w-8 h-8 text-[#4AB3F4]" />
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

      <!-- Presencia Regional con mapa África de fondo -->
      <div class="relative max-w-4xl mx-auto py-16 overflow-hidden">
        
        <!-- Mapa África de fondo (naranja difuminado) -->
        <!-- Mapa África de fondo (versión simplificada) -->
<div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
  <img 
    src="https://res.cloudinary.com/dy1pkrd52/image/upload/v1759535689/simplified-political-map-africa-vector-4234592_nna9ip.webp" 
    alt="" 
    class="w-full max-w-md object-contain"
    style="filter: sepia(100%) saturate(500%) hue-rotate(330deg) brightness(1.2);"
  />
</div>

        <!-- Contenido -->
        <div class="relative z-10 text-center">
          <h3 class="text-3xl font-bold text-[#003366] mb-8">
            {{ t('about.presence_title') }}
          </h3>
          
          <!-- Badges países -->
          <div class="flex flex-wrap justify-center gap-4">
            <span 
              :class="[
                'px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              style="transition-delay: 0.5s"
              class="bg-[#FF6B35] text-white"
            >
              {{ t('about.countries.guinea') }} <span class="text-sm opacity-90">(Sede)</span>
            </span>
            
            <span 
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              style="transition-delay: 0.6s"
            >
              {{ t('about.countries.cameroon') }}
            </span>
            
            <span 
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              style="transition-delay: 0.7s"
            >
              {{ t('about.countries.congo') }}
            </span>
            
            <span 
              :class="[
                'px-6 py-3 rounded-full font-semibold border-2 border-[#003366] bg-white text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              ]"
              style="transition-delay: 0.8s"
            >
              {{ t('about.countries.chad') }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>