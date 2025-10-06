<!--
 * LegalNoticeContent.en.vue — Legal Notice
 * Compliant with Law No. 1/2016 (Equatorial Guinea), LSSI-CE 34/2002 and EU Directive 2000/31/EC.
 * Professional bilingual document for international corporate use.
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Last update:</strong> October 2025</p>
      <p class="text-sm text-gray-700">
        In compliance with Law No. 1/2016 on Personal Data Protection of Equatorial Guinea, Law
        34/2002 (LSSI-CE) and EU Directive 2000/31/EC on electronic commerce.
      </p>
    </div>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. Legal Entity Information</h2>
      <ul class="space-y-1">
        <li><strong>Company name:</strong> LABANDA Industrie Services S.L.</li>
        <li>
          <strong>Business activity:</strong> Architecture, urban planning, construction and
          infrastructure.
        </li>
        <li><strong>Address:</strong> KM5, LEA1 Building – Malabo, Equatorial Guinea.</li>
        <li>
          <strong>Email:</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline"
            >info@labandaguinea.com</a
          >
        </li>
        <li><strong>Phone:</strong> +240 555 559 529</li>
        <li>
          <strong>Website:</strong>
          <a href="https://labandaguinea.com" target="_blank" class="text-[#FF6B35] hover:underline"
            >https://labandaguinea.com</a
          >
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Purpose of the Website</h2>
      <p>
        The purpose of this site is to provide institutional and commercial information about
        LABANDA Industrie Services, present its projects and facilitate contact with clients,
        investors and governmental entities.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Conditions of Use</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Access and use of the website imply full acceptance of this Legal Notice.</li>
        <li>Users must use the content lawfully and in good faith.</li>
        <li>
          LABANDA reserves the right to restrict access in case of misuse, hacking or
          non-compliance.
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        4. Intellectual and Industrial Property
      </h2>
      <p>
        All website content —texts, images, code, and design— is the exclusive property of LABANDA
        or its licensors. Unauthorized reproduction or distribution is strictly prohibited.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">5. Limitation of Liability</h2>
      <p>
        LABANDA shall not be held liable for damages caused by improper use of the website, service
        interruptions or inaccuracies in information provided.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">6. External Links</h2>
      <p>
        This site may include links to external third-party websites. LABANDA is not responsible for
        their content or data processing practices.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Data Protection</h2>
      <p>
        Personal data collected via forms or communication channels are processed in accordance with
        our
        <RouterLink to="/legal/privacy" class="text-[#FF6B35] hover:underline"
          >Privacy Policy</RouterLink
        >.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">8. Applicable Law and Jurisdiction</h2>
      <p>
        This Legal Notice is governed by the laws of Equatorial Guinea and international standards.
        In case of dispute, the competent courts shall be those of Malabo (Equatorial Guinea) or,
        alternatively, Madrid (Spain).
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
