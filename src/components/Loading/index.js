import React from 'react';

import { DotWrapper, Dot, Text } from './styles';

function LoadingDots() {
  return (
    <>
      <DotWrapper>
        <Text>Loading</Text>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </>
  );
}

export default LoadingDots;
