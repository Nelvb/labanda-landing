/**
 * useCookieConsent.ts
 *
 * Hook global de gestión de consentimiento de cookies para LABANDA Industrie Services.
 * Cumple RGPD con persistencia en localStorage y control de modal.
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
 * Modal de configuración avanzada
 */
const openModal = () => (showModal.value = true)
const closeModal = () => (showModal.value = false)
const saveModalPreferences = () => {
    savePreferences(preferences.value)
    isVisible.value = false
    showModal.value = false
}

/**
 * Hook exportado — inicializa correctamente dentro de un componente
 */
export const useCookieConsent = () => {
    onMounted(() => {
        initConsent()
    })

    return {
        isVisible,
        showModal,
        preferences,
        acceptNecessary,
        acceptAll,
        openModal,
        closeModal,
        saveModalPreferences,
        updatePreference,
    }
}
