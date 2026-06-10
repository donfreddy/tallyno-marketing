<template>
  <div>
    <AppNavbar />

    <main style="background: #F8F8FA; padding-top: 64px">
      <div style="background: white; border-bottom: 1px solid #F3F4F6">
        <div class="max-w-3xl mx-auto px-6 py-16">
          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }">
            <span
              class="inline-block px-4 py-1.5 rounded-full mb-4"
              style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
            >Légal</span>
            <h1
              style="font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: #18181B; letter-spacing: -0.03em; font-family: 'DM Sans', sans-serif; margin-bottom: 12px"
            >Politique de confidentialité</h1>
            <p style="font-size: 16px; color: #71717A; font-family: 'DM Sans', sans-serif">Dernière mise à jour : 10 juin 2026</p>
          </motion.div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-6 py-16">
        <LegalSection title="1. Introduction">
          <p>Tallyno (« nous », « notre ») s'engage à protéger la vie privée de ses utilisateurs. Cette politique décrit quelles données nous collectons, comment nous les utilisons, et vos droits à leur égard.</p>
          <p class="mt-4">En utilisant l'application Tallyno, vous acceptez les pratiques décrites dans ce document.</p>
        </LegalSection>

        <LegalSection title="2. Données collectées">
          <p>Nous collectons les données suivantes :</p>
          <ul class="mt-3 space-y-2 list-disc pl-5">
            <li><strong>Numéro de téléphone</strong> : utilisé comme identifiant unique pour créer votre compte.</li>
            <li><strong>Nom d'affichage</strong> : visible par les membres de vos groupes.</li>
            <li><strong>Données de groupe</strong> : noms de groupes, membres, dépenses, balances. Stockées de manière chiffrée.</li>
            <li><strong>Code de parrainage</strong> : généré automatiquement pour chaque utilisateur.</li>
            <li><strong>Données d'usage anonymisées</strong> : pages consultées, actions effectuées (sans données personnelles).</li>
          </ul>
          <p class="mt-4">Nous ne collectons <strong>pas</strong> : informations bancaires, données de paiement, localisation GPS, contacts téléphoniques (sauf accord explicite).</p>
        </LegalSection>

        <LegalSection title="3. Utilisation des données">
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul class="mt-3 space-y-2 list-disc pl-5">
            <li>Fournir les fonctionnalités de l'application (groupes, dépenses, tontines).</li>
            <li>Envoyer des rappels SMS ou WhatsApp liés à vos groupes (si activé).</li>
            <li>Améliorer l'expérience utilisateur via des données d'usage agrégées.</li>
            <li>Contacter le support client si vous en faites la demande.</li>
          </ul>
          <p class="mt-4">Nous ne vendons <strong>jamais</strong> vos données à des tiers. Nous ne les utilisons pas à des fins publicitaires.</p>
        </LegalSection>

        <LegalSection title="4. Partage des données">
          <p>Vos données peuvent être partagées avec les membres de vos groupes (balances, noms de dépenses) dans le cadre normal du fonctionnement de l'application. En dehors de ce cadre, aucune donnée personnelle n'est transmise à des tiers sans votre consentement explicite.</p>
          <p class="mt-4">Nous pouvons faire appel à des sous-traitants techniques (hébergement, envoi de SMS) soumis à des obligations contractuelles de confidentialité strictes.</p>
        </LegalSection>

        <LegalSection title="5. Sécurité">
          <p>Toutes les données sont transmises via HTTPS et stockées de manière chiffrée. Tallyno est une application non-custodiale : nous n'avons pas accès à votre argent ni à vos comptes bancaires.</p>
        </LegalSection>

        <LegalSection title="6. Vos droits">
          <p>Vous avez le droit de :</p>
          <ul class="mt-3 space-y-2 list-disc pl-5">
            <li>Accéder à vos données personnelles.</li>
            <li>Corriger des informations inexactes.</li>
            <li>Supprimer votre compte et toutes les données associées.</li>
            <li>Exporter vos données dans un format standard.</li>
          </ul>
          <p class="mt-4">Pour exercer ces droits, contactez-nous à <a href="mailto:privacy@tallyno.app" style="color: #4F46E5">privacy@tallyno.app</a>.</p>
        </LegalSection>

        <LegalSection title="7. Contact">
          <p>Pour toute question concernant cette politique, écrivez-nous à <a href="mailto:privacy@tallyno.app" style="color: #4F46E5">privacy@tallyno.app</a>.</p>
        </LegalSection>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
</script>
