<template>
  <PhoneShell>
    <div class="px-4 pt-4">
      <p style="font-size: 14px; font-weight: 700; color: #18181B; margin-bottom: 12px; font-family: 'DM Sans', sans-serif">
        Nouvelle dépense
      </p>

      <div class="text-center py-4">
        <p style="font-size: 10px; color: #71717A; font-family: 'DM Sans', sans-serif">Montant</p>
        <p style="font-size: 32px; font-weight: 700; color: #18181B; font-family: 'DM Mono', monospace">
          12 000
        </p>
        <p style="font-size: 12px; color: #6366F1; font-family: 'DM Mono', monospace">XAF</p>
      </div>

      <div
        class="p-3 rounded-xl mb-3"
        style="background: #F8F8FA; border: 1px solid #E4E4E7"
      >
        <p style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">Description</p>
        <p style="font-size: 12px; color: #18181B; font-family: 'DM Sans', sans-serif">Courses Sim.</p>
      </div>

      <p style="font-size: 10px; font-weight: 600; color: #71717A; margin-bottom: 6px; font-family: 'DM Sans', sans-serif">
        CATÉGORIE
      </p>
      <div class="flex gap-2 mb-3">
        <div
          v-for="(emoji, i) in categories"
          :key="emoji"
          class="w-8 h-8 rounded-xl flex items-center justify-center"
          :style="{
            background: i === 0 ? '#4F46E5' : '#F3F4F6',
            fontSize: '14px'
          }"
        >
          {{ emoji }}
        </div>
      </div>

      <p style="font-size: 10px; font-weight: 600; color: #71717A; margin-bottom: 6px; font-family: 'DM Sans', sans-serif">
        QUI A PAYÉ
      </p>
      <div class="flex gap-2 mb-4">
        <div
          v-for="p in payers"
          :key="p.name"
          class="flex items-center gap-1 px-2 py-1 rounded-full"
          :style="{
            background: p.selected ? '#EEF2FF' : '#F3F4F6',
            border: p.selected ? '1px solid #6366F1' : '1px solid transparent'
          }"
        >
          <div
            class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            :style="{ background: avatarColors[p.index % avatarColors.length] }"
          >
            <span style="color: white; font-size: 7px; font-weight: 700; font-family: 'DM Sans', sans-serif">
              {{ p.initials }}
            </span>
          </div>
          <span style="font-size: 9px; color: #71717A; font-family: 'DM Sans', sans-serif">
            {{ p.name.split(' ')[0] }}
          </span>
        </div>
      </div>

      <button
        class="w-full py-3 rounded-2xl"
        style="background: #4F46E5; color: white; font-weight: 600; font-size: 13px; font-family: 'DM Sans', sans-serif"
      >
        Ajouter la dépense
      </button>
    </div>
  </PhoneShell>
</template>

<script setup>
const avatarColors = [
  '#6366F1', '#10B981', '#F59E0B', '#F43F5E', '#8B5CF6',
  '#06B6D4', '#EC4899', '#84CC16', '#F97316', '#14B8A6'
]

const categories = ['🛒', '🍽️', '🚗', '🏠', '💊', '✈️']

const payers = [
  { name: 'Jules M.', index: 1, initials: 'JM', selected: true },
  { name: 'Franck L.', index: 0, initials: 'FL', selected: false },
  { name: 'Aïcha K.', index: 2, initials: 'AK', selected: false }
]
</script>
