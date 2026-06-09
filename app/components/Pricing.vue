<template>
  <section id="pricing" class="py-24" style="background: white">
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
          period="par mois · ou 25 000 XAF/an"
          :features="premiumFeatures"
          cta="Essayer Premium"
          :highlight="true"
          badge="Le plus populaire"
        />

        <PricingCard
          title="Tontine Pack"
          price="5 000 XAF"
          period="par cycle — paiement unique"
          :features="tontineFeatures"
          cta="Activer les Tontines"
          :highlight="false"
          badge="Idéal pour les cercles"
        />
      </div>

      <div
        class="mt-10 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4"
        style="background: #EEF2FF"
      >
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center" style="background: #4F46E5; font-size: 22px">
            🎁
          </div>
          <div>
            <p style="font-size: 16px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
              Parrainage — Gagne Premium gratuitement
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
  'Groupes illimités',
  'Membres illimités par groupe',
  'Suivi des dépenses en temps réel',
  'Catégories avec emoji',
  'Remboursements en un tap',
  'Multi-admin par groupe'
]

const premiumFeatures = [
  'Tout le gratuit, sans limite',
  'Export PDF & Excel',
  'Historique illimité',
  'Analytics avancés',
  'Rappels WhatsApp automatisés',
  'Support prioritaire'
]

const tontineFeatures = [
  'Tontines illimitées',
  'Planning des cotisations auto',
  'Rappels SMS & WhatsApp',
  'Suivi des impayés + relances',
  'Export CSV du cycle complet'
]
</script>
