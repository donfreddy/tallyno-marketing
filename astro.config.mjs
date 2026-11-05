// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  trailingSlash: "always",
  // Old Nuxt routes, still linked from the stores and the API (upgradeUrl).
  redirects: {
    "/privacy": "/confidentialite/",
    "/terms": "/conditions/",
    "/download": "/telecharger/",
    "/pricing": "/#tarifs",
  },
  integrations: [sitemap({ filter: (page) => !page.includes("/telecharger/") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
