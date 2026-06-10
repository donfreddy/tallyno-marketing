<template>
  <div v-html="svg" />
</template>

<script setup lang="ts">
import QRCode from 'qrcode'

const props = defineProps({
  value: { type: String, required: true },
  size: { type: Number, default: 160 },
  bgColor: { type: String, default: '#ffffff' },
  fgColor: { type: String, default: '#18181B' },
  level: { type: String as import('vue').PropType<'L' | 'M' | 'Q' | 'H'>, default: 'M' }
})

const svg = ref('')

onMounted(async () => {
  svg.value = await QRCode.toString(props.value, {
    type: 'svg',
    width: props.size,
    margin: 0,
    color: {
      dark: props.fgColor,
      light: props.bgColor
    },
    errorCorrectionLevel: props.level
  })
})
</script>
