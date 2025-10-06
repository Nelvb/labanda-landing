<!--
 * CookiesContent.en.vue
 * 
 * English version — Cookie Policy.
 * Complies with GDPR and ePrivacy Directive.
 * Corporate colors: navy blue (#003366) and orange (#FF6B35).
 * Author: Nelson Valero
 * Since: v1.0.0
 -->

<template>
  <section class="space-y-10 leading-relaxed">
    <!-- Update notice -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Last update:</strong> October 2025</p>
      <p class="text-sm text-gray-700">
        In compliance with the 2009/136/EC Directive and the General Data Protection Regulation
        (GDPR).
      </p>
    </div>

    <!-- 1. What are cookies -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device by websites. They help remember
        preferences, improve browsing experience, and collect anonymous statistical data.
      </p>
      <p class="mt-3">
        LABANDA Industrie Services uses strictly necessary, analytical, and functional cookies.
      </p>
    </section>

    <!-- 2. Types of cookies -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Types of cookies we use</h2>

      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-3">🔧 Necessary cookies</h3>
          <p>These cookies are essential for the proper functioning of the website.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Enable navigation and access to secure areas.</li>
            <li>Do not require prior consent.</li>
            <li>Automatically deleted when closing the browser.</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-3">📊 Analytical cookies</h3>
          <p>
            Help us understand how users interact with the site, to improve performance and content.
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Google Analytics (anonymous usage, no third-party sharing).</li>
            <li>Maximum duration: 24 months.</li>
            <li>Measure visits and average time on page.</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-3">⚙️ Functional cookies</h3>
          <p>
            Allow personalized browsing by remembering user preferences (language, layout, region,
            etc.).
          </p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Duration: up to 12 months.</li>
            <li>Disabling them may limit some functionalities.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3. Third-party cookies -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Third-party cookies</h2>
      <p>
        This site may use external services that set their own cookies, under their respective
        privacy policies.
      </p>

      <div class="overflow-x-auto mt-4">
        <table class="min-w-full border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Provider</th>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">Purpose</th>
              <th class="text-left px-4 py-2 font-semibold text-gray-600">More info</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">Google Analytics</td>
              <td class="px-4 py-2">Statistical traffic analysis</td>
              <td class="px-4 py-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                >
                  Google Policy
                </a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Cloudinary</td>
              <td class="px-4 py-2">Image optimization and management</td>
              <td class="px-4 py-2">
                <a
                  href="https://cloudinary.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                >
                  Cloudinary Policy
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 4. Managing cookies -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">
        4. How to manage or disable cookies
      </h2>
      <p>
        You can accept, reject, or configure cookie use through the cookie banner or your browser
        settings.
      </p>

      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-3 text-sm">
        <p class="mb-2"><strong>By browser:</strong></p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Google Chrome:</strong> Settings → Privacy & Security → Cookies.</li>
          <li>
            <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data.
          </li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage website data.</li>
          <li>
            <strong>Microsoft Edge:</strong> Settings → Privacy, search and services → Cookies.
          </li>
        </ul>
      </div>
    </section>

    <!-- 5. Contact -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">5. Contact</h2>
      <p>If you have any questions about our Cookie Policy, you can contact us:</p>
      <ul class="list-none mt-2 space-y-1">
        <li>
          <strong>Email:</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
            info@labandaguinea.com
          </a>
        </li>
        <li><strong>Phone:</strong> +240 222 94 95 84</li>
        <li><strong>Address:</strong> Malabo, Equatorial Guinea</li>
      </ul>
    </section>
  </section>
</template>
