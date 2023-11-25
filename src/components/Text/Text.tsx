import React from 'react';
import { StyledText } from './Text.styled';
import { IText } from './Text.types';

const Text = ({
  text,
  color,
  fontSize,
  fontWeight,
  strokeWidth,
  strokeColor,
  styles,
}: IText) => {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      styles={styles}
    >
      {text}
    </StyledText>
  );
};

export default Text;
