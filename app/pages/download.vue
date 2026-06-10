<template>
  <div>
    <AppNavbar />

    <main style="background: #F8F8FA; padding-top: 64px">
      <!-- Hero -->
      <section
        class="py-24 relative overflow-hidden"
        style="background: linear-gradient(135deg, #4338CA 0%, #6366F1 60%, #7C3AED 100%)"
      >
        <div
          class="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style="background: white"
        />

        <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t()">
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6"
              style="background: rgba(255,255,255,0.15)"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
          </motion.div>

          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t(0.1)">
            <h1
              style="font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: white; letter-spacing: -0.03em; font-family: 'DM Sans', sans-serif; line-height: 1.1; margin-bottom: 16px"
            >
              Télécharge Tallyno
            </h1>
          </motion.div>

          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t(0.2)">
            <p
              style="font-size: 18px; color: rgba(255,255,255,0.75); font-family: 'DM Sans', sans-serif; max-width: 480px; margin: 0 auto 40px"
            >
              Disponible sur iOS et Android. Gratuit, sans carte bancaire. Tes comptes en groupe, enfin simples.
            </p>
          </motion.div>

          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t(0.3)">
            <div class="flex flex-wrap justify-center gap-4">
              <a :href="APP_STORE_URL" target="_blank" rel="noopener noreferrer">
                <button
                  class="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
                  style="background: white; color: #18181B; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                  <div class="text-left">
                    <p style="font-size: 10px; opacity: 0.5">Disponible sur</p>
                    <p style="line-height: 1">App Store</p>
                  </div>
                </button>
              </a>

              <a :href="PLAY_STORE_URL" target="_blank" rel="noopener noreferrer">
                <button
                  class="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
                  style="background: white; color: #18181B; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.495.28.495 1.116 0 1.396zm-4.45 2.505l-3.542 3.521-3.919-2.218 3.892-2.202 3.569 2.899zm-11.007-3.848l3.919-2.218 3.515 3.493-3.543 3.521-3.891-2.202c-.495-.28-.495-1.116 0-1.396zm4.45-2.505l3.542-3.521 3.919 2.218-3.892 2.202-3.569-2.899z" /></svg>
                  <div class="text-left">
                    <p style="font-size: 10px; opacity: 0.5">Disponible sur</p>
                    <p style="line-height: 1">Google Play</p>
                  </div>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <!-- QR Codes -->
      <section class="py-20" style="background: white">
        <div class="max-w-4xl mx-auto px-6">
          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t()">
            <h2
              class="text-center mb-4"
              style="font-size: clamp(22px, 3vw, 32px); font-weight: 700; color: #18181B; letter-spacing: -0.02em; font-family: 'DM Sans', sans-serif"
            >
              Scanne pour télécharger
            </h2>
            <p class="text-center mb-12" style="font-size: 16px; color: #71717A; font-family: 'DM Sans', sans-serif">
              Pointe l'appareil photo de ton téléphone sur le QR code pour ouvrir le store.
            </p>
          </motion.div>

          <div class="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              v-for="(store, i) in stores"
              :key="store.label"
              :initial="{ opacity: 0, y: 28 }"
              :whileInView="{ opacity: 1, y: 0 }"
              :transition="t(0.1 * i)"
            >
              <div
                class="flex flex-col items-center p-8 rounded-3xl"
                style="background: #F8F8FA; border: 1px solid #E4E4E7"
              >
                <div class="flex items-center gap-2 mb-6">
                  <div v-html="store.icon" style="color: #18181B" />
                  <div>
                    <p style="font-size: 16px; font-weight: 700; color: #18181B; font-family: 'DM Sans', sans-serif">
                      {{ store.label }}
                    </p>
                    <p style="font-size: 12px; color: #71717A; font-family: 'DM Sans', sans-serif">
                      {{ store.sublabel }}
                    </p>
                  </div>
                </div>

                <div
                  class="p-4 rounded-2xl mb-4 flex items-center justify-center"
                  style="background: white; box-shadow: 0 4px 20px rgba(0,0,0,0.08)"
                >
                  <QrCode :value="store.url" :size="160" />
                </div>

                <a
                  :href="store.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-center hover:opacity-80 transition-opacity"
                  style="font-size: 13px; color: #4F46E5; font-weight: 600; font-family: 'DM Sans', sans-serif"
                >
                  Ou ouvrir directement →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <!-- Highlights -->
      <section class="py-16" style="background: #F8F8FA">
        <div class="max-w-2xl mx-auto px-6">
          <motion.div :initial="{ opacity: 0, y: 28 }" :whileInView="{ opacity: 1, y: 0 }" :transition="t()">
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="h in highlights"
                :key="h"
                class="flex items-center gap-3"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style="font-size: 15px; color: #3F3F46; font-family: 'DM Sans', sans-serif">
                  {{ h }}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const ease = [0.21, 0.47, 0.32, 0.98] as const
const t = (delay?: number) => ({ duration: 0.6, delay, ease })

const APP_STORE_URL = 'https://apps.apple.com/app/tallyno'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.tallyno'

const highlights = [
  'Gratuit, sans carte bancaire',
  'Fonctionne sur iOS 14+ et Android 8+',
  'Moins de 20 Mo, léger et rapide',
  'Disponible en français'
]

const stores = [
  {
    label: 'App Store',
    sublabel: 'iPhone & iPad (iOS 14+)',
    url: APP_STORE_URL,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>'
  },
  {
    label: 'Google Play',
    sublabel: 'Android 8.0+',
    url: PLAY_STORE_URL,
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.495.28.495 1.116 0 1.396zm-4.45 2.505l-3.542 3.521-3.919-2.218 3.892-2.202 3.569 2.899zm-11.007-3.848l3.919-2.218 3.515 3.493-3.543 3.521-3.891-2.202c-.495-.28-.495-1.116 0-1.396zm4.45-2.505l3.542-3.521 3.919 2.218-3.892 2.202-3.569-2.899z" /></svg>'
  }
]
</script>
