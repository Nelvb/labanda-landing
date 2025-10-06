// src/views/legal/privacy/index.ts
// Export centralizado de las versiones por idioma

import PrivacyContentEs from './PrivacyContent.es.vue'
import PrivacyContentEn from './PrivacyContent.en.vue'
import PrivacyContentFr from './PrivacyContent.fr.vue'
import PrivacyPage from './PrivacyPage.vue'

export const PrivacyContents = {
    es: PrivacyContentEs,
    en: PrivacyContentEn,
    fr: PrivacyContentFr
}

export { PrivacyPage }
