/**
 * Everything that changes at launch lives here.
 *
 * Placeholders to replace before going live:
 * - `site.url`: the real domain (".example" is a reserved, never-resolving TLD).
 * - `stores.ios`: the App Store id once the app is published.
 * - `site.email`: a mailbox on the real domain.
 */
export const site = {
  name: "Tallyno",
  url: "https://tallyno.example",
  email: "contact@tallyno.example",
  studio: { name: "Lehmora Labs", url: "https://lehmora.com" },
} as const;

export const stores = {
  // Package id from tallyno-mobile/android/app/build.gradle.kts.
  android: "https://play.google.com/store/apps/details?id=com.lehmora.tallyno",
  // Placeholder: replace idXXXXXXXXXX with the App Store id.
  ios: "https://apps.apple.com/cm/app/tallyno/idXXXXXXXXXX",
} as const;

/**
 * Mirrors tallyno-api/src/config/pricing.config.ts and tallyno-api/PRICING.md.
 *
 * - `freeOrganizedTontines`: FREE_MAX_TONTINE_OR_COLLECT, tontines one person
 *   runs at the same time on the free plan. Being a member is unlimited.
 * - `pass.floor` / `pass.cap`: PASS_FLOOR / PASS_CAP, the Tontine Pass price
 *   range for one cycle. The site never shows how the price is computed, only
 *   amounts.
 * - `pass.examples`: whole-cycle prices copied from the table in PRICING.md
 *   (one round per member, one contribution a month). Recompute them there if
 *   any PASS_* value changes.
 * - `trialDays`: TRIAL_DAYS, the Pass is free on a tontine's first cycle for
 *   this many days from its first round.
 * - `foundersOffer`: groups that join during the beta get their whole first
 *   cycle. Turn it off when the beta ends.
 *
 * Automatic reminders are part of the Pass in the API but are not sold until
 * the SMS or WhatsApp channel is live: keep them off this site until then.
 */
export const pricing = {
  currency: "FCFA",
  freeOrganizedTontines: 2,
  pass: {
    floor: 2000,
    cap: 50000,
    examples: [
      { members: 10, contribution: 10000, price: 2000 },
      { members: 12, contribution: 25000, price: 3500 },
      { members: 20, contribution: 50000, price: 19000 },
    ],
  },
  trialDays: 90,
  foundersOffer: true,
} as const;

/** The trial as the copy says it: "les 3 premiers mois". */
export const trialMonths = Math.round(pricing.trialDays / 30);

/** French grouping with a narrow no-break space, as the app displays amounts. */
export function formatAmount(amount: number): string {
  return new Intl.NumberFormat("fr-FR").format(amount).replace(/\s/g, " ");
}
