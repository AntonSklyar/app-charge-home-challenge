import React from 'react';
import { StyledImageContainer, StyledImage } from './Image.styled';
import { IImage } from './Image.types';

const Image = ({
  imageSrc,
  imageDescription,
  width,
  height,
  styles,
}: IImage) => {
  return (
    <StyledImageContainer width={width} height={height} styles={styles}>
      <StyledImage src={imageSrc} alt={imageDescription} />
    </StyledImageContainer>
  );
};

export default Image;
