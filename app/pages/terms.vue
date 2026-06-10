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
            >Conditions d'utilisation</h1>
            <p style="font-size: 16px; color: #71717A; font-family: 'DM Sans', sans-serif">Dernière mise à jour : 10 juin 2026</p>
          </motion.div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-6 py-16">
        <LegalSection title="1. Acceptation des conditions">
          <p>En téléchargeant, installant ou utilisant l'application Tallyno, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser l'application.</p>
        </LegalSection>

        <LegalSection title="2. Description du service">
          <p>Tallyno est une application de suivi de dépenses partagées et de gestion de tontines. Elle permet aux utilisateurs de créer des groupes, d'enregistrer des dépenses communes, et de suivre les balances entre membres.</p>
          <p class="mt-4"><strong>Tallyno n'est pas :</strong></p>
          <ul class="mt-2 space-y-2 list-disc pl-5">
            <li>Un établissement de crédit ou une banque.</li>
            <li>Un prestataire de services de paiement.</li>
            <li>Un service de transfert d'argent.</li>
          </ul>
          <p class="mt-4">Tallyno enregistre et affiche des informations sur les dettes entre membres, mais ne gère, ne détient, ni ne transfère aucun fonds.</p>
        </LegalSection>

        <LegalSection title="3. Compte utilisateur">
          <p>Pour utiliser Tallyno, vous devez créer un compte avec un numéro de téléphone valide. Vous êtes responsable de la confidentialité de votre compte et de toutes les actions effectuées depuis celui-ci.</p>
          <p class="mt-4">Vous vous engagez à ne pas créer de compte pour une autre personne sans son autorisation, et à fournir des informations exactes lors de l'inscription.</p>
        </LegalSection>

        <LegalSection title="4. Utilisation acceptable">
          <p>Vous vous engagez à utiliser Tallyno uniquement à des fins légales. Il est interdit de :</p>
          <ul class="mt-3 space-y-2 list-disc pl-5">
            <li>Utiliser l'application à des fins frauduleuses ou pour tromper d'autres membres.</li>
            <li>Tenter d'accéder aux comptes ou données d'autres utilisateurs sans autorisation.</li>
            <li>Perturber ou compromettre le fonctionnement des serveurs ou du réseau.</li>
            <li>Utiliser l'application pour des activités illégales selon les lois locales applicables.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Plan gratuit et plans payants">
          <p>Tallyno propose une offre gratuite et des offres Premium (2 500 XAF/mois ou 25 000 XAF/an) et Tontine Pack (5 000 XAF/cycle). Les fonctionnalités incluses dans chaque plan sont décrites dans l'application et sur notre site web.</p>
          <p class="mt-4">Les paiements sont finaux. Aucun remboursement n'est accordé pour les périodes entamées, sauf en cas de défaillance technique de notre côté.</p>
        </LegalSection>

        <LegalSection title="6. Programme de parrainage">
          <p>Le programme de parrainage offre des récompenses (mois Premium, Tontine Pack) pour l'invitation de nouveaux utilisateurs. Tallyno se réserve le droit de modifier ou d'interrompre ce programme à tout moment, avec préavis de 30 jours.</p>
          <p class="mt-4">Toute tentative d'abus du programme (faux comptes, auto-parrainage) entraînera la suspension du compte.</p>
        </LegalSection>

        <LegalSection title="7. Limitation de responsabilité">
          <p>Tallyno fournit l'application « en l'état ». Nous ne garantissons pas que le service sera disponible en permanence, exempt d'erreurs ou adapté à un usage particulier.</p>
          <p class="mt-4">Tallyno n'est pas responsable des litiges financiers entre membres d'un groupe. Vous reconnaissez que Tallyno est un outil de suivi, et non un arbitre des dettes entre personnes.</p>
        </LegalSection>

        <LegalSection title="8. Modifications des conditions">
          <p>Nous nous réservons le droit de modifier ces conditions à tout moment. En cas de modification substantielle, nous vous en informerons via l'application ou par SMS avec un préavis de 15 jours. La poursuite de l'utilisation après notification vaut acceptation des nouvelles conditions.</p>
        </LegalSection>

        <LegalSection title="9. Contact">
          <p>Pour toute question concernant ces conditions, contactez-nous à <a href="mailto:legal@tallyno.app" style="color: #4F46E5">legal@tallyno.app</a>.</p>
        </LegalSection>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
</script>
