<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden pt-16"
    style="background: #F8F8FA"
  >
    <div
      class="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
      style="background: radial-gradient(circle, #6366F1 0%, transparent 70%)"
    />
    <div
      class="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
      style="background: radial-gradient(circle, #10B981 0%, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto px-6 py-20 w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style="background: #EEF2FF; border: 1px solid #C7D2FE"
          >
            <div class="w-2 h-2 rounded-full" style="background: #10B981" />
            <span
              style="font-size: 13px; font-weight: 600; color: #4F46E5; font-family: 'DM Sans', sans-serif"
            >
              Gratuit — Aucune carte bancaire requise
            </span>
          </div>

          <h1
            style="font-size: clamp(34px, 5vw, 52px); font-weight: 800; color: #18181B; line-height: 1.1; letter-spacing: -0.03em; font-family: 'DM Sans', sans-serif"
          >
            Les comptes entre amis,
            <span
              style="background: linear-gradient(135deg, #4F46E5, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text"
            >
              sans se prendre la tête.
            </span>
          </h1>

          <p
            style="font-size: 18px; color: #3F3F46; line-height: 1.6; margin-top: 20px; margin-bottom: 32px; font-family: 'DM Sans', sans-serif; max-width: 480px"
          >
            Crée un groupe, ajoute tes amis, et suis qui doit quoi — en un clic.
            Sans appli bancaire, sans friction.
          </p>

          <div class="flex flex-wrap gap-3 mb-10">
            <button
              class="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
              style="background: #18181B; color: white; font-family: 'DM Sans', sans-serif; font-weight: 600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div class="text-left">
                <p style="font-size: 10px; opacity: 0.6">Disponible sur</p>
                <p style="font-size: 14px; line-height: 1">App Store</p>
              </div>
            </button>

            <button
              class="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
              style="background: #18181B; color: white; font-family: 'DM Sans', sans-serif; font-weight: 600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.495.28.495 1.116 0 1.396zm-4.45 2.505l-3.542 3.521-3.919-2.218 3.892-2.202 3.569 2.899zm-11.007-3.848l3.919-2.218 3.515 3.493-3.543 3.521-3.891-2.202c-.495-.28-.495-1.116 0-1.396zm4.45-2.505l3.542-3.521 3.919 2.218-3.892 2.202-3.569-2.899z" />
              </svg>
              <div class="text-left">
                <p style="font-size: 10px; opacity: 0.6">Disponible sur</p>
                <p style="font-size: 14px; line-height: 1">Google Play</p>
              </div>
            </button>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex -space-x-2">
              <div
                v-for="(item, i) in avatars"
                :key="i"
                class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                :style="{ background: item.color }"
              >
                <span style="font-size: 10px; color: white; font-weight: 700">{{ item.label }}</span>
              </div>
            </div>
            <p style="font-size: 14px; color: #71717A; font-family: 'DM Sans', sans-serif">
              <strong style="color: #18181B">+2 000</strong> utilisateurs en bêta
            </p>
          </div>
        </div>

        <div class="flex justify-center items-center relative">
          <div
            class="absolute w-[320px] h-[320px] rounded-full opacity-15 pointer-events-none"
            style="border: 2px dashed #6366F1"
          />
          <div
            class="absolute w-[240px] h-[240px] rounded-full opacity-10 pointer-events-none"
            style="background: radial-gradient(circle, #6366F1, transparent)"
          />
          <div class="relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <PhoneHome />
          </div>

          <div
            class="absolute top-8 right-4 px-3 py-2 rounded-2xl hidden md:block"
            style="background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.1); font-family: 'DM Sans', sans-serif"
          >
            <p style="font-size: 10px; color: #71717A">Voyage Kribi</p>
            <p style="font-size: 13px; font-weight: 700; color: #10B981; font-family: 'DM Mono', monospace">
              / So/de
            </p>
          </div>

          <div
            class="absolute bottom-12 left-4 px-3 py-2 rounded-2xl hidden md:block"
            style="background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.1); font-family: 'DM Sans', sans-serif"
          >
            <p style="font-size: 10px; color: #71717A">Aïcha K. te doit</p>
            <p style="font-size: 13px; font-weight: 700; color: #4F46E5; font-family: 'DM Mono', monospace">
              3 500 XAF
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#71717A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </div>
  </section>
</template>

<script setup>
const avatars = [
  { label: 'FL', color: '#6366F1' },
  { label: 'JM', color: '#10B981' },
  { label: 'AK', color: '#F59E0B' },
  { label: 'PB', color: '#F43F5E' },
  { label: 'CY', color: '#8B5CF6' }
]
</script>
