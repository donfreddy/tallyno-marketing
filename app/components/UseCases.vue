<template>
  <section
    class="py-24"
    style="background: white"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full mb-4"
          style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
        >
          Pour qui ?
        </span>
        <h2
          style="font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
        >
          Pour toutes tes situations
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div
          v-for="c in cases"
          :key="c.label"
          class="p-6 rounded-3xl hover:scale-[1.01] transition-transform duration-300"
          :style="{
            background: 'white',
            border: '1px solid ' + c.color + '22',
            boxShadow: '0 2px 16px rgba(0,0,0,0.05)'
          }"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center"
              :style="{ background: c.bg, fontSize: '22px' }"
            >
              {{ c.emoji }}
            </div>
            <div>
              <span
                class="px-3 py-1 rounded-full"
                :style="{ background: c.bg, color: c.color, fontSize: '12px', fontWeight: 600, fontFamily: '\'DM Sans\', sans-serif' }"
              >
                {{ c.label }}
              </span>
            </div>
          </div>

          <h3
            style="font-size: 20px; font-weight: 700; color: #18181B; margin-bottom: 8px; font-family: 'DM Sans', sans-serif; letter-spacing: -0.01em"
          >
            {{ c.title }}
          </h3>
          <p
            style="font-size: 15px; color: #71717A; line-height: 1.6; margin-bottom: 16px; font-family: 'DM Sans', sans-serif"
          >
            {{ c.desc }}
          </p>

          <div
            class="flex flex-col gap-2 pt-4"
            style="border-top: 1px solid #F3F4F6"
          >
            <div
              v-for="s in c.stats"
              :key="s.label"
              class="flex items-center justify-between"
            >
              <span style="font-size: 13px; color: #71717A; font-family: 'DM Sans', sans-serif">
                {{ s.label }}
              </span>
              <span
                :style="{ fontSize: '13px', fontWeight: 600, color: c.color, fontFamily: '\'DM Mono\', monospace' }"
              >
                {{ s.val }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cases = [
  {
    emoji: '🏠',
    label: 'Coloc',
    title: 'Finis les post-its sur le frigo',
    desc: 'Loyer, courses, internet, électricité — tout se calcule automatiquement. Tu sais toujours ce que tu dois, et ce qu\'on te doit.',
    color: '#6366F1',
    bg: '#EEF2FF',
    stats: [
      { label: 'Loyer Mai', val: '45 000 XAF' },
      { label: 'Internet', val: '5 500 XAF' },
      { label: 'Courses', val: '12 000 XAF' }
    ]
  },
  {
    emoji: '🌴',
    label: 'Voyage',
    title: 'Qui a payé l\'essence ? L\'hôtel ?',
    desc: 'Partez l\'esprit léger. On s\'y retrouve au retour — tout est enregistré pendant le voyage, en temps réel.',
    color: '#10B981',
    bg: '#F0FDF4',
    stats: [
      { label: 'Hôtel', val: '120 000 XAF' },
      { label: 'Essence', val: '18 500 XAF' },
      { label: 'Resto', val: '23 000 XAF' }
    ]
  },
  {
    emoji: '🍽️',
    label: 'Sorties',
    title: 'C\'est toujours toi qui avances ? Fini ça.',
    desc: 'Répartition instantanée après le resto, le ciné ou la boîte. Plus besoin d\'attendre que tout le monde soit d\'accord sur le calcul.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    stats: [
      { label: 'Resto à 5', val: '35 000 XAF' },
      { label: 'Entrée', val: '8 000 XAF' },
      { label: 'Taxi', val: '3 500 XAF' }
    ]
  },
  {
    emoji: '💰',
    label: 'Tontine',
    title: 'Gérez votre cercle simplement',
    desc: 'Planning des cotisations, rappels automatiques SMS/WhatsApp, suivi des impayés. Tout est automatisé.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    stats: [
      { label: 'Cotisation mensuelle', val: '25 000 XAF' },
      { label: 'Membres', val: '8 personnes' },
      { label: 'Prochain tour', val: 'Aïcha K.' }
    ]
  }
]
</script>
