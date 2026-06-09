<template>
  <div
    class="p-6 rounded-3xl flex flex-col relative"
    :style="{
      background: highlight ? '#4F46E5' : 'white',
      boxShadow: highlight ? '0 16px 48px rgba(79, 70, 229, 0.25)' : '0 2px 12px rgba(0,0,0,0.06)',
      border: highlight ? 'none' : '1px solid #F3F4F6'
    }"
  >
    <div
      v-if="badge"
      class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
      style="background: #EEF2FF; color: #4F46E5; font-size: 12px; font-weight: 700; font-family: 'DM Sans', sans-serif; white-space: nowrap"
    >
      {{ badge }}
    </div>

    <p
      :style="{
        fontSize: '15px',
        fontWeight: 700,
        color: highlight ? 'rgba(255,255,255,0.7)' : '#71717A',
        marginBottom: '8px',
        fontFamily: '\'DM Sans\', sans-serif'
      }"
    >
      {{ title }}
    </p>

    <div class="mb-2">
      <span
        :style="{
          fontSize: '32px',
          fontWeight: 800,
          color: highlight ? 'white' : '#18181B',
          fontFamily: '\'DM Mono\', monospace',
          letterSpacing: '-0.02em'
        }"
      >
        {{ price }}
      </span>
    </div>
    <p
      :style="{
        fontSize: '12px',
        color: highlight ? 'rgba(255,255,255,0.5)' : '#71717A',
        marginBottom: '24px',
        fontFamily: '\'DM Sans\', sans-serif'
      }"
    >
      {{ period }}
    </p>

    <div class="flex flex-col gap-3 mb-8 flex-1">
      <div
        v-for="f in features"
        :key="f"
        class="flex items-start gap-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          :stroke="highlight ? '#A5F3D0' : '#10B981'"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="flex-shrink-0 mt-0.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span
          :style="{
            fontSize: '14px',
            color: highlight ? 'rgba(255,255,255,0.85)' : '#3F3F46',
            fontFamily: '\'DM Sans\', sans-serif'
          }"
        >
          {{ f }}
        </span>
      </div>
    </div>

    <button
      class="w-full py-3 rounded-2xl transition-all hover:opacity-90"
      :style="{
        background: highlight ? 'white' : '#4F46E5',
        color: highlight ? '#4F46E5' : 'white',
        fontWeight: 700,
        fontSize: '14px',
        fontFamily: '\'DM Sans\', sans-serif'
      }"
    >
      {{ cta }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  price: String,
  period: String,
  features: Array,
  cta: String,
  highlight: Boolean,
  badge: { type: String, default: null }
})
</script>
