/**
 * i18n.ts — Configuración de vue-i18n (ES/FR/EN)
 * Corrige tipado para TypeScript.
 * @since v1.1.1
 */

import { createI18n } from 'vue-i18n'

// Importa los archivos JSON de traducción
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import en from '../locales/en.json'

// Define la estructura de los mensajes
type MessageSchema = typeof es

const i18n = createI18n<[MessageSchema], 'es' | 'fr' | 'en'>({
    legacy: false,
    locale: 'es',          // 🇪🇸 idioma por defecto
    fallbackLocale: 'en',  // 🇬🇧 respaldo
    messages: {
        es: es as MessageSchema,
        fr: fr as MessageSchema,
        en: en as MessageSchema
    }
})

export default i18n
