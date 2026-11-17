// The list of all Reels. Each <Composition> appears in Remotion Studio's sidebar.
import React from 'react';
import { Composition } from 'remotion';
import { reel } from './brand/theme';
import { BrandTest, BRAND_TEST_DURATION } from './reels/BrandTest/BrandTest';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BrandTest"
        component={BrandTest}
        durationInFrames={BRAND_TEST_DURATION}
        fps={reel.fps}
        width={reel.width}
        height={reel.height}
      />
    </>
  );
};
