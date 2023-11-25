import React from 'react';

export interface IStyledText {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  strokeWidth?: string;
  strokeColor?: string;
  styles?: React.CSSProperties;
}

export interface IText extends IStyledText {
  text: string;
}
