// Word-by-word kinetic typography: each word rises in with spring + blur.
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { colors, fonts, springs } from '../brand/theme';

type Props = {
  text: string;
  color?: string;
  highlightColor?: string;
  /** Words (case-insensitive) to paint in highlightColor */
  highlight?: string[];
  fontSize?: number;
  weight?: number;
  /** Frames between each word starting */
  stagger?: number;
  delay?: number;
};

export const AnimatedTitle: React.FC<Props> = ({
  text,
  color = colors.white,
  highlightColor = colors.red,
  highlight = [],
  fontSize = 120,
  weight = 800,
  stagger = 5,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(' ');
  const hl = highlight.map((w) => w.toLowerCase());

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: `0 ${fontSize * 0.28}px`,
        fontFamily: fonts.primary,
        fontWeight: weight,
        fontSize,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        textAlign: 'center',
      }}
    >
      {words.map((word, i) => {
        const p = spring({
          frame: frame - delay - i * stagger,
          fps,
          config: springs.snappy,
        });
        const y = interpolate(p, [0, 1], [fontSize * 0.9, 0]);
        const blur = interpolate(p, [0, 1], [12, 0], { extrapolateRight: 'clamp' });
        return (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block', paddingBottom: '0.08em' }}>
            <span
              style={{
                display: 'inline-block',
                transform: `translateY(${y}px)`,
                opacity: interpolate(p, [0, 0.4], [0, 1], { extrapolateRight: 'clamp' }),
                filter: `blur(${blur}px)`,
                color: hl.includes(word.toLowerCase().replace(/[^a-z0-9]/g, '')) ? highlightColor : color,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};
