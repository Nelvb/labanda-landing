<!--
 * LegalNoticeContent.fr.vue
 * 
 * Contenu des Mentions Légales en français — LABANDA Industrie Services.
 * Conforme LSSI-CE et RGPD.
 * @author Nelson Valero
 * @since v1.0.0
 -->

<template>
  <section class="space-y-10 leading-relaxed">
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md">
      <p class="text-sm text-gray-700"><strong>Dernière mise à jour:</strong> Octobre 2025</p>
      <p class="text-sm text-gray-700">
        Conformément à la Loi 34/2002, du 11 juillet, sur les Services de la Société de
        l'Information (LSSI-CE).
      </p>
    </div>

    <!-- 1. Informations de l'entreprise -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Informations de l'Entreprise</h2>
      <p><strong>Dénomination sociale:</strong> LABANDA Industrie Services</p>
      <p><strong>Activité:</strong> Services d'architecture, construction et infrastructures</p>
      <p><strong>Adresse:</strong> Malabo, Guinée Équatoriale</p>
      <p><strong>Email:</strong> info@labandaguinea.com</p>
      <p><strong>Téléphone:</strong> +240 222 94 95 84</p>
      <p><strong>Site web:</strong> https://labandaguinea.com</p>
    </section>

    <!-- 2. Objet du site -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">2. Objet du Site Web</h2>
      <p>
        Ce site web a pour objectif de présenter les services professionnels et projets de LABANDA
        Industrie Services, ainsi que de faciliter le contact entre clients, partenaires et
        collaborateurs.
      </p>
    </section>

    <!-- 3. Conditions d'utilisation -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">3. Conditions d'Utilisation</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>L'accès et l'utilisation du site web sont gratuits et volontaires.</li>
        <li>L'utilisateur s'engage à utiliser le site conformément à la loi et à la bonne foi.</li>
        <li>
          L'utilisation du site à des fins illicites ou contraires aux droits de tiers est
          interdite.
        </li>
        <li>
          LABANDA n'est pas responsable de l'utilisation abusive des informations contenues sur le
          site.
        </li>
      </ul>
    </section>

    <!-- 4. Propriété intellectuelle -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">4. Propriété Intellectuelle</h2>
      <p>
        Tous les contenus du site web — textes, images, logos, marques, structure et design — sont
        la propriété de LABANDA ou de tiers qui en ont autorisé l'utilisation.
      </p>
      <p>
        La reproduction ou distribution sans autorisation écrite expresse du titulaire est
        interdite.
      </p>
    </section>

    <!-- 5. Limitation de responsabilité -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">5. Limitation de Responsabilité</h2>
      <p>
        LABANDA n'est pas responsable des dommages ou préjudices découlant d'une utilisation
        incorrecte du site web, d'interruptions de service ou d'erreurs dans les informations
        publiées.
      </p>
    </section>

    <!-- 6. Liens externes -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">6. Liens Externes</h2>
      <p>
        Ce site peut contenir des liens vers des sites web tiers. LABANDA ne contrôle ni n'est
        responsable du contenu ou des politiques de confidentialité de ces sites.
      </p>
    </section>

    <!-- 7. Protection des données -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">7. Protection des Données</h2>
      <p>
        Le traitement des données personnelles collectées via ce site est réglementé conformément à
        notre
        <RouterLink to="/legal/privacy" class="text-[#FF6B35] hover:underline">
          Politique de Confidentialité </RouterLink
        >.
      </p>
    </section>

    <!-- 8. Législation applicable -->
    <section>
      <h2 class="text-2xl font-semibold text-[#003366] mb-4">8. Législation Applicable</h2>
      <p>
        Ces Mentions Légales sont régies par la législation espagnole et communautaire. Tout litige
        sera soumis aux tribunaux de Madrid, Espagne.
      </p>
    </section>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
