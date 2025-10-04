/**
 * i18n.ts — Configuración de vue-i18n
 * Contexto: carga de traducciones desde /src/locales (FR/EN).
 * Notas: estructura modular para poder añadir más idiomas en el futuro.
 * @since v1.0.0
 */

import { createI18n } from "vue-i18n"
import fr from "../locales/fr.json"
import en from "../locales/en.json"

const i18n = createI18n({
    legacy: false,
    locale: "fr",          // idioma por defecto
    fallbackLocale: "en",
    messages: {
        fr,
        en
    }
})

export default i18n
