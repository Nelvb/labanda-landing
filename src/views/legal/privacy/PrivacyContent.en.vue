<!--
 * PrivacyContent.en.vue — Privacy Policy
 * International version for LABANDA Industrie Services.
 * Complies with Law No. 1/2016 (Equatorial Guinea) and EU Regulation 2016/679 (GDPR).
 * Structured and legally compliant content, equivalent to EU corporate standards.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <!-- HEADER -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Last updated:</strong> October 2025</p>
      <p class="text-sm text-gray-700">
        In compliance with Law No. 1/2016 on Personal Data Protection of Equatorial Guinea and EU
        Regulation 2016/679 (GDPR).
      </p>
    </div>

    <!-- 1. CONTROLLER -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. Data Controller</h2>
      <div class="bg-gray-50 border-l-4 border-[#003366] p-5 rounded-md">
        <p><strong>Controller:</strong> LA BANDA INDUSTRIES SERVICES S.L.</p>
        <p><strong>Tax ID:</strong> 03487LA-23</p>
        <p><strong>Address:</strong> KM5, Edificio LEA1 – Malabo, Equatorial Guinea</p>
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p><strong>Phone:</strong> +240 555 559 529</p>
        <p><strong>Website:</strong> https://labandaguinea.com</p>
      </div>
      <p class="mt-4">
        LABANDA Industrie Services (hereinafter “LABANDA”) ensures the confidentiality and security
        of all personal data processed through this website in accordance with applicable national
        and international laws.
      </p>
    </section>

    <!-- 2. DATA -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Personal Data Collected</h2>
      <p>
        We collect only the information strictly necessary to deliver our services and respond to
        requests:
      </p>
      <ul class="list-disc pl-6 space-y-2">
        <li>Identification data (name, surname, company – optional).</li>
        <li>Contact details (email address, telephone – optional).</li>
        <li>Professional information (project type or request).</li>
        <li>Content of messages submitted through the contact form.</li>
        <li>Technical data (IP address, browser type, operating system, essential cookies).</li>
      </ul>
    </section>

    <!-- 3. PURPOSE -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Purposes of Processing</h2>
      <p>Personal data are processed for the following legitimate purposes:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li>To respond to inquiries or requests sent via contact forms.</li>
        <li>To prepare budgets, technical proposals, or partnership offers.</li>
        <li>To establish and maintain professional or institutional relationships.</li>
        <li>To ensure the security and maintenance of the website.</li>
        <li>To comply with legal or contractual obligations.</li>
      </ul>
    </section>

    <!-- 4. LEGAL BASIS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Legal Basis for Processing</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Explicit consent:</strong> for form submission and communications.</li>
        <li><strong>Pre-contractual execution:</strong> for budget or information requests.</li>
        <li>
          <strong>Legitimate interest:</strong> to maintain security and improve service quality.
        </li>
        <li><strong>Legal obligation:</strong> when required by applicable regulations.</li>
      </ul>
    </section>

    <!-- 5. RETENTION -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">5. Data Retention Periods</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Contact forms:</strong> 12 months.</li>
        <li><strong>Business proposals:</strong> 24 months.</li>
        <li>
          <strong>Contractual relationships:</strong> contract term + 5 years for legal obligations.
        </li>
        <li>
          <strong>Cookies:</strong> see our
          <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline">
            Cookie Policy </RouterLink
          >.
        </li>
      </ul>
    </section>

    <!-- 6. DISCLOSURE -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        6. Data Disclosure and International Transfers
      </h2>
      <p>
        LABANDA does not sell or share personal data except where required by law or necessary for
        service operation.
      </p>
      <p class="mt-3">
        Some providers (Formspree, Vercel, Cloudinary, Google Maps) may store data outside
        Equatorial Guinea. LABANDA ensures that Standard Contractual Clauses and GDPR-equivalent
        safeguards are in place.
      </p>
    </section>

    <!-- 7. RIGHTS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. User Rights</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Access</strong> – know whether we process your data.</li>
        <li><strong>Rectification</strong> – correct inaccurate data.</li>
        <li><strong>Erasure</strong> – request deletion of your data.</li>
        <li><strong>Restriction</strong> – temporarily limit processing.</li>
        <li><strong>Portability</strong> – receive your data in structured format.</li>
        <li><strong>Objection</strong> – oppose certain processing operations.</li>
      </ul>

      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-6 text-sm">
        <p>
          To exercise your rights, contact
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
            info@labandaguinea.com
          </a>
          and attach a valid ID copy. We will reply within 30 working days.
        </p>
      </div>
    </section>

    <!-- 8. SECURITY -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">8. Security Measures</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>SSL/TLS encryption for all communications.</li>
        <li>Restricted access to authorized personnel only.</li>
        <li>Encrypted and redundant backups.</li>
        <li>Periodic internal security audits and staff training.</li>
      </ul>
    </section>

    <!-- 9. AUTHORITY -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        9. Supervisory Authority and Dispute Resolution
      </h2>
      <p>
        As Equatorial Guinea has no formal data protection authority, LABANDA cooperates voluntarily
        with international and European supervisory bodies in case of claims or investigations.
      </p>
      <p class="mt-2">
        Users may also lodge complaints with any EU data protection authority if they believe their
        rights have been infringed.
      </p>
    </section>

    <!-- 10. MINORS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">10. Protection of Minors</h2>
      <p>
        LABANDA does not intentionally collect data from persons under 18. Any data accidentally
        received from minors will be deleted immediately upon detection.
      </p>
    </section>

    <!-- 11. CHANGES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">11. Policy Updates</h2>
      <p>
        LABANDA may update this Privacy Policy to reflect legal or technical changes. The current
        version will always be available on this website.
      </p>
    </section>

    <!-- 12. CONTACT -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">12. Contact</h2>
      <div class="bg-gray-50 border-l-4 border-[#FF6B35] p-4 rounded-md mt-4 text-sm">
        <p><strong>Email:</strong> info@labandaguinea.com</p>
        <p><strong>Address:</strong> KM5, Edificio LEA1 – Malabo, Equatorial Guinea</p>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
