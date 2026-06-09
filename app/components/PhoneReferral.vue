<template>
  <PhoneShell>
    <div class="px-4 pt-4">
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center"
          style="background: #6366F1"
        >
          <span style="color: white; font-size: 14px; font-weight: 700; font-family: 'DM Sans', sans-serif">FL</span>
        </div>
        <div>
          <p style="font-size: 14px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
            Franck L.
          </p>
          <p style="font-size: 10px; color: #71717A; font-family: 'DM Sans', sans-serif">
            Membre depuis Jan 2026
          </p>
        </div>
      </div>

      <div
        class="p-4 rounded-2xl mb-3"
        style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)"
      >
        <div class="flex items-center gap-2 mb-2">
          <span style="font-size: 16px">🎁</span>
          <p style="font-size: 12px; font-weight: 600; color: white; font-family: 'DM Sans', sans-serif">
            Parrainage
          </p>
        </div>
        <p style="font-size: 10px; color: rgba(255,255,255,0.7); margin-bottom: 8px; font-family: 'DM Sans', sans-serif">
          Invitez vos amis, gagnez Premium
        </p>
        <div
          class="flex items-center justify-between p-2 rounded-xl"
          style="background: rgba(255,255,255,0.15)"
        >
          <p style="font-size: 16px; font-weight: 700; color: white; font-family: 'DM Mono', monospace; letter-spacing: 0.1em">
            AL3827
          </p>
          <span style="font-size: 10px; color: rgba(255,255,255,0.8); font-family: 'DM Sans', sans-serif">
            Copier
          </span>
        </div>
      </div>

      <div
        class="p-3 rounded-2xl"
        style="background: white; box-shadow: 0 1px 4px rgba(0,0,0,0.06)"
      >
        <p style="font-size: 11px; font-weight: 600; color: #18181B; margin-bottom: 8px; font-family: 'DM Sans', sans-serif">
          Tes filleuls actifs
        </p>
        <div class="flex items-center gap-2 mb-2">
          <div
            v-for="n in 5"
            :key="n"
            class="flex-1 h-2 rounded-full"
            :style="{ background: n <= 2 ? '#10B981' : '#E4E4E7' }"
          />
        </div>
        <div class="flex items-center justify-between">
          <p style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">
            2/5 pour le badge Early Supporter
          </p>
          <div class="flex items-center gap-1">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10B981"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style="font-size: 9px; color: #10B981; font-family: 'DM Sans', sans-serif">1 mois offert</span>
          </div>
        </div>
      </div>
    </div>
  </PhoneShell>
</template>
