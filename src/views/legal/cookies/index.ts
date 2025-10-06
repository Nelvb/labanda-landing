// src/views/legal/cookies/index.ts
// Exportación centralizada de las versiones de CookiesPage por idioma.

import CookiesContentEs from './CookiesContent.es.vue'
import CookiesContentEn from './CookiesContent.en.vue'
import CookiesContentFr from './CookiesContent.fr.vue'
import CookiesPage from './CookiesPage.vue'

export const CookiesContents = {
    es: CookiesContentEs,
    en: CookiesContentEn,
    fr: CookiesContentFr
}

export { CookiesPage }
