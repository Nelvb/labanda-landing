/**
 * Type definitions — Tipos globales del proyecto.
 * Contexto: Definiciones centralizadas para componentes y datos.
 * @author Nelson Valero
 * @since v1.0.0
 */

export interface Project {
    id: string
    title: { fr: string; en: string }
    client: string
    location: string
    description: { fr: string; en: string }
    category: 'architecture' | 'urbanism' | 'heritage'
    image: string
    year?: number
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