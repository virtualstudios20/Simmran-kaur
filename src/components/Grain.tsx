// Subtle animated film grain using deterministic noise: adds a cinematic texture.
import React, { useMemo } from 'react';
import { AbsoluteFill, random, useCurrentFrame } from 'remotion';

export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.06 }) => {
  const frame = useCurrentFrame();
  // Change the grain pattern every 2 frames (film-like, not jittery)
  const seed = Math.floor(frame / 2);
  const offset = useMemo(
    () => ({ x: random(`gx-${seed}`) * 200, y: random(`gy-${seed}`) * 200 }),
    [seed],
  );
  return (
    <AbsoluteFill style={{ pointerEvents: 'none', opacity, mixBlendMode: 'overlay' }}>
      <svg width="100%" height="100%">
        <filter id="vs-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed} />
        </filter>
        <rect
          x={-offset.x}
          y={-offset.y}
          width="120%"
          height="120%"
          filter="url(#vs-grain)"
        />
      </svg>
    </AbsoluteFill>
  );
};
