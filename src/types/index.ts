/**
 * Type definitions — Tipos globales del proyecto.
 * Contexto: Definiciones centralizadas para componentes y datos.
 * @author Nelson Valero
 * @since v1.0.0
 */

// Tipos para idiomas soportados
export type SupportedLocale = 'es' | 'en' | 'fr'

// Tipo para campos traducibles
export type TranslatableField = {
    [K in SupportedLocale]: string
}

// Tipo para estadísticas de proyecto
export interface ProjectStat {
    label: TranslatableField
    value: string
}

// Tipo principal para proyectos
export interface Project {
    id: string
    slug: string
    image: string
    category: TranslatableField
    title: TranslatableField
    location: TranslatableField
    year: string
    client: TranslatableField
    description: TranslatableField
    stats: ProjectStat[]
}

export interface Service {
    id: string
    title: { fr: string; en: string }
    description: { fr: string; en: string }
    icon: string
}

export interface FAQItem {
    id: string
    question: { fr: string; en: string }
    answer: { fr: string; en: string }
    category: string
}

export interface StatItem {
    value: number
    target: number
    label: string
    suffix: string
}