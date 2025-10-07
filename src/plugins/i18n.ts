/**
 * i18n.ts — Configuración de vue-i18n (ES/FR/EN)
 * Sistema de internacionalización trilingüe con persistencia en localStorage.
 * Incluye detección automática inicial del idioma del navegador (solo primera carga)
 * y preferencia guardada del usuario en localStorage.
 * @since v1.2.1
 * @author Nelson Valero
 */

import { createI18n } from 'vue-i18n'

// Importa los archivos JSON de traducción
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import en from '../locales/en.json'

// Define la estructura de los mensajes (basada en es.json)
type MessageSchema = typeof es

// Detección y persistencia del idioma
const getInitialLocale = (): 'es' | 'fr' | 'en' => {
    // 1. Idioma guardado en localStorage
    const saved = localStorage.getItem('lang')
    if (saved && ['es', 'fr', 'en'].includes(saved)) {
        return saved as 'es' | 'fr' | 'en'
    }

    // 2. Idioma del navegador (solo primera carga)
    const browserLang = navigator.language.slice(0, 2)
    if (['es', 'fr', 'en'].includes(browserLang)) {
        return browserLang as 'es' | 'fr' | 'en'
    }

    // 3. Idioma por defecto
    return 'es'
}

// Instancia principal de i18n
const i18n = createI18n<[MessageSchema], 'es' | 'fr' | 'en'>({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: {
        es: es as MessageSchema,
        fr: fr as MessageSchema,
        en: en as MessageSchema,
    },
})

export default i18n
