<template>
  <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }">
    <div class="mb-10">
      <h2
        style="font-size: 22px; font-weight: 700; color: #18181B; margin-bottom: 12px; font-family: 'DM Sans', sans-serif; letter-spacing: -0.01em"
      >
        {{ title }}
      </h2>
      <div style="font-size: 16px; color: #3F3F46; line-height: 1.75; font-family: 'DM Sans', sans-serif">
        <slot />
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

defineProps({ title: { type: String, required: true } })
</script>
