<template>
  <section
    id="pricing"
    class="py-24"
    style="background: white"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full mb-4"
          style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
        >
          Tarifs
        </span>
        <h2
          style="font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
        >
          Simple, transparent, abordable
        </h2>
        <p
          style="font-size: 17px; color: #71717A; margin-top: 12px; font-family: 'DM Sans', sans-serif"
        >
          Tu commences gratuitement. Tu paies seulement si tu veux plus.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <PricingCard
          title="Gratuit"
          price="0 XAF"
          period="pour toujours"
          :features="freeFeatures"
          cta="Commencer gratuitement"
          :highlight="false"
          :badge="null"
        />

        <PricingCard
          title="Premium"
          price="2 500 XAF"
          period="2 500 XAF/mois · ou 25 000 XAF/an"
          :features="premiumFeatures"
          cta="Essayer Premium"
          :highlight="true"
          badge="Le plus populaire"
        />

        <PricingCard
          title="Tontine Pack"
          price="5 000 XAF"
          period="par tontine créée · Paiement unique"
          :features="tontineFeatures"
          cta="Activer les Tontines"
          :highlight="false"
          badge="Paiement unique"
        />
      </div>

      <!-- Pourquoi le Tontine Pack -->
      <div
        class="mt-10 p-6 rounded-3xl text-center"
        style="background: #F8F8FA; border: 1px solid #E4E4E7"
      >
        <p style="font-size: 15px; color: #3F3F46; font-family: 'DM Sans', sans-serif; max-width: 640px; margin: 0 auto">
          Le Tontine Pack est un <strong>paiement unique</strong> valable pour tout le cycle de ta tontine.
          Payé par le président ou partagé entre les membres.
          <span style="color: #10B981; font-weight: 600"> 5 000 XAF à 10 = 500 XAF/personne pour l'année.</span>
        </p>
      </div>

      <div
        class="mt-10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4"
        style="background: #EEF2FF"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center"
            style="background: #4F46E5; font-size: 22px"
          >
            🎁
          </div>
          <div>
            <p style="font-size: 16px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
              Parrainage. Gagne Premium gratuitement
            </p>
            <p style="font-size: 14px; color: #3F3F46; font-family: 'DM Sans', sans-serif">
              1 mois Premium offert à ton 1er filleul · Tontine Pack offert à 3 filleuls actifs
            </p>
          </div>
        </div>
        <button
          class="flex-shrink-0 px-6 py-3 rounded-2xl"
          style="background: #4F46E5; color: white; font-weight: 600; font-size: 14px; font-family: 'DM Sans', sans-serif"
        >
          Inviter mes amis
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const freeFeatures = [
  'Groupes split bill illimités',
  '1 tontine active',
  'Historique 3 mois glissants',
  'Notifications push',
  'Catégories avec emoji',
  'Remboursements en un tap'
]

const premiumFeatures = [
  'Tout ce que fait Tallyno, sans limite',
  'Export PDF & Excel',
  'Historique illimité',
  'Analytics groupe avancés',
  'Multi-admin',
  'Rappels WhatsApp automatisés',
  'Support prioritaire',
  'Feature requests prioritaires'
]

const tontineFeatures = [
  'Débloque les tontines illimitées',
  'Planning des cotisations automatisé',
  'Rappels SMS/WhatsApp automatiques',
  'Suivi des impayés + relances auto',
  'Export CSV du cycle complet'
]
</script>
