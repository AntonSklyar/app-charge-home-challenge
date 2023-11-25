import React from 'react';
import { IBackgroundImage } from './BackgroundImage.types';
import { StyledBackgroundImage } from './BackgroundImage.styled';

const BackgroundImage = ({
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  width,
  height,
  styles,
  isBundleBackground,
  children,
}: IBackgroundImage) => {
  return (
    <StyledBackgroundImage
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      backgroundRepeat={backgroundRepeat}
      width={width}
      height={height}
      styles={styles}
      isBundleBackground={isBundleBackground}
    >
      {children}
    </StyledBackgroundImage>
  );
};

export default BackgroundImage;
