<script setup lang="ts">
/**
 * Button.vue — Componente de botón reutilizable
 * Contexto: Botones primarios, secundarios y variantes
 * @author Nelson Valero
 * @since v1.0.0
 */

defineOptions({
  name: 'UiButton',
})
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const { variant = 'primary', size = 'md', disabled = false, type = 'button' } = defineProps<Props>()

const baseClasses = 'inline-flex items-center justify-center font-bold rounded-lg transition'

const variantClasses = {
  primary:
    'bg-[#FF6B35] text-white border-2 border-[#FF6B35] hover:bg-transparent hover:text-[#FF6B35] shadow-lg',
  secondary: 'bg-[#0072CE] hover:bg-[#003366] text-white shadow-lg',
  outline: 'border-2 border-white hover:bg-white hover:text-[#003366] text-white',
  ghost: 'hover:bg-gray-100 text-[#003366]',
}

const sizeClasses = {
  sm: 'px-6 py-2 text-base min-w-[140px]',
  md: 'px-8 py-3 text-xl min-w-[180px]',
  lg: 'px-10 py-4 text-2xl min-w-[220px]',
}

const disabledClasses = 'opacity-50 cursor-not-allowed'
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[baseClasses, variantClasses[variant], sizeClasses[size], disabled && disabledClasses]"
  >
    <slot />
  </button>
</template>
