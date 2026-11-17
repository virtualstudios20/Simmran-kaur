// Full-screen B-roll clip with slow cinematic push-in and optional dark overlay.
// Put your clips in public/broll/ and pass e.g. src="broll/city.mp4".
import React from 'react';
import { Video } from '@remotion/media';
import { AbsoluteFill, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { colors } from '../brand/theme';

type Props = {
  src: string;
  /** 0-1 strength of the black overlay (helps text readability) */
  dim?: number;
  /** How much to zoom over the clip (1.08 = 8% push-in) */
  zoomTo?: number;
  startFromSeconds?: number;
  muted?: boolean;
};

export const BRoll: React.FC<Props> = ({ src, dim = 0.35, zoomTo = 1.08, startFromSeconds = 0, muted = true }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [1, zoomTo]);
  return (
    <AbsoluteFill style={{ backgroundColor: colors.black }}>
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        <Video
          src={staticFile(src)}
          trimBefore={Math.round(startFromSeconds * fps)}
          muted={muted}
          objectFit="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: colors.black, opacity: dim }} />
    </AbsoluteFill>
  );
};
