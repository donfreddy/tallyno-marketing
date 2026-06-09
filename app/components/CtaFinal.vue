<template>
  <section
    class="py-24 relative overflow-hidden"
    style="background: linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #7C3AED 100%)"
  >
    <div
      class="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full opacity-15"
      style="background: white"
    />
    <div
      class="absolute bottom-[-80px] left-[-40px] w-[200px] h-[200px] rounded-full opacity-10"
      style="background: white"
    />

    <div class="max-w-6xl mx-auto px-6 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            style="font-size: clamp(28px, 4vw, 44px); font-weight: 800; color: white; letter-spacing: -0.03em; font-family: 'DM Sans', sans-serif; line-height: 1.15; margin-bottom: 16px"
          >
            Prêt à simplifier
            <br />tes comptes ?
          </h2>

          <p
            style="font-size: 17px; color: rgba(255,255,255,0.75); line-height: 1.6; margin-bottom: 32px; font-family: 'DM Sans', sans-serif"
          >
            Rejoins +2 000 utilisateurs qui ont déjà dit au revoir aux "c'est toi qui dois".
            Gratuit, sans carte bancaire.
          </p>

          <div class="flex flex-wrap gap-3">
            <button
              class="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
              style="background: white; color: #18181B; font-family: 'DM Sans', sans-serif; font-weight: 600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div class="text-left">
                <p style="font-size: 10px; opacity: 0.5">Disponible sur</p>
                <p style="font-size: 14px; line-height: 1">App Store</p>
              </div>
            </button>

            <button
              class="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all hover:opacity-90 hover:scale-[1.02]"
              style="background: white; color: #18181B; font-family: 'DM Sans', sans-serif; font-weight: 600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202c.495.28.495 1.116 0 1.396zm-4.45 2.505l-3.542 3.521-3.919-2.218 3.892-2.202 3.569 2.899zm-11.007-3.848l3.919-2.218 3.515 3.493-3.543 3.521-3.891-2.202c-.495-.28-.495-1.116 0-1.396zm4.45-2.505l3.542-3.521 3.919 2.218-3.892 2.202-3.569-2.899z" />
              </svg>
              <div class="text-left">
                <p style="font-size: 10px; opacity: 0.5">Disponible sur</p>
                <p style="font-size: 14px; line-height: 1">Google Play</p>
              </div>
            </button>
          </div>

          <div class="flex items-center gap-4 mt-8">
            <div
              class="w-20 h-20 rounded-2xl flex items-center justify-center p-2"
              style="background: rgba(255,255,255,0.15)"
            >
              <svg viewBox="0 0 40 40" class="w-full h-full" fill="white" opacity="0.9">
                <rect x="0" y="0" width="16" height="16" rx="2" fill="none" stroke="white" stroke-width="2" />
                <rect x="4" y="4" width="8" height="8" />
                <rect x="24" y="0" width="16" height="16" rx="2" fill="none" stroke="white" stroke-width="2" />
                <rect x="28" y="4" width="8" height="8" />
                <rect x="0" y="24" width="16" height="16" rx="2" fill="none" stroke="white" stroke-width="2" />
                <rect x="4" y="28" width="8" height="8" />
                <rect x="24" y="20" width="4" height="4" />
                <rect x="32" y="20" width="4" height="4" />
                <rect x="24" y="28" width="4" height="4" />
                <rect x="32" y="28" width="4" height="4" />
                <rect x="24" y="36" width="4" height="4" />
                <rect x="36" y="36" width="4" height="4" />
              </svg>
            </div>
            <p style="font-size: 13px; color: rgba(255,255,255,0.7); font-family: 'DM Sans', sans-serif">
              Scanne pour télécharger
              <br />directement sur ton téléphone
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <PhoneReferral />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
