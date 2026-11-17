// A red bar that wipes in from the left: a recurring brand accent.
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { colors, springs } from '../brand/theme';

export const AccentBar: React.FC<{ width?: number; height?: number; delay?: number; color?: string }> = ({
  width = 260,
  height = 14,
  delay = 0,
  color = colors.red,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: springs.smooth });
  return (
    <div
      style={{
        width,
        height,
        background: color,
        transform: `scaleX(${interpolate(p, [0, 1], [0, 1])})`,
        transformOrigin: 'left center',
      }}
    />
  );
};
