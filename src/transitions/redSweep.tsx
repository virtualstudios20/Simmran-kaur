// Custom brand transition: a red panel sweeps across the screen,
// hiding the outgoing scene and revealing the incoming one.
import React from 'react';
import { AbsoluteFill, interpolate, Easing } from 'remotion';
import type { TransitionPresentation, TransitionPresentationComponentProps } from '@remotion/transitions';
import { colors } from '../brand/theme';

type RedSweepProps = { color?: string };

const RedSweepPresentation: React.FC<TransitionPresentationComponentProps<RedSweepProps>> = ({
  children,
  presentationDirection,
  presentationProgress,
  passedProps,
}) => {
  const color = passedProps.color ?? colors.red;
  const ease = Easing.bezier(0.77, 0, 0.18, 1);
  // Panel covers screen during first half, uncovers during second half
  const coverX = interpolate(presentationProgress, [0, 0.5], [-100, 0], {
    extrapolateRight: 'clamp',
    easing: ease,
  });
  const uncoverX = interpolate(presentationProgress, [0.5, 1], [0, 100], {
    extrapolateLeft: 'clamp',
    easing: ease,
  });
  const panelX = presentationProgress < 0.5 ? coverX : uncoverX;

  const showScene =
    presentationDirection === 'exiting' ? presentationProgress < 0.5 : presentationProgress >= 0.5;

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: showScene ? 1 : 0 }}>{children}</AbsoluteFill>
      {presentationDirection === 'entering' ? (
        <AbsoluteFill
          style={{
            backgroundColor: color,
            transform: `translateX(${panelX}%) skewX(-8deg) scaleX(1.2)`,
          }}
        />
      ) : null}
    </AbsoluteFill>
  );
};

export const redSweep = (props: RedSweepProps = {}): TransitionPresentation<RedSweepProps> => ({
  component: RedSweepPresentation,
  props,
});
