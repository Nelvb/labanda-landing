<!--
 * PrivacyContent.es.vue
 * 
 * Versión española — Política de Privacidad.
 * Cumple RGPD y LOPDGDD.
 * Colores: azul (#003366) y naranja (#FF6B35).
 -->

<template>
  <section>
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md mb-10">
      <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
      <p class="text-sm text-gray-700">
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>
    </div>

    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Responsable del Tratamiento</h2>
      <p><strong>Responsable:</strong> LABANDA Industrie Services</p>
      <p><strong>Domicilio:</strong> Malabo, Guinea Ecuatorial</p>
      <p><strong>Email:</strong> info@labandaguinea.com</p>
      <p>
        <strong>Finalidad:</strong> Gestión de contactos, presupuestos y comunicaciones comerciales.
      </p>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Datos Personales Recopilados</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Nombre y apellidos</li>
        <li>Correo electrónico</li>
        <li>Teléfono de contacto</li>
        <li>Datos técnicos (IP, navegador, cookies necesarias)</li>
        <li>Mensajes enviados mediante el formulario</li>
      </ul>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Finalidades del Tratamiento</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Atender consultas o solicitudes recibidas a través del formulario web.</li>
        <li>Elaborar y enviar presupuestos.</li>
        <li>Comunicaciones profesionales o comerciales con consentimiento.</li>
        <li>Mejorar la experiencia del usuario y la seguridad del sitio.</li>
      </ul>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">4. Legitimación del Tratamiento</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Consentimiento del usuario para formularios o suscripción.</li>
        <li>Ejecución de medidas precontractuales.</li>
        <li>Interés legítimo en seguridad y prevención de fraudes.</li>
      </ul>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">5. Conservación de los Datos</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Formularios: hasta 12 meses.</li>
        <li>Presupuestos: hasta 2 años.</li>
        <li>
          Cookies: según la
          <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline">
            Política de Cookies </RouterLink
          >.
        </li>
      </ul>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">6. Cesión de Datos a Terceros</h2>
      <p>
        LABANDA no cederá datos personales salvo obligación legal o prestación de servicios
        contratados con proveedores tecnológicos.
      </p>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">7. Derechos del Usuario</h2>
      <p>
        Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad.
      </p>
      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-4 text-sm">
        Escriba a
        <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
          info@labandaguinea.com
        </a>
        adjuntando copia de su documento de identidad.
      </div>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">8. Medidas de Seguridad</h2>
      <p>
        LABANDA aplica medidas técnicas y organizativas adecuadas: SSL, copias de seguridad, acceso
        restringido y auditorías internas.
      </p>
    </section>

    <section class="mt-10">
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">9. Modificaciones</h2>
      <p>
        LABANDA podrá actualizar esta política para reflejar cambios legales o técnicos. Las
        modificaciones serán publicadas en esta misma página.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
