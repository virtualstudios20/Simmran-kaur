// Small uppercase label that fades/tracks in above titles.
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { colors, fonts, springs } from '../brand/theme';

export const Kicker: React.FC<{ text: string; color?: string; delay?: number }> = ({
  text,
  color = colors.white,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: springs.smooth });
  return (
    <div
      style={{
        fontFamily: fonts.primary,
        fontWeight: 600,
        fontSize: 38,
        textTransform: 'uppercase',
        color,
        opacity: p,
        letterSpacing: `${interpolate(p, [0, 1], [0.6, 0.3])}em`,
      }}
    >
      {text}
    </div>
  );
};
