/**
 * useCookieConsent.ts
 *
 * Hook global de gestión de consentimiento de cookies para LABANDA Industrie Services.
 * Implementa persistencia en localStorage y lógica RGPD.
 * Controla visibilidad del banner, preferencias y modal de configuración.
 */

import { ref, onMounted } from 'vue'

/**
 * Tipado de las preferencias de cookies
 */
interface CookiePreferences {
    necessary: boolean
    analytics: boolean
    functional: boolean
}

/**
 * Clave de almacenamiento en localStorage
 */
const STORAGE_KEY = 'labanda-cookie-consent'

/**
 * Estado reactivo global
 */
const isVisible = ref(false)
const showModal = ref(false)
const preferences = ref<CookiePreferences>({
    necessary: true,
    analytics: false,
    functional: false,
})

/**
 * Inicializa el consentimiento leyendo localStorage
 */
const initConsent = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
        isVisible.value = true
    } else {
        preferences.value = JSON.parse(saved)
    }
}

/**
 * Guarda las preferencias en localStorage
 */
const savePreferences = (prefs: CookiePreferences) => {
    preferences.value = prefs
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}

/**
 * Aceptar solo cookies necesarias
 */
const acceptNecessary = () => {
    const prefs = { necessary: true, analytics: false, functional: false }
    savePreferences(prefs)
    isVisible.value = false
    showModal.value = false
}

/**
 * Aceptar todas las cookies
 */
const acceptAll = () => {
    const prefs = { necessary: true, analytics: true, functional: true }
    savePreferences(prefs)
    isVisible.value = false
    showModal.value = false
}

/**
 * Actualiza una preferencia individual (analíticas o funcionales)
 */
const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    preferences.value[key] = value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences.value))
}

/**
 * Abre el modal de configuración avanzada
 */
const openModal = () => {
    showModal.value = true
}

/**
 * Cierra el modal
 */
const closeModal = () => {
    showModal.value = false
}

/**
 * Guarda la configuración personalizada desde el modal
 */
const saveModalPreferences = () => {
    savePreferences(preferences.value)
    isVisible.value = false
    showModal.value = false
}

/**
 * Inicializa en el montaje de la app
 */
onMounted(() => {
    initConsent()
})

/**
 * Hook exportado — utilizable desde cualquier componente
 */
export const useCookieConsent = () => ({
    isVisible,
    showModal,
    preferences,
    acceptNecessary,
    acceptAll,
    openModal,
    closeModal,
    saveModalPreferences,
    updatePreference,
})
