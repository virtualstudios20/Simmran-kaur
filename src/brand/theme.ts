// Virtual Studios brand system: change it here and every Reel updates.
import { loadFont } from '@remotion/fonts';
import { staticFile } from 'remotion';

// Poppins is bundled in public/fonts/poppins so renders work offline
// and the font can never fail to load mid-render.
export const fontFamily = 'Poppins';
const POPPINS_WEIGHTS = ['400', '600', '700', '800', '900'] as const;
POPPINS_WEIGHTS.forEach((weight) => {
  loadFont({
    family: fontFamily,
    url: staticFile(`fonts/poppins/poppins-latin-${weight}-normal.woff2`),
    weight,
    style: 'normal',
    format: 'woff2',
  });
});

export const colors = {
  red: '#E31E24',
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const fonts = {
  primary: fontFamily,
} as const;

// Instagram Reels format
export const reel = {
  width: 1080,
  height: 1920,
  fps: 60,
  // Keep key text inside this margin so Instagram's UI does not cover it
  safeArea: { top: 220, bottom: 380, side: 80 },
} as const;

// Motion presets: consistent "feel" across all Reels
export const springs = {
  smooth: { damping: 200 }, // no bounce, silky
  snappy: { damping: 20, stiffness: 200 }, // quick with slight overshoot
  bouncy: { damping: 12 }, // playful
} as const;
