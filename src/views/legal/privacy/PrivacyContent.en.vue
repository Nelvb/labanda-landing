<!--
 * PrivacyContent.en.vue
 * 
 * English version — Privacy Policy.
 * Complies with GDPR.
 -->

<template>
  <section>
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md mb-10">
      <p class="text-sm text-gray-700"><strong>Last update:</strong> October 2025</p>
      <p class="text-sm text-gray-700">In compliance with Regulation (EU) 2016/679 (GDPR).</p>
    </div>

    <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Data Controller</h2>
    <p><strong>Controller:</strong> LABANDA Industrie Services</p>
    <p><strong>Address:</strong> Malabo, Equatorial Guinea</p>
    <p><strong>Email:</strong> info@labandaguinea.com</p>
    <p><strong>Purpose:</strong> Managing contacts, estimates, and professional communications.</p>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">2. Collected Data</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Name and surname</li>
      <li>Email address</li>
      <li>Contact phone</li>
      <li>Technical data (IP, browser, required cookies)</li>
      <li>Messages sent through the contact form</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">3. Purpose of Processing</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Responding to inquiries via web form.</li>
      <li>Preparing and sending quotations.</li>
      <li>Professional or commercial communications (with consent).</li>
      <li>Improving user experience and site security.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">4. Legal Basis</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>User consent for forms or subscriptions.</li>
      <li>Pre-contractual measures for quotations.</li>
      <li>Legitimate interest in site security and fraud prevention.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">5. Data Retention</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Contact forms: up to 12 months.</li>
      <li>Quotations: up to 2 years.</li>
      <li>
        Technical data (cookies): as indicated in the
        <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline"
          >Cookies Policy</RouterLink
        >.
      </li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">6. Data Disclosure</h2>
    <p>
      LABANDA will not transfer data to third parties except as legally required or for contracted
      service providers (e.g., hosting, analytics).
    </p>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">7. User Rights</h2>
    <p>
      You may access, rectify, delete, restrict, or oppose the processing of your data, and request
      portability.
    </p>
    <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-4 text-sm">
      Contact:
      <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
        info@labandaguinea.com
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
