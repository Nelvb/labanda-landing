<!--
 * CookiesContent.fr.vue — Politique de Cookies
 * Version professionnelle internationale pour LABANDA Industrie Services.
 * Conforme à la Loi n° 1/2016 (Guinée équatoriale), au RGPD (UE 2016/679) et à la Directive ePrivacy 2002/58/CE.
 * @author Nelson Valero
 * @since v1.2.0
-->

<template>
  <section class="space-y-12 leading-relaxed">
    <!-- ENTÊTE -->
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Dernière mise à jour :</strong> Octobre 2025</p>
      <p class="text-sm text-gray-700">
        Conformément à la Loi n° 1/2016 sur la protection des données personnelles en Guinée
        équatoriale, au RGPD (UE 2016/679) et à la Directive ePrivacy 2002/58/CE.
      </p>
    </div>

    <!-- 1. QU’EST-CE QU’UN COOKIE -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">1. Qu’est-ce qu’un cookie ?</h2>
      <p>
        Les cookies sont de petits fichiers texte enregistrés sur l’appareil de l’utilisateur lors
        de la visite d’un site web. Ils assurent le bon fonctionnement technique, personnalisent
        l’expérience et fournissent des statistiques anonymes.
      </p>
      <p class="mt-3">
        LABANDA Industrie Services utilise des cookies strictement nécessaires, analytiques et
        fonctionnels. Aucun profil commercial n’est créé sans consentement préalable.
      </p>
    </section>

    <!-- 2. BASE LÉGALE -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">2. Base légale et responsable</h2>
      <p>
        L’utilisation des cookies repose sur le consentement de l’utilisateur conformément à
        l’article 6.1.a du RGPD et à la Loi n° 1/2016 de Guinée équatoriale. Le consentement peut
        être retiré à tout moment via le bandeau de configuration ou les paramètres du navigateur.
      </p>
      <p class="mt-3">
        Responsable du traitement : <strong>LA BANDA INDUSTRIES SERVICES S.L.</strong>, KM5,
        Bâtiment LEA1 – Malabo, Guinée équatoriale. Email : <strong>info@labandaguinea.com</strong>.
      </p>
    </section>

    <!-- 3. TYPES -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">3. Types de cookies utilisés</h2>
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">A. Cookies nécessaires</h3>
          <p>Indispensables au fonctionnement du site et à la sécurité de la navigation.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Ne requièrent pas de consentement.</li>
            <li>Supprimés à la fermeture du navigateur.</li>
            <li>
              Incluent les cookies de session et de sécurité (CSRF, authentification des
              formulaires).
            </li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">B. Cookies analytiques</h3>
          <p>Permettent de mesurer et d’analyser la fréquentation afin d’améliorer le site.</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Fournisseur : Google Analytics (mode anonyme, sans partage de données).</li>
            <li>Durée : jusqu’à 24 mois.</li>
            <li>Objectif : statistiques globales et temps moyen de visite.</li>
          </ul>
        </div>

        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-[#003366] mb-2">C. Cookies fonctionnels</h3>
          <p>Facilitent la navigation personnalisée (langue, région, préférences visuelles).</p>
          <ul class="list-disc pl-6 mt-2 text-sm space-y-1">
            <li>Durée : jusqu’à 12 mois.</li>
            <li>La désactivation peut limiter certaines fonctionnalités.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4. TIERS -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">4. Cookies de tiers</h2>
      <p>
        Ce site peut utiliser des services externes installant leurs propres cookies selon leurs
        politiques respectives.
      </p>
      <div class="overflow-x-auto mt-4">
        <table class="min-w-full border border-gray-200 text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Fournisseur</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Finalité</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Durée</th>
              <th class="px-4 py-2 text-left font-semibold text-gray-600">Politique</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">Google Analytics</td>
              <td class="px-4 py-2">Analyse statistique de l’audience</td>
              <td class="px-4 py-2">24 mois</td>
              <td class="px-4 py-2">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Politique de Google</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Cloudinary</td>
              <td class="px-4 py-2">Optimisation et diffusion d’images</td>
              <td class="px-4 py-2">12 mois</td>
              <td class="px-4 py-2">
                <a
                  href="https://cloudinary.com/privacy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Politique de Cloudinary</a
                >
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Vercel</td>
              <td class="px-4 py-2">Hébergement et analyse de performance</td>
              <td class="px-4 py-2">Session</td>
              <td class="px-4 py-2">
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  class="text-[#FF6B35] hover:underline"
                  >Politique de Vercel</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 5. GESTION -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">
        5. Gestion ou désactivation des cookies
      </h2>
      <p>
        L’utilisateur peut accepter, refuser ou configurer les cookies via le bandeau ou les
        paramètres du navigateur. Le retrait du consentement n’affecte pas la légalité du traitement
        antérieur.
      </p>
      <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-3 text-sm">
        <p class="mb-2 font-semibold">Configuration selon le navigateur :</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies.</li>
          <li>
            <strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies et données du
            site.
          </li>
          <li>
            <strong>Safari :</strong> Préférences → Confidentialité → Gérer les données des sites
            web.
          </li>
          <li>
            <strong>Edge :</strong> Paramètres → Confidentialité, recherche et services → Cookies.
          </li>
        </ul>
      </div>
    </section>

    <!-- 6. TRANSFERT -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">6. Transferts internationaux</h2>
      <p>
        Certains prestataires peuvent héberger des données en dehors de la Guinée équatoriale (dans
        l’UE ou aux États-Unis). LABANDA garantit la conformité à travers des Clauses Contractuelles
        Types et d’autres mécanismes de protection équivalents.
      </p>
    </section>

    <!-- 7. CONTACT -->
    <section>
      <h2 class="text-2xl font-bold text-[#003366] mb-4">7. Contact</h2>
      <ul class="space-y-1">
        <li>
          <strong>Email :</strong>
          <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline"
            >info@labandaguinea.com</a
          >
        </li>
        <li><strong>Adresse :</strong> KM5, Bâtiment LEA1 – Malabo, Guinée équatoriale</li>
        <li><strong>Téléphone :</strong> +240 555 559 529</li>
      </ul>
    </section>
  </section>
</template>
