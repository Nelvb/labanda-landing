<!--
 * Contact.vue — Sección de contacto con formulario Web3Forms
 * Formulario profesional + datos contacto + Google Maps
 * Bilingüe FR/EN con validación client-side
 * @author Nelson Valero
 * @since v1.0.0
-->

<script setup lang="ts">
defineOptions({
  name: 'ContactSection'
})

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  company: '',
  type: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const errors = ref({
  name: '',
  email: '',
  type: '',
  message: ''
})

const validateForm = (): boolean => {
  errors.value = { name: '', email: '', type: '', message: '' }
  let isValid = true

  if (formData.value.name.trim().length < 3) {
    errors.value.name = t('contact.errors.name')
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    errors.value.email = t('contact.errors.email')
    isValid = false
  }

  if (!formData.value.type) {
    errors.value.type = t('contact.errors.type')
    isValid = false
  }

  if (formData.value.message.trim().length < 20) {
    errors.value.message = t('contact.errors.message')
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  loading.value = true
  error.value = false

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
 access_key: 'c3a31201-deeb-4322-a980-4c14dfb9375d',

  name: formData.value.name,
  email: formData.value.email,
  company: formData.value.company || 'Non renseignée',
  type: formData.value.type,
  message: formData.value.message,
  subject: `Nouveau contact LABANDA: ${formData.value.type}`,
  replyto: formData.value.email,
  redirect: false // Importante: desactiva redirección automática
})
    })

    const data = await response.json()

    if (data.success) {
      success.value = true
      formData.value = { name: '', email: '', company: '', type: '', message: '' }
      setTimeout(() => {
        success.value = false
      }, 5000)
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-12 md:py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
          {{ t('contact.title') }}
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- FORMULARIO -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-[#003366] mb-2">
                {{ t('contact.form.name_label') }} *
              </label>
              <input
                v-model="formData.name"
                type="text"
                :placeholder="t('contact.form.name_placeholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"
                :class="{ 'border-red-500': errors.name }"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#003366] mb-2">
                {{ t('contact.form.email_label') }} *
              </label>
              <input
                v-model="formData.email"
                type="email"
                :placeholder="t('contact.form.email_placeholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#003366] mb-2">
                {{ t('contact.form.company_label') }}
              </label>
              <input
                v-model="formData.company"
                type="text"
                :placeholder="t('contact.form.company_placeholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#003366] mb-2">
                {{ t('contact.form.type_label') }} *
              </label>
              <select
                v-model="formData.type"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors"
                :class="{ 'border-red-500': errors.type }"
              >
                <option value="">{{ t('contact.form.type_placeholder') }}</option>
                <option value="general">{{ t('contact.form.type_options.general') }}</option>
                <option value="quote">{{ t('contact.form.type_options.quote') }}</option>
                <option value="investment">{{ t('contact.form.type_options.investment') }}</option>
                <option value="partnership">{{ t('contact.form.type_options.partnership') }}</option>
              </select>
              <p v-if="errors.type" class="mt-1 text-sm text-red-600">{{ errors.type }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#003366] mb-2">
                {{ t('contact.form.message_label') }} *
              </label>
              <textarea
                v-model="formData.message"
                rows="6"
                :placeholder="t('contact.form.message_placeholder')"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] transition-colors resize-none"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <div v-if="success" class="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-800 font-semibold">{{ t('contact.form.success_title') }}</p>
              <p class="text-green-600 text-sm mt-1">{{ t('contact.form.success_message') }}</p>
            </div>

            <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-800 font-semibold">{{ t('contact.form.error_title') }}</p>
              <p class="text-red-600 text-sm mt-1">{{ t('contact.form.error_message') }}</p>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              :disabled="loading"
              class="w-full"
            >
              {{ loading ? t('contact.form.sending') : t('contact.form.submit') }}
            </Button>
            
            <!-- Aviso de política de privacidad -->
            <p class="text-xs text-gray-700 text-center mt-4">
              {{ t('contact.privacy_notice') }}
              <a
                href="/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#0072CE] hover:text-[#FF6B35] underline transition-colors"
              >
                {{ t('footer.privacy_policy') }}
              </a>.
            </p>

          </form>
        </div>

        <!-- INFORMACIÓN Y MAPA -->
        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <MapPin class="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#003366] mb-1">{{ t('contact.info.address_title') }}</h4>
              <p class="text-gray-600 whitespace-pre-line">{{ t('contact.info.address') }}</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <Phone class="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#003366] mb-1">{{ t('contact.info.phone_title') }}</h4>
              <a href="tel:+240222949584" class="text-[#0072CE] hover:text-[#FF6B35] transition-colors">
                {{ t('contact.info.phone') }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <Mail class="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#003366] mb-1">{{ t('contact.info.email_title') }}</h4>
              <a href="mailto:info@labandaguinea.com" class="text-[#0072CE] hover:text-[#FF6B35] transition-colors">
                {{ t('contact.info.email') }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0">
              <Clock class="w-6 h-6 text-[#FF6B35]" />
            </div>
            <div>
              <h4 class="font-semibold text-[#003366] mb-1">{{ t('contact.info.hours_title') }}</h4>
              <p class="text-gray-600 whitespace-pre-line">{{ t('contact.info.hours') }}</p>
            </div>
          </div>

          <div class="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127365.18383098836!2d8.682891!3d3.750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107a4b00c03b5a67%3A0x3b03a9c61b9d2c0a!2sMalabo%2C%20Equatorial%20Guinea!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style="border:0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
