// Brand test Reel (6 s @ 60 fps): verifies colours, Poppins, kinetic type,
// motion blur and transitions. Use it as a template for real Reels.
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { TransitionSeries, springTiming, linearTiming } from '@remotion/transitions';
import { slide } from '@remotion/transitions/slide';
import { CameraMotionBlur } from '@remotion/motion-blur';
import { colors, fonts, reel, springs } from '../../brand/theme';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { AccentBar } from '../../components/AccentBar';
import { Kicker } from '../../components/Kicker';
import { Grain } from '../../components/Grain';
import { redSweep } from '../../transitions/redSweep';

const Centered: React.FC<{ bg: string; children: React.ReactNode }> = ({ bg, children }) => (
  <AbsoluteFill
    style={{
      backgroundColor: bg,
      justifyContent: 'center',
      alignItems: 'center',
      padding: `${reel.safeArea.top}px ${reel.safeArea.side}px ${reel.safeArea.bottom}px`,
      gap: 40,
    }}
  >
    {children}
  </AbsoluteFill>
);

const SceneIntro: React.FC = () => (
  <Centered bg={colors.black}>
    <Kicker text="Virtual Studios presents" />
    <AnimatedTitle text="Stories That Move" highlight={['move']} fontSize={150} weight={900} delay={10} />
    <AccentBar delay={40} />
  </Centered>
);

const SceneStatement: React.FC = () => (
  <Centered bg={colors.white}>
    <AnimatedTitle
      text="Premium Reels. Cinematic Motion."
      color={colors.black}
      highlight={['cinematic']}
      fontSize={130}
      delay={6}
      stagger={6}
    />
  </Centered>
);

const SceneEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 4, fps, config: springs.bouncy });
  return (
    <Centered bg={colors.red}>
      <div
        style={{
          fontFamily: fonts.primary,
          fontWeight: 900,
          fontSize: 170,
          color: colors.white,
          lineHeight: 0.95,
          textAlign: 'center',
          transform: `scale(${interpolate(pop, [0, 1], [0.6, 1])})`,
          opacity: pop,
        }}
      >
        VIRTUAL
        <br />
        STUDIOS
      </div>
      <AccentBar color={colors.black} width={320} delay={18} />
      <Kicker text="Follow for more" delay={26} />
    </Centered>
  );
};

export const BrandTest: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.black }}>
      {/* Motion blur: blends sub-frames so fast moves look filmic */}
      <CameraMotionBlur shutterAngle={180} samples={6}>
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={140}>
            <SceneIntro />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition presentation={redSweep()} timing={linearTiming({ durationInFrames: 30 })} />
          <TransitionSeries.Sequence durationInFrames={130}>
            <SceneStatement />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={slide({ direction: 'from-bottom' })}
            timing={springTiming({ config: springs.smooth, durationInFrames: 28 })}
          />
          <TransitionSeries.Sequence durationInFrames={148}>
            <SceneEndCard />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </CameraMotionBlur>
      <Grain />
    </AbsoluteFill>
  );
};

// 140 + 130 + 148 - 30 - 28 = 360 frames = 6 s @ 60 fps
export const BRAND_TEST_DURATION = 360;
