<template>
  <PhoneShell>
    <div class="px-4 pt-4 pb-3">
      <p style="font-size: 11px; color: #71717A; font-family: 'DM Sans', sans-serif">Bonjour 👋</p>
      <p style="font-size: 16px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
        Franck L.
      </p>
      <div
        class="mt-3 p-3 rounded-2xl"
        style="background: #4F46E5"
      >
        <p style="font-size: 10px; color: rgba(255,255,255,0.7); font-family: 'DM Sans', sans-serif">
          Balance globale
        </p>
        <p style="font-size: 20px; font-weight: 700; color: white; font-family: 'DM Mono', monospace">
          +54 000 XAF
        </p>
      </div>
    </div>

    <div class="px-4">
      <p style="font-size: 11px; font-weight: 600; color: #71717A; margin-bottom: 8px; font-family: 'DM Sans', sans-serif">
        MES GROUPES
      </p>
      <div class="flex flex-col gap-2">
        <div
          v-for="g in groups"
          :key="g.name"
          class="flex items-center justify-between p-3 rounded-2xl"
          style="background: white; box-shadow: 0 1px 4px rgba(0,0,0,0.06)"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style="background: #F3F4F6; font-size: 16px"
            >
              {{ g.emoji }}
            </div>
            <div>
              <p style="font-size: 12px; font-weight: 600; color: #18181B; font-family: 'DM Sans', sans-serif">
                {{ g.name }}
              </p>
              <p style="font-size: 10px; color: #71717A; font-family: 'DM Sans', sans-serif">
                {{ g.members }} membres
              </p>
            </div>
          </div>
          <p
            :style="{
              fontSize: '11px',
              fontWeight: 600,
              fontFamily: '\'DM Mono\', monospace',
              color: g.positive === true ? '#10B981' : g.positive === false ? '#F43F5E' : '#71717A'
            }"
          >
            {{ g.balance }}
          </p>
        </div>
      </div>
    </div>
  </PhoneShell>
</template>

<script setup>
const groups = [
  { name: 'Coloc Mboa', emoji: '🏠', members: 4, balance: '+12 500 XAF', positive: true },
  { name: 'Voyage Kribi', emoji: '🌴', members: 6, balance: '-3 500 XAF', positive: false },
  { name: 'Go Samedi', emoji: '🍽️', members: 3, balance: '0 XAF', positive: null },
  { name: 'Tontine Mamans', emoji: '💰', members: 8, balance: '+45 000 XAF', positive: true }
]
</script>
