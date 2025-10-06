<!--
 * LegalNoticeContent.es.vue
 * Aviso Legal — LABANDA Industrie Services.
 * Cumple Ley 1/2016 de Guinea Ecuatorial, LSSI-CE 34/2002 y Directiva 2000/31/CE.
 * Redacción internacional para entornos europeos y africanos.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Última actualización:</strong> Octubre 2025</p>
      <p class="text-sm text-gray-700">
        En cumplimiento de la Ley 34/2002 (LSSI-CE), la Ley n.º 1/2016 de Guinea Ecuatorial y el
        Reglamento (UE) 2016/679 (RGPD).
      </p>
    </div>

    <!-- 1. TITULAR -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. Datos del Titular</h2>
      <ul class="space-y-1">
        <li><strong>Nombre legal:</strong> LABANDA Industrie Services S.L.</li>
        <li>
          <strong>Actividad:</strong> Arquitectura, urbanismo, construcción e infraestructuras
          estratégicas.
        </li>
        <li><strong>Domicilio:</strong> KM5, Edificio LEA1 – Malabo, Guinea Ecuatorial.</li>
        <li>
          <strong>Correo electrónico:</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline"
            >info@labandaguinea.com</a
          >
        </li>
        <li><strong>Teléfono:</strong> +240 555 559 529</li>
        <li>
          <strong>Dominio web:</strong>
          <a href="https://labandaguinea.com" target="_blank" class="text-[#FF6B35] hover:underline"
            >https://labandaguinea.com</a
          >
        </li>
      </ul>
    </section>

    <!-- 2. OBJETO -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Objeto del Sitio Web</h2>
      <p>
        Este sitio web tiene por finalidad presentar la actividad empresarial, servicios técnicos y
        proyectos desarrollados por LABANDA Industrie Services, así como ofrecer un canal de
        comunicación seguro con clientes, instituciones y socios internacionales.
      </p>
    </section>

    <!-- 3. CONDICIONES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Condiciones de Uso</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>El acceso y uso del sitio implica la aceptación plena de este Aviso Legal.</li>
        <li>El usuario se compromete a hacer un uso lícito, diligente y conforme a la buena fe.</li>
        <li>
          LABANDA podrá limitar el acceso ante usos indebidos, ataques informáticos o infracciones
          legales.
        </li>
      </ul>
    </section>

    <!-- 4. PROPIEDAD -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los contenidos —textos, imágenes, logotipos, diseños, código y estructura— están
        protegidos por la legislación internacional de propiedad intelectual. Su uso, reproducción o
        distribución sin autorización escrita de LABANDA está expresamente prohibido.
      </p>
    </section>

    <!-- 5. RESPONSABILIDAD -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">5. Limitación de Responsabilidad</h2>
      <p>
        LABANDA no garantiza la ausencia de errores técnicos ni la continuidad del servicio. No será
        responsable de daños derivados de interrupciones, ataques cibernéticos o uso inadecuado de
        la información.
      </p>
    </section>

    <!-- 6. ENLACES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">6. Enlaces a Terceros</h2>
      <p>
        El sitio puede incluir enlaces a sitios externos operados por terceros. LABANDA no asume
        responsabilidad alguna sobre sus contenidos ni políticas de privacidad.
      </p>
    </section>

    <!-- 7. PROTECCIÓN -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Protección de Datos Personales</h2>
      <p>
        Los datos personales recabados a través de formularios o comunicaciones se tratan conforme a
        la
        <RouterLink to="/legal/privacy" class="text-[#FF6B35] hover:underline"
          >Política de Privacidad</RouterLink
        >.
      </p>
    </section>

    <!-- 8. LEY Y JURISDICCIÓN -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        8. Legislación Aplicable y Jurisdicción
      </h2>
      <p>
        Este Aviso Legal se rige por la legislación de Guinea Ecuatorial y la normativa
        internacional aplicable (LSSI-CE y Directiva 2000/31/CE). En caso de conflicto, las partes
        se someterán a los tribunales competentes de Malabo o, subsidiariamente, a los de Madrid
        (España).
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
