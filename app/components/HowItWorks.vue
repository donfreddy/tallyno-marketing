<template>
  <section id="how" class="py-24" style="background: white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full mb-4"
          style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
        >
          Comment ça marche
        </span>
        <h2
          style="font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
        >
          Simple comme bonjour
        </h2>
        <p
          style="font-size: 17px; color: #71717A; margin-top: 12px; font-family: 'DM Sans', sans-serif; max-width: 480px; margin: 12px auto 0"
        >
          Trois étapes, et tes comptes sont sous contrôle.
        </p>
      </div>

      <div class="flex flex-col gap-24">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="grid md:grid-cols-2 gap-12 items-center"
          :class="i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''"
        >
          <div>
            <div
              class="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6"
              style="background: #EEF2FF"
            >
              <span
                style="font-size: 18px; font-weight: 800; color: #4F46E5; font-family: 'DM Mono', monospace"
              >
                {{ step.number }}
              </span>
            </div>
            <h3
              style="font-size: clamp(20px, 3vw, 28px); font-weight: 700; color: #18181B; margin-bottom: 16px; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
            >
              {{ step.title }}
            </h3>
            <p
              style="font-size: 17px; color: #3F3F46; line-height: 1.65; font-family: 'DM Sans', sans-serif"
            >
              {{ step.desc }}
            </p>
          </div>

          <div class="flex justify-center">
            <div class="transform hover:scale-[1.03] transition-transform duration-300">
              <component :is="step.phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    number: '01',
    title: 'Crée un groupe ou une tontine',
    desc: "Ajoute tes amis en 2 secondes par numéro de téléphone. Pas besoin qu'ils aient l'appli — ils reçoivent un SMS.",
    phone: PhoneHome
  },
  {
    number: '02',
    title: 'Ajoute une dépense ou une cotisation',
    desc: 'Qui a payé ? Combien ? On répartit automatiquement entre les membres. Choisissez une catégorie avec emoji.',
    phone: PhoneAddExpense
  },
  {
    number: '03',
    title: 'Suivez qui doit quoi, exportez, analysez',
    desc: 'Solder ? Envoyez le lien de remboursement direct. Vos stats ? Un clic. Export PDF ou Excel à tout moment.',
    phone: PhoneGroup
  }
]
</script>
