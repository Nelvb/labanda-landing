<!--
 * PrivacyContent.fr.vue
 * 
 * Version française — Politique de confidentialité.
 * Conforme au RGPD.
 -->

<template>
  <section>
    <div class="bg-[#FF6B35]/10 border-l-4 border-[#FF6B35] p-5 rounded-md mb-10">
      <p class="text-sm text-gray-700"><strong>Dernière mise à jour :</strong> Octobre 2025</p>
      <p class="text-sm text-gray-700">Conforme au Règlement (UE) 2016/679 (RGPD).</p>
    </div>

    <h2 class="text-2xl font-semibold text-[#003366] mb-4">1. Responsable du traitement</h2>
    <p><strong>Responsable :</strong> LABANDA Industrie Services</p>
    <p><strong>Adresse :</strong> Malabo, Guinée Équatoriale</p>
    <p><strong>Email :</strong> info@labandaguinea.com</p>
    <p>
      <strong>Finalité :</strong> Gestion des contacts, devis et communications professionnelles.
    </p>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">2. Données collectées</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Nom et prénom</li>
      <li>Adresse email</li>
      <li>Téléphone</li>
      <li>Données techniques (IP, navigateur, cookies nécessaires)</li>
      <li>Messages envoyés via le formulaire</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">3. Finalités du traitement</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Répondre aux demandes via le formulaire web.</li>
      <li>Élaborer et envoyer des devis.</li>
      <li>Communications professionnelles (avec consentement).</li>
      <li>Améliorer l’expérience utilisateur et la sécurité.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">4. Base légale</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Consentement de l’utilisateur.</li>
      <li>Mesures précontractuelles pour devis.</li>
      <li>Intérêt légitime en matière de sécurité et de prévention des fraudes.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">5. Conservation des données</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Formulaires : jusqu’à 12 mois.</li>
      <li>Devis : jusqu’à 2 ans.</li>
      <li>
        Cookies : selon la
        <RouterLink to="/legal/cookies" class="text-[#FF6B35] hover:underline">
          Politique des cookies </RouterLink
        >.
      </li>
    </ul>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">6. Transmission à des tiers</h2>
    <p>
      LABANDA ne communique pas les données personnelles sauf obligation légale ou contrat de
      prestation (hébergeur, analyse, etc.).
    </p>

    <h2 class="text-2xl font-semibold text-[#003366] mt-10 mb-4">7. Droits de l’utilisateur</h2>
    <p>
      Vous pouvez exercer vos droits d’accès, de rectification, de suppression, d’opposition et de
      portabilité.
    </p>
    <div class="bg-[#003366]/5 border-l-4 border-[#003366] p-4 rounded-md mt-4 text-sm">
      Contact :
      <a href="mailto:info@labandaguinea.com" class="text-[#FF6B35] hover:underline">
        info@labandaguinea.com
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
