import React from 'react';

export interface IImageContainer {
  width?: string;
  height?: string;
  styles?: React.CSSProperties;
}

export interface IImage extends IImageContainer {
  imageSrc: string;
  imageDescription: string;
}
