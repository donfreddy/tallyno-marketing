<template>
  <section
    class="py-24"
    style="background: #F8F8FA"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1.5 rounded-full mb-4"
          style="background: #EEF2FF; color: #4F46E5; font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif"
        >
          Ils témoignent
        </span>
        <h2
          style="font-size: clamp(26px, 4vw, 38px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
        >
          Ce qu'ils en pensent
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="p-6 rounded-3xl"
          style="background: white; box-shadow: 0 2px 12px rgba(0,0,0,0.06)"
        >
          <div class="flex gap-1 mb-4">
            <span
              v-for="i in t.stars"
              :key="i"
              style="color: #F59E0B; font-size: 16px"
            >★</span>
          </div>

          <p
            style="font-size: 16px; color: #18181B; line-height: 1.65; margin-bottom: 20px; font-family: 'DM Sans', sans-serif; font-style: italic"
          >
            "{{ t.quote }}"
          </p>

          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              :style="{ background: t.color }"
            >
              <span style="color: white; font-size: 12px; font-weight: 700; font-family: 'DM Sans', sans-serif">
                {{ t.initials }}
              </span>
            </div>
            <div>
              <p style="font-size: 14px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
                {{ t.name }}
              </p>
              <p style="font-size: 12px; color: #71717A; font-family: 'DM Sans', sans-serif">
                {{ t.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'Depuis qu\'on utilise Tallyno dans ma coloc, plus jamais de \'c\'est toi qui dois\' — tout est clair.',
    name: 'Franck L.',
    role: 'Étudiant, Yaoundé',
    initials: 'FL',
    color: '#6366F1',
    stars: 5
  },
  {
    quote: 'Notre tontine de 8 personnes était un cauchemar sur WhatsApp. Maintenant c\'est propre, automatique, sans stress.',
    name: 'Aïcha K.',
    role: 'Commerçante, Douala',
    initials: 'AK',
    color: '#10B981',
    stars: 5
  },
  {
    quote: 'On a fait un voyage à Kribi à 6. Tallyno a géré tous les comptes. Au retour, chacun savait exactement ce qu\'il devait.',
    name: 'Jules M.',
    role: 'Ingénieur, Abidjan',
    initials: 'JM',
    color: '#F59E0B',
    stars: 5
  }
]
</script>
