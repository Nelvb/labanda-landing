/**
 * main.ts — Bootstrap de la aplicación LABANDA.
 * Contexto: monta Vue, registra i18n y vue-router.
 * Notas: el orden es importante: primero i18n, luego router, después mount().
 * @author Nelson Valero
 * @since v1.0.0
 */
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import i18n from "./plugins/i18n";
import router from "./router";

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount("#app");
