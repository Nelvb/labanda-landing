/**
 * useProjectTranslations.ts — Composable para manejo robusto de traducciones de proyectos
 * Contexto: Sistema centralizado y type-safe para acceso a traducciones
 * @author Nelson Valero
 * @since v1.0.0
 */

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Project, SupportedLocale, TranslatableField } from '@/types'

/**
 * Composable para manejo seguro de traducciones de proyectos
 * Proporciona métodos type-safe para acceder a campos traducibles
 */
export function useProjectTranslations() {
    const { locale } = useI18n()

    /**
     * Obtiene el idioma actual de forma segura
     * Garantiza que siempre retorne un idioma válido
     */
    const currentLocale = computed((): SupportedLocale => {
        const current = locale.value
        const parts = current.split('-')
        const lang = parts[0] as SupportedLocale

        // Validar que el idioma esté soportado
        if (lang === 'es' || lang === 'en' || lang === 'fr') {
            return lang
        }

        // Fallback seguro
        return 'en'
    })

    /**
     * Obtiene el valor traducido de un campo con fallback seguro
     * @param field Campo traducible
     * @param fallbackLocale Idioma de fallback (opcional)
     * @returns Valor traducido o fallback
     */
    const getTranslatedValue = <T extends TranslatableField>(
        field: T,
        fallbackLocale: SupportedLocale = 'en'
    ): string => {
        const current = currentLocale.value

        // Intentar con el idioma actual
        if (field[current]) {
            return field[current]
        }

        // Fallback al idioma especificado
        if (field[fallbackLocale]) {
            return field[fallbackLocale]
        }

        // Último recurso: usar el primer idioma disponible
        const availableLocales = Object.keys(field) as SupportedLocale[]
        if (availableLocales.length > 0) {
            const firstLocale = availableLocales[0] as SupportedLocale
            return field[firstLocale] || ''
        }

        // Si todo falla, retornar string vacío
        return ''
    }

    /**
     * Obtiene el título del proyecto traducido
     */
    const getProjectTitle = (project: Project): string => {
        return getTranslatedValue(project.title)
    }

    /**
     * Obtiene la categoría del proyecto traducida
     */
    const getProjectCategory = (project: Project): string => {
        return getTranslatedValue(project.category)
    }

    /**
     * Obtiene la ubicación del proyecto traducida
     */
    const getProjectLocation = (project: Project): string => {
        return getTranslatedValue(project.location)
    }

    /**
     * Obtiene la descripción del proyecto traducida
     */
    const getProjectDescription = (project: Project): string => {
        return getTranslatedValue(project.description)
    }

    /**
     * Obtiene el cliente del proyecto traducido
     */
    const getProjectClient = (project: Project): string => {
        return getTranslatedValue(project.client)
    }

    /**
     * Obtiene el label de una estadística traducido
     */
    const getStatLabel = (stat: { label: TranslatableField }): string => {
        return getTranslatedValue(stat.label)
    }

    return {
        currentLocale,
        getTranslatedValue,
        getProjectTitle,
        getProjectCategory,
        getProjectLocation,
        getProjectDescription,
        getProjectClient,
        getStatLabel
    }
}
