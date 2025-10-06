/**
 * router/index.ts — Definición de rutas principales.
 * Contexto: routing mínimo para landing (Home) y páginas legales.
 * Notas: escalable y organizado por carpetas /views/legal.
 * @since v1.0.0
 * @author Nelson Valero
 */

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/legal/cookies',
        name: 'Cookies',
        component: () => import('../views/legal/cookies/CookiesPage.vue'),
    },
    {
        path: '/legal/privacy',
        name: 'Privacy',
        component: () => import('../views/legal/privacy/PrivacyPage.vue'),
    },
    {
        path: '/legal/legal-notice',
        name: 'LegalNotice',
        component: () => import('../views/legal/notice/LegalNoticePage.vue'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) return { el: to.hash, behavior: 'smooth' };
        return { top: 0, behavior: 'smooth' };
    },
});

export default router;
