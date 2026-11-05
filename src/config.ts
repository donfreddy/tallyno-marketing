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
 * Prices mirror tallyno-api/src/config/pricing.config.ts (PACT_TONTINE_PRICE,
 * PRICE_MONTH_1, PRICE_MONTH_12) and FREE_MAX_GROUPS / FREE_MAX_MEMBERS.
 *
 * `firstCycleFree` reflects the owner's decision (Nov 2026): the first tontine
 * cycle is free with no member cap. The API does not implement it yet; it must
 * ship before launch or this page overpromises.
 *
 * Two Pass Tontine promises also need API work before FEATURE_PRICING is on:
 * - "unlimited members for the cycle": QuotaService.canAddMember ignores pacts,
 *   so the FREE_MAX_MEMBERS cap still applies to a Pass buyer;
 * - "cycle report in PDF and Excel": the tontine export routes require the
 *   pact feature EXPORT_PDF, missing from TONTINE_PACT_FEATURES.
 */
export const pricing = {
  currency: "FCFA",
  tontinePass: 2500,
  proMonthly: 2000,
  proYearly: 12000,
  freeSplitGroups: 3,
  freeMaxMembers: 5,
  freeHistoryMonths: 3,
  proMaxTontines: 5,
  proMaxMembers: 1000,
  firstCycleFree: true,
} as const;

/** French grouping with a narrow no-break space, as the app displays amounts. */
export function formatAmount(amount: number): string {
  return new Intl.NumberFormat("fr-FR").format(amount).replace(/\s/g, " ");
}
