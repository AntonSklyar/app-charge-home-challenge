import React from 'react';
import { Bundles } from '../../components';
import BackgroundImage from '../../components/BackgroundImage';
import {
  BackgroundPosition,
  BackgroundRepeat,
  BackgroundSize,
} from '../../components/BackgroundImage/BackgroundImage.types';

const Store = () => {
  const BACKGROUND_COVER = './assets/store-background.jpg';

  return (
    <BackgroundImage
      backgroundImage={BACKGROUND_COVER}
      backgroundPosition={BackgroundPosition.Center}
      backgroundSize={BackgroundSize.Cover}
      backgroundRepeat={BackgroundRepeat.NoRepeat}
      width="100vw"
      height="100vh"
    >
      <Bundles />
    </BackgroundImage>
  );
};

export default Store;
