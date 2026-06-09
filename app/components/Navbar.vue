<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5"
    style="font-family: 'DM Sans', sans-serif"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-xl flex items-center justify-center"
          style="background: #4F46E5"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="5" width="14" height="2" rx="1" fill="white" />
            <rect x="2" y="9" width="10" height="2" rx="1" fill="white" />
            <rect x="2" y="13" width="12" height="2" rx="1" fill="white" />
            <circle cx="14" cy="14" r="2.5" fill="#10B981" />
          </svg>
        </div>
        <span
          class="text-xl"
          style="color: #18181B; font-weight: 700; letter-spacing: -0.02em"
        >
          Tallyno
        </span>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="[label, href] in links"
          :key="href"
          :href="href"
          style="color: #3F3F46; font-weight: 500; font-size: 15px"
          class="hover:opacity-80 transition-opacity"
        >
          {{ label }}
        </a>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <button
          class="px-5 py-2 rounded-full text-sm transition-all hover:opacity-90"
          style="background: #4F46E5; color: white; font-weight: 600; font-size: 14px"
        >
          Télécharger
        </button>
      </div>

      <button
        class="md:hidden p-2"
        @click="open = !open"
        style="color: #18181B"
      >
        <svg v-if="!open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="md:hidden bg-white border-t border-black/5 px-6 py-4 flex flex-col gap-4">
      <a
        v-for="[label, href] in links"
        :key="href"
        :href="href"
        @click="open = false"
        style="color: #3F3F46; font-weight: 500; font-size: 16px"
      >
        {{ label }}
      </a>
      <button
        class="mt-2 w-full py-3 rounded-full"
        style="background: #4F46E5; color: white; font-weight: 600"
      >
        Télécharger Tallyno
      </button>
    </div>
  </nav>
</template>

<script setup>
const open = ref(false)

const links = [
  ['Fonctionnalités', '#features'],
  ['Comment ça marche', '#how'],
  ['Tarifs', '#pricing']
]
</script>
