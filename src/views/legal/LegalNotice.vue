<!--
 * LegalNotice.vue
 * 
 * Página de Aviso Legal — LABANDA Industrie Services.
 * Cumple LSSI-CE y RGPD. Colores corporativos: azul oscuro (#003366) y naranja (#FF6B35).
 * Usa RouterLink para navegación interna sin recarga (SPA).
 * @author Nelson Valero
 * @since v1.0.0
 -->

<template>
  <main class="min-h-screen bg-white text-gray-800">
    <!-- Header -->
    <section class="bg-[#003366] text-white py-16 px-6 text-center">
      <h1 class="text-4xl font-bold mb-2">Aviso Legal</h1>
      <p class="text-blue-100 text-lg">Información legal sobre LABANDA Industrie Services</p>
    </section>

    <!-- Contenido -->
    <section class="max-w-4xl mx-auto py-16 px-6 space-y-10 leading-relaxed">
      <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
        <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
        <p class="text-sm text-gray-700">
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información (LSSI-CE).
        </p>
      </div>

      <!-- 1. Datos del titular -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Datos del Titular</h2>
        <p><strong>Denominación social:</strong> LABANDA Industrie Services</p>
        <p>
          <strong>Actividad:</strong> Servicios de arquitectura, construcción e infraestructuras
        </p>
        <p><strong>Domicilio:</strong> Malabo, Guinea Ecuatorial</p>
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p><strong>Teléfono:</strong> +240 222 94 95 84</p>
        <p><strong>Web:</strong> https://labandaguinea.com</p>
      </section>

      <!-- 2. Objeto -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Objeto del Sitio Web</h2>
        <p>
          Este sitio web tiene como objetivo presentar los servicios profesionales y proyectos de
          LABANDA Industrie Services, así como facilitar el contacto entre clientes, socios y
          colaboradores.
        </p>
      </section>

      <!-- 3. Condiciones de uso -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Condiciones de Uso</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>El acceso y uso del sitio web es gratuito y voluntario.</li>
          <li>El usuario se compromete a utilizar el sitio conforme a la ley y la buena fe.</li>
          <li>
            Se prohíbe el uso del sitio con fines ilícitos o contrarios a los derechos de terceros.
          </li>
          <li>
            LABANDA no se hace responsable del mal uso de la información contenida en el sitio.
          </li>
        </ul>
      </section>

      <!-- 4. Propiedad intelectual -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">4. Propiedad Intelectual</h2>
        <p>
          Todos los contenidos del sitio web —textos, imágenes, logotipos, marcas, estructura y
          diseño— son propiedad de LABANDA o de terceros que han autorizado su uso.
        </p>
        <p>
          Queda prohibida la reproducción o distribución sin autorización expresa por escrito del
          titular.
        </p>
      </section>

      <!-- 5. Limitación de responsabilidad -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">5. Limitación de Responsabilidad</h2>
        <p>
          LABANDA no se hace responsable de los posibles daños o perjuicios derivados del uso
          indebido del sitio web, interrupciones del servicio o errores en la información publicada.
        </p>
      </section>

      <!-- 6. Enlaces externos -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">6. Enlaces Externos</h2>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros. LABANDA no controla ni se
          responsabiliza del contenido o de las políticas de privacidad de dichos sitios.
        </p>
      </section>

      <!-- 7. Protección de datos -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">7. Protección de Datos</h2>
        <p>
          El tratamiento de los datos personales recabados a través de este sitio se regula conforme
          a nuestra
          <RouterLink to="/legal/privacy" class="text-[#FF6B35] hover:underline">
            Política de Privacidad
          </RouterLink>.
        </p>
      </section>

      <!-- 8. Legislación aplicable -->
      <section>
        <h2 class="text-2xl font-semibold text-[#003366] mb-4">8. Legislación Aplicable</h2>
        <p>
          Este Aviso Legal se rige por la legislación española y comunitaria. Cualquier controversia
          se someterá a los juzgados de Madrid, España.
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
import { RouterLink } from 'vue-router'
</script>
