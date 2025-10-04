<script setup lang="ts">
/**
 * Services.vue — Sección de servicios LABANDA con imágenes full-width
 * Muestra los 4 servicios principales con separadores visuales elegantes
 * Contexto: Landing corporativa LABANDA Industrie Services
 * Bilingüe: FR/EN automático con vue-i18n
 * Responsive: Mobile-first con breakpoints optimizados
 * @author Nelson Valero
 * @since v1.0.0
 */

defineOptions({
  name: 'CompanyServices'
})

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = [
  {
    id: 'architecture-urbanisme',
    image: 'https://res.cloudinary.com/dy1pkrd52/image/upload/v1759574965/servicio-1_r9vmt5.webp',
    title: {
      fr: 'Architecture & Urbanisme',
      en: 'Architecture & Urban Planning'
    },
    description: {
      fr: 'Conception architecturale et planification urbaine stratégique pour le développement harmonieux des villes et territoires en Afrique Centrale.',
      en: 'Architectural design and strategic urban planning for harmonious development of cities and territories in Central Africa.'
    },
    capabilities: {
      fr: [
        'Plans directeurs urbains',
        'Développement de villes en expansion',
        'Études préliminaires et faisabilité',
        'Coordination multidisciplinaire'
      ],
      en: [
        'Urban master plans',
        'Expanding cities development',
        'Preliminary studies and feasibility',
        'Multidisciplinary coordination'
      ]
    }
  },
  {
    id: 'infrastructure-genie-civil',
    image: 'https://res.cloudinary.com/dy1pkrd52/image/upload/v1759574971/servicio-2_lavnyu.webp',
    title: {
      fr: 'Infrastructure & Génie Civil',
      en: 'Infrastructure & Civil Engineering'
    },
    description: {
      fr: 'Réalisation de projets d\'infrastructure publique et ouvrages d\'art avec excellence technique et respect des délais.',
      en: 'Execution of public infrastructure projects and civil engineering works with technical excellence and deadline compliance.'
    },
    capabilities: {
      fr: [
        'Ponts et ouvrages d\'art',
        'Voiries et réseaux divers',
        'Gestion intégrale de projets',
        'Coordination technique chantiers'
      ],
      en: [
        'Bridges and civil works',
        'Roads and various networks',
        'Comprehensive project management',
        'Technical site coordination'
      ]
    }
  },
  {
    id: 'rehabilitation-patrimoniale',
    image: 'https://res.cloudinary.com/dy1pkrd52/image/upload/v1759574986/servicio-3_q4kzyh.webp',
    title: {
      fr: 'Réhabilitation Patrimoniale',
      en: 'Heritage Rehabilitation'
    },
    description: {
      fr: 'Restauration et préservation du patrimoine architectural en alliant techniques traditionnelles et innovations contemporaines avec respect culturel.',
      en: 'Restoration and preservation of architectural heritage combining traditional techniques and contemporary innovations with cultural respect.'
    },
    capabilities: {
      fr: [
        'Restauration édifices historiques',
        'Conservation patrimoniale',
        'Diagnostic patrimonial',
        'Mise en valeur culturelle'
      ],
      en: [
        'Historic building restoration',
        'Heritage conservation',
        'Heritage diagnostics',
        'Cultural enhancement'
      ]
    }
  },
  {
    id: 'developpement-durable',
    image: 'https://res.cloudinary.com/dy1pkrd52/image/upload/v1759574997/servicio-4_gjvgox.webp',
    title: {
      fr: 'Développement Durable',
      en: 'Sustainable Development'
    },
    description: {
      fr: 'Intégration des principes de développement durable dans tous nos projets pour un impact environnemental minimal et un développement responsable.',
      en: 'Integration of sustainable development principles in all our projects for minimal environmental impact and responsible development.'
    },
    capabilities: {
      fr: [
        'Éco-conception architecturale',
        'Énergies renouvelables',
        'Matériaux locaux durables',
        'Certification environnementale'
      ],
      en: [
        'Architectural eco-design',
        'Renewable energies',
        'Sustainable local materials',
        'Environmental certification'
      ]
    }
  }
]
</script>

<template>
  <section id="services" class="w-full">
    <!-- Section Header -->
    <div class="bg-white py-12 md:py-16 px-6 text-center">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
        {{ t('services.title') }}
      </h2>
      <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        {{ t('services.subtitle') }}
      </p>
    </div>

    <!-- Services Grid -->
    <div class="w-full">
      <div
        v-for="(service, index) in services"
        :key="service.id"
      >
        <!-- Service Image Block -->
        <div class="relative min-h-[500px] h-[600px] md:h-[700px] flex items-center justify-center">
          <!-- Background Image -->
          <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${service.image})` }"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/60" />

          <!-- Content -->
          <div class="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white">
            <!-- Title -->
            <h3 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              {{ $i18n.locale === 'fr' ? service.title.fr : service.title.en }}
            </h3>

            <!-- Description -->
            <p class="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              {{ $i18n.locale === 'fr' ? service.description.fr : service.description.en }}
            </p>

            <!-- Capabilities -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
              <div
                v-for="(capability, capIndex) in ($i18n.locale === 'fr' ? service.capabilities.fr : service.capabilities.en)"
                :key="capIndex"
                class="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-left"
              >
                <div class="w-2 h-2 bg-[#FF6B35] rounded-full flex-shrink-0" />
                <span class="text-sm md:text-base lg:text-lg">{{ capability }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Separator (only if not last service) -->
        <div 
          v-if="index < services.length - 1"
          class="flex items-center justify-center py-12 md:py-20 bg-white"
        >
          <div class="flex items-center gap-2 md:gap-3">
            <!-- Left line -->
            <div class="h-[2px] w-16 md:w-24 bg-[#003366]"></div>
            
            <!-- Orange dot -->
            <div class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF6B35]"></div>
            
            <!-- Right line -->
            <div class="h-[2px] w-16 md:w-24 bg-[#003366]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth scroll behavior */
section {
  scroll-margin-top: 80px;
}
</style>