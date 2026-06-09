<template>
  <PhoneShell>
    <div class="px-4 pt-4">
      <div class="flex items-center gap-2 mb-3">
        <div
          class="w-8 h-8 rounded-xl flex items-center justify-center"
          style="background: #EEF2FF; font-size: 16px"
        >
          🏠
        </div>
        <div>
          <p style="font-size: 14px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
            Coloc Mboa
          </p>
          <p style="font-size: 10px; color: #71717A; font-family: 'DM Sans', sans-serif">
            4 membres · Mai 2026
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 mb-3">
        <div
          class="p-2 rounded-xl"
          style="background: #F0FDF4"
        >
          <p style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">
            Tu reçois
          </p>
          <p style="font-size: 13px; font-weight: 700; color: #10B981; font-family: 'DM Mono', monospace">
            12 500 XAF
          </p>
        </div>
        <div
          class="p-2 rounded-xl"
          style="background: #FFF1F2"
        >
          <p style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">
            Tu dois
          </p>
          <p style="font-size: 13px; font-weight: 700; color: #F43F5E; font-family: 'DM Mono', monospace">
            0 XAF
          </p>
        </div>
      </div>

      <p style="font-size: 11px; font-weight: 600; color: #71717A; margin-bottom: 8px; font-family: 'DM Sans', sans-serif">
        DÉPENSES
      </p>
      <div class="flex flex-col gap-2">
        <div
          v-for="e in expenses"
          :key="e.label"
          class="flex items-center justify-between p-2 rounded-xl"
          style="background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.06)"
        >
          <div class="flex items-center gap-2">
            <span style="font-size: 14px">{{ e.emoji }}</span>
            <div>
              <p style="font-size: 11px; font-weight: 600; color: #18181B; font-family: 'DM Sans', sans-serif">
                {{ e.label }}
              </p>
              <p style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">
                {{ e.who }} · {{ e.date }}
              </p>
            </div>
          </div>
          <p style="font-size: 11px; font-weight: 600; color: #18181B; font-family: 'DM Mono', monospace">
            {{ e.amount }} XAF
          </p>
        </div>
      </div>
    </div>
  </PhoneShell>
</template>

<script setup>
const expenses = [
  { label: 'Loyer Mai', emoji: '🏠', who: 'Franck L.', amount: '45 000', date: '01/05', payers: ['FL', 'JM', 'AK'] },
  { label: 'Courses Sim.', emoji: '🛒', who: 'Jules M.', amount: '12 000', date: '03/05', payers: ['JM', 'PB'] },
  { label: 'Internet', emoji: '📶', who: 'Aïcha K.', amount: '5 500', date: '07/05', payers: ['AK', 'FL', 'JM', 'PB'] }
]
</script>
