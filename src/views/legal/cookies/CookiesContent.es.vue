<!--
 * CookiesContent.es.vue — Política de Cookies
 * Versión profesional internacional para LABANDA Industrie Services.
 * Cumple Ley N.º 1/2016 (Guinea Ecuatorial), RGPD (UE 2016/679) y Directiva ePrivacy 2002/58/CE.
 * Documento técnico-jurídico completo, auditado para transparencia digital.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <!-- ENCABEZADO -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
      <p class="text-sm text-gray-700">
        En cumplimiento de la Ley N.º 1/2016 de Protección de Datos Personales de Guinea Ecuatorial,
        el Reglamento (UE) 2016/679 (RGPD) y la Directiva ePrivacy 2002/58/CE.
      </p>
    </div>

    <!-- 1. QUÉ SON -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
        del usuario para garantizar el funcionamiento técnico del sitio, personalizar la experiencia
        y obtener estadísticas de uso anónimas.
      </p>
      <p class="mt-3">
        LABANDA Industrie Services utiliza cookies propias y de terceros estrictamente necesarias,
        analíticas y funcionales. En ningún caso se emplean para elaborar perfiles comerciales sin
        consentimiento previo.
      </p>
    </section>

    <!-- 2. BASE LEGAL -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Base legal y responsabilidad</h2>
      <p>
        El uso de cookies se basa en el consentimiento del usuario conforme al artículo 6.1.a del
        RGPD y a la Ley N.º 1/2016 de Guinea Ecuatorial. Este consentimiento puede retirarse en
        cualquier momento mediante el banner de configuración o la gestión del navegador.
      </p>
      <p class="mt-3">
        El responsable del tratamiento es <strong>LA BANDA INDUSTRIES SERVICES S.L.</strong>, con
        sede en KM5, Edificio LEA1 – Malabo, Guinea Ecuatorial, correo electrónico
        <strong>info@labandaguinea.com</strong>.
      </p>
    </section>

    <!-- 3. TIPOS DE COOKIES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Tipos de cookies utilizadas</h2>
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">A. Cookies necesarias</h3>
          <p>
            Son imprescindibles para el funcionamiento técnico del sitio web y permiten la
            navegación y el acceso seguro a las secciones.
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>No requieren consentimiento.</li>
            <li>Se eliminan al cerrar el navegador.</li>
            <li>Incluyen cookies de sesión y de seguridad (CSRF, autenticación de formularios).</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">
            B. Cookies analíticas o de rendimiento
          </h3>
          <p>
            Permiten medir y analizar el tráfico del sitio web de forma anónima para mejorar su
            rendimiento.
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Proveedor: Google Analytics (modo anónimo, sin compartir con terceros).</li>
            <li>Duración: hasta 24 meses.</li>
            <li>Finalidad: conocer número de visitantes y comportamiento agregado.</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">C. Cookies funcionales</h3>
          <p>
            Facilitan la personalización recordando idioma, preferencias de país o configuración
            visual del usuario.
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Duración: hasta 12 meses.</li>
            <li>Desactivarlas puede limitar funcionalidades no esenciales.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. COOKIES DE TERCEROS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Cookies de terceros</h2>
      <p>
        Este sitio puede incorporar servicios externos que instalan sus propias cookies bajo sus
        políticas de privacidad y tratamiento.
      </p>
      <div class="overflow-x-auto mt-4">
        <table class="min-w-full border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Proveedor</th>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Finalidad</th>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Duración</th>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Política</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">Google Analytics</td>
              <td class="px-4 py-2">Análisis estadístico del tráfico web</td>
              <td class="px-4 py-2">24 meses</td>
              <td class="px-4 py-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Política de Google</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Cloudinary</td>
              <td class="px-4 py-2">Optimización y entrega de imágenes</td>
              <td class="px-4 py-2">12 meses</td>
              <td class="px-4 py-2">
                <a
                  href="https://cloudinary.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Política de Cloudinary</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Vercel</td>
              <td class="px-4 py-2">Hosting y analítica de rendimiento</td>
              <td class="px-4 py-2">Sesión</td>
              <td class="px-4 py-2">
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Política de Vercel</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 5. GESTIÓN -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        5. Cómo gestionar o desactivar las cookies
      </h2>
      <p>
        El usuario puede aceptar, rechazar o configurar las cookies a través del banner de
        consentimiento o mediante la configuración del navegador. La revocación del consentimiento
        no afectará a la licitud del tratamiento previo.
      </p>
      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-3 text-sm">
        <p class="mb-2 font-semibold">Configuración según navegador:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies.</li>
          <li>
            <strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies y datos del
            sitio.
          </li>
          <li>
            <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios →
            Cookies.
          </li>
        </ul>
      </div>
    </section>

    <!-- 6. TRANSFERENCIA INTERNACIONAL -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">6. Transferencias internacionales</h2>
      <p>
        Algunos proveedores pueden alojar datos fuera de Guinea Ecuatorial (por ejemplo, en la UE o
        EE.UU.). LABANDA garantiza que dichas transferencias se realizan bajo cláusulas
        contractuales tipo y mecanismos de adecuación reconocidos por el RGPD.
      </p>
    </section>

    <!-- 7. CONTACTO -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Contacto</h2>
      <p>Para cualquier consulta sobre el uso de cookies:</p>
      <ul class="mt-2 space-y-1">
        <li>
          <strong>Email:</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline"
            >info@labandaguinea.com</a
          >
        </li>
        <li><strong>Dirección:</strong> KM5, Edificio LEA1 – Malabo, Guinea Ecuatorial</li>
        <li><strong>Teléfono:</strong> +240 555 559 529</li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts"></script>
