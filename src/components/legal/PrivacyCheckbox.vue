<!--
 * PrivacyCheckbox.vue
 *
 * Checkbox obligatorio para cumplir RGPD en formularios LABANDA Industrie Services.
 * Diseño minimalista, colores corporativos (#003366 y #FF6B35).
 * Incluye enlace a la Política de Privacidad.
 * Se integra en Contact.vue (justo antes del botón de envío).
 -->

<script setup lang="ts">
// No imports needed

interface Props {
  modelValue: boolean
  error?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const toggle = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <div class="mt-4">
    <div class="flex items-start gap-3">
      <input
        id="privacy-consent"
        type="checkbox"
        :checked="props.modelValue"
        @change="toggle"
        required
        class="mt-1 h-4 w-4 text-[#FF6B35] border-gray-300 focus:ring-[#FF6B35] rounded cursor-pointer"
      />
      <label for="privacy-consent" class="text-sm text-gray-700 leading-snug cursor-pointer">
        Acepto la
        <a
          href="/legal/politica-privacidad"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#003366] hover:text-[#FF6B35] underline font-medium transition-colors"
        >
          Política de Privacidad
        </a>
        para que LABANDA pueda responder a mi consulta.
      </label>
    </div>

    <p v-if="props.error" class="mt-2 text-sm text-red-600 flex items-center gap-1">
      <span class="font-bold">!</span> {{ props.error }}
    </p>
  </div>
</template>

<style scoped>
label {
  user-select: none;
}
</style>
