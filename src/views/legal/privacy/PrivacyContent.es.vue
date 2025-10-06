<!--
 * PrivacyContent.es.vue — Política de Privacidad
 * Versión profesional internacional para LABANDA Industrie Services.
 * Cumple Ley N.º 1/2016 (Guinea Ecuatorial) + RGPD (UE 2016/679).
 * Incluye tratamiento, derechos, transferencias internacionales y autoridad de control.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <!-- ENCABEZADO -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
      <p class="text-sm text-gray-700">
        En cumplimiento de la Ley N.º 1/2016 de Protección de Datos Personales de Guinea Ecuatorial
        y del Reglamento (UE) 2016/679 (RGPD).
      </p>
    </div>

    <!-- 1. RESPONSABLE -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. Responsable del Tratamiento</h2>
      <div class="bg-gray-50 border-l-4 border-[#003366] p-5 rounded-md">
        <p><strong>Responsable:</strong> LA BANDA INDUSTRIES SERVICES S.L.</p>
        <p><strong>NIF:</strong> 03487LA-23</p>
        <p><strong>Domicilio:</strong> KM5, Edificio LEA1 – Malabo, Guinea Ecuatorial</p>
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p><strong>Teléfono:</strong> +240 555 559 529</p>
        <p><strong>Dominio web:</strong> https://labandaguinea.com</p>
      </div>
      <p class="mt-4">
        LABANDA Industrie Services (en adelante, “LABANDA”) garantiza la confidencialidad y
        seguridad de los datos personales recabados, conforme a las normas nacionales e
        internacionales aplicables.
      </p>
    </section>

    <!-- 2. DATOS RECOPILADOS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Datos Personales que Recopilamos</h2>
      <p>LABANDA recopila únicamente la información necesaria para ofrecer sus servicios:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Datos de identificación: nombre, apellidos, empresa (opcional).</li>
        <li>Datos de contacto: correo electrónico, teléfono (opcional).</li>
        <li>Datos profesionales: tipo de proyecto o solicitud.</li>
        <li>Contenido de los mensajes enviados a través del formulario.</li>
        <li>Datos técnicos: dirección IP, navegador, sistema operativo y cookies técnicas.</li>
      </ul>
    </section>

    <!-- 3. FINALIDAD -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Finalidades del Tratamiento</h2>
      <p>Los datos personales se tratan con las siguientes finalidades legítimas:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Responder consultas o solicitudes enviadas mediante los formularios del sitio web.</li>
        <li>Elaborar presupuestos o propuestas de servicios.</li>
        <li>Establecer y mantener relaciones comerciales o institucionales.</li>
        <li>Garantizar la seguridad técnica y el mantenimiento operativo del sitio web.</li>
        <li>
          Cumplir con obligaciones legales o contractuales derivadas de la relación con el usuario.
        </li>
      </ul>
    </section>

    <!-- 4. BASE LEGAL -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Base Jurídica del Tratamiento</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>
          <strong>Consentimiento expreso:</strong> para el uso de formularios o recepción de
          comunicaciones.
        </li>
        <li>
          <strong>Ejecución de medidas precontractuales:</strong> cuando el usuario solicita un
          presupuesto o información.
        </li>
        <li>
          <strong>Interés legítimo:</strong> garantizar la seguridad de la plataforma y la mejora
          continua.
        </li>
        <li>
          <strong>Cumplimiento legal:</strong> en aquellos casos en los que la normativa lo exija.
        </li>
      </ul>
    </section>

    <!-- 5. CONSERVACIÓN -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">5. Plazos de Conservación</h2>
      <p>LABANDA conservará los datos personales durante los siguientes plazos:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Formularios de contacto:</strong> 12 meses.</li>
        <li><strong>Presupuestos o colaboraciones:</strong> 24 meses.</li>
        <li>
          <strong>Relaciones contractuales:</strong> durante la vigencia del contrato y 5 años
          adicionales por obligaciones legales.
        </li>
        <li>
          <strong>Cookies:</strong> según lo indicado en la
          <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline">
            Política de Cookies </RouterLink
          >.
        </li>
      </ul>
    </section>

    <!-- 6. CESIÓN Y TRANSFERENCIAS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        6. Cesión y Transferencia Internacional de Datos
      </h2>
      <p>
        LABANDA no vende ni cede datos personales a terceros. Solo se compartirán cuando sea
        necesario para el funcionamiento del sitio web o el cumplimiento de obligaciones legales.
      </p>
      <p class="mt-3">
        Determinados servicios (Formspree, Vercel, Cloudinary, Google Maps) pueden implicar
        transferencia internacional de datos fuera de Guinea Ecuatorial. LABANDA garantiza que estos
        proveedores cuentan con cláusulas contractuales tipo y garantías equivalentes al RGPD.
      </p>
    </section>

    <!-- 7. DERECHOS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Derechos del Usuario</h2>
      <p>El titular de los datos podrá ejercer los siguientes derechos:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Acceso:</strong> obtener confirmación sobre el tratamiento de sus datos.</li>
        <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de sus datos personales.</li>
        <li><strong>Oposición:</strong> oponerse a tratamientos basados en interés legítimo.</li>
        <li><strong>Limitación:</strong> restringir temporalmente el tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir los datos en formato estructurado.</li>
      </ul>

      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-6 text-sm">
        <p>
          Para ejercer sus derechos, envíe una solicitud escrita a
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
            info@labandaguinea.com </a
          >, adjuntando copia de un documento de identidad válido. LABANDA responderá en un plazo
          máximo de 30 días hábiles.
        </p>
      </div>
    </section>

    <!-- 8. SEGURIDAD -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">8. Medidas de Seguridad</h2>
      <p>
        LABANDA adopta medidas técnicas y organizativas adecuadas para proteger los datos
        personales:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Cifrado SSL/TLS en todas las comunicaciones.</li>
        <li>Copias de seguridad automáticas y encriptadas.</li>
        <li>Acceso restringido a personal autorizado.</li>
        <li>Auditorías internas periódicas de seguridad.</li>
      </ul>
    </section>

    <!-- 9. AUTORIDAD DE CONTROL -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        9. Autoridad de Control y Resolución de Conflictos
      </h2>
      <p>
        En ausencia de una autoridad nacional formal de protección de datos en Guinea Ecuatorial,
        LABANDA se compromete a cooperar con organismos internacionales y autoridades europeas en
        caso de conflicto o denuncia relativa a la privacidad.
      </p>
      <p class="mt-2">
        Si considera que sus derechos han sido vulnerados, puede contactar con LABANDA o con
        cualquier autoridad competente en materia de protección de datos de la Unión Europea.
      </p>
    </section>

    <!-- 10. MENORES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">10. Protección de Menores</h2>
      <p>
        LABANDA no recopila intencionadamente información de menores de 18 años. En caso de
        detectarse la recepción de datos de un menor sin autorización, estos serán eliminados
        inmediatamente.
      </p>
    </section>

    <!-- 11. MODIFICACIONES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">11. Modificaciones de esta Política</h2>
      <p>
        LABANDA podrá modificar esta Política de Privacidad para adaptarla a cambios legales o
        técnicos. La versión vigente estará siempre disponible en este sitio web e indicará la fecha
        de su última revisión.
      </p>
    </section>

    <!-- 12. CONTACTO -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">12. Contacto</h2>
      <p>Para consultas o reclamaciones sobre privacidad, puede escribir a:</p>
      <div class="bg-gray-50 border-l-4 border-[#FF6B35] p-4 rounded-md mt-4 text-sm">
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p><strong>Dirección postal:</strong> KM5, Edificio LEA1 – Malabo, Guinea Ecuatorial</p>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
