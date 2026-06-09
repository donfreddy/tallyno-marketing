<template>
  <div
    class="relative mx-auto overflow-hidden"
    :style="{
      width: '200px',
      height: '400px',
      borderRadius: '28px',
      background: '#F8F8FA',
      boxShadow: '0 0 0 8px #1C1C1E, 0 24px 64px rgba(0,0,0,0.30), 0 0 0 10px #2C2C2E'
    }"
  >
    <div
      class="flex items-center justify-between px-5 pt-3 pb-1"
    >
      <span style="font-size: 9px; font-weight: 600; color: #18181B; font-family: 'DM Sans', sans-serif">
        9:41
      </span>
      <div class="flex gap-1 items-center">
        <div
          class="w-3 h-1.5 rounded-sm"
          style="background: #18181B"
        />
        <div
          class="w-1 h-1 rounded-full"
          style="background: #18181B"
        />
      </div>
    </div>
    <div class="h-full overflow-hidden">
      <slot />
    </div>
  </div>
</template>
