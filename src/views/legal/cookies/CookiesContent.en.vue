<!--
 * CookiesContent.en.vue — Cookies Policy
 * Professional international version for LABANDA Industrie Services.
 * Complies with Law No. 1/2016 (Equatorial Guinea), GDPR (EU 2016/679) and ePrivacy Directive 2002/58/EC.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <!-- HEADER -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Last update:</strong> October 2025</p>
      <p class="text-sm text-gray-700">
        In accordance with Equatorial Guinea’s Law No. 1/2016 on Personal Data Protection, the EU
        General Data Protection Regulation (GDPR 2016/679) and the ePrivacy Directive 2002/58/EC.
      </p>
    </div>

    <!-- 1. WHAT ARE COOKIES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on a user’s device when visiting a website. They help
        ensure technical functionality, customize the experience and collect anonymous usage
        statistics.
      </p>
      <p class="mt-3">
        LABANDA Industrie Services uses first-party and third-party cookies that are strictly
        necessary, analytical and functional. They are never used to create commercial profiles
        without consent.
      </p>
    </section>

    <!-- 2. LEGAL BASIS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Legal basis and controller</h2>
      <p>
        Cookie use is based on the user’s consent in accordance with Article 6(1)(a) GDPR and Law
        No. 1/2016 of Equatorial Guinea. Consent can be withdrawn at any time via the cookie banner
        or browser settings.
      </p>
      <p class="mt-3">
        The data controller is <strong>LA BANDA INDUSTRIES SERVICES S.L.</strong>, KM5, LEA1
        Building – Malabo, Equatorial Guinea. Email: <strong>info@labandaguinea.com</strong>.
      </p>
    </section>

    <!-- 3. TYPES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Types of cookies used</h2>
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">A. Necessary cookies</h3>
          <p>Essential for website operation and secure navigation.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Do not require consent.</li>
            <li>Deleted when the browser is closed.</li>
            <li>Include session and security cookies (CSRF, form auth).</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">B. Analytical cookies</h3>
          <p>Used to measure and analyse traffic to improve performance.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Provider: Google Analytics (anonymous mode, no third-party sharing).</li>
            <li>Duration: up to 24 months.</li>
            <li>Purpose: visitor count and aggregated behaviour analysis.</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">C. Functional cookies</h3>
          <p>Allow personalization by remembering language and region preferences.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Duration: up to 12 months.</li>
            <li>Disabling them may limit some features.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. THIRD-PARTY -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Third-party cookies</h2>
      <p>This site may use external services that set their own cookies under their policies.</p>
      <div class="overflow-x-auto mt-4">
        <table class="min-w-full border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Provider</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Purpose</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Duration</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Policy</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">Google Analytics</td>
              <td class="px-4 py-2">Website traffic analytics</td>
              <td class="px-4 py-2">24 months</td>
              <td class="px-4 py-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Google Policy</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Cloudinary</td>
              <td class="px-4 py-2">Image delivery and optimization</td>
              <td class="px-4 py-2">12 months</td>
              <td class="px-4 py-2">
                <a
                  href="https://cloudinary.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Cloudinary Policy</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Vercel</td>
              <td class="px-4 py-2">Hosting and performance metrics</td>
              <td class="px-4 py-2">Session</td>
              <td class="px-4 py-2">
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Vercel Policy</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 5. MANAGEMENT -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">5. How to manage or disable cookies</h2>
      <p>
        Users can accept, reject or configure cookies through the banner or browser settings.
        Withdrawal of consent does not affect previous lawful processing.
      </p>
      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-3 text-sm">
        <p class="mb-2 font-semibold">Browser settings:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies.</li>
          <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and site data.</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage website data.</li>
          <li><strong>Edge:</strong> Settings → Privacy, search and services → Cookies.</li>
        </ul>
      </div>
    </section>

    <!-- 6. INTERNATIONAL TRANSFER -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">6. International data transfers</h2>
      <p>
        Some providers may store data outside Equatorial Guinea (for example within the EU or the
        U.S.). LABANDA ensures adequate protection through EU Standard Contractual Clauses and
        equivalent safeguards.
      </p>
    </section>

    <!-- 7. CONTACT -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Contact</h2>
      <ul class="space-y-1">
        <li>
          <strong>Email:</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline"
            >info@labandaguinea.com</a
          >
        </li>
        <li><strong>Address:</strong> KM5, LEA1 Building – Malabo, Equatorial Guinea</li>
        <li><strong>Phone:</strong> +240 555 559 529</li>
      </ul>
    </section>
  </section>
</template>
