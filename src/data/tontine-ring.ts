/**
 * Geometry of the hero's tontine ring, in SVG units. Shared by TontineRing,
 * which draws it, and Hero, which spaces the background rings so that one of
 * them runs exactly under the members' orbit.
 */
export const ringGeometry = {
  size: 440,
  radius: 158,
} as const;

/** The orbit radius as a share of the ring's rendered width. */
export const orbitRatio = ringGeometry.radius / ringGeometry.size;
