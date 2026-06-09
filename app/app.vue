<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Mono:wght@400;500&display=swap'
    }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const title = 'Tallyno. Les comptes entre amis, simplifiés.'
const description = 'Partage, suis et équilibre tes dépenses de groupe. Sans cash, sans friction.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtPage />

    <footer
      class="w-full"
      style="background: #18181B; font-family: 'DM Sans', sans-serif"
    >
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div
                class="w-8 h-8 rounded-xl flex items-center justify-center"
                style="background: #4F46E5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="5"
                    width="14"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="10"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <rect
                    x="2"
                    y="13"
                    width="12"
                    height="2"
                    rx="1"
                    fill="white"
                  />
                  <circle
                    cx="14"
                    cy="14"
                    r="2.5"
                    fill="#10B981"
                  />
                </svg>
              </div>
              <span style="color: white; font-size: 20px; font-weight: 700; letter-spacing: -0.02em">
                Tallyno
              </span>
            </div>
            <p style="font-size: 14px; color: #71717A; line-height: 1.65; max-width: 280px">
              Ton carnet de comptes partagé, intelligent.
              Tu gardes le contrôle, on s'occupe du reste.
            </p>
            <div class="flex gap-3 mt-5">
              <a
                href="#"
                class="w-9 h-9 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80"
                style="background: #2D2D2F"
                aria-label="WhatsApp"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                class="w-9 h-9 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80"
                style="background: #2D2D2F"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E1306C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-9 h-9 rounded-xl flex items-center justify-center transition-opacity hover:opacity-80"
                style="background: #2D2D2F"
                aria-label="Twitter / X"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.855L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p style="font-size: 12px; font-weight: 700; color: #52525B; letter-spacing: 0.08em; margin-bottom: 16px">
              PRODUIT
            </p>
            <div class="flex flex-col gap-3">
              <a
                v-for="l in ['Fonctionnalités', 'Comment ça marche', 'Tarifs', 'Télécharger']"
                :key="l"
                href="#"
                style="font-size: 14px; color: #71717A"
                class="hover:text-white transition-colors"
              >
                {{ l }}
              </a>
            </div>
          </div>

          <div>
            <p style="font-size: 12px; font-weight: 700; color: #52525B; letter-spacing: 0.08em; margin-bottom: 16px">
              LÉGAL
            </p>
            <div class="flex flex-col gap-3">
              <a
                v-for="l in ['Conditions d\'utilisation', 'Politique de confidentialité', 'Contact']"
                :key="l"
                href="#"
                style="font-size: 14px; color: #71717A"
                class="hover:text-white transition-colors"
              >
                {{ l }}
              </a>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style="border-top: 1px solid #2D2D2F"
        >
          <p style="font-size: 13px; color: #52525B">
            &copy; 2026 Tallyno. Non-custodial Finance
          </p>
          <p style="font-size: 13px; color: #52525B">
            Fait avec &lt;3 pour l'Afrique Centrale et de l'Ouest
          </p>
        </div>
      </div>
    </footer>
  </UApp>
</template>
