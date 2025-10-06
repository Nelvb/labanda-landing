<!--
 * Privacy.vue
 * 
 * Página de Política de Privacidad — LABANDA Industrie Services
 * Cumple RGPD y LOPDGDD.
 * Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 * Uso de RouterLink para navegación interna sin recarga (SPA).
 * @since v1.0.0
 * @author Nelson Valero
 -->

<template>
  <main class="min-h-screen bg-white text-gray-800">
    <!-- Header -->
    <section class="bg-[#003366] text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-2">Política de Privacidad</h1>
      <p class="text-blue-100 text-lg">Protección de datos personales conforme al RGPD</p>
    </section>

    <!-- Contenido -->
    <section class="max-w-4xl mx-auto py-16 px-6 space-y-10 leading-relaxed">
      <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
        <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
        <p class="text-sm text-gray-700">
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </div>

      <!-- 1. Responsable -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Responsable del Tratamiento</h2>
        <p><strong>Responsable:</strong> LABANDA Industrie Services</p>
        <p><strong>Domicilio:</strong> Malabo, Guinea Ecuatorial</p>
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p>
          <strong>Finalidad:</strong> Gestión de contactos, presupuestos y comunicaciones
          comerciales.
        </p>
      </section>

      <!-- 2. Datos tratados -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Datos Personales Recopilados</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Teléfono de contacto</li>
          <li>Datos técnicos (IP, navegador, cookies necesarias)</li>
          <li>Mensajes enviados a través del formulario de contacto</li>
        </ul>
      </section>

      <!-- 3. Finalidades -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Finalidades del Tratamiento</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Atender consultas o solicitudes recibidas a través del formulario web.</li>
          <li>Elaborar y enviar presupuestos a potenciales clientes.</li>
          <li>Comunicaciones profesionales o comerciales, previo consentimiento.</li>
          <li>Mejorar la experiencia del usuario y la seguridad del sitio web.</li>
        </ul>
      </section>

      <!-- 4. Legitimación -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">4. Legitimación del Tratamiento</h2>
        <p>El tratamiento de sus datos se basa en:</p>
        <ul class="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Consentimiento del usuario</strong> para el envío de formularios o suscripción a
            comunicaciones.
          </li>
          <li>
            <strong>Ejecución de medidas precontractuales</strong> para atender solicitudes de
            presupuesto.
          </li>
          <li>
            <strong>Interés legítimo</strong> en garantizar la seguridad del sitio y prevenir
            fraudes.
          </li>
        </ul>
      </section>

      <!-- 5. Conservación -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">
          5. Plazo de Conservación de los Datos
        </h2>
        <p>
          Los datos personales se conservarán durante el tiempo necesario para cumplir con la
          finalidad del tratamiento. En concreto:
        </p>
        <ul class="list-disc pl-6 space-y-2 mt-2">
          <li>Formularios de contacto: hasta 12 meses.</li>
          <li>Presupuestos: durante el proceso comercial y hasta 2 años.</li>
          <li>
            Datos técnicos (cookies): según lo indicado en la
            <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline">
              Política de Cookies
            </RouterLink>.
          </li>
        </ul>
      </section>

      <!-- 6. Cesión a terceros -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">6. Cesión de Datos a Terceros</h2>
        <p>
          LABANDA no cederá sus datos personales a terceros, salvo obligación legal o cuando sea
          necesario para la prestación de un servicio contratado (por ejemplo, proveedores
          tecnológicos o de hosting), los cuales actuarán como
          <em>encargados del tratamiento</em> conforme a la normativa vigente.
        </p>
      </section>

      <!-- 7. Derechos del usuario -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">7. Derechos del Usuario</h2>
        <p>Puede ejercer los siguientes derechos en cualquier momento:</p>
        <ul class="list-disc pl-6 space-y-2 mt-2">
          <li>Acceder a sus datos personales.</li>
          <li>Rectificar datos inexactos o incompletos.</li>
          <li>Solicitar su supresión ("derecho al olvido").</li>
          <li>Limitar u oponerse al tratamiento.</li>
          <li>Solicitar la portabilidad de sus datos a otro responsable.</li>
        </ul>

        <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-4 text-sm">
          Para ejercer sus derechos, escriba a
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
            info@labandaguinea.com
          </a>
          adjuntando copia de su documento identificativo.
        </div>
      </section>

      <!-- 8. Medidas de seguridad -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">8. Medidas de Seguridad</h2>
        <p>
          LABANDA aplica medidas técnicas y organizativas adecuadas para proteger los datos
          personales, incluyendo conexiones seguras (SSL), copias de seguridad, acceso restringido y
          auditorías internas.
        </p>
      </section>

      <!-- 9. Modificaciones -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">
          9. Modificaciones de esta Política
        </h2>
        <p>
          LABANDA podrá actualizar esta política en cualquier momento para reflejar cambios legales
          o técnicos. Las modificaciones serán publicadas en esta misma página.
        </p>
      </section>

      <!-- Botón volver -->
      <div class="text-center pt-6">
        <RouterLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-[#003366] text-white rounded-lg hover:bg-[#FF6B35] transition-colors"
        >
          Volver al inicio
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Component name: PrivacyPage
import { RouterLink } from 'vue-router'
</script>
