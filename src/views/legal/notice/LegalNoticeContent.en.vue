<!--
 * LegalNoticeContent.en.vue
 * 
 * Legal Notice content in English — LABANDA Industrie Services.
 * Complies with LSSI-CE and GDPR.
 * @author Nelson Valero
 * @since v1.0.0
 -->

<template>
  <section class="space-y-10 leading-relaxed">
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Last update:</strong> October 2025</p>
      <p class="text-sm text-gray-700">
        In compliance with Law 34/2002, of July 11, on Information Society Services (LSSI-CE).
      </p>
    </div>

    <!-- 1. Company Information -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Company Information</h2>
      <p><strong>Company Name:</strong> LABANDA Industrie Services</p>
      <p><strong>Activity:</strong> Architecture, construction and infrastructure services</p>
      <p><strong>Address:</strong> Malabo, Equatorial Guinea</p>
      <p><strong>Email:</strong> info@labandaguinea.com</p>
      <p><strong>Phone:</strong> +240 222 94 95 84</p>
      <p><strong>Website:</strong> https://labandaguinea.com</p>
    </section>

    <!-- 2. Website Purpose -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Website Purpose</h2>
      <p>
        This website aims to present the professional services and projects of LABANDA Industrie
        Services, as well as facilitate contact between clients, partners and collaborators.
      </p>
    </section>

    <!-- 3. Terms of Use -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Terms of Use</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Access and use of the website is free and voluntary.</li>
        <li>The user agrees to use the site in accordance with the law and good faith.</li>
        <li>
          The use of the site for illegal purposes or contrary to third-party rights is prohibited.
        </li>
        <li>LABANDA is not responsible for the misuse of the information contained on the site.</li>
      </ul>
    </section>

    <!-- 4. Intellectual Property -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">4. Intellectual Property</h2>
      <p>
        All website content — texts, images, logos, brands, structure and design — are property of
        LABANDA or third parties who have authorized their use.
      </p>
      <p>
        Reproduction or distribution without express written authorization from the owner is
        prohibited.
      </p>
    </section>

    <!-- 5. Limitation of Liability -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">5. Limitation of Liability</h2>
      <p>
        LABANDA is not responsible for possible damages or losses derived from improper use of the
        website, service interruptions or errors in published information.
      </p>
    </section>

    <!-- 6. External Links -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">6. External Links</h2>
      <p>
        This site may contain links to third-party websites. LABANDA does not control nor is
        responsible for the content or privacy policies of such sites.
      </p>
    </section>

    <!-- 7. Data Protection -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">7. Data Protection</h2>
      <p>
        The processing of personal data collected through this site is regulated in accordance with
        our
        <RouterLink to="/legal/privacy" class="text-[#FF6B35] hover:underline">
          Privacy Policy </RouterLink
        >.
      </p>
    </section>

    <!-- 8. Applicable Law -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">8. Applicable Law</h2>
      <p>
        This Legal Notice is governed by Spanish and community legislation. Any dispute will be
        submitted to the courts of Madrid, Spain.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
