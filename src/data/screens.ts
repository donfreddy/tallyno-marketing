/**
 * App screenshots. The files in public/screens are SVG placeholders: capture
 * the real screens, drop the PNG or WebP in public/screens, change `src`, and
 * set `width` / `height` to the file's real pixel size (they give the frame its
 * ratio, so any phone capture fits undistorted).
 */
export interface Screen {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** The app screen to capture (tallyno-mobile). */
  source: string;
}

export const screens = {
  create: {
    src: "/screens/tontine-create.svg",
    width: 1170,
    height: 2532,
    alt: "Écran de Tallyno pour créer une tontine : montant, fréquence et ordre des tours.",
    source: "create_tontine_group_page",
  },
  round: {
    src: "/screens/tontine-round.svg",
    width: 1170,
    height: 2532,
    alt: "Écran de Tallyno montrant le tour en cours : qui a payé, qui a confirmé, qui doit encore.",
    source: "tontine_group_page, onglet Tour",
  },
  debts: {
    src: "/screens/tontine-debts.svg",
    width: 1170,
    height: 2532,
    alt: "Écran de Tallyno listant les dettes du groupe, avec leur montant et leur ancienneté.",
    source: "tontine_group_page, section Dettes",
  },
  balances: {
    src: "/screens/split-balances.svg",
    width: 1170,
    height: 2532,
    alt: "Écran de Tallyno montrant qui doit combien à qui dans un groupe de dépenses partagées.",
    source: "split group, balances_tab",
  },
} satisfies Record<string, Screen>;
