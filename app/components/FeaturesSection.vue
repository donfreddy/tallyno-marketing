<template>
  <section
    id="features"
    class="py-24"
    style="background: #F8F8FA"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full mb-4"
          style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
        >
          Fonctionnalités
        </span>
        <h2
          style="font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
        >
          Tout ce qu'il te faut
        </h2>
        <p
          style="font-size: 17px; color: #71717A; margin-top: 12px; font-family: 'DM Sans', sans-serif; max-width: 480px; margin: 12px auto 0"
        >
          Tallyno, c'est ton carnet de comptes intelligent — gratuit et simple.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="f in features"
          :key="f.title"
          class="p-6 rounded-3xl group hover:scale-[1.02] transition-transform duration-300"
          style="background: white; box-shadow: 0 2px 12px rgba(0,0,0,0.06)"
        >
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
            :style="{ background: f.bg, fontSize: '22px' }"
          >
            {{ f.emoji }}
          </div>
          <h3
            style="font-size: 17px; font-weight: 700; color: #18181B; margin-bottom: 8px; font-family: 'DM Sans', sans-serif"
          >
            {{ f.title }}
          </h3>
          <p
            style="font-size: 15px; color: #71717A; line-height: 1.6; font-family: 'DM Sans', sans-serif"
          >
            {{ f.desc }}
          </p>
        </div>
      </div>

      <p
        class="text-center mt-12"
        style="font-size: 14px; color: #71717A; font-family: 'DM Sans', sans-serif"
      >
        Tallyno n'est
        <strong style="color: #18181B">pas</strong> une banque,
        <strong style="color: #18181B">pas</strong> une appli de paiement.
        <br class="hidden md:block">
        Tu continues à payer comme d'habitude (Orange Money, MTN, espèces) — Tallyno gère juste
        <em>qui doit quoi à qui.</em>
      </p>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    emoji: '👥',
    bg: '#EEF2FF',
    title: 'Multi-groupes + Tontines',
    desc: 'Voyage, coloc, sortie resto, tontine… un espace pour chaque chose. Illimité.'
  },
  {
    emoji: '🏷️',
    bg: '#FFFBEB',
    title: 'Catégories visuelles',
    desc: 'Un emoji, un coup d\'œil, tu sais où va ton argent. Personnalisable.'
  },
  {
    emoji: '✅',
    bg: '#F0FDF4',
    title: 'Remboursement simplifié',
    desc: 'Marquer comme payé en un tap. Envoie le lien de remboursement direct.'
  },
  {
    emoji: '📊',
    bg: '#F5F3FF',
    title: 'Historique & Analytics',
    desc: 'Tes dépenses, tes tendances, tes exports PDF/Excel — tout est là.'
  },
  {
    emoji: '🔔',
    bg: '#FFF1F2',
    title: 'Rappels automatiques',
    desc: 'SMS ou WhatsApp, plus jamais de relance manuelle pour ta tontine.'
  },
  {
    emoji: '🎁',
    bg: '#ECFEFF',
    title: 'Parrainage',
    desc: 'Invite tes amis, débloque Premium et Tontine Pack gratuitement.'
  }
]
</script>
